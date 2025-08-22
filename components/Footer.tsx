'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="py-8 bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-200 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Subscribe to our newsletter"
            className="px-4 py-2 rounded-l-lg bg-gray-700 dark:bg-gray-900 text-white dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 dark:bg-blue-500 rounded-r-lg hover:bg-blue-700 dark:hover:bg-blue-600 text-white">
            Subscribe
          </button>
        </form>
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="hover:text-white dark:hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-white dark:hover:text-blue-400">LinkedIn</a>
          <a href="#" className="hover:text-white dark:hover:text-blue-400">GitHub</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Community Website. All rights reserved.</p>
      </div>
    </footer>
  );
}