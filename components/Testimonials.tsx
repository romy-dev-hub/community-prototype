'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'Frontend Developer',
      feedback: 'This community helped me grow professionally and meet amazing people!',
      avatar: '/images/avatar1.jpg',
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'Backend Engineer',
      feedback: 'Great events and opportunities to collaborate on projects.',
      avatar: '/images/avatar2.jpg',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What People Say</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-lg bg-gray-50"
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={80}
                height={80}
                className="mx-auto rounded-full mb-4"
              />
              <p className="text-gray-600 mb-4 italic">"{t.feedback}"</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
