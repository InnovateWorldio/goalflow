"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { marked } from 'marked';

interface ProposalProps {
  organizationName: string;
  totalBudget: string;
  grantSize: string;
  grantRatio: string;
  countriesOfOperation: string;
  dateOfGrant: string;
  duration: string;
  description: string;
  smartGoals: string;
  measurementPlan: string;
  shutdownCriteria: string;
  progressSoFar: string;
  supportingDocuments: { name: string; link: string }[];
  extraInformation: string;
}

const MarkdownRenderer = ({ content }: { content: string }) => (
  <div
    className="text-sm prose dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: marked(content) }}
  />
);

export function ProposalComponent({
  organizationName,
  totalBudget,
  grantSize,
  grantRatio,
  countriesOfOperation,
  dateOfGrant,
  duration,
  description,
  smartGoals,
  measurementPlan,
  shutdownCriteria,
  progressSoFar,
  supportingDocuments,
  extraInformation,
}: ProposalProps) {
  return (
    <Card className="w-full max-w-4xl bg-background text-foreground">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          {organizationName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Est 1 year budget starting October 1st, 2024:</p>
            <p className="text-lg font-bold">{totalBudget}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Requested grant size:</p>
            <p className="text-lg font-bold">{grantSize}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Grant ratio:</p>
            <p className="text-lg font-bold">{grantRatio}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Countries of operation:</p>
            <p className="text-lg font-bold">{countriesOfOperation}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Date of grant:</p>
            <p className="text-lg font-bold">{dateOfGrant}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Funding Duration:</p>
            <p className="text-lg font-bold">{duration}</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">100-word description:</h3>
          <MarkdownRenderer content={description} />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            2024-2025 top <span className="text-cyan-400">SMART</span> goals:
          </h3>
          <MarkdownRenderer content={smartGoals} />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Plan for measuring impact:</h3>
          <MarkdownRenderer content={measurementPlan} />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Signs we should shut down:</h3>
          <MarkdownRenderer content={shutdownCriteria} />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Our progress so far:</h3>
          <MarkdownRenderer content={progressSoFar} />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Supporting documents:</h3>
          <ul className="list-disc list-inside space-y-1">
            {supportingDocuments.map((doc, index) => (
              <li key={index} className="text-sm">
                <a href={doc.link} className="text-cyan-400 hover:underline">
                  {doc.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Extra information:</h3>
          <MarkdownRenderer content={extraInformation} />
        </div>
      </CardContent>
    </Card>
  );
}