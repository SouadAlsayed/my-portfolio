"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu03Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { navbarItems, socialLinks } from "../_lib/data";
import { useScrollToSection } from "../_lib/useScrollToSection";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const scrollToSection = useScrollToSection();

  return (
    <header className="absolute inset-x-0 z-50 top-0 text-secondary">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-end sm:justify-center px-6 z-50">
        <ul className="hidden items-center gap-10 sm:flex">
          {navbarItems.map((i) => (
            <li key={i}>
              <button
                className="transition-colors hover:text-white"
                onClick={() => {
                  scrollToSection(i);
                }}
              >
                <span className="text-primary">#</span>
                {i}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="cursor-pointer sm:hidden z-50"
          onClick={() => setOpenMenu((menu) => !menu)}
        >
          <HugeiconsIcon
            icon={openMenu ? Cancel01Icon : Menu03Icon}
            size={24}
            className="text-white"
          />
        </button>
      </nav>

      {openMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] sm:hidden"
            onClick={() => setOpenMenu(false)}
          />
          {/* Mobile navigation */}
          <div className="absolute left-0 right-0 top-16 z-50 border-t border-secondary bg-background px-6 py-6 shadow-lg sm:hidden">
            <ul className="flex flex-col gap-6">
              {navbarItems.map((i) => (
                <li key={i}>
                  <button
                    className="transition-colors hover:text-white"
                    onClick={() => {
                      setOpenMenu(false);
                      scrollToSection(i);
                    }}
                  >
                    <span className="text-primary">#</span>
                    {i}
                  </button>
                </li>
              ))}
              <div className="flex justify-center items-center gap-5">
                {socialLinks.map((l) => (
                  <a
                    href={l.href}
                    key={l.label}
                    target={l.label === "email" ? undefined : "_blank"}
                    rel={
                      l.label === "email" ? undefined : "noopener noreferrer"
                    }
                  >
                    <HugeiconsIcon
                      size={24}
                      icon={l.icon}
                      className="transition-colors hover:text-primary"
                    />
                  </a>
                ))}
              </div>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}

export default Navbar;
