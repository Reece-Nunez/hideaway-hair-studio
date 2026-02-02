"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scissors, PenTool, Sparkles, Star, Clock, Gem, Droplets } from "lucide-react";

const services = [
  {
    title: "Coloring",
    description: "It's not just hair color, it's a state of mind. Go ahead and have some fun with it.",
    icon: PenTool,
    details: "From subtle enhancements to bold transformations, we bring your color vision to life. Whether you're looking for a natural refresh, dimensional highlights, or a complete color change, we'll work with you to achieve the perfect shade.",
  },
  {
    title: "Styling",
    description: "Life's too short for boring hair. Embrace change and be rewarded by the effort.",
    icon: Sparkles,
    details: "Special occasion or everyday elegance, leave feeling camera-ready. Our styling services help you look your best for any event, from a polished blowout to intricate updos.",
  },
  {
    title: "Haircut",
    description: "A great haircut helps people see something they didn't know they could be.",
    icon: Scissors,
    details: "Precision cuts tailored to your face shape, lifestyle, and personal style. We take the time to understand what you want and deliver a cut that works for you every day.",
  },
  {
    title: "Treatments",
    description: "Give your hair the love it deserves with restorative care that transforms.",
    icon: Droplets,
    details: "From keratin treatments that smooth and strengthen to deep conditioning that restores shine and vitality, our treatments repair damage and keep your hair healthy and beautiful.",
  },
];

const highlights = [
  {
    icon: Star,
    title: "Personalized Consultations",
    description: "Every service begins with a thorough consultation to understand your goals and ensure we're aligned on your vision.",
  },
  {
    icon: Clock,
    title: "Unhurried Appointments",
    description: "We never double-book. Your appointment time is dedicated entirely to you and your transformation.",
  },
  {
    icon: Gem,
    title: "Premium Products",
    description: "We use only professional-grade, salon-quality products that nourish and protect your hair.",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-charcoal overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-neutral-800" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

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
                What We Offer
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-rose-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
                Expert cuts, color, and styling tailored to bring out your unique beauty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-charcoal rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List */}
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
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-charcoal mb-6">
              Our Services
            </h2>
            <p className="text-muted text-lg">
              Four things we do exceptionally well.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
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
                    {service.title}
                  </h3>
                  <p className="text-muted text-md leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.details}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted text-lg mb-6">
              Pricing varies based on hair length, density, and complexity.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-charcoal text-white font-medium rounded-full hover:scale-105 transition-transform"
              style={{ color: "#FFFFFF" }}
            >
              Contact for Pricing
            </Link>
          </motion.div>
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
                Book
              </span>
              ?
            </h2>
            <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
              Schedule your appointment today and let us help you look and feel your best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="text-lg px-8 py-4 bg-white text-charcoal font-medium rounded-full hover:scale-105 transition-transform"
              >
                Book Appointment
              </Link>
              <Link
                href="/contact"
                className="text-lg px-8 py-4 bg-transparent border-2 border-white font-medium rounded-full hover:scale-105 transition-transform"
                style={{ color: "#FFFFFF" }}
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
