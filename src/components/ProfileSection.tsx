"use client";

import { FC } from "react";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

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

  // Ambil profil pertama (jika hanya satu hero utama)
  const profile = profiles[0];

  return (
    <section
      id="profile-hero"
      className="
        w-full h-screen 
        px-8 md:px-32  
        flex flex-col md:flex-row
        items-center justify-between
      "
    >
      {/* Bagian Gambar Bundar (kiri) */}
      <div className="flex items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
        <div className="w-80 h-80 rounded-full overflow-hidden">
          <img
            src={profile.profile_picture_url}
            alt={profile.full_name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bagian Teks: Rata Kanan (kanan) */}
      <div className="flex flex-col justify-center w-full md:w-1/2 text-end">
        <h1 className="text-3xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {profile.full_name}
        </h1>
        <h2 className="text-lg md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-4">
          {profile.headline}
        </h2>
        <p className="text-sm md:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
          {profile.about}
        </p>

        {/* Info Kontak */}
        <div className="text-lg text-gray-700 dark:text-gray-300 space-y-1">
          <p className="flex items-center justify-end gap-2">
            <MapPin size={20} className="text-red-800" />
            <span>
              <strong>Location:</strong> {profile.location}
            </span>
          </p>
          <p className="flex items-center justify-end gap-2">
            <Mail size={20} className="text-blue-800" />
            <span>
              <strong>Email:</strong> {profile.contact_email}
            </span>
          </p>
          <p className="flex items-center justify-end gap-2">
            <Phone size={20} className="text-green-800" />
            <span>
              <strong>Phone:</strong> {profile.contact_number}
            </span>
          </p>
          <p className="flex items-center justify-end gap-2">
            <Globe size={20} className="text-cyan-700" />
            <span>
              <strong>Website:</strong> {profile.website}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
