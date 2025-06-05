"use client"

import { useState } from "react"
import { useEffect, useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  // Hide scrollbar but keep functionality
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.scrollbarWidth = "none"; // Firefox
    (document.body.style as any).msOverflowStyle = "none"; // IE/Edge

    const style = document.createElement("style")
    style.textContent = `
      body::-webkit-scrollbar {
        display: none;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.body.style.overflow = "";
      document.body.style.scrollbarWidth = "";
      (document.body.style as any).msOverflowStyle = "";
      document.head.removeChild(style)
    }
  }, [])

  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      {/* Progress indicator */}
      <motion.div
        className="fixed right-4 top-1/2 -translate-y-1/2 w-1 h-40 bg-[#FFEBD8] rounded-full z-40 hidden md:block"
        style={{ scaleY: smoothProgress }}
        initial={{ originY: 0 }}
      />
    </main>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-serif font-bold text-[#89B9AD]">Blossom & Bloom</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-[#89B9AD] transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button size="sm" className="bg-[#C7DCA7] hover:bg-[#89B9AD] text-white ml-4">
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#89B9AD] transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-700 hover:text-[#89B9AD] transition-colors duration-200 font-medium py-2"
              >
                {item.name}
              </button>
            ))}
            <Button size="sm" className="bg-[#C7DCA7] hover:bg-[#89B9AD] text-white w-full mt-4">
              Shop Now
            </Button>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFC5C5] pt-16"
    >
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-20 md:w-40 h-20 md:h-40 rounded-full bg-[#C7DCA7] top-1/4 left-1/4 animate-float" />
        <div className="absolute w-40 md:w-60 h-40 md:h-60 rounded-full bg-[#89B9AD] bottom-1/4 right-1/3 animate-float-delay" />
        <div className="absolute w-12 md:w-20 h-12 md:h-20 rounded-full bg-[#FFEBD8] top-1/3 right-1/4 animate-float-slow" />
        <div className="absolute w-20 md:w-32 h-20 md:h-32 rounded-full bg-[#FFC5C5] bottom-1/4 left-1/3 animate-float-delay-slow" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#89B9AD] mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where Flowers Speak Louder Than Words
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#89B9AD] mb-6 md:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fresh, handpicked blooms for every moment — crafted with love, delivered with care.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-[#C7DCA7] hover:bg-[#89B9AD] text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#89B9AD] text-[#89B9AD] hover:bg-[#89B9AD] hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative flower elements - hidden on mobile */}
      <motion.div
        className="absolute -bottom-10 left-0 w-full h-20 hidden md:block"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="absolute -bottom-5 left-1/4 w-20 h-20 transform -rotate-12">
          <Image
            src="/placeholder.svg?height=80&width=80"
            width={80}
            height={80}
            alt="Flower decoration"
            className="opacity-70"
          />
        </div>
        <div className="absolute -bottom-10 right-1/4 w-24 h-24 transform rotate-12">
          <Image
            src="/placeholder.svg?height=96&width=96"
            width={96}
            height={96}
            alt="Flower decoration"
            className="opacity-70"
          />
        </div>
      </motion.div>
    </section>
  )
}

function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="about" className="py-12 md:py-20 bg-[#FFEBD8]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#89B9AD] mb-4 md:mb-6">
            Floristry With Heart & Soul
          </h2>

          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
            At <span className="font-semibold italic">Blossom & Bloom</span>, we believe in the art of expression
            through petals. Whether it's a birthday, wedding, or just because — our arrangements are thoughtfully
            designed to reflect your emotions. Locally owned, environmentally conscious, and community-loved.
          </p>

          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=300&width=500"
              width={500}
              height={300}
              alt="Florist at work"
              className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const services = [
    {
      title: "Custom Bouquets",
      description: "Tailored to your occasion and style.",
      icon: "🌷",
    },
    {
      title: "Event Florals",
      description: "Weddings, baby showers, and corporate events.",
      icon: "💐",
    },
    {
      title: "Same-Day Delivery",
      description: "Quick, reliable delivery throughout the city.",
      icon: "🚚",
    },
  ]

  return (
    <section id="services" className="py-12 md:py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#89B9AD] text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#FFEBD8] rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-[#89B9AD] mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{service.description}</p>
              <Button
                variant="link"
                className="mt-3 md:mt-4 p-0 text-[#89B9AD] hover:text-[#C7DCA7] text-sm md:text-base"
              >
                Learn more <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const images = [
    { width: 300, height: 400 },
    { width: 500, height: 300 },
    { width: 250, height: 250 },
    { width: 400, height: 300 },
    { width: 300, height: 500 },
    { width: 350, height: 350 },
  ]

  return (
    <section id="gallery" className="py-12 md:py-20 bg-[#FFC5C5]/10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#89B9AD] text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Our Floral Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              style={{
                aspectRatio: image.width / image.height,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={`/placeholder.svg?height=${image.height}&width=${image.width}`}
                fill
                style={{ objectFit: "cover" }}
                alt={`Flower arrangement ${index + 1}`}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary" size="sm" className="bg-white/80 hover:bg-white text-xs md:text-sm">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const testimonials = [
    {
      text: "Absolutely stunning bouquet and amazing service. The flowers lasted longer than expected. Will definitely order again!",
      author: "Anna M.",
    },
    {
      text: "The arrangements for our wedding were beyond perfect. Everyone was asking who our florist was!",
      author: "James & Sarah",
    },
    {
      text: "Same-day delivery saved me when I forgot my anniversary. The bouquet was gorgeous and my wife loved it!",
      author: "Michael T.",
    },
  ]

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-[#C7DCA7]/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#89B9AD] text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 md:p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">"</div>
              <p className="text-gray-700 italic mb-3 md:mb-4 text-sm md:text-base">{testimonial.text}</p>
              <p className="text-[#89B9AD] font-semibold text-sm md:text-base">– {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="contact" className="py-12 md:py-20 bg-[#FFEBD8]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#89B9AD] text-center mb-4 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Let's Talk Flowers!
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a special request? Drop us a message — we'd love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us what you need..." className="min-h-[120px]" />
              </div>
              <Button className="w-full bg-[#C7DCA7] hover:bg-[#89B9AD] text-white">Send Message</Button>
            </form>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 md:h-6 md:w-6 text-[#89B9AD] mr-3" />
                <a
                  href="mailto:hello@blossomandbloom.com"
                  className="text-gray-700 hover:text-[#89B9AD] text-sm md:text-base"
                >
                  hello@blossomandbloom.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-[#89B9AD] mr-3" />
                <a href="tel:+1234567890" className="text-gray-700 hover:text-[#89B9AD] text-sm md:text-base">
                  +123 456 7890
                </a>
              </div>
              <div className="pt-2 md:pt-4">
                <p className="text-gray-700 mb-3 text-sm md:text-base">Follow us:</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#89B9AD] hover:text-[#C7DCA7] transition-colors">
                    <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                  </a>
                  <a href="#" className="text-[#89B9AD] hover:text-[#C7DCA7] transition-colors">
                    <Facebook className="h-5 w-5 md:h-6 md:w-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#89B9AD] text-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base">© 2025 Blossom & Bloom. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <Link href="#" className="text-white hover:text-[#FFEBD8] transition-colors text-sm md:text-base">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white hover:text-[#FFEBD8] transition-colors text-sm md:text-base">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
