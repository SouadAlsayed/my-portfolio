import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { projects } from "../_lib/data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="works"
      className="px-10 py-16 md:px-30 md:py-20 text-secondary min-h-screen relative
    after:pointer-events-none
    after:absolute
    after:bottom-[700px]
    after:right-0
    after:h-[80px]
    after:w-[70px]
    after:border
    after:border-secondary
    after:border-r-0
    after:opacity-70
    after:content-['']

    before:pointer-events-none
    before:absolute
    before:bottom-[680px]
    before:right-0
    before:h-[70px]
    before:w-[80px]
    before:border
    before:border-secondary
    before:border-r-0
    before:opacity-70
    before:content-['']
    "
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-16 md:mb-20">
        <SectionHeader title="projects" widthClass="w-3/5" />
        <div className="flex items-center sm:text-lg hover:text-white transition-colors">
          <Link href="#projects" className=" whitespace-nowrap w-fit px-2 py-2">
            View all
          </Link>
          <HugeiconsIcon size={18} icon={ArrowRight02Icon} />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 6).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
