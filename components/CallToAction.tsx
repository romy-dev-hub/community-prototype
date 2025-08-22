'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-4">Join Our Community Today</h2>
        <p className="mb-6 text-lg">Connect, learn, and grow with like-minded developers and enthusiasts.</p>
        <a
          href="#"
          className="inline-block bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
}