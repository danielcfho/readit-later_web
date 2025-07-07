"use client";

import { motion } from "framer-motion";
import { Cloud, Smartphone, Zap, Shield, Wifi, WifiOff } from "lucide-react";

export function EdgeAIComparison() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100"
          >
            Edge AI vs Cloud AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            了解 Edge AI 與傳統 Cloud AI 的核心差異，以及為什麼 Edge AI 正成為下一個技術趨勢
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Cloud AI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <Cloud className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Cloud AI</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Wifi className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-600 dark:text-gray-300">需要網路連線</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-yellow-500 mr-3" />
                <span className="text-gray-600 dark:text-gray-300">較高運算能力</span>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">挑戰</h4>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• 網路延遲影響回應時間</li>
                  <li>• 隱私資料需上傳雲端</li>
                  <li>• 頻寬成本較高</li>
                  <li>• 離線時無法運作</li>
                </ul>
              </div>
            </div>

            {/* Animation: Data flow to cloud */}
            <div className="mt-6 relative h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <motion.div
                animate={{ x: [0, 200, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Cloud className="h-6 w-6 text-blue-500" />
              </div>
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Smartphone className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </div>
            </div>
          </motion.div>

          {/* Edge AI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 shadow-lg border border-green-200 dark:border-green-700"
          >
            <div className="flex items-center mb-6">
              <Smartphone className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Edge AI</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <WifiOff className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-600 dark:text-gray-300">可離線運作</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-600 dark:text-gray-300">隱私保護</span>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">優勢</h4>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• 極低延遲，即時回應</li>
                  <li>• 資料不離開裝置</li>
                  <li>• 節省頻寬成本</li>
                  <li>• 離線也能運作</li>
                </ul>
              </div>
            </div>

            {/* Animation: Local processing */}
            <div className="mt-6 relative h-20 bg-green-100 dark:bg-green-800/30 rounded-lg overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Smartphone className="h-6 w-6 text-green-600" />
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-green-600 dark:text-green-400 font-medium">
                本地處理
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
