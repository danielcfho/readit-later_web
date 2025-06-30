"use client";

import Link from "next/link";
import Image from "next/image";
import { StoreButton } from "@/components/ui/store-button";
import { motion } from "framer-motion";
import { Camera, Mail, Shield, Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer id="download" className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">
          {/* Left side - Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/actionscam_logo.png"
                alt="ActionsCam Logo"
                width={48}
                height={48}
                className="w-12 h-12 mr-3"
              />
              <h3 className="text-2xl font-bold">ActionsCam</h3>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Learning Through{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Movement Today
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
              Transform your language learning experience with the power of movement. 
              Download ActionsCam and start speaking a new language with every action.
            </p>
            
            <div className="flex flex-col items-center">
              <StoreButton 
                storeName="App Store" 
                href="https://apps.apple.com/hk/app/actionscam/id6747068551"
                className="mb-4 hover:scale-105 transition-transform duration-300"
              />
              <p className="text-sm text-gray-400">
                Compatible with iPhone XR and newer
              </p>
            </div>
          </motion.div>

          {/* Right side - Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Real-time Recognition</h4>
              <p className="text-sm text-gray-400">Advanced AI understands your movements instantly</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Privacy First</h4>
              <p className="text-sm text-gray-400">All processing happens on your device</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Optimized Performance</h4>
              <p className="text-sm text-gray-400">Smooth experience on iPhone XR+</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">One-time Purchase</h4>
              <p className="text-sm text-gray-400">No ads, no subscriptions, yours forever</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                Benefits
              </Link>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © 2025 ActionsCam. Made with ❤️ for language learners.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Powered by SmolVLM2 and Apple MLX
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
