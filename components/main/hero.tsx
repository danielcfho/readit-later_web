"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function MainHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 2.0]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.3]);

  function scrollToFeatures() {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center pt-24"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/main/hero_bg.jpg"
          alt="Edge AI Background"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Overlay with gradient and filter effects */}
        <motion.div 
          style={{ opacity: backgroundOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-slate-900/70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
      </motion.div>
      
      {/* Additional decorative elements */}
      <div className="absolute inset-0 z-10">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] opacity-80"
        />
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] opacity-60"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 z-20 text-center relative mt-16"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)'
          }}
        >
          Edge AI Essentials<br /> 
          
            Bringing Intelligence to the Edge
          
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl mx-auto drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textShadow: '0 2px 10px rgba(0,0,0,0.7)'
          }}
        >
          Edge AI 將人工智慧運算帶到資料產生的裝置端，實現即時、隱私與高效率的智慧應用。探索其原理、優勢、挑戰與產業應用。
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
            onClick={scrollToFeatures}
          >
            什麼是 Edge AI？
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/30 shadow-lg transition-all duration-300" 
            asChild
          >
            <a href="https://annjose.com/post/edge-ai-essentials/" target="_blank" rel="noopener noreferrer">深入閱讀原文</a>
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <button 
          onClick={scrollToFeatures}
          className="p-3 rounded-full bg-white/20 backdrop-blur-md shadow-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/20"
          aria-label="Scroll to features"
        >
          <ChevronDown className="h-6 w-6 text-white drop-shadow-lg animate-bounce" />
        </button>
      </motion.div>
    </div>
  );
}