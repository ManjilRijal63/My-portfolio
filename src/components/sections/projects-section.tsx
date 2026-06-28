"use client"
import SectionHeading from "@/components/sections/section-heading"
import Container from "@/components/shared/container"
import { motion } from "framer-motion"

import { fadeUp } from "@/lib/animations"

import ProjectCard from "./project-card"

import { projects } from "@/data/projects"

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <Container>

        <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="space-y-12"
>

          <SectionHeading
            title="Projects"
            subtitle="Some of the projects I have built using modern web technologies."
          />

          <div className="grid gap-6 md:grid-cols-2">
            
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

        </motion.div>
        {/* close here  */}

      </Container>
    </section>
  )
}