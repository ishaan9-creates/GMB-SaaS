import { Button } from "@/components/ui/button";
import { BarChart2, Calendar, History, PenTool } from "lucide-react";

interface DashboardNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function DashboardNav({ activeTab, setActiveTab }: DashboardNavProps) {
  const navItems = [
    { id: "analytics", label: "Analytics", icon: BarChart2 },
    { id: "generate", label: "Generate Post", icon: PenTool },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "history", label: "History", icon: History },
  ];

  return (
    <nav className="w-64 bg-white border-r p-4">
      <div className="space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon className="mr-2 h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}