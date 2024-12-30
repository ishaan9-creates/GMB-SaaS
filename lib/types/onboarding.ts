export interface OnboardingData {
  general: {
    name: string;
    role: string;
    location: string;
    contact: string;
  };
  services: {
    specialty: string;
    coreServices: string;
    specializedServices: string;
    patientTypes: string;
  };
  branding: {
    tagline: string;
    tone: string;
    topics: string;
    values: string;
  };
  socials: {
    platforms: string;
    frequency: string;
    contentType: string;
    useHashtags: boolean;
  };
}