"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const perks = [
  {
    title: "Offline Reading Bliss",
    description:
      "Download articles automatically for seamless offline reading. Perfect for flights, commutes, or anywhere without reliable internet.",
    image: "https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Link Saving Simplified",
    description:
      "Save links from anywhere with our browser extensions, share menu integration, and email forwarding. Reading interesting content has never been easier.",
    image: "https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-indigo-500/20 to-transparent",
  },
  {
    title: "Organize with Ease",
    description:
      "Create custom lists and folders to organize your saved content exactly how you want. Group articles by project, topic, or priority.",
    image: "https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Tagging for Quick Finds",
    description:
      "Add custom tags to articles for powerful filtering and searching. Find exactly what you're looking for in seconds, not minutes.",
    image: "https://images.pexels.com/photos/6177612/pexels-photo-6177612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-pink-500/20 to-transparent",
  },
  {
    title: "Sync & More",
    description:
      "Seamlessly sync your reading list across all your devices. Start reading on your phone and continue exactly where you left off on your computer.",
    image: "https://images.pexels.com/photos/5077059/pexels-photo-5077059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-cyan-500/20 to-transparent",
  },
];

export function KeyPerks() {
  return (
    <section id="perks" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100"
          >
            Five Key Perks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            ReadIt-Later brings you powerful features designed to transform your
            reading experience from chaotic to calm.
          </motion.p>
        </div>

        <div className="space-y-40">
          {perks.map((perk, index) => (
            <PerkSection key={index} perk={perk} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PerkSection({ perk, index }: { perk: typeof perks[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [50, -50]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      <div className={`absolute inset-0 bg-gradient-radial ${perk.color} opacity-50`} />
      
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
        index % 2 === 0 ? "" : "md:flex-row-reverse"
      }`}>
        <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              {perk.title}
            </h3>
            <p className="text-lg text-gray-600">
              {perk.description}
            </p>
          </motion.div>
        </div>
        
        <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
          <motion.div 
            style={{ y, opacity }} 
            className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src={perk.image}
              alt={perk.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}