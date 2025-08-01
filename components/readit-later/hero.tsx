"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StoreButton, StoreButtons } from "@/components/ui/store-button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Apple, ChevronDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  function scrollToFeatures() {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900 flex flex-col justify-center items-center pt-24"
    >
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 z-10 text-center relative mt-16"
      >
        <motion.p className="flex justify-center mb-5">
          <Image 
            src="/images/readit-later/readit-later_logo.png" 
            alt="ReadIt-Later Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </motion.p>
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Save now.<br />Read whenever.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-2 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ReadIt-Later helps you save articles, links, and web content 
          to read later offline on any device. Organize your reading list and enjoy 
          distraction-free reading.

        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col items-center">
            <StoreButton storeName="App Store" />
            <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">for iPhone, iPad, and AppleWatch</span>
          </div>
          <div className="flex flex-col items-center">
            <StoreButton storeName="Mac App Store" />
            <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">for Mac</span>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="relative w-full max-w-6xl mx-auto mt-1 px-4"
        style={{ y: y1, opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/images/readit-later/readit-later_hero.png"
            alt="ReadIt-Later App Interface"
            fill
            className="object-cover "
            priority
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <button 
          onClick={scrollToFeatures}
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
          aria-label="Scroll to features"
        >
          <ChevronDown className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>
      </motion.div>
    </div>
  );
}
