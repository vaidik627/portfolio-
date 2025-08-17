import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Vaidik",
  lastName: "Sharma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Ml Engineer, Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "vaidik627@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vaidik627",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "http://linkedin.com/in/vaidik-sharma-a5b629315",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming data into intelligent insights</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Vaidik, an ML Engineer and Data Scientist who transforms raw data into intelligent solutions.
      <br /> I specialize in machine learning, predictive analytics, and building AI-powered applications.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Vaidik is a passionate ML Engineer and Data Scientist based in Indore, with expertise in transforming complex data challenges into actionable insights. His work spans machine learning model development, data analysis, predictive analytics, and the intersection of artificial intelligence with real-world applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "IntrnForte",
        timeframe: "Jan 2025 - July 2025",
        role: "Trainee-Software Developer",

        achievements: [
          <>
            Actively seeking opportunities to leverage my skills in software development and competitive programming, 
            while contributing to tech-driven environments that emphasize clean code and structured problem-solving.
          </>,
          <>
            Passionate developer dedicated to crafting elegant solutions through innovative coding practices and algorithmic thinking.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Chain Optimization",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-010.jpg",
            alt: "Version-Controlled",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-010.jpg",
            alt: "Version-Controlled",
            width: 16,
            height: 9,
            style: {
              display: "block",
              marginLeft: "auto",
              marginRight: "auto", // Centers the image within its container
              width: "50%", // Optional: reduces width to fit better if needed
            }

          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Academic Background",
    institutions: [
      {
        name: "St. Paul Higher Secondary School",
        description: (
          <>
            Completed Class 10 with <strong>67%</strong> (CBSE) and Class 12 with <strong>63%</strong> (CBSE),
            building a strong academic foundation in science and mathematics.
          </>
        ),
      },
      {
        name: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
        description: (
          <>
            Pursuing <strong>B.Tech in Computer Science</strong>, currently in the <strong>7th semester</strong> 
            with an impressive <strong>CGPA of 8.55</strong>, focusing on software development, data structures, and algorithms.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const achievement = {
  path: "/achievement",
  label: "Achievement",
  title: "Certificates & Achievements",
  description: `Technical certifications and achievements earned by ${person.name}`,
  // Create new achievement entries by adding a new .mdx file to app/achievement/certificates
  // All certificates will be listed on the /achievement route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name} for collaborations and inquiries`,
  headline: "Let's Connect",
  subline: "I'd love to collaborate or answer any queries. Drop me a message!",
  form: {
    title: "Send a Message",
    fields: {
      name: {
        label: "Name",
        placeholder: "Your name",
        required: true,
      },
      email: {
        label: "Email",
        placeholder: "your.email@example.com",
        required: true,
      },
      message: {
        label: "Message",
        placeholder: "Tell me about your project or inquiry...",
        required: true,
      },
    },
    submit: "Send Message",
  },
  info: {
    title: "Other Ways to Connect",
    email: person.email,
    phone: "+91 98765 43210", // You can update this with your actual phone number
    location: "Indore, India",
  },
};

export { person, social, newsletter, home, about, achievement, work, contact };
