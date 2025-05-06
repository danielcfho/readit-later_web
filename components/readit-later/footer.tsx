"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 text-white mb-4">
              <img src="/icon.svg" alt="ReadIt-Later Logo" className="h-8 w-8" />
              <span className="text-xl font-medium">ReadIt-Later</span>
            </Link>
            <p className="text-sm text-gray-400">
              Save articles, links, and web content to read later on any device.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} ReadIt-Later. All rights reserved.
          </p>
          
          <motion.div 
            className="flex items-center text-sm text-gray-500"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for readers everywhere
          </motion.div>
        </div>
      </div>
    </footer>
  );
}