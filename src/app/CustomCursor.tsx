"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    function onMouseDown() {
      setIsActive(true);
    }

    function onMouseUp() {
      setIsActive(false);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, label'
    );

    function handleMouseEnter() {
      setIsActive(true);
    }
    function handleMouseLeave() {
      setIsActive(false);
    }

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${isActive ? 1.5 : 1})`,
      }}
      className={`pointer-events-none fixed z-50 w-6 h-6 rounded-full bg-blue-500 mix-blend-difference transition-transform duration-150`}
    />
  );
}
