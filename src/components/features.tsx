"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import DotPattern from "./ui/dot-pattern";
import svgReference from "@/assets/placeholder.svg";

const features = [
  {
    title: "Process Automation",
    image: svgReference,
  },
  { title: "Goal Tracking", image: svgReference },
  {
    title: "AI-Powered Insights",
    image: svgReference,
  },
  {
    title: "Cross-Platform Integration",
    image: svgReference,
  },
];

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section id="features" className="pt-12">
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
      <div className="relative flex size-full overflow-hidden rounded-lg border bg-background p-8 md:p-16 md:shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`cursor-pointer p-4 rounded-lg transition-colors ${
                  selectedFeature === index
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedFeature(index)}
              >
                {feature.title}
              </li>
            ))}
          </ul>
          <div className="relative aspect-video">
            <img
              src={features[selectedFeature].image.src}
              alt={features[selectedFeature].title}
              className="object-cover rounded-lg"
            />
          </div>
          <DotPattern width={20} height={20} cx={1} cy={1} cr={1} />
        </div>
      </div>
    </section>
  );
}
