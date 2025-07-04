import { notFound } from "next/navigation";
import { getPostsByTag, getAllTags, getAllCategories, getFeaturedPosts } from "@/lib/blog/posts";
import BlogPageWithHeader from "../../blog-page-with-header";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

export default function TagPage({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag);
  const posts = getPostsByTag(tag);
  const allCategories = getAllCategories();
  const allTags = getAllTags();
  const featuredPosts = getFeaturedPosts(3);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <BlogPageWithHeader 
      posts={posts}
      categories={allCategories}
      tags={allTags}
      featuredPosts={featuredPosts}
      initialTag={tag}
      pageTitle={`Tag: ${tag}`}
      pageDescription={`Browse all articles tagged with ${tag}`}
    />
  );
}

export async function generateMetadata({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag);
  
  return {
    title: `${tag} - Blog`,
    description: `Browse all articles tagged with ${tag}`,
  };
}
