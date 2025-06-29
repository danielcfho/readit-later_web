"use client";

import { motion } from "framer-motion";
import { Smartphone, Camera, Mic, Brain, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Advanced Computer Vision",
    description: "Real-time action recognition using cutting-edge AI models"
  },
  {
    icon: Mic,
    title: "Speech Recognition",
    description: "Practice pronunciation with instant feedback"
  },
  {
    icon: Brain,
    title: "Smart Learning",
    description: "Personalized progress tracking and adaptive learning"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for smooth performance on iPhone XR+"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens on your device"
  },
  {
    icon: Smartphone,
    title: "Native iOS",
    description: "Built specifically for iOS with native performance"
  }
];

export function DeviceShowcase() {
  return (
    <section id="showcase" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Device mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-96">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl">
                {/* Screen */}
                <div className="absolute inset-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-[2.5rem] overflow-hidden">
                  {/* App Interface Mockup */}
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-white p-6">
                    <div className="text-center mt-8">
                      <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <Camera className="h-8 w-8 text-orange-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Wave Your Hand</h4>
                      <p className="text-sm text-gray-600 mb-6">Get ready to learn &quot;wave&quot; in Spanish</p>
                      
                      {/* Action Cards */}
                      <div className="space-y-3">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">English</span>
                            <span className="text-lg font-bold text-gray-900">Wave</span>
                          </div>
                        </div>
                        <div className="bg-orange-500 rounded-xl p-3 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-white">Español</span>
                            <span className="text-lg font-bold text-white">Saludar</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-20 w-12 h-12 bg-orange-200 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 bottom-32 w-8 h-8 bg-red-200 rounded-full opacity-60"
              />
            </div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Powered by{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Advanced AI
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ActionsCam leverages state-of-the-art machine learning models to provide 
                real-time action recognition and language learning in your pocket.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
