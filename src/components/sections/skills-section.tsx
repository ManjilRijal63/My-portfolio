import SectionHeading from "@/components/sections/section-heading"
import Container from "@/components/shared/container"

import SkillCard from "./skill-card"

import { skills } from "@/data/skills"

export default function SkillsSection() {
  return (
    <section id="skills"
     className="py-24">
      <Container>

        <div className="space-y-12">

          <SectionHeading
            title="Skills & Technologies"
            subtitle="Technologies and tools I use to build modern web applications."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            ))}

          </div>

        </div>

      </Container>
    </section>
  )
}