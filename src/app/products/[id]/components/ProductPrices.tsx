import { Price } from "@/interfaces";

interface Props {
  size: { size: string; isSelect: boolean }[];
  prices: Price[];
  handleChangeSize: (i: number) => void;
}

export const ProductPrices = ({ prices, size, handleChangeSize }: Props) => {
  return (
    <div className="flex items-center justify-center gap-x-[90px] mt-10">
      {prices.map((price, i) => (
        <div
          key={Math.random()}
          className={`flex flex-col items-center justify-center gap-2 bg-primary_orange ${
            size[i].isSelect ? "opacity-40" : "opacity-100 hover:opacity-80"
          } w-14 h-14 rounded-md cursor-pointer  transition-opacity duration-300 ease-in-out`}
          onClick={() => handleChangeSize(i)}
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
