"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login - in a real app, this would validate credentials
    if (email && password) {
      // Check if this is a first-time login (would normally check against a database)
      const isFirstTime = !localStorage.getItem("hasCompletedSetup");
      
      if (isFirstTime) {
        router.push("/onboarding");
      } else {
        router.push("/dashboard");
      }
      
      toast({
        title: "Login successful",
        description: "Welcome back to HealthPost AI!",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <Building2 className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => {
              toast({
                title: "Google Sign In",
                description: "This feature is not implemented in the demo.",
              });
            }}
          >
            Sign in with Google
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}