"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Sparkles, Users, ChevronLeft, ChevronRight } from "lucide-react";

const values = [
  {
    title: "Authenticity",
    description: "We believe your hair should reflect who you truly are. No cookie-cutter styles here—just personalized looks that celebrate your unique beauty.",
    icon: Heart,
  },
  {
    title: "Creativity",
    description: "Hair is our art form. We stay inspired, keep learning, and bring fresh ideas to every appointment while respecting your vision.",
    icon: Sparkles,
  },
  {
    title: "Connection",
    description: "More than just a salon, we're a community. We take time to listen, understand, and build lasting relationships with every guest.",
    icon: Users,
  },
];

const stylists = [
  {
    name: "Annie Pursel",
    slug: "annie",
    role: "Founder & Stylist",
    bio: "With years of experience behind the chair, Annie has developed a passion for helping people discover their personal style. Her approach combines technical expertise with genuine care—taking time to understand not just what you want, but how your hair fits into your lifestyle.",
    accent: "from-rose-400 to-rose-500",
    bookingUrl: "https://annie-pursel-hair.square.site/",
    instagram: "https://www.instagram.com/anniepurselhair/",
  },
  {
    name: "Paul K.",
    slug: "paul",
    role: "Stylist",
    bio: "Paul brings fresh energy and creative vision to every appointment. Trained in both classic and contemporary techniques, he excels at crafting styles that work for your everyday life while making you feel extraordinary.",
    accent: "from-violet-400 to-violet-500",
    bookingUrl: "https://paulkhair.glossgenius.com/",
    instagram: "https://www.instagram.com/paulk_hair/",
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const index = stylists.findIndex((s) => s.slug === hash);
    if (index !== -1) {
      setActiveIndex(index);
      setTimeout(() => {
        document.getElementById("stylists")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % stylists.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + stylists.length) % stylists.length);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-charcoal overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-neutral-800" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 w-full pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-white/50 font-medium tracking-widest text-sm uppercase mb-4 block">
                Our Story
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-rose-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                  Hideaway
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
                A sanctuary where transformation meets tranquility, and every visit feels like coming home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-light-gray">
                <div className="w-full h-full bg-gradient-to-br from-off-white to-light-gray flex items-center justify-center">
                  <span className="text-muted text-lg">Photo</span>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-rose-400 to-violet-400 rounded-3xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gray font-medium tracking-widest text-sm uppercase mb-4 block">
                The Beginning
              </span>
              <h2 className="text-4xl sm:text-5xl font-semibold text-charcoal mb-6">
                Built on Passion
              </h2>
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  Hideaway Hair Studio was born from a simple belief: everyone deserves a space where they can truly relax, be themselves, and leave feeling like the best version of who they are.
                </p>
                <p>
                  Founded by Annie Pursel, our studio is more than just a place to get your hair done—it&apos;s a retreat from the everyday. Nestled in Chicago&apos;s Lakeview neighborhood, we&apos;ve created an intimate environment where artistry and comfort come together.
                </p>
                <p>
                  Every detail, from the welcoming atmosphere to the personalized consultations, is designed with you in mind. Because at Hideaway, it&apos;s not just about the hair—it&apos;s about the experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-gray font-medium tracking-widest text-sm uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-charcoal mb-6">
              Our Values
            </h2>
            <p className="text-muted text-lg">
              The principles that guide everything we do.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-off-white rounded-3xl p-8 lg:p-10"
                >
                  <div className="w-14 h-14 bg-charcoal rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted text-md leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Carousel */}
      <section id="stylists" className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-gray font-medium tracking-widest text-sm uppercase mb-4 block">
              The Team
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-charcoal mb-6">
              Meet Your Stylists
            </h2>
            <p className="text-muted text-lg">
              A team of passionate artists dedicated to making you look and feel extraordinary.
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-charcoal" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-charcoal" />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {stylists.map((stylist) => (
                  <div key={stylist.name} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                      <div className="grid lg:grid-cols-2">
                        <div className="aspect-[4/5] lg:aspect-auto bg-light-gray">
                          <div className="w-full h-full bg-gradient-to-br from-off-white to-light-gray flex items-center justify-center min-h-[300px]">
                            <span className="text-muted text-lg">Photo</span>
                          </div>
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <span
                            className={`inline-block self-start px-4 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${stylist.accent} mb-4`}
                          >
                            {stylist.role}
                          </span>
                          <h3 className="text-3xl lg:text-4xl font-semibold text-charcoal mb-4">
                            {stylist.name}
                          </h3>
                          <p className="text-muted text-lg leading-relaxed mb-8">{stylist.bio}</p>
                          <div className="flex gap-4">
                            <a
                              href={stylist.bookingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-charcoal font-medium rounded-full hover:scale-105 transition-transform"
                              style={{ color: "#FFFFFF" }}
                            >
                              Book Now
                            </a>
                            <a
                              href={stylist.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                              aria-label="Instagram"
                            >
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {stylists.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-charcoal" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-rose-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                Transform
              </span>
              ?
            </h2>
            <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
              Book your appointment today and discover what makes Hideaway special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="text-lg px-8 py-4 bg-white text-charcoal font-medium rounded-full hover:scale-105 transition-transform"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="text-lg px-8 py-4 bg-transparent border-2 border-white font-medium rounded-full hover:scale-105 transition-transform"
                style={{ color: "#FFFFFF" }}
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
