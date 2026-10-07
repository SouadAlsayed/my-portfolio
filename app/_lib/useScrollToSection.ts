"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

/**
 * Scrolls smoothly to a section if it exists on the current page.
 * Otherwise (e.g. you're on /projects or /about) it goes to the home page
 * and lands on that section.
 */
export function useScrollToSection() {
  const router = useRouter();

  return useCallback(
    (id: string) => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }

      router.push(`/#${id}`);
    },
    [router],
  );
}
