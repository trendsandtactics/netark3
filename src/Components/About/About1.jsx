// src/components/Common/ScrollToTopStrong.jsx
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Find likely scroll containers (window + common wrappers) */
const findScrollRoots = () => {
  const nodes = new Set([
    window,
    document.scrollingElement,
    document.documentElement,
    document.body,
    document.getElementById("root"),
    document.querySelector("main"),
    document.querySelector(".page-wrapper"),
    document.querySelector(".app"),
    document.querySelector("[data-scroll-root]"),
  ].filter(Boolean));
  return Array.from(nodes);
};

const scrollToTopAll = () => {
  const roots = findScrollRoots();
  for (const root of roots) {
    if (root === window) {
      window.scrollTo(0, 0);
    } else if (root && typeof root.scrollTo === "function") {
      try { root.scrollTo(0, 0); } catch {}
    } else if (root && "scrollTop" in root) {
      try { root.scrollTop = 0; } catch {}
    }
  }
};

export default function ScrollToTopStrong() {
  const { pathname, hash } = useLocation();

  // 1) run before paint to avoid visible jump
  useLayoutEffect(() => {
    if (!hash) scrollToTopAll();
  }, [pathname, hash]);

  // 2) run again right after paint
  useEffect(() => {
    if (!hash) {
      requestAnimationFrame(() => scrollToTopAll());
      // 3) run once more after images/fonts settle
      const t = setTimeout(scrollToTopAll, 250);
      return () => clearTimeout(t);
    }
  }, [pathname, hash]);

  // If URL has a #anchor, scroll to that element instead
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [hash]);

  return null;
}
