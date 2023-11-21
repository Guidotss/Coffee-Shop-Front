"use client";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  children?: React.ReactNode;
  navigateTo: string;
}

export const ProductCard = ({ className, children, navigateTo }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(navigateTo);
  };
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};
