import { notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Mock data (replace with API/CMS later)
const posts = [
  { id: '1', title: 'Welcome to Our Community', content: 'Full content here...', image: '/images/post1.jpg' },
  { id: '2', title: 'Meet the Members', content: 'Full content here...', image: '/images/post2.jpg' },
  { id: '3', title: 'Upcoming Events', content: 'Full content here...', image: '/images/post3.jpg' },
];

// ADD THIS ONE FUNCTION - 3 lines of code!
export async function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);
  if (!post) notFound();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600">{post.content}</p>
        </motion.div>
      </div>
    </section>
  );
}