"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"


export default function ContactSection() {
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