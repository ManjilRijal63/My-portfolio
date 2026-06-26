import Container from "@/components/shared/container"

export default function Home() {
  return (
    <section className="py-24">
      <Container>
        <div className="space-y-6">
          <p className="text-sm font-medium text-blue-500">
            Full Stack Developer
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight">
            Hi, I&apos;m Manjil Rijal.
            I build modern web applications.
          </h1>

          <p className="max-w-2xl text-muted-foreground">
            I create responsive, scalable,
            and user-friendly web experiences
            using modern technologies.
          </p>
        </div>
      </Container>
    </section>
  )
}