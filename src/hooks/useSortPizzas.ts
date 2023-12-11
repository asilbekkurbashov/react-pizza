import { I_Pizza } from "@/store/pizza/PizzaType";
import { sort } from "@/shared/data/data";
import { useAppSelector } from "./useRedux";

export const useSortPizzas = (data: I_Pizza[] | undefined) => {
  const { sortValue } = useAppSelector((state) => state.SortReducer);
  let sortPizzas;
  if (sort[0].name == sortValue) {
    sortPizzas = data && data.sort((a, b) => b.rating - a.rating);
  } else if (sort[1].name == sortValue) {
    sortPizzas = data && data.sort((a, b) => a.rating - b.rating);
  } else if (sort[2].name == sortValue) {
    sortPizzas = data && data.sort((a, b) => b.price - a.price);
  } else if (sort[3].name == sortValue) {
    sortPizzas = data && data.sort((a, b) => a.price - b.price);
  } else if (sort[4].name == sortValue) {
    sortPizzas = data && data.sort();
  } else if (sort[5].name == sortValue) {
    sortPizzas = data && data.reverse();
  } 

  return { sortPizzas };
};
