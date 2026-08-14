"use client";

import type { ReactNode } from "react";

type DragScrollProps = {
  children: ReactNode;
  className?: string;
};

export default function DragScroll({
  children,
  className = "",
}: DragScrollProps) {
  return (
    <div
      className={`giants-card-grid ${className}`.trim()}
    >
      {children}
    </div>
  );
}