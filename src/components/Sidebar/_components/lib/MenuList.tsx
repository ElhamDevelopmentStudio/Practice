import {
    Users,
    Settings,
    LucideIcon,
    User,
    Newspaper,
    Building2,
    PieChart,
    Mail,
    Lock,
    LayoutDashboard
  } from "lucide-react";
  
  type MenuItem = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon;
    submenus?: {
      href: string;
      label: string;
      active?: boolean;
    }[];
  };
  
  export function getMenuList(pathname: string): MenuItem[] {
    return [
      {
        href: "/dashboard",
        label: "Dashboard",
        active: pathname.includes("/dashboard"),
        icon: LayoutDashboard,
      },
      {
        href: "",
        label: "Users Management",
        active: pathname.includes("/posts"),
        icon: User,

      },
      {
        href: "",
        label: "Case Management",
        active: pathname.includes("/categories"),
        icon: Newspaper,
      },
      {
        href: "",
        label: "NGO's and Partners",
        active: pathname.includes("/tags"),
        icon: Building2,
      },
      {
        href: "",
        label: "Reports and Analytics",
        active: pathname.includes("/users"),
        icon: PieChart,
      },
      {
        href: "",
        label: "Messaging",
        active: pathname.includes("/account"),
        icon: Mail,
      },
      {
        href: "",
        label: "Decision Board",
        active: pathname.includes("/account"),
        icon: Users,
      },
      {
        href: "",
        label: "Roles & Permissions",
        active: pathname.includes("/account"),
        icon: Lock,
      },
      {
        href: "",
        label: "System Settings",
        active: pathname.includes("/account"),
        icon: Settings,
      },
    ];
  }
  