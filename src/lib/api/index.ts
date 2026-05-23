// Combined API utilities for fetching from external sources

export { fetchPinterestImages, searchPinterestImages } from "./pinterest";
export { fetchUnsplashImages, searchUnsplashByCategory } from "./unsplash";

export async function fetchCombinedImages(
  query: string = "mehndi designs",
  limit: number = 12
) {
  try {
    const [unsplashRes, pinterestRes] = await Promise.all([
      fetch(`/api/images/unsplash?query=${encodeURIComponent(query)}&limit=${limit}`),
      fetch(`/api/images/pinterest?query=${encodeURIComponent(query)}&limit=${limit}`),
    ]);

    const unsplashData = unsplashRes.ok ? await unsplashRes.json() : { data: [] };
    const pinterestData = pinterestRes.ok ? await pinterestRes.json() : { data: [] };

    return {
      unsplash: unsplashData.data || [],
      pinterest: pinterestData.data || [],
      combined: [...(unsplashData.data || []), ...(pinterestData.data || [])],
    };
  } catch (error) {
    console.error("Error fetching combined images:", error);
    return {
      unsplash: [],
      pinterest: [],
      combined: [],
    };
  }
}

export async function fetchByCategory(
  category: string,
  limit: number = 12
) {
  try {
    const [unsplashRes, pinterestRes] = await Promise.all([
      fetch(`/api/images/unsplash?category=${encodeURIComponent(category)}&limit=${limit}`),
      fetch(`/api/images/pinterest?category=${encodeURIComponent(category)}&limit=${limit}`),
    ]);

    const unsplashData = unsplashRes.ok ? await unsplashRes.json() : { data: [] };
    const pinterestData = pinterestRes.ok ? await pinterestRes.json() : { data: [] };

    return {
      unsplash: unsplashData.data || [],
      pinterest: pinterestData.data || [],
      combined: [...(unsplashData.data || []), ...(pinterestData.data || [])],
    };
  } catch (error) {
    console.error("Error fetching category images:", error);
    return {
      unsplash: [],
      pinterest: [],
      combined: [],
    };
  }
}
