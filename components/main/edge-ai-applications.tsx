"use client";

import { motion } from "framer-motion";
import { Car, ShoppingCart, Smartphone, Camera, Cpu, Wifi } from "lucide-react";

const applications = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-blue-500" />,
    title: "智慧零售",
    description: "店內攝影機與智慧貨架收集顧客行為分析",
    details: [
      "即時人流統計與停留時間分析",
      "庫存監控與自動補貨提醒",
      "快速結帳體驗優化"
    ],
    color: "blue"
  },
  {
    icon: <Car className="h-8 w-8 text-green-500" />,
    title: "自動駕駛",
    description: "5G 邊緣運算提供即時交通資訊與安全警示",
    details: [
      "多視角安全風險共享",
      "即時高精度地圖更新",
      "Verizon + Nissan 實測案例"
    ],
    color: "green"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-purple-500" />,
    title: "手機 AI 功能",
    description: "裝置端照片與影片編輯處理",
    details: [
      "物件移除與背景模糊",
      "離線編輯，無需上傳",
      "保護隱私，提升便利性"
    ],
    color: "purple"
  }
];

export function EdgeAIApplications() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100"
          >
            Edge AI 真實應用場景
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            從零售到車聯網，Edge AI 正在各個產業創造革命性的應用體驗
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-${app.color}-100 dark:bg-${app.color}-900/30 mr-4`}>
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{app.title}</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">{app.description}</p>
              
              <div className="space-y-2">
                {app.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + detailIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                  >
                    <div className={`w-2 h-2 bg-${app.color}-500 rounded-full mr-3 flex-shrink-0`} />
                    {detail}
                  </motion.div>
                ))}
              </div>

              {/* Interactive animation based on application type */}
              <div className="mt-6 relative h-16 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                {app.title === "智慧零售" && (
                  <motion.div
                    animate={{ x: [10, 60, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 transform -translate-y-1/2"
                  >
                    <Camera className="h-6 w-6 text-blue-500" />
                  </motion.div>
                )}
                
                {app.title === "自動駕駛" && (
                  <>
                    <motion.div
                      animate={{ x: [10, 150] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 transform -translate-y-1/2"
                    >
                      <Car className="h-6 w-6 text-green-500" />
                    </motion.div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <Wifi className="h-5 w-5 text-green-400" />
                    </div>
                  </>
                )}
                
                {app.title === "手機 AI 功能" && (
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <Cpu className="h-6 w-6 text-purple-500" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
