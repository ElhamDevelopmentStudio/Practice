import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { AreaChart, BarChart, DonutChart } from "@tremor/react";
import { Grid, Text, Metric, Flex } from "@tremor/react";
import { Chart as ChartJS } from "chart.js";
import { registerables } from "chart.js";
ChartJS.register(...registerables);
import DashboardLayout from "./DashboardLayout";

// interface AnalyticsData {
//   dailyVisits: number[];
//   conversionRates: number[];
//   topProducts: { name: string; sales: number }[];
//   revenueByCategory: { category: string; revenue: number }[];
// }

const staticData = {
  dailyVisits: [120, 150, 180, 200, 170, 190, 210],
  conversionRates: [2.5, 2.7, 3.0, 3.2, 2.8, 3.1, 3.3],
  topProducts: [
    { name: "Product A", sales: 150 },
    { name: "Product B", sales: 120 },
    { name: "Product C", sales: 100 },
    { name: "Product D", sales: 80 },
    { name: "Product E", sales: 60 },
  ],
  revenueByCategory: [
    { category: "Electronics", revenue: 5000 },
    { category: "Clothing", revenue: 3500 },
    { category: "Books", revenue: 2000 },
    { category: "Home & Garden", revenue: 1500 },
    { category: "Toys", revenue: 1000 },
  ],
};

const Analytics: React.FC = () => {
  // const [data, setData] = useState<AnalyticsData | null>(null);
  const [data, setData] = useState(staticData);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("7d");

  useEffect(() => {
    fetchData();
  }, [timeRange]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/analytics?timeRange=${timeRange}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="mr-2 h-16 w-16 animate-spin" />
      </div>
    );
  }

  if (!data) {
    return <div>Error loading analytics data.</div>;
  }

  const { dailyVisits, conversionRates, topProducts, revenueByCategory } = data;

  const visitsChartData = {
    labels: Array.from(
      { length: dailyVisits.length },
      (_, i) => `Day ${i + 1}`
    ),
    datasets: [
      {
        label: "Daily Visits",
        data: dailyVisits,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const conversionChartData = {
    labels: Array.from(
      { length: conversionRates.length },
      (_, i) => `Day ${i + 1}`
    ),
    datasets: [
      {
        label: "Conversion Rate",
        data: conversionRates,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  // const topProductsChartData = {
  //   labels: topProducts.map((product) => product.name),
  //   datasets: [
  //     {
  //       label: "Sales",
  //       data: topProducts.map((product) => product.sales),
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.6)",
  //         "rgba(54, 162, 235, 0.6)",
  //         "rgba(255, 206, 86, 0.6)",
  //         "rgba(75, 192, 192, 0.6)",
  //         "rgba(153, 102, 255, 0.6)",
  //       ],
  //     },
  //   ],
  // };

  // const revenueByCategoryChartData = {
  //   labels: revenueByCategory.map((item) => item.category),
  //   datasets: [
  //     {
  //       label: "Revenue",
  //       data: revenueByCategory.map((item) => item.revenue),
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.6)",
  //         "rgba(54, 162, 235, 0.6)",
  //         "rgba(255, 206, 86, 0.6)",
  //         "rgba(75, 192, 192, 0.6)",
  //         "rgba(153, 102, 255, 0.6)",
  //       ],
  //     },
  //   ],
  // };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
        <Flex justifyContent="between" alignItems="center">
          <Text className="text-3xl font-bold">Analytics Dashboard</Text>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </Flex>

        <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6">
          <Card>
            <CardContent className="p-4">
              <Text>Total Visits</Text>
              <Metric>{dailyVisits.reduce((a, b) => a + b, 0)}</Metric>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Text>Avg. Conversion Rate</Text>
              <Metric>
                {(
                  conversionRates.reduce((a, b) => a + b, 0) /
                  conversionRates.length
                ).toFixed(2)}
                %
              </Metric>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Text>Top Product</Text>
              <Metric>{topProducts[0].name}</Metric>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Text>Total Revenue</Text>
              <Metric>
                $
                {revenueByCategory
                  .reduce((a, b) => a + b.revenue, 0)
                  .toLocaleString()}
              </Metric>
            </CardContent>
          </Card>
        </Grid>

        <Grid numItems={1} numItemsLg={2} className="gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Visits</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChart
                data={visitsChartData.labels.map((date, index) => ({
                  date,
                  "Conversion Rate": visitsChartData.datasets[0].data[index],
                }))}
                index="date"
                categories={["Visits"]}
                colors={["blue"]}
                showLegend={false}
                showYAxis={false}
                showGradient={true}
                startEndOnly={true}
                className="h-72 mt-4"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conversion Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChart
                data={conversionChartData.labels.map((date, index) => ({
                  date,
                  "Conversion Rate":
                    conversionChartData.datasets[0].data[index],
                }))}
                index="date"
                categories={["Conversion Rate"]}
                colors={["green"]}
                showLegend={false}
                showYAxis={false}
                showGradient={true}
                startEndOnly={true}
                className="h-72 mt-4"
              />
            </CardContent>
          </Card>
        </Grid>

        <Tabs defaultValue="topProducts">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="topProducts">Top Products</TabsTrigger>
            <TabsTrigger value="revenueByCategory">
              Revenue by Category
            </TabsTrigger>
          </TabsList>
          <TabsContent value="topProducts">
            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={topProducts}
                  index="name"
                  categories={["sales"]}
                  colors={["blue"]}
                  showLegend={false}
                  showGridLines={false}
                  startEndOnly={true}
                  className="h-80 mt-4"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="revenueByCategory">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <DonutChart
                  data={revenueByCategory}
                  category="revenue"
                  index="category"
                  valueFormatter={(number) => `$${number.toLocaleString()}`}
                  className="h-80 mt-4"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
