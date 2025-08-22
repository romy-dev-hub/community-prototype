"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Code2, Calendar } from "lucide-react";

const stats = [
  { icon: Users, number: "2,500+", label: "Active Members" },
  { icon: MessageSquare, number: "15,000+", label: "Monthly Conversations" },
  { icon: Code2, number: "500+", label: "Projects Shared" },
  { icon: Calendar, number: "20+", label: "Events Monthly" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-emerald-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
              <div className="text-sm text-slate-600 dark:text-gray-300 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}