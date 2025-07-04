---
title: "React Hooks 完整指南"
date: "2024-11-25"
excerpt: "深入了解 React Hooks，掌握現代 React 開發的核心概念"
category: "技術教學"
tags: ["React", "Hooks", "JavaScript", "前端開發"]
author: "dchome"
featured: false
image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# React Hooks 完整指南

React Hooks 是 React 16.8 引入的新特性，讓你在不撰寫 class 的情況下使用 state 及其他 React 功能。

## 基本 Hooks

### useState Hook
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>你點擊了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        點擊我
      </button>
    </div>
  );
}
```

### useEffect Hook
```jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
    }

    fetchUser();
  }, [userId]); // 依賴陣列

  if (!user) return <div>載入中...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

## 進階 Hooks

### useContext Hook
```jsx
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      切換主題
    </button>
  );
}
```

### 自定義 Hook
```jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// 使用自定義 Hook
function Settings() {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="輸入你的名字"
    />
  );
}
```

## Hooks 使用規則

1. **只在最上層呼叫 Hook**：不要在迴圈、條件或巢狀函數中呼叫 Hook
2. **只在 React 函數中呼叫 Hook**：不要在一般的 JavaScript 函數中呼叫 Hook

## 結論

React Hooks 提供了一種更簡潔、更靈活的方式來管理元件狀態和生命週期。透過組合不同的 Hook，你可以建立強大且可重用的邏輯。
