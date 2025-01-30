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

const ExperiencesSection: FC<ExperiencesSectionProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return <div>No experience data available.</div>;
  }

  return (
    <section
      id="experience"
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
        Experiences
      </h2>

      {/* Grid atau list container */}
      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <li key={exp.id ?? index}>
            <Card
              className="
                bg-white dark:bg-gray-800 
                border border-gray-300 dark:border-gray-700
                shadow transition-transform hover:-translate-y-1 hover:shadow-lg
              "
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {exp.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                  {exp.company} — {exp.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-200">
                <p className="mb-2">
                  <strong>Period:</strong> {exp.start_date} - {exp.end_date}
                </p>
                <p className="leading-relaxed">{exp.description}</p>
              </CardContent>
              <CardFooter>
                <span className="text-xs text-blue-600 dark:text-blue-400 italic">
                  {exp.experience_type}
                </span>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperiencesSection;
