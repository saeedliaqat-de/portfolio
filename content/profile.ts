export type TimelineEntry = {
  title: string;
  organization: string;
  period: string;
  detail: string;
  highlights?: readonly string[];
  distinction?: string;
  coursework?: { label: string; items: readonly string[] };
  link?: { href: string; label: string };
};

export const neuroBytInternship = {
  title: "Web & AI Solutions Intern",
  period: "2 June–1 August 2025",
  projectSlug: "session-documentation",
} as const;

export const profile = {
  name: "Muhammad Saeed Liaqat",
  shortName: "Saeed Liaqat",
  location: "Cottbus, Germany",
  university: "BTU Cottbus–Senftenberg",
  email: "saeedliaqat811@gmail.com",
  github: "https://github.com/Saeedliaqa",
  linkedin: "https://www.linkedin.com/in/muhammad-saeed-liaqat-/",
  introduction: [
    "I’m a Computer Science graduate and web developer with experience building and deploying web applications, integrating APIs, and implementing backend authentication. My problem-solving background includes first place in my university’s speed programming competition.",
    "Currently pursuing a master’s in Transformation Studies at BTU Cottbus–Senftenberg, I explore how technology, people, and organizations interact. I’m interested in extending my software development foundation into data analytics, business intelligence, and process improvement.",
    "I’m seeking Werkstudent and part-time opportunities in Germany, bringing practical development experience and a willingness to build further expertise.",
  ],
  motivation: {
    origin: "In my computer science degree, I learned how to build software through courses like software engineering and AI. Human–computer interaction and economics made me ask a different question: what does it take for a tool to fit the way people actually work?",
    btu: "I chose the Sociotechnical Transformation track at BTU because I want to understand how organisations introduce new technology and help the people affected by it. Studying in Lusatia gives me a chance to see that kind of change up close, as the region moves beyond coal and develops new industries and jobs.",
    goals: "Long term, I’d like to work in transformation consulting and help teams plan changes that their developers and users can work through together.",
  },
  languages: [
    {
      name: "German",
      level: "B1 · Intermediate",
      progress: "Currently working towards B2.",
      detail: "Developing my confidence in everyday conversations and expanding my vocabulary for study and work.",
    },
    {
      name: "English",
      level: "C2 · Proficient/near native",
      assessment: "self-assessed",
      ielts: { overall: "8.0/9 overall", year: "2025", subscores: "Speaking: 8.0 · Listening: 9.0" },
      detail: "My main language for academic study, technical learning and professional communication.",
    },
    { name: "Urdu", level: "Native", detail: "My first & mother language and an important part of my cultural identity." },
  ],
} as const;

export const education = [
  {
    title: "Master’s in Transformation Studies",
    organization: profile.university,
    period: "Oct 2026 – Present",
    detail: "Sociotechnical Transformation track, with a focus on digital transformation and how organisations support the people who use new technology.",
    coursework: {
      label: "Selected modules",
      items: [
        "AI-Assisted Statistics: Exploring Data with ChatGPT & Co",
        "Optimization in Business Transformation",
        "Causal Data Science",
      ],
    },
  },
  {
    title: "BS in Computer Science",
    organization: "Mirpur University of Science and Technology",
    period: "Oct 2021 – Jul 2025",
    distinction: "Class rank: 12th of 56 (top 25%) · Final-year project grade: 95%",
    detail: "Focused on software development and artificial intelligence. For my final-year project, I worked with a teammate on Learnify, an AI quiz application recognised by the department as Best Project.",
    coursework: {
      label: "Selected coursework",
      items: [
        "Software Engineering",
        "Database Systems",
        "Data Structures and Algorithms",
        "Statistics and Probability",
        "Data Mining",
        "Introduction to Python Programming",
        "Human Computer Interaction",
      ],
    },
  },
] satisfies TimelineEntry[];

export const experience = [
  {
    title: "Software Developer",
    organization: "GLOBAQ · Al-Khobar, Saudi Arabia (remote)",
    period: "15 Aug 2025 – 30 Aug 2026",
    detail: "I designed, built and deployed GLOBAQ’s responsive React website, spanning 40+ pages for its audit, training, consultancy and laboratory services. I worked directly with the client as the project expanded to address search discoverability and enquiry management.",
    highlights: [
      "Translated changing client requirements into updates to page content, responsive navigation and the enquiry workflow.",
      "Prerendered service routes with Puppeteer to serve page-specific HTML, and managed metadata, canonical URLs and the sitemap for technical SEO.",
      "Built a contact form and a separate WhatsApp contact option. Connected form submissions to Google Sheets so staff could review and follow up on enquiries from one place.",
      "Managed hosting, DNS and deployment using Namecheap and cPanel. After launch, I maintained the site and automated routine email and client communications.",
    ],
    link: { href: "/projects/globaq", label: "Read the GLOBAQ case study" },
  },
  {
    title: neuroBytInternship.title,
    organization: "NeuroByt · Mirpur, AJK",
    period: neuroBytInternship.period,
    detail: "During my nine-week internship at NeuroByt, I worked alongside senior developers and built responsive React components for AI-powered features. I connected those components to OpenAI, Gemini and other external APIs.",
    distinction: "My internship certificate recognises software engineering, AI integration, data processing and structured data management.",
    highlights: [
      "Contributed frontend components and API integrations to a client project that automated transcription and note preparation from session recordings.",
      "Working with the full-stack team gave me practical experience with how recordings are processed, how authentication controls access, and how transcripts and notes are stored for later retrieval.",
      "The team’s workflow let users upload a recording and receive both a transcript and notes. It saved the client 20+ hours of manual documentation per week.",
    ],
    link: { href: `/projects/${neuroBytInternship.projectSlug}`, label: "Read the session documentation case study" },
  },
] satisfies TimelineEntry[];

export const volunteering = [
  {
    title: "Fundraiser",
    organization: "The Paradigm Association",
    period: "Jul 2026",
    detail: "Helped raise PKR 30,000 for families in AJK during protests and an internet blackout.",
  },
  {
    title: "Technical Assistant",
    organization: "The Paradigm Association",
    period: "Sep – Dec 2023",
    detail: "Helped set up the organisation’s website and social media presence.",
  },
] satisfies TimelineEntry[];

export const hobbies = [
  { name: "Football", image: "football", note: "Football has been my favourite sport since childhood. Beyond the excitement of playing, it has taught me the value of teamwork, communication and working towards a shared goal.", alt: "Outdoor football pitch and goal" },
  { name: "Swimming", image: "swimming", note: "I especially enjoy swimming during Pakistan’s hot summers. It’s a refreshing way to cool down, unwind and stay active.", alt: "Indoor swimming pool" },
  { name: "Cricket", image: "cricket", note: "As a Pakistani, cricket holds a special place in my heart. I enjoy its combination of strategy, patience and teamwork, along with the shared excitement that brings people together.", alt: "Floodlit cricket pitch at night" },
  { name: "Table tennis", image: "table-tennis", note: "Table tennis is a great indoor option that combines speed, precision and quick thinking. I enjoy the challenge of staying focused and adapting with every rally.", alt: "Paddle on a blue table tennis table" },
  { name: "Reading", image: "reading", note: "Reading feeds my curiosity and broadens my perspective. Books such as *Justuju Ka Safar*, *How to Stop Worrying and Start Living* and *Eat That Frog!* have shaped my outlook and approach to personal growth.", alt: "Books beside a laptop on a desk" },
  { name: "Traveling", image: "traveling", note: "I enjoy exploring new places and seeing how people live in different parts of the world.", alt: "A red train on the Bernina Railway in the Swiss Alps" },
  { name: "Badminton", image: "badminton", note: "I enjoy badminton for its quick rallies and the way good footwork and shot placement can turn a point around.", alt: "A white shuttlecock resting on a badminton racket" },
] as const;
