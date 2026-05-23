import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — MehndiGlow",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-serif text-3xl font-semibold text-henna-900 dark:text-henna-100 mb-2">Terms & Conditions</h1>
      <p className="text-sm text-henna-500 mb-8">Last updated: January 1, 2024</p>
      <div className="w-12 h-1 bg-henna-400 rounded mb-8" />
      <div className="space-y-6 text-henna-700 dark:text-henna-300 leading-relaxed text-sm">
        <section>
          <h2 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">1. Acceptance of Terms</h2>
          <p>By accessing MehndiGlow, you agree to be bound by these terms and conditions.</p>
        </section>
        <section>
          <h2 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">2. Use of Content</h2>
          <p>Images on MehndiGlow are for personal inspiration only. Commercial use without permission is prohibited. Downloading images for personal use is allowed.</p>
        </section>
        <section>
          <h2 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">3. Intellectual Property</h2>
          <p>All original content, logos, and designs on MehndiGlow are the property of MehndiGlow. Unauthorized reproduction is not permitted.</p>
        </section>
        <section>
          <h2 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">4. Limitation of Liability</h2>
          <p>MehndiGlow is not liable for any damages arising from the use of this website or its content.</p>
        </section>
        <section>
          <h2 className="font-serif text-lg font-semibold text-henna-900 dark:text-henna-100 mb-2">5. Contact</h2>
          <p>Questions? Email us at <a href="mailto:hello@mehndidesignpics.com" className="text-henna-400 hover:underline">hello@mehndidesignpics.com</a></p>
        </section>
      </div>
    </div>
  );
}
