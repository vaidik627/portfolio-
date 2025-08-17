#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateMDXFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);
    
    // Check required fields
    const required = ['title', 'publishedAt', 'summary'];
    const missing = required.filter(field => !data[field]);
    
    if (missing.length > 0) {
      log(`❌ Missing required fields: ${missing.join(', ')}`, 'red');
      return false;
    }
    
    // Check date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(data.publishedAt)) {
      log(`❌ Invalid date format: "${data.publishedAt}". Use "YYYY-MM-DD" format.`, 'red');
      return false;
    }
    
    // Check for quote conflicts
    const summary = data.summary || '';
    if ((summary.includes('"') && summary.includes("'")) || 
        (summary.split('"').length % 2 !== 1 && summary.includes('"'))) {
      log(`❌ Quote conflict detected in summary. Use single quotes for strings with double quotes.`, 'red');
      return false;
    }
    
    log(`✅ ${path.basename(filePath)} - Valid`, 'green');
    return true;
    
  } catch (error) {
    log(`❌ ${path.basename(filePath)} - ${error.message}`, 'red');
    return false;
  }
}

function validateAllMDXFiles() {
  const certificatesDir = path.join(process.cwd(), 'src', 'app', 'achievement', 'certificates');
  
  if (!fs.existsSync(certificatesDir)) {
    log('❌ Certificates directory not found!', 'red');
    return;
  }
  
  log('\n🔍 Validating MDX files...', 'blue');
  log('='.repeat(50), 'blue');
  
  const files = fs.readdirSync(certificatesDir).filter(file => file.endsWith('.mdx'));
  
  if (files.length === 0) {
    log('❌ No MDX files found in certificates directory!', 'red');
    return;
  }
  
  let validCount = 0;
  let totalCount = files.length;
  
  files.forEach(file => {
    const filePath = path.join(certificatesDir, file);
    if (validateMDXFile(filePath)) {
      validCount++;
    }
  });
  
  log('='.repeat(50), 'blue');
  log(`📊 Results: ${validCount}/${totalCount} files are valid`, validCount === totalCount ? 'green' : 'yellow');
  
  if (validCount === totalCount) {
    log('🎉 All MDX files are valid! Your application should work without errors.', 'green');
  } else {
    log('⚠️  Some files have issues. Please fix them before running the application.', 'yellow');
    log('\n💡 Quick fixes:', 'blue');
    log('   - Use "YYYY-MM-DD" format for dates (e.g., "2024-11-13")', 'blue');
    log('   - Use single quotes for strings with double quotes', 'blue');
    log('   - Check indentation (use spaces, not tabs)', 'blue');
    log('   - Ensure all required fields are present', 'blue');
  }
}

// Run validation
validateAllMDXFiles();
