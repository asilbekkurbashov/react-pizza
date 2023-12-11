import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const getSort = ():string => {
    return localStorage.getItem('sort') ? localStorage.getItem('sort') as string : 'популярности (DESC)'
}

interface I_State {
    sortValue: string
}

const initialState:I_State = {
    sortValue: getSort()
}

export const SortSlice = createSlice({
    name:'SortSlice',
    initialState,
    reducers:{
        setSort(state, {payload}:PayloadAction<string>){
            localStorage.setItem('sort', state.sortValue = payload)
        }
    }
})

export const {reducer: SortReducer} = SortSlice
export const {actions: SortActions} = SortSlice