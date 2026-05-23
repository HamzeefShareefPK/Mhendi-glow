import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — MehndiGlow",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-serif text-3xl font-semibold text-henna-900 dark:text-henna-100 mb-2">Disclaimer</h1>
      <div className="w-12 h-1 bg-henna-400 rounded mb-8" />
      <div className="space-y-5 text-henna-700 dark:text-henna-300 leading-relaxed text-sm">
        <p>The information on MehndiGlow is for general informational purposes only. We make no warranties about the accuracy or completeness of this information.</p>
        <p>All mehndi images on this website are either original, licensed, or sourced from free-to-use platforms. If you believe any image is incorrectly attributed, please contact us via our DMCA page.</p>
        <p>MehndiGlow participates in affiliate programs. Some links on this site may be affiliate links, meaning we earn a small commission if you purchase through them — at no extra cost to you.</p>
        <p>For image removal requests, please visit our <a href="/dmca" className="text-henna-400 hover:underline">DMCA page</a>.</p>
      </div>
    </div>
  );
}
