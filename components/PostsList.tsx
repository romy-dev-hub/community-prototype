'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PostsList() {
  const posts = [
    {
      id: 1,
      title: 'Welcome to Our Community',
      excerpt: 'Get to know what this community is about and how you can contribute.',
      image: '/images/post1.jpg',
    },
    {
      id: 2,
      title: 'Meet the Members',
      excerpt: 'A showcase of our active members and their projects.',
      image: '/images/post2.jpg',
    },
    {
      id: 3,
      title: 'Upcoming Events',
      excerpt: 'Check out the events we have planned for the community.',
      image: '/images/post3.jpg',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Community Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-lg overflow-hidden bg-white"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href={`/post/${post.id}`} className="text-blue-600 font-medium hover:underline">
                  Read more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
