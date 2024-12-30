import { XAxis } from "recharts";

export function ChartXAxis() {
  return (
    <XAxis
      dataKey="date"
      axisLine={false}
      tickLine={false}
      tick={{ fill: "hsl(var(--muted-foreground))" }}
      padding={{ left: 16, right: 16 }}
    />
  );
}