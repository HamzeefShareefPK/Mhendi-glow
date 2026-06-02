import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MehndiGlow — Your Mehndi Inspiration Hub",
  description: "Learn about MehndiGlow — your go-to destination for beautiful mehndi designs, tutorials and trends.",
  keywords: [
    "about mehndidesignpics","mehndi design website","henna design website",
    "mehndi inspiration site","mehndi design platform","free mehndi designs",
    "mehndi design collection","who made mehndidesignpics","mehndi website 2026",
    "best mehndi website","top mehndi designs","mehndi design hub",
    "henna design hub","mehndi art website","mehndi photo gallery",
    "bridal mehndi website","arabic mehndi site","mehndi community",
    "mehndi design resource","mehndi design source","mehndi art platform",
    "mehndi design blog","about henna website","free henna designs online",
    "mehndi design download free","mehndi design inspiration","mehndi designers",
    "mehndi enthusiasts","henna enthusiasts","mehndi trends 2026",
    "best henna designs 2026","beautiful mehndi designs","mehndi wallpaper",
    "mehndi design images free","mehndi design pictures","mehndi photo download",
    "mehndi design info","mehndi history","henna history",
    "mehndi design guide","mehndi artist resources","professional mehndi",
    "mehndi for wedding","mehndi for eid","mehndi for bridal",
    "mehndi for girls","mehndi for women","mehndi for kids",
    "mehndi design portal","mehndidesignpics about",
  ],
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-henna-900 dark:text-henna-100 mb-4">
        About MehndiGlow
      </h1>
      <div className="w-12 h-1 bg-henna-400 rounded mb-8" />

      <div className="prose prose-henna max-w-none text-henna-700 dark:text-henna-300 leading-relaxed space-y-5">
        <p>
          Welcome to <strong className="text-henna-400">MehndiGlow</strong> — your ultimate destination for beautiful mehndi designs, tutorials, and inspiration.
        </p>
        <p>
          We are a passionate team of mehndi lovers who believe that every design tells a story. Our mission is to bring you the most beautiful, trending, and unique mehndi designs from around the world — all in one place.
        </p>
        <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mt-8">What We Offer</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>1000+ curated mehndi designs across 25+ categories</li>
          <li>Bridal, Arabic, Pakistani, Eid, Minimal, and more</li>
          <li>SEO-friendly image names and alt text for easy discovery</li>
          <li>Step-by-step mehndi tutorials for beginners</li>
          <li>Seasonal collections — Eid, Wedding Season, Festivals</li>
          <li>Free downloads for personal use</li>
        </ul>
        <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mt-8">Our Mission</h2>
        <p>
          To be the most trusted and beautiful mehndi inspiration platform on the internet — helping girls, brides, and mehndi artists find the perfect design for every occasion.
        </p>
        <h2 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mt-8">Contact Us</h2>
        <p>
          Have a question or want to collaborate? Reach us at{" "}
          <a href="mailto:hello@mehndidesignpics.com" className="text-henna-400 hover:underline">
            hello@mehndidesignpics.com
          </a>
        </p>
      </div>
    </div>
  );
}
