import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface AdminCardProps {
  title: string;
  organization: string;
  description: string;
  memberCount: number;
}

const AdminCard: React.FC<AdminCardProps> = ({
  title,
  organization,
  description,
  memberCount,
}) => {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="pt-6">
        <div className="flex items-center mb-2">
          <h3 className="text-lg font-semibold mr-2">{title}</h3>
          <div className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
            {organization}
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-2">
              {[...Array(5)].map((_, i) => (
                <Avatar key={i} className="w-6 h-6 border-2 border-white">
                  <AvatarImage src={`/api/placeholder/32/32`} />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-gray-500">+{memberCount}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-600 hover:text-blue-800"
          >
            View Details
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminCard;
