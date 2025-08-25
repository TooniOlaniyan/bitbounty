import {
  FileText,
  Code,
  Mail,
  Twitter,
  Github,
  Linkedin,
  TrophyIcon,
  Shield,
  Clock,
  LayoutDashboard,
} from "lucide-react";

export const navItems = [
  {
    id: 1,
    label: "Challenges",
    path: "/challenges",
    icon: Code,
  },
  {
    id: 2,
    label: "Audit Log",
    path: "/audit-log",
    icon: FileText,
  },
  {
    id: 3,
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    requiresAuth: true,
  },
];

export const footerSections = [
  {
    title: "Platform",
    links: [
      {
        label: "Browse Challenges",
        action: () => {},
      },
      { label: "How It Works", action: () => {} },
      { label: "Success Stories", action: () => {} },
      { label: "Audit Log", action: () => {} },
    ],
  },
  {
    title: "For Developers",
    links: [
      { label: "Getting Started", action: () => {} },
      { label: "Submission Guide", action: () => {} },
      { label: "Best Practices", action: () => {} },
      {
        label: "Developer Hub",
        action: () => {},
      },
    ],
  },
  {
    title: "For Companies",
    links: [
      { label: "Post a Challenge", action: () => {} },
      { label: "Pricing", action: () => {} },
      { label: "Enterprise", action: () => {} },
      { label: "Company Portal", action: () => {} },
    ],
  },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/bitbounty", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/bitbounty", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/bitbounty",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:support@bitbounty.com", label: "Email" },
];

export const heroSectionData = [
  {
    title: "Showcase your skills",
    subtitle: " Land your next job",
    description:
      "Connect with companies, through practical coding challenges and technical assessments. Demonstrate your abilities with real-world problems. And get hired based on your performance.",
    buttons: [
      {
        label: "Browse Challenges",
        href: "/challenges",
      },
      {
        label: "Get Started",
        href: "/signup",
      },
      {
        label: "Post a Challenge",
        href: "/signup",
      },
    ],
  },
];

export const howItWorksData = [
  {
    icon: TrophyIcon,
    title: "Real Job Challenges",

    description:
      "Solve authentic coding tasks, data analysis problems, and blockchain puzzles posted by hiring companies.",
  },
  {
    icon: Shield,
    title: "Secure & Transparent",

    description:
      "All submissions verified with SHA-256 hashes and public audit logs for complete transparency in the hiring process",
  },
  {
    icon: Clock,
    title: "Time-Bound Assessment",

    description:
      "Complete challenges within set deadlines and track your submission status in real-time.",
  },
  {
    icon: Code,
    title: "GitHub Integration",

    description:
      "Submit your solutions directly via GitHub repositories with automatic verification and code review.",
  },
];

export const challengesData = [
  {
    id: "challenge1",
    title: "Build a React Dashboard for Analytics",
    company: "TechCorp",
    difficulty: "Medium",
    pay: "$2,500",
    dueDate: "15/09/2025",
    tags: ["React", "TypeScript", "Chart.js"],
    description:
      "Create a responsive React dashboard that displays data analytics with interactive charts and real-time data updates...",
    details: {
      deadline: "15/09/2025",
      timeRemaining: "18 days",
      submissions: 12,
      techStack: ["React", "TypeScript", "Chart.js"],
      fullDescription:
        "Create a comprehensive React dashboard for an analytics platform. The application should connect to a mock API or a real-time data source to display key metrics, interactive charts (using a library like Chart.js or D3), and a user-friendly interface. The design must be responsive and well-documented.",
      keyRequirements: [
        "Create a dashboard with multiple chart types (e.g., bar, line, pie)",
        "Implement real-time data updates using WebSockets or a similar technology",
        "Design a responsive UI for desktop and mobile devices",
        "Ensure the application is built with a strong component-based architecture",
      ],
      bonusPoints: [
        "Include filtering and sorting options for the data",
        "Implement user authentication and role-based access control",
        "Add a dark mode toggle",
      ],
      submissionRequirements: [
        "Github repository with clear README",
        "Live demo deployed on Vercel/Netlify",
        "Code must be clean and well-documented",
      ],
      evaluationCriteria: [
        { item: "Code quality and architecture", weight: "30%" },
        { item: "User experience and design", weight: "25%" },
        { item: "Feature completeness", weight: "25%" },
        { item: "Innovation and bonus features", weight: "20%" },
      ],
    },
  },
  {
    id: "challenge2",
    title: "Smart Contract Security Audit",
    company: "BlockchainVault",
    difficulty: "Hard",
    pay: "$4,000",
    dueDate: "10/09/2025",
    tags: ["Solidity", "Security", "Blockchain"],
    description:
      "Identify vulnerabilities in a Solidity smart contract and provide detailed security recommendations and fixes.",
    details: {
      deadline: "10/09/2025",
      timeRemaining: "14 days",
      submissions: 5,
      techStack: ["Solidity", "Security", "Blockchain", "Truffle/Hardhat"],
      fullDescription:
        "You are tasked with conducting a thorough security audit of a provided Solidity smart contract. Your goal is to identify common vulnerabilities such as reentrancy, integer overflow, access control issues, and gas optimizations. You must provide a detailed report outlining each vulnerability, its potential impact, and a proposed solution.",
      keyRequirements: [
        "Perform static and dynamic analysis of the smart contract code",
        "Write a comprehensive report detailing all vulnerabilities and recommendations",
        "Provide corrected code snippets demonstrating the fixes",
        "Test the fixes to ensure they do not introduce new bugs",
      ],
      bonusPoints: [
        "Identify and fix subtle or complex logic bugs",
        "Provide a formal verification of critical functions",
        "Propose gas optimization improvements",
      ],
      submissionRequirements: [
        "Detailed security audit report (PDF)",
        "Github repository with the corrected contract code",
        "Video walkthrough explaining your findings (optional)",
      ],
      evaluationCriteria: [
        { item: "Thoroughness of the audit", weight: "40%" },
        { item: "Clarity of the report and recommendations", weight: "30%" },
        { item: "Effectiveness of the proposed fixes", weight: "30%" },
      ],
    },
  },
  {
    id: "challenge3",
    title: "Distributed Rate Limiter System",
    company: "ScaleFlow",
    difficulty: "Medium",
    pay: "$1,800",
    dueDate: "20/09/2025",
    tags: ["Node.js", "Redis", "Docker"],
    description:
      "Implement a distributed rate limiter using Redis that can handle high-throughput API requests efficiently.",
    details: {
      deadline: "20/09/2025",
      timeRemaining: "24 days",
      submissions: 8,
      techStack: ["Node.js", "Redis", "Docker"],
      fullDescription:
        "Build a distributed rate-limiting service that can be used to protect a set of microservices from excessive traffic. The system should use Redis to store request counts and timestamps and support multiple rate-limiting algorithms, such as the fixed-window or sliding-window algorithms. The solution should be packaged in a Docker container.",
      keyRequirements: [
        "Implement a distributed rate-limiting logic using Redis",
        "Support different rate limits per API endpoint or user",
        "Provide a simple API to check if a request is allowed",
        "Ensure the system is scalable and fault-tolerant",
      ],
      bonusPoints: [
        "Add Prometheus/Grafana integration for monitoring",
        "Implement a more advanced algorithm like Token Bucket",
        "Write comprehensive unit and integration tests",
      ],
      submissionRequirements: [
        "Github repository with source code and a Dockerfile",
        "Instructions on how to run and test the application",
        "A brief report on your design decisions",
      ],
      evaluationCriteria: [
        { item: "Correctness and efficiency of the algorithm", weight: "40%" },
        { item: "Code quality and architecture", weight: "30%" },
        { item: "Scalability and robustness of the solution", weight: "30%" },
      ],
    },
  },
  {
    id: "challenge4",
    title: "Data Analysis Pipeline",
    company: "DataInsights",
    difficulty: "Hard",
    pay: "$3,200",
    dueDate: "25/09/2025",
    tags: ["Python", "Pandas", "Matplotlib"],
    description:
      "Build a Python pipeline to process and analyze large datasets with statistical modeling and visualization.",
    details: {
      deadline: "25/09/2025",
      timeRemaining: "29 days",
      submissions: 3,
      techStack: ["Python", "Pandas", "Matplotlib", "Jupyter", "NumPy"],
      fullDescription:
        "Develop an end-to-end data analysis pipeline in Python. You will be provided with a raw dataset and must perform data cleaning, preprocessing, exploratory data analysis (EDA), and build a predictive model. The final output should include visualizations of your findings and a well-documented Jupyter notebook.",
      keyRequirements: [
        "Clean and preprocess a large, messy dataset",
        "Perform comprehensive exploratory data analysis (EDA)",
        "Build a machine learning model for a specific task (e.g., regression or classification)",
        "Create high-quality data visualizations using Matplotlib or Seaborn",
      ],
      bonusPoints: [
        "Use Dask or a similar library for distributed computing",
        "Containerize the solution using Docker",
        "Provide a simple web API to serve the model's predictions",
      ],
      submissionRequirements: [
        "Jupyter Notebook with all analysis steps",
        "Github repository with all source code and data",
        "A short report summarizing your findings and model performance",
      ],
      evaluationCriteria: [
        { item: "Methodology and accuracy of analysis", weight: "35%" },
        { item: "Quality of the code and documentation", weight: "30%" },
        { item: "Effectiveness of visualizations", weight: "25%" },
        { item: "Clarity of the final report", weight: "10%" },
      ],
    },
  },
  {
    id: "challenge5",
    title: "E-commerce API Development",
    company: "ShopTech",
    difficulty: "Medium",
    pay: "$2,800",
    dueDate: "18/09/2025",
    tags: ["Node.js", "Express", "MongoDB"],
    description:
      "Develop a RESTful API for an e-commerce platform with authentication, payment processing, and...",
    details: {
      deadline: "18/09/2025",
      timeRemaining: "22 days",
      submissions: 10,
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      fullDescription:
        "Create a robust RESTful API for a simple e-commerce application. The API should handle user authentication, product management (CRUD operations), a shopping cart, and mock payment processing. The database should be MongoDB, and authentication should be handled with JWTs.",
      keyRequirements: [
        "Implement a secure user authentication system with JWTs",
        "Create API endpoints for products, users, and orders",
        "Integrate a database (MongoDB) to persist data",
        "Implement a shopping cart and order processing logic",
      ],
      bonusPoints: [
        "Add a search and filtering functionality for products",
        "Write unit and integration tests for the API endpoints",
        "Implement role-based access control (e.g., admin vs. user)",
      ],
      submissionRequirements: [
        "Github repository with all source code",
        "Postman collection with API endpoints documented",
        "Instructions on how to set up and run the API locally",
      ],
      evaluationCriteria: [
        { item: "API design and RESTful principles", weight: "30%" },
        { item: "Security and authentication implementation", weight: "30%" },
        { item: "Code quality and organization", weight: "25%" },
        { item: "Completeness of features", weight: "15%" },
      ],
    },
  },
  {
    id: "challenge6",
    title: "Mobile-First Landing Page",
    company: "StartupLab",
    difficulty: "Easy",
    pay: "$1,200",
    dueDate: "12/09/2025",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "Create a mobile-first, responsive landing page with modern design principles and optimized performance.",
    details: {
      deadline: "12/09/2025",
      timeRemaining: "16 days",
      submissions: 15,
      techStack: ["HTML5", "CSS3", "JavaScript"],
      fullDescription:
        "Design and build a high-quality, mobile-first landing page for a new startup. The page should be fully responsive, visually appealing, and optimized for fast loading. You will be provided with design mockups to follow, and the use of a CSS preprocessor (like SASS) is a plus.",
      keyRequirements: [
        "Build a single-page layout that is fully responsive across all devices",
        "Use modern CSS features (e.g., Flexbox, Grid)",
        "Optimize images and assets for fast page loading",
        "Ensure the page is accessible (WCAG 2.1 guidelines)",
      ],
      bonusPoints: [
        "Implement a simple JavaScript animation or interactive element",
        "Use a CSS preprocessor like SASS",
        "Ensure the page achieves a high score on Lighthouse",
      ],
      submissionRequirements: [
        "Github repository with all source code (HTML, CSS, JS, images)",
        "Live demo deployed on GitHub Pages or Netlify",
        "Brief explanation of your design choices",
      ],
      evaluationCriteria: [
        { item: "Responsiveness and design fidelity", weight: "40%" },
        { item: "Code quality and organization", weight: "30%" },
        { item: "Performance and optimization", weight: "20%" },
        { item: "Adherence to accessibility standards", weight: "10%" },
      ],
    },
  },
];

export const auditLogData = [
  {
    id: "1",
    type: "Bounty Paid" as const,
    actor: "CryptoVault",
    actorType: "company" as const,
    description: "Bounty paid to Alice Chen for winning solution",
    challenge: "Challenge: Build a DeFi Portfolio Tracker",
    amount: "0.05 BTC",
    transactionHash:
      "a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456",
    status: "Verified",
    timestamp: "1d ago",
  },
  {
    id: "2",
    type: "Winner Selected" as const,
    actor: "CryptoVault",
    actorType: "company" as const,
    description:
      "Alice Chen selected as winner for comprehensive DeFi implementation",
    challenge: "Challenge: Build a DeFi Portfolio Tracker",
    timestamp: "2d ago",
  },
  {
    id: "3",
    type: "Solution Submitted" as const,
    actor: "David Kim",
    actorType: "developer" as const,
    description:
      "Submitted Redis-based rate limiter with distributed architecture",
    challenge: "Challenge: API Rate Limiter Implementation",
    timestamp: "2d ago",
  },
  {
    id: "4",
    type: "Bounty Paid" as const,
    actor: "TechCorp",
    actorType: "company" as const,
    description: "Bounty paid to Sarah Johnson for React dashboard solution",
    challenge: "Challenge: Build a React Dashboard for Analytics",
    amount: "$2,500",
    transactionHash:
      "b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef12345678",
    status: "Verified",
    timestamp: "3d ago",
  },
  {
    id: "5",
    type: "Winner Selected" as const,
    actor: "TechCorp",
    actorType: "company" as const,
    description:
      "Sarah Johnson selected as winner for innovative chart implementation",
    challenge: "Challenge: Build a React Dashboard for Analytics",
    timestamp: "4d ago",
  },
  {
    id: "6",
    type: "Solution Submitted" as const,
    actor: "Mike Chen",
    actorType: "developer" as const,
    description:
      "Submitted smart contract security audit with detailed recommendations",
    challenge: "Challenge: Smart Contract Security Audit",
    timestamp: "5d ago",
  },
];
