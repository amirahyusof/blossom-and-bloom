"use client";

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
export default function HeroSection(){
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const Flower = ({ className = "", index = 1 }) => (
    <div className={`flower flower-${index} ${className}`}>
      <div className={`flower-leafs flower-leafs-${index}`}>
        <div className="flower-leaf flower-leaf-1"></div>
        <div className="flower-leaf flower-leaf-2"></div>
        <div className="flower-leaf flower-leaf-3"></div>
        <div className="flower-leaf flower-leaf-4"></div>
        <div className="flower-white-circle"></div>
        
        {[1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className={`flower-light flower-light-${i}`}></div>
        ))}
      </div>
      <div className="flower-line">
        {Array.from({length: index === 1 ? 6 : 4}, (_, i) => (
          <div key={i} className={`flower-line-leaf flower-line-leaf-${i+1}`}></div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFC5C5] pt-16">

      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-20 md:w-40 h-20 md:h-40 rounded-full bg-[#C7DCA7] top-1/4 left-1/4 animate-float" />
        <div className="absolute w-40 md:w-60 h-40 md:h-60 rounded-full bg-[#89B9AD] bottom-1/4 right-1/3 animate-float-delay" />
        <div className="absolute w-12 md:w-20 h-12 md:h-20 rounded-full bg-[#FFEBD8] top-1/3 right-1/4 animate-float-slow" />
        <div className="absolute w-20 md:w-32 h-20 md:h-32 rounded-full bg-[#FFC5C5] bottom-1/4 left-1/3 animate-float-delay-slow" />
      </div>

      <div className="container mx-auto px-4 z-10 -mt-40">
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
      
      {/* Flower Garden */}
      <div className="absolute bottom-0 w-full">
        <div className={`flowers flex justify-around flex-wrap transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Generate multiple rows of flowers */}
          {Array.from({ length: 4 }).map((_, row) => (
            <div key={row} className="w-full flex flex-wrap relative" style={{ marginBottom: `-${row * 2}rem` }}>
              {Array.from({ length: 12 }).map((_, col) => {
                const randomOffset = Math.floor(Math.random() * 40);
                const randomScale = 0.5 + Math.random() * 0.5;
                return (
                  <div 
                    key={`${row}-${col}`}
                    className="relative"
                    style={{
                      width: '8%',
                      marginLeft: `${randomOffset}px`,
                      transform: `scale(${randomScale})`,
                    }}
                  >
                    <Flower 
                      index={(row + col) % 3 + 1}
                      className={`transform translate-y-${20 + randomOffset}`}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
