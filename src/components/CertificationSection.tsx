// app/components/CertificationsSection.tsx
import { FC } from "react";

interface Certification {
  id: string;
  name: string;
  issuing_organization: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: FC<CertificationsSectionProps> = ({
  certifications,
}) => {
  if (!certifications || certifications.length === 0) {
    return <div>No certifications found.</div>;
  }

  return (
    <section id="certification" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <ul className="space-y-4">
        {certifications.map((cert) => (
          <li key={cert.id} className="border p-4 rounded">
            <p>
              <strong>Name:</strong> {cert.name}
            </p>
            <p>
              <strong>Issued By:</strong> {cert.issuing_organization}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationsSection;
