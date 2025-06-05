"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight} from "lucide-react"
import { Button } from "@/components/ui/button"


export default function ServicesSection() {
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