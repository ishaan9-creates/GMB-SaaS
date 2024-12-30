"use client";

import { OnboardingForm } from "@/components/onboarding/onboarding-form";
import { OnboardingProvider } from "@/components/onboarding/onboarding-provider";

export default function OnboardingPage() {
  return (
    <OnboardingProvider>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <OnboardingForm />
      </div>
    </OnboardingProvider>
  );
}