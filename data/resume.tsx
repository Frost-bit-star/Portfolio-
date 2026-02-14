import { Icons } from "../components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Morgan Miller",
  initials: "SM",
  url: "https://stackmorgan.vercel.app",
  location: "Nairobi, Kenya",
  locationLink: "https://www.google.com/maps/place/Nairobi",
  description:
    "System Engineer turned Web Developer. I love building things and helping people. Very active on WhatsApp.",
  summary: "I’m here. I keep to myself. Things happen around me. I move along.",
  avatarUrl: "/images (2).png",
  skills: [
    "PHP",
    "Next.js",
    "Python",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
    "Termux",
    "Mikrotik",
    "Tor",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hr@stackverify.site",
    tel: "+254768974189",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Frost-bit-star",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/stackverify",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: true,
      },
      YouTube: {
        name: "YouTube",
        url: "https://youtube.com/@mr_termux-r2l?si=hBWyfj2QH8cmr5RN",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hr@stackverify.site",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "StackVerify",
      href: "https://stackverify.site",
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/Screenshot (5).png",
      start: "Feb 2023",
      end: "Present",
      description:
        "Founder at StackVerify. I manage messaging systems across Email, SMS, and WhatsApp.",
      badges: [], // added to prevent TS errors
    },
  ],
  education: [
    {
      school: "Moringa School",
      href: "https://moringaschool.com/",
      degree: "Software Development",
      logoUrl: "/moringa_logo.png",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "TendaN301 Billing",
      href: "https://github.com/Frost-bit-star",
      dates: "Jan 2026 - Feb 2025",
      active: true,
      description:
        "Turns Tenda routers into micro-ISP routers using PHP, enabling client monitoring, access control, and centralized management.",
      technologies: [
        "PHP",
        "TypeScript",
        "SQL",
        "Prisma",
        "TailwindCSS",
        "M-Pesa",
        "Shadcn UI",
        "Golang",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Frost-bit-star/tendaN301-billing",
          icon: Icons.globe,
        },
      ],
      image: "/Screenshot (28).png",
    },
    {
      title: "StackVerify",
      href: "https://stackverify.site",
      dates: "Present",
      active: true,
      description:
        "StackVerify is a messaging platform that handles Email, SMS, and WhatsApp. It lets users run basic campaigns and automation. The system is built to work reliably, even in everyday situations, helping messages reach their destination without fuss. It’s practical, straightforward, and focused on getting things done.",
      technologies: [
        "Laravel",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "Zustand",
        "Shadcn UI",
        "React Hook Form",
      ],
      links: [
        {
          type: "Website",
          href: "https://stackverify.site",
          icon: Icons.globe,
        },
      ],
      image: "/Screenshot (5).png",
    },
  ],
};
