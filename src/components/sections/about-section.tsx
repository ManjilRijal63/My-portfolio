import SectionHeading from "@/components/sections/section-heading"
import Container from "@/components/shared/container"

export default function AboutSection() {
  return (
    <section id="about"
     className="py-24">
      <Container>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div className="space-y-6">

            <SectionHeading
              title="About Me"
              subtitle="Passionate about building modern web applications and continuously improving my development skills."
            />

            <div className="space-y-4 text-muted-foreground">
              
              <p>
                I am a computer science student focused on
                full-stack web development using modern
                technologies like Next.js, TypeScript,
                and Node.js.
              </p>

              <p>
                I enjoy building scalable and responsive
                applications while continuously learning
                new technologies and improving my problem
                solving skills.
              </p>

            </div>

          </div>

          <div className="rounded-2xl border bg-muted p-8">
            
            <div className="space-y-6">

              <div>
                <h3 className="font-semibold">
                  Education
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  BSc CSIT — Tribhuvan University
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Interests
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Full Stack Development, AI/ML,
                  UI Design, and Problem Solving.
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  )
}