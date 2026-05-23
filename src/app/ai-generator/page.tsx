import type { Metadata } from "next";
import AiGeneratorClient from "./AiGeneratorClient";

export const metadata: Metadata = {
  title: "AI Mehndi Design Generator 2024 | MehndiGlow",
  description: "Generate beautiful mehndi designs using AI. Describe your style — bridal, Arabic, Pakistani, minimal — and get instant design inspiration.",
};

export default function AiGeneratorPage() {
  return <AiGeneratorClient />;
}
