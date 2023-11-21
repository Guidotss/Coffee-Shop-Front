interface Props {
  title: string;
}
export const ProductCardTitle = ({ title }: Props) => {
  return (
    <div className="absolute flex justify-center items-center w-[200px] h-[72px] mt-52 bg-black bg-opacity-70">
      <h1 className="text-white text-xl">{title}</h1>
    </div>
  );
};
