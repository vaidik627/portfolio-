#!/usr/bin/env node

/**
 * Performance Check Script
 * Run this script to analyze your portfolio's performance
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Portfolio Performance Check\n');

// Check file sizes
function checkFileSizes() {
  console.log('📁 Checking file sizes...');
  
  const publicDir = path.join(process.cwd(), 'public');
  const srcDir = path.join(process.cwd(), 'src');
  
  let totalSize = 0;
  let fileCount = 0;
  
  function scanDirectory(dir, prefix = '') {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, prefix + '  ');
      } else {
        const sizeKB = Math.round(stat.size / 1024);
        totalSize += stat.size;
        fileCount++;
        
        if (sizeKB > 100) {
          console.log(`${prefix}⚠️  ${item}: ${sizeKB}KB`);
        }
      }
    });
  }
  
  scanDirectory(publicDir);
  scanDirectory(srcDir);
  
  console.log(`\n📊 Total files: ${fileCount}`);
  console.log(`📊 Total size: ${Math.round(totalSize / 1024 / 1024 * 100) / 100}MB`);
}

// Check dependencies
function checkDependencies() {
  console.log('\n📦 Checking dependencies...');
  
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
  
  const largeDeps = [];
  
  Object.entries(deps).forEach(([name, version]) => {
    // Check for known large packages
    const largePackages = [
      'lodash', 'moment', 'date-fns', 'react-icons', 
      'framer-motion', 'three', 'gsap'
    ];
    
    if (largePackages.includes(name)) {
      largeDeps.push({ name, version });
    }
  });
  
  if (largeDeps.length > 0) {
    console.log('⚠️  Large dependencies detected:');
    largeDeps.forEach(dep => {
      console.log(`   ${dep.name}@${dep.version}`);
    });
  } else {
    console.log('✅ No large dependencies detected');
  }
}

// Check Next.js configuration
function checkNextConfig() {
  console.log('\n⚙️  Checking Next.js configuration...');
  
  const configPath = path.join(process.cwd(), 'next.config.mjs');
  
  if (fs.existsSync(configPath)) {
    const config = fs.readFileSync(configPath, 'utf8');
    
    const optimizations = [
      { name: 'Image optimization', pattern: /images:/ },
      { name: 'Compression', pattern: /compress:/ },
      { name: 'Webpack optimization', pattern: /webpack:/ },
      { name: 'Package optimization', pattern: /optimizePackageImports:/ }
    ];
    
    optimizations.forEach(opt => {
      if (opt.pattern.test(config)) {
        console.log(`✅ ${opt.name} enabled`);
      } else {
        console.log(`⚠️  ${opt.name} not found`);
      }
    });
  }
}

// Performance recommendations
function showRecommendations() {
  console.log('\n💡 Performance Recommendations:');
  
  const recommendations = [
    'Use npm run dev:fast for faster development',
    'Clear cache regularly with npm run cache:clear',
    'Optimize images to WebP/AVIF format',
    'Use dynamic imports for large components',
    'Monitor bundle size with npm run build:analyze',
    'Set laptop power plan to "High Performance"',
    'Close unnecessary applications during development'
  ];
  
  recommendations.forEach((rec, index) => {
    console.log(`   ${index + 1}. ${rec}`);
  });
}

// Run all checks
function main() {
  checkFileSizes();
  checkDependencies();
  checkNextConfig();
  showRecommendations();
  
  console.log('\n🚀 Quick performance commands:');
  console.log('   npm run dev:fast     - Start optimized dev server');
  console.log('   npm run cache:clear  - Clear Next.js cache');
  console.log('   npm run clean        - Full cleanup');
  console.log('   npm run build:analyze - Analyze bundle size');
}

main();
