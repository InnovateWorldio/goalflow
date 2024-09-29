"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Ripple from "@/components/ui/ripple";
import { Button } from "@/components/ui/button";
import { IconCardComponent } from "./icon-card";
import Marquee from "@/components/ui/marquee";
import {
  ArrowRightIcon,
  Atom,
  Bird,
  Code2,
  ChartPie,
  Split,
  Eclipse,
  Frame,
  History,
  LifeBuoy,
  Map,
  PieChart,
  Rabbit,
  Send,
  Settings2,
  SquareTerminal,
  Star,
  Turtle,
  CalendarCheck,
  CalendarDays,
  CircleCheckBig,
  Inbox,
  ListFilter,
  Group,
  TextSearch,
  Scale,
  Boxes,
  Target,
  ChartNoAxesGantt,
  Landmark,
  LayoutList,
  Link,
  Repeat2,
  BetweenHorizonalStart,
  CalendarRange,
  Kanban,
  Workflow,
  GitFork,
  Bot,
  Wrench,
  SquareLibrary,
  StickyNote,
  LayoutDashboard,
  NotepadTextDashed,
  NotebookText,
  NotebookTabs,
  Notebook,
  CircleHelp,
  BookOpen,
  Cog,
} from "lucide-react";

const words = [
  "Workflows",
  "Decisions",
  "Planning",
  "Research",
  "Management",
  "Success",
];
const iconCards = [
  {
    title: "Philosophy",
    url: "/philosophy",
    icon: Scale,
  },
  {
    title: "Decisions",
    url: "/decisions",
    icon: Split,
  },
  {
    title: "Goals",
    url: "/goals",
    icon: Target,
  },
  {
    title: "Areas",
    url: "/areas",
    icon: Boxes,
  },
  {
    title: "Planning",
    url: "/planning",
    icon: ChartNoAxesGantt,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    icon: ChartPie,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Kanban,
  },
  {
    title: "Management",
    url: "/management",
    icon: Landmark,
  },
  {
    title: "Workflows",
    url: "/workflows",
    icon: GitFork,
  },
  {
    title: "Knowledge",
    url: "/knowledge",
    icon: SquareLibrary,
  },
  {
    title: "Journal",
    url: "/journal",
    icon: Notebook,
  },
  {
    title: "Habits",
    url: "/habits",
    icon: Link,
  },
  {
    title: "Routines",
    url: "/routines",
    icon: Repeat2,
  },
  {
    title: "Time Blocks",
    url: "/time-blocks",
    icon: BetweenHorizonalStart,
  },
  {
    title: "Schedules",
    url: "/schedules",
    icon: CalendarRange,
  },
  {
    title: "Processes",
    url: "/processes",
    icon: Workflow,
  },
  {
    title: "Agents",
    url: "/agents",
    icon: Bot,
  },
  {
    title: "Tools",
    url: "/tools",
    icon: Wrench,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Process",
    url: "/process",
    icon: ListFilter,
  },
  {
    title: "Organize",
    url: "/organize",
    icon: Group,
  },
  {
    title: "Review",
    url: "/review",
    icon: TextSearch,
  },
];

const firstRow = iconCards.slice(0, iconCards.length / 2);
const secondRow = iconCards.slice(iconCards.length / 2);

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 text-center relative">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        AUTOMATE
      </h1>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8 h-[1.5em] text-primary">
        {words[currentWord]}
      </h1>

      <Button size="lg" className="mb-16 text-lg">
        Request Early Access
      </Button>

      <div className="relative flex h-[320px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background/30 z-10">
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((card) => (
            <IconCardComponent key={card.title} {...card} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((card) => (
            <IconCardComponent key={card.title} {...card} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
      <Ripple className="z-0" />
      <Ripple className="z-0 absolute inset-x-0 top-0 -translate-y-1/2 md:translate-y-0 md:top-auto md:bottom-0" />
    </section>
  );
}
