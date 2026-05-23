"use client";

import { useState, useEffect } from "react";

interface UseExternalImagesOptions {
  category?: string;
  query?: string;
  limit?: number;
}

export function useExternalImages(options: UseExternalImagesOptions = {}) {
  const { category, query = "mehndi designs", limit = 12 } = options;
  const [data, setData] = useState<{ unsplash: unknown[]; pinterest: unknown[]; combined: unknown[] }>({
    unsplash: [],
    pinterest: [],
    combined: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          [category ? "category" : "query"]: category || query,
          limit: limit.toString(),
        });

        const [unsplashRes, pinterestRes] = await Promise.all([
          fetch(`/api/images/unsplash?${params}`),
          fetch(`/api/images/pinterest?${params}`),
        ]);

        const unsplashData = await unsplashRes.json();
        const pinterestData = await pinterestRes.json();

        setData({
          unsplash: unsplashData.data || [],
          pinterest: pinterestData.data || [],
          combined: [...(unsplashData.data || []), ...(pinterestData.data || [])],
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch images"));
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [category, query, limit]);

  return { ...data, loading, error };
}
