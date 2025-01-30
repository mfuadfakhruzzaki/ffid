// app/components/HonorsSection.tsx
import { FC } from "react";

interface Honor {
  id: string;
  title: string;
  issuer: string;
  date_awarded: string;
  description: string;
}

interface HonorsSectionProps {
  honors: Honor[];
}

const HonorsSection: FC<HonorsSectionProps> = ({ honors }) => {
  if (!honors || honors.length === 0) {
    return <div>No honors found.</div>;
  }

  return (
    <section id="honor" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Honors</h2>
      <ul className="space-y-4">
        {honors.map((honor) => (
          <li key={honor.id} className="border p-4 rounded">
            <p>
              <strong>Title:</strong> {honor.title}
            </p>
            <p>
              <strong>Issuer:</strong> {honor.issuer}
            </p>
            <p>
              <strong>Date Awarded:</strong> {honor.date_awarded}
            </p>
            <p>
              <strong>Description:</strong> {honor.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HonorsSection;
