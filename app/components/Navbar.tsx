"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate } from "motion";

const sections = ["home", "projects", "about", "contact"];

export default function Navbar() {
  const [active, setActive] = useState<string>("home");

  // refs for anchor elements
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({});
  // indicator ref
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  // nav container ref (so we can ensure relative positioning)
  const navRef = useRef<HTMLElement | null>(null);

  // Observe sections to update active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible entry (or first intersecting)
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActive(visible.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Animate indicator when active changes
  useEffect(() => {
    const activeEl = refs.current[active];
    const indicator = indicatorRef.current;

    if (activeEl && indicator) {
      const { offsetLeft, offsetWidth } = activeEl;

      // animate expects numbers/strings; pass px for clarity
      animate(
        indicator as Element,
        {
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
          opacity: 1,
        } as Record<string, string | number>,
        {
          duration: 0.28,
          easing: "ease-out",
        } as Record<string, string | number>
      );
    } else if (indicator) {
      animate(indicator, { opacity: 0 }, { duration: 0.18 });
    }
  }, [active]);

  return (
    <nav
      ref={navRef}
      className="fixed flex gap-4 p-2 px-4 text-white bg-white/10 z-[999] rounded-3xl 
      backdrop-blur-sm left-1/2 -translate-x-1/2 top-6"
      aria-label="Main navigation"
    >
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          // IMPORTANT: use a block ref callback so it returns void (no expression return)
          ref={(el) => {
            refs.current[section] = el;
          }}
          className={`relative px-2 py-1 capitalize transition-colors rounded-full  ${
            active === section ? "gradient-blue" : "text-gray-400"
          }`}
        >
          {section}
        </a>
      ))}

      {/* Moving indicator */}
      <div
        ref={indicatorRef}
        className="absolute bottom-0 h-[2px] bg-blue-400 rounded-3xl"
        style={{ left: 0, width: 0, opacity: 0, willChange: "left, width" }}
        aria-hidden
      />
    </nav>
  );
}
