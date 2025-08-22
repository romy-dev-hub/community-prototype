"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Rocket, Code2, CalendarDays, Heart } from "lucide-react";

const features = [
{ icon: Users, title: "Friendly Community", desc: "Meet makers, learners, and pros who care about helping each other." },
{ icon: MessageSquare, title: "Discussions", desc: "Ask questions, share knowledge, and get feedback fast." },
{ icon: Code2, title: "Show & Tell", desc: "Post your projects, get reviews, and learn best practices." },
{ icon: Rocket, title: "Guided Growth", desc: "Find curated paths, resources, and challenges to level up." },
{ icon: CalendarDays, title: "Events", desc: "Join weekly talks, workshops, and community meetups." },
{ icon: Heart, title: "Supportive Culture", desc: "Celebrate wins, learn from fails, and keep going." },
];

export default function FeatureGrid() {
return (
<section className="mt-20">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What You\'ll Find</h2>
<p className="mt-3 text-slate-600">Everything you need to build in public and grow with peers.</p>
</div>


<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{features.map((f, i) => (
<motion.div
key={f.title}
initial={{ y: 20, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.45, delay: i * 0.05 }}
className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
>
<div className="flex items-center gap-4">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<f.icon className="h-6 w-6" />
</span>
<h3 className="text-lg font-semibold">{f.title}</h3>
</div>
<p className="mt-3 text-slate-600">{f.desc}</p>
</motion.div>
))}
</div>
</section>
);
}