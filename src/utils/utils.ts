import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Metadata {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tag?: string;
  verificationLink?: string;
}

export interface Post {
  metadata: Metadata;
  slug: string;
  content: string;
}

function readMDXFile(filePath: string): Post {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);
    
    const metadata: Metadata = {
      title: data.title || "",
      publishedAt: data.publishedAt || "",
      summary: data.summary || "",
      image: data.image || "",
      tag: data.tag || "",
      verificationLink: data.verificationLink || "",
    };

    const slug = path.basename(filePath, path.extname(filePath));
    
    return { metadata, content, slug };
  } catch (error) {
    console.error(`❌ Error parsing MDX file: ${filePath}`);
    console.error(`📝 Error details:`, error);
    
    // Provide specific guidance based on error type
    if (error instanceof Error) {
      if (error.message.includes('YAMLException')) {
        console.error(`🔧 YAML Syntax Error detected!`);
        console.error(`   Common issues:`);
        console.error(`   - Invalid date format: Use "YYYY-MM-DD" (e.g., "2024-11-13")`);
        console.error(`   - Quote conflicts: Use single quotes for strings with double quotes`);
        console.error(`   - Indentation: Use spaces, not tabs`);
        console.error(`   - Check line 5 in your MDX file for syntax issues`);
      }
    }
    
    // Return a fallback post instead of crashing
    console.error(`⚠️  Using fallback data for: ${filePath}`);
    return {
      metadata: {
        title: "Certificate (Error Loading)",
        publishedAt: "2024-01-01",
        summary: "This certificate could not be loaded due to a syntax error. Please check the YAML front matter.",
        image: "",
        tag: "Error",
        verificationLink: "",
      },
      content: `## Certificate Loading Error

This certificate file has a syntax error in its front matter. Please check the YAML syntax at the top of the file.

**Common issues:**
- Invalid date format (use "YYYY-MM-DD")
- Quote conflicts in text
- Incorrect indentation

**File:** ${filePath}`,
      slug: path.basename(filePath, path.extname(filePath)),
    };
  }
}

function getMDXData(postsDirectory: string[]): Post[] {
  const postsDirectoryPath = path.join(process.cwd(), ...postsDirectory);
  
  try {
    const filenames = fs.readdirSync(postsDirectoryPath);
    const posts = filenames
      .filter((name) => name.endsWith(".mdx"))
      .map((name) => {
        const filePath = path.join(postsDirectoryPath, name);
        return readMDXFile(filePath);
      })
      .filter((post) => post.metadata.title) // Filter out fallback posts
      .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());
    
    return posts;
  } catch (error) {
    console.error(`❌ Error reading directory: ${postsDirectoryPath}`);
    console.error(`📝 Error details:`, error);
    return [];
  }
}

export function getPosts(postsDirectory: string[]): Post[] {
  return getMDXData(postsDirectory);
}
