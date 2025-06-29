"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Heart, Globe } from "lucide-react";

const perks = [
  {
    icon: Zap,
    title: "Real-Time Action Learning",
    description: "Point your camera, make a move, and instantly see the word, pronunciation, and translation in your chosen language."
  },
  {
    icon: Heart,
    title: "Engaging Game Experience",
    description: "Whether you're a traveler picking up essential verbs, a beginner diving into a new language, or a teacher looking for a playful way to engage kids."
  },
  {
    icon: Globe,
    title: "Perfect for All Learners",
    description: "From travelers learning essential verbs to teachers engaging kids, ActionsCam makes learning feel like a game for all ages and abilities."
  }
];

export function KeyPerks() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Moving,{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Get Learning!
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            With ActionsCam, language learning isn&apos;t about memorizing words—it&apos;s about living them. 
            Powered by SmolVLM2 and Apple&apos;s MLX for fast, accurate, and fun lessons.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <perk.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {perk.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {perk.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Language Learning?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Download ActionsCam today and start speaking a new language with every move you make! 
              Fast, accurate, and fun lessons right in your pocket.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">One-time purchase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">No ads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Privacy focused</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Works offline</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
