import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BarChart2,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface NavItem {
  icon: React.ElementType;
  path: string;
  label: string;
}

interface SidebarProps {
  onToggle: (collapsed: boolean) => void;
}

const navItems: NavItem[] = [
  { icon: Home, path: "/dashboard", label: "Home" },
  { icon: BarChart2, path: "/dashboard/analytics", label: "Analytics" },
  { icon: Users, path: "/dashboard/users", label: "Users" },
  { icon: Settings, path: "/dashboard/settings", label: "Settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    onToggle(!isExpanded);
  };

  return (
    <motion.nav
      initial={false}
      animate={{ width: isExpanded ? 240 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-gray-900 text-gray-300 h-screen fixed left-0 top-0 overflow-hidden z-50"
    >
      <div className="flex justify-end p-4">
        <button
          onClick={handleToggle}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
        >
          {isExpanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>

      <ul className="space-y-2 mt-4">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-l-full transition-colors duration-200 ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800"
              }`}
            >
              <item.icon className="w-6 h-6 flex-shrink-0" />
              <motion.span
                initial={false}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  width: isExpanded ? "auto" : 0,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="font-medium ml-4 whitespace-nowrap overflow-hidden"
              >
                {item.label}
              </motion.span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Sidebar;
