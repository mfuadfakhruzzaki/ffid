// app/components/ProjectsSection.tsx
import { FC } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <section id="project" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="border p-4 rounded">
            <p>
              <strong>Title:</strong> {project.title}
            </p>
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p>
              <strong>Period:</strong> {project.start_date} - {project.end_date}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
