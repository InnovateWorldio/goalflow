import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Hash, List, Clock } from "lucide-react";

type RightSidebarProps = {
  isOpen: boolean;
  width: number;
};

type TabType = "search" | "headings" | "outline" | "recent";

export default function RightSidebar({ isOpen, width }: RightSidebarProps) {
  const [activeTab, setActiveTab] = useState<TabType>("search");

  const renderContent = () => {
    switch (activeTab) {
      case "search":
        return (
          <>
            <div className="p-4 border-b border-gray-200">
              <Input type="search" placeholder="Search" className="w-full" />
            </div>
            <div className="flex-1 p-4 flex flex-col items-center justify-center text-gray-500">
              <Search className="w-16 h-16 mb-4" />
              <p className="text-center">No results found.</p>
            </div>
          </>
        );
      case "headings":
        return (
          <div className="flex-1 p-4 flex flex-col items-center justify-center text-gray-500">
            <Hash className="w-16 h-16 mb-4" />
            <p className="text-center">No headings found.</p>
          </div>
        );
      case "outline":
        return (
          <div className="flex-1 p-4 flex flex-col items-center justify-center text-gray-500">
            <List className="w-16 h-16 mb-4" />
            <p className="text-center">No outline available.</p>
          </div>
        );
      case "recent":
        return (
          <div className="flex-1 p-4 flex flex-col items-center justify-center text-gray-500">
            <Clock className="w-16 h-16 mb-4" />
            <p className="text-center">No recent items.</p>
          </div>
        );
    }
  };

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-0"
      } bg-white shadow-sm flex flex-col overflow-hidden transition-all duration-300`}
      style={{ width: isOpen ? `${width}px` : "0" }}
    >
      {isOpen && (
        <>
          <div className="flex items-center justify-between p-2 border-b border-gray-200 bg-sky-50">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveTab("search")}
              className={`text-gray-500 hover:text-gray-700 ${
                activeTab === "search" ? "bg-white" : "bg-sky-50"
              }`}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveTab("headings")}
              className={`text-gray-500 hover:text-gray-700 ${
                activeTab === "headings" ? "bg-white" : "bg-sky-50"
              }`}
            >
              <Hash className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveTab("outline")}
              className={`text-gray-500 hover:text-gray-700 ${
                activeTab === "outline" ? "bg-white" : "bg-sky-50"
              }`}
            >
              <List className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveTab("recent")}
              className={`text-gray-500 hover:text-gray-700 ${
                activeTab === "recent" ? "bg-white" : "bg-sky-50"
              }`}
            >
              <Clock className="w-5 h-5" />
            </Button>
          </div>
          {renderContent()}
        </>
      )}
    </div>
  );
}
