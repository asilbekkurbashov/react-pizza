import FilterPizza from "@/App/components/filterPizza/FilterPizza";
import styles from "./Home.module.scss";
import { useDefaultQuery } from "../../store/index.api";
import ShowPizzas from "@/App/components/showPizzas/ShowPizzas";
import Paginaton from "@/App/components/pagination/Pagination";
import { useAppSelector } from "@/hooks/useRedux";
import { useGetPizzasForCategoryQuery } from "@/store/pizza/PizzaApi";
import Sort from "@/App/components/sort/Sort";
import { useResponsive } from "@/hooks/useResponsive";

function Home() {
  const { data, isLoading, isError } = useDefaultQuery();
  const { categoryType } = useAppSelector((state) => state.CategoryReducer);
  const { data: categoryPizza } = useGetPizzasForCategoryQuery(categoryType);
  const pizzas = categoryPizza?.length ? categoryPizza : data;
  const {isMobile} = useResponsive(954)

  return (
    <div className={styles.home}>
      <div className="container">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <h1>{isError}</h1>
        ) : (
          <>
            <FilterPizza />
            <div className={styles.home_title}>
              <h1>Все пиццы</h1>
              {isMobile && <Sort/>}
            </div>
            <ShowPizzas data={pizzas} />
            <Paginaton />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
