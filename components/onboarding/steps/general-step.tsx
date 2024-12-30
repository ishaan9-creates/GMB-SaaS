"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useOnboarding } from "../onboarding-provider";

export function GeneralStep() {
  const { data, updateData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">What is your name or the name of your practice/hospital/clinic?</Label>
        <Input
          id="name"
          value={data.general.name}
          onChange={(e) => updateData({ general: { ...data.general, name: e.target.value } })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">What is your primary role?</Label>
        <Input
          id="role"
          placeholder="Doctor/Clinic Owner/Hospital Administrator/Other"
          value={data.general.role}
          onChange={(e) => updateData({ general: { ...data.general, role: e.target.value } })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Where are you located?</Label>
        <Input
          id="location"
          placeholder="City, State, Country"
          value={data.general.location}
          onChange={(e) => updateData({ general: { ...data.general, location: e.target.value } })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact">What is your contact email or phone number?</Label>
        <Input
          id="contact"
          value={data.general.contact}
          onChange={(e) => updateData({ general: { ...data.general, contact: e.target.value } })}
          required
        />
      </div>

      <Button type="submit" className="w-full">Continue</Button>
    </form>
  );
}