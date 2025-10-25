'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Music, Code, Briefcase, Trophy, Palette, Coffee, 
  Headphones, Microscope, Heart, BookOpen, MapPin,
  Users, Calendar, ArrowRight, Star, TrendingUp
} from 'lucide-react';

const DiscoverPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'Technology', icon: <Code className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Music', icon: <Music className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Business', icon: <Briefcase className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
    { name: 'Sports', icon: <Trophy className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
    { name: 'Art & Design', icon: <Palette className="w-5 h-5" />, color: 'from-pink-500 to-rose-500' },
    { name: 'Food & Drink', icon: <Coffee className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
    { name: 'Entertainment', icon: <Headphones className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
    { name: 'Science', icon: <Microscope className="w-5 h-5" />, color: 'from-teal-500 to-cyan-500' },
    { name: 'Health', icon: <Heart className="w-5 h-5" />, color: 'from-red-500 to-pink-500' },
    { name: 'Education', icon: <BookOpen className="w-5 h-5" />, color: 'from-blue-500 to-indigo-500' },
  ];

  const featuredCalendars = [
    {
      name: "Tech Founders Network",
      description: "Connect with ambitious founders building the next generation of startups. Weekly meetups, pitch sessions, and networking.",
      avatar: "TF",
      followers: "12.5K",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      name: "Creative Minds Collective",
      description: "A community for designers, artists, and creative professionals. Join us for workshops, portfolio reviews, and inspiration.",
      avatar: "CM",
      followers: "8.3K",
      gradient: "from-pink-600 to-purple-600"
    },
    {
      name: "AI & ML Enthusiasts",
      description: "The largest community of AI researchers, engineers, and enthusiasts. Learn, build, and shape the future together.",
      avatar: "AI",
      followers: "25K",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      name: "Wellness Warriors",
      description: "Transform your life through fitness, mindfulness, and community. Group workouts, meditation sessions, and health talks.",
      avatar: "WW",
      followers: "15K",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      name: "Startup Grind Local",
      description: "Monthly gatherings for entrepreneurs to connect, learn, and grow. Featuring successful founders and industry experts.",
      avatar: "SG",
      followers: "18K",
      gradient: "from-orange-600 to-red-600"
    },
    {
      name: "Music Makers Society",
      description: "For musicians, producers, and music lovers. Jam sessions, production workshops, and live performances every week.",
      avatar: "MM",
      followers: "9.7K",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  const cities = [
    { name: "San Francisco", events: 156, icon: "🌉" },
    { name: "New York", events: 234, icon: "🗽" },
    { name: "Los Angeles", events: 189, icon: "🌴" },
    { name: "Austin", events: 87, icon: "🎸" },
    { name: "Seattle", events: 123, icon: "☕" },
    { name: "Boston", events: 98, icon: "🎓" },
    { name: "Chicago", events: 145, icon: "🏙️" },
    { name: "Miami", events: 76, icon: "🏖️" },
    { name: "Denver", events: 65, icon: "⛰️" },
    { name: "Portland", events: 54, icon: "🌲" },
    { name: "Toronto", events: 112, icon: "🍁" },
    { name: "Vancouver", events: 89, icon: "🏔️" },
    { name: "London", events: 198, icon: "🎡" },
    { name: "Berlin", events: 167, icon: "🐻" },
    { name: "Singapore", events: 134, icon: "🦁" },
    { name: "Tokyo", events: 201, icon: "🗾" },
    { name: "Sydney", events: 143, icon: "🦘" },
    { name: "Mumbai", events: 176, icon: "🕌" },
  ];

  const trendingEvents = [
    {
      title: "AI Hackathon 2025",
      organizer: "Tech Founders Network",
      date: "Nov 15-17",
      attendees: 450,
      image: "bg-gradient-to-br from-blue-600 to-purple-600",
      tag: "Trending"
    },
    {
      title: "Startup Pitch Night",
      organizer: "Startup Grind Local",
      date: "Nov 20",
      attendees: 200,
      image: "bg-gradient-to-br from-orange-600 to-red-600",
      tag: "Hot"
    },
    {
      title: "Design System Workshop",
      organizer: "Creative Minds Collective",
      date: "Nov 22",
      attendees: 150,
      image: "bg-gradient-to-br from-pink-600 to-purple-600",
      tag: "Featured"
    },
    {
      title: "Yoga & Meditation Retreat",
      organizer: "Wellness Warriors",
      date: "Dec 1-3",
      attendees: 80,
      image: "bg-gradient-to-br from-green-600 to-teal-600",
      tag: "New"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Discover
              </span>{" "}
              Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Explore popular events near you, browse by category, or check out amazing community calendars
            </p>
          </motion.div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Browse by <span className="text-purple-400">Category</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-left">{category.name}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Events */}
      <section className="py-20 relative bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-center justify-between"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <TrendingUp className="inline-block w-10 h-10 text-purple-400 mr-3 mb-2" />
                Trending Now
              </h2>
              <p className="text-gray-400 text-lg">Hot events everyone's talking about</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <div className={`relative h-48 ${event.image} flex items-center justify-center`}>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-sm font-semibold text-purple-400">
                    {event.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{event.organizer}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Calendars */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-purple-400">Calendars</span>
            </h2>
            <p className="text-gray-400 text-lg">Amazing communities hosting regular events</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCalendars.map((calendar, index) => (
              <motion.div
                key={calendar.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${calendar.gradient} rounded-xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0`}>
                    {calendar.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors truncate">
                      {calendar.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{calendar.followers} followers</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {calendar.description}
                </p>
                <button className="w-full py-3 bg-purple-600/10 text-purple-400 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2">
                  Follow <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Local Events */}
      <section className="py-20 relative bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <MapPin className="inline-block w-10 h-10 text-purple-400 mr-3 mb-2" />
              Explore Local Events
            </h2>
            <p className="text-gray-400 text-lg">Find events happening in cities worldwide</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city, index) => (
              <motion.button
                key={city.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all text-center group"
              >
                <div className="text-4xl mb-3">{city.icon}</div>
                <h3 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-400">{city.events} Events</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-12 md:p-16"
          >
            <Star className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Host Your Own?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Create your event calendar and start building your community today
            </p>
            <Link href="/events/create">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-purple-600 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-3"
              >
                Create Event <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>© 2025 EventConnect. Discover amazing events worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default DiscoverPage;