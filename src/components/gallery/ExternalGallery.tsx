"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Loader } from "lucide-react";

interface ExternalImage {
  id: string;
  url: string;
  title: string;
  description: string;
  source?: "unsplash" | "pinterest";
  photographer?: string;
  photographerUrl?: string;
}

interface ExternalGalleryProps {
  category?: string;
  query?: string;
  limit?: number;
  onlyUnsplash?: boolean;
  onlyPinterest?: boolean;
}

export default function ExternalGallery({
  category,
  query = "mehndi designs",
  limit = 12,
  onlyUnsplash = false,
  onlyPinterest = false,
}: ExternalGalleryProps) {
  const [images, setImages] = useState<ExternalImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "unsplash" | "pinterest">(
    onlyUnsplash ? "unsplash" : onlyPinterest ? "pinterest" : "all"
  );

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = category ? "category" : "query";
        const params = new URLSearchParams({
          [endpoint]: category || query,
          limit: limit.toString(),
        });

        const urls = [];
        if (!onlyPinterest) {
          urls.push(`/api/images/unsplash?${params}`);
        }
        if (!onlyUnsplash) {
          urls.push(`/api/images/pinterest?${params}`);
        }

        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const data = await Promise.all(responses.map((r) => r.json()));

        const allImages: ExternalImage[] = [];

        if (!onlyPinterest && data[0]?.data) {
          allImages.push(
            ...data[0].data.map((img: any) => ({
              ...img,
              source: "unsplash" as const,
            }))
          );
        }

        if (!onlyUnsplash) {
          const pinterestData = data[onlyPinterest ? 0 : 1];
          if (pinterestData?.data) {
            allImages.push(
              ...pinterestData.data.map((img: any) => ({
                ...img,
                source: "pinterest" as const,
              }))
            );
          }
        }

        setImages(allImages);
      } catch (err) {
        console.error("Error fetching external images:", err);
        setError("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [category, query, limit, onlyUnsplash, onlyPinterest]);

  const filteredImages = {
    all: images,
    unsplash: images.filter((img) => img.source === "unsplash"),
    pinterest: images.filter((img) => img.source === "pinterest"),
  };

  const displayImages = filteredImages[activeTab];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="w-8 h-8 animate-spin text-pink-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Tabs */}
      {!onlyUnsplash && !onlyPinterest && (
        <div className="flex gap-2 border-b">
          {["all", "unsplash", "pinterest"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "all" | "unsplash" | "pinterest")}
              className={`px-4 py-2 font-medium transition ${
                activeTab === tab
                  ? "border-b-2 border-pink-500 text-pink-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} ({(filteredImages as Record<string, unknown[]>)[tab]?.length ?? 0})
            </button>
          ))}
        </div>
      )}

      {/* Gallery */}
      {displayImages.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {displayImages.map((img) => (
            <div
              key={`${img.source}-${img.id}`}
              className="group relative bg-gray-100 rounded-lg overflow-hidden aspect-[3/4] cursor-pointer hover:shadow-lg transition"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex flex-col justify-between p-3 opacity-0 group-hover:opacity-100">
                <div className="text-white text-sm line-clamp-2">{img.title}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-pink-500 px-2 py-1 rounded">
                    {img.source === "unsplash" ? "Unsplash" : "Pinterest"}
                  </span>
                  <a
                    href={
                      img.source === "unsplash"
                        ? (img.photographerUrl || img.url)
                        : `https://www.pinterest.com/search/pins/?q=mehndi`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:bg-white/20 p-1 rounded"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">No images found. Try adjusting your search.</div>
      )}
    </div>
  );
}
