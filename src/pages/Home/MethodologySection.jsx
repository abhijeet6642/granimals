import React from "react";

// NOTE: This component is styled using Tailwind CSS classes.
// It assumes that the custom colors and fonts are defined in your tailwind.config.js.

const MethodologySection = () => {
  const phases = [
    {
      number: 1,
      title: "Breaking the chains",
      weeks: "Weeks 1-4",
      active: true,
    },
    { number: 2, title: "The Awakening", weeks: "Weeks 5-8", active: true },
    {
      number: 3,
      title: "The Acceleration phase",
      weeks: "Weeks 9-12",
      active: true,
    },
    { number: 4, title: "Rebirth", weeks: "Weeks 13-16", active: true },
    {
      number: 5,
      title: "The Reality Check",
      weeks: "Weeks 17-20",
      active: true,
      special: true,
    },
    {
      number: 6,
      title: "Unlocking Freedom",
      weeks: "Weeks 21-24",
      active: true,
    },
    { number: 7, title: "Phase 7", weeks: "", active: false },
    { number: 8, title: "Phase 8", weeks: "", active: false },
    { number: 9, title: "Phase 9", weeks: "", active: false },
    { number: 10, title: "Phase 10", weeks: "", active: false },
  ];

  const features = [
    {
      icon: "/images/img_frame_2147223960.svg",
      title: "Mindset Transformation",
    },
    {
      icon: "/images/img_frame_2147223960_white_a700.svg",
      title:
        "Detailed Pre- Analysis on over 150+ point to understand physical, mental & lifestyle blockers",
    },
    {
      icon: "/images/img_frame_2147223960_gray_100.svg",
      title:
        "Customised Live Call Root cause Analysis on 40+ assessment points",
    },
    {
      icon: "/images/img_frame_2147223960_white_a700_64x64.svg",
      title: "Real-time support of Granimals expert coaches",
    },
    {
      icon: "/images/img_frame_2147223961.svg",
      title: "Weekly Live check-ins + Real time Progress Tracking",
    },
    {
      icon: "/images/img_frame_2147223960_64x64.svg",
      title: "Monthly Re-Assessments for complete transparency on recovery",
    },
    {
      icon: "/images/img_frame_2147223960_1.svg",
      title:
        "Custom recovery for your activity/ sport so you reclaim your best life!",
    },
  ];

  // Helper function to determine phase classes
  const getPhaseClasses = (phase) => {
    if (!phase.active) {
      return "bg-background-main-transparent";
    }
    return phase.special ? "bg-primary-light" : "bg-secondary-light";
  };

  // Helper function to determine phase button classes
  const getPhaseButtonClasses = (phase) => {
    return phase.special ? "bg-primary-background" : "bg-secondary-background";
  };

  return (
    // FIX: Added 'relative z-20' to ensure this entire section overlays any preceding elements
    <section className="relative z-20 w-full bg-background-dark py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-gilmer font-extrabold text-white leading-tight mb-4 sm:mb-6">
            This is how you will recover for the{" "}
          </h2>
        </div>
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-gilmer font-extrabold text-white leading-tight mb-4 sm:mb-6">
            <span className="text-primary-background uppercase">
              one last time!
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left side - Phases */}
          <div className="flex-1 space-y-4 sm:space-y-6">
            {phases?.map((phase) => (
              <div
                key={phase?.number}
                // Use the cleaner helper function for the outer background
                className={`rounded-xs p-4 sm:p-6 ${getPhaseClasses(phase)}`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {phase?.active ? (
                    // Use the cleaner helper function for the button background
                    <div
                      className={`px-8 sm:px-10 lg:px-12 py-6 sm:py-8 lg:py-10 rounded-xs ${getPhaseButtonClasses(phase)}`}
                    >
                      <div className="text-center text-white">
                        <div className="text-[24px] sm:text-[28px] lg:text-[32px] font-gilmer font-extrabold">
                          Phase {phase?.number}
                        </div>
                        {phase?.weeks && (
                          <div className="text-[12px] sm:text-[14px] lg:text-[16px] font-manrope font-normal mt-1">
                            {phase?.weeks}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="px-8 sm:px-10 lg:px-12 py-6 sm:py-8 lg:py-10 rounded-xs bg-accent-light-gray">
                      <div className="flex items-center justify-center">
                        <img
                          src="/images/img_frame_2147223928.svg"
                          alt="Locked"
                          className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px]"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex-1">
                    <h3
                      className={`text-[24px] sm:text-[28px] lg:text-[32px] font-manrope font-semibold ${
                        phase?.active ? "text-white" : "text-text-light"
                      }`}
                    >
                      {phase?.title}
                    </h3>
                    {phase?.special && (
                      <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-manrope font-medium text-primary-background mt-2 leading-tight">
                        <span className="uppercase font-medium">*I</span>
                        <span className="lowercase">
                          mportant phase if you clear this you will unlock
                          freedom
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Features */}
          <div className="flex-1 space-y-3 sm:space-y-4">
            {features?.map((feature, index) => (
              <div
                key={index}
                // Removed the style prop for borderImage, using a solid border instead.
                className="bg-white border border-gray-300 rounded-lg p-4 sm:p-6 shadow-sm"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="bg-primary-background rounded-md p-2 sm:p-3 flex-shrink-0">
                    <img
                      src={feature?.icon}
                      alt={feature?.title}
                      className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[64px] lg:h-[64px]"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-manrope font-semibold text-text-primary leading-normal">
                      {feature?.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
