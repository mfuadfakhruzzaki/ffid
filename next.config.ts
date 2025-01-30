import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Tambahkan domain yang diperlukan untuk memuat gambar
    domains: ["storage.googleapis.com"],
  },
};

export default nextConfig;
