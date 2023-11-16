import { Product } from ".";

export interface GetAllProductsResponse {
  ok: boolean;
  message: string;
  data: Product[];
}
