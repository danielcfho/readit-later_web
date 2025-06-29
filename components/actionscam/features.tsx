"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Shield, Smartphone, Languages, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Dynamic Action Recognition",
    description: "Unlike static image apps, ActionsCam uses cutting-edge video analysis to understand your movements in real time, turning every gesture into a language lesson.",
    image: "/images/actionscam/actionscam_dynamic_action_recognition.jpeg",
    imageAlt: "ActionsCam Dynamic Action Recognition Screenshot"
  },
  {
    icon: Shield,
    title: "Privacy First, Offline Ready",
    description: "Powered by a local, open-source model, your data stays on your device—no internet needed, no privacy worries. Learn anywhere, anytime, securely.",
    image: "/images/actionscam/actionscam_privacy_first_offline_ready.PNG",
    imageAlt: "ActionsCam Privacy First Offline Ready Screenshot"
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "Powered by Apple's native translation API, ActionsCam supports a wide range of languages to match your learning goals.",
    image: "/images/actionscam/actionscam_multi-language_support.PNG",
    imageAlt: "ActionsCam Multi-Language Support Screenshot"
  },
  {
    icon: Target,
    title: "Speak & Score",
    description: "Practice pronunciation and get instant feedback to sound like a native speaker with our advanced speech recognition system.",
    image: "/images/actionscam/actionscam_speak_&_score.PNG",
    imageAlt: "ActionsCam Speak & Score Screenshot"
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Keep tabs on your mastered words and actions with personalized progress reports and detailed learning analytics.",
    image: "/images/actionscam/actionscam_track_your_progress.PNG",
    imageAlt: "ActionsCam Track Your Progress Screenshot"
  },
  {
    icon: Smartphone,
    title: "iPad Compatible",
    description: "Experience ActionsCam on your iPad with an optimized interface designed for larger screens and enhanced learning sessions.",
    image: "/images/actionscam/actionscam_ipad_compatible.png",
    imageAlt: "ActionsCam iPad Screenshot"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why ActionsCam{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Stands Out
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary features that make language learning through movement both effective and enjoyable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20`}>
                {/* Image Section */}
                <div className="flex-1 w-full max-w-sm">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={400}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-12 right-4 w-2 h-2 bg-white/20 rounded-full"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Simple, Ad-Free, Yours Forever
              </h3>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                No subscriptions, no in-app purchases, no ads—just a one-time purchase for a pure, distraction-free experience. ActionsCam is all about helping you focus on learning through movement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
