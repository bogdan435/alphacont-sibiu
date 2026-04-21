"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    const frame = window.requestAnimationFrame(() => {
      setMounted(true);
      handleScroll();
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted || !visible) return null;

  return (
    <button
      className="scroll-top-button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <span className="scroll-top-icon">↑</span>
    </button>
  );
}
