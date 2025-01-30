// app/components/ProfilesSection.tsx
import { FC } from "react";

interface Profile {
  id: string;
  full_name: string;
  headline: string;
  about: string;
  profile_picture_url: string;
  cv_url: string;
  updated_at: string;
  location: string;
  contact_number: string;
  contact_email: string;
  website: string;
}

interface ProfilesSectionProps {
  profiles: Profile[];
}

const ProfilesSection: FC<ProfilesSectionProps> = ({ profiles }) => {
  if (!profiles || profiles.length === 0) {
    return <div>No profile data found.</div>;
  }

  // Misal hanya menampilkan profile pertama
  const profile = profiles[0];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {profile.full_name}
        </p>
        <p>
          <strong>Headline:</strong> {profile.headline}
        </p>
        <p>
          <strong>Location:</strong> {profile.location}
        </p>
        <p>
          <strong>Contact Email:</strong> {profile.contact_email}
        </p>
        <p>
          <strong>Contact Number:</strong> {profile.contact_number}
        </p>
        <p>
          <strong>About:</strong> {profile.about}
        </p>
      </div>
    </section>
  );
};

export default ProfilesSection;
