"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
return (
<section className="relative overflow-hidden">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<motion.div
initial={{ y: 20, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
viewport={{ once: true, amount: 0.4 }}
transition={{ duration: 0.6 }}
className="order-2 lg:order-1"
>
<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
Build, Learn & Grow Together
</h1>
<p className="mt-4 text-lg text-slate-600 max-w-prose">
Welcome to <span className="font-semibold">CommunityHub</span>, a place where developers share knowledge, showcase projects, and support each other.
</p>
<div className="mt-6 flex flex-wrap gap-3">
<a href="#join" className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700">
Join the Community
</a>
<a href="#latest" className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
See What's New
</a>
</div>
</motion.div>


<motion.div
initial={{ scale: 0.96, opacity: 0 }}
whileInView={{ scale: 1, opacity: 1 }}
viewport={{ once: true, amount: 0.4 }}
transition={{ duration: 0.6 }}
className="relative aspect-[16/11] order-1 lg:order-2"
>
<Image
src="/images/hero.jpg"
alt="Community working together"
fill
className="rounded-3xl object-cover shadow-xl"
priority
/>
</motion.div>
</div>
</section>
);
}