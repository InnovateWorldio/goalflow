import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  MoreVertical,
  X,
  PenTool,
  RotateCcw,
  X as Close,
  FileText,
  Image,
  Code,
  Check,
  ChevronRight,
} from "lucide-react";

type TabType = "text" | "image" | "code";

interface Tab {
  id: string;
  type: TabType;
  title: string;
}

export default function MainContent() {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [tabs, setTabs] = useState<Tab[]>([
    { id: "tab1", type: "text", title: "GoalFlow" },
    { id: "tab2", type: "image", title: "Design" },
    { id: "tab3", type: "code", title: "Implementation" },
  ]);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const renderContent = () => {
    const currentTab = tabs.find((tab) => tab.id === activeTab);
    if (!currentTab) return null;

    switch (currentTab.type) {
      case "text":
        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold">GoalFlow</h1>
            <p className="mt-4">Your personal goal management system.</p>
          </div>
        );
      case "image":
        return (
          <div className="flex-1 p-8 flex flex-col items-center justify-center">
            <Image className="w-24 h-24 text-gray-400 mb-4" />
            <p className="text-gray-500">No image selected</p>
          </div>
        );
      case "code":
        return (
          <div className="flex-1 p-8 flex flex-col items-center justify-center">
            <Code className="w-24 h-24 text-gray-400 mb-4" />
            <p className="text-gray-500">No code snippet available</p>
          </div>
        );
    }
  };

  const closeTab = (tabId: string) => {
    if (tabs.length > 1) {
      const newTabs = tabs.filter((tab) => tab.id !== tabId);
      setTabs(newTabs);
      if (activeTab === tabId) {
        setActiveTab(newTabs[0].id);
      }
    }
  };

  return (
    <div className="flex-1 bg-white shadow-sm flex flex-col overflow-hidden">
      <div className="flex items-center justify-between p-2 border-b border-gray-200 bg-sky-50">
        <div className="flex items-center space-x-2 overflow-x-auto">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`${
                activeTab === tab.id ? "bg-white" : "bg-sky-50"
              } text-gray-700 relative pr-8`}
            >
              {tab.title}
              {(hoveredTab === tab.id || activeTab === tab.id) && (
                <X
                  className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab(tab.id);
                  }}
                />
              )}
            </Button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700"
          >
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>04 - Projects</span>
            <ChevronRight className="w-4 h-4" />
            <span>04.2 Work</span>
            <ChevronRight className="w-4 h-4" />
            <span>GoalFlow</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700"
          >
            <Check className="w-5 h-5" />
          </Button>
        </div>
      </div>
      {renderContent()}
    </div>
  );
}
