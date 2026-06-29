import type { Metadata } from "next"
import "./globals.css"

import { ThemeProvider } from "@/components/layout/theme-provider"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Manjil Rijal",
  description: "Developer Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex min-h-screen flex-col">
<Navbar />

            <main className="flex-1">
              {children}
             
            </main>
<Footer />

          </div>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}



 // children means that home page kholda home to khulxa, with navbar and footer constant, about kholda about ko khulxa keeping 
 // other components constant. So, children is the content of the page that is being rendered inside the layout. 
 // It allows for dynamic content to be displayed while keeping the overall structure of the page consistent.