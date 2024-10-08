import React from "react";
import { Settings, ChevronRight } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="p-4 flex items-center space-x-2 text-sm text-gray-600">
      <Settings className="w-5 h-5" />
      <span>ADMINS</span>
      <ChevronRight className="w-4 h-4" />
      <span>...</span>
      <ChevronRight className="w-4 h-4" />
    </header>
  );
};

export default Header;
