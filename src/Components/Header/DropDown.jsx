// src/components/DropDown.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Props
 * - defaultOpen?: boolean
 * - onToggle?: (open:boolean)=>void
 * - closeOnOutside?: boolean (default true)
 * - closeOnEsc?: boolean (default true)
 * - label?: string (button label for screen readers; default "Menu")
 * - className?: string
 */
export default function DropDown({
  children,
  defaultOpen = false,
  onToggle,
  closeOnOutside = true,
  closeOnEsc = true,
  label = "Menu",
  className = "",
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      onToggle?.(next);
      return next;
    });
  };

  // Close on outside click
  useEffect(() => {
    if (!closeOnOutside || !open) return;
    const onDocClick = (e) => {
      const b = btnRef.current;
      const m = menuRef.current;
      if (!b || !m) return;
      if (b.contains(e.target) || m.contains(e.target)) return;
      setOpen(false);
      onToggle?.(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, [open, closeOnOutside, onToggle]);

  // Close on ESC
  useEffect(() => {
    if (!closeOnEsc || !open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        onToggle?.(false);
        btnRef.current?.focus?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeOnEsc, onToggle]);

  return (
    <div className={`cs-dropdown_wrap ${className}`} style={{ position: "relative" }}>
      <button
        type="button"
        ref={btnRef}
        className={`cs-munu_dropdown_toggle${open ? " active" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="cs-dropdown-menu"
        onClick={toggle}
      >
        <span aria-hidden="true"></span>
        <span className="sr-only" style={{ position: "absolute", clip: "rect(0 0 0 0)" }}>
          {label}
        </span>
      </button>

      <div
        id="cs-dropdown-menu"
        ref={menuRef}
        className={`cs-dropdown${open ? " open" : ""}`}
        hidden={!open}
      >
        {children}
      </div>
    </div>
  );
}
