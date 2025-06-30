"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StoreButton } from "@/components/ui/store-button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, Zap, Shield, Smartphone } from "lucide-react";

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
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex flex-col justify-center items-center pt-24"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 z-10 text-center relative mt-16 max-w-6xl"
      >
        {/* Logo */}
        <motion.div className="flex justify-center mb-6">
          <div className="relative">
            <Image
              src="/images/actionscam_logo.png"
              alt="ActionsCam Logo"
              width={120}
              height={120}
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-orange-300 rounded-full opacity-30"
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Learn Languages by{" "}
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Moving!
          </span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transform language learning with <strong>ActionsCam</strong> – the revolutionary iOS app that recognizes your movements and teaches you words through real-world actions. Wave, jump, or sit and learn instantly!
        </motion.p>

        {/* Key Features Pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <Zap className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium text-gray-700">Real-time Recognition</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <Shield className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium text-gray-700">Privacy First</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <Smartphone className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium text-gray-700">iPhone XR+</span>
          </div>
        </motion.div>
        
        {/* Download Button */}
        <motion.div 
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <StoreButton 
            storeName="App Store" 
            href="https://apps.apple.com/hk/app/actionscam/id6747068551"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          />
          <span className="text-sm text-gray-600 mt-3">
            Compatible with iPhone XR and newer
          </span>
        </motion.div>
      </motion.div>
      
      {/* Hero Image/Animation placeholder */}
      <motion.div 
        className="relative w-full max-w-4xl mx-auto mt-8 px-4"
        style={{ y: y1, opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl shadow-2xl overflow-hidden">
          {/* Placeholder for app screenshot/demo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center mb-4 mx-auto"
              >
                <Play className="h-12 w-12 text-white" />
              </motion.div>
              <p className="text-gray-600 font-medium">App Demo Coming Soon</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <button 
          onClick={scrollToFeatures}
          className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to features"
        >
          <ChevronDown className="h-6 w-6 text-orange-600" />
        </button>
      </motion.div>
    </div>
  );
}
