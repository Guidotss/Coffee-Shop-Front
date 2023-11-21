import { ProductCard as ProductCardHOC } from './ProductCard'; 
import { ProductCardImage } from './ProductCardImage';
import { ProductCardTitle } from './ProductCardTitle'


export const ProductCard = Object.assign(ProductCardHOC, {
    Image: ProductCardImage,
    Title: ProductCardTitle,
});