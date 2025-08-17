# YAML Syntax Guide for MDX Files

## Overview
This guide helps prevent YAML parsing errors in MDX front matter. YAML is very strict about syntax, and even small mistakes can cause parsing failures.

## Common YAML Errors and Fixes

### 1. Date Format Issues

**❌ Incorrect:**
```yaml
publishedAt: "13 November-2024"
publishedAt: "November 13, 2024"
publishedAt: 13-11-2024
```

**✅ Correct:**
```yaml
publishedAt: "2024-11-13"
publishedAt: "2024-01-15"
publishedAt: "2024-12-25"
```

### 2. Quote Issues

**❌ Incorrect:**
```yaml
summary: "This certificate verifies successful completion of the "Machine Learning with R" course"
```

**✅ Correct:**
```yaml
summary: "This certificate verifies successful completion of the 'Machine Learning with R' course"
summary: 'This certificate verifies successful completion of the "Machine Learning with R" course'
```

### 3. Indentation Issues

**❌ Incorrect:**
```yaml
title: "Certificate Title"
  summary: "Description"  # Wrong indentation
```

**✅ Correct:**
```yaml
title: "Certificate Title"
summary: "Description"  # Correct indentation
```

### 4. Special Characters

**❌ Incorrect:**
```yaml
title: "Certificate: Data Science & ML"
```

**✅ Correct:**
```yaml
title: "Certificate: Data Science & ML"  # Use quotes for special characters
title: 'Certificate: Data Science & ML'  # Or single quotes
```

## Valid MDX Front Matter Template

```yaml
---
title: "Your Certificate Title"
publishedAt: "2024-01-15"
summary: "Brief description of the certificate and skills covered"
image: "/images/certificates/your-certificate-image.jpg"
tag: "Category"
verificationLink: "https://your-verification-url.com/certificate-id"
---

## Your Certificate Title

Content goes here...
```

## YAML Validation Rules

### 1. Date Format
- **Use ISO 8601 format**: `YYYY-MM-DD`
- **Always use quotes**: `"2024-01-15"`
- **Examples**:
  - ✅ `"2024-01-15"`
  - ✅ `"2024-12-25"`
  - ❌ `"January 15, 2024"`
  - ❌ `"15-01-2024"`

### 2. String Values
- **Use quotes for strings with special characters**
- **Use single quotes for strings with double quotes inside**
- **Use double quotes for strings with single quotes inside**

### 3. Indentation
- **Use spaces, not tabs**
- **Be consistent with indentation**
- **All items at the same level should have the same indentation**

### 4. Lists
```yaml
# Correct list format
images:
  - "/images/image1.jpg"
  - "/images/image2.jpg"
  - "/images/image3.jpg"
```

### 5. Objects
```yaml
# Correct object format
team:
  - name: "John Doe"
    role: "Developer"
    avatar: "/images/avatar.jpg"
```

## Common Issues and Solutions

### Issue: "can not read a block mapping entry"
**Cause**: Incorrect indentation or missing quotes
**Solution**: Check indentation and add quotes around values

### Issue: "mapping values are not allowed here"
**Cause**: Wrong YAML structure
**Solution**: Ensure proper key-value pairs

### Issue: "found character that cannot start any token"
**Cause**: Special characters without quotes
**Solution**: Wrap the value in quotes

## Validation Tools

### 1. Online YAML Validator
- Visit: https://www.yamllint.com/
- Paste your front matter (without the `---` markers)
- Check for errors

### 2. VS Code Extension
- Install "YAML" extension
- It will highlight syntax errors in real-time

### 3. Command Line
```bash
# Install yamllint
pip install yamllint

# Validate a file
yamllint your-file.mdx
```

## Testing Your MDX Files

### 1. Syntax Check
```bash
# Test if the file can be parsed
node -e "
const matter = require('gray-matter');
const fs = require('fs');
try {
  const content = fs.readFileSync('your-file.mdx', 'utf-8');
  const result = matter(content);
  console.log('✅ File parsed successfully');
} catch (error) {
  console.log('❌ Error:', error.message);
}
"
```

### 2. Development Server
- Start your development server
- If there are YAML errors, they will appear in the console
- Fix the errors and the server will reload automatically

## Best Practices

1. **Always use quotes for dates**: `"2024-01-15"`
2. **Use quotes for strings with special characters**
3. **Be consistent with indentation**
4. **Test your MDX files before committing**
5. **Use a YAML validator for complex front matter**
6. **Keep front matter simple and readable**

## Quick Reference

| Field | Format | Example |
|-------|--------|---------|
| `title` | String | `"Certificate Title"` |
| `publishedAt` | Date | `"2024-01-15"` |
| `summary` | String | `"Description here"` |
| `image` | String | `"/images/cert.jpg"` |
| `tag` | String | `"Category"` |
| `verificationLink` | String | `"https://example.com"` |

## Emergency Fix

If you're getting YAML errors and can't identify the issue:

1. **Copy the front matter** (between `---` markers)
2. **Paste it into an online YAML validator**
3. **Fix the errors identified**
4. **Replace the front matter in your MDX file**
5. **Restart your development server**

This guide should help prevent YAML parsing errors in your MDX files!
