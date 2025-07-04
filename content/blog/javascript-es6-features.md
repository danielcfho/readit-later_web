---
title: "JavaScript ES6+ 新特性解析"
date: "2024-11-15"
excerpt: "探索 JavaScript ES6 及更新版本的強大新特性"
category: "程式語言"
tags: ["JavaScript", "ES6", "編程語言", "前端開發"]
author: "dchome"
featured: true
image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# JavaScript ES6+ 新特性解析

ES6（ECMAScript 2015）及後續版本為 JavaScript 帶來了許多強大的新特性，讓程式碼更加簡潔和強大。

## 箭頭函數

### 語法簡化
```javascript
// ES5
var add = function(a, b) {
  return a + b;
};

// ES6
const add = (a, b) => a + b;

// 單一參數時可省略括號
const square = x => x * x;

// 多行函數
const greet = name => {
  const message = `Hello, ${name}!`;
  return message;
};
```

### this 綁定
```javascript
class Timer {
  constructor() {
    this.seconds = 0;
  }

  start() {
    // 箭頭函數保持 this 綁定
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
}
```

## 解構賦值

### 陣列解構
```javascript
const numbers = [1, 2, 3, 4, 5];

// 基本解構
const [first, second] = numbers;
console.log(first, second); // 1, 2

// 跳過元素
const [, , third] = numbers;
console.log(third); // 3

// 剩餘元素
const [head, ...tail] = numbers;
console.log(head, tail); // 1, [2, 3, 4, 5]
```

### 物件解構
```javascript
const person = {
  name: '張三',
  age: 30,
  city: '台北',
  country: '台灣'
};

// 基本解構
const { name, age } = person;

// 重新命名
const { name: fullName, age: years } = person;

// 預設值
const { name, age, job = '工程師' } = person;

// 巢狀解構
const user = {
  id: 1,
  profile: {
    name: '李四',
    email: 'lee@example.com'
  }
};

const { profile: { name, email } } = user;
```

## 模板字串

```javascript
const name = '王五';
const age = 25;

// 多行字串
const message = `
  姓名：${name}
  年齡：${age}
  狀態：${age >= 18 ? '成年' : '未成年'}
`;

// 標籤模板
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? `<mark>${values[i]}</mark>` : '';
    return result + string + value;
  }, '');
}

const highlighted = highlight`名字是 ${name}，年齡是 ${age}`;
```

## 展開運算符

### 陣列操作
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 合併陣列
const combined = [...arr1, ...arr2];

// 複製陣列
const copy = [...arr1];

// 函數參數
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

### 物件操作
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// 合併物件
const merged = { ...obj1, ...obj2 };

// 複製並修改
const updated = { ...obj1, b: 10, e: 5 };
```

## Promise 和 Async/Await

### Promise 鏈
```javascript
fetch('/api/user')
  .then(response => response.json())
  .then(user => {
    console.log(user);
    return fetch(`/api/posts/${user.id}`);
  })
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
```

### Async/Await
```javascript
async function getUserPosts() {
  try {
    const userResponse = await fetch('/api/user');
    const user = await userResponse.json();
    
    const postsResponse = await fetch(`/api/posts/${user.id}`);
    const posts = await postsResponse.json();
    
    return posts;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// 使用
getUserPosts()
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
```

## 模組系統

### 匯出
```javascript
// math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export class Calculator {
  multiply(a, b) {
    return a * b;
  }
}

// 預設匯出
export default function subtract(a, b) {
  return a - b;
}
```

### 匯入
```javascript
// main.js
import subtract, { PI, add, Calculator } from './math.js';

// 全部匯入
import * as math from './math.js';

// 動態匯入
async function loadMath() {
  const mathModule = await import('./math.js');
  return mathModule;
}
```

## 新的陣列方法

```javascript
const numbers = [1, 2, 3, 4, 5];

// find 和 findIndex
const found = numbers.find(n => n > 3); // 4
const index = numbers.findIndex(n => n > 3); // 3

// includes
console.log(numbers.includes(3)); // true

// Array.from
const doubled = Array.from(numbers, x => x * 2);

// 陣列去重
const unique = [...new Set([1, 2, 2, 3, 3, 4])];
```

這些 ES6+ 特性讓 JavaScript 更加現代化和強大，提升了開發效率和程式碼可讀性。
