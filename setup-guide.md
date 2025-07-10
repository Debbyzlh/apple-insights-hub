# Local Development Setup Guide

## Prerequisites

### 1. Install Node.js and npm
```bash
# Install Node.js (Latest LTS version recommended)
# Option 1: Download from https://nodejs.org/
# Option 2: Using Homebrew (recommended)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node

# Verify installation
node --version  # Should be v18+ or v20+
npm --version   # Should be v9+ or v10+
```

### 2. Install Git (if not already installed)
```bash
# Check if git is installed
git --version

# If not installed, install via Homebrew
brew install git
```

## Project Setup

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd <your-project-name>
```

### 2. Install dependencies
```bash
# Clear npm cache (if you have permission issues)
npm cache clean --force

# Install all project dependencies
npm install

# If you encounter permission issues, try:
sudo npm install --unsafe-perm=true --allow-root
```

### 3. Environment setup
```bash
# Copy environment file (if needed)
cp .env.example .env.local
```

### 4. Start development server
```bash
npm run dev
```

The application should now be running at `http://localhost:8080`

## Troubleshooting Common Issues

### Issue 1: "Cannot apply unknown utility class `border-border`"
This error occurs when Tailwind CSS variables aren't properly configured.

**Solution:**
```bash
# Ensure Tailwind is properly installed
npm install -D tailwindcss postcss autoprefixer
npm install tailwindcss-animate

# If still having issues, try reinstalling
rm -rf node_modules package-lock.json
npm install
```

### Issue 2: Package not found errors
```bash
# Clear all caches and reinstall
rm -rf node_modules
rm package-lock.json
npm cache clean --force
npm install
```

### Issue 3: Permission denied errors
```bash
# Fix npm permissions (macOS specific)
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

### Issue 4: Port already in use
```bash
# Kill process on port 8080
lsof -ti:8080 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

## Additional Tools (Optional but Recommended)

### VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Auto Rename Tag
- Prettier - Code formatter

### Install VS Code (if not installed)
```bash
brew install --cask visual-studio-code
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npx tsc --noEmit

# Run linting
npx eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0
```

## File Structure Overview
```
project-root/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── lib/           # Utility functions
│   ├── hooks/         # Custom React hooks
│   ├── index.css      # Global styles & CSS variables
│   └── main.tsx       # App entry point
├── public/            # Static assets
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## Important Notes

1. **Node.js Version**: This project requires Node.js 18+ or 20+
2. **Package Manager**: Use npm (yarn might cause dependency conflicts)
3. **CSS Variables**: The project uses CSS custom properties defined in `src/index.css`
4. **Component Library**: Uses shadcn/ui components with Radix UI primitives
5. **Styling**: Tailwind CSS with custom design tokens

## Verification Steps

1. Check Node.js version: `node --version`
2. Verify dependencies installed: `ls node_modules` (should show many packages)
3. Check if dev server starts: `npm run dev`
4. Verify localhost access: Open `http://localhost:8080` in browser
5. Check console for errors: Open browser dev tools

If you encounter any issues not covered here, check:
- Browser console for JavaScript errors
- Terminal output for build errors
- Network tab for failed requests
- Ensure all required files are present in the project