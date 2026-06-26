interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}