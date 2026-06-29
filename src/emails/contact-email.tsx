interface ContactEmailProps {
  name: string
  email: string
  message: string
}

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "24px",
      }}
    >
      <h1>New Portfolio Message</h1>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <div>
        <strong>Message:</strong>

        <p>{message}</p>
      </div>
    </div>
  )
}