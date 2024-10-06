import React from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  FolderTree,
  Calendar,
  Search,
  Archive,
  BookOpen,
} from "lucide-react";

type LeftRailbarProps = {
  toggleSidebar: () => void;
};

export default function LeftRailbar({ toggleSidebar }: LeftRailbarProps) {
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
        <FolderTree className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-500 hover:text-gray-700"
      >
        <Calendar className="w-6 h-6" />
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
        <Archive className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-500 hover:text-gray-700"
      >
        <BookOpen className="w-6 h-6" />
      </Button>
    </div>
  );
}
