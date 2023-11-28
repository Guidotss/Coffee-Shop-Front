interface Props {
  name: string;
  description: string;
}
export const ProductData = ({ name, description }: Props) => {
  return (
    <>
      <div className="absolute md:relative flex items-center justify-center h-16 w-full md:justify-start md:items-start bg-transparent bg-opacity-60 -mt-20 md:mt-0 backdrop-blur-lg md:backdrop-blur-0">
        <h1 className="text-white text-xl lg:text-4xl font-semibold">{name}</h1>
      </div>
      <div className="flex items-center justify-center  mt-5 px-2 md:px-0 md:mt-0">
        <p className="text-white text-md md:text-lg">
          {description.replace("`", "")}
        </p>
      </div>
    </>
  );
};
