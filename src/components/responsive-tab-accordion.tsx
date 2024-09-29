"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface TabItem {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
  content: {
    title: string;
    description: string;
    url: string;
    icon: LucideIcon;
  }[];
}

interface ResponsiveTabAccordionProps {
  items: TabItem[];
}

export function ResponsiveTabAccordion({ items }: ResponsiveTabAccordionProps) {
  const [activeTab, setActiveTab] = useState(items[0].id);

  return (
    <div className="w-full">
      {/* Desktop and Tablet View */}
      <div className="hidden md:flex">
        <div className="w-1/3 pb-4 border-r">
          <ul className="space-y-2 pt-4">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-2 text-left transition-colors",
                    activeTab === item.id
                      ? "border-l-4 border-primary text-primary"
                      : "border-l-4 border-transparent hover:bg-muted"
                  )}
                >
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-6">
          {items
            .find((item) => item.id === activeTab)
            ?.content.map((content, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <content.icon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold">{content.title}</h3>
                </div>
                <p className="text-muted-foreground">{content.description}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Mobile View */}
      <Accordion type="single" collapsible className="md:hidden">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="flex items-center space-x-3">
              <item.icon className="h-5 w-5" aria-hidden="true" />
              <span>{item.title}</span>
            </AccordionTrigger>
            <AccordionContent>
              {item.content.map((content, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <content.icon
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-semibold">{content.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{content.description}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
