import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

interface Crumb {
  name: string;
  url: string;
}

interface Props {
  items: Crumb[];
}

export default function Breadcrumb({ items }: Props) {
  const all = [{ name: "Home", url: "/" }, ...items];

  return (
    <>
      {/* JSON-LD for Google */}
      <JsonLd data={breadcrumbSchema(all)} />

      {/* Visual breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol
          className="flex flex-wrap items-center gap-1 text-xs text-henna-500"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {all.map((crumb, i) => {
            const isLast = i === all.length - 1;
            return (
              <li
                key={crumb.url}
                className="flex items-center gap-1"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {i === 0 ? (
                  <Link
                    href={crumb.url}
                    className="hover:text-henna-400 transition-colors flex items-center gap-0.5"
                    itemProp="item"
                  >
                    <Home size={11} />
                    <span itemProp="name" className="sr-only">Home</span>
                  </Link>
                ) : isLast ? (
                  <span
                    className="text-henna-700 dark:text-henna-300 font-medium line-clamp-1 max-w-[200px]"
                    itemProp="name"
                    aria-current="page"
                  >
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.url}
                    className="hover:text-henna-400 transition-colors capitalize"
                    itemProp="item"
                  >
                    <span itemProp="name">{crumb.name}</span>
                  </Link>
                )}

                {!isLast && <ChevronRight size={11} className="text-henna-400 flex-shrink-0" />}

                <meta itemProp="position" content={String(i + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
