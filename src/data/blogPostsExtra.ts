import type { BlogPost } from "@/types";

// Additional in-depth, pain-point-focused blog posts (2500+ words, 10 sections
// each). Each post lives in its own file under ./posts/ and is aggregated here.
import { post as p1 } from "./posts/how-to-make-mehndi-darker";
import { post as p2 } from "./posts/mehndi-color-not-coming-dark";
import { post as p3 } from "./posts/black-henna-dangers-ppd-safety";
import { post as p4 } from "./posts/bridal-mehndi-timeline-30-days";
import { post as p5 } from "./posts/beginner-mehndi-mistakes";
import { post as p6 } from "./posts/how-to-make-natural-henna-paste";
import { post as p7 } from "./posts/arabic-vs-indian-vs-pakistani-mehndi";
import { post as p8 } from "./posts/how-long-does-mehndi-last";
import { post as p9 } from "./posts/mehndi-aftercare-guide";
import { post as p10 } from "./posts/eid-mehndi-guide-2026";

export const extraBlogPosts: BlogPost[] = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
