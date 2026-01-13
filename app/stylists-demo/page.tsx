"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stylists = [
  {
    name: "Annie Pursel",
    role: "Founder & Stylist",
    bio: "With years of experience behind the chair, Annie has developed a passion for helping people discover their personal style. Her approach combines technical expertise with genuine care—taking time to understand not just what you want, but how your hair fits into your lifestyle.",
    accent: "from-rose-400 to-rose-500",
    accentBg: "bg-rose-400",
  },
  {
    name: "Sarah Mitchell",
    role: "Senior Stylist",
    bio: "Sarah specializes in modern cuts and lived-in color. With a keen eye for face shapes and personal style, she creates looks that are both on-trend and uniquely you. Her clients love her calm energy and attention to detail.",
    accent: "from-violet-400 to-violet-500",
    accentBg: "bg-violet-400",
  },
  {
    name: "Maya Chen",
    role: "Color Specialist",
    bio: "Maya is our color expert, known for her stunning balayage and creative color work. She stays on the cutting edge of color techniques and loves helping clients express themselves through bold or subtle transformations.",
    accent: "from-emerald-400 to-emerald-500",
    accentBg: "bg-emerald-400",
  },
  {
    name: "Jordan Taylor",
    role: "Stylist",
    bio: "Jordan brings fresh energy and creative vision to every appointment. Trained in both classic and contemporary techniques, they excel at crafting styles that work for your everyday life while making you feel extraordinary.",
    accent: "from-amber-400 to-amber-500",
    accentBg: "bg-amber-400",
  },
];

// Option 1: Side Tabs + Large Image
function SideTabsOption() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stylists[activeIndex];

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
      {/* Tabs Side */}
      <div className="flex flex-col justify-center order-2 lg:order-1">
        <div className="space-y-2">
          {stylists.map((stylist, index) => (
            <button
              key={stylist.name}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left p-4 lg:p-6 rounded-2xl transition-all duration-300 ${
                activeIndex === index
                  ? "bg-charcoal text-white"
                  : "bg-light-gray hover:bg-gray-200 text-charcoal"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{stylist.name}</h3>
                  <p className={activeIndex === index ? "text-white/70" : "text-muted"}>
                    {stylist.role}
                  </p>
                </div>
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${stylist.accent} ${
                    activeIndex === index ? "opacity-100" : "opacity-50"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Image + Bio Side */}
      <div className="order-1 lg:order-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-light-gray">
                <div className="w-full h-full bg-gradient-to-br from-off-white to-light-gray flex items-center justify-center">
                  <span className="text-muted text-lg">Photo</span>
                </div>
              </div>
              <div
                className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${active.accent} rounded-2xl -z-10`}
              />
            </div>
            <div className="mt-8">
              <p className="text-muted text-lg leading-relaxed mb-6">{active.bio}</p>
              <Link
                href="/book"
                className="inline-block px-6 py-3 bg-charcoal text-white font-medium rounded-full hover:scale-105 transition-transform"
              >
                Book with {active.name.split(" ")[0]}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Option 2: Thumbnail Row + Feature
function ThumbnailRowOption() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stylists[activeIndex];

  return (
    <div>
      {/* Thumbnail Row */}
      <div className="flex justify-center gap-4 mb-12">
        {stylists.map((stylist, index) => (
          <button
            key={stylist.name}
            onClick={() => setActiveIndex(index)}
            className="group relative"
          >
            <div
              className={`w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "ring-4 ring-charcoal scale-110"
                  : "ring-2 ring-transparent hover:ring-gray-300"
              }`}
            >
              <div className="w-full h-full bg-gradient-to-br from-off-white to-light-gray flex items-center justify-center">
                <span className="text-muted text-xs">Photo</span>
              </div>
            </div>
            <div
              className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${stylist.accent} transition-opacity ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Featured Stylist */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-light-gray">
              <div className="w-full h-full bg-gradient-to-br from-off-white to-light-gray flex items-center justify-center">
                <span className="text-muted text-lg">Photo</span>
              </div>
            </div>
            <div
              className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br ${active.accent} rounded-3xl -z-10`}
            />
          </div>

          <div>
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${active.accent} mb-4`}>
              {active.role}
            </span>
            <h3 className="text-4xl font-semibold text-charcoal mb-4">{active.name}</h3>
            <p className="text-muted text-lg leading-relaxed mb-8">{active.bio}</p>
            <div className="flex gap-4">
              <Link
                href="/book"
                className="px-6 py-3 bg-charcoal text-white font-medium rounded-full hover:scale-105 transition-transform"
              >
                Book Appointment
              </Link>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Option 3: Horizontal Card Carousel
function CarouselOption() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % stylists.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + stylists.length) % stylists.length);

  return (
    <div className="relative">
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
                      <Link
                        href="/book"
                        className="px-6 py-3 bg-charcoal text-white font-medium rounded-full hover:scale-105 transition-transform"
                      >
                        Book Now
                      </Link>
                      <a
                        href="#"
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
  );
}

// Option 4: Interactive Grid
function InteractiveGridOption() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stylists.map((stylist, index) => {
        const isExpanded = expandedIndex === index;
        return (
          <motion.div
            key={stylist.name}
            layout
            onClick={() => setExpandedIndex(isExpanded ? null : index)}
            className={`cursor-pointer ${
              isExpanded ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <motion.div
              layout
              className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                isExpanded ? "grid sm:grid-cols-2" : ""
              }`}
            >
              <motion.div layout className="relative">
                <div className={`${isExpanded ? "aspect-[4/5]" : "aspect-[3/4]"} bg-light-gray`}>
                  <div className="w-full h-full bg-gradient-to-br from-off-white to-light-gray flex items-center justify-center">
                    <span className="text-muted">Photo</span>
                  </div>
                </div>
                {/* Colored bar at bottom */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stylist.accent}`}
                />
              </motion.div>

              <motion.div layout className="p-6">
                <motion.h3 layout className="text-xl font-semibold text-charcoal mb-1">
                  {stylist.name}
                </motion.h3>
                <motion.p layout className="text-muted text-sm mb-3">
                  {stylist.role}
                </motion.p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <p className="text-muted text-sm leading-relaxed mb-6">{stylist.bio}</p>
                      <div className="flex gap-3">
                        <Link
                          href="/book"
                          onClick={(e) => e.stopPropagation()}
                          className="px-5 py-2 bg-charcoal text-white text-sm font-medium rounded-full hover:scale-105 transition-transform"
                        >
                          Book Now
                        </Link>
                        <a
                          href="#"
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          aria-label="Instagram"
                        >
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isExpanded && (
                  <p className="text-xs text-muted/60">Click to expand</p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function StylistsDemo() {
  return (
    <>
      {/* Header */}
      <section className="relative min-h-[40vh] flex items-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-neutral-800" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 w-full pt-32 pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
                Stylist Showcase{" "}
                <span className="bg-gradient-to-r from-rose-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                  Options
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Four different layout styles to showcase your team. Scroll down to see each option.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Option 1: Side Tabs */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-charcoal text-white rounded-full text-sm font-medium mb-4">
              Option 1
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
              Side Tabs + Large Image
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Clean vertical tabs that switch the featured stylist with smooth animations.
            </p>
          </motion.div>

          <SideTabsOption />
        </div>
      </section>

      {/* Option 2: Thumbnail Row */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-charcoal text-white rounded-full text-sm font-medium mb-4">
              Option 2
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
              Thumbnail Row + Feature
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Circular thumbnails at the top with a large featured profile below.
            </p>
          </motion.div>

          <ThumbnailRowOption />
        </div>
      </section>

      {/* Option 3: Carousel */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-6xl mx-auto px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-charcoal text-white rounded-full text-sm font-medium mb-4">
              Option 3
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
              Horizontal Card Carousel
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Swipeable cards with arrow navigation and dot indicators.
            </p>
          </motion.div>

          <CarouselOption />
        </div>
      </section>

      {/* Option 4: Interactive Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-charcoal text-white rounded-full text-sm font-medium mb-4">
              Option 4
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
              Interactive Grid
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Click any card to expand and reveal the full bio and booking options.
            </p>
          </motion.div>

          <InteractiveGridOption />
        </div>
      </section>

      {/* Back to About */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/70 mb-6">Ready to pick one?</p>
          <Link
            href="/about"
            className="inline-block px-8 py-4 bg-white text-charcoal font-medium rounded-full hover:scale-105 transition-transform"
          >
            Back to About Page
          </Link>
        </div>
      </section>
    </>
  );
}
