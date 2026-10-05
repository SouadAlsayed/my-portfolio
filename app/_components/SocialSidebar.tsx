"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { socialLinks } from "./Navbar";

export default function SocialSidebar() {
  return (
    <aside className="text-secondary fixed left-0 top-0 z-50 hidden h-screen w-20 sm:flex">
      <div className="mx-auto flex flex-col items-center">
        <div className="h-50 w-px bg-secondary" />

        <div className="flex flex-col gap-5 py-5">
          {socialLinks.map((l) => (
            <Link href={l.href} key={l.label}>
              <HugeiconsIcon
                size={24}
                icon={l.icon}
                className="transition-colors hover:text-white"
              />
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
