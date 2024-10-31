import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export interface Division {
  name: string;
  members: number;
  additional: number;
}

interface DivisionOverviewProps {
  divisions: Division[];
  title: string;
  seeAllText: string;
}

export const DivisionOverview: React.FC<DivisionOverviewProps> = ({
  divisions,
  title,
  seeAllText,
}) => (
  <Card className="mb-4">
    <CardHeader className="flex justify-between items-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <Button variant="link" className="text-blue-500">
        {seeAllText} <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </CardHeader>
    <CardContent>
      {divisions.map((division) => (
        <div
          key={division.name}
          className="flex items-center justify-between mb-2"
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full mr-2" />
            <div>
              <p className="font-semibold">{division.name}</p>
              <p className="text-sm text-gray-500">
                {division.members} Members
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-2">
              {[...Array(3)].map((_, i) => (
                <Avatar key={i} className="w-6 h-6 border-2 border-white">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              +{division.additional}
            </span>
          </div>
          <Button variant="link" className="text-blue-500">
            View details
          </Button>
        </div>
      ))}
    </CardContent>
  </Card>
);
