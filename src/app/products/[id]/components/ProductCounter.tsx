interface Props {
  counter: number;
  decrement: () => void;
  increment: () => void;
}
export const ProductCounter = ({ counter, increment, decrement }: Props) => {
  return (
    <div className="w-full flex items-center justify-center gap-x-24 mt-10">
      <button
        className="text-2xl text-white bg-primary_orange w-16 h-10  rounded-lg border-none outline-none hover:bg-opacity-80 transition-all duration-300 ease-in-out"
        onClick={decrement}
      >
        -
      </button>
      <span className="text-2xl md:text-3xl text-white w-7 text-center">
        {counter}
      </span>
      <button
        className="text-2xl text-white bg-primary_orange w-16 h-10 rounded-lg border-none outline-none hover:bg-opacity-80 transition-all duration-300 ease-in-out"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
