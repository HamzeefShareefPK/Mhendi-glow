import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types";

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-white dark:bg-henna-900/60 rounded-2xl border border-henna-200/60 dark:border-henna-800/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-henna-400/10 dark:hover:shadow-black/30">

        {/* Cover image */}
        <div className="relative aspect-[16/9] overflow-hidden shrink-0">
          <Image
            src={post.coverImage}
            alt={post.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <span className="cat-badge shadow-sm">{post.category}</span>
          </div>
          {/* Read more arrow */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0">
            <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-md">
              <ArrowUpRight size={13} className="text-henna-600" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 sm:p-5">
          <h3 className="font-serif text-base sm:text-[1.05rem] font-semibold text-henna-900 dark:text-henna-100 leading-snug group-hover:text-henna-600 dark:group-hover:text-henna-400 transition-colors line-clamp-2 mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-henna-600/80 dark:text-henna-400/80 line-clamp-2 mb-4 flex-1 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-henna-100/80 dark:border-henna-800/60">
            <div className="flex items-center gap-1.5 text-xs text-henna-400 dark:text-henna-500">
              <Clock size={10} />
              <span>{post.readTime} min read</span>
            </div>
            <span className="text-xs font-semibold text-henna-500 group-hover:text-henna-600 flex items-center gap-1 transition-all group-hover:gap-1.5">
              Read more <ArrowUpRight size={11} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
