---
title: "網站效能優化指南"
date: "2024-11-10"
excerpt: "學習如何優化網站效能，提升使用者體驗"
category: "效能優化"
tags: ["效能優化", "Web Performance", "SEO", "使用者體驗"]
author: "dchome"
featured: false
image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# 網站效能優化指南

網站效能直接影響使用者體驗和搜尋引擎排名。本文將介紹實用的效能優化技巧。

## 圖片優化

### 選擇正確的格式
- **JPEG**：適合照片和複雜圖像
- **PNG**：適合簡單圖形和需要透明背景
- **WebP**：現代格式，提供更好的壓縮率
- **SVG**：適合向量圖形和圖標

### 響應式圖片
```html
<picture>
  <source media="(min-width: 800px)" srcset="large.webp" type="image/webp">
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.webp" type="image/webp">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="描述" loading="lazy">
</picture>
```

### Next.js Image 組件
```jsx
import Image from 'next/image';

function Gallery() {
  return (
    <Image
      src="/photo.jpg"
      alt="描述"
      width={800}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      priority // 關鍵圖片
    />
  );
}
```

## JavaScript 優化

### 程式碼分割
```javascript
// 動態匯入
const LazyComponent = dynamic(() => import('./LazyComponent'), {
  loading: () => <p>載入中...</p>,
});

// 路由層級分割
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>載入中...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
```

### 減少 Bundle 大小
```javascript
// 避免匯入整個庫
// ❌ 不好
import _ from 'lodash';

// ✅ 好
import { debounce } from 'lodash/debounce';

// 或使用 tree-shaking 友好的庫
import { debounce } from 'lodash-es';
```

### 使用 Web Workers
```javascript
// worker.js
self.onmessage = function(e) {
  const { data } = e;
  // 執行重型計算
  const result = heavyComputation(data);
  self.postMessage(result);
};

// main.js
const worker = new Worker('/worker.js');
worker.postMessage(largeData);
worker.onmessage = function(e) {
  console.log('計算結果:', e.data);
};
```

## CSS 優化

### 關鍵 CSS 內聯
```html
<style>
  /* 首屏關鍵 CSS */
  .hero { display: flex; justify-content: center; }
  .header { position: fixed; top: 0; }
</style>

<link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### 避免阻塞渲染
```css
/* 使用 contain 屬性 */
.widget {
  contain: layout style paint;
}

/* 優化動畫 */
.animated {
  transform: translateX(0);
  transition: transform 0.3s ease;
  will-change: transform;
}
```

## 載入策略

### 資源預載
```html
<!-- DNS 預解析 -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">

<!-- 預連接 -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- 預載入關鍵資源 -->
<link rel="preload" href="/critical.css" as="style">
<link rel="preload" href="/hero-image.jpg" as="image">

<!-- 預取得下一頁資源 -->
<link rel="prefetch" href="/next-page.html">
```

### Service Worker 快取
```javascript
// sw.js
const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/offline.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果有快取就回傳，否則發送網路請求
        return response || fetch(event.request);
      })
  );
});
```

## 監控和測量

### Core Web Vitals
```javascript
// 測量 LCP (Largest Contentful Paint)
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP:', entry.startTime);
  }
}).observe({entryTypes: ['largest-contentful-paint']});

// 測量 CLS (Cumulative Layout Shift)
let clsValue = 0;
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    if (!entry.hadRecentInput) {
      clsValue += entry.value;
    }
  }
}).observe({entryTypes: ['layout-shift']});
```

### 效能預算
```javascript
// webpack.config.js
module.exports = {
  performance: {
    maxAssetSize: 250000, // 250kb
    maxEntrypointSize: 250000,
    hints: 'warning'
  }
};
```

## 資料庫優化

### 查詢優化
```sql
-- 建立索引
CREATE INDEX idx_user_email ON users(email);

-- 避免 N+1 查詢
SELECT users.*, profiles.bio 
FROM users 
LEFT JOIN profiles ON users.id = profiles.user_id;
```

### 快取策略
```javascript
// Redis 快取
const redis = require('redis');
const client = redis.createClient();

async function getUser(id) {
  const cacheKey = `user:${id}`;
  
  // 先檢查快取
  const cached = await client.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // 從資料庫取得
  const user = await db.users.findById(id);
  
  // 存入快取（TTL 1小時）
  await client.setex(cacheKey, 3600, JSON.stringify(user));
  
  return user;
}
```

透過這些優化技巧，你可以顯著提升網站的載入速度和使用者體驗。記住要定期監控效能指標，持續改進。
