import { neuroBytInternship } from "./profile";

export type ProjectMedia = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

type ProjectCategory =
  | "Software Development"
  | "Web Development"
  | "Applied AI"
  | "Digital Transformation"
  | "Business Process Automation"
  | "Data Processing"
  | "Digital Workflows";

export type TechnologyDetail = {
  label: string;
  description: string;
};

type ProjectBase = {
  slug: string;
  title: string;
  kind: string;
  period: string;
  summary: string;
  role: string;
  categories: readonly ProjectCategory[];
  stack: readonly string[];
  technicalDetails: readonly TechnologyDetail[];
  overview: string;
  challenge: string;
  outcome: string;
  links: readonly { href: string; label: string }[];
};

export type DevelopmentProject = ProjectBase & {
  type: "development";
  contribution: string;
  media: ProjectMedia;
  work: readonly string[];
  requirements?: string;
  solution: string;
  enquiryWorkflow?: {
    description: string;
    steps: readonly string[];
  };
  evidenceLinks?: ProjectBase["links"];
};

export type WorkflowProject = ProjectBase & {
  type: "workflow";
  context: string;
  challengePurpose: string;
  workflowChange: readonly string[];
  manualSteps: readonly string[];
  automatedSteps: readonly string[];
  supportingRole: readonly string[];
  learning: readonly string[];
  outcomeLabel: string;
};

export type Project = DevelopmentProject | WorkflowProject;

export const projects: readonly Project[] = [
  {
    type: "development",
    slug: "globaq",
    title: "GLOBAQ Website & Enquiry Automation",
    kind: "Client project",
    period: "15 Aug 2025 – 30 Aug 2026",
    summary: "A custom React site spanning 40+ pages, with dedicated service URLs and automated enquiry capture.",
    contribution: "I designed, built and deployed it for a Saudi quality assurance and ISO consultancy.",
    role: "Software Developer",
    categories: ["Software Development", "Web Development", "Business Process Automation"],
    stack: ["React", "Tailwind CSS", "Vite", "Puppeteer", "Google Sheets"],
    technicalDetails: [
      { label: "Frontend", description: "React and Tailwind CSS for consistent, responsive service layouts." },
      { label: "Navigation", description: "React Router for service-specific URLs and navigation between pages." },
      { label: "Build and prerendering", description: "Vite to compile the application and Puppeteer to capture rendered pages as static HTML." },
      { label: "Technical SEO", description: "A shared component for titles, descriptions and canonical URLs, and a route list shared by the sitemap and prerender scripts." },
      { label: "Enquiry capture", description: "Google Apps Script to send contact form submissions to Google Sheets." },
      { label: "Deployment", description: "Namecheap and cPanel for domain setup, hosting and production deployment." },
    ],
    media: {
      src: "/images/globaq.webp",
      width: 1640,
      height: 904,
      alt: "GLOBAQ’s What We Do page with service navigation, ISO consultancy information and a WhatsApp button",
      caption: "GLOBAQ’s service overview, with navigation for audits, training and consultancy.",
    },
    overview:
      "GLOBAQ offers management system audits, training, ISO consultancy and laboratory services. Some visitors need to compare offerings, while others arrive looking for a specific course or audit. The site needed clear navigation for exploring related services and a direct way to enquire from individual service pages.",
    work: [
      "Designed and built responsive layouts, grouped related services, and gave individual offerings their own URLs.",
      "Built a contact form with required-field checks and submission feedback, alongside a separate WhatsApp contact option.",
      "Configured hosting and DNS, managed deployment using Namecheap and cPanel, and maintained the site after launch.",
    ],
    requirements:
      "I worked directly with the client to understand the business need behind each request and translate it into updates to the site. What began as a responsive service catalogue grew to address how prospects find individual offerings through search and how staff collect enquiries for follow-up. I added those capabilities to the existing React application while supporting the live site.",
    challenge:
      "Each service page needed to work as an entry point from search results or a shared link. The initial client-rendered site could return a common HTML shell on a direct request, leaving JavaScript to fill in the service content and metadata. I wanted each URL to serve its own content while keeping navigation within React.",
    solution:
      "I added a prerendering step after Vite compiled the app. Puppeteer loaded the configured routes and saved a separate HTML file for each page. This put service content and metadata in the initial response while React continued to handle navigation in the browser. I refined the page copy, titles and descriptions for individual services, set canonical URLs, and used one route list for prerendering and the sitemap.",
    enquiryWorkflow: {
      description: "I connected the contact form to Google Sheets through Google Apps Script. Form submissions go to a shared spreadsheet, giving staff a central record they can use to follow up with prospective clients and analyse enquiries over time.",
      steps: ["Website enquiry form", "Shared Google Sheet", "Ready for follow-up"],
    },
    outcome:
      "The live ISO Consultancy page serves its service content in the initial HTML. Follow its “Get a Free Consultation” link to see how a prospective client moves from a service page to the enquiry form.",
    links: [{ href: "https://globaqksa.com/", label: "Live website" }],
    evidenceLinks: [
      { href: "https://globaqksa.com/services/iso-consultancy", label: "ISO Consultancy service page" },
      { href: "https://globaqksa.com/ContactUs", label: "Enquiry form" },
    ],
  },
  {
    type: "development",
    slug: "learnify",
    title: "Learnify",
    kind: "Collaborative final-year project",
    period: "Jan – Aug 2025",
    summary: "A quiz app that generates practice questions from a topic and difficulty level.",
    contribution: "I focused on the Node.js and PostgreSQL backend, including registration, authentication and password hashing.",
    role: "Backend contributor",
    categories: ["Software Development", "Applied AI"],
    stack: ["Node.js", "PostgreSQL", "Gemini API"],
    technicalDetails: [
      { label: "My backend work", description: "I used Node.js and PostgreSQL for account registration, sign-in, and persistent user storage, with password hashing before saving credentials." },
      { label: "Team’s quiz flow", description: "The application used the Gemini API to generate questions based on the learner’s chosen topic and difficulty." },
    ],
    media: {
      src: "/images/learnify.webp",
      width: 1640,
      height: 810,
      alt: "Learnify’s landing page with sign-up and login controls above an introduction to AI-generated quizzes",
      caption: "Learnify’s landing page, where learners can sign up, log in or explore the quiz demo.",
    },
    overview:
      "My teammate and I built Learnify as our computer science final-year project. A learner chooses a topic and difficulty, answers a quiz generated through the Gemini API, and can compare scores on a shared leaderboard.",
    work: [
      "Developed the project’s Node.js backend and integrated PostgreSQL for persistent storage.",
      "Implemented account registration and authentication, including password hashing.",
      "Worked on the backend of a shared project that also included a separate frontend and AI-generated quiz flow.",
    ],
    challenge:
      "Learners needed an account that would persist across quiz sessions, with passwords stored securely.",
    solution:
      "I implemented registration and sign-in in Node.js, used PostgreSQL to store account data, and hashed passwords before storing them.",
    outcome:
      "The public repository contains both the backend and frontend. Its README documents how learners sign in, generate a quiz and compare their scores on the leaderboard. Learnify received Best Project recognition as a team.",
    links: [{ href: "https://github.com/Saeedliaqa/learnify", label: "GitHub source" }],
  },
  {
    type: "workflow",
    slug: neuroBytInternship.projectSlug,
    title: "AI-Enabled Transformation of Session Documentation",
    kind: "NeuroByt internship project",
    period: neuroBytInternship.period,
    role: neuroBytInternship.title,
    context: "Client project completed with the senior development team during my internship at NeuroByt.",
    summary: "Supported a senior team in transforming manual session documentation into an AI-powered transcription and note-generation workflow. Gained practical experience in business-process digitalization through a solution that saved the client 20+ hours of manual work per week.",
    categories: ["Digital Transformation", "Business Process Automation", "Applied AI", "Data Processing", "Digital Workflows"],
    stack: ["React", "FastAPI", "SQLAlchemy"],
    overview:
      "During my internship at NeuroByt, I worked alongside senior developers on an application that automated transcription and note generation from recorded client sessions. The project combined AI processing, a web interface, authentication, and persistent storage within one workflow.",
    challenge:
      "The client relied on a person listening to psychological session recordings and manually preparing notes. This repetitive documentation process consumed substantial staff time.",
    challengePurpose:
      "The project addressed a concrete operational need: automating transcription and note preparation through an accessible digital workflow.",
    workflowChange: [
      "The team developed an application where users could upload recordings and receive AI-generated transcripts and notes, with authenticated access and persistent storage.",
      "The business change was a shift from manually producing documentation to generating it through an integrated AI-powered process.",
    ],
    manualSteps: ["Recorded session", "Listen to recording", "Prepare notes manually"],
    automatedSteps: ["Upload recording", "Generate transcript and notes", "Save results for retrieval"],
    supportingRole: [
      "Worked alongside senior developers as an intern, contributing to frontend components and API integrations.",
      "Through this participation, I gained practical exposure to translating a client’s operational needs into application features and understanding how individual technical components support a broader business workflow.",
    ],
    learning: [
      "Identifying repetitive tasks that a digital workflow can simplify.",
      "Connecting business requirements with the technology that supports them.",
      "Understanding how AI integration, interfaces, and data management fit into one usable workflow.",
      "Seeing how reducing manual work creates business value.",
      "Learning from senior developers as they implemented the workflow.",
    ],
    outcomeLabel: "20+ hours saved weekly",
    outcome: "The team’s solution automated transcription and note preparation, saving the client 20+ hours of manual work per week.",
    technicalDetails: [
      { label: "Frontend", description: "React, Vite, and Tailwind CSS for the web interface." },
      { label: "Backend", description: "Python and FastAPI for the application’s APIs." },
      { label: "Processing", description: "Audio transcription and AI-assisted note generation." },
      { label: "LLM pipeline", description: "Automatic text chunking and context-aware prompting for lengthy transcripts." },
      { label: "Data management", description: "SQLAlchemy CRUD operations organised and stored sessions, prompts, and analysis results for retrieval." },
      { label: "Authentication", description: "OIDC and JWT for authenticated access." },
      { label: "Supported formats", description: "MP3, WAV, MP4, M4A, FLAC, and OGG." },
    ],
    links: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
