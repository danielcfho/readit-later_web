"use client";

import { motion } from "framer-motion";
import { Brain, Download, Cpu, RefreshCw, Zap } from "lucide-react";

const steps = [
  {
    icon: <Download className="h-8 w-8 text-blue-500" />,
    title: "模型下載",
    description: "從中央伺服器下載預訓練 AI 模型",
    color: "blue"
  },
  {
    icon: <Cpu className="h-8 w-8 text-green-500" />,
    title: "本地載入",
    description: "應用程式將模型載入裝置記憶體",
    color: "green"
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    title: "推論處理",
    description: "使用本地資料進行 AI 推論運算",
    color: "purple"
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-orange-500" />,
    title: "回饋優化",
    description: "收集回饋，中央更新模型後推送",
    color: "orange"
  }
];

export function EdgeAIWorkflow() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100"
          >
            Edge AI 如何運作？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            了解 Edge AI 系統的核心運作流程，從模型部署到持續優化的完整循環
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop workflow */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection lines */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 to-orange-200 transform -translate-y-1/2" />
              
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Step card */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border dark:border-gray-700 text-center relative z-10">
                      <div className={`inline-flex p-4 rounded-full bg-${step.color}-100 dark:bg-${step.color}-900/30 mb-4`}>
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>

                    {/* Animated step number */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-${step.color}-500 text-white rounded-full flex items-center justify-center text-sm font-bold z-20`}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile workflow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className={`flex-shrink-0 p-3 rounded-full bg-${step.color}-100`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 bg-${step.color}-500 text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key benefits section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center mb-8">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                關鍵優勢
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Edge AI 運作流程帶來的核心價值
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">離線運作</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">推論過程完全離線，無需網路連線</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">🛡️</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">隱私保護</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">資料處理在本地，保護敏感資訊</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">🔄</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">持續學習</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">中央管理與本地處理完美結合</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
