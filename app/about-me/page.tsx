import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../_components/SectionHeader";
import Skills from "../_components/Skills";

export const metadata: Metadata = {
  title: "About me | Souad Alsayed",
  description:
    "Souad Alsayed is a front-end developer building clean, responsive interfaces with React and Next.js.",
};

const introClasses = [
  "relative px-10 pt-28 pb-16 md:px-30 md:pt-36 md:pb-20 text-secondary",
  "after:pointer-events-none after:absolute after:left-0 after:top-[420px]",
  "after:hidden md:after:block after:h-[60px] after:w-[50px] after:border",
  "after:border-primary after:border-l-0 after:opacity-70 after:content-['']",
].join(" ");

const portraitClasses = [
  "relative min-h-[320px] md:min-h-[520px]",
  "after:pointer-events-none after:absolute after:-top-10 after:-right-10",
  "after:h-[100px] after:w-[150px] after:border after:border-primary",
  "after:opacity-70 after:content-['']",
  "before:pointer-events-none before:absolute before:top-0 before:right-10",
  "before:h-[90px] before:w-[120px] before:border before:border-primary",
  "before:opacity-70 before:content-['']",
].join(" ");

const dots =
  "absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(171,178,191,0.75)_1px,transparent_1px)] bg-[length:12px_12px]";

const whatIDo = [
  {
    title: "Front-end development",
    text: "I build responsive, accessible interfaces with React, Next.js, and Tailwind CSS, from the layout down to the small interactions.",
  },
  {
    title: "Connecting data",
    text: "I wire interfaces to real data using Supabase, SQL, REST APIs, and tools like React Query and Redux Toolkit.",
  },
  {
    title: "Solving problems",
    text: "My C++ and computer science foundation shapes how I break problems down and keep code simple and maintainable.",
  },
];

const principles = [
  {
    title: "Keep it simple",
    text: "The best interface is the one people never have to think about.",
  },
  {
    title: "Build it to last",
    text: "Clear structure and reusable components make projects easy to change later.",
  },
  {
    title: "Keep learning",
    text: "Every project teaches me something new, and I try to apply it to the next one.",
  },
];

const currently = [
  "Growing my Next.js and TypeScript skills with every project",
  "Building more full-stack features with Supabase and SQL",
  "Looking for opportunities to join a team and ship real products",
];

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-2 border border-secondary p-4">
      <h3 className="text-lg text-white">{title}</h3>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section id="about-me" className={introClasses}>
        <div className="text-white mb-16 flex flex-col gap-4 md:mb-20">
          <h1 className="text-2xl sm:text-3xl ">
            <span className="text-primary">/</span>
            about-me
          </h1>
          <p>Who am I?</p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-4">
            <p className="font-pixel text-primary">{"// "}Hi, I&apos;m</p>
            <h2 className="text-2xl text-white md:text-3xl">Souad Alsayed</h2>

            <p className="leading-relaxed">
              I&apos;m a front-end developer who loves turning ideas into clean,
              responsive, and user-friendly interfaces. I build with React and
              Next.js, and I enjoy working on everything from small interactive
              apps to full booking and dashboard experiences.
            </p>

            <p className="leading-relaxed">
              My projects include a hotel booking website and admin dashboard, a
              travel tracker with an interactive map, a movie search app, and a
              pizza ordering app. I&apos;ve also worked in a team on CareerK,
              which taught me a lot about collaboration and clean, maintainable
              code.
            </p>

            <p className="leading-relaxed">
              Alongside web development, I have a solid foundation in C++, SQL,
              and core programming concepts, and I&apos;m always learning
              something new.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href="/#works"
                className="w-fit border border-primary bg-background px-5 py-2 text-white transition-colors hover:bg-[rgba(199,120,221,0.16)]"
              >
                View my work
              </Link>
              <Link
                href="/#contacts"
                className="w-fit border border-secondary px-5 py-2 transition-colors hover:bg-[rgba(225,225,225,0.16)] hover:text-white"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className={portraitClasses}>
            <div className={dots} />
            <Image
              src="/about1.png"
              alt="Souad Alsayed"
              fill
              priority
              quality={100}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="relative z-10 border-b border-primary object-contain object-bottom md:origin-bottom md:scale-110"
            />
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="px-10 py-16 text-secondary md:px-30 md:py-20">
        <div className="mb-12 flex items-center">
          <SectionHeader title="what-i-do" widthClass="w-1/2" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {whatIDo.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Skills (same component as the home page) */}
      <Skills />

      {/* How I work */}
      <section className="px-10 py-16 text-secondary md:px-30 md:py-20">
        <div className="mb-12 flex items-center">
          <SectionHeader title="how-i-work" widthClass="w-1/2" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Currently */}
      <section className="px-10 pb-16 text-secondary md:px-30 md:pb-20">
        <div className="mb-12 flex items-center">
          <SectionHeader title="currently" widthClass="w-1/3" />
        </div>
        <ul className="flex max-w-2xl flex-col gap-3">
          {currently.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed">
              <span className="text-primary">#</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
