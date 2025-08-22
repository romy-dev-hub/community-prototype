"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
            Connect, Learn & Grow Together
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-gray-300 max-w-prose">
            Join our community of developers, designers, and tech enthusiasts. Share knowledge, collaborate on projects, and accelerate your career in a supportive environment.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/login" className="inline-flex items-center rounded-xl bg-emerald-600 dark:bg-emerald-500 px-6 py-3 text-white shadow hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors">
               Get Started Free
            </a>
            <a href="#features" className="inline-flex items-center rounded-xl bg-white dark:bg-gray-800 px-6 py-3 text-slate-900 dark:text-gray-300 shadow-sm ring-1 ring-slate-200 dark:ring-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors">
              Explore Features
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-2">
            {/* Avatar 1 */}
            <div className="h-10 w-10 rounded-full bg-emerald-200 dark:bg-emerald-800 border-2 border-white dark:border-gray-900 overflow-hidden">
                <Image
                    src="/images/avatar1.jpg" 
                    alt="Community member"
                    width={40}
                    height={40}
                    className="object-cover"
                />
            </div>
  
            {/* Avatar 2  */}
            <div className="h-10 w-10 rounded-full bg-emerald-300 dark:bg-emerald-700 border-2 border-white dark:border-gray-900 overflow-hidden">
                <Image
                   src="/images/avatar2.jpg" 
                   alt="Community member"
                   width={40}
                   height={40}
                   className="object-cover"
                />
            </div>
  
            {/* Avatar 3  */}
            <div className="h-10 w-10 rounded-full bg-emerald-400 dark:bg-emerald-600 border-2 border-white dark:border-gray-900 overflow-hidden">
                <Image
                    src="/images/avatar3.jpg" // Replace with your image path
                    alt="Community member"
                    width={40}
                    height={40}
                    className="object-cover"
                />
            </div>
          </div>
            <p className="text-sm text-slate-600 dark:text-gray-400">
              Join <span className="font-semibold text-emerald-600 dark:text-emerald-400">2,500+</span> developers in our community
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/11] order-1 lg:order-2"
        >
          {/* Replace with actual hero image */}
          <div className="w-full h-full rounded-3xl bg-gradient-to-r from-emerald-400 to-green-500 dark:from-emerald-600 dark:to-green-700 shadow-xl flex items-center justify-center">
            <Image
              src="/images/hero.jpg"
              alt="Community Collaboration"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <span className="text-white text-lg font-medium">Community Collaboration Image</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}