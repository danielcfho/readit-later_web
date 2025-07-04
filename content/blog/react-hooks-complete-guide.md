---
title: "React Hooks 完整指南"
date: "2024-11-28"
excerpt: "深入了解 React Hooks 的核心概念，從基礎到進階的使用技巧"
category: "前端開發"
tags: ["React", "Hooks", "JavaScript", "前端開發"]
author: "dchome"
featured: true
image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# React Hooks 完整指南

React Hooks 徹底改變了我們撰寫 React 組件的方式。它們讓函數組件能夠使用狀態和其他 React 特性，使代碼更加簡潔且易於重用。

## 基礎 Hooks

### useState Hook

`useState` 是最基本的 Hook，用於在函數組件中添加狀態。

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>目前計數: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
    </div>
  );
}
```

### useEffect Hook

`useEffect` 用於處理副作用，例如數據獲取、訂閱或手動變更 DOM。

```javascript
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // 依賴數組

  if (loading) return <div>載入中...</div>;
  if (!user) return <div>找不到用戶</div>;

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

`useContext` 讓你可以訂閱 React context 而不需要嵌套。

```javascript
import React, { createContext, useContext, useState } from 'react';

// 創建 Context
const ThemeContext = createContext();

// Provider 組件
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 使用 Context 的組件
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

### useReducer Hook

對於複雜的狀態邏輯，`useReducer` 比 `useState` 更適合。

```javascript
import React, { useReducer } from 'react';

// Reducer 函數
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error(`未知的 action 類型: ${action.type}`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>計數: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        重置
      </button>
    </div>
  );
}
```

## 自定義 Hooks

自定義 Hooks 讓你可以將組件邏輯提取到可重用的函數中。

### useFetch Hook

```javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// 使用自定義 Hook
function PostList() {
  const { data: posts, loading, error } = useFetch('/api/posts');

  if (loading) return <div>載入中...</div>;
  if (error) return <div>錯誤: {error}</div>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### useLocalStorage Hook

```javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // 從 localStorage 獲取初始值
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key:', key, error);
      return initialValue;
    }
  });

  // 返回包裝版本的 useState setter 函數，該函數會將新值保存到 localStorage
  const setValue = (value) => {
    try {
      // 允許 value 是一個函數，這樣我們就有了與 useState 相同的 API
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage key:', key, error);
    }
  };

  return [storedValue, setValue];
}

// 使用示例
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <p>當前主題: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切換主題
      </button>
    </div>
  );
}
```

## Hooks 使用規則

1. **只在最頂層調用 Hooks**：不要在循環、條件或嵌套函數中調用 Hooks。
2. **只在 React 函數中調用 Hooks**：不要在普通的 JavaScript 函數中調用 Hooks。

## 總結

React Hooks 提供了一種更直接的方式來使用 React 特性。它們讓組件更加簡潔，邏輯更容易重用。掌握 Hooks 是現代 React 開發的重要技能。

通過本指南，你應該已經了解了 Hooks 的基本概念和常見用法。繼續練習並探索更多的 Hooks，你會發現它們能讓你的 React 代碼更加優雅和高效。
