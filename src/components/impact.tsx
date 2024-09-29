"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import FlickeringGrid from "@/components/ui/flickering-grid";

const impactCards = [
  {
    title: "Personal Goals",
    outcomes: "Improved life satisfaction",
    outputs: "Achieved milestones",
    inputs: "Daily habits and actions",
    problems: "Lack of direction and motivation",
  },
  {
    title: "Business Goals",
    outcomes: "Increased revenue and growth",
    outputs: "Completed projects and KPIs",
    inputs: "Resources and team efforts",
    problems: "Inefficient processes and bottlenecks",
  },
  {
    title: "Health Goals",
    outcomes: "Better overall well-being",
    outputs: "Improved fitness and nutrition",
    inputs: "Exercise and diet plans",
    problems: "Sedentary lifestyle and poor habits",
  },
];

export function Impact() {
  return (
    <section id="impact" className="pt-12 relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12">Impact</h2>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FlickeringGrid
            className="w-full h-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background/50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {impactCards.map((card, index) => (
                <Card key={index} className="bg-background/80">
                  <CardHeader>
                    <CardTitle className="text-center">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>Outcomes:</strong> {card.outcomes}
                    </p>
                    <p>
                      <strong>Outputs:</strong> {card.outputs}
                    </p>
                    <p>
                      <strong>Inputs:</strong> {card.inputs}
                    </p>
                    <p>
                      <strong>Problems:</strong> {card.problems}
                    </p>
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
