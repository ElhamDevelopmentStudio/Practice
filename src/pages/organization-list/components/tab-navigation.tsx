import React from "react";

interface TabNavigationProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex space-x-4 border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-2 px-1 ${
            activeTab === tab
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
          {tab === "Case" && (
            <span className="ml-1 bg-red-500 text-white rounded-full px-1.5 text-xs">
              2
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
