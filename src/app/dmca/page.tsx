import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy — MehndiGlow",
  description: "MehndiGlow DMCA copyright policy and image removal request process.",
};

export default function DMCAPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-serif text-3xl font-semibold text-henna-900 dark:text-henna-100 mb-2">DMCA Policy</h1>
      <div className="w-12 h-1 bg-henna-400 rounded mb-8" />
      <div className="space-y-6 text-henna-700 dark:text-henna-300 leading-relaxed text-sm">
        <p>MehndiGlow respects intellectual property rights. If you believe any content on this website infringes your copyright, please contact us immediately.</p>
        <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100">How to Submit a DMCA Notice</h2>
        <p>Send an email to <a href="mailto:dmca@mehndiglow.com" className="text-henna-400 hover:underline">dmca@mehndiglow.com</a> with the following:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Your full name and contact information</li>
          <li>The URL of the infringing content on our website</li>
          <li>Proof that you are the copyright owner</li>
          <li>A statement that you believe in good faith the use is unauthorized</li>
        </ul>
        <p>We will review and remove the content within <strong>24–48 hours</strong> of receiving a valid notice.</p>
      </div>
    </div>
  );
}
