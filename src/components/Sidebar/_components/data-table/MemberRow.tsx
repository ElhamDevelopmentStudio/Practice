import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";

interface MemberRowProps {
  name: string;
  email: string;
  type: string;
  departments: string[];
  avatars: string[];
  additionalMembers: number;
}

export function MemberRow({
  name,
  email,
  type,
  departments,
  avatars,
  additionalMembers,
}: MemberRowProps) {
  return (
    <div className="grid grid-cols-5 gap-4 p-4 items-center border-b last:border-b-0">
      <div className="flex items-center space-x-4">
        <Checkbox />
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg" alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-muted-foreground">{email}</div>
        </div>
      </div>
      <div className="text-sm">{type}</div>
      <div className="flex flex-wrap gap-1">
        {departments.map((dept) => (
          <Badge key={dept} variant="secondary">
            {dept}
          </Badge>
        ))}
      </div>
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <Avatar key={index} className="h-8 w-8 border-2 border-background">
            <AvatarImage src={avatar} />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        ))}
        {additionalMembers > 0 && (
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground text-xs">
            +{additionalMembers}
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
