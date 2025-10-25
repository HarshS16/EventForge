// import CategoryFilter from '@/components/shared/CategoryFilter';
// import Collection from '@/components/shared/Collection'
// import Search from '@/components/shared/Search';
// import { Button } from '@/components/ui/button'
// import { getAllEvents } from '@/lib/actions/event.actions';
// import { SearchParamProps } from '@/types';
// import Image from 'next/image'
// import Link from 'next/link'

// export default async function Home({ searchParams }: SearchParamProps) {
//   const page = Number(searchParams?.page) || 1;
//   const searchText = (searchParams?.query as string) || '';
//   const category = (searchParams?.category as string) || '';

//   const events = await getAllEvents({
//     query: searchText,
//     category,
//     page,
//     limit: 6
//   })

//   return (
//     <>
//       <section className="bg-gray-900 bg-dotted-pattern bg-contain py-5 md:py-10 pt-24">
//         <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
//           <div className="flex flex-col justify-center gap-8">
//             <h1 className="h1-bold">Forge Unforgettable Experiences Together</h1>
//             <p className="p-regular-20 md:p-regular-24">Create, discover, and join amazing experiences in your community. From workshops to concerts - your next adventure awaits on Eventforge.</p>
//             <Button size="lg" asChild className="button w-full sm:w-fit">
//               <Link href="#eventforge">
//                 Explore Now
//               </Link>
//             </Button>
//           </div>

//           <Image 
//             src="/assets/images/hero.png"
//             alt="hero"
//             width={1000}
//             height={1000}
//             className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
//           />
//         </div>
//       </section> 

//       <section id="eventforge" className="wrapper my-8 flex flex-col gap-8 md:gap-12 bg-gray-900">
//         <h2 className="h2-bold">Discover Amazing <br /> Experiences Near You</h2>

//         <div className="flex w-full flex-col gap-5 md:flex-row">
//           <Search />
//           <CategoryFilter />
//         </div>

//         <Collection 
//           data={events?.data}
//           emptyTitle="No Events Found"
//           emptyStateSubtext="Come back later"
//           collectionType="All_Events"
//           limit={6}
//           page={page}
//           totalPages={events?.totalPages}
//         />
//       </section>
//     </>
//   )
// }


'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, Ticket, Users, Zap, ArrowRight, CheckCircle, TrendingUp, Globe, Shield } from 'lucide-react';

const EventLandingPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Create Events",
      description: "Launch your event in minutes with our intuitive event creation tools"
    },
    {
      icon: <Ticket className="w-8 h-8" />,
      title: "QR Ticketing",
      description: "Generate and validate secure QR code tickets instantly"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sponsor Matching",
      description: "Connect with sponsors actively seeking events to support"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Track registrations, attendance, and engagement metrics live"
    }
  ];

  const stats = [
    { value: "10K+", label: "Events Hosted" },
    { value: "500K+", label: "Attendees" },
    { value: "2K+", label: "Active Sponsors" },
    { value: "98%", label: "Satisfaction Rate" }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Create Your Event",
      description: "Set up your event details, pricing, and customize your registration form in minutes"
    },
    {
      step: "02",
      title: "Attract Sponsors",
      description: "Our AI matches your event with relevant sponsors looking for opportunities"
    },
    {
      step: "03",
      title: "Manage Attendees",
      description: "Send tickets, validate entries with QR codes, and engage with participants"
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: mounted ? opacity : 1 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                🚀 The Future of Event Management
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Events Meet
              </span>
              <br />
              <span className="text-white">Opportunity</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              The all-in-one platform connecting event organizers, attendees, and sponsors. 
              Create memorable experiences while securing funding effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-purple-600 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                Start Creating <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-700 rounded-lg font-semibold text-lg hover:border-purple-500 transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 relative"
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl border border-purple-500/20 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-800/50 rounded-lg p-4 h-32"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2 + i, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-purple-500 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Everything You Need,
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                All in One Place
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to make event management seamless and sponsorship effortless
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800/50 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
              >
                <div className="bg-purple-600/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Simple Process,
              </span>
              <br />
              Powerful Results
            </h2>
          </motion.div>

          <div className="space-y-32">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="text-8xl font-bold text-purple-600/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-4xl font-bold mb-6">{item.title}</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl border border-purple-500/20 p-8 h-80 flex items-center justify-center">
                    <div className="text-6xl text-purple-400/20">
                      {index === 0 && <Calendar className="w-32 h-32" />}
                      {index === 1 && <TrendingUp className="w-32 h-32" />}
                      {index === 2 && <Users className="w-32 h-32" />}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section - Sponsor Marketplace */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                ⚡ Game Changer
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Direct Access to
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Eager Sponsors
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our unique sponsor marketplace connects your events with brands actively seeking 
              sponsorship opportunities. No more cold outreach or endless emails.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe />, title: "Global Network", desc: "Access sponsors worldwide" },
              { icon: <Shield />, title: "Verified Sponsors", desc: "All sponsors pre-vetted" },
              { icon: <Zap />, title: "Instant Matching", desc: "AI-powered connections" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur border border-purple-500/20 rounded-2xl p-8 text-center"
              >
                <div className="text-purple-400 flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Events?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of organizers creating unforgettable experiences
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-purple-600 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-3"
            >
              Get Started Free <ArrowRight className="w-5 h-5" />
            </motion.button>
            <p className="text-sm text-gray-400 mt-6">No credit card required • Free forever plan</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>© 2025 EventConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EventLandingPage;