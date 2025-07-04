---
title: "TypeScript 從入門到精通"
date: "2024-11-05"
excerpt: "深入學習 TypeScript，提升 JavaScript 開發的類型安全性和生產力"
category: "程式語言"
tags: ["TypeScript", "JavaScript", "類型系統", "開發工具"]
author: "dchome"
featured: false
image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# TypeScript 從入門到精通

TypeScript 是 Microsoft 開發的 JavaScript 超集，為 JavaScript 添加了靜態類型檢查。它能幫助開發者在編譯時發現錯誤，提升代碼質量和開發體驗。

## 為什麼選擇 TypeScript？

### 主要優勢

1. **類型安全**：在編譯時發現錯誤
2. **更好的 IDE 支援**：自動完成、重構、導航
3. **代碼文檔化**：類型即文檔
4. **漸進式採用**：可以逐步將 JavaScript 遷移到 TypeScript

```typescript
// JavaScript - 運行時才發現錯誤
function greet(name) {
  return "Hello, " + name.toUpperCase();
}
greet(123); // 運行時錯誤

// TypeScript - 編譯時發現錯誤
function greet(name: string): string {
  return "Hello, " + name.toUpperCase();
}
greet(123); // 編譯錯誤：Argument of type 'number' is not assignable to parameter of type 'string'
```

## 基本類型系統

### 原始類型

```typescript
// 基本類型
let isDone: boolean = false;
let count: number = 42;
let userName: string = "John";
let notSure: any = 4;
let nothing: void = undefined;
let empty: null = null;
let notDefined: undefined = undefined;

// 數組類型
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// 元組類型
let tuple: [string, number] = ["hello", 10];

// 枚舉類型
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

// 聯合類型
let id: string | number = "123";
id = 456; // OK

// 字面量類型
let direction: "up" | "down" | "left" | "right" = "up";
```

### 物件類型

```typescript
// 物件類型定義
interface User {
  readonly id: number;
  name: string;
  email?: string; // 可選屬性
  age: number;
}

// 使用介面
const user: User = {
  id: 1,
  name: "John Doe",
  age: 30
};

// user.id = 2; // 錯誤：Cannot assign to 'id' because it is a read-only property

// 索引簽名
interface StringDictionary {
  [key: string]: string;
}

const dict: StringDictionary = {
  key1: "value1",
  key2: "value2"
};
```

## 進階類型

### 泛型

```typescript
// 基本泛型
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(123);

// 泛型介面
interface GenericArray<T> {
  length: number;
  push(item: T): void;
  pop(): T | undefined;
  [index: number]: T;
}

// 泛型約束
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello"); // OK
logLength([1, 2, 3]); // OK
// logLength(123); // 錯誤：Argument of type 'number' is not assignable
```

### 實用類型

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial - 讓所有屬性變為可選
type PartialTodo = Partial<Todo>;
// 等同於 { title?: string; description?: string; completed?: boolean; }

// Required - 讓所有屬性變為必需
type RequiredTodo = Required<Todo>;

// Pick - 選擇特定屬性
type TodoPreview = Pick<Todo, "title" | "completed">;
// 等同於 { title: string; completed: boolean; }

// Omit - 排除特定屬性
type TodoWithoutDescription = Omit<Todo, "description">;
// 等同於 { title: string; completed: boolean; }

// Record - 創建物件類型
type PageInfo = Record<"home" | "about" | "contact", { title: string; url: string }>;

// 條件類型
type NonNullable<T> = T extends null | undefined ? never : T;

// 映射類型
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

## 類別與繼承

### 基本類別

```typescript
class Animal {
  private name: string;
  protected species: string;
  public age: number;

  constructor(name: string, species: string, age: number) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  // 抽象方法需要在子類實現
  abstract makeSound(): void;

  // Getter
  get displayName(): string {
    return `${this.name} (${this.species})`;
  }

  // Setter
  set displayName(value: string) {
    const parts = value.split(' ');
    this.name = parts[0];
  }

  // 靜態方法
  static compareAge(animal1: Animal, animal2: Animal): number {
    return animal1.age - animal2.age;
  }
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, "Canine", age);
    this.breed = breed;
  }

  makeSound(): void {
    console.log("Woof!");
  }

  // 方法重載
  fetch(): void;
  fetch(item: string): void;
  fetch(item?: string): void {
    if (item) {
      console.log(`Fetching ${item}`);
    } else {
      console.log("Fetching something");
    }
  }
}
```

### 介面與類別

```typescript
// 介面可以被類別實現
interface Flyable {
  fly(): void;
  altitude: number;
}

interface Swimmable {
  swim(): void;
  depth: number;
}

// 實現多個介面
class Duck implements Flyable, Swimmable {
  altitude: number = 0;
  depth: number = 0;

  fly(): void {
    this.altitude = 100;
    console.log("Flying");
  }

  swim(): void {
    this.depth = 5;
    console.log("Swimming");
  }
}

// 介面也可以繼承其他介面
interface AmphibiousAnimal extends Flyable, Swimmable {
  name: string;
}
```

## 模組系統

### 匯出與匯入

```typescript
// math.ts - 具名匯出
export const PI = 3.14159;

export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

// 預設匯出
export default function subtract(a: number, b: number): number {
  return a - b;
}

// 重新匯出
export { divide } from './advanced-math';
```

```typescript
// main.ts - 匯入
import subtract, { add, multiply, PI } from './math';
import * as MathUtils from './math';

// 動態匯入
async function loadMath() {
  const mathModule = await import('./math');
  return mathModule.add(10, 5);
}

// 類型匯入
import type { User } from './types';
```

### 命名空間

```typescript
// 命名空間組織代碼
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

// 使用命名空間
const validator = new Validation.ZipCodeValidator();
```

## 裝飾器

### 類別裝飾器

```typescript
// 啟用實驗性裝飾器功能
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

// 方法裝飾器
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class Greeter {
  greeting: string;
  
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}
```

## 型別守衛

### 用戶定義的型別守衛

```typescript
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

// 型別謂詞
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // TypeScript 知道這是 Fish
  } else {
    pet.fly(); // TypeScript 知道這是 Bird
  }
}

// in 操作符
function moveAnimal(pet: Fish | Bird) {
  if ("swim" in pet) {
    pet.swim();
  } else {
    pet.fly();
  }
}

// instanceof 守衛
class SpanElement {
  isSpan = true;
}

function isSpanElement(element: any): element is SpanElement {
  return element instanceof SpanElement;
}
```

## 配置與工具

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 與 React 整合

```typescript
import React, { useState, useEffect } from 'react';

interface Props {
  name: string;
  age?: number;
  onSave: (data: UserData) => void;
}

interface UserData {
  name: string;
  email: string;
}

const UserForm: React.FC<Props> = ({ name, age = 0, onSave }) => {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    email: ''
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, name }));
  }, [name]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData(prev => ({ ...prev, name: e.target.value }))
        }
      />
      <button type="submit">Save</button>
    </form>
  );
};
```

## 最佳實踐

### 代碼組織

```typescript
// 1. 使用 barrel exports 組織模組
// index.ts
export * from './types';
export * from './utils';
export * from './components';

// 2. 建立型別定義文件
// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export type UserRole = 'admin' | 'user' | 'guest';

// 3. 使用常數斷言
const themes = ['light', 'dark'] as const;
type Theme = typeof themes[number]; // 'light' | 'dark'

// 4. 避免 any，使用 unknown
function parseJSON(json: string): unknown {
  return JSON.parse(json);
}

// 5. 使用嚴格的型別檢查
function processUser(user: User): void {
  // 編譯器會檢查所有分支
  if (user.email) {
    sendEmail(user.email);
  }
}
```

## 總結

TypeScript 為 JavaScript 開發帶來了：

1. **型別安全**：編譯時錯誤檢查
2. **更好的開發體驗**：自動完成、重構支援
3. **代碼可維護性**：清晰的介面和類型定義
4. **團隊協作**：型別作為代碼契約
5. **漸進式採用**：可以逐步遷移現有項目

掌握 TypeScript 不僅能提升代碼質量，還能顯著提升開發效率和團隊協作能力。建議從小項目開始實踐，逐步深入學習進階特性。
