// app/components/EducationsSection.tsx
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
    <section id="education" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Educations</h2>
      <ul className="space-y-4">
        {educations.map((edu) => (
          <li key={edu.id} className="border p-4 rounded">
            <p>
              <strong>Institution:</strong> {edu.institution}
            </p>
            <p>
              <strong>Degree:</strong> {edu.degree}
            </p>
            <p>
              <strong>Field of Study:</strong> {edu.field_of_study}
            </p>
            <p>
              <strong>Location:</strong> {edu.location}
            </p>
            <p>
              <strong>Period:</strong> {edu.start_date} - {edu.end_date}
            </p>
            <p>
              <strong>Description:</strong> {edu.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EducationsSection;
