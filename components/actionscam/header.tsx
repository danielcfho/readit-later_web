"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-medium text-gray-900 hover:text-orange-600 transition-colors"
          >
            <Image
              src="/images/actionscam_logo.png"
              alt="ActionsCam Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span>ActionsCam</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="#download"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              Download
            </Link>
          </nav>

          <Button 
            variant="default" 
            size="sm"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0"
          >
            <Link href="https://apps.apple.com/hk/app/actionscam/id6747068551" target="_blank" rel="noopener noreferrer">
              Get App
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
