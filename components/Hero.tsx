"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
            Build, Learn & Grow Together
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-gray-300 max-w-prose">
            Welcome to <span className="font-semibold">CommunityHub</span>, a place where developers share knowledge, showcase projects, and support each other.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#join" className="inline-flex items-center rounded-xl bg-blue-600 dark:bg-blue-500 px-5 py-3 text-white shadow hover:bg-blue-700 dark:hover:bg-blue-600">
              Join the Community
            </a>
            <a href="#latest" className="inline-flex items-center rounded-xl bg-white dark:bg-gray-800 px-5 py-3 text-slate-900 dark:text-gray-300 shadow-sm ring-1 ring-slate-200 dark:ring-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700">
              See What's New
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/11] order-1 lg:order-2"
        >
          <Image
            src="/images/hero.jpg"
            alt="Community working together"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-3xl object-cover shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}