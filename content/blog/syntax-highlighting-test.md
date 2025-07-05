---
title: "Syntax Highlighting Test"
date: "2024-12-01"
excerpt: "Testing beautiful syntax highlighting with react-syntax-highlighter across multiple programming languages."
category: "Testing"
tags: ["Testing", "Code", "Syntax", "Highlighting"]
author: "dchome"
featured: true
image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
---

# Syntax Highlighting Test

This post demonstrates beautiful syntax highlighting using react-syntax-highlighter across different programming languages.

## JavaScript Examples

Here's some modern JavaScript with ES6+ features:

```javascript
// Async/await with error handling
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch user data');
  }
};

// Arrow functions and destructuring
const processUsers = (users) => {
  return users
    .filter(({ isActive }) => isActive)
    .map(({ id, name, email }) => ({ id, name, email }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

// Classes with private fields
class UserManager {
  #users = new Map();
  
  constructor(initialUsers = []) {
    initialUsers.forEach(user => this.addUser(user));
  }
  
  addUser(user) {
    this.#users.set(user.id, user);
  }
  
  getUser(id) {
    return this.#users.get(id);
  }
}
```

## TypeScript Examples

TypeScript with advanced types and generics:

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: Date;
}

type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
};

// Generic service class
class ApiService<T> {
  private baseUrl: string;
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  
  async get<R = T>(endpoint: string): Promise<ApiResponse<R>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    return response.json() as Promise<ApiResponse<R>>;
  }
  
  async post<R = T>(endpoint: string, data: Partial<T>): Promise<ApiResponse<R>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json() as Promise<ApiResponse<R>>;
  }
}

// Usage with type inference
const userService = new ApiService<User>('https://api.example.com');
const userData = await userService.get<User[]>('/users');
```

## CSS Examples

Modern CSS with Grid, Flexbox, and custom properties:

```css
/* CSS Custom Properties and Modern Layout */
:root {
  --primary-color: hsl(210, 100%, 50%);
  --secondary-color: hsl(270, 100%, 50%);
  --background: hsl(0, 0%, 98%);
  --text-color: hsl(0, 0%, 10%);
  --border-radius: 12px;
  --shadow: 0 10px 30px hsla(0, 0%, 0%, 0.1);
}

/* Modern Grid Layout */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: 
    "sidebar header"
    "sidebar main";
  min-height: 100vh;
  gap: 1rem;
}

.sidebar {
  grid-area: sidebar;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: var(--border-radius);
  padding: 1.5rem;
}

.header {
  grid-area: header;
  background: var(--background);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}

/* Advanced Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 2rem;
  animation: slideInUp 0.6s ease-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px hsla(0, 0%, 0%, 0.15);
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto 1fr;
    grid-template-areas: 
      "header"
      "sidebar"
      "main";
  }
  
  .sidebar {
    order: 2;
  }
}
```

## HTML Examples

Semantic HTML5 with accessibility features:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Modern web application with accessibility features">
    <title>Accessible Web App</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
</head>
<body>
    <header role="banner" class="main-header">
        <nav role="navigation" aria-label="Main navigation">
            <div class="nav-container">
                <a href="/" class="logo" aria-label="Home">
                    <img src="logo.svg" alt="Company Logo" width="120" height="40">
                </a>
                <ul class="nav-menu" role="menubar">
                    <li role="none">
                        <a href="#home" role="menuitem" class="nav-link">Home</a>
                    </li>
                    <li role="none">
                        <a href="#about" role="menuitem" class="nav-link">About</a>
                    </li>
                    <li role="none">
                        <a href="#services" role="menuitem" class="nav-link">Services</a>
                    </li>
                    <li role="none">
                        <a href="#contact" role="menuitem" class="nav-link">Contact</a>
                    </li>
                </ul>
                <button class="mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-menu">
                    <span class="sr-only">Toggle menu</span>
                    <span class="hamburger"></span>
                </button>
            </div>
        </nav>
    </header>
    
    <main role="main" class="main-content">
        <section class="hero" aria-labelledby="hero-title">
            <div class="hero-content">
                <h1 id="hero-title" class="hero-title">Welcome to Our Platform</h1>
                <p class="hero-description">
                    Build amazing experiences with our modern tools and services.
                </p>
                <div class="hero-actions">
                    <button class="btn btn-primary" onclick="handleGetStarted()">
                        Get Started
                    </button>
                    <a href="#learn-more" class="btn btn-secondary">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
        
        <section class="features" aria-labelledby="features-title">
            <h2 id="features-title" class="section-title">Features</h2>
            <div class="features-grid">
                <article class="feature-card">
                    <h3>Fast Performance</h3>
                    <p>Lightning-fast load times and smooth interactions.</p>
                </article>
                <article class="feature-card">
                    <h3>Secure</h3>
                    <p>Enterprise-grade security for your peace of mind.</p>
                </article>
                <article class="feature-card">
                    <h3>Scalable</h3>
                    <p>Grows with your business needs.</p>
                </article>
            </div>
        </section>
    </main>
    
    <footer role="contentinfo" class="main-footer">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>
```

## JSON Configuration

Package.json with modern development setup:

```json
{
  "name": "modern-web-app",
  "version": "2.1.0",
  "description": "A modern web application with TypeScript and React",
  "main": "dist/index.js",
  "scripts": {
    "start": "node dist/server.js",
    "dev": "concurrently \"npm run dev:server\" \"npm run dev:client\"",
    "dev:server": "nodemon --exec ts-node src/server.ts",
    "dev:client": "vite",
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build",
    "build:server": "tsc --project tsconfig.server.json",
    "test": "jest --coverage",
    "test:watch": "jest --watch",
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,md}\"",
    "typecheck": "tsc --noEmit",
    "prepare": "husky install"
  },
  "dependencies": {
    "express": "^4.18.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "styled-components": "^5.3.9",
    "axios": "^1.3.4",
    "lodash": "^4.17.21",
    "date-fns": "^2.29.3"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@types/node": "^18.15.0",
    "@types/express": "^4.17.17",
    "@types/lodash": "^4.14.191",
    "typescript": "^4.9.5",
    "vite": "^4.1.4",
    "@vitejs/plugin-react": "^3.1.0",
    "jest": "^29.4.3",
    "@types/jest": "^29.4.0",
    "ts-jest": "^29.0.5",
    "eslint": "^8.36.0",
    "@typescript-eslint/eslint-plugin": "^5.55.0",
    "@typescript-eslint/parser": "^5.55.0",
    "prettier": "^2.8.4",
    "husky": "^8.0.3",
    "lint-staged": "^13.2.0",
    "concurrently": "^7.6.0",
    "nodemon": "^2.0.20",
    "ts-node": "^10.9.1"
  },
  "engines": {
    "node": ">=16.0.0",
    "npm": ">=8.0.0"
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,css,md}": [
      "prettier --write"
    ]
  },
  "keywords": [
    "web",
    "app",
    "react",
    "typescript",
    "modern",
    "frontend",
    "backend"
  ],
  "author": "dchome",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/username/modern-web-app.git"
  },
  "bugs": {
    "url": "https://github.com/username/modern-web-app/issues"
  },
  "homepage": "https://modern-web-app.example.com"
}
```

## Bash/Shell Scripts

Deployment automation script:

```bash
#!/bin/bash

# Modern deployment script with error handling
set -euo pipefail

# Configuration
PROJECT_NAME="modern-web-app"
BUILD_DIR="dist"
REMOTE_SERVER="deploy@production.example.com"
REMOTE_PATH="/var/www/${PROJECT_NAME}"
BACKUP_DIR="/var/backups/${PROJECT_NAME}"
LOG_FILE="/var/log/${PROJECT_NAME}-deploy.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
    exit 1
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a "$LOG_FILE"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

# Check prerequisites
check_prerequisites() {
    log "Checking prerequisites..."
    
    command -v node >/dev/null 2>&1 || error "Node.js is required but not installed"
    command -v npm >/dev/null 2>&1 || error "npm is required but not installed"
    command -v rsync >/dev/null 2>&1 || error "rsync is required but not installed"
    
    success "All prerequisites met"
}

# Install dependencies
install_dependencies() {
    log "Installing dependencies..."
    npm ci --production=false
    success "Dependencies installed"
}

# Run tests
run_tests() {
    log "Running tests..."
    npm run test -- --coverage --watchAll=false
    success "All tests passed"
}

# Build project
build_project() {
    log "Building project..."
    npm run build
    
    if [ ! -d "$BUILD_DIR" ]; then
        error "Build directory not found: $BUILD_DIR"
    fi
    
    success "Build completed successfully"
}

# Create deployment package
create_package() {
    log "Creating deployment package..."
    
    local timestamp=$(date +%Y%m%d_%H%M%S)
    local package_name="${PROJECT_NAME}_${timestamp}.tar.gz"
    
    tar -czf "$package_name" -C "$BUILD_DIR" .
    
    if [ ! -f "$package_name" ]; then
        error "Failed to create package: $package_name"
    fi
    
    echo "$package_name"
}

# Deploy to server
deploy_to_server() {
    local package_name=$1
    
    log "Deploying to server: $REMOTE_SERVER"
    
    # Upload package
    scp "$package_name" "${REMOTE_SERVER}:/tmp/"
    
    # Execute deployment on server
    ssh "$REMOTE_SERVER" << EOF
        set -e
        
        # Create backup
        if [ -d "$REMOTE_PATH" ]; then
            sudo mkdir -p "$BACKUP_DIR"
            sudo cp -r "$REMOTE_PATH" "${BACKUP_DIR}/backup_$(date +%Y%m%d_%H%M%S)"
        fi
        
        # Prepare new deployment
        sudo mkdir -p "$REMOTE_PATH"
        sudo rm -rf "${REMOTE_PATH}/new"
        sudo mkdir "${REMOTE_PATH}/new"
        
        # Extract new version
        sudo tar -xzf "/tmp/$package_name" -C "${REMOTE_PATH}/new"
        
        # Switch to new version
        if [ -d "${REMOTE_PATH}/current" ]; then
            sudo mv "${REMOTE_PATH}/current" "${REMOTE_PATH}/old"
        fi
        sudo mv "${REMOTE_PATH}/new" "${REMOTE_PATH}/current"
        
        # Restart services
        sudo systemctl restart nginx
        sudo systemctl restart "${PROJECT_NAME}"
        
        # Clean up
        rm "/tmp/$package_name"
        sudo rm -rf "${REMOTE_PATH}/old"
        
        echo "Deployment completed successfully"
EOF
    
    success "Deployment to server completed"
}

# Main deployment process
main() {
    log "Starting deployment process for $PROJECT_NAME"
    
    check_prerequisites
    install_dependencies
    run_tests
    build_project
    
    local package_name
    package_name=$(create_package)
    
    deploy_to_server "$package_name"
    
    # Clean up local package
    rm "$package_name"
    
    success "Deployment completed successfully! 🚀"
}

# Handle script interruption
trap 'error "Deployment interrupted"' INT TERM

# Run main function
main "$@"
```

All these code examples should now display with beautiful syntax highlighting using react-syntax-highlighter! The `oneDark` theme provides excellent contrast and readability.
