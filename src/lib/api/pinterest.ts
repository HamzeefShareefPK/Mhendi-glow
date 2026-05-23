interface PinterestImage {
  id: string;
  url: string;
  title: string;
  description: string;
  source_url?: string;
  created_at: string;
}

export async function fetchPinterestImages(
  query: string = "mehndi designs",
  limit: number = 12
): Promise<PinterestImage[]> {
  const accessToken = process.env.PINTEREST_ACCESS_TOKEN;
  const businessAccountId = process.env.PINTEREST_BUSINESS_ACCOUNT_ID;

  if (!accessToken || !businessAccountId) {
    throw new Error("Pinterest API credentials not configured");
  }

  try {
    // Fetch pins from Pinterest API v5
    const response = await fetch(
      `https://api.pinterest.com/v1/me/pins?access_token=${accessToken}&fields=id,url,note,image,created_at,source_url`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error(`Pinterest API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Filter and transform pins related to mehndi
    const images: PinterestImage[] = (data.data || [])
      .filter(
        (pin: any) =>
          pin.note?.toLowerCase().includes(query.toLowerCase()) ||
          pin.note?.toLowerCase().includes("mehndi") ||
          pin.url?.toLowerCase().includes("mehndi")
      )
      .slice(0, limit)
      .map((pin: any) => ({
        id: pin.id,
        url: pin.image?.original?.url || "",
        title: pin.note?.split("\n")[0] || "Mehndi Design",
        description: pin.note || "Beautiful mehndi design",
        source_url: pin.source_url,
        created_at: pin.created_at,
      }));

    return images;
  } catch (error) {
    console.error("Error fetching Pinterest images:", error);
    return [];
  }
}

export async function searchPinterestImages(
  category: string,
  limit: number = 12
): Promise<PinterestImage[]> {
  // Map mehndi categories to search queries
  const searchQueries: Record<string, string> = {
    "bridal-mehndi": "bridal mehndi designs",
    "arabic-mehndi": "arabic mehndi patterns",
    "pakistani-mehndi": "pakistani mehndi",
    "eid-mehndi": "eid mehndi designs",
    "finger-mehndi": "finger mehndi",
    "feet-mehndi": "feet mehndi ankle",
    "minimal-mehndi": "minimal simple mehndi",
    "indian-mehndi": "indian mehndi designs",
  };

  const query = searchQueries[category] || "mehndi designs";
  return fetchPinterestImages(query, limit);
}
