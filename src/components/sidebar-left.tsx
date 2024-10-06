import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Bookmark,
  Clock,
  Edit,
  Plus,
  Settings,
  Check,
  ChevronsUpDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import NavItems from "@/components/nav-items";

type LeftSidebarProps = {
  isOpen: boolean;
  width: number;
};

type TabType = "files" | "bookmarks" | "clock" | "edit";

const workspaces = [
  { value: "goalflow", label: "GoalFlow" },
  { value: "work", label: "Work" },
  { value: "personal", label: "Personal" },
];

export default function LeftSidebar({ isOpen, width }: LeftSidebarProps) {
  const [activeTab, setActiveTab] = useState<TabType>("files");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("goalflow");

  return (
    <div
      className={`${
        isOpen ? "" : "w-0"
      } bg-white shadow-sm flex flex-col overflow-hidden transition-all duration-300`}
      style={{ width: isOpen ? `${width}px` : "0" }}
    >
      {isOpen && (
        <>
          <div className="flex items-center justify-between p-2 border-b border-gray-200 bg-sky-50">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveTab("files")}
                className={`text-gray-500 hover:text-gray-700 ${
                  activeTab === "files" ? "bg-white" : "bg-sky-50"
                }`}
              >
                <FileText className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveTab("bookmarks")}
                className={`text-gray-500 hover:text-gray-700 ${
                  activeTab === "bookmarks" ? "bg-white" : "bg-sky-50"
                }`}
              >
                <Bookmark className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveTab("clock")}
                className={`text-gray-500 hover:text-gray-700 ${
                  activeTab === "clock" ? "bg-white" : "bg-sky-50"
                }`}
              >
                <Clock className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveTab("edit")}
                className={`text-gray-500 hover:text-gray-700 ${
                  activeTab === "edit" ? "bg-white" : "bg-sky-50"
                }`}
              >
                <Edit className="w-5 h-5" />
              </Button>
            </div>
            <Plus className="w-5 h-5 text-gray-500" />
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <NavItems workspace_id={value} />
          </div>
          <div className="p-2 border-t border-gray-200 flex items-center justify-between">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? workspaces.find((workspace) => workspace.value === value)
                        ?.label
                    : "Select workspace..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search workspace..." />
                  <CommandList>
                    <CommandEmpty>No workspace found.</CommandEmpty>
                    <CommandGroup>
                      {workspaces.map((workspace) => (
                        <CommandItem
                          key={workspace.value}
                          value={workspace.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === workspace.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {workspace.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-gray-700 ml-2"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
