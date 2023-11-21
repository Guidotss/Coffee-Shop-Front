interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const ProductCard = ({ className, children }: Props) => {
  return (
    <div className={className}>
      { children }
    </div>
  );
};
