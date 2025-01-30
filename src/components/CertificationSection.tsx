"use client";

import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

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
    <section
      id="certification"
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
        Certifications
      </h2>

      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {certifications.map((cert) => (
          <li key={cert.id}>
            <Card
              className="
                bg-white dark:bg-gray-800
                border border-gray-300 dark:border-gray-700
                shadow
                transition-transform hover:-translate-y-1 hover:shadow-lg
              "
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Award className="text-blue-500" size={24} />
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {cert.name}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                  <span>Issuing Organization:&nbsp;</span>
                  <Badge variant="secondary" className="border border-gray-200">
                    {cert.issuing_organization}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-200">
                <p>
                  {/* Tambahkan keterangan tambahan jika perlu */}
                  This certification demonstrates proficiency in{" "}
                  <span className="font-semibold">{cert.name}</span>.
                </p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationsSection;
