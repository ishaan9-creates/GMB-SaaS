"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardNav } from "@/components/dashboard/nav";
import { Analytics } from "@/components/dashboard/analytics";
import { PostGenerator } from "@/components/posts/post-generator";
import { PostHistory } from "@/components/posts/post-history";
import { PostScheduler } from "@/components/posts/post-scheduler";
import { useState } from "react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("analytics");

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6">
          {activeTab === "analytics" && <Analytics />}
          {activeTab === "generate" && <PostGenerator />}
          {activeTab === "schedule" && <PostScheduler />}
          {activeTab === "history" && <PostHistory />}
        </main>
      </div>
    </div>
  );
}