export type I_PizzaType = {
  id: string;
  typeName: string;
  isShow: boolean;
};

export type I_PizzaSize = {
  id: string;
  size: number;
  price: number;
  weight: number;
  type: I_PizzaType[];
};

export type I_Pizza = {
  id: string;
  imageUrl: string;
  name: string;
  desc: string;
  sizes: I_PizzaSize[];
  price: number;
  category: string;
  rating: number;
  delivery: boolean;
};

export type I_PizzaDeliver = {
  id: string;
  extraId: number;
  img: string;
  name: string;
  size: number;
  type: string;
  price: number;
  count: number;
};
