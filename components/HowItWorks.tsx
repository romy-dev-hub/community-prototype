"use client";

import { motion } from "framer-motion";
import { UserPlus, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up in seconds with GitHub, Google, or your email"
  },
  {
    icon: Users,
    title: "Join Communities",
    description: "Find groups that match your interests and skill level"
  },
  {
    icon: Rocket,
    title: "Start Participating",
    description: "Join discussions, events, and collaborative projects"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">How It Works</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Getting started is easy. Join our community in three simple steps and begin your journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6">
                  <step.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-gray-300">{step.description}</p>
              <div className="mt-4 text-2xl font-bold text-emerald-600 dark:text-emerald-400">{i + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}