import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight, Edit, Trash } from "lucide-react";

export interface Member {
  name: string;
  email: string;
  avatar: string;
  position: string;
  contactNumber: string;
  role: string;
  lastActivity: string;
  status: string;
}

interface MembersTableProps {
  members: Member[];
  title: string;
  viewAllText: string;
}

export const MembersTable: React.FC<MembersTableProps> = ({
  members,
  title,
  viewAllText,
}) => (
  <Card>
    <CardHeader className="flex justify-between items-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <Button variant="link" className="text-blue-500">
        {viewAllText} <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </CardHeader>
    <CardContent>
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500">
            <th>File Name</th>
            <th>Position</th>
            <th>Contact Number</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.email} className="border-t">
              <td className="py-2">
                <div className="flex items-center">
                  <Avatar className="w-8 h-8 mr-2">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.email}</p>
                  </div>
                </div>
              </td>
              <td>{member.position}</td>
              <td>{member.contactNumber}</td>
              <td>{member.role}</td>
              <td>{member.lastActivity}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    member.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : member.status === "In Review"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {member.status}
                </span>
              </td>
              <td>
                <Button variant="ghost" size="icon">
                  <Trash className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardContent>
  </Card>
);
