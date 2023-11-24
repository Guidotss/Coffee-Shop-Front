interface Props {
  title: string;
}
export const ProductCardTitle = ({ title }: Props) => {
  return (
    <div className="absolute flex justify-center items-center w-[200px] h-[72px] md:w-44 md:h-16 mt-52 md:mt-44 2xl:w-[200px] 2xl:mt-[13.5rem] bg-black bg-opacity-70">
      <h1 className="text-white text-xl">{title}</h1>
    </div>
  );
};
