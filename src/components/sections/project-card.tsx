"use client"
import Link from "next/link"
import { motion } from "framer-motion"

import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"

import { Badge } from "@/components/ui/badge"

import { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-xl"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="space-y-5">

        <div className="space-y-3">

          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <p className="text-muted-foreground">
            {project.description}
          </p>

        </div>

        <div className="flex flex-wrap gap-2">

          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
            >
              {tech}
            </Badge>
          ))}

        </div>

        <div className="flex items-center gap-4 pt-2">

          <Link
            href={project.githubUrl}
            target="_blank"
           className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-all hover:text-blue-500"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </Link>

          <Link
            href={project.liveUrl}
            target="_blank"
           className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-all hover:text-blue-500"
          >
            <ArrowUpRight className="h-4 w-4" />
            Live Demo
          </Link>

        </div>

      </div>

    </motion.div>
    // close here 
  )
}