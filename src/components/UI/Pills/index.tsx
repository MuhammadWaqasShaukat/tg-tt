import { PillProps } from "@/types/Pill.t";

const Pill: React.FC<PillProps> = ({ pilltext, className, children }) => {
  return (
    <div
      className={`px-2 bg-white rounded-xl text-light-brown text-[1em]  ${className}`}
    >
      {!children ? <span className={``}>{pilltext}</span> : children}
    </div>
  );
};

export default Pill;
