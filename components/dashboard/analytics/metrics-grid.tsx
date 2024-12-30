import { Card } from "@/components/ui/card";
import { Eye, MessageSquare, Share2, ThumbsUp } from "lucide-react";

const metrics = [
  {
    label: "Total Views",
    value: "12.5K",
    change: "+12%",
    icon: Eye,
  },
  {
    label: "Engagement Rate",
    value: "4.2%",
    change: "+2.1%",
    icon: ThumbsUp,
  },
  {
    label: "Comments",
    value: "842",
    change: "+5%",
    icon: MessageSquare,
  },
  {
    label: "Shares",
    value: "267",
    change: "+8%",
    icon: Share2,
  },
];

export function MetricsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-6">
          <div className="flex items-center justify-between">
            <metric.icon className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-green-600">{metric.change}</span>
          </div>
          <div className="mt-4">
            <h3 className="text-3xl font-bold">{metric.value}</h3>
            <p className="text-sm text-gray-500">{metric.label}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}