"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDark);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 border-b border-slate-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ y: -10, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.35 }}
        >
          <Link href="/" className="flex items-center gap-2">
            {/* Logo Image  */}
            <div className="h-8 w-8 relative">
              <Image
                src="/images/logo.png" 
                alt="DevCommunity Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">DevCommunity</span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <div key={l.href} className="relative">
                <Link href={l.href} className={`transition-colors ${active ? "text-emerald-600 dark:text-emerald-400" : "text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"}`}>
                  {l.label}
                </Link>
                {active && (
                  <motion.span layoutId="nav-underline" className="absolute left-0 -bottom-1 h-0.5 w-full bg-emerald-600 dark:bg-emerald-400" />
                )}
              </div>
            );
          })}
          <Link href="/login" className="inline-flex items-center rounded-xl bg-emerald-600 dark:bg-emerald-500 px-4 py-2 text-white shadow hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors">
            Join Now
          </Link>
          <button
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800"
            onClick={toggleDarkMode}
          >
            {isDark ? <Sun className="h-6 w-6 text-gray-300" /> : <Moon className="h-6 w-6 text-slate-700" />}
          </button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6 text-gray-900 dark:text-gray-300" /> : <Menu className="h-6 w-6 text-gray-900 dark:text-gray-300" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="py-2 text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="mt-2 inline-flex w-full justify-center rounded-xl bg-emerald-600 dark:bg-emerald-500 px-4 py-2 text-white shadow hover:bg-emerald-700 dark:hover:bg-emerald-600"
                onClick={() => setOpen(false)}
              >
                Join Now
              </Link>
              <button
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="mt-2 inline-flex w-full justify-center rounded-xl bg-gray-100 dark:bg-gray-800 px-4 py-2 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-gray-700"
                onClick={() => {
                  toggleDarkMode();
                  setOpen(false);
                }}
              >
                {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}