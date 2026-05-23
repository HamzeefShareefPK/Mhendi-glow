import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy — MehndiGlow",
  description: "MehndiGlow DMCA copyright policy and image removal request process.",
  keywords: [
    "mehndidesignpics dmca","mehndi website dmca","henna website dmca",
    "mehndi design copyright","mehndi image copyright removal",
    "mehndi dmca policy","henna dmca notice","mehndi copyright notice",
    "mehndi photo removal request","henna photo removal",
    "mehndi design removal","mehndi copyright claim",
    "mehndi intellectual property","henna intellectual property",
    "mehndi copyright infringement","henna copyright infringement",
    "mehndi dmca takedown","henna dmca takedown",
    "mehndi image takedown","mehndi photo copyright",
    "mehndi content removal","henna content removal",
    "mehndi copyright 2026","mehndi design ownership",
    "mehndi photo ownership","henna photo ownership",
    "report mehndi copyright","report henna copyright",
    "mehndi copyright contact","mehndi dmca contact",
    "mehndi site copyright","henna site copyright",
    "mehndi design attribution","henna design attribution",
    "mehndi unsplash copyright","mehndi stock photo rights",
    "henna stock photo rights","mehndi photography rights",
    "mehndi photographer rights","henna photographer rights",
    "mehndi image credit","henna image credit",
    "mehndi website copyright policy","mehndi legal copyright",
    "henna legal copyright","mehndi art copyright",
    "mehndi design rights","henna design rights",
    "mehndidesignpics copyright","mehndi dmca 2026",
  ],
};

export default function DMCAPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-serif text-3xl font-semibold text-henna-900 dark:text-henna-100 mb-2">DMCA Policy</h1>
      <div className="w-12 h-1 bg-henna-400 rounded mb-8" />
      <div className="space-y-6 text-henna-700 dark:text-henna-300 leading-relaxed text-sm">
        <p>MehndiGlow respects intellectual property rights. If you believe any content on this website infringes your copyright, please contact us immediately.</p>
        <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100">How to Submit a DMCA Notice</h2>
        <p>Send an email to <a href="mailto:dmca@mehndidesignpics.com" className="text-henna-400 hover:underline">dmca@mehndidesignpics.com</a> with the following:</p>
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
