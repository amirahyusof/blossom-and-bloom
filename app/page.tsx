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
  // Better scrollbar hiding implementation
  useEffect(() => {
    // Create a more comprehensive style sheet
    const styleId = 'hide-scrollbar-styles'
    
    // Remove existing style if it exists
    const existingStyle = document.getElementById(styleId)
    if (existingStyle) {
      existingStyle.remove()
    }

    const style = document.createElement("style")
    style.id = styleId
    style.textContent = `
      /* Hide scrollbar for Chrome, Safari and Opera */
      body::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      
      /* Hide scrollbar for IE, Edge and Firefox */
      body {
        -ms-overflow-style: none !important;  /* IE and Edge */
        scrollbar-width: none !important;     /* Firefox */
        overflow-y: auto !important;
        overflow-x: hidden !important;
      }
      
      /* Additional fallbacks */
      html::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
      }
      
      html {
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
      }
    `
    
    // Insert at the beginning of head to ensure it has priority
    document.head.insertBefore(style, document.head.firstChild)

    return () => {
      const styleToRemove = document.getElementById(styleId)
      if (styleToRemove) {
        styleToRemove.remove()
      }
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











