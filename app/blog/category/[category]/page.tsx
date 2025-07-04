import { notFound } from "next/navigation";
import { getPostsByCategory, getAllCategories, getAllTags, getFeaturedPosts } from "@/lib/blog/posts";
import BlogPageWithHeader from "../../blog-page-with-header";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: encodeURIComponent(category),
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category);
  const posts = getPostsByCategory(category);
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
      initialCategory={category}
      pageTitle={`Category: ${category}`}
      pageDescription={`Browse all articles in the ${category} category`}
    />
  );
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category);
  
  return {
    title: `${category} - Blog`,
    description: `Browse all articles in the ${category} category`,
  };
}
