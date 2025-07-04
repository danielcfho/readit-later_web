---
title: "Website Performance Optimization Guide"
date: "2024-11-10"
excerpt: "Learn how to optimize website performance and improve user experience."
category: "Performance Optimization"
tags: ["Performance Optimization", "Web Performance", "SEO", "User Experience"]
author: "dchome"
featured: false
image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# Website Performance Optimization Guide

Website performance directly impacts user experience and search engine ranking. This article introduces practical performance optimization techniques.

## Image Optimization

### Choose the Right Format
- **JPEG**: Suitable for photos and complex images
- **PNG**: Suitable for simple graphics and images requiring transparency
- **WebP**: Modern format with better compression
- **SVG**: Best for vector graphics and icons

### Responsive Images
```html
<picture>
  <source media="(min-width: 800px)" srcset="large.webp" type="image/webp">
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.webp" type="image/webp">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Description" loading="lazy">
</picture>
```

### Next.js Image Component
```jsx
import Image from 'next/image';

function Gallery() {
  return (
    <Image
      src="/photo.jpg"
      alt="Description"
      width={800}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      priority // Key image
    />
  );
}
```

## JavaScript Optimization

### Code Splitting
```javascript
// Dynamic import
const LazyComponent = dynamic(() => import('./LazyComponent'), {
  loading: () => <p>Loading...</p>,
});

// Route-level splitting
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
```

### Reduce Bundle Size
```javascript
// Avoid importing the entire library
// ❌ Bad
import _ from 'lodash';

// ✅ Good
import { debounce } from 'lodash/debounce';

// Or use tree-shakable libraries
import { debounce } from 'lodash-es';
```

### Use Web Workers
```javascript
// worker.js
self.onmessage = function(e) {
  const { data } = e;
  // Perform heavy computation
  const result = heavyComputation(data);
  self.postMessage(result);
};

// main.js
const worker = new Worker('/worker.js');
worker.postMessage(largeData);
worker.onmessage = function(e) {
  console.log('Computation result:', e.data);
};
```

## CSS Optimization

### Critical CSS Inline
```html
<style>
  /* Critical CSS for above-the-fold */
  .hero { display: flex; justify-content: center; }
  .header { position: fixed; top: 0; }
</style>

<link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### Avoid Render-Blocking
```css
/* Use contain property */
.widget {
  contain: layout style paint;
}

/* Optimize animations */
.animated {
  transform: translateX(0);
  transition: transform 0.3s ease;
  will-change: transform;
}
```

## Loading Strategies

### Resource Preloading
```html
<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload critical resources -->
<link rel="preload" href="/critical.css" as="style">
<link rel="preload" href="/hero-image.jpg" as="image">

<!-- Prefetch next page resources -->
<link rel="prefetch" href="/next-page.html">
```

### Service Worker Caching
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
        // Return from cache if available, otherwise fetch from network
        return response || fetch(event.request);
      })
  );
});
```

## Monitoring & Measurement

### Core Web Vitals
```javascript
// Measure LCP (Largest Contentful Paint)
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP:', entry.startTime);
  }
}).observe({entryTypes: ['largest-contentful-paint']});

// Measure CLS (Cumulative Layout Shift)
let clsValue = 0;
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    if (!entry.hadRecentInput) {
      clsValue += entry.value;
    }
  }
}).observe({entryTypes: ['layout-shift']});
```

### Performance Budgets
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

## Database Optimization

### Query Optimization
```sql
-- Create index
CREATE INDEX idx_user_email ON users(email);

-- Avoid N+1 queries
SELECT users.*, profiles.bio 
FROM users 
LEFT JOIN profiles ON users.id = profiles.user_id;
```

### Caching Strategies
```javascript
// Redis cache
const redis = require('redis');
const client = redis.createClient();

async function getUser(id) {
  const cacheKey = `user:${id}`;
  
  // Check cache first
  const cached = await client.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // Fetch from database
  const user = await db.users.findById(id);
  
  // Store in cache (TTL 1 hour)
  await client.setex(cacheKey, 3600, JSON.stringify(user));
  
  return user;
}
```

By applying these optimization techniques, you can significantly improve your website's loading speed and user experience. Remember to regularly monitor performance metrics and keep optimizing.
