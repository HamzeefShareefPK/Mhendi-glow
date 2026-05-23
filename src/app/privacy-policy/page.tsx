import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — MehndiGlow",
  description: "Read MehndiGlow privacy policy to understand how we collect and use your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-serif text-3xl font-semibold text-henna-900 dark:text-henna-100 mb-2">Privacy Policy</h1>
      <p className="text-sm text-henna-500 mb-8">Last updated: January 1, 2024</p>
      <div className="w-12 h-1 bg-henna-400 rounded mb-8" />

      <div className="space-y-8 text-henna-700 dark:text-henna-300 leading-relaxed">
        <section>
          <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-3">1. Information We Collect</h2>
          <p>MehndiGlow may collect the following information when you visit our website:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>Usage data (pages visited, time spent, browser type)</li>
            <li>Email address (if you subscribe to our newsletter)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-3">2. How We Use Your Information</h2>
          <p className="text-sm">We use the information to improve our website, provide personalized content, send newsletters (only if subscribed), and display relevant advertisements through Google AdSense.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-3">3. Google AdSense & Cookies</h2>
          <p className="text-sm">We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits. You can opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-henna-400 hover:underline">Google Ads Settings</a>.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-3">4. Third-Party Links</h2>
          <p className="text-sm">Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-3">5. Contact Us</h2>
          <p className="text-sm">If you have questions about this privacy policy, contact us at <a href="mailto:hello@mehndidesignpics.com" className="text-henna-400 hover:underline">hello@mehndidesignpics.com</a></p>
        </section>
      </div>
    </div>
  );
}
