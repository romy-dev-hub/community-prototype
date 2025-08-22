"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Search } from 'lucide-react';
import { Sun, Moon } from 'lucide-react';

const links = [
{ href: "/", label: "Home" },
{ href: "/community", label: "Community" },
{ href: "/events", label: "Events" },
{ href: "/about", label: "About" },
];

//state and toggle function 
const [isDark, setIsDark] = useState(false);
const toggleDarkMode = () => {
  setIsDark(!isDark);
  document.documentElement.classList.toggle('dark');
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <motion.div 
      initial={{ y: -10, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.35 }}>
      <Link 
        href="/" 
        className="flex items-center gap-2">
        {/* Replace with your logo image if you want */}
        <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm" />
        <span className="text-xl font-bold tracking-tight">CommunityHub</span>
      </Link>
    </motion.div>

    {/* Desktop links */}
    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
      {links.map((l) => {
        const active = pathname === l.href;
        return (
          <div key={l.href} className="relative">
            <Link href={l.href} className={`transition-colors ${active ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}`}>
              {l.label}
            </Link>
            {active && (
            <motion.span layoutId="nav-underline" className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600" />
            )}
          </div>
        );
      })}
      <Link href="#join" className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition-colors">
        Join
      </Link>
    </div>
    <div className="hidden md:flex items-center relative">
       <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
       <input
         type="text"
         placeholder="Search posts..."
         className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
         onChange={(e) => console.log('Search:', e.target.value)} // Add search logic later
       />
    </div>
    <button
       aria-label="Toggle dark mode"
       className="p-2 rounded-lg hover:bg-slate-100 mr-2"
       onClick={toggleDarkMode}
       >
       {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </button>

    {/* Mobile button */}
    <button
      aria-label="Toggle menu"
      className="md:hidden p-2 rounded-lg hover:bg-slate-100"
      onClick={() => setOpen((v) => !v)}
    >
    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
    </nav>

    {/* Mobile menu */}
    <AnimatePresence>
       {open && (
       <motion.div
         initial={{ height: 0, opacity: 0 }}
         animate={{ height: "auto", opacity: 1 }}
         exit={{ height: 0, opacity: 0 }}
         className="md:hidden border-t border-slate-200 bg-white"
        >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
          {links.map((l) => (
          <Link
             key={l.href}
             href={l.href}
             className="py-2 text-slate-700 hover:text-blue-600"
             onClick={() => setOpen(false)}
            >
            {l.label}
          </Link>
          ))}
          <Link
            href="#join"
            className="mt-2 inline-flex w-full justify-center rounded-xl bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
            onClick={() => setOpen(false)}
            >
            Join
          </Link>
        </div>
       </motion.div>
       )}
    </AnimatePresence>
    </header>
  );
}