export interface UnsplashImage {
  id: string;
  url: string;
  title: string;
  description: string;
  photographer: string;
  photographerUrl: string;
  likes: number;
  downloads: number;
}

export async function fetchUnsplashImages(
  query: string = "mehndi designs",
  limit: number = 12,
  page: number = 1
): Promise<UnsplashImage[]> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Unsplash API key not configured");
  }

  try {
    const params = new URLSearchParams({
      query,
      per_page: limit.toString(),
      page: page.toString(),
      orientation: "portrait",
    });

    const response = await fetch(
      `https://api.unsplash.com/search/photos?${params}`,
      {
        headers: { Authorization: `Client-ID ${accessKey}` },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.statusText}`);
    }

    const data = await response.json();

    const images: UnsplashImage[] = (data.results || [])
      .slice(0, limit)
      .map((photo: any) => ({
        id: photo.id,
        url: photo.urls.regular,
        title: photo.alt_description || "Mehndi Design",
        description: photo.description || photo.alt_description || "Beautiful mehndi design",
        photographer: photo.user.name,
        photographerUrl: photo.user.links.html,
        likes: photo.likes,
        downloads: photo.downloads,
      }));

    return images;
  } catch (error) {
    console.error("Error fetching Unsplash images:", error);
    return [];
  }
}

export async function searchUnsplashByCategory(
  category: string,
  limit: number = 12
): Promise<UnsplashImage[]> {
  // Map mehndi categories to search queries
  const searchQueries: Record<string, string> = {
    "bridal-mehndi-design": "bridal mehndi henna designs",
    "arabic-mehndi-design": "arabic mehndi henna patterns",
    "pakistani-mehndi-design": "pakistani mehndi henna",
    "eid-mehndi-design": "eid mehndi henna festive",
    "finger-mehndi-design": "finger mehndi henna simple",
    "feet-mehndi-design": "feet ankle mehndi henna",
    "minimal-mehndi-design": "minimal mehndi henna simple",
    "indian-mehndi-design": "indian mehndi henna traditional",
  };

  const query = searchQueries[category] || "mehndi henna designs";
  return fetchUnsplashImages(query, limit);
}
