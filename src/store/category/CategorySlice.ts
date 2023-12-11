import {createSlice,PayloadAction} from '@reduxjs/toolkit'

const getCategory = ():string => {
    return localStorage.getItem('category') ? localStorage.getItem('category') as string : 'all'
}

interface I_State {
    categoryType: string
}

const initialState:I_State = {
    categoryType: getCategory(),
}

export const CategorySlice = createSlice({
    name:'CategorySlice',
    initialState,
    reducers:{
        setCategoryType(state , {payload}:PayloadAction<string>){
            localStorage.setItem('category', state.categoryType = payload)
        }
    }
})

export const {reducer: CategoryReducer} = CategorySlice
export const {actions: CategoryActions} = CategorySlice