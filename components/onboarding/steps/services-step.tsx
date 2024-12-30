"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useOnboarding } from "../onboarding-provider";

export function ServicesStep() {
  const { data, updateData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="specialty">What is your medical specialty or area of expertise?</Label>
        <Input
          id="specialty"
          value={data.services.specialty}
          onChange={(e) => updateData({ services: { ...data.services, specialty: e.target.value } })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="coreServices">What core services do you offer?</Label>
        <Input
          id="coreServices"
          placeholder="e.g., consultations, surgeries, diagnostics"
          value={data.services.coreServices}
          onChange={(e) => updateData({ services: { ...data.services, coreServices: e.target.value } })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="specializedServices">Do you offer any specialized services?</Label>
        <Input
          id="specializedServices"
          placeholder="e.g., telemedicine, laser treatments"
          value={data.services.specializedServices}
          onChange={(e) => updateData({ services: { ...data.services, specializedServices: e.target.value } })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="patientTypes">What type of patients do you primarily serve?</Label>
        <Input
          id="patientTypes"
          placeholder="e.g., Children, Adults, Seniors"
          value={data.services.patientTypes}
          onChange={(e) => updateData({ services: { ...data.services, patientTypes: e.target.value } })}
          required
        />
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={() => setCurrentStep(0)}>
          Back
        </Button>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
}