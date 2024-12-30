"use client";

import { useOnboarding } from "./onboarding-provider";
import { GeneralStep } from "./steps/general-step";
import { ServicesStep } from "./steps/services-step";
import { BrandingStep } from "./steps/branding-step";
import { SocialsStep } from "./steps/socials-step";

export function OnboardingSteps() {
  const { currentStep } = useOnboarding();

  return (
    <div className="mt-8">
      {currentStep === 0 && <GeneralStep />}
      {currentStep === 1 && <ServicesStep />}
      {currentStep === 2 && <BrandingStep />}
      {currentStep === 3 && <SocialsStep />}
    </div>
  );
}