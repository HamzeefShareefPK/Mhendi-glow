import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — MehndiGlow",
  description: "Read MehndiDesignPics terms and conditions — rules for using our mehndi design website, content policy and user guidelines.",
  keywords: [
    "mehndidesignpics terms","mehndi website terms of service",
    "henna website terms","mehndi design site terms",
    "mehndi platform terms","mehndi website user agreement",
    "mehndi design usage terms","henna design terms of use",
    "mehndi site rules","mehndi content policy",
    "mehndi design copyright terms","mehndi image use policy",
    "mehndi website conditions","mehndi legal terms",
    "mehndi design legal","henna art terms",
    "mehndi gallery terms","mehndi design platform rules",
    "mehndi site guidelines","mehndi website agreement",
    "mehndi user terms 2026","henna website user terms",
    "mehndi design download terms","mehndi free download policy",
    "mehndi commercial use terms","mehndi personal use terms",
    "mehndi design sharing terms","mehndi copyright notice",
    "mehndi intellectual property","henna design intellectual property",
    "mehndi site liability","mehndi platform liability",
    "mehndi service terms","henna service terms",
    "mehndi website rules 2026","mehndi design user rules",
    "mehndi age restriction","mehndi content guidelines",
    "mehndi acceptable use","henna acceptable use",
    "mehndi prohibited content","mehndi terms compliance",
    "henna site compliance","mehndi terms update",
    "mehndi terms notification","mehndi dispute terms",
    "henna dispute policy","mehndi terms violations",
    "mehndi disclaimer terms","mehndidesignpics terms 2026",
  ],
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
