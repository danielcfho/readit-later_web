"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Layers, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: <Layers className="h-10 w-10 text-blue-500" />,
    title: "Multiple Applications",
    description:
      "Access a suite of productivity and lifestyle applications designed to enhance your digital experience.",
  },
  {
    icon: <Shield className="h-10 w-10 text-indigo-500" />,
    title: "Secure & Private",
    description:
      "All our applications prioritize your privacy and security with industry-standard protections.",
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-500" />,
    title: "Fast & Efficient",
    description:
      "Optimized for performance, our apps help you accomplish more in less time.",
  },
  {
    icon: <Globe className="h-10 w-10 text-cyan-500" />,
    title: "Cross-Platform",
    description:
      "Use our applications across all your devices with seamless synchronization.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function MainFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Why Choose dchome
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our suite of applications is designed with your needs in mind,
            providing solutions that make digital life better.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              ref={ref}
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="space-y-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="order-1 md:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square w-full max-w-sm mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                    <img src="/images/readit-later-icon.png" alt="ReadIt-Later" className="h-16 w-16" />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center opacity-50">
                    <span className="text-2xl font-bold text-gray-400">+</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center opacity-50">
                    <span className="text-2xl font-bold text-gray-400">+</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center opacity-50">
                    <span className="text-2xl font-bold text-gray-400">+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}