"use client";

import { MainHeader } from "@/components/main/header";
import BlogPostClient from "./blog-post-client";
import { BlogPost } from "@/lib/blog/posts";

interface BlogPostWithHeaderProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostWithHeader(props: BlogPostWithHeaderProps) {
  return (
    <>
      <MainHeader />
      <div className="pt-20">
        <BlogPostClient {...props} />
      </div>
    </>
  );
}
