"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"


export default function TestimonialSection() {
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
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">&quot;</div>
              <p className="text-gray-700 italic mb-3 md:mb-4 text-sm md:text-base">{testimonial.text}</p>
              <p className="text-[#89B9AD] font-semibold text-sm md:text-base">– {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}