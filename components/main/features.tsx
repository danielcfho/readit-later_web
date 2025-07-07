"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Layers, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: <Globe className="h-10 w-10 text-blue-500" />,
    title: "什麼是 Edge AI？",
    description:
      "Edge AI 指的是將 AI 運算（特別是推論）直接在裝置端或邊緣伺服器上執行，而非傳送到雲端。這讓資料能在本地即時處理，提升效率與隱私。",
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-500" />,
    title: "主要優勢",
    description:
      "極低延遲回應、可離線運作、增強隱私與安全、節省頻寬與雲端成本、降低能耗，提升整體效率。",
  },
  {
    icon: <Shield className="h-10 w-10 text-indigo-500" />,
    title: "技術挑戰",
    description:
      "裝置資源有限（算力、記憶體）、分散式模型管理與更新困難、邊緣安全風險、多樣硬體適配與資料管理複雜。",
  },
  {
    icon: <Layers className="h-10 w-10 text-cyan-500" />,
    title: "未來趨勢",
    description:
      "隨著行動裝置運算能力提升與專用 AI 晶片普及，Edge AI 正成為下一個技術前沿，特別是行動裝置端 AI 應用。",
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
            Edge AI 重點摘要
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            將 AI 智慧帶到資料產生現場，兼顧即時性、隱私與效率，正是 Edge AI 的核心價值。
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
              className="relative aspect-square w-full max-w-sm mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center">
                    <div className="text-4xl">🧠</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center">
                    <div className="text-4xl">📱</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center">
                    <div className="text-4xl">⚡</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center">
                    <div className="text-4xl">🛡️</div>
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