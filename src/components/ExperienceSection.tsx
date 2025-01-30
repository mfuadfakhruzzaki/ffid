// app/components/ExperiencesSection.tsx
import { FC } from "react";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  experience_type: string;
  date_range: string;
}

interface ExperiencesSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperiencesSectionProps) {
  if (!experiences || experiences.length === 0) {
    return <div>No experience data available.</div>;
  }

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Experiences</h2>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          // Gunakan key unik, misalnya exp.id, fallback ke index jika id tidak ada
          <li key={exp.id ?? index} className="border p-4 rounded-md">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-600">{exp.location}</p>
            <p className="text-gray-500">
              {exp.start_date} - {exp.end_date}
            </p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
            <span className="text-sm text-blue-600 italic">
              {exp.experience_type}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExperienceSection;
