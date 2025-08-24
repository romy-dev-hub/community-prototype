'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section id="join" className="py-20 bg-gradient-to-r from-emerald-600 to-green-700 dark:from-emerald-700 dark:to-green-800 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
        <p className="mb-8 text-lg opacity-90">Join thousands of developers growing together. It&apos;s free and always will be.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors"
          >
            Create Account
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>
        <p className="mt-6 text-sm opacity-80">No credit card required. Free forever.</p>
      </motion.div>
    </section>
  );
}