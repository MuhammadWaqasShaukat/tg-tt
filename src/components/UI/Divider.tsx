const Divider: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return <div className={`h-[1px] bg-[#CEACA7] w-full ${className}`}></div>;
};

export default Divider;
