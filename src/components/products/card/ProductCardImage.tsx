import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export const ProductCardImage = ({ src, alt }: Props) => {
  return (
    <Image
      className="shadow-lg object-cover rounded-t-lg hover:opacity-80 transition-opacity duration-300 ease-in-out"
      src={src}
      alt={alt}
      width={200}
      height={200}
      priority
    />
  );
};
