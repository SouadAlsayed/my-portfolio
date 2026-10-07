import Image from "next/image";
import Link from "next/link";

import type { Project } from "../_lib/data";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col border border-secondary">
      {/* Image */}
      <div className="relative h-70 border-b">
        <Image
          fill
          quality={100}
          src={project.image}
          alt={project.title}
          className="object-cover object-center"
        />
      </div>

      {/* Tags */}
      <p className="border-b p-3">{project.tags.join(" ")}</p>

      {/* Content */}
      <div className="flex flex-col justify-center gap-3 p-3">
        <h3 className="text-lg text-white">{project.title}</h3>

        <p>{project.description}</p>

        {/* Links */}
        <div className="flex gap-3">
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit border border-primary bg-background px-5 py-2 text-white transition-colors hover:bg-[rgba(199,120,221,0.16)]"
            >
              Live
            </Link>
          )}

          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border border-secondary px-5 py-2 transition-colors hover:bg-[rgba(225,225,225,0.16)] hover:text-white"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
