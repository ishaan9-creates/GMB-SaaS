"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useOnboarding } from "../onboarding-provider";

export function BrandingStep() {
  const { data, updateData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="tagline">What is your practice's tagline or motto? (Optional)</Label>
        <Input
          id="tagline"
          value={data.branding.tagline}
          onChange={(e) => updateData({ branding: { ...data.branding, tagline: e.target.value } })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tone">What tone would you like for your posts?</Label>
        <Input
          id="tone"
          placeholder="e.g., Professional, Friendly, Educational"
          value={data.branding.tone}
          onChange={(e) => updateData({ branding: { ...data.branding, tone: e.target.value } })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="topics">Are there specific topics you would like to focus on in posts?</Label>
        <Input
          id="topics"
          placeholder="e.g., Health tips, awareness campaigns"
          value={data.branding.topics}
          onChange={(e) => updateData({ branding: { ...data.branding, topics: e.target.value } })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="values">What values define your practice?</Label>
        <Input
          id="values"
          placeholder="e.g., Compassion, Innovation"
          value={data.branding.values}
          onChange={(e) => updateData({ branding: { ...data.branding, values: e.target.value } })}
          required
        />
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>
          Back
        </Button>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
}