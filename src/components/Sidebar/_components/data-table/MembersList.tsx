import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { MemberRow } from "./MemberRow";

export default function MembersList() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Members</h1>
      <p className="text-muted-foreground mb-4">
        Display all the team members and essential details.
      </p>

      <div className="flex justify-between mb-6">
        <Input className="max-w-sm" placeholder="Search..." />
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="bg-background rounded-lg shadow">
        <div className="grid grid-cols-5 gap-4 p-4 border-b text-sm font-medium text-muted-foreground">
          <div>Member Name</div>
          <div>Type</div>
          <div>Departments</div>
          <div>Members</div>
          <div></div>
        </div>
        <MemberRow
          name="IMC"
          email="awecint@yahoo.org"
          type="livelihood, protection, WASH,asdgasf ,asdfa,sdg, a..."
          departments={["Kabul", "Mazar", "Herat"]}
          avatars={["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]}
          additionalMembers={4}
        />
      </div>
    </div>
  );
}
