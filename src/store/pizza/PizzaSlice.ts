import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { I_Pizza, I_PizzaDeliver } from "./PizzaType";

const getFavourite = (): I_Pizza[] => {
  return localStorage.getItem("favourite")
    ? JSON.parse(localStorage.getItem("favourite") as any)
    : [];
};

const getDeliver = (): I_PizzaDeliver[] => {
  return localStorage.getItem("deliver")
    ? JSON.parse(localStorage.getItem("deliver") as any)
    : [];
};

interface I_State {
  favourite: I_Pizza[];
  deliver: I_PizzaDeliver[];
  modal: boolean;
  pizzaModal: I_Pizza | null;
  search: string;
}

const initialState: I_State = {
  favourite: getFavourite(),
  deliver: getDeliver(),
  modal: false,
  pizzaModal: null,
  search: ''
};

const PizzaSlice = createSlice({
  name: "PizzaSlice",
  initialState,
  reducers: {
    setAddFavourite(state, { payload }: PayloadAction<I_Pizza>) {
      localStorage.setItem(
        "favourite",
        JSON.stringify((state.favourite = [...state.favourite, payload]))
      );
    },
    setRemoveFavourite(state, { payload }: PayloadAction<string>) {
      localStorage.setItem(
        "favourite",
        JSON.stringify(
          (state.favourite = state.favourite.filter(
            (elem) => elem.id !== payload
          ))
        )
      );
    },
    setClearFavourite(state) {
      localStorage.setItem("favourite", JSON.stringify((state.favourite = [])));
    },

    setAddDeliver(state, { payload }: PayloadAction<I_PizzaDeliver>) {
      const findPizza = state.deliver.find(
        (prev) =>
          prev.name === payload.name &&
          prev.size === payload.size &&
          prev.type === payload.type
      );
      if (findPizza) {
        findPizza.count++;
        localStorage.setItem(
          "deliver",
          JSON.stringify((state.deliver = [...state.deliver]))
        );
      } else {
        localStorage.setItem(
          "deliver",
          JSON.stringify((state.deliver = [...state.deliver, payload]))
        );
      }
    },
    setRemoveDeliver(state, { payload }: PayloadAction<I_PizzaDeliver>) {
      const newDeliver = state.deliver.filter(
        (prev) =>
          prev.extraId !== payload.extraId
      );
      localStorage.setItem(
        "deliver",
        JSON.stringify((state.deliver = newDeliver))
      );
    },
    setClearDeliver(state) {
      localStorage.setItem("favourite", JSON.stringify((state.deliver = [])));
    },
    setPlusDeliver(state, { payload }: PayloadAction<number>) {
      const findPizza = state.deliver.find((prev) => prev.extraId === payload);
      if (findPizza) {
        findPizza.count++;
      }
      localStorage.setItem(
        "deliver",
        JSON.stringify((state.deliver = [...state.deliver]))
      );
    },
    setMinusDeliver(state, { payload }: PayloadAction<number>) {
      const findPizza = state.deliver.find((prev) => prev.extraId === payload);
      if (findPizza) {
        findPizza.count--;
      }
      localStorage.setItem(
        "deliver",
        JSON.stringify((state.deliver = [...state.deliver]))
      );
    },

    setModal(state, { payload }: PayloadAction<boolean>) {
      state.modal = payload;
    },
    setPizzaModal(state, { payload }: PayloadAction<I_Pizza | null>) {
      state.pizzaModal = payload;
    },

    setSearch(state, {payload}:PayloadAction<string>){
      state.search = payload
    }
  },
});

export const { reducer: PizzaReducer } = PizzaSlice;
export const { actions: PizzaActions } = PizzaSlice;
