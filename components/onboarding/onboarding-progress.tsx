interface OnboardingProgressProps {
  currentStep: number;
  steps: string[];
}

export function OnboardingProgress({ currentStep, steps }: OnboardingProgressProps) {
  return (
    <div className="relative">
      <div className="absolute top-4 w-full h-0.5 bg-gray-200">
        <div
          className="absolute h-full bg-primary transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-col items-center"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-colors ${
                index <= currentStep ? "bg-primary text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </div>
            <span className="text-sm">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}