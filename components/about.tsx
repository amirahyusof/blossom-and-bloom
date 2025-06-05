"use client"
import { useRef } from "react"
import { motion,useInView } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
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
            through petals. Whether it&quot;s a birthday, wedding, or just because — our arrangements are thoughtfully
            designed to reflect your emotions. Locally owned, environmentally conscious, and community-loved.
          </p>

          <div className="flex justify-center">
            <Image
              src="/about-image.jpg"
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