// app/components/EducationsSection.tsx
"use client";

import { FC } from "react";

interface Education {
  id: string;
  institution: string;
  degree: string;
  field_of_study: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
}

interface EducationsSectionProps {
  educations: Education[];
}

const EducationsSection: FC<EducationsSectionProps> = ({ educations }) => {
  if (!educations || educations.length === 0) {
    return <div>No education data found.</div>;
  }

  return (
    <section
      id="education"
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
        Education
      </h2>

      <ul className="space-y-6">
        {educations.map((edu) => (
          <li
            key={edu.id}
            className="
              bg-white dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              rounded-lg shadow
              p-4
              text-gray-700 dark:text-gray-200
              space-y-2
            "
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {edu.institution}
            </h3>
            <p className="text-sm md:text-base">
              <strong>Degree:</strong> {edu.degree}
            </p>
            <p className="text-sm md:text-base">
              <strong>Field of Study:</strong> {edu.field_of_study}
            </p>
            <p className="text-sm md:text-base">
              <strong>Location:</strong> {edu.location}
            </p>
            <p className="text-sm md:text-base">
              <strong>Period:</strong> {edu.start_date} - {edu.end_date}
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              {edu.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EducationsSection;
