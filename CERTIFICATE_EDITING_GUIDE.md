# Certificate Editing Guide

## 🚨 **IMPORTANT: How to Avoid YAML Errors**

### **Before Editing Any Certificate:**

1. **Run validation first:**
   ```bash
   npm run validate
   ```

2. **If you see errors, fix them before starting the dev server**

### **Common YAML Errors & Fixes:**

#### ❌ **WRONG Date Format:**
```yaml
publishedAt: "13 November-2024"    # ❌ Wrong
publishedAt: "November 13, 2024"   # ❌ Wrong
publishedAt: 13-11-2024            # ❌ Wrong
```

#### ✅ **CORRECT Date Format:**
```yaml
publishedAt: "2024-11-13"          # ✅ Correct
publishedAt: "2024-01-15"          # ✅ Correct
publishedAt: "2024-12-25"          # ✅ Correct
```

#### ❌ **WRONG Quote Usage:**
```yaml
summary: "This certificate verifies the "Python" course"  # ❌ Wrong
```

#### ✅ **CORRECT Quote Usage:**
```yaml
summary: "This certificate verifies the 'Python' course"  # ✅ Correct
summary: 'This certificate verifies the "Python" course'  # ✅ Correct
```

### **Quick Template for New Certificates:**

```yaml
---
title: "Your Certificate Title"
publishedAt: "2024-11-13"
summary: "Brief description of the certificate and skills covered"
image: "/images/projects/project-01/certificate/your-image.jpg"
tag: "Category"
verificationLink: "https://your-verification-url.com/certificate-id"
---

## Your Certificate Title

Content goes here...
```

### **Step-by-Step Editing Process:**

1. **Stop the dev server** (Ctrl+C)
2. **Edit your certificate file**
3. **Run validation:** `npm run validate`
4. **If no errors, start dev server:** `npm run dev`
5. **If errors, fix them and repeat step 3**

### **Validation Commands:**

```bash
# Check all certificates for errors
npm run validate

# Check and get guidance on fixing errors
npm run validate:fix
```

### **What the Validation Checks:**

- ✅ **Date format** (must be "YYYY-MM-DD")
- ✅ **Required fields** (title, publishedAt, summary)
- ✅ **Quote conflicts** (no mismatched quotes)
- ✅ **YAML syntax** (proper indentation, structure)

### **Emergency Fix:**

If your app crashes with YAML errors:

1. **Stop the dev server**
2. **Run:** `npm run validate`
3. **Fix the errors shown**
4. **Restart:** `npm run dev`

### **Pro Tips:**

- **Always use quotes for dates:** `"2024-11-13"`
- **Use single quotes for text with double quotes inside**
- **Check indentation** (use spaces, not tabs)
- **Test before committing** changes

---

## 🎯 **Quick Reference**

| Field | Format | Example |
|-------|--------|---------|
| `title` | String | `"Certificate Title"` |
| `publishedAt` | Date | `"2024-11-13"` |
| `summary` | String | `"Description here"` |
| `image` | String | `"/images/cert.jpg"` |
| `tag` | String | `"Category"` |
| `verificationLink` | String | `"https://example.com"` |

**Remember:** When in doubt, run `npm run validate` first!
