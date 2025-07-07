"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { BookOpenText, Link2, Tag, FolderTree, Cloud } from "lucide-react";

const features = [
  {
    icon: <BookOpenText className="h-10 w-10 text-blue-500" />,
    title: "Offline Reading",
    description:
      "Save articles and access them anywhere, anytime, even without an internet connection.",
  },
  {
    icon: <Link2 className="h-10 w-10 text-indigo-500" />,
    title: "Quick Save",
    description:
      "Save links with a single tap using our browser extensions and mobile share sheets.",
  },
  {
    icon: <FolderTree className="h-10 w-10 text-purple-500" />,
    title: "Smart Organization",
    description:
      "Automatically categorize your saved content by topics, publications, and reading time.",
  },
  {
    icon: <Tag className="h-10 w-10 text-pink-500" />,
    title: "Custom Tags",
    description:
      "Create your own tagging system to find saved articles quickly when you need them.",
  },
  {
    icon: <Cloud className="h-10 w-10 text-cyan-500" />,
    title: "Cloud Sync",
    description:
      "Your reading list syncs seamlessly across all your devices in real-time.",
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

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100"
          >
            Simplify Your Reading Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            ReadIt-Later transforms how you consume content on the web, helping you
            save, organize, and read on your own terms.
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
                    <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
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
              className="relative aspect-[3/4] w-full max-w-sm mx-auto"
            >
              <Image
                src="https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="ReadIt-Later app interface showing saved articles"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}