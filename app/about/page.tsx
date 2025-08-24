'use client';

import { motion } from "framer-motion";
import { Users, Target, Heart, Globe } from "lucide-react";
import Image from "next/image";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Inclusivity",
      description: "We welcome developers of all skill levels and backgrounds."
    },
    {
      icon: Target,
      title: "Growth",
      description: "We're committed to helping every member learn and improve."
    },
    {
      icon: Heart,
      title: "Support",
      description: "We foster a supportive environment where everyone can thrive."
    },
    {
      icon: Globe,
      title: "Connection",
      description: "We connect developers across the globe to share knowledge."
    }
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
          >
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">About Our Community</h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
                We&apos;re a global community of developers passionate about learning, sharing, and growing together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            <p className="mt-4 text-slate-600 dark:text-gray-300">
              Our mission is to create a welcoming space where developers can connect, learn from each other, 
              and advance their careers through meaningful collaboration and knowledge sharing.
            </p>
            <p className="mt-4 text-slate-600 dark:text-gray-300">
              Since our founding in 2020, we've grown to over 2,500 members from around the world, 
              all united by a passion for technology and community.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-80 rounded-2xl overflow-hidden">
              {/* IMAGE PLACEHOLDER */}
              
                <Image
                  src="/images/post2.jpg"  
                  alt="Community members collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              
              <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-green-500 dark:from-emerald-600 dark:to-green-700 flex items-center justify-center text-white">
                <div className="text-center p-4">
                  <p className="text-lg font-medium">About Community Image</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Values</h2>
              <p className="mt-4 text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                These core values guide everything we do as a community
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
                  <value.icon className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-gray-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Our Team</h2>
              <p className="mt-4 text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                The passionate volunteers who keep our community running
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-emerald-200 dark:bg-emerald-800 mb-4 overflow-hidden">
                  {/* TEAM MEMBER IMAGE PLACEHOLDER - REPLACE WITH ACTUAL IMAGE */}
                  
                    <Image
                      src={`/images/member-${item}.jpg`}  // Replace with your image path
                      alt={`Team member ${item}`}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  
                  <div className="w-full h-full bg-emerald-400 dark:bg-emerald-600 flex items-center justify-center text-white">
                    <span className="text-sm">Team Photo</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Team Member {item}</h3>
                <p className="text-emerald-600 dark:text-emerald-400">Role</p>
                <p className="mt-2 text-slate-600 dark:text-gray-300">
                  Short bio about this team member and their contributions to the community.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}