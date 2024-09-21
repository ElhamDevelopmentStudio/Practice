import React, { useState } from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <div className="flex">
      <Sidebar onToggle={handleSidebarToggle} />

      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarCollapsed ? "ml-60" : "ml-20"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
