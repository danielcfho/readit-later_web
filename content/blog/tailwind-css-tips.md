---
title: "Tailwind CSS 實用技巧"
date: "2024-11-20"
excerpt: "分享一些實用的 Tailwind CSS 技巧，讓你的樣式開發更加高效"
category: "設計與樣式"
tags: ["Tailwind CSS", "CSS", "設計", "前端開發"]
author: "dchome"
featured: false
image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# Tailwind CSS 實用技巧

Tailwind CSS 是一個功能優先的 CSS 框架，讓你能夠快速建立自訂的使用者介面。

## 響應式設計

### 斷點系統
```html
<!-- 預設小螢幕：p-4 -->
<!-- 中等螢幕以上：p-6 -->
<!-- 大螢幕以上：p-8 -->
<div class="p-4 md:p-6 lg:p-8">
  響應式內距
</div>
```

### 網格系統
```html
<!-- 手機：1欄，平板：2欄，桌面：3欄 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4">項目 1</div>
  <div class="bg-green-500 p-4">項目 2</div>
  <div class="bg-red-500 p-4">項目 3</div>
</div>
```

## 常用組件樣式

### 按鈕設計
```html
<!-- 主要按鈕 -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  主要按鈕
</button>

<!-- 次要按鈕 -->
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  次要按鈕
</button>

<!-- 危險按鈕 -->
<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  刪除
</button>
```

### 卡片設計
```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="image.jpg" alt="圖片">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">卡片標題</div>
    <p class="text-gray-700 text-base">
      這裡是卡片的內容描述...
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #標籤1
    </span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #標籤2
    </span>
  </div>
</div>
```

## 進階技巧

### 自訂配置
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1fb6ff',
        'brand-purple': '#7e5bef',
        'brand-pink': '#ff49db',
      },
      fontFamily: {
        'sans': ['Noto Sans TC', 'sans-serif'],
      },
    }
  }
}
```

### 動畫效果
```html
<!-- 懸停動畫 -->
<div class="transform hover:scale-105 transition duration-300 ease-in-out">
  懸停放大
</div>

<!-- 淡入動畫 -->
<div class="opacity-0 animate-pulse">
  閃爍效果
</div>

<!-- 旋轉動畫 -->
<div class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full">
</div>
```

### 狀態變體
```html
<!-- 焦點狀態 -->
<input class="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md">

<!-- 禁用狀態 -->
<button class="bg-blue-500 text-white disabled:bg-gray-400 disabled:cursor-not-allowed">
  提交
</button>

<!-- 群組懸停 -->
<div class="group">
  <img class="group-hover:opacity-75">
  <p class="group-hover:text-blue-500">懸停改變文字顏色</p>
</div>
```

## 效能最佳化

### PurgeCSS 配置
```javascript
// tailwind.config.js
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // ...
}
```

### 元件萃取
```css
/* 將常用樣式萃取為元件 */
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}
```

Tailwind CSS 的功能優先方法讓你能夠快速建立一致且可維護的設計系統。
