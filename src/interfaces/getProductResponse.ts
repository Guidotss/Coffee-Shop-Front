import { Product } from ".";

export interface GetProductResponse {
  ok: boolean;
  message: string;
  data: Product;
}
