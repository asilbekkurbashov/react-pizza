import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface I_State {
    pageCount: number
}

const initialState:I_State = {
    pageCount: 1
}

export const FilterSlice = createSlice({
    name:'FilterSlice',
    initialState,
    reducers:{
        setPageCount(state, {payload}:PayloadAction<number>){
            state.pageCount = payload
        },
    }
})

export const {reducer: FilterReducer} = FilterSlice
export const {actions: FilterActions} = FilterSlice