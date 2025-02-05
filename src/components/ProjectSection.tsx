"use client";

import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react"; // ikon link lucide-react (opsional)

interface Project {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  project_url?: string;
  tech_stack?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <section
      id="project"
      className="
        w-full 
        py-8
        px-4 sm:px-8 md:px-32
      "
    >
      <h2
        className="
          text-2xl sm:text-3xl md:text-4xl
          font-bold
          text-gray-800 dark:text-gray-100
          mb-6
        "
      >
        Projects
      </h2>

      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <Card
              className="
                bg-white dark:bg-gray-800
                border border-gray-300 dark:border-gray-700
                shadow
                transition-transform hover:-translate-y-1 hover:shadow-lg
              "
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                  {project.start_date} - {project.end_date}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                <p>{project.description}</p>

                {/* Tech Stack */}
                {project.tech_stack && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech_stack
                      .split(",")
                      .map((tech) => tech.trim())
                      .map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex items-center justify-end">
                {/* Project URL (opsional) */}
                {project.project_url && (
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1
                      text-sm font-medium text-blue-600 dark:text-blue-400
                      hover:underline
                    "
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                )}
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
