
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-[40vh] left-0 right-0 h-[150vh] z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute right-0 inset-y-0 bg-gradient-to-l from-purple-500/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-3xl" />
      </div>
    </div>
  );
};
