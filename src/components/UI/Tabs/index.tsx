import { useState, ReactNode } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveIndex?: number;
}

export default function Tabs({ tabs, defaultActiveIndex = 0 }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden">
      <div className="flex bg-biege px-1.5 py-1.25 rounded-2xl">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 text-center text-base font-bold tracking-tight font-josefin transition-colors duration-200 py-3.5 rounded-[14px]  ${
              activeIndex === index ? "border-blue-500  bg-yellow " : " "
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-2">{tabs[activeIndex].content}</div>
    </div>
  );
}
