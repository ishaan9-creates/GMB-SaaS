"use client";

import { createContext, useContext, useState } from "react";
import { OnboardingData } from "@/lib/types/onboarding";

interface OnboardingContextType {
  data: OnboardingData;
  updateData: (stepData: Partial<OnboardingData>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<OnboardingData>({
    general: {
      name: "",
      role: "",
      location: "",
      contact: "",
    },
    services: {
      specialty: "",
      coreServices: "",
      specializedServices: "",
      patientTypes: "",
    },
    branding: {
      tagline: "",
      tone: "",
      topics: "",
      values: "",
    },
    socials: {
      platforms: "",
      frequency: "",
      contentType: "",
      useHashtags: false,
    },
  });
  const [currentStep, setCurrentStep] = useState(0);

  const updateData = (stepData: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...stepData }));
  };

  return (
    <OnboardingContext.Provider value={{ data, updateData, currentStep, setCurrentStep }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) throw new Error("useOnboarding must be used within OnboardingProvider");
  return context;
};