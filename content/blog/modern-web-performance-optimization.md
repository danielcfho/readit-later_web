---
title: "現代網站性能優化策略"
date: "2024-11-10"
excerpt: "深入了解網站性能優化的核心技術和實踐方法"
category: "性能優化"
tags: ["性能優化", "Web Performance", "用戶體驗", "SEO"]
author: "dchome"
featured: false
image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# 現代網站性能優化策略

在當今快節奏的數位世界中，網站性能直接影響用戶體驗、轉換率和搜尋引擎排名。本文將深入探討現代網站性能優化的核心策略。

## 性能指標與測量

### 核心網路生命力指標（Core Web Vitals）

Google 定義的三個核心指標：

```javascript
// 測量 Largest Contentful Paint (LCP)
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP:', entry.startTime);
  }
}).observe({entryTypes: ['largest-contentful-paint']});

// 測量 First Input Delay (FID)
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    const FID = entry.processingStart - entry.startTime;
    console.log('FID:', FID);
  }
}).observe({entryTypes: ['first-input']});

// 測量 Cumulative Layout Shift (CLS)
let clsValue = 0;
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    if (!entry.hadRecentInput) {
      clsValue += entry.value;
    }
  }
}).observe({entryTypes: ['layout-shift']});
```

## 圖片優化策略

### 現代圖片格式

```html
<!-- 使用 picture 元素支援多種格式 -->
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero image" loading="lazy">
</picture>

<!-- 響應式圖片 -->
<img 
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
  src="medium.jpg"
  alt="Responsive image"
  loading="lazy"
>
```

### 圖片懶載入實作

```javascript
// Intersection Observer 懶載入
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
```

## JavaScript 效能優化

### 代碼分割與動態匯入

```javascript
// React 代碼分割
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// 條件式載入
async function loadFeature() {
  if (user.isPremium) {
    const { PremiumFeature } = await import('./PremiumFeature');
    return PremiumFeature;
  }
}
```

### 優化 JavaScript 執行

```javascript
// 使用 requestIdleCallback 執行非關鍵任務
function performBackgroundTasks(tasks) {
  function runTasks(deadline) {
    while (deadline.timeRemaining() > 0 && tasks.length > 0) {
      tasks.shift()();
    }
    if (tasks.length > 0) {
      requestIdleCallback(runTasks);
    }
  }
  requestIdleCallback(runTasks);
}

// Web Workers 處理重計算
const worker = new Worker('heavy-calculation.js');
worker.postMessage({ data: largeDataset });
worker.onmessage = (e) => {
  console.log('Calculation result:', e.data);
};
```

## CSS 性能優化

### 關鍵 CSS 策略

```html
<!-- 內聯關鍵 CSS -->
<style>
  /* 首屏關鍵樣式 */
  .header { display: flex; height: 60px; }
  .hero { min-height: 100vh; background: #f0f0f0; }
</style>

<!-- 非關鍵 CSS 異步載入 -->
<link rel="preload" href="main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="main.css"></noscript>
```

### CSS 效能最佳實踐

```css
/* 避免昂貴的選擇器 */
/* 不好 */
.nav ul li:nth-child(odd) a { }

/* 好 */
.nav-link-odd { }

/* 使用 GPU 加速 */
.smooth-animation {
  will-change: transform;
  transform: translateZ(0);
}

/* 避免複雜的漸層和陰影 */
.card {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 簡單陰影 */
}
```

## 網路與資源優化

### 資源提示

```html
<!-- DNS 預解析 -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">

<!-- 預連接 -->
<link rel="preconnect" href="https://api.example.com">

<!-- 資源預載入 -->
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="hero-font.woff2" as="font" type="font/woff2" crossorigin>

<!-- 預取得下一頁資源 -->
<link rel="prefetch" href="/next-page.html">
```

### HTTP/2 優化

```javascript
// 避免域名分片（HTTP/2 不需要）
// 使用服務器推送
app.get('/', (req, res) => {
  // 推送關鍵資源
  res.push('/css/critical.css');
  res.push('/js/main.js');
  res.render('index');
});
```

## 快取策略

### 瀏覽器快取優化

```javascript
// 設置適當的快取頭
app.use('/static', express.static('public', {
  maxAge: '1y', // 靜態資源長期快取
  etag: false,
  lastModified: false
}));

// 動態內容短期快取
app.get('/api/data', (req, res) => {
  res.set('Cache-Control', 'max-age=300'); // 5分鐘
  res.json(data);
});
```

### Service Worker 快取

```javascript
// service-worker.js
const CACHE_NAME = 'app-v1';
const urlsToCache = ['/', '/css/main.css', '/js/main.js'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

## 字體優化

### 字體載入策略

```css
/* 字體顯示策略 */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* 快速顯示後備字體 */
}

/* 字體變數減少檔案數量 */
@font-face {
  font-family: 'VariableFont';
  src: url('variable-font.woff2') format('woff2-variations');
  font-weight: 100 900;
}
```

```html
<!-- 預載入關鍵字體 -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

<!-- 字體子集化 -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&text=重要文字&display=swap" rel="stylesheet">
```

## 移動端優化

### 響應式載入

```javascript
// 根據設備能力載入不同資源
const isMobile = window.innerWidth < 768;
const hasSlowConnection = navigator.connection && navigator.connection.effectiveType === 'slow-2g';

if (!isMobile && !hasSlowConnection) {
  // 載入高品質資源
  import('./high-quality-animations.js');
}
```

### 觸控優化

```css
/* 觸控目標大小 */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: 8px;
}

/* 觸控反饋 */
.button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  touch-action: manipulation;
}
```

## 性能監控

### 真實用戶監控（RUM）

```javascript
// 收集真實性能數據
function collectPerformanceData() {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // 發送到分析服務
        analytics.track('performance', {
          name: entry.name,
          duration: entry.duration,
          entryType: entry.entryType
        });
      });
    });
    
    observer.observe({entryTypes: ['navigation', 'resource', 'paint']});
  }
}
```

### 錯誤監控

```javascript
// 全域錯誤處理
window.addEventListener('error', (event) => {
  console.error('JavaScript error:', event.error);
  // 發送錯誤報告
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // 發送錯誤報告
});
```

## 建構時優化

### Webpack 優化配置

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: false, // 保留 ES6 模組用於 tree shaking
              }]
            ]
          }
        }
      }
    ]
  }
};
```

## 總結

現代網站性能優化需要綜合考慮：

1. **測量驅動**：使用工具持續監控性能指標
2. **資源優化**：圖片、字體、CSS、JavaScript 的系統性優化
3. **載入策略**：關鍵資源優先，非關鍵資源延遲載入
4. **快取策略**：多層快取提升重複訪問體驗
5. **移動優先**：針對移動設備特別優化
6. **持續改進**：建立性能預算和監控機制

記住，性能優化是一個持續的過程，需要在功能、性能和用戶體驗之間找到最佳平衡點。
