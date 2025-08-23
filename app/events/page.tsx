'use client';

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import Image from "next/image";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "React Workshop for Beginners",
      date: "June 15, 2023",
      time: "6:00 PM - 8:00 PM UTC",
      location: "Online",
      attendees: 120,
      image: "/images/react-workshop.jpg",
    },
    {
      id: 2,
      title: "Web Development Hackathon",
      date: "June 22-23, 2023",
      time: "All Day",
      location: "Online",
      attendees: 85,
      image: "/images/web-dev-hackathon.jpg",
    },
    {
      id: 3,
      title: "Tech Career Panel Discussion",
      date: "July 5, 2023",
      time: "7:00 PM - 9:00 PM UTC",
      location: "Online",
      attendees: 65,
      image: "/images/tech-career-disc.jpg",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Introduction to Node.js",
      date: "May 20, 2023",
      attendees: 95,
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      date: "May 12, 2023",
      attendees: 78,
    },
    {
      id: 6,
      title: "Open Source Contribution Workshop",
      date: "April 28, 2023",
      attendees: 112,
    },
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
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Community Events</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join our workshops, hackathons, and meetups to learn, connect, and grow with fellow developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
            <p className="mt-4 text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Mark your calendar and join our next events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
              >
                <div className="h-48 relative">
                  {/* EVENT IMAGE PLACEHOLDER */}
                  
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                   
                  
                  <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-green-500 dark:from-emerald-600 dark:to-green-700 flex items-center justify-center text-white">
                    <div className="text-center p-4">
                      <p className="font-medium">{event.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                  <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Past Events</h2>
            <p className="mt-4 text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Check out recordings and materials from our previous events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                <div className="mt-4 text-sm text-slate-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees} attended</span>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 rounded-lg transition-colors">
                  View Recording
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Host Your Own Event</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">
              Have an idea for a workshop or talk? Propose an event to our community
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Propose an Event
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}