import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface PermissionCardProps {
  title: string;
  description: string;
  isActive: boolean;
  onToggle: () => void;
}

const PermissionCard: React.FC<PermissionCardProps> = ({
  title,
  description,
  isActive,
  onToggle,
}) => {
  return (
    <Card
      className={`border ${isActive ? "border-blue-500" : "border-gray-200"}`}
    >
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-sm">{title}</h3>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
        <Switch checked={isActive} onCheckedChange={onToggle} />
      </CardContent>
    </Card>
  );
};

export default PermissionCard;
