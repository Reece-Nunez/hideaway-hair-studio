"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const services = [
  {
    title: "Haircuts & Styling",
    description: "Precision cuts tailored to your unique features and lifestyle.",
    price: "From $65",
    color: "from-rose-400 to-orange-300",
  },
  {
    title: "Color Services",
    description: "From subtle highlights to bold transformations.",
    price: "From $95",
    color: "from-violet-400 to-purple-300",
  },
  {
    title: "Treatments",
    description: "Restorative treatments for healthy, beautiful hair.",
    price: "From $45",
    color: "from-emerald-400 to-teal-300",
  },
  {
    title: "Bridal & Events",
    description: "Look stunning on your most special occasions.",
    price: "From $150",
    color: "from-amber-400 to-yellow-300",
  },
];

const team = [
  { name: "Sofia Martinez", role: "Founder & Lead Stylist", accent: "bg-rose-400" },
  { name: "Emma Chen", role: "Color Specialist", accent: "bg-violet-400" },
  { name: "Olivia Brooks", role: "Senior Stylist", accent: "bg-emerald-400" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      {/* Parallax Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-charcoal"
      >
        {/* Animated Background Gradients */}
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            animate={{
              x: mousePosition.x * 2,
              y: mousePosition.y * 2,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-rose-500/40 to-orange-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: mousePosition.x * -1.5,
              y: mousePosition.y * -1.5,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute top-40 right-[10%] w-[600px] h-[600px] bg-gradient-to-br from-violet-500/40 to-purple-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: mousePosition.x * 1,
              y: mousePosition.y * 1,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute bottom-20 left-[30%] w-[400px] h-[400px] bg-gradient-to-br from-emerald-500/30 to-teal-400/20 rounded-full blur-3xl"
          />
        </motion.div>

        {/* Floating Shapes */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              x: mousePosition.x * 3,
              y: mousePosition.y * 3,
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              x: { type: "spring", stiffness: 50 },
              y: { type: "spring", stiffness: 50 },
            }}
            className="absolute top-[20%] left-[15%] w-24 h-24 border-2 border-white/20 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              x: mousePosition.x * -2,
              y: mousePosition.y * -2,
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              x: { type: "spring", stiffness: 50 },
              y: { type: "spring", stiffness: 50 },
            }}
            className="absolute top-[60%] right-[20%] w-32 h-32 border border-white/10 rounded-2xl"
          />
          <motion.div
            animate={{
              x: mousePosition.x * 4,
              y: mousePosition.y * 4,
            }}
            transition={{ type: "spring", stiffness: 30 }}
            className="absolute bottom-[30%] left-[10%] w-4 h-4 bg-amber-400/60 rounded-full"
          />
          <motion.div
            animate={{
              x: mousePosition.x * -3,
              y: mousePosition.y * -3,
            }}
            transition={{ type: "spring", stiffness: 40 }}
            className="absolute top-[30%] right-[15%] w-3 h-3 bg-rose-400/60 rounded-full"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium tracking-wide mb-8">
                  Welcome to Hideaway
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white mb-8 leading-[0.95]"
              >
                Where Style
                <br />
                <span className="bg-gradient-to-r from-rose-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  Finds You
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/70 mb-10 max-w-lg mx-auto lg:mx-0"
              >
                Step into your sanctuary. A place where transformation meets
                tranquility and every visit feels like an escape.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/book"
                  className="group px-8 py-4 bg-[#FFFFFF] text-[#1A1A1A] font-medium rounded-full hover:scale-105 transition-transform text-center"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all text-center"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/40">Hero Image</span>
                  </div>
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -left-6 px-6 py-4 bg-white rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-orange-300" />
                    <div>
                      <p className="font-semibold text-charcoal text-sm">Book Online</p>
                      <p className="text-xs text-gray">Easy Scheduling</p>
                    </div>
                  </div>
                </motion.div>

                {/* Accent shapes */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl -z-10 rotate-12" />
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full -z-10" />
              </div>
            </motion.div>
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
            <span className="text-gray font-medium tracking-widest text-sm uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-charcoal mb-6">
              What We Offer
            </h2>
            <p className="text-muted text-lg">
              From precision cuts to transformative color, we offer services
              designed to bring out your most confident self.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 lg:p-10 rounded-3xl bg-white border border-light-gray hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient accent on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Color dot */}
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-br ${service.color} mb-6`}
                  />

                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-charcoal">
                      {service.title}
                    </h3>
                    <span className="text-charcoal font-medium">{service.price}</span>
                  </div>
                  <p className="text-muted leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-block px-8 py-4 font-medium rounded-full transition-all hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
            >
              View All Services
            </Link>
          </motion.div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-3xl">
                  {/* Image */}
                  <div className="aspect-[3/4] bg-light-gray">
                    <div className="w-full h-full bg-gradient-to-br from-off-white to-light-gray flex items-center justify-center">
                      <span className="text-muted">Photo</span>
                    </div>
                  </div>

                  {/* Colored accent bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${member.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="View profile"
                    >
                      <svg
                        className="w-5 h-5 text-charcoal"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8">
              Ready to Find Your{" "}
              <span className="bg-gradient-to-r from-rose-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                Hideaway
              </span>
              ?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Book your appointment today and start your journey to beautiful,
              confident hair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="px-10 py-4 font-medium rounded-full hover:scale-105 transition-transform"
                style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}
              >
                Book Appointment
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 font-medium rounded-full transition-all hover:scale-105 hover:opacity-80"
                style={{ backgroundColor: "transparent", color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.5)" }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
