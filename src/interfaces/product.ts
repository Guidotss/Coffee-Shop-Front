export interface Product {
  id?: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: string;
  imagelink_portrait: string;
  ingredients: string;
  special_ingredient: string;
  prices: Price[];
  average_rating: number;
  ratings_count: number;
  favourite: boolean;
  type: string;
}

export interface Price {
  size: string;
  price: number;
  currency: string;
}
