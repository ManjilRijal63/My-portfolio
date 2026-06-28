"use client"
import { Skill } from "@/types/skill"

import { motion } from "framer-motion"

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({
  skill,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
      className="rounded-xl border bg-card p-5"
    >

      <div className="space-y-2">
        <p className="text-sm text-blue-500">
          {skill.category}
        </p>

        <h3 className="font-semibold">
          {skill.name}
        </h3>
      </div>

    </motion.div>

  )
}