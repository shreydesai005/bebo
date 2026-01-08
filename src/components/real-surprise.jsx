"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = [
  "/image11.jpeg",
  "/image6.jpeg",
  "/image5.jpeg",
  "/image10.jpeg",
  "/image9.jpeg",
  "/image4.jpeg",
  "/image7.jpeg",
  "/image0.jpeg",
  "/image8.jpeg",
  "/image2.jpeg",
  "/image1.jpeg",
  "/image3.jpeg",
]

export default function RealSurprise() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    },6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-screen"
        >
          <Image
            src={images[index]}
            alt="Slideshow"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
