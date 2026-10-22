import type { Metadata } from "next";
import ContactClient from "./ContactClient";

// Server component wrapper (same pattern as /ai-generator) so the contact
// page can carry its own metadata + self-referencing canonical; the
// interactive form lives in ContactClient.
export const metadata: Metadata = {
  title: "Contact MehndiDesignPics — Get in Touch",
  description:
    "Contact MehndiDesignPics for questions, feedback, image removal requests and collaboration. Email us at hello@mehndidesignpics.com.",
  alternates: { canonical: "https://mehndidesignpics.com/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
