"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GitFork } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "impact", label: "Impact" },
    { id: "features", label: "Features" },
    { id: "philosophy", label: "Philosophy" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex px-4 sm:px-6 md:px-8 h-14 items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <GitFork className="h-6 w-6" />
          <span className="font-bold hidden sm:inline">GoalFlow</span>
        </a>
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`hover:text-primary transition-colors ${
                activeSection === item.id ? "text-primary" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <nav className="flex md:hidden space-x-2 text-sm font-medium mr-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-primary transition-colors ${
                  activeSection === item.id ? "text-primary" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <ModeToggle />
          <Button size="sm" className="text-xs sm:text-sm px-2 sm:px-4">
            Sign In/Up
          </Button>
        </div>
      </div>
    </header>
  );
}
