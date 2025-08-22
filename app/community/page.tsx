'use client';

import { motion } from "framer-motion";
import { Users, MessageSquare, Calendar, BookOpen } from "lucide-react";

export default function Community() {
  const stats = [
    { icon: Users, value: "2,500+", label: "Members" },
    { icon: MessageSquare, value: "15k+", label: "Monthly Messages" },
    { icon: Calendar, value: "20+", label: "Events Monthly" },
    { icon: BookOpen, value: "500+", label: "Resources" },
  ];

  const forums = [
    { name: "Web Development", threads: 1245, members: 892 },
    { name: "Mobile Development", threads: 867, members: 654 },
    { name: "DevOps & Infrastructure", threads: 543, members: 421 },
    { name: "AI & Machine Learning", threads: 789, members: 567 },
    { name: "Career Advice", threads: 932, members: 1204 },
    { name: "Project Feedback", threads: 678, members: 835 },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Our Community</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of developers sharing knowledge, collaborating on projects, and growing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"
              >
                <stat.icon className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-gray-300 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forums Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Discussion Forums</h2>
            <p className="mt-4 text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join conversations on various tech topics and connect with like-minded developers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forums.map((forum, index) => (
              <motion.div
                key={forum.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{forum.name}</h3>
                <div className="flex justify-between mt-4 text-sm text-slate-600 dark:text-gray-300">
                  <span>{forum.threads} threads</span>
                  <span>{forum.members} members</span>
                </div>
                <button className="w-full mt-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                  Join Discussion
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to Join?</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">
              Create an account today and start connecting with developers worldwide
            </p>
            <div className="mt-8">
              <a
                href="/login"
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}