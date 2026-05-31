import type { Metadata } from "next";

// Search result pages are thin/duplicate by nature, so keep them out of the
// index while still allowing crawlers to follow the links on them.
export const metadata: Metadata = {
  title: "Search Mehndi Designs",
  description: "Search 1000+ mehndi and henna designs on MehndiDesignPics.",
  alternates: { canonical: "https://mehndidesignpics.com/search" },
  robots: { index: false, follow: true },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
