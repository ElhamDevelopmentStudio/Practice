import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CaseOverview, CasesOverview } from "./cases-overview";
import { Division, DivisionOverview } from "./division-overview";
import { ActivityLog, ActivityLogs } from "./activity-logs";
import { Member, MembersTable } from "./members-table";

export interface User {
  name: string;
  avatar: string;
}

interface DashboardProps {
  user: User;
  casesOverview: {
    cases: CaseOverview[];
    title: string;
    timeFrame: string;
  };
  divisionOverview: {
    divisions: Division[];
    title: string;
    seeAllText: string;
  };
  activityLogs: {
    logs: ActivityLog[];
    title: string;
    seeAllText: string;
  };
  membersTable: {
    members: Member[];
    title: string;
    viewAllText: string;
  };
}

export const Overview: React.FC<DashboardProps> = ({
  user,
  casesOverview,
  divisionOverview,
  activityLogs,
  membersTable,
}) => (
  <div className="p-6">
    <div className="flex items-center mb-6">
      <Avatar className="w-12 h-12 mr-4">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback>{user.name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-500">Welcome back to your workspace</p>
      </div>
    </div>
    <CasesOverview {...casesOverview} />
    <div className="grid grid-cols-2 gap-4">
      <DivisionOverview {...divisionOverview} />
      <ActivityLogs {...activityLogs} />
    </div>
    <MembersTable {...membersTable} />
  </div>
);
