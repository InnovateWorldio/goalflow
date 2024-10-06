import React, { useState, useRef } from "react";
import LeftSidebar from "@/components/sidebar-left";
import MainContent from "@/components/main-content";
import RightSidebar from "@/components/sidebar-right";
import RailBarLeft from "@/components/rail-bar-left";
import RailBarRight from "@/components/rail-bar-right";
import BottomRailbar from "@/components/rail-bar-bottom";

export default function WorkspaceContent() {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [isBottomRailbarVisible, setIsBottomRailbarVisible] = useState(true);
  const [leftSidebarWidth, setLeftSidebarWidth] = useState(256); // 64 * 4 = 256px
  const [rightSidebarWidth, setRightSidebarWidth] = useState(256);

  const leftResizeRef = useRef<HTMLDivElement>(null);
  const rightResizeRef = useRef<HTMLDivElement>(null);

  const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);

  const handleResize = (
    e: React.MouseEvent,
    resizeFunc: React.Dispatch<React.SetStateAction<number>>,
    minWidth: number,
    maxWidth: number
  ) => {
    e.preventDefault();
    const startX = e.pageX;
    const startWidth =
      resizeFunc === setLeftSidebarWidth ? leftSidebarWidth : rightSidebarWidth;

    const onMouseMove = (e: MouseEvent) => {
      const diff =
        resizeFunc === setLeftSidebarWidth
          ? e.pageX - startX
          : startX - e.pageX;
      const newWidth = Math.max(
        minWidth,
        Math.min(startWidth + diff, maxWidth)
      );
      resizeFunc(newWidth);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-sky-50">
      <div className="flex flex-1 overflow-hidden">
        <RailBarLeft toggleSidebar={toggleLeftSidebar} />
        {isLeftSidebarOpen && (
          <>
            <LeftSidebar isOpen={isLeftSidebarOpen} width={leftSidebarWidth} />
            <div
              ref={leftResizeRef}
              className="w-4 bg-sky-50 cursor-col-resize"
              onMouseDown={(e) =>
                handleResize(e, setLeftSidebarWidth, 200, 400)
              }
            />
          </>
        )}
        <div className="flex-1 flex space-x-2 overflow-hidden">
          <MainContent />
        </div>
        {isRightSidebarOpen && (
          <>
            <div
              ref={rightResizeRef}
              className="w-4 bg-sky-50 cursor-col-resize"
              onMouseDown={(e) =>
                handleResize(e, setRightSidebarWidth, 200, 400)
              }
            />
            <RightSidebar
              isOpen={isRightSidebarOpen}
              width={rightSidebarWidth}
            />
          </>
        )}
        <RailBarRight toggleSidebar={toggleRightSidebar} />
      </div>
      {isBottomRailbarVisible && <BottomRailbar />}
    </div>
  );
}
