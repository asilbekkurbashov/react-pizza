import styles from "./ShowPizzas.module.scss";
import { I_Pizza } from "@/store/pizza/PizzaType";
import PizzaItem from "./pizzaItem/PizzaItem";
import { usePaginationCount } from "@/hooks/usePaginationCount";
import { useSortPizzas } from "@/hooks/useSortPizzas";
import { useAppSelector } from "@/hooks/useRedux";
import { useDebounce } from "@/hooks/useDebounce";

interface I_Props {
  data: I_Pizza[] | undefined;
}

function ShowPizzas(props: I_Props) {
  const { data } = props;
  const { search } = useAppSelector((state) => state.PizzaReducer);
  const { records } = usePaginationCount(data);
  const { sortPizzas } = useSortPizzas(records);
  const debounce = useDebounce(search)?.toLowerCase();
  const searchPizza = sortPizzas?.filter((item) =>
    item.name.toLocaleLowerCase().includes(`${debounce}`)
  );
  const pizzas = debounce ? searchPizza : sortPizzas;

  return (
    <div className={`${styles.show_pizzas} , ${pizzas && pizzas.length < 4 ? styles.grid : '' }`}>
      {pizzas &&
        pizzas.map((elem) => <PizzaItem key={elem.id} pizza={elem} />)}
    </div>
  );
}

export default ShowPizzas;
