"use client";

import { useRef, useState } from "react";

export default function DragScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    setIsDown(true);
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const onMouseLeave = () => setIsDown(false);
  const onMouseUp = () => setIsDown(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !ref.current) return;
    e.preventDefault();

    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className={`scrollbar-hide cursor-grab overflow-x-auto active:cursor-grabbing ${className}`}
    >
      {children}
    </div>
  );
}