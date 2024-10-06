import navItemsData from "../data/nav-items.json";

export const nav_items: NavItem[] = navItemsData;

export interface NavItem {
  id: string;
  title: string;
  url?: string;
  icon: string;
  type: string;
  parent_id: string;
  workspace_id: string;
  order: number;
  favorite: string | boolean;
  description?: string;
  children?: NavItem[];
}

export function buildNavTree(workspace_id: string): NavItem[] {
  const workspaceItems = nav_items.filter(
    (item) => item.workspace_id === workspace_id
  );

  function buildSubTree(parentId: string, depth: number = 0): NavItem[] {
    // Add a maximum depth to prevent infinite recursion
    if (depth > 100) {
      console.warn("Maximum depth reached in buildSubTree");
      return [];
    }

    return workspaceItems
      .filter((item) => item.parent_id === parentId)
      .sort((a, b) => a.order - b.order)
      .map((item) => {
        // Only recurse if the child's parent_id is different from its own id
        const children =
          item.id !== item.parent_id ? buildSubTree(item.id, depth + 1) : [];

        const navItem: NavItem = {
          ...item,
          favorite: item.favorite === "true" ? true : false,
          ...(children.length > 0 ? { children } : {}),
        };
        return navItem;
      });
  }

  return buildSubTree(workspace_id);
}
