"use client";
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';


const CloudComponent = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // Cloud shape component
  const CloudShape = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`relative ${className}`} style={style}>
      <div className="absolute w-32 h-16 bg-white rounded-full" />
      <div className="absolute w-16 h-16 bg-white rounded-full -left-6 -top-4" />
      <div className="absolute w-16 h-16 bg-white rounded-full left-12 -top-6" />
      <div className="absolute w-20 h-16 bg-white rounded-full left-8 -top-2" />
      <div className="absolute w-16 h-16 bg-white rounded-full right-4 -top-3" />
    </div>
  );

  // Bee component
  const Bee = () => (
    <motion.div
      className="absolute w-8 h-6 z-20"
      initial={{ x: -50, y: 200 }}
      animate={{
        x: [0, 200, 400, 600, 800, 600, 400, 200, 0],
        y: [200, 150, 220, 180, 160, 240, 170, 190, 200],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {/* Bee body */}
      <div className="relative">
        <div className="w-6 h-4 bg-yellow-400 rounded-full relative">
          <div className="absolute inset-0 bg-black rounded-full opacity-20"></div>
          <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
          {/* Stripes */}
          <div className="absolute top-0 left-2 w-0.5 h-4 bg-black opacity-60"></div>
          <div className="absolute top-0 left-4 w-0.5 h-4 bg-black opacity-60"></div>
        </div>
        
        {/* Wings */}
        <motion.div
          className="absolute -top-1 left-1 w-3 h-2 bg-white rounded-full opacity-70"
          animate={{ rotate: [0, 15, 0, -15, 0] }}
          transition={{ duration: 0.2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-1 right-1 w-3 h-2 bg-white rounded-full opacity-70"
          animate={{ rotate: [0, -15, 0, 15, 0] }}
          transition={{ duration: 0.2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );

  return (
    <div 
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-200 via-pink-100 to-green-100"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Clouds */}
        {[...Array(5)].map((_, i) => (
          <CloudShape
            key={i}
            className="absolute opacity-80"
            style={{
              left: `${i * 25}%`,
              top: `${10 + i * 8}%`,
              transform: `scale(${0.8 + Math.random() * 0.4})`,
            }}
          />
        ))}

        <Bee />
      </div>
    </div>
  );
};

export default CloudComponent;
