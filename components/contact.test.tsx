// ContactSection.test.jsx
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ContactSection from "@/components/contact"
import { jest } from '@jest/globals'
import '@testing-library/jest-dom'

// Optional: Mock framer-motion if animation causes issues
jest.mock("framer-motion", () => ({
  ...(jest.requireActual("framer-motion") as object),
  motion: {
    div: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 {...props} />,
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props} />,
  },
  useInView: () => true, // Always return true for testing
}))

describe("ContactSection", () => {
  it("renders heading and description", () => {
    render(<ContactSection />)
    expect(screen.getByText(/Let's Talk Flowers!/i)).toBeInTheDocument()
    expect(screen.getByText(/Drop us a message/i)).toBeInTheDocument()
  })

  it("renders form inputs", () => {
    render(<ContactSection />)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument()
  })

  it("allows typing in the form", async () => {
    render(<ContactSection />)
    await userEvent.type(screen.getByLabelText(/Name/i), "Jane Doe")
    await userEvent.type(screen.getByLabelText(/Email/i), "jane@example.com")
    await userEvent.type(screen.getByLabelText(/Message/i), "I want to order flowers.")

    expect(screen.getByDisplayValue("Jane Doe")).toBeInTheDocument()
    expect(screen.getByDisplayValue("jane@example.com")).toBeInTheDocument()
    expect(screen.getByDisplayValue("I want to order flowers.")).toBeInTheDocument()
  })

  it("renders contact links", () => {
    render(<ContactSection />)
    expect(screen.getByText(/hello@blossomandbloom\.com/i)).toBeInTheDocument()
    expect(screen.getByText(/\+123 456 7890/i)).toBeInTheDocument()
  })
})
