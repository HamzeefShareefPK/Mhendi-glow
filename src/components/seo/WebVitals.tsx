// Web Vitals — Core Web Vitals tracking for Technical SEO
// Add to layout.tsx: <WebVitals />

"use client";

import { useEffect } from "react";

type Metric = {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
};

function sendToAnalytics(metric: Metric) {
  // Send to Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", metric.name, {
      value:          Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      metric_rating:  metric.rating,
      non_interaction: true,
    });
  }

  // Log in dev mode
  if (process.env.NODE_ENV === "development") {
    const color = metric.rating === "good" ? "🟢" : metric.rating === "needs-improvement" ? "🟡" : "🔴";
    console.log(`${color} ${metric.name}: ${metric.value} (${metric.rating})`);
  }
}

export default function WebVitals() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // LCP — Largest Contentful Paint (target < 2.5s)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      const value = lcp.startTime;
      sendToAnalytics({
        name: "LCP",
        value,
        rating: value < 2500 ? "good" : value < 4000 ? "needs-improvement" : "poor",
      });
    });
    try { lcpObserver.observe({ type: "largest-contentful-paint", buffered: true }); } catch {}

    // FID — First Input Delay (target < 100ms)
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        const value = entry.processingStart - entry.startTime;
        sendToAnalytics({
          name: "FID",
          value,
          rating: value < 100 ? "good" : value < 300 ? "needs-improvement" : "poor",
        });
      });
    });
    try { fidObserver.observe({ type: "first-input", buffered: true }); } catch {}

    // CLS — Cumulative Layout Shift (target < 0.1)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) clsValue += entry.value;
      });
      sendToAnalytics({
        name: "CLS",
        value: clsValue,
        rating: clsValue < 0.1 ? "good" : clsValue < 0.25 ? "needs-improvement" : "poor",
      });
    });
    try { clsObserver.observe({ type: "layout-shift", buffered: true }); } catch {}

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return null;
}
