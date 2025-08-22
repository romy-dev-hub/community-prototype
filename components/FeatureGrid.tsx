"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Rocket, Code2, CalendarDays, Heart, BookOpen, GitBranch } from "lucide-react";

const features = [
  { icon: Users, title: "Friendly Community", desc: "Connect with developers at all levels in a welcoming, inclusive environment." },
  { icon: Code2, title: "Project Collaboration", desc: "Find teammates, share code, and build amazing projects together." },
  { icon: MessageSquare, title: "Active Discussions", desc: "Get answers, share knowledge, and engage in meaningful tech conversations." },
  { icon: BookOpen, title: "Learning Resources", desc: "Access tutorials, guides, and curated learning paths for all skill levels." },
  { icon: CalendarDays, title: "Regular Events", desc: "Join workshops, coding challenges, and networking sessions." },
  { icon: GitBranch, title: "Open Source", desc: "Contribute to open source projects and gain real-world experience." },
  { icon: Rocket, title: "Career Growth", desc: "Get career advice, portfolio reviews, and job opportunities." },
  { icon: Heart, title: "Supportive Culture", desc: "Learn from failures, celebrate successes, and grow together." },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Everything You Need to Grow as a Developer
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Our community provides the resources, connections, and support system to help you succeed in your developer journey.
        </motion.p>
        
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  <f.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}