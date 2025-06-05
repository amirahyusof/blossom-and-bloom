"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const images = [
    { src: "/flower-gallery-1.jpg", width: 300, height: 400, title: "Elegant Roses" },
    { src: "/flower-gallery-2.jpg", width: 500, height: 300, title: "Spring Bouquet" },
    { src: "/flower-gallery-3.jpg", width: 250, height: 250, title: "Delicate Petals" },
    { src: "/flower-gallery-4.jpg", width: 400, height: 300, title: "Garden Fresh" },
    { src: "/flower-gallery-5.jpg", width: 300, height: 500, title: "Tropical Blooms" },
    { src: "/flower-gallery-6.jpg", width: 350, height: 350, title: "Seasonal Mix" },
    { src: "/flower-gallery-7.jpg", width: 400, height: 300, title: "Fresh Flower" },
    { src: "/flower-gallery-8.jpg", width: 300, height: 500, title: "Rose Blossom" },
    { src: "/flower-gallery-9.jpg", width: 350, height: 350, title: "Pink Rose" },
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-screen">
          {/* Large featured item - spans 2x2 */}
          <motion.div
            className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0 * 0.1 }}
          >
            <Image
              src={`${images[0].src}?height=600&width=600`}
              fill
              style={{ objectFit: "cover" }}
              alt={images[0].title}
              className="rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/30 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{images[0].title}</h3>
                <p className="text-white mb-4">Discover the beauty of our featured arrangement</p>
                <Button variant="secondary" size="sm" className="bg-white/80 hover:bg-white">
                  View Details
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Two medium items on the right */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1 * 0.1 }}
          >
            <Image
              src={`${images[1].src}?height=300&width=400`}
              fill
              style={{ objectFit: "cover" }}
              alt={images[1].title}
              className="rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/30 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white mb-2">{images[1].title}</h4>
                <Button variant="secondary" size="sm" className="bg-white/80 hover:bg-white text-xs">
                  View Details
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 2 * 0.1 }}
          >
            <Image
              src={`${images[2].src}?height=300&width=400`}
              fill
              style={{ objectFit: "cover" }}
              alt={images[2].title}
              className="rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/30 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white mb-2">{images[2].title}</h4>
                <Button variant="secondary" size="sm" className="bg-white/80 hover:bg-white text-xs">
                  View Details
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Bottom row - 4 equal items */}
          {images.slice(3).map((image, index) => (
            <motion.div
              key={index + 3}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
            >
              <Image
                src={`${image.src}?height=300&width=400`}
                fill
                style={{ objectFit: "cover" }}
                alt={image.title}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/30 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white mb-2">{image.title}</h4>
                  <Button variant="secondary" size="sm" className="bg-white/80 hover:bg-white text-xs">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}