"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const impactCards = [
  {
    title: "Inputs",
    items: [
      "Unified Platform",
      "Organizational Workspace Template",
      "Advanced AI Integration",
      "Customization and Flexibility",
      "Vectorization of Data",
      "Process Visualization Tools",
      "Multiple Views and Templates",
    ],
  },
  {
    title: "Outputs",
    items: [
      "Reduction in Tool Requirements",
      "Centralized Data Repository",
      "Reduced Configuration Time",
      "Enhanced Information Retrieval",
      "Improved Process Management",
      "Increased Customization",
      "AI-Assisted Workflow Management",
    ],
  },
  {
    title: "Outcomes",
    items: [
      "Time Savings",
      "Cost Savings",
      "Increased Productivity",
      "Enhanced Efficiency",
      "Improved Organizational Alignment",
      "Scalability and Adaptability",
    ],
  },
  {
    title: "Goals",
    items: [
      "Maximize Impact on Wellbeing",
      "Sustainable Business Growth",
      "Continuous Self-Improvement",
      "Work-Life Balance",
      "Long-Term Wellness",
    ],
  },
];

export function Impact() {
  return (
    <section id="impact">
      <h2 className="text-4xl font-bold text-center mt-12 mb-6">Impact</h2>
      <p className="text-2xl font-bold text-center my-6">
        Here are some of the key benefits of using GoalFlow:
      </p>
      <div className="relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background/50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactCards.map((card, index) => (
                <Card key={index} className="bg-background/80 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-center">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {card.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
