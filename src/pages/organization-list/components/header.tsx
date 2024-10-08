import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { ArrowLeft, MoreHorizontal, Edit2 } from "lucide-react";

interface HeaderProps {
  title: string;
  organizationName: string;
  phoneNumber: string;
  date: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  organizationName,
  phoneNumber,
  date,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <ArrowLeft className="mr-2 w-4 h-4" />
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Avatar className="w-10 h-10 mr-3 bg-green-500">
            <span className="text-white font-semibold">AAH</span>
          </Avatar>
          <div>
            <h2 className="text-base font-semibold">{organizationName}</h2>
            <p className="text-xs text-gray-500">
              {phoneNumber} · {date}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button size="sm" className="text-xs">
            <Edit2 className="w-3 h-3 mr-1" />
            Edit Organization
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
