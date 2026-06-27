import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    title: "Developer Portfolio",
    description:
      "A modern developer portfolio built using Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },

  {
    title: "SmartCitizen",
    description:
      "A citizen issue reporting platform where users can report local infrastructure problems.",
    techStack: [
      "Next.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },

  {
    title: "PaperPal",
    description:
      "An online stationery e-commerce platform with product browsing and ordering functionality.",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]