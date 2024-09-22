import { Button } from "@/components/ui/button";
import {
  Calendar,
  CheckSquare,
  PenTool,
  Bookmark,
  Users,
  Heart,
  BarChart2,
  PieChart,
  PhoneCall,
  Key,
  Store,
  Utensils,
  Calculator,
  FileText,
  Briefcase,
  Clock,
  Zap,
  CalendarRange,
  HelpCircle,
  Globe,
  Mail,
  Tent,
  CreditCard,
  Box,
  Factory,
  Hammer,
  Barcode,
  PenLine,
  UserCircle,
  MessageCircleCodeIcon,
} from "lucide-react";
import { Navbar } from "./DashboardNavbar";

export default function Component() {
  const apps = [
    { icon: MessageCircleCodeIcon, name: "Discuss", color: "text-orange-500" },
    { icon: Calendar, name: "Calendar", color: "text-orange-500" },
    { icon: CheckSquare, name: "Appointments", color: "text-teal-500" },
    { icon: PenTool, name: "To-do", color: "text-teal-700" },
    { icon: Bookmark, name: "Knowledge", color: "text-teal-500" },
    { icon: Users, name: "Contacts", color: "text-teal-700" },
    { icon: Heart, name: "CRM", color: "text-teal-500" },
    { icon: BarChart2, name: "Sales", color: "text-purple-500" },
    { icon: PieChart, name: "Dashboards", color: "text-purple-500" },
    { icon: PhoneCall, name: "Subscriptions", color: "text-orange-500" },
    { icon: Key, name: "Rental", color: "text-purple-500" },
    { icon: Store, name: "Point of Sale", color: "text-purple-500" },
    { icon: Utensils, name: "Kitchen Display", color: "text-orange-500" },
    { icon: Calculator, name: "Accounting", color: "text-purple-500" },
    { icon: FileText, name: "Documents", color: "text-blue-500" },
    { icon: Briefcase, name: "Project", color: "text-purple-500" },
    { icon: Clock, name: "Timesheets", color: "text-blue-500" },
    { icon: Zap, name: "Field Service", color: "text-orange-500" },
    { icon: CalendarRange, name: "Planning", color: "text-teal-500" },
    { icon: HelpCircle, name: "Helpdesk", color: "text-teal-500" },
    { icon: Globe, name: "Website", color: "text-blue-500" },
    { icon: Mail, name: "Email Marketing", color: "text-blue-500" },
    { icon: Tent, name: "Events", color: "text-orange-500" },
    { icon: CreditCard, name: "Purchase", color: "text-purple-500" },
    { icon: Box, name: "Inventory", color: "text-orange-500" },
    { icon: Factory, name: "Manufacturing", color: "text-teal-500" },
    { icon: Hammer, name: "Shop Floor", color: "text-blue-500" },
    { icon: Barcode, name: "Barcode", color: "text-purple-500" },
    { icon: PenLine, name: "Sign", color: "text-teal-700" },
    { icon: UserCircle, name: "Employees", color: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-purple-100 p-8">
      <Navbar />
      <main className="grid grid-cols-6 gap-4">
        {apps.map((app, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-24 flex flex-col items-center justify-center bg-white"
          >
            <app.icon className={`h-8 w-8 ${app.color}`} />
            <span className="mt-2 text-xs">{app.name}</span>
          </Button>
        ))}
      </main>
    </div>
  );
}
