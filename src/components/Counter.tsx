import { useRecoilState } from "recoil";
import { counterState } from "../store/count";

const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterState);

  return (
    <div className="flex flex-row items-center justify-start w-full gap-2">
      <button
        className="grid  place-content-center border-2 border-[#FEC94A] bg-transparent rounded-xl w-[15.45vw] h-[7.14vh]  aspect-square"
        onClick={() => {
          setCounter((prev) => prev - 1);
        }}
      >
        <span className=" text-[4em] leading-none">-</span>
      </button>
      <div className="text-[3em] rounded-xl border border-[#8B5556] bg-transparent flex-1 h-[7.14vh] text-center">
        <span className=" text-[1.1em] ">{counter}</span>
      </div>
      <button className="grid  place-content-center border-2 border-[#FEC94A] bg-transparent rounded-xl w-[15.45vw] h-[7.14vh] aspect-square">
        <span
          className=" text-[4em] leading-none"
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
        >
          +
        </span>
      </button>
    </div>
  );
};

export default Counter;
