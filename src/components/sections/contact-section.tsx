"use client"

import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { contactSchema, type ContactFormData } from "@/lib/contact-schema"

import Container from "@/components/shared/container"
import SectionHeading from "@/components/sections/section-heading"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"



export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })


    async function onSubmit(
    values: ContactFormData
  ) {
    try {
      setIsSubmitting(true)

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(values),
        }
      )

      if (!response.ok) {
        throw new Error(
          "Something went wrong"
        )
      }

      toast.success(
        "Message sent successfully"
      )

      form.reset()
    } catch (error) {
      toast.error(
        "Failed to send message"
      )
    } finally {
      setIsSubmitting(false)
    }
  }

    return (
    <section
      id="contact"
      className="py-24"
    >
      <Container>

        <div className="space-y-12">

          <SectionHeading
            title="Contact Me"
            subtitle="Feel free to reach out for collaborations, projects, or opportunities."
          />

          <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-8">

            <Form {...form}>

              <form
                onSubmit={form.handleSubmit(
                  onSubmit
                )}
                className="space-y-6"
              >

<FormField
  control={form.control}
  name="name"
  render={({ field }) => (
    <FormItem>

      <FormLabel>
        Name
      </FormLabel>

      <FormControl>
        <Input
          placeholder="Your name"
          {...field}
        />
      </FormControl>

      <FormMessage />

    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>

      <FormLabel>
        Email
      </FormLabel>

      <FormControl>
        <Input
          type="email"
          placeholder="your@email.com"
          {...field}
        />
      </FormControl>

      <FormMessage />

    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="message"
  render={({ field }) => (
    <FormItem>

      <FormLabel>
        Message
      </FormLabel>

      <FormControl>
        <Textarea
          rows={6}
          placeholder="Write your message..."
          {...field}
        />
      </FormControl>

      <FormMessage />

    </FormItem>
  )}
/>

<Button
  type="submit"
  size="lg"
  className="w-full"
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Sending...
    </>
  ) : (
    "Send Message"
  )}
</Button>



              
                            </form>
            </Form>

          </div>

        </div>

      </Container>
    </section>
  )
}