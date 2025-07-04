import { 
  getAllPosts, 
  getAllCategories, 
  getAllTags, 
  getFeaturedPosts 
} from "@/lib/blog/posts";
import BlogPageWithHeader from "./blog-page-with-header";

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();
  const featuredPosts = getFeaturedPosts();

  return (
    <BlogPageWithHeader
      posts={posts}
      categories={categories}
      tags={tags}
      featuredPosts={featuredPosts}
    />
  );
}
