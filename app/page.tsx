"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import SplashScreen from "@/components/SplashScreen";
import { Scissors, PenTool, Sparkles, Droplets } from "lucide-react";

const services = [
  {
    title: "Coloring",
    description: "It's not just hair color, it's a state of mind. Go ahead and have some fun with it.",
    icon: PenTool,
  },
  {
    title: "Styling",
    description: "Life's too short for boring hair. Embrace change and be rewarded by the effort.",
    icon: Sparkles,
  },
  {
    title: "Haircut",
    description: "A great haircut helps people see something they didn't know they could be.",
    icon: Scissors,
  },
  {
    title: "Treatments",
    description: "Give your hair the love it deserves with restorative care that transforms.",
    icon: Droplets,
  },
];

const team = [
  { name: "Annie Pursel", slug: "annie", role: "Founder & Stylist", accent: "bg-rose-400", instagram: "https://www.instagram.com/anniepurselhair/", bookUrl: "https://annie-pursel-hair.square.site/", bio: "Passionate about creating beautiful transformations." },
  { name: "Paul K.", slug: "paul", role: "Stylist", accent: "bg-violet-400", instagram: "https://www.instagram.com/paulk_hair/", bookUrl: "https://paulkhair.glossgenius.com/", bio: "Specializing in modern cuts and styles." },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showContent, setShowContent] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const springConfig = { stiffness: 100, damping: 30 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Splash Screen */}
      <SplashScreen onComplete={handleSplashComplete} />

      {/* Parallax Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-charcoal"
      >
        {/* Hero Background Image - CSS Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-no-repeat md:hidden"
          style={{
            y: y3,
            backgroundImage: "url('/hero-image-mobile3.png')",
            backgroundPosition: "center 30%"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-cover bg-no-repeat hidden md:block lg:hidden"
          style={{
            x: mouseX,
            y: mouseY,
            backgroundImage: "url('/hero-image-tablet.png')",
            backgroundPosition: "center 30%",
            scale: 1.05,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-cover bg-no-repeat hidden lg:block"
          style={{
            x: mouseX,
            y: mouseY,
            backgroundImage: "url('/hero-image.png')",
            backgroundPosition: "20% top",
            scale: 1.05,
          }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 w-full pt-24 px-6 lg:pr-12 xl:pr-24"
        >
          <div className="max-w-xl ml-auto lg:mr-0 xl:mr-0">
            {/* Text Content */}
            <div className="text-center lg:text-right">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="text-6xl sm:text-7xl lg:text-7xl xl:text-8xl text-white mb-8 leading-[0.95]"
              >
                Where Style
                <br />
                <span className="bg-gradient-to-r from-rose-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                  Finds You
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-white mb-10 max-w-lg mx-auto lg:ml-auto lg:mr-0 font-semibold"
              >
                Step into your sanctuary. A place where transformation meets
                tranquility and every visit feels like an escape.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
              >
                <Link
                  href="/book"
                  className="text-lg group px-8 py-4 bg-white text-charcoal border-2 border-charcoal font-medium rounded-full hover:scale-105 transition-transform text-center"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="text-lg px-8 py-4 bg-white text-charcoal border-2 border-charcoal font-medium rounded-full hover:scale-105 transition-transform text-center"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-charcoal">
              Services
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 text-charcoal mx-auto mb-5" strokeWidth={1.5} />
                  <h3 className="text-2xl font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <div className="w-12 h-px bg-charcoal/20 mx-auto mb-3" />
                  <p className="text-muted text-md leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              The Team
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-charcoal mb-6">
              Meet Your Stylists
            </h2>
            <p className="text-muted text-lg">
              A team of passionate artists dedicated to making you look and feel
              extraordinary.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-4 overflow-hidden rounded-3xl">
                  {/* Image */}
                  <div className="aspect-[3/4] bg-light-gray">
                    <div className="w-full h-full bg-gradient-to-br from-off-white to-light-gray flex items-center justify-center">
                      <span className="text-muted">Photo</span>
                    </div>
                  </div>

                  {/* Colored accent bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${member.accent} transform lg:scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />

                  {/* Hover overlay - desktop only */}
                  <div className="absolute inset-0 bg-charcoal/80 hidden lg:flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.instagram}
                      className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-5 h-5 text-charcoal"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href={member.bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-charcoal text-sm font-medium rounded-full hover:scale-105 transition-transform"
                    >
                      Book Now
                    </a>
                    <Link
                      href={`/about#${member.slug}`}
                      className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="View bio"
                    >
                      <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted mb-4">{member.role}</p>

                  {/* Mobile buttons - always visible */}
                  <div className="flex items-center justify-center gap-3 lg:hidden">
                    <a
                      href={member.instagram}
                      className="w-11 h-11 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-pink-500/25"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href={member.bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-charcoal text-sm font-medium rounded-full hover:scale-105 transition-transform shadow-lg shadow-charcoal/25 relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10" style={{ color: "#FFFFFF" }}>Book Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-violet-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                    <Link
                      href={`/about#${member.slug}`}
                      className="w-11 h-11 bg-charcoal rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-charcoal/25"
                      aria-label="View bio"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-gray font-medium tracking-widest text-sm uppercase mb-4 block">
              Location
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-charcoal mb-6">
              Visit Us
            </h2>
            <p className="text-muted text-lg">
              We&apos;d love to see you. Stop by our salon or book an appointment online.
            </p>
          </motion.div>

          {/* Map and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-full min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8893034824087!2d-87.6462!3d41.9342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3b2e59adf21%3A0x1234567890abcdef!2s2815%20N%20Pine%20Grove%20Ave%2C%20Chicago%2C%20IL%2060657!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hideaway Hair Studio Location"
              />
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal rounded-3xl p-8 lg:p-12 flex flex-col justify-center"
            >
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="text-white/50 text-sm font-medium tracking-widest uppercase mb-3">
                    Address
                  </h3>
                  <p className="text-white text-xl lg:text-2xl font-medium leading-relaxed">
                    2815 N Pine Grove Ave<br />
                    Chicago, IL 60657
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-white/50 text-sm font-medium tracking-widest uppercase mb-3">
                    Hours
                  </h3>
                  <div className="text-white text-lg space-y-1">
                    <p>Tuesday: 1pm – 9pm</p>
                    <p>Wednesday: 11am – 9pm</p>
                    <p>Thursday: 1pm – 9pm</p>
                    <p>Friday: 10am – 6pm</p>
                    <p>Saturday: 9am – 5pm</p>
                    <p>Sunday & Monday: Closed</p>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-white/50 text-sm font-medium tracking-widest uppercase mb-3">
                    Contact
                  </h3>
                  <div className="text-white text-lg space-y-1">
                    <a href="mailto:info@hideawayhairstudio.com" className="text-white/70 hover:text-white transition-colors block">info@hideawayhairstudio.com</a>
                    <a href="tel:+14143333571" className="text-white/70 hover:text-white transition-colors block">(414) 333-3571</a>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/book"
                  className="inline-block px-8 py-4 bg-white text-charcoal font-medium rounded-full hover:scale-105 transition-transform text-center mt-4"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
