---
title: "JavaScript ES6+ 新特性完整指南"
date: "2024-11-20"
excerpt: "探索 JavaScript ES6 及更新版本的強大功能，提升你的程式開發技能"
category: "程式語言"
tags: ["JavaScript", "ES6", "ECMAScript", "程式開發"]
author: "dchome"
featured: true
image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# JavaScript ES6+ 新特性完整指南

ES6（ECMAScript 2015）為 JavaScript 帶來了重大變革，引入了許多新特性讓代碼更加簡潔、可讀且強大。讓我們深入探討這些特性。

## 變數宣告：let 和 const

### let：區塊作用域變數

```javascript
// 傳統的 var 有函數作用域問題
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 輸出 3, 3, 3
}

// let 解決了這個問題
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 輸出 0, 1, 2
}

// 區塊作用域
if (true) {
  let blockScoped = "只在此區塊內有效";
  var functionScoped = "在整個函數內有效";
}
// console.log(blockScoped); // ReferenceError
console.log(functionScoped); // "在整個函數內有效"
```

### const：常數宣告

```javascript
// 基本用法
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable

// 物件和陣列仍可修改內容
const user = { name: "John", age: 30 };
user.age = 31; // 可以
user.city = "New York"; // 可以
// user = {}; // TypeError

const numbers = [1, 2, 3];
numbers.push(4); // 可以
numbers[0] = 0; // 可以
// numbers = []; // TypeError

// 完全不可變的物件
const frozenUser = Object.freeze({ name: "Jane", age: 25 });
// frozenUser.age = 26; // 靜默失敗或錯誤（嚴格模式）
```

## 箭頭函數

### 基本語法

```javascript
// 傳統函數
function add(a, b) {
  return a + b;
}

// 箭頭函數
const add = (a, b) => a + b;

// 單一參數可省略括號
const square = x => x * x;

// 無參數需要空括號
const sayHello = () => "Hello!";

// 多行函數需要大括號和 return
const processData = (data) => {
  const processed = data.map(item => item * 2);
  return processed.filter(item => item > 10);
};
```

### this 綁定的差異

```javascript
// 傳統函數 - this 綁定會改變
function Timer() {
  this.seconds = 0;
  
  // 需要 bind 或儲存 this
  setInterval(function() {
    this.seconds++; // this 指向 window（或 undefined）
    console.log(this.seconds);
  }.bind(this), 1000);
}

// 箭頭函數 - 繼承外層的 this
function Timer() {
  this.seconds = 0;
  
  // 箭頭函數自動綁定外層的 this
  setInterval(() => {
    this.seconds++; // this 指向 Timer 實例
    console.log(this.seconds);
  }, 1000);
}

// 在物件方法中的應用
const calculator = {
  values: [1, 2, 3, 4, 5],
  
  // 傳統方法
  sum: function() {
    return this.values.reduce(function(acc, val) {
      return acc + val;
    }, 0);
  },
  
  // 使用箭頭函數（注意：這裡不適合用箭頭函數作為方法）
  doubleValues: function() {
    return this.values.map(val => val * 2); // 箭頭函數適合回調
  }
};
```

## 模板字串

### 基本用法

```javascript
const name = "Alice";
const age = 30;

// 傳統字串拼接
const greeting = "Hello, my name is " + name + " and I am " + age + " years old.";

// 模板字串
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

// 多行字串
const html = `
  <div class="user-card">
    <h2>${name}</h2>
    <p>Age: ${age}</p>
    <p>Status: ${age >= 18 ? 'Adult' : 'Minor'}</p>
  </div>
`;
```

### 標籤模板字串

```javascript
// 自定義標籤函數
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? `<mark>${values[i]}</mark>` : '';
    return result + string + value;
  }, '');
}

const product = "iPhone";
const price = 999;
const message = highlight`The ${product} costs $${price}`;
// "The <mark>iPhone</mark> costs $<mark>999</mark>"

// 實用的標籤函數：SQL 查詢
function sql(strings, ...values) {
  return {
    query: strings.join('?'),
    params: values
  };
}

const userId = 123;
const status = 'active';
const query = sql`SELECT * FROM users WHERE id = ${userId} AND status = ${status}`;
// { query: "SELECT * FROM users WHERE id = ? AND status = ?", params: [123, "active"] }
```

## 解構賦值

### 陣列解構

```javascript
// 基本解構
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first); // "red"

// 跳過元素
const [primary, , tertiary] = colors;
console.log(primary, tertiary); // "red" "blue"

// 預設值
const [a, b, c, d = 'yellow'] = colors;
console.log(d); // "yellow"

// 交換變數
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// 其餘元素
const numbers = [1, 2, 3, 4, 5];
const [head, ...tail] = numbers;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
```

### 物件解構

```javascript
// 基本解構
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA'
};

const { name, age } = person;
console.log(name, age); // "John" 30

// 重新命名
const { name: personName, age: personAge } = person;
console.log(personName); // "John"

// 預設值
const { name, age, occupation = 'Unknown' } = person;
console.log(occupation); // "Unknown"

// 嵌套解構
const user = {
  id: 1,
  profile: {
    name: 'Alice',
    address: {
      street: '123 Main St',
      city: 'Boston'
    }
  }
};

const {
  profile: {
    name,
    address: { city }
  }
} = user;

// 函數參數解構
function createUser({ name, age, email = 'not-provided@example.com' }) {
  return {
    name,
    age,
    email,
    id: Date.now()
  };
}

const newUser = createUser({ name: 'Bob', age: 25 });
```

## 擴展運算符和其餘參數

### 擴展運算符（Spread Operator）

```javascript
// 陣列擴展
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 複製陣列
const original = [1, 2, 3];
const copy = [...original]; // 淺拷貝

// 物件擴展
const defaults = { theme: 'dark', language: 'en' };
const userPrefs = { language: 'zh', fontSize: 14 };
const settings = { ...defaults, ...userPrefs };
// { theme: 'dark', language: 'zh', fontSize: 14 }

// 函數調用
const numbers = [1, 2, 3, 4, 5];
const max = Math.max(...numbers); // 等同於 Math.max(1, 2, 3, 4, 5)

// 轉換 NodeList 為陣列
const divs = [...document.querySelectorAll('div')];
```

### 其餘參數（Rest Parameters）

```javascript
// 函數參數
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// 與其他參數結合
function greet(greeting, ...names) {
  return `${greeting} ${names.join(', ')}!`;
}

console.log(greet('Hello', 'Alice', 'Bob', 'Charlie'));
// "Hello Alice, Bob, Charlie!"

// 解構中的其餘
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

const { name, ...otherProps } = { name: 'John', age: 30, city: 'NYC' };
console.log(name);       // "John"
console.log(otherProps); // { age: 30, city: 'NYC' }
```

## 類別（Classes）

### 基本類別語法

```javascript
// ES6 類別
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  // 方法
  getArea() {
    return this.width * this.height;
  }
  
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
  
  // 靜態方法
  static fromSquare(side) {
    return new Rectangle(side, side);
  }
  
  // Getter
  get diagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
  
  // Setter
  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // 50
console.log(rect.diagonal);  // 11.18

const square = Rectangle.fromSquare(8);
```

### 繼承

```javascript
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  
  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
  
  getInfo() {
    return `${this.name} is a ${this.species}`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'dog'); // 調用父類建構子
    this.breed = breed;
  }
  
  // 覆寫父類方法
  makeSound() {
    console.log(`${this.name} barks`);
  }
  
  // 新方法
  fetch() {
    console.log(`${this.name} fetches the ball`);
  }
  
  // 調用父類方法
  getFullInfo() {
    return `${super.getInfo()} of breed ${this.breed}`;
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.makeSound(); // "Buddy barks"
dog.fetch();     // "Buddy fetches the ball"
console.log(dog.getFullInfo()); // "Buddy is a dog of breed Golden Retriever"
```

## Promise 和異步編程

### Promise 基礎

```javascript
// 創建 Promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve({ data: 'Hello World', status: 200 });
    } else {
      reject(new Error('Failed to fetch data'));
    }
  }, 1000);
});

// 使用 Promise
fetchData
  .then(result => {
    console.log('Success:', result);
    return result.data.toUpperCase();
  })
  .then(uppercaseData => {
    console.log('Processed:', uppercaseData);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Request completed');
  });
```

### Async/Await

```javascript
// 將 Promise 改寫為 async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const userData = await response.json();
    const processedData = await processUser(userData);
    
    return processedData;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error; // 重新拋出錯誤
  }
}

// 並行處理多個異步操作
async function fetchMultipleUsers(userIds) {
  try {
    const promises = userIds.map(id => fetchUserData(id));
    const users = await Promise.all(promises);
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
}

// 使用
async function main() {
  const user = await fetchUserData(123);
  const users = await fetchMultipleUsers([1, 2, 3, 4, 5]);
}
```

## 模組（Modules）

### 匯出和匯入

```javascript
// math.js - 匯出
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// 預設匯出
export default function subtract(a, b) {
  return a - b;
}

// 或者統一匯出
const divide = (a, b) => a / b;
export { divide, PI as CircleConstant };
```

```javascript
// main.js - 匯入
import subtract, { add, multiply, PI } from './math.js';
import { divide as div } from './math.js';
import * as MathUtils from './math.js';

console.log(add(5, 3));        // 8
console.log(subtract(5, 3));   // 2
console.log(MathUtils.PI);     // 3.14159

// 動態匯入
async function loadMath() {
  const mathModule = await import('./math.js');
  return mathModule.add(10, 5);
}
```

## 新的陣列方法

```javascript
const numbers = [1, 2, 3, 4, 5];
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

// Array.from() - 轉換類陣列或可迭代物件
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const realArray = Array.from(arrayLike); // ['a', 'b', 'c']

const range = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]

// find() 和 findIndex()
const adult = people.find(person => person.age >= 30); // { name: 'Bob', age: 30 }
const adultIndex = people.findIndex(person => person.age >= 30); // 1

// includes()
const hasThree = numbers.includes(3); // true

// entries(), keys(), values()
for (const [index, value] of numbers.entries()) {
  console.log(`${index}: ${value}`);
}

for (const key of Object.keys(people[0])) {
  console.log(key); // 'name', 'age'
}
```

## 總結

ES6+ 為 JavaScript 帶來了許多強大的新特性：

1. **let/const** - 更好的變數宣告
2. **箭頭函數** - 簡潔的函數語法和 this 綁定
3. **模板字串** - 強大的字串處理
4. **解構賦值** - 優雅的資料提取
5. **展開運算符** - 靈活的陣列和物件操作
6. **類別** - 面向物件編程的語法糖
7. **Promise/Async** - 現代異步編程
8. **模組** - 代碼組織和重用

這些特性讓 JavaScript 代碼更加現代、可讀且功能強大。掌握這些特性是成為優秀 JavaScript 開發者的必要條件。
