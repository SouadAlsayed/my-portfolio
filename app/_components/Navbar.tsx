"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  Github01Icon,
  Linkedin01Icon,
  Mail01Icon,
  Menu03Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { useState } from "react";
const navbarItems = [
  {
    name: "home",
    href: "#home",
  },
  {
    name: "works",
    href: "#works",
  },
  {
    name: "about-me",
    href: "#about-me",
  },
  {
    name: "contacts",
    href: "#contacts",
  },
];
export const socialLinks = [
  {
    icon: Github01Icon,
    href: "https://github.com/SouadAlsayed",
    label: "github",
  },
  {
    icon: Linkedin01Icon,
    href: "https://www.linkedin.com/in/souad-alsayed/",
    label: "linkedin",
  },
  {
    icon: Mail01Icon,
    href: "mailto:souadalsayed.dev@gmail.com",
    label: "email",
  },
];
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="absolute inset-x-0 z-50 top-0 text-secondary">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-end sm:justify-center px-6 z-50">
        <div className="hidden items-center gap-10 sm:flex">
          {navbarItems.map((i) => (
            <Link
              href={i.href}
              key={i.name}
              className="transition-colors hover:text-white"
            >
              <span className="text-primary">#</span>
              {i.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden z-50"
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
            <div className="flex flex-col gap-6">
              {navbarItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="transition-colors hover:text-white"
                  onClick={() => setOpenMenu(false)}
                >
                  <span className="text-primary">#</span>
                  {item.name}
                </Link>
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
                      className="transition-colors hover:text-white"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Navbar;
