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
