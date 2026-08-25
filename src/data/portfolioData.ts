import { RoomMeta, ProjectItem, EducationItem, SkillCategory, AchievementItem, ExperienceItem, ResearchTopic } from '../types';

export const PERSONAL_INFO = {
  name: "Abdullah Al Sakib",
  title: "Full-Stack Developer · AI Enthusiast · CSE Student",
  role: "Full-Stack Developer & AI Enthusiast",
  tagline: "Building ideas into reality, one line of code at a time.",
  shortBio: "Final-semester Computer Science & Engineering undergraduate at International Islamic University Chittagong. I build full-stack web applications and AI-integrated systems, dedicated to shipping practical, reliable software.",
  emailPrimary: "deltaframex@gmail.com",
  emailSecondary: "sakibmohammad9991@gmail.com",
  phone: "01967773981",
  location: "Kalamia Bazar, Chittagong, Bangladesh",
  university: "International Islamic University Chittagong",
  program: "B.Sc. in Computer Science & Engineering",
  semester: "8th Semester — Final Semester",
  cgpa: "Above 3.00",
  socials: [
    { name: "GitHub", url: "https://github.com/", label: "github.com/sakib", username: "@sakib-dev" },
    { name: "Kaggle", url: "https://kaggle.com/", label: "kaggle.com/sakib", username: "sakib_ai" },
    { name: "LinkedIn / X", url: "https://x.com/", label: "twitter.com/sakib", username: "@sakib_builds" },
    { name: "Facebook", url: "https://facebook.com/", label: "facebook.com/sakib", username: "Sakib.Abdullah" },
    { name: "Instagram", url: "https://instagram.com/", label: "instagram.com/sakib", username: "@sakib.lens" },
  ]
};

export const BIOGRAPHY = {
  summary: "I am a Full-Stack Developer, AI Enthusiast, and final-year Computer Science & Engineering undergraduate at International Islamic University Chittagong (IIUC).",
  academic: "Currently in my 8th semester maintaining a CGPA above 3.00, I bridge core theoretical computing with pragmatic full-stack web engineering and modern AI model integrations.",
  philosophy: "Building ideas into reality, one line of code at a time — crafting reliable systems that solve real-world problems with architectural discipline."
};

export const CURRENT_STATUS = {
  university: "International Islamic University Chittagong",
  department: "Computer Science & Engineering",
  semester: "8th Semester (Final Year)",
  cgpa: "Above 3.00",
};

export interface HouseRoom {
  id: any;
  name: string;
  theme: string;
  description: string;
}

export const HOUSE_ROOMS: HouseRoom[] = [
  { id: 'living_room', name: 'Living Room', theme: 'About Me', description: 'Personal biography, developer dossier, and architectural philosophy.' },
  { id: 'tech_room', name: 'Tech Room', theme: 'Skills', description: 'Languages, frameworks, database architectures, and AI workflows.' },
  { id: 'laboratory', name: 'Development Lab', theme: 'Projects', description: 'Interactive workstations showcasing production systems.' },
  { id: 'library', name: 'Library', theme: 'Education', description: 'Academic ledger and chronological educational journey.' },
  { id: 'trophy_room', name: 'Gallery', theme: 'Achievements', description: 'Museum wall displaying academic distinction and honors.' },
  { id: 'office', name: 'Office', theme: 'Experience', description: 'Workspaces detailing part-time roles, team projects, and research.' },
  { id: 'research_lab', name: 'Research Lab', theme: 'AI & Research', description: 'Hand-drawn neural diagrams, RAG pipelines, and generative AI.' },
  { id: 'secret_room', name: 'Secret Attic', theme: 'Where I’m Going', description: 'A hidden observatory looking out at future horizons.' },
  { id: 'exit_room', name: 'Post Office', theme: 'Contact', description: 'Mail desk and dispatch terminal to connect directly.' },
];

export const ROOMS_CONFIG: RoomMeta[] = [
  {
    id: 'living_room',
    number: '01',
    name: 'Living Room',
    subtitle: 'Identity & Philosophy',
    iconName: 'Home',
    themeColor: 'from-sky-500 to-blue-600',
    accentBg: 'rgba(56, 189, 248, 0.12)',
    atmosphere: 'warm_ambient',
    description: 'The foyer of my identity — who I am, my philosophy, and the path from student to builder.',
    locationLabel: 'Ground Floor · Central Foyer'
  },
  {
    id: 'tech_room',
    number: '02',
    name: 'Tech Room',
    subtitle: 'Languages & Architecture',
    iconName: 'Terminal',
    themeColor: 'from-cyan-400 to-teal-500',
    accentBg: 'rgba(45, 212, 191, 0.12)',
    atmosphere: 'cyan_tech',
    description: 'The interactive engine room — stacks, languages, frameworks, and database architectures.',
    locationLabel: 'West Wing · Dev Console'
  },
  {
    id: 'laboratory',
    number: '03',
    name: 'Laboratory',
    subtitle: 'Featured Projects & Systems',
    iconName: 'FlaskConical',
    themeColor: 'from-blue-500 to-indigo-600',
    accentBg: 'rgba(99, 102, 241, 0.12)',
    atmosphere: 'amber_lab',
    description: 'The experimental workshop — flagship real-world applications engineered from idea to deployment.',
    locationLabel: 'North Wing · Product Workshop'
  },
  {
    id: 'library',
    number: '04',
    name: 'Library',
    subtitle: 'Academic Roots & Timeline',
    iconName: 'BookOpen',
    themeColor: 'from-emerald-400 to-teal-600',
    accentBg: 'rgba(52, 211, 153, 0.12)',
    atmosphere: 'emerald_study',
    description: 'The academic archive — tracking my continuous educational journey from foundational schooling to CSE graduation.',
    locationLabel: 'East Wing · Academic Archives'
  },
  {
    id: 'trophy_room',
    number: '05',
    name: 'Trophy Room',
    subtitle: 'Milestones & Honors',
    iconName: 'Award',
    themeColor: 'from-amber-400 to-yellow-600',
    accentBg: 'rgba(251, 191, 36, 0.12)',
    atmosphere: 'gold_gallery',
    description: 'The gallery of discipline — consistent top-tier examination results and university milestones.',
    locationLabel: 'Second Floor · Grand Hall'
  },
  {
    id: 'office',
    number: '06',
    name: 'Office',
    subtitle: 'Experience & Collaboration',
    iconName: 'Briefcase',
    themeColor: 'from-slate-400 to-zinc-500',
    accentBg: 'rgba(148, 163, 184, 0.12)',
    atmosphere: 'slate_office',
    description: 'The workspace — part-time roles, academic research assistantships, and collaborative team builds.',
    locationLabel: 'Second Floor · Executive Desk'
  },
  {
    id: 'research_lab',
    number: '07',
    name: 'Research Lab',
    subtitle: 'AI, RAG & Vector Intelligence',
    iconName: 'Cpu',
    themeColor: 'from-purple-400 to-pink-500',
    accentBg: 'rgba(192, 132, 252, 0.12)',
    atmosphere: 'violet_research',
    description: 'Where curiosity expands — exploring RAG architectures, Google Gemini API, neural embeddings, and literature AI.',
    locationLabel: 'Sub-Level · AI Nexus'
  },
  {
    id: 'secret_room',
    number: '08',
    name: 'Secret Room',
    subtitle: 'Vision & Where I\'m Going',
    iconName: 'Sparkles',
    themeColor: 'from-fuchsia-500 to-indigo-500',
    accentBg: 'rgba(217, 70, 239, 0.12)',
    atmosphere: 'mystic_secret',
    description: 'The hidden chamber — future horizons, long-term engineering ambitions, and uncharted ideas.',
    locationLabel: 'Observatory · Horizon Peak'
  },
  {
    id: 'exit_room',
    number: '09',
    name: 'Exit Room',
    subtitle: 'Let\'s Build Together',
    iconName: 'Send',
    themeColor: 'from-cyan-500 to-blue-500',
    accentBg: 'rgba(6, 182, 212, 0.12)',
    atmosphere: 'rose_exit',
    description: 'The departure threshold — direct communication channels to initiate ideas, collaborations, or engineering opportunities.',
    locationLabel: 'Portal Gate · Direct Connect'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'aetheric-intelligence',
    title: 'Aetheric Intelligence',
    tagline: 'AI Academic Research & Citation Acceleration Platform',
    type: 'Full-Stack AI Academic Research Platform',
    featured: true,
    liveUrl: 'https://atheric-intelligence.vercel.app/',
    techStack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Google GenAI SDK',
      'PostgreSQL',
      'pgvector',
      'Vercel Serverless'
    ],
    description: [
      'Engineered an AI-powered academic assistant tailored to accelerate literature reviews, research gap detection, and citation analysis using Google Gemini and RAG (Retrieval-Augmented Generation).',
      'Connected Semantic Scholar and Crossref APIs to automatically retrieve, verify, and format scholarly citations accurately across thousands of scientific publications.',
      'Implemented vector-based semantic document retrieval with hybrid PostgreSQL/pgvector and serverless-resilient fallback storage.',
      'Integrated automated document generators to export formatted drafts and bibliographies directly into DOCX and PDF formats.'
    ],
    keyHighlights: [
      'Semantic Scholar & Crossref live API pipeline for instant paper indexing',
      'pgvector semantic embeddings with similarity threshold clustering',
      'Real-time literature gap synthesis powered by Google Gemini',
      'Direct client-side and server-assisted DOCX & PDF document compilation'
    ],
    architectureDiagram: [
      'Client (React 19 / Vite / Tailwind UI)',
      'Serverless Proxy Layer (Express / Node.js API)',
      'AI Engine (Google GenAI SDK / Gemini Model)',
      'Knowledge Store (PostgreSQL + pgvector Vector Storage)',
      'Scholarly Ingestion (Crossref + Semantic Scholar APIs)'
    ],
    badge: 'Featured AI Research Platform'
  },
  {
    id: 'aysha-tower-arena',
    title: 'Aysha Tower Arena',
    tagline: 'Real-Time Esports Hub & Home League Analytics',
    type: 'Full-Stack Real-Time Esports Tournament Hub',
    featured: false,
    liveUrl: 'https://ayshatowerarena.netlify.app/',
    techStack: [
      'React 19',
      'TypeScript',
      'Supabase',
      'WebSockets',
      'PostgreSQL',
      'Tailwind CSS'
    ],
    description: [
      'Architected a full-stack real-time esports tournament hub designed specifically for EA FC 25 competitive home leagues.',
      'Implemented real-time live score tracking and match state propagation using WebSockets.',
      'Engineered automated leaderboard calculations, points distribution, and goal differential algorithms.',
      'Built an interactive club lottery wheel, a 21-man squad builder, and historical Head-to-Head player analytics across multiple tournament formats.'
    ],
    keyHighlights: [
      'Sub-100ms WebSocket live scoreboard synchronization',
      'Dynamic 21-man squad drafting & interactive club lottery wheel',
      'Automated tie-breaker calculations & head-to-head performance matrix',
      'Multi-bracket tournament orchestration engine (Knockout & League)'
    ],
    badge: 'Real-Time Esports Engine'
  },
  {
    id: 'personal-habit-tracker',
    title: 'Personal Habit Tracker',
    tagline: 'Progressive Web App with Offline-First Data Sync Engine',
    type: 'Full-Stack Web Application / Progressive Web App (PWA)',
    featured: false,
    liveUrl: 'https://skb-daily-chronicle.netlify.app/',
    techStack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Firebase Firestore'
    ],
    description: [
      'Designed and built a mobile-responsive Progressive Web App using React 19, TypeScript, Tailwind CSS, and Firebase Firestore.',
      'Engineered a real-time data synchronization engine to merge offline local records with cloud storage seamlessly across mobile and desktop devices.',
      'Implemented custom HTML5 Canvas data visualizations for visual progress heatmaps and trend graphs.',
      'Built background-safe timers, automated CSV data exports, iPhone notch safe-area UI adaptations, and graceful offline fallback handling.'
    ],
    keyHighlights: [
      'Offline-first synchronization with automated cloud reconciliation',
      'Custom HTML5 Canvas streak heatmaps and visual analytics',
      'PWA installation manifest with iOS notch safe-area padding',
      'Automated full-data CSV export and backup integrity verification'
    ],
    badge: 'Offline-First PWA'
  }
];

export const FEATURED_PROJECTS = PROJECTS_DATA.map(p => ({
  ...p,
  tech: p.techStack,
  fullDescription: p.description,
  highlights: p.keyHighlights
}));

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-iiuc',
    exam: 'B.Sc. in Computer Science & Engineering',
    grade: 'CGPA Above 3.00 (In Progress)',
    institution: 'International Islamic University Chittagong (IIUC)',
    status: '8th Semester — Final Semester',
    isCurrent: true,
    yearHint: 'Current',
    description: 'Focusing on software engineering principles, distributed architectures, algorithms, data structures, and applied AI applications.'
  },
  {
    id: 'edu-hsc',
    exam: 'Higher Secondary Certificate (HSC)',
    grade: 'GPA 5.00 (A+)',
    institution: 'Hazera Taju Degree College',
    status: 'Completed with Highest Distinction',
    isCurrent: false,
    yearHint: 'Science Group',
    description: 'Concentration in Higher Mathematics, Physics, Chemistry, and Information & Communication Technology.'
  },
  {
    id: 'edu-ssc',
    exam: 'Secondary School Certificate (SSC)',
    grade: 'GPA 5.00 (A+)',
    institution: "Nasirabad Government Boys' High School",
    status: 'Completed with Distinction',
    isCurrent: false,
    yearHint: 'Science Group',
    description: 'Foundational secondary science curriculum with intensive focus on analytical reasoning and basic programming.'
  },
  {
    id: 'edu-jsc',
    exam: 'Junior School Certificate (JSC)',
    grade: 'GPA 5.00 (A+)',
    institution: "Nasirabad Government Boys' High School",
    status: 'Completed with Highest Distinction',
    isCurrent: false,
    yearHint: 'National Board',
    description: 'Academic excellence and top-tier standing in regional board examinations.'
  },
  {
    id: 'edu-psc',
    exam: 'Primary School Certificate (PSC)',
    grade: 'GPA 5.00 (A+)',
    institution: "Saint Mary's School",
    status: 'Completed with Highest Distinction',
    isCurrent: false,
    yearHint: 'Primary Stage',
    description: 'Early foundational education with consistent top-of-class academic performance.'
  }
];

export const EDUCATION_TIMELINE = EDUCATION_DATA.map(e => ({
  degree: e.exam,
  score: e.grade,
  institution: e.institution,
  year: e.yearHint || 'Verified'
}));

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'C', description: 'Low-level memory management, pointers, and algorithmic foundations', highlight: false },
      { name: 'C++', description: 'Object-oriented programming, standard template library (STL), algorithmic problem solving', highlight: true },
      { name: 'Python', description: 'Data scripting, ML tooling, AI API integrations, automation', highlight: true },
      { name: 'Java', description: 'Core OOP, multithreading paradigms, software design patterns', highlight: false },
      { name: 'JavaScript', description: 'Modern ES6+, asynchronous event loops, DOM manipulation', highlight: true }
    ]
  },
  {
    category: 'Frontend Engineering',
    icon: 'Layout',
    skills: [
      { name: 'React (v19)', description: 'Component lifecycles, custom hooks, state optimization, concurrent features', highlight: true },
      { name: 'Tailwind CSS', description: 'Design systems, responsive utilities, custom tokens, rapid UI assembly', highlight: true },
      { name: 'TypeScript', description: 'Static type contracts, generics, interface modeling, safer refactoring', highlight: true }
    ]
  },
  {
    category: 'Backend & Systems',
    icon: 'Server',
    skills: [
      { name: 'Node.js', description: 'Non-blocking I/O, REST APIs, middleware architectures, serverless runtimes', highlight: true },
      { name: 'Express', description: 'Routing pipelines, authentication middleware, API gateways', highlight: true },
      { name: 'Django', description: 'Python web framework, ORM modeling, admin scaffolds, robust backend services', highlight: false }
    ]
  },
  {
    category: 'Databases & Vector Storage',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', description: 'Relational schema design, complex joins, indexing, query optimization', highlight: true },
      { name: 'pgvector', description: 'Vector embeddings storage, similarity distance queries for RAG pipelines', highlight: true },
      { name: 'MongoDB', description: 'Document-based NoSQL schemas, aggregation pipelines', highlight: false },
      { name: 'MySQL', description: 'Relational data modeling, transactional ACID integrity', highlight: false },
      { name: 'Firestore', description: 'Real-time document sync, offline-first client storage, rule enforcement', highlight: true }
    ]
  },
  {
    category: 'AI / Machine Learning & RAG',
    icon: 'Sparkles',
    skills: [
      { name: 'Google Gemini API', description: 'Multimodal prompting, structured JSON schema generation, function calling', highlight: true },
      { name: 'Google GenAI SDK', description: 'Official TypeScript/Python SDK integration, streaming token outputs', highlight: true },
      { name: 'OpenAI API', description: 'Prompt engineering, text embeddings, GPT integrations', highlight: false },
      { name: 'RAG Architecture', description: 'Chunking strategies, hybrid retrieval, context injection, hallucination reduction', highlight: true },
      { name: 'Machine Learning Basics', description: 'Supervised learning concepts, evaluation metrics, feature preparation', highlight: false }
    ]
  },
  {
    category: 'Development Tools & Workflow',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', description: 'Branch workflows, version control, PR reviews, CI/CD pipelines', highlight: true },
      { name: 'VS Code', description: 'Custom debugging configurations, extensions ecosystem, linting setups', highlight: false },
      { name: 'Vercel & Netlify', description: 'Serverless deployments, environment secrets, edge routing', highlight: false }
    ]
  }
];

export const SKILL_CATEGORIES = SKILLS_DATA.map(c => ({
  category: c.category,
  skills: c.skills.map(s => ({
    name: s.name,
    level: s.highlight ? 'Core' : 'Proficient',
    description: s.description
  }))
}));

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-iiuc',
    title: 'Final-Semester CSE Candidate with > 3.00 CGPA',
    institution: 'International Islamic University Chittagong',
    grade: 'CGPA > 3.00',
    badge: 'Undergraduate Excellence',
    category: 'university',
    note: 'Sustained solid academic record across 8 rigorous semesters of computer science coursework and labs.'
  },
  {
    id: 'ach-hsc',
    title: 'HSC Examination — Golden / Highest Distinction',
    institution: 'Hazera Taju Degree College',
    grade: 'A+ (GPA 5.00)',
    badge: 'National Board Top Tier',
    category: 'academic',
    note: 'Conferred highest grade rating in the national science board examinations.'
  },
  {
    id: 'ach-ssc',
    title: 'SSC Examination — Distinction Standing',
    institution: "Nasirabad Government Boys' High School",
    grade: 'A (GPA 4.89)',
    badge: 'Premier Public Institution',
    category: 'academic',
    note: 'Graduated from one of the most competitive government high schools in the Chittagong division.'
  },
  {
    id: 'ach-jsc',
    title: 'JSC Examination — Perfect Grade',
    institution: "Nasirabad Government Boys' High School",
    grade: 'A+ (GPA 5.00)',
    badge: 'Board Excellence',
    category: 'academic',
    note: 'Earned maximum attainable GPA in junior school board examinations.'
  },
  {
    id: 'ach-psc',
    title: 'PSC Examination — Perfect Grade',
    institution: "Saint Mary's School",
    grade: 'A+ (GPA 5.00)',
    badge: 'Primary Distinction',
    category: 'academic',
    note: 'Graduated top of cohort in foundational primary schooling.'
  }
];

export const ACHIEVEMENTS = ACHIEVEMENTS_DATA.map(a => ({
  id: a.id,
  title: a.title,
  issuer: a.institution,
  date: a.grade,
  category: a.category,
  description: a.note
}));

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Part-Time Developer / Technical Contributor',
    organization: 'Self-Initiated & Client Deliverables (Placeholder)',
    type: 'Part-time',
    period: '2023 — Present',
    isPlaceholder: true,
    description: [
      'Developed and maintained custom responsive web solutions using React, Node.js, and modern CSS tooling.',
      'Designed API integrations and structured database schemas to fulfill real-world client requirements.',
      'Refined software reliability through iterative testing and performance optimization.'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'exp-2',
    role: 'Undergraduate Research Assistant (AI & Systems)',
    organization: 'IIUC Academic Projects & Department Collaborations (Placeholder)',
    type: 'Research Assistant',
    period: '2024 — Present',
    isPlaceholder: true,
    description: [
      'Investigated semantic search mechanisms and document retrieval efficiency using embeddings and pgvector.',
      'Assisted in benchmarking LLM prompt outputs and structuring bibliographic metadata retrieval pipelines.',
      'Authored modular scripts for data ingestion and academic paper evaluation datasets.'
    ],
    technologies: ['Python', 'Google Gemini API', 'pgvector', 'Crossref / Semantic Scholar APIs']
  },
  {
    id: 'exp-3',
    role: 'Team Lead / Full-Stack Project Engineer',
    organization: 'University Capstone & Collaborative Team Projects',
    type: 'Team Project',
    period: '2023 — 2024',
    isPlaceholder: false,
    description: [
      'Led the architecture and development of multiple full-stack applications with multi-member student teams.',
      'Coordinated Git branch workflows, pull request reviews, and database schema migrations.',
      'Successfully delivered production-ready deployments on Vercel, Netlify, and Firebase.'
    ],
    technologies: ['React 19', 'Supabase', 'WebSockets', 'Firebase', 'Express']
  }
];

export const EXPERIENCE_RECORDS = EXPERIENCE_DATA.map(e => ({
  id: e.id,
  role: e.role,
  company: e.organization,
  type: e.type,
  period: e.period,
  description: e.description.join(' '),
  deliverables: e.description
}));

export const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    id: 'res-rag',
    title: 'Retrieval-Augmented Generation (RAG)',
    focus: 'Dynamic Grounding & Precision Knowledge Injection',
    description: 'Investigating hybrid retrieval strategies combining lexical search with dense vector representations (pgvector) to minimize LLM hallucinations in scientific contexts.',
    tags: ['Vector Databases', 'Semantic Search', 'Context Windows', 'pgvector'],
    icon: 'DatabaseZap'
  },
  {
    id: 'res-genai',
    title: 'Generative AI & Multimodal Workflows',
    focus: 'Agentic Architectures & Tool Use',
    description: 'Developing deterministic tool-calling workflows and structured JSON pipelines using Google GenAI SDK & Gemini models.',
    tags: ['Google Gemini API', 'Function Calling', 'Structured Outputs', 'GenAI SDK'],
    icon: 'Sparkles'
  },
  {
    id: 'res-literature',
    title: 'Academic Literature Mining & Citation Graphing',
    focus: 'Scholarly Knowledge Graph Extraction',
    description: 'Automating the extraction, deduplication, and verification of scientific citations from Semantic Scholar and Crossref.',
    tags: ['Crossref API', 'Semantic Scholar', 'Citation Graph', 'BibTeX/DOCX'],
    icon: 'BookOpen'
  },
  {
    id: 'res-offline-first',
    title: 'Offline-First Web Architecture',
    focus: 'Distributed Client State & Sync Engines',
    description: 'Designing optimistic client-side mutation algorithms that gracefully reconcile intermittent network states with cloud databases.',
    tags: ['Progressive Web Apps', 'IndexedDB', 'Firestore Sync', 'Service Workers'],
    icon: 'Layers'
  }
];

export const RESEARCH_DOMAINS = RESEARCH_TOPICS.map(r => ({
  id: r.id,
  title: r.title,
  description: r.description,
  focusAreas: r.tags
}));
