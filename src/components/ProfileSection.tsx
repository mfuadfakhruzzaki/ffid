"use client";

import { FC } from "react";
import { MapPin, Mail, Phone, Globe, Download } from "lucide-react";

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

interface ProfileSectionProps {
  profiles: Profile[];
}

const ProfilesSection: FC<ProfileSectionProps> = ({ profiles }) => {
  if (!profiles || profiles.length === 0) {
    return <div>No profile data found.</div>;
  }

  const profile = profiles[0]; // Ambil profil pertama jika hanya ada satu

  return (
    <section
      id="profile-hero"
      className="
        w-full min-h-screen
        flex flex-col md:flex-row
        items-center
        px-4 sm:px-8 md:px-32
        py-8 gap-8
      "
    >
      {/* Bagian Gambar Bundar */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="rounded-full overflow-hidden w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80">
          <img
            src={profile.profile_picture_url}
            alt={profile.full_name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bagian Teks */}
      <div
        className="flex flex-col w-full md:w-1/2 
                   text-center md:text-end 
                   items-center md:items-end 
                   gap-4"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          {profile.full_name}
        </h1>
        <h2 className="text-base sm:text-lg md:text-2xl font-medium text-gray-600 dark:text-gray-300">
          {profile.headline}
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200 leading-relaxed max-w-lg">
          {profile.about}
        </p>

        {/* Info Kontak */}
        <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 space-y-1">
          <p className="flex items-center gap-2 justify-center md:justify-end">
            <MapPin size={20} className="text-red-800" />
            <span>
              <strong>Location:</strong> {profile.location}
            </span>
          </p>
          <p className="flex items-center gap-2 justify-center md:justify-end">
            <Mail size={20} className="text-blue-800" />
            <span>
              <strong>Email:</strong> {profile.contact_email}
            </span>
          </p>
          <p className="flex items-center gap-2 justify-center md:justify-end">
            <Phone size={20} className="text-green-800" />
            <span>
              <strong>Phone:</strong> {profile.contact_number}
            </span>
          </p>
          <p className="flex items-center gap-2 justify-center md:justify-end">
            <Globe size={20} className="text-cyan-700" />
            <span>
              <strong>Website:</strong> {profile.website}
            </span>
          </p>
        </div>

        {/* Tombol Download CV */}
        {profile.cv_url && (
          <a
            href={profile.cv_url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center md:justify-end gap-2
              px-4 py-2 text-md font-semibold
              rounded-md transition
              text-white bg-black hover:bg-gray-800
              dark:bg-blue-600 dark:hover:bg-blue-700
            "
          >
            <Download size={20} />
            Download CV
          </a>
        )}
      </div>
    </section>
  );
};

export default ProfilesSection;
