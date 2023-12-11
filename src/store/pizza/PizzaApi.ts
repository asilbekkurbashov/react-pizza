import { rtkAPI } from "../index.api";
import { I_Pizza } from "./PizzaType";

export const PizzaApi = rtkAPI.injectEndpoints({
    endpoints: (builder) => ({
        getPizzasForCategory: builder.query<I_Pizza[], string | null>({
            query:(value) => ({
                url:`/pizzas/?category=${value}`,
                method: 'GET'
            }),
            providesTags: ['pizzas']
        })
    })
})

export const {useGetPizzasForCategoryQuery} = PizzaApi