'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Github, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/register logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-900 dark:to-gray-800 pt-20 flex items-center justify-center px-4">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.gif" 
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-md w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-lg p-8 backdrop-blur-md border border-white/20"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 mb-4">
              {/* Logo Image */}
              <div className="h-25 w-25 relative">
                <Image
                  src="/images/logo.png" 
                  alt="DevCommunity Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="text-slate-600 dark:text-gray-300 mt-2">
              {isLogin ? 'Sign in to your account' : 'Join our community of developers'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required={!isLogin}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Your name"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-white pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-slate-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-slate-400" />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  required={!isLogin}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-white"
                  placeholder="••••••••"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
            >
              {isLogin ? 'Sign in' : 'Create account'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-900 text-slate-600 dark:text-gray-300">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700">
                <Mail className="h-5 w-5 mr-2" />
                Google
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600 dark:text-gray-300">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <Link 
            href="/" 
            className="text-sm text-slate-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}