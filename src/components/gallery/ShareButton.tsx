"use client";

import { Share2 } from "lucide-react";

interface Props {
  title: string;
  slug: string;
}

export default function ShareButton({ title, slug }: Props) {
  const handleShare = () => {
    const url = `${window.location.origin}/design/${slug}`;
    if (navigator.share) {
      navigator.share({ title, url });
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="btn-outline flex items-center gap-2"
      aria-label={`Share ${title}`}
    >
      <Share2 size={16} />
      Share Design
    </button>
  );
}
