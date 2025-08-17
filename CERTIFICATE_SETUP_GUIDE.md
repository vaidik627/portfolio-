# Certificate Setup Guide

## Overview
This guide explains how to add, modify, and manage certificates in your portfolio's achievement section.

## File Structure

### Certificate Files Location
```
src/app/achievement/certificates/
├── data-science.mdx
├── machine-learning.mdx
├── python-programming.mdx
└── web-development.mdx
```

### Certificate Images Location
```
public/images/certificates/
├── data-science.jpg
├── machine-learning.jpg
├── python-programming.jpg
└── web-development.jpg
```

## How to Add a New Certificate

### Step 1: Create Certificate Image
1. Save your certificate image in `public/images/certificates/`
2. Use a descriptive filename (e.g., `my-new-certificate.jpg`)
3. Recommended size: 400x400px or 1:1 aspect ratio
4. Supported formats: JPG, PNG, WebP

### Step 2: Create Certificate MDX File
Create a new `.mdx` file in `src/app/achievement/certificates/` with the following structure:

```mdx
---
title: "Your Certificate Title"
publishedAt: "2024-01-15"
summary: "Brief description of the certificate and skills covered"
image: "/images/certificates/your-certificate-image.jpg"
tag: "Category"
verificationLink: "https://your-verification-url.com/certificate-id"
---

## Your Certificate Title

Detailed description of the certificate and what it represents.

### Skills Covered:
- Skill 1
- Skill 2
- Skill 3

### Issuing Organization: Organization Name
### Credential ID: CERT-2024-001
### Issue Date: January 15, 2024

### Verification
You can verify this certificate by visiting the official credential page: [Verify Certificate](https://your-verification-url.com/certificate-id)

### Certificate Details
Detailed information about the certification program, what was learned, and its significance.
```

### Step 3: Front Matter Fields Explained

| Field | Description | Required | Example |
|-------|-------------|----------|---------|
| `title` | Certificate title | Yes | "Data Science Professional" |
| `publishedAt` | Issue date (YYYY-MM-DD) | Yes | "2024-01-15" |
| `summary` | Brief description | Yes | "Professional data science certification..." |
| `image` | Path to certificate image | Yes | "/images/certificates/data-science.jpg" |
| `tag` | Category/tag | Yes | "Data Science" |
| `verificationLink` | URL to verify certificate | Yes | "https://credly.com/badges/..." |

## How to Modify Existing Certificates

### Update Certificate Information
1. Open the corresponding `.mdx` file in `src/app/achievement/certificates/`
2. Modify the front matter (the section between `---`)
3. Update the content below the front matter
4. Save the file

### Update Certificate Image
1. Replace the image file in `public/images/certificates/`
2. Update the `image` field in the MDX file if the filename changes
3. Ensure the new image has the same aspect ratio (1:1 recommended)

### Update Verification Link
1. Find the `verificationLink` field in the front matter
2. Replace with the new verification URL
3. Also update the verification link in the content section

## Layout Features

### Certificate Display
- **Left Side**: Certificate image (100x100px)
- **Center**: Certificate details (title, summary, date, tag)
- **Right Side**: "Verify" button that links to the certificate page

### Certificate Page Features
- **Header Section**: Certificate title, summary, and prominent verification button
- **Content Section**: Detailed certificate information
- **Verification**: Direct link to official verification page

### Animations
- Smooth hover effects on certificate cards
- Reveal animations similar to contact page
- Image hover effects

## Best Practices

### Image Guidelines
- Use high-quality images (minimum 200x200px)
- Maintain consistent aspect ratio (1:1 recommended)
- Optimize images for web (compress if needed)
- Use descriptive filenames

### Content Guidelines
- Keep summaries concise but informative
- Include relevant skills and technologies
- Provide clear verification instructions
- Use consistent formatting across all certificates

### Verification Links
- Always use official verification URLs
- Test links regularly to ensure they work
- Include both front matter and content links
- Use descriptive link text

## Troubleshooting

### Certificate Not Appearing
1. Check if the MDX file is in the correct directory
2. Verify the front matter syntax (no extra spaces, correct format)
3. Ensure the `publishedAt` date is valid
4. Check for any syntax errors in the MDX file

### Image Not Displaying
1. Verify the image path in the front matter
2. Check if the image file exists in the correct directory
3. Ensure the image filename matches exactly (case-sensitive)
4. Try a different image format if needed

### Verification Link Issues
1. Test the verification URL in a browser
2. Ensure the URL is complete and correct
3. Check if the certificate provider's website is accessible
4. Update the link if the certificate provider changes their URL structure

## File Locations Summary

| Purpose | Location |
|---------|----------|
| Certificate MDX files | `src/app/achievement/certificates/` |
| Certificate images | `public/images/certificates/` |
| Certificate components | `src/components/achievement/` |
| Achievement page | `src/app/achievement/page.tsx` |
| Certificate detail pages | `src/app/achievement/[slug]/page.tsx` |

## Example Certificate Structure

```
src/app/achievement/certificates/
├── data-science.mdx          # Data Science certificate
├── machine-learning.mdx      # Machine Learning certificate
├── python-programming.mdx    # Python Programming certificate
└── web-development.mdx       # Web Development certificate

public/images/certificates/
├── data-science.jpg          # Data Science certificate image
├── machine-learning.jpg      # Machine Learning certificate image
├── python-programming.jpg    # Python Programming certificate image
└── web-development.jpg       # Web Development certificate image
```

This structure ensures consistency and makes it easy to manage your certificates.
