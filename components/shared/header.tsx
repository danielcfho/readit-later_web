"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
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
              className="flex items-center space-x-2 text-xl font-medium"
            >
              <img src="/icon.svg" alt="dchome Logo" className="h-8 w-8" />
              <span>dchome</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/#features"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
              
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  Apps <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/apps/readit-later" className="w-full flex items-center gap-2">
                      <img 
                        src="/images/readit-later_logo.svg" 
                        alt="ReadIt-Later Logo" 
                        className="h-5 w-5" 
                      />
                      ReadIt-Later
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/apps/actionscam" className="w-full flex items-center gap-2">
                      <img 
                        src="/images/actionscam_logo.png" 
                        alt="ActionsCam Logo" 
                        className="h-5 w-5" 
                      />
                      ActionsCam
                    </Link>
                  </DropdownMenuItem>
                  {/* Add more apps here as needed */}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link
                href="/#contact"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
              
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span 
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-white shadow-lg md:hidden"
          >
            <div className="py-4 px-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/#features"
                  className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                
                <Link
                  href="/blog"
                  className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                
                <div className="py-2">
                  <div className="text-base font-medium text-gray-700 mb-2">Apps</div>
                  <Link
                    href="/apps/readit-later"
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2 pl-4 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ReadIt-Later
                  </Link>
                  <Link
                    href="/apps/actionscam"
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2 pl-4 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ActionsCam
                  </Link>
                </div>
                
                <Link
                  href="/#contact"
                  className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <Button variant="default" size="sm" className="w-full">
                  Get Started
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}