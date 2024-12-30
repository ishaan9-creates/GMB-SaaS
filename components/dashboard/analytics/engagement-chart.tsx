"use client";

import { Card } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartXAxis } from "./chart-x-axis";
import { ChartYAxis } from "./chart-y-axis";
import { chartData } from "@/lib/data/chart-data";

export function EngagementChart() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Engagement Overview</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <ChartXAxis />
            <ChartYAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="views"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}