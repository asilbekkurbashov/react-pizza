import { useAppSelector } from "./useRedux";
import { I_Pizza } from "@/store/pizza/PizzaType";

export const usePaginationCount = (data: I_Pizza[] | undefined) => {
  const { pageCount } = useAppSelector((state) => state.FilterReducer);
  const maxCountPizzas = 4;
  const lastIndex = pageCount * maxCountPizzas;
  const firstIndex = lastIndex - maxCountPizzas;
  const records = data?.slice(firstIndex, lastIndex);
  return {records};
};