import type { Metadata } from "next";

import { projects } from "../_lib/data";
import ProjectCard from "../_components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Souad Alsayed",
  description:
    "All of Souad Alsayed's front-end projects: booking sites, dashboards, maps, and small React apps.",
};

const sectionClasses = [
  "relative px-10 pt-28 pb-16 md:px-30 md:pt-36 md:pb-20",
  "min-h-screen text-secondary",
  "after:pointer-events-none after:absolute after:right-0 after:top-[260px]",
  "after:h-[80px] after:w-[70px] after:border after:border-secondary",
  "after:border-r-0 after:opacity-70 after:content-['']",
].join(" ");

export default function ProjectsPage() {
  return (
    <section id="all-projects" className={sectionClasses}>
      <div className="text-white mb-16 flex flex-col gap-4 md:mb-20">
        <h1 className="text-2xl sm:text-3xl ">
          <span className="text-primary">/</span>
          projects
        </h1>
      </div>
      <p className="mb-8 font-pixel text-primary">
        {"// "}everything I&apos;ve built
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p className="mt-8 text-sm">Showing {projects.length} projects</p>
    </section>
  );
}
