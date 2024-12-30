import { YAxis } from "recharts";

export function ChartYAxis() {
  return (
    <YAxis
      axisLine={false}
      tickLine={false}
      tick={{ fill: "hsl(var(--muted-foreground))" }}
      width={40}
    />
  );
}