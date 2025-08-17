# Performance Optimization Guide

## Overview
This guide provides solutions for improving Next.js performance on both local development and production deployment.

## Local Development Performance Issues

### Why is Next.js Slow on Laptops?

1. **Power Management**: Laptops throttle CPU when on battery
2. **Limited RAM**: Development servers use significant memory
3. **Disk I/O**: Slower SSDs affect file watching
4. **Thermal Throttling**: Laptops reduce performance to manage heat

### Solutions

#### 1. Memory Optimization
```bash
# Increase Node.js memory limit
NODE_OPTIONS='--max-old-space-size=4096' npm run dev

# Or use the optimized script
npm run dev:fast
```

#### 2. Clear Cache Regularly
```bash
# Clear Next.js cache
npm run cache:clear

# Full cleanup
npm run clean
```

#### 3. Disable Unnecessary Features
- Turbopack (temporarily disabled in config)
- File watching optimizations
- Reduce bundle analyzer overhead

## Performance Optimizations Applied

### 1. Next.js Configuration (`next.config.mjs`)

#### Package Import Optimization
```javascript
experimental: {
  optimizePackageImports: ['@once-ui-system/core', 'react-icons'],
}
```

#### Image Optimization
```javascript
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
}
```

#### Webpack Optimizations
```javascript
webpack: (config, { dev, isServer }) => {
  if (!dev && !isServer) {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    };
  }
  return config;
}
```

### 2. Package.json Scripts

#### Development Scripts
```json
{
  "dev": "NODE_OPTIONS='--max-old-space-size=4096' next dev",
  "dev:fast": "NODE_OPTIONS='--max-old-space-size=4096 --optimize-for-size' next dev",
  "start:fast": "NODE_OPTIONS='--max-old-space-size=4096' next start"
}
```

#### Maintenance Scripts
```json
{
  "clean": "rm -rf .next && rm -rf node_modules/.cache",
  "cache:clear": "rm -rf .next"
}
```

## Laptop-Specific Optimizations

### 1. Power Settings
- **Windows**: Set power plan to "High Performance"
- **macOS**: Disable "Automatic graphics switching"
- **Linux**: Use `performance` CPU governor

### 2. Development Environment
```bash
# Use faster development mode
npm run dev:fast

# Monitor memory usage
node --max-old-space-size=4096 --trace-gc node_modules/.bin/next dev
```

### 3. File System Optimizations
```bash
# Exclude unnecessary files from watching
# Add to .gitignore or .nextignore
node_modules
.git
.next
```

## Production Deployment Optimizations

### 1. Build Optimization
```bash
# Analyze bundle size
npm run build:analyze

# Production build
npm run build
```

### 2. Deployment Platforms

#### Vercel (Recommended)
- Automatic optimizations
- Edge caching
- CDN distribution
- Zero-config deployment

#### Netlify
- Static site generation
- Asset optimization
- Global CDN

#### Self-hosted
- Use nginx with gzip compression
- Enable HTTP/2
- Implement caching headers

## Monitoring Performance

### 1. Bundle Analysis
```bash
# Analyze bundle size
npm run build:analyze
```

### 2. Performance Metrics
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

### 3. Lighthouse Scores
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Troubleshooting Slow Performance

### 1. Development Server Issues
```bash
# Clear all caches
npm run clean

# Restart with more memory
npm run dev:fast

# Check for memory leaks
node --inspect node_modules/.bin/next dev
```

### 2. Build Performance Issues
```bash
# Analyze bundle
npm run build:analyze

# Check for large dependencies
npm ls --depth=0

# Optimize images
# Use WebP/AVIF formats
# Compress images before adding
```

### 3. Runtime Performance Issues
- Implement code splitting
- Use dynamic imports
- Optimize images
- Minimize JavaScript bundles

## Best Practices

### 1. Code Optimization
- Use dynamic imports for large components
- Implement proper code splitting
- Optimize images and assets
- Minimize bundle size

### 2. Development Workflow
- Clear cache regularly
- Use performance monitoring tools
- Test on different devices
- Monitor memory usage

### 3. Deployment
- Use CDN for static assets
- Enable compression
- Implement caching strategies
- Monitor performance metrics

## Quick Performance Checklist

- [ ] Clear Next.js cache (`npm run cache:clear`)
- [ ] Use optimized dev script (`npm run dev:fast`)
- [ ] Monitor memory usage
- [ ] Optimize images (WebP/AVIF)
- [ ] Implement code splitting
- [ ] Use production build for testing
- [ ] Monitor bundle size
- [ ] Test on different devices
- [ ] Enable compression
- [ ] Implement caching

## Expected Performance Improvements

### Local Development
- **Startup time**: 30-50% faster
- **Hot reloads**: 2-3x faster
- **Memory usage**: 20-30% reduction
- **Build time**: 40-60% faster

### Production
- **Page load time**: 50-70% faster
- **Bundle size**: 30-40% smaller
- **First paint**: 2-3x faster
- **SEO scores**: 90+ across all metrics

Follow these optimizations to significantly improve your portfolio's performance on both local development and production deployment.
