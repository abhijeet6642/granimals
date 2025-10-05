import React, { useState } from 'react';
import Card from '../ui/Card';

const PhaseMethodology = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      phase: 1,
      title: "Assessment & Foundation",
      duration: "Week 1-2",
      description: "Comprehensive evaluation of your current situation and building the foundation for recovery.",
      activities: [
        "Personal assessment and goal setting",
        "Medical evaluation and detox support",
        "Introduction to recovery principles",
        "Building your support network"
      ],
      icon: "📋"
    },
    {
      phase: 2,
      title: "Detox & Stabilization",
      duration: "Week 3-4",
      description: "Safe and supervised detoxification process with 24/7 medical support.",
      activities: [
        "Medically supervised detox",
        "Withdrawal symptom management",
        "Nutritional rehabilitation",
        "Sleep pattern restoration"
      ],
      icon: "🏥"
    },
    {
      phase: 3,
      title: "Cognitive Restructuring",
      duration: "Week 5-8",
      description: "Identifying and changing negative thought patterns that contribute to addiction.",
      activities: [
        "Cognitive behavioral therapy sessions",
        "Identifying triggers and patterns",
        "Developing coping strategies",
        "Mindfulness and meditation training"
      ],
      icon: "🧠"
    },
    {
      phase: 4,
      title: "Emotional Healing",
      duration: "Week 9-12",
      description: "Processing trauma and developing emotional intelligence and regulation skills.",
      activities: [
        "Trauma-informed therapy",
        "Emotional regulation techniques",
        "Family therapy sessions",
        "Grief and loss processing"
      ],
      icon: "❤️"
    },
    {
      phase: 5,
      title: "Skill Development",
      duration: "Week 13-16",
      description: "Building practical life skills and healthy coping mechanisms.",
      activities: [
        "Life skills training",
        "Stress management techniques",
        "Communication skills development",
        "Problem-solving strategies"
      ],
      icon: "🛠️"
    },
    {
      phase: 6,
      title: "Social Reintegration",
      duration: "Week 17-20",
      description: "Rebuilding healthy relationships and social connections.",
      activities: [
        "Relationship repair workshops",
        "Social skills practice",
        "Community involvement",
        "Peer support groups"
      ],
      icon: "👥"
    },
    {
      phase: 7,
      title: "Purpose & Meaning",
      duration: "Week 21-24",
      description: "Discovering your life purpose and creating meaningful goals.",
      activities: [
        "Values clarification exercises",
        "Goal setting and planning",
        "Career counseling",
        "Spiritual exploration"
      ],
      icon: "🎯"
    },
    {
      phase: 8,
      title: "Relapse Prevention",
      duration: "Week 25-28",
      description: "Developing comprehensive strategies to prevent relapse and maintain sobriety.",
      activities: [
        "Relapse prevention planning",
        "Emergency response strategies",
        "Support system strengthening",
        "Ongoing therapy planning"
      ],
      icon: "🛡️"
    },
    {
      phase: 9,
      title: "Transition Planning",
      duration: "Week 29-32",
      description: "Preparing for independent living and long-term recovery success.",
      activities: [
        "Independent living preparation",
        "Aftercare planning",
        "Resource identification",
        "Graduation preparation"
      ],
      icon: "🚀"
    },
    {
      phase: 10,
      title: "Ongoing Support",
      duration: "Lifetime",
      description: "Continuous support and monitoring to ensure long-term recovery success.",
      activities: [
        "Monthly check-ins",
        "Alumni support groups",
        "Crisis intervention access",
        "Continued growth opportunities"
      ],
      icon: "🤝"
    }
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Our Proven 10-Phase Recovery Methodology
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          A comprehensive, step-by-step approach that has helped thousands achieve lasting recovery. 
          Each phase builds upon the previous one, ensuring sustainable transformation.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Phase Navigation */}
        <div className="lg:col-span-1">
          <div className="space-y-2 sticky top-24">
            {phases?.map((phase, index) => (
              <button
                key={phase?.phase}
                onClick={() => setActivePhase(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                  activePhase === index
                    ? 'bg-primary-background text-primary-foreground shadow-lg'
                    : 'bg-background-white hover:bg-primary-light text-text-primary border border-border-accent-light-gray'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{phase?.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sm">
                      Phase {phase?.phase}: {phase?.title}
                    </h3>
                    <p className="text-xs opacity-75">{phase?.duration}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Phase Details */}
        <div className="lg:col-span-2">
          <Card 
            layout_width="full"
            layout_height="auto"
            padding="large"
            margin="none"
            position="static"
            variant="default"
            paddingVariant="large"
            onClick={undefined}
            className="bg-background-white shadow-lg"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{phases?.[activePhase]?.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    Phase {phases?.[activePhase]?.phase}: {phases?.[activePhase]?.title}
                  </h3>
                  <p className="text-primary-background font-semibold">
                    {phases?.[activePhase]?.duration}
                  </p>
                </div>
              </div>

              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                {phases?.[activePhase]?.description}
              </p>

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Key Activities & Focus Areas:
                </h4>
                <ul className="space-y-3">
                  {phases?.[activePhase]?.activities?.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-secondary-background mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-text-primary">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 pt-6 border-t border-border-accent-light-gray">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-text-primary">
                    Progress Through Program
                  </span>
                  <span className="text-sm text-primary-background font-semibold">
                    {Math.round(((activePhase + 1) / phases?.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-background-main rounded-full h-2">
                  <div
                    className="bg-primary-background h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((activePhase + 1) / phases?.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
          disabled={activePhase === 0}
          className="flex items-center px-6 py-3 bg-background-white border border-border-accent-light-gray rounded-lg text-text-primary hover:bg-primary-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Previous Phase
        </button>

        <button
          onClick={() => setActivePhase(Math.min(phases?.length - 1, activePhase + 1))}
          disabled={activePhase === phases?.length - 1}
          className="flex items-center px-6 py-3 bg-primary-background text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Phase
          <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhaseMethodology;