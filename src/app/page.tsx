// app/page.tsx
import ProfilesSection from "@/components/ProfileSection";
import EducationsSection from "@/components/EducationSection";
import ExperiencesSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationSection";
import ProjectsSection from "@/components/ProjectSection";
import HonorsSection from "@/components/HonorSection";
import ContactsSection from "@/components/ContactSection";

export default async function HomePage() {
  // 1. Fetch Profiles
  const profilesRes = await fetch("https://api.fuadfakhruz.id/profiles", {
    // Tambah { cache: "no-store" } jika perlu data real-time
    // Tambah headers: { Authorization: `Bearer YOUR_TOKEN` } jika butuh token
  });
  if (!profilesRes.ok) {
    throw new Error("Failed to fetch profiles");
  }
  const profilesData = await profilesRes.json();

  // 2. Fetch Educations
  const educationsRes = await fetch("https://api.fuadfakhruz.id/educations");
  if (!educationsRes.ok) {
    throw new Error("Failed to fetch educations");
  }
  const educationsData = await educationsRes.json();

  // 3. Fetch Experiences
  const experiencesRes = await fetch("https://api.fuadfakhruz.id/experiences");
  if (!experiencesRes.ok) {
    throw new Error("Failed to fetch experiences");
  }
  const experiencesData = await experiencesRes.json();

  // 4. Fetch Certifications
  const certificationsRes = await fetch(
    "https://api.fuadfakhruz.id/certifications"
  );
  if (!certificationsRes.ok) {
    throw new Error("Failed to fetch certifications");
  }
  const certificationsData = await certificationsRes.json();

  // 5. Fetch Projects
  const projectsRes = await fetch("https://api.fuadfakhruz.id/projects");
  if (!projectsRes.ok) {
    throw new Error("Failed to fetch projects");
  }
  const projectsData = await projectsRes.json();

  // 6. Fetch Honors
  const honorsRes = await fetch("https://api.fuadfakhruz.id/honors");
  if (!honorsRes.ok) {
    throw new Error("Failed to fetch honors");
  }
  const honorsData = await honorsRes.json();

  // 7. Fetch Contacts (opsional)
  const contactsRes = await fetch("https://api.fuadfakhruz.id/contact");
  if (!contactsRes.ok) {
    throw new Error("Failed to fetch contacts");
  }
  const contactsData = await contactsRes.json();

  return (
    <div className="max-w-screen-2xl items-center justify-center mx-auto my-2">
      {/* Masing-masing komponen menerima data JSON dari endpoint terkait */}
      <ProfilesSection profiles={profilesData} />
      <EducationsSection educations={educationsData} />
      <ExperiencesSection experiences={experiencesData} />
      <CertificationsSection certifications={certificationsData} />
      <ProjectsSection projects={projectsData} />
      <HonorsSection honors={honorsData} />
      <ContactsSection contacts={contactsData} />
    </div>
  );
}
