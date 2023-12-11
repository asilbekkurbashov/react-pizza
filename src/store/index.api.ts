import { baseUrl } from "@shared/api/baseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { I_Pizza } from "./pizza/PizzaType";

export const rtkAPI = createApi({
  reducerPath: "rtkAPI",
  tagTypes:['pizzas'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    default: builder.query<I_Pizza[],void>({
      query: () => ({
        url: "/pizzas",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "pizzas" as const, id })),
              { type: "pizzas", id: "LIST" },
            ]
          : [{ type: "pizzas", id: "LIST" }],
    }),
  }),
});

export const {useDefaultQuery} = rtkAPI
