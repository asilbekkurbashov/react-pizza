import { configureStore } from '@reduxjs/toolkit'
import { rtkAPI } from './index.api'
import { setupListeners } from '@reduxjs/toolkit/query'
import {FilterReducer} from './pageCount/PageCount'
import {CategoryReducer} from './category/CategorySlice'
import {PizzaReducer} from './pizza/PizzaSlice'
import {SortReducer} from './sort/SortSlice'

export const store = configureStore({
  reducer: {
    FilterReducer,
    CategoryReducer,
    PizzaReducer,
    SortReducer,
    [rtkAPI.reducerPath]: rtkAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkAPI.middleware) 
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch