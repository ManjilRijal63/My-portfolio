import { NextResponse } from "next/server"

import { Resend } from "resend"

import ContactEmail from "@/emails/contact-email"

import { contactSchema } from "@/lib/contact-schema"

const resend = new Resend(
  process.env.RESEND_API_KEY
)

export async function POST(
  request: Request
) {
  try {
    const body = await request.json()

    const validatedData =
      contactSchema.parse(body)

    const { name, email, message } =
      validatedData

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      to:
        process.env.CONTACT_EMAIL || "",

      subject:
        "New Portfolio Contact Message",

      react: ContactEmail({
        name,
        email,
        message,
      }),
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
  console.error(error)

  return NextResponse.json(
    {
      success: false,
      message:
        "Failed to send email",
    },
    {
      status: 500,
    }
  )
}
}