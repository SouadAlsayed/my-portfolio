"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { navbarItems, socialLinks } from "./Navbar";
import Link from "next/link";
import { ArrowUp02Icon } from "@hugeicons/core-free-icons";

function Footer() {
  return (
    <footer className="px-10 pt-14 pb-8 md:px-30 text-secondary">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 justify-between md:items-start">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg text-white">Souad Alsayed</h2>
          <p>Front-end developer</p>
          <p className="max-w-xs text-sm leading-relaxed">
            Building clean, responsive, and user-friendly web experiences.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <h3 className="text-white">Quick links</h3>
          <ul className="flex flex-col gap-1">
            {navbarItems.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block py-1 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white">Let&apos;s connect</h3>
          <div className="flex items-center gap-3">
            {socialLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                title={l.label}
                target={l.label === "email" ? undefined : "_blank"}
                rel={l.label === "email" ? undefined : "noopener noreferrer"}
                className="transition-colors hover:text-primary"
              >
                <HugeiconsIcon size={24} icon={l.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 flex flex-col gap-4 border-t border-secondary pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Souad Alsayed. All rights reserved.</p>

        <Link
          href="#"
          className="flex w-fit items-center gap-2 transition-colors hover:text-white"
        >
          Back to top
          <HugeiconsIcon size={16} icon={ArrowUp02Icon} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
