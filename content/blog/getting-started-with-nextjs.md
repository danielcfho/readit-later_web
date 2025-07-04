---
title: "開始使用 Next.js 建立現代網站"
date: "2024-12-01"
excerpt: "學習如何使用 Next.js 建立快速、現代的 React 應用程式"
category: "技術教學"
tags: ["Next.js", "React", "JavaScript", "Web Development"]
author: "dchome"
featured: true
image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# 開始使用 Next.js 建立現代網站

Next.js 是一個強大的 React 框架，提供了許多開箱即用的功能，讓開發者能夠快速建立高效能的網站應用程式。

## 為什麼選擇 Next.js？

Next.js 提供了以下關鍵特性：

### 1. 伺服器端渲染 (SSR)
```javascript
// pages/blog/[slug].js
export async function getServerSideProps(context) {
  const { slug } = context.params;
  const post = await fetchPost(slug);
  
  return {
    props: {
      post,
    },
  };
}
```

### 2. 靜態網站生成 (SSG)
```javascript
export async function getStaticProps() {
  const posts = await fetchPosts();
  
  return {
    props: {
      posts,
    },
    revalidate: 60, // 每 60 秒重新生成
  };
}
```

### 3. 自動程式碼分割
Next.js 會自動將你的應用程式分割成較小的 JavaScript 包，提升載入效能。

## 建立你的第一個 Next.js 專案

1. 安裝 Next.js：
```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

2. 建立第一個頁面：
```jsx
// pages/about.js
export default function About() {
  return (
    <div>
      <h1>關於我們</h1>
      <p>歡迎來到我們的網站！</p>
    </div>
  );
}
```

## 路由系統

Next.js 使用檔案系統為基礎的路由：

- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/blog/[slug].js` → `/blog/:slug`

## 最佳實踐

1. **使用 TypeScript** 提升程式碼品質
2. **優化圖片** 使用 Next.js Image 元件
3. **SEO 優化** 使用 Head 元件設定 meta 標籤

Next.js 是現代網站開發的絕佳選擇，結合了效能、開發體驗和 SEO 優化等優勢。
