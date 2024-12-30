"use client";

import { Card } from "@/components/ui/card";
import { EngagementChart } from "./engagement-chart";
import { MetricsGrid } from "./metrics-grid";
import { TopPosts } from "./top-posts";

export function Analytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <MetricsGrid />
      <div className="grid gap-6 md:grid-cols-2">
        <EngagementChart />
        <TopPosts />
      </div>
    </div>
  );
}