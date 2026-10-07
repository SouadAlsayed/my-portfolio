"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const sectionClasses = [
  "relative isolate grid min-h-screen",
  "grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]",
  "items-center gap-14 overflow-hidden",
  "px-10 py-16 sm:px-30 sm:py-20",
  "bg-[radial-gradient(circle_at_82%_35%,rgba(199,120,221,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_42%)]",
  "after:pointer-events-none after:absolute after:bottom-[35px] after:right-0",
  "after:h-[58px] after:w-[58px] after:border after:border-secondary",
  "after:border-r-0 after:opacity-70 after:content-['']",
].join(" ");

const frameClasses = [
  "group relative flex h-[450px] items-end justify-center overflow-hidden",
  "border border-primary bg-[#16131f] rotate-[1deg]",
  "shadow-[18px_18px_0_rgba(199,120,221,0.18),0_0_70px_rgba(192,140,255,0.18)]",
  "transition-all duration-[700ms] ease-in-out",
  "hover:-translate-y-2 hover:rotate-0",
  "hover:shadow-[22px_22px_0_rgba(199,120,221,0.28),0_0_90px_rgba(192,140,255,0.28)]",
].join(" ");

const imageClasses = [
  "object-cover object-center saturate-[0.82] contrast-[1.08]",
  "transition-all duration-[1000ms] ease-in-out",
  "group-hover:scale-[1.04] group-hover:saturate-[1.15] group-hover:contrast-[1.1]",
].join(" ");

const overlayClasses =
  "pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(20,14,32,0.05),rgba(20,14,32,0.18)_62%,rgba(20,14,32,0.84))]";

function Hero() {
  const [role, setRole] = useState(0);
  const roles = ["Front-end developer", "Web developer", "Creative builder"];
  useEffect(() => {
    const timer = window.setInterval(
      () => setRole((current) => (current + 1) % roles.length),
      2400,
    );
    return () => window.clearInterval(timer);
  }, [roles.length]);
  return (
    <section id="home" className={sectionClasses}>
      <div className="flex flex-col justify-between gap-7 sm:gap-10">
        <p className="text-primary ">{"// "}Hi, I&apos;m</p>
        <div className="text-3xl sm:text-6xl md:text-7xl leading-12 sm:leading-16 md:leading-20 ">
          <h1 className="font-pixel ">Souad Alsayed</h1>
          <h1 className="font-bold text-primary text-4xl sm:text-6xl md:text-7xl h-16 sm:h-40">
            {roles[role]}
          </h1>
        </div>
        <p className="text-secondary">
          I turn ideas into digital experiences that feel simple, intuitive, and
          a little more memorable.
        </p>
        <button
          className="w-fit px-5 py-2 border border-primary bg-background hover:bg-[rgba(199,120,221,0.16)] transition-colors"
          onClick={() => {
            document
              .getElementById("contacts")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact me
        </button>
      </div>
      <div className={frameClasses}>
        <Image
          fill
          priority
          quality={100}
          src="/heropic.jpg"
          alt="Developer working at a multi-monitor desk overlooking a city at night"
          className={imageClasses}
        />

        <div className={overlayClasses} />
      </div>
    </section>
  );
}

export default Hero;
