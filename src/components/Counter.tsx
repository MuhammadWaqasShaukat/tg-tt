import { counterState } from "@/store/count";
import { userState } from "@/store/User";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface CounterProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  counterType: "buying" | "using";
  pricePerItem?: number;
}

const Counter: React.FC<CounterProps> = ({
  min = 0,
  max = 10,
  step = 1,
  onChange,
  counterType,
  pricePerItem = 1,
}) => {
  const [counter, setCounter] = useRecoilState(counterState);
  const user = useRecoilValue(userState);

  const [minCounter, setMinCounter] = useState(min);
  const [maxCounter, setMaxCounter] = useState(max);

  useEffect(() => {
    if (counterType === "buying" && user) {
      const _maxCounter = Math.floor(user.tokens / pricePerItem);
      setMaxCounter(Math.min(_maxCounter));

      if (_maxCounter <= 0) {
        setMinCounter(0);
      } else {
        if (counter < minCounter) setCounter(minCounter);
      }
    } else {
      setMaxCounter(max);
    }
  }, [user?.tokens, pricePerItem, counterType, max]);

  useEffect(() => {
    if (counterType === "using") {
      if (counter < minCounter) setCounter(minCounter);
      if (counter > maxCounter) setCounter(maxCounter);
    }
  }, [minCounter, maxCounter, counter]);

  const updateCounter = (newValue: number) => {
    if (newValue >= min && newValue <= maxCounter) {
      setCounter(newValue);
      if (onChange) onChange(newValue);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center w-full gap-2">
      <button
        disabled={counter <= minCounter}
        className="grid place-content-center border-2 border-[#FEC94A] bg-transparent rounded-xl w-[15.45vw] aspect-square max-w-16 disabled:opacity-30"
        onClick={() => updateCounter(counter - step)}
      >
        <span className="text-[2.5em] leading-none">-</span>
      </button>

      <div
        className={`rounded-xl border border-[#8B5556] bg-transparent flex-1 h-[15.45vw] text-center flex flex-col justify-center items-center max-h-16 sm:max-w-[200px] ${
          max === 0 ? "opacity-40" : "opacity-100"
        }`}
      >
        <span className="text-[1.5em]">{counter}</span>
      </div>

      <button
        disabled={counter >= maxCounter}
        className="grid place-content-center border-2 border-[#FEC94A] bg-transparent rounded-xl w-[15.45vw] aspect-square max-w-16 disabled:opacity-30"
        onClick={() => updateCounter(counter + step)}
      >
        <span className="text-[2.5em] leading-none">+</span>
      </button>
    </div>
  );
};

export default Counter;
