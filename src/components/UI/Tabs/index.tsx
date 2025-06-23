import { serachQueryState } from "@/store/searchQuery";
import { useState, ReactNode } from "react";
import { useRecoilValue } from "recoil";

export type Badge = {
  count: number;
};

export interface Tab {
  label: string;
  content: ReactNode;
  badge?: Badge;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveIndex?: number;
  disabled?: boolean;
  activeTab?: (tabNo: number) => void;
  onTabChange?: () => void;
}

export default function Tabs({
  tabs,
  defaultActiveIndex = 0,
  disabled = false,
  activeTab,
  onTabChange,
}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const searchQuery = useRecoilValue(serachQueryState);

  const handleTabChange = (tabIndex: number) => {
    if (disabled) return;

    if (activeIndex === tabIndex) return;

    setActiveIndex(tabIndex);
    if (activeTab) {
      activeTab(tabIndex);
    }

    if (onTabChange) {
      onTabChange();
    }
  };
  return (
    <div className="w-full mx-auto overflow-hidden rounded-lg">
      {searchQuery === "" && (
        <div className="flex bg-biege px-1.5 py-1.25 rounded-2xl relative">
          {tabs.map((tab: Tab, index) => (
            <div key={index} className="relative flex-1">
              <button
                className={`w-full text-center text-[1em] font-bold tracking-tight font-josefin transition-colors duration-200 py-3.5 rounded-[14px] ${
                  activeIndex === index ? "border-blue-500 bg-yellow" : ""
                }`}
                onClick={() => handleTabChange(index)}
              >
                {tab.label}
              </button>
              {tab.badge && tab.badge.count > 0 && activeIndex === index && (
                <div className="h-7 w-7 bg-red-dark border-2 border-white rounded-full grid place-content-center absolute -right-1.5 -top-1.5 z-50">
                  <span className="text-white font-josefin text-[.875em] font-bold leading-none">
                    {tab.badge.count}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="flex-1">{tabs[activeIndex].content}</div>
    </div>
  );
}
