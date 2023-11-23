import { Price } from "@/interfaces";

interface Props {
  prices: Price[];
}
export const ProductPrices = ({ prices }: Props) => {
  return (
    <div className="flex items-center justify-center gap-16 mt-10">
      {prices.map((price) => (
        <div
          key={Math.random()}
          className="flex flex-col items-center justify-center gap-2 bg-primary_orange w-14 h-14 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-white text-xl lg:text-2xl font-semibold">
              {price.size}
            </h1>

            <div className="text-white">
              <span>{price.currency}</span>
              <span>{price.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
