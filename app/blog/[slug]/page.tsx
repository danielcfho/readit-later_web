import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, getRelatedPosts, markdownToHtml } from "@/lib/blog/posts";
import BlogPostWithHeader from "./blog-post-with-header";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await markdownToHtml(post.content || "");
  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <BlogPostWithHeader
      post={post}
      htmlContent={htmlContent}
      relatedPosts={relatedPosts}
    />
  );
}
