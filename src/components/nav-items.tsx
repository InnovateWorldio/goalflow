import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { buildNavTree, type NavItem } from "@/utils/nav-utils";

interface NavItemsProps {
  workspace_id: string;
}

const NavItems: React.FC<NavItemsProps> = ({ workspace_id }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderNavItem = (item: NavItem, depth: number = 0) => {
    const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.File;
    const isExpanded = expandedItems.has(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="mb-1">
        <Button
          variant="ghost"
          className={`w-full justify-start ${
            depth > 0 ? `pl-${depth * 4 + 4}` : ""
          }`}
          onClick={() => hasChildren && toggleExpand(item.id)}
        >
          {hasChildren && (
            <span className="mr-2 w-4">
              {isExpanded ? (
                <LucideIcons.ChevronDown className="h-4 w-4" />
              ) : (
                <LucideIcons.ChevronRight className="h-4 w-4" />
              )}
            </span>
          )}
          {!hasChildren && <span className="mr-2 w-4"></span>}
          <IconComponent className="mr-2 h-4 w-4" />
          {item.title}
        </Button>
        {isExpanded && item.children && (
          <div>
            {item.children.map((child) => renderNavItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const navTree = buildNavTree(workspace_id);

  return (
    <div className="space-y-1">
      {navTree.map((item) => renderNavItem(item))}
    </div>
  );
};

export default NavItems;
