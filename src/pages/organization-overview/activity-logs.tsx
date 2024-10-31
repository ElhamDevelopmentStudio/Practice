import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export interface ActivityLog {
  name: string;
  avatar: string;
  action: string;
  time: string;
}

interface ActivityLogsProps {
  logs: ActivityLog[];
  title: string;
  seeAllText: string;
}

export const ActivityLogs: React.FC<ActivityLogsProps> = ({
  logs,
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
      {logs.map((log, index) => (
        <div key={index} className="flex items-center mb-2">
          <Avatar className="w-8 h-8 mr-2">
            <AvatarImage src={log.avatar} alt={log.name} />
            <AvatarFallback>{log.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{log.name}</p>
            <p className="text-sm text-gray-500">{log.action}</p>
          </div>
          <span className="ml-auto text-sm text-gray-500">{log.time}</span>
        </div>
      ))}
    </CardContent>
  </Card>
);
