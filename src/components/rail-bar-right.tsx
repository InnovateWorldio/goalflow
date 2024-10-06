import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Hash, List, Search, Settings } from "lucide-react";

type RightRailbarProps = {
  toggleSidebar: () => void;
};

export default function RightRailbar({ toggleSidebar }: RightRailbarProps) {
  return (
    <div className="w-12 bg-sky-50 rounded-lg shadow-sm flex flex-col items-center py-2 space-y-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="text-gray-500 hover:text-gray-700"
      >
        <Menu className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-500 hover:text-gray-700"
      >
        <Hash className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-500 hover:text-gray-700"
      >
        <List className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-500 hover:text-gray-700"
      >
        <Search className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-500 hover:text-gray-700"
      >
        <Settings className="w-6 h-6" />
      </Button>
    </div>
  );
}
