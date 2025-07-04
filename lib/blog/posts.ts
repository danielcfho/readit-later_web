import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import rehypeHighlight from 'rehype-highlight';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  featured: boolean;
  image: string;
  content?: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter(name => name.endsWith('.md'))
    .map((name): BlogPost => {
      const slug = name.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        category: data.category || '',
        tags: data.tags || [],
        author: data.author || '',
        featured: data.featured || false,
        image: data.image || '',
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      category: data.category || '',
      tags: data.tags || [],
      author: data.author || '',
      featured: data.featured || false,
      image: data.image || '',
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(rehypeHighlight)
    .process(markdown);
  return result.toString();
}

export function getFeaturedPosts(limit?: number): BlogPost[] {
  const posts = getAllPosts();
  const featured = posts.filter(post => post.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter(post => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter(post => post.tags.includes(tag));
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = posts.map(post => post.category);
  const uniqueCategories = Array.from(new Set(categories)).filter(Boolean);
  return uniqueCategories;
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap(post => post.tags);
  const uniqueTags = Array.from(new Set(tags)).filter(Boolean);
  return uniqueTags;
}

export function searchPosts(query: string): BlogPost[] {
  const posts = getAllPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.category.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const posts = getAllPosts();
  const otherPosts = posts.filter(post => post.slug !== currentPost.slug);
  
  // 計算相關性分數
  const scored = otherPosts.map(post => {
    let score = 0;
    
    // 相同分類加分
    if (post.category === currentPost.category) {
      score += 3;
    }
    
    // 相同標籤加分
    const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    score += commonTags.length * 2;
    
    return { post, score };
  });
  
  // 按分數排序並返回指定數量
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}
