---
title: "JavaScript ES6 Complete Guide"
date: "2024-06-15"
excerpt: "A complete guide to ES6 features for modern JavaScript development."
category: "JavaScript"
tags: ["JavaScript", "ES6", "Frontend", "Programming"]
author: "dchome"
featured: false
image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# JavaScript ES6 Complete Guide

ES6 (ECMAScript 2015) introduced many new features to JavaScript. This guide covers the most important ES6 features for modern development.

## Let & Const

- `let` allows block-scoped variables.
- `const` declares constants (block-scoped, cannot be reassigned).

```javascript
let count = 1;
const PI = 3.14;
```

## Arrow Functions

Arrow functions provide a shorter syntax and lexical `this` binding.

```javascript
const add = (a, b) => a + b;
```

## Template Literals

Template literals allow embedded expressions and multi-line strings.

```javascript
const name = 'World';
console.log(`Hello, ${name}!`);
```

## Destructuring

Destructuring makes it easy to extract values from arrays and objects.

```javascript
const user = { name: 'Alice', age: 25 };
const { name, age } = user;
```

## Default Parameters

Functions can have default parameter values.

```javascript
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
```

## Spread & Rest

- **Rest**: Collects arguments into an array.
- **Spread**: Expands arrays/objects into individual elements.

```javascript
const arr = [1, 2, 3];
const arr2 = [...arr, 4];

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
```

## Classes

ES6 introduces class syntax for object-oriented programming.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}!`;
  }
}
```

## Modules

ES6 supports module import/export.

```javascript
// Export
export function add(a, b) { return a + b; }
// Import
import { add } from './math.js';
```

By mastering ES6, you can write cleaner, more efficient JavaScript code.
