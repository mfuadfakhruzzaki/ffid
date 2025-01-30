"use client";

import { FC, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

// Versi ringkas: Kirim data ke endpoint.
// Ganti `endpoint` jika URL API Anda berbeda.
interface ContactsSectionProps {
  endpoint?: string;
}

const ContactsSection: FC<ContactsSectionProps> = ({
  endpoint = "https://api.fuadfakhruz.id/contact",
}) => {
  // State untuk form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // State tambahan
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle Submit (fungsionalitas POST /contact)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validasi sederhana
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        throw new Error("Failed to submit contact");
      }

      // Asumsi response GIN: { "message": "success", "inserted_id": "<doc_id>" }
      await res.json();
      setSuccess("Mesaage submitted successfully.");

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Error submitting message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
        Contact Me
      </h2>

      <Card
        className="
          bg-white dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          shadow
          hover:shadow-lg mx-auto
        "
      >
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Send a Message
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
            Please fill the form below
          </CardDescription>
        </CardHeader>

        <CardContent className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-semibold text-sm text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="
                  w-full px-3 py-2 
                  border dark:border-gray-600 
                  rounded focus:outline-none 
                  bg-white dark:bg-gray-800 
                  text-gray-800 dark:text-gray-100
                "
                placeholder="Your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-semibold text-sm text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="
                  w-full px-3 py-2 
                  border dark:border-gray-600 
                  rounded focus:outline-none 
                  bg-white dark:bg-gray-800 
                  text-gray-800 dark:text-gray-100
                "
                placeholder="Your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-semibold text-sm text-gray-700 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="
                  w-full px-3 py-2 
                  border dark:border-gray-600 
                  rounded focus:outline-none 
                  bg-white dark:bg-gray-800 
                  text-gray-800 dark:text-gray-100
                "
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Error / Success Feedback */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="
                px-4 py-2 text-white font-semibold text-lg
                bg-blue-600 hover:bg-blue-700 
                rounded w-full
              "
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactsSection;
