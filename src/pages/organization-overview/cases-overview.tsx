import { Card, CardContent, CardHeader } from "@/components/ui/card";

export interface CaseOverview {
  status: string;
  count: number;
}

interface CasesOverviewProps {
  cases: CaseOverview[];
  title: string;
  timeFrame: string;
}

export const CasesOverview: React.FC<CasesOverviewProps> = ({
  cases,
  title,
  timeFrame,
}) => (
  <Card className="mb-4">
    <CardHeader className="flex justify-between items-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <select className="text-sm">
        <option>{timeFrame}</option>
      </select>
    </CardHeader>
    <CardContent className="flex justify-between">
      {cases.map(({ status, count }) => (
        <div key={status} className="text-center">
          <p className="text-sm uppercase">{status}</p>
          <p className="text-2xl font-bold">{count}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);
