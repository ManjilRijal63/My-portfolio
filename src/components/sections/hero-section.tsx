import Link from "next/link"

// import { Github, Linkedin, Mail } from "lucide-react"  bcz all github and linkedin logo not availabile in lucide react
import {  Mail } from "lucide-react"

import { FaGithub, FaLinkedin } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import Container from "@/components/shared/container"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          
          <div className="max-w-3xl space-y-8">
            
            <div className="space-y-4">
              <p className="text-sm font-medium text-blue-500">
                Full Stack Developer
              </p>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Building modern web experiences with{" "}
                <span className="text-blue-500">
                  Next.js
                </span>
              </h1>

              <p className="max-w-2xl text-lg text-muted-foreground">
                I create responsive, scalable,
                and user-friendly applications
                using modern frontend and backend
                technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>

            </div>

            <div className="flex items-center gap-5">
              
              <Link
                href="https://github.com"
                target="_blank"
                className="transition-opacity hover:opacity-70"
              >
                
                <FaGithub className="h-5 w-5" />
                
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="transition-opacity hover:opacity-70"
              >
                
                <FaLinkedin className="h-5 w-5" />
                
              </Link>

              <Link
                href="mailto:manjilrijal63@email.com"
                className="transition-opacity hover:opacity-70"
              >
                <Mail className="h-5 w-5" />
              </Link>

            </div>
          </div>

          <div className="relative flex justify-center">
            
            <div className="flex h-72 w-72 items-center justify-center rounded-full border bg-muted text-6xl font-bold">
              MR
            </div>

          </div>
        </div>
        
      </Container>
    
    </section>
  )
}