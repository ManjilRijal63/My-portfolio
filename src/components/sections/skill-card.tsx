import { Skill } from "@/types/skill"

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({
  skill,
}: SkillCardProps) {
  return (
    <div className="rounded-xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-md">
      
      <div className="space-y-2">
        <p className="text-sm text-blue-500">
          {skill.category}
        </p>

        <h3 className="font-semibold">
          {skill.name}
        </h3>
      </div>

    </div>
  )
}