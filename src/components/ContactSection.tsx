// app/components/ContactsSection.tsx
import { FC } from "react";

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
}

interface ContactsSectionProps {
  contacts: Contact[];
}

const ContactsSection: FC<ContactsSectionProps> = ({ contacts }) => {
  if (!contacts || contacts.length === 0) {
    return <div>No contacts found.</div>;
  }

  return (
    <section id="contact" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li key={contact.id} className="border p-4 rounded">
            <p>
              <strong>Name:</strong> {contact.name}
            </p>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>
            <p>
              <strong>Message:</strong> {contact.message}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactsSection;
