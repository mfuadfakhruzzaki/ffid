"use client";

import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

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
    <section
      id="honor"
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
        Honors
      </h2>

      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {honors.map((honor) => (
          <li key={honor.id}>
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
                  {honor.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                  Issued by {honor.issuer}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                <p className="mb-2">
                  <strong>Date Awarded:</strong> {honor.date_awarded}
                </p>
                <p>{honor.description}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HonorsSection;
