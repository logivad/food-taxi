export interface Restaurant {
  id: string;
  name: string;
  menu: Array<string>;
  reviews: Array<string>;
}

export interface Menu {
  id: string;
  name: string;
  price: number;
  ingredients: Array<string>;
}

export interface Review {
  id: string;
  user: string;
  text: string;
  rating: number;
}

export interface Dish {
  id: string;
  name: string;
  price: number;
  ingredients: Array<string>;
}
