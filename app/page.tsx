"use client"

import { useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero"
import AboutSection from "@/components/about"
import ServicesSection from "@/components/service"
import GallerySection from "@/components/gallery"
import ContactSection from "@/components/contact"
import TestimonialSection from "@/components/testimonials"
import Footer from "@/components/footer"

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
      <TestimonialSection/>
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












