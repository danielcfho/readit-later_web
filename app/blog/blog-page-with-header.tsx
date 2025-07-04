"use client";

import { MainHeader } from "@/components/main/header";
import BlogPageClient from "./blog-page-client";
import { BlogPost } from "@/lib/blog/posts";

interface BlogPageClientProps {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
  featuredPosts: BlogPost[];
  initialCategory?: string;
  initialTag?: string;
  pageTitle?: string;
  pageDescription?: string;
}

export default function BlogPageWithHeader(props: BlogPageClientProps) {
  return (
    <>
      <MainHeader />
      <div className="pt-20">
        <BlogPageClient {...props} />
      </div>
    </>
  );
}
