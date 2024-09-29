"use client";

import { useState } from "react";
import DotPattern from "./ui/dot-pattern";
import { ResponsiveTabAccordion } from "@/components/responsive-tab-accordion";
import {
  Zap,
  Merge,
  Target,
  Cog,
  Bolt,
  Settings,
  ChevronRight,
  ArrowRight,
  Wrench,
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
  Flame,
  Scale,
  Boxes,
  Sheet,
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
  SquareLibrary,
  StickyNote,
  LayoutDashboard,
  NotepadTextDashed,
  NotebookText,
  NotebookTabs,
  Notebook,
  CircleHelp,
  PencilRuler,
  BookOpen,
  ShoppingCart,
  Drill,
  Layers,
  Filter,
  DollarSign,
  Users,
  MonitorCog,
  ArrowDownWideNarrow,
  ListChecks,
  Building2,
  ShieldCheck,
  Smile,
  HeartPulse,
  Brain,
  ArrowUpRight,
  CalendarClock,
  Clock,
  ListTree,
  List,
  FileText,
  MessageSquareShare,
  MessagesSquare,
  FileSymlink,
  FolderSymlink,
} from "lucide-react";

const items = [
  {
    id: "alignment",
    title: "Alignment",
    url: "/alignment",
    icon: Scale,
    content: [
      {
        title: "Philosophy",
        url: "/philosophy",
        icon: Scale,
        description:
          "Define your core values and principles to guide decision-making.",
      },
      {
        title: "Areas",
        url: "/areas",
        icon: Boxes,
        description:
          "Identify and manage key areas of focus in your life and business.",
      },
      {
        title: "Goals",
        url: "/goals",
        icon: Target,
        description: "Set and track meaningful goals aligned with your vision.",
      },
      {
        title: "Strategies",
        url: "/strategies",
        icon: ListTree,
        description:
          "Develop high-level plans to achieve your long-term objectives.",
      },
      {
        title: "Tactics",
        url: "/tactics",
        icon: List,
        description:
          "Create actionable steps to implement your strategies effectively.",
      },
    ],
  },
  {
    id: "planning",
    title: "Planning",
    url: "/planning",
    icon: ChartNoAxesGantt,
    content: [
      {
        title: "Decision Making",
        url: "/decision-making",
        icon: Split,
        description:
          "Utilize AI-assisted tools for better, data-driven decisions.",
      },
      {
        title: "Risk Management",
        url: "/risk-management",
        icon: Flame,
        description:
          "Identify, assess, and mitigate potential risks to your goals.",
      },
      {
        title: "Estimating",
        url: "/estimating",
        icon: Sheet,
        description:
          "Improve project planning with accurate time and resource estimates.",
      },
      {
        title: "OKRs",
        url: "/okrs",
        icon: PencilRuler,
        description:
          "Set and track Objectives and Key Results for measurable progress.",
      },
      {
        title: "Roadmaps",
        url: "/roadmaps",
        icon: Map,
        description:
          "Visualize and plan your long-term strategy and milestones.",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    url: "/portfolio",
    icon: ChartPie,
    content: [
      {
        title: "Projects",
        url: "/projects",
        icon: Kanban,
        description:
          "Manage and track multiple projects with ease and efficiency.",
      },
      {
        title: "Products",
        url: "/products",
        icon: ShoppingCart,
        description:
          "Oversee product development, launches, and lifecycle management.",
      },
      {
        title: "Services",
        url: "/services",
        icon: Drill,
        description:
          "Streamline service delivery and client management processes.",
      },
      {
        title: "Platforms",
        url: "/platforms",
        icon: Layers,
        description:
          "Develop and maintain robust platforms for your business ecosystem.",
      },
      {
        title: "Campaigns",
        url: "/campaigns",
        icon: Filter,
        description:
          "Plan, execute, and analyze marketing campaigns effectively.",
      },
    ],
  },
  {
    id: "administration",
    title: "Life/Work Administration",
    url: "/administration",
    icon: Landmark,
    content: [
      {
        title: "Finance",
        url: "/finance",
        icon: DollarSign,
        description:
          "Manage personal and business finances with integrated tools.",
      },
      {
        title: "HR",
        url: "/hr",
        icon: Users,
        description:
          "Streamline human resources processes and employee management.",
      },
      {
        title: "IT",
        url: "/it",
        icon: MonitorCog,
        description:
          "Oversee IT infrastructure and support for seamless operations.",
      },
      {
        title: "CRM",
        url: "/crm",
        icon: ArrowDownWideNarrow,
        description:
          "Manage customer relationships and interactions effectively.",
      },
      {
        title: "Legal and Compliance",
        url: "/legal-compliance",
        icon: ListChecks,
        description:
          "Ensure adherence to legal requirements and industry standards.",
      },
      {
        title: "Facilities",
        url: "/facilities",
        icon: Building2,
        description: "Manage physical spaces and resources efficiently.",
      },
      {
        title: "Security and Privacy",
        url: "/security",
        icon: ShieldCheck,
        description:
          "Protect sensitive data and ensure robust security measures.",
      },
    ],
  },
  {
    id: "wellbeing",
    title: "Wellbeing",
    url: "/wellbeing",
    icon: Smile,
    content: [
      {
        title: "Health",
        url: "/health",
        icon: HeartPulse,
        description:
          "Track and improve physical health metrics and activities.",
      },
      {
        title: "Mind",
        url: "/mind",
        icon: Brain,
        description:
          "Enhance mental wellbeing through mindfulness and stress management.",
      },
      {
        title: "Habits",
        url: "/habits",
        icon: Link,
        description: "Build and maintain positive habits for personal growth.",
      },
      {
        title: "Relationships",
        url: "/relationships",
        icon: HeartPulse,
        description:
          "Nurture personal and professional relationships effectively.",
      },
      {
        title: "Journal",
        url: "/journal",
        icon: Notebook,
        description:
          "Reflect on experiences and track personal growth over time.",
      },
      {
        title: "Leisure",
        url: "/leisure",
        icon: HeartPulse,
        description:
          "Plan and balance recreational activities for a fulfilling life.",
      },
    ],
  },
  {
    id: "time-management",
    title: "Time Management",
    url: "/time-management",
    icon: Clock,
    content: [
      {
        title: "Routines",
        url: "/routines",
        icon: Repeat2,
        description:
          "Establish and optimize daily routines for increased productivity.",
      },
      {
        title: "Time Blocks",
        url: "/time-blocks",
        icon: BetweenHorizonalStart,
        description:
          "Allocate time efficiently using the time blocking technique.",
      },
      {
        title: "Schedules",
        url: "/schedules",
        icon: CalendarRange,
        description:
          "Create and manage flexible schedules for better time utilization.",
      },
      {
        title: "Events",
        url: "/events",
        icon: CalendarClock,
        description: "Organize and track important events and appointments.",
      },
    ],
  },
  {
    id: "productivity",
    title: "Productivity (GTD)",
    url: "/productivity",
    icon: ArrowUpRight,
    content: [
      {
        title: "Dashboard",
        url: "/dashboard",
        description:
          "Get a comprehensive overview of your tasks, goals, and progress.",
        icon: LayoutDashboard,
      },
      {
        title: "Inbox",
        url: "/inbox",
        description:
          "Capture and process incoming tasks and ideas efficiently.",
        icon: Inbox,
      },
      {
        title: "Process",
        url: "/process",
        description:
          "Organize and clarify captured items for effective action.",
        icon: ListFilter,
      },
      {
        title: "Organize",
        url: "/organize",
        description: "Categorize and prioritize tasks for optimal workflow.",
        icon: Group,
      },
      {
        title: "Review",
        url: "/review",
        description:
          "Regularly assess and adjust your system for continuous improvement.",
        icon: TextSearch,
      },
    ],
  },
  {
    id: "knowledge",
    title: "Knowledge",
    icon: SquareLibrary,
    url: "/knowledge",
    content: [
      {
        title: "Documents",
        url: "/documents",
        icon: FileText,
        description: "Store and manage important documents and files.",
      },
      {
        title: "Atomic Notes",
        url: "/atomic-notes",
        icon: StickyNote,
        description:
          "Create and link small, self-contained units of knowledge.",
      },
      {
        title: "Concepts",
        url: "/concepts",
        icon: NotepadTextDashed,
        description: "Define and explore key ideas and principles.",
      },
      {
        title: "Hub Notes",
        url: "/hub-notes",
        icon: NotebookText,
        description: "Centralize related information and link to atomic notes.",
      },
      {
        title: "Maps of Content",
        url: "/maps-of-content",
        icon: NotebookTabs,
        description: "Visualize connections between ideas and knowledge areas.",
      },
    ],
  },
  {
    id: "Collaboration",
    title: "Collaboration",
    icon: MessageSquareShare,
    url: "/collaboration",
    content: [
      {
        title: "Team Members",
        url: "/team-members",
        icon: Users,
        description: "Manage team roles, responsibilities, and communications.",
      },
      {
        title: "Chat",
        url: "/chat",
        icon: MessagesSquare,
        description:
          "Facilitate real-time discussions and information sharing.",
      },
      {
        title: "Opt In Template Sharing",
        url: "/opt-in-template-sharing",
        icon: FileSymlink,
        description:
          "Share and use productivity templates across your organization.",
      },
      {
        title: "Resource Sharing",
        url: "/opt-in-template-sharing",
        icon: FolderSymlink,
        description: "Efficiently share and manage team resources and assets.",
      },
    ],
  },
  {
    id: "automation",
    title: "Automation and AI",
    icon: Bot,
    url: "/automation",
    content: [
      {
        title: "Workflow Automations",
        url: "/workflow-automations",
        description:
          "Create custom automations to streamline repetitive tasks.",
        icon: Settings,
      },
      {
        title: "AI Agent Assistance",
        url: "/ai-agent-assistance",
        description:
          "Leverage AI agents for enhanced productivity and decision-making.",
        icon: Wrench,
      },
      {
        title: "Agent Orchestration",
        url: "/agent-orchestration",
        description:
          "Coordinate multiple AI agents for complex task completion.",
        icon: Wrench,
      },
      {
        title: "Dynamic Agent Creation",
        url: "/dynamic-agent-creation",
        description:
          "Generate specialized AI agents for specific tasks on-demand.",
        icon: Wrench,
      },
      {
        title: "Dynamic Tool Building Agents",
        url: "/dynamic-tool-building-agents",
        description:
          "Create custom AI-powered tools to address unique challenges.",
        icon: Wrench,
      },
    ],
  },
  {
    id: "customization",
    title: "Customization",
    icon: Cog,
    url: "/customization",
    content: [
      {
        title: "Personalized Dashboard",
        url: "/personalized-dashboard",
        description:
          "Tailor your dashboard to focus on what matters most to you.",
        icon: Settings,
      },
      {
        title: "Workflow Automation",
        url: "/workflow-automation",
        description:
          "Design custom automations to match your unique processes.",
        icon: Wrench,
      },
    ],
  },
];

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section id="features">
      <h2 className="text-4xl font-bold text-center my-12">Features</h2>
      <p className="text-2xl font-bold text-center my-6">
        GoalFlow is designed to help you achieve your goals in all areas of life
        and work.
      </p>
      <div className="rounded-lg border bg-background px-8 md:px-16 md:shadow-xl">
        <ResponsiveTabAccordion items={items} />
      </div>
      {/* <DotPattern width={20} height={20} cx={1} cy={1} cr={1} /> */}
    </section>
  );
}
