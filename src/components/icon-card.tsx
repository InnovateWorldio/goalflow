"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  url: string;
}

export function IconCardComponent({ icon: Icon, title, url }: IconCardProps) {
  return (
    <Card className="bg-background/80 backdrop-blur-sm transition-all hover:bg-background/90">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 rounded-full bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
        </div>
        <h3 className="mb-2 text-lg font-medium">{title}</h3>
      </CardContent>
    </Card>
  );
}
