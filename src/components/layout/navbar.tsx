import Link from "next/link"

import Container from "@/components/shared/container"
import ThemeToggle from "@/components/shared/theme-toggle"

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

export default function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold"
          >
            Manjil
          </Link>

          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-blue-500"
              >
                {link.name}
              </Link>
            ))}

            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </header>
  )
}