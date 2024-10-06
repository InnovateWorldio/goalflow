import React from "react";
import { RefreshCw } from "lucide-react";

export default function BottomRailbar() {
  return (
    <div className="bg-sky-50 h-8 flex items-center justify-end px-4 shadow-md">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Synched</span>
        <RefreshCw className="w-4 h-4 text-gray-600" />
      </div>
    </div>
  );
}
