"use client";

import { motion } from "framer-motion";
import { Camera, Shield, Smartphone, Languages, Target, Gamepad2, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Dynamic Action Recognition",
    description: "Unlike static image apps, ActionsCam uses cutting-edge video analysis to understand your movements in real time, turning every gesture into a language lesson."
  },
  {
    icon: Shield,
    title: "Privacy First, Offline Ready",
    description: "Powered by a local, open-source model, your data stays on your device—no internet needed, no privacy worries. Learn anywhere, anytime, securely."
  },
  {
    icon: Smartphone,
    title: "No Apple Intelligence Required",
    description: "Don't have the latest iPhone? No problem! ActionsCam runs smoothly on iPhone XR and above, using a lightweight, high-performance model built for everyone."
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "Powered by Apple's native translation API, ActionsCam supports a wide range of languages to match your learning goals."
  },
  {
    icon: Target,
    title: "Speak & Score",
    description: "Practice pronunciation and get instant feedback to sound like a native speaker with our advanced speech recognition system."
  },
  {
    icon: Gamepad2,
    title: "Game Mode",
    description: "Follow fun prompts to mimic actions, earn scores, and level up your skills in an engaging, gamified learning experience."
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Keep tabs on your mastered words and actions with personalized progress reports and detailed learning analytics."
  },
  {
    icon: Users,
    title: "Designed for Everyone",
    description: "With voice guidance, large text, and accessibility-friendly design, it's built for all ages and abilities, from kids to adults."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
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
          className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Simple, Ad-Free, Yours Forever
          </h3>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            No subscriptions, no in-app purchases, no ads—just a one-time purchase for a pure, distraction-free experience. ActionsCam is all about helping you focus on learning through movement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
