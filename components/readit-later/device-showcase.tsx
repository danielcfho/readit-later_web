"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Tablet, Laptop, Watch } from "lucide-react";

const devices = [
  {
    id: "iphone",
    name: "iPhone",
    icon: <Smartphone className="h-5 w-5" />,
    image: "/images/readit-later/model_iphone.png",
    features: [
      "Quick save from share menu",
      "Customizable reading view",
      "Offline reading for commutes",
      "Dark mode for night reading",
    ],
  },
  {
    id: "ipad",
    name: "iPad",
    icon: <Tablet className="h-5 w-5" />,
    image: "/images/readit-later/model_ipad.png",
    features: [
      "Split-screen compatibility",
      "Enhanced reading layout",
      "Pencil support for annotations",
      "Larger reading surface",
    ],
  },
  {
    id: "mac",
    name: "Mac",
    icon: <Laptop className="h-5 w-5" />,
    image: "/images/readit-later/model_mac.png",
    features: [
      "Browser extension integration",
      "Keyboard shortcuts",
      "Advanced organization tools",
      "Reading statistics dashboard",
    ],
  },
  {
    id: "watch",
    name: "Watch",
    icon: <Watch className="h-5 w-5" />,
    image: "/images/readit-later/model_watch.png",
    features: [
      "Quick reference on the go",
      "Listen to articles with audio",
      "Reading time notifications",
      "Glance summaries",
    ],
  },
];

export function DeviceShowcase() {
  const [activeTab, setActiveTab] = useState("iphone");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="devices" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100"
          >
            Available on All Your Devices
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            ReadIt-Later syncs seamlessly across all your Apple devices,
            providing a consistent reading experience wherever you are.
          </motion.p>
        </div>

        <Tabs
          defaultValue="iphone"
          onValueChange={setActiveTab}
          className="mx-auto max-w-4xl"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              {devices.map((device) => (
                <TabsTrigger
                  key={device.id}
                  value={device.id}
                  className="flex flex-col items-center p-3 gap-1"
                >
                  {device.icon}
                  <span className="text-xs">{device.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="relative min-h-[500px] md:min-h-[600px]">
            {devices.map((device) => (
              <TabsContent
                key={device.id}
                value={device.id}
                className="absolute inset-0 w-full h-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                  <div className="order-2 md:order-1">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        ReadIt-Later for {device.name}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        Experience ReadIt-Later&apos;s powerful features optimized for your {device.name}.
                      </p>

                      <ul className="space-y-3">
                        {device.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            className="flex items-center"
                          >
                            <svg
                              className="h-5 w-5 text-blue-500 mr-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <Button size="lg" className="mt-4">
                        Download for {device.name}
                      </Button>
                    </motion.div>
                  </div>

                  <div className="order-1 md:order-2 flex justify-center items-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={device.id}
                        initial={{ opacity: 0, scale: 0.8, rotate: device.id === "iphone" || device.id === "watch" ? -15 : 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: device.id === "iphone" || device.id === "watch" ? 0 : 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className={`relative ${
                          device.id === "iphone"
                            ? "w-48 h-96"
                            : device.id === "ipad"
                              ? "w-80 h-60"
                              : device.id === "mac"
                                ? "w-96 h-64"
                                : "w-40 h-48"
                        }`}
                      >
                        <div 
                          className={`relative w-full h-full overflow-hidden `}
                        >
                          <Image
                            src={device.image}
                            alt={`ReadIt-Later on ${device.name}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}