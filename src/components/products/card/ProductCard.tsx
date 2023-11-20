import { Product } from "@/interfaces";

interface Props {
  product: Product;
  className?: string;
  children?: React.ReactNode;
}

export const ProductCard = ({ product, className, children }: Props) => {
  return (
    <div className={className}>
      { children }
    </div>
  );
};
