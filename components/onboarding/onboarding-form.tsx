"use client";

import { Card } from "@/components/ui/card";
import { useOnboarding } from "./onboarding-provider";
import { OnboardingSteps } from "./onboarding-steps";
import { OnboardingProgress } from "./onboarding-progress";
import { Building2 } from "lucide-react";

export function OnboardingForm() {
  const { currentStep } = useOnboarding();

  const steps = ["General", "Services", "Branding", "Socials"];

  return (
    <Card className="max-w-3xl mx-auto p-8">
      <div className="flex items-center justify-center mb-8">
        <Building2 className="h-12 w-12 text-primary" />
      </div>
      
      <OnboardingProgress currentStep={currentStep} steps={steps} />
      <OnboardingSteps />
    </Card>
  );
}