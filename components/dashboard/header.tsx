"use client";

import { Button } from "@/components/ui/button";
import { Building2, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function DashboardHeader() {
  const router = useRouter();

  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="font-bold">HealthPost AI</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/login")}
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}