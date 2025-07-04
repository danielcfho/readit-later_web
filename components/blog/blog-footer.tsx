"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Rss, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function BlogFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-300 py-16 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 text-white mb-4">
              <Image src="/icon.svg" alt="dchome Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-medium">dchome Blog</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Explore our latest insights, technical articles, and development stories. 
              Stay updated with the latest trends in technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Blog</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  All Articles
                </Link>
              </li>
              <li>
                <Link href="/blog/category/react" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  React
                </Link>
              </li>
              <li>
                <Link href="/blog/category/javascript" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="/blog/category/nextjs" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Next.js
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/apps/readit-later" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                  ReadIt-Later
                </Link>
              </li>
              <li>
                <Link href="/apps/actionscam" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                  ActionsCam
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Rss className="h-4 w-4" />
                  RSS Feed
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 dchome. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-gray-400">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for developers
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
