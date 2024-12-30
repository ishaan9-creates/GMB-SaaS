"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useOnboarding } from "../onboarding-provider";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export function SocialsStep() {
  const { data, updateData, setCurrentStep } = useOnboarding();
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save onboarding data (in a real app, this would be an API call)
    localStorage.setItem("hasCompletedSetup", "true");
    
    toast({
      title: "Setup Complete",
      description: "Your profile has been saved successfully.",
    });
    
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="platforms">Which social media platforms do you use?</Label>
        <Input
          id="platforms"
          placeholder="e.g., Google My Business, Instagram"
          value={data.socials.platforms}
          onChange={(e) => updateData({ socials: { ...data.socials, platforms: e.target.value } })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="frequency">How often would you like posts to be made?</Label>
        <Input
          id="frequency"
          placeholder="Daily/Weekly/Biweekly/Monthly"
          value={data.socials.frequency}
          onChange={(e) => updateData({ socials: { ...data.socials, frequency: e.target.value } })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contentType">What type of content do you prefer?</Label>
        <Input
          id="contentType"
          placeholder="e.g., Images, Videos, Text Posts"
          value={data.socials.contentType}
          onChange={(e) => updateData({ socials: { ...data.socials, contentType: e.target.value } })}
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="useHashtags">Would you like to include hashtags in your posts?</Label>
        <Switch
          id="useHashtags"
          checked={data.socials.useHashtags}
          onCheckedChange={(checked) => updateData({ socials: { ...data.socials, useHashtags: checked } })}
        />
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>
          Back
        </Button>
        <Button type="submit">Complete Setup</Button>
      </div>
    </form>
  );
}