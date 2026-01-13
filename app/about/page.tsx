"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Sparkles, Users } from "lucide-react";

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

export default function About() {
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

      {/* Founder Section */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="text-gray font-medium tracking-widest text-sm uppercase mb-4 block">
                Meet the Founder
              </span>
              <h2 className="text-4xl sm:text-5xl font-semibold text-charcoal mb-6">
                Annie Pursel
              </h2>
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  With years of experience behind the chair, Annie has developed a passion for helping people discover their personal style and feel confident in their own skin.
                </p>
                <p>
                  Her approach combines technical expertise with genuine care—taking time to understand not just what you want, but how your hair fits into your lifestyle. Whether you&apos;re looking for a bold transformation or a subtle refresh, Annie brings creativity and precision to every appointment.
                </p>
                <p>
                  When she&apos;s not at the studio, you can find her exploring Chicago&apos;s neighborhoods, finding inspiration in art and design, or spending time with loved ones.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/book"
                  className="inline-block px-8 py-4 bg-charcoal text-white font-medium rounded-full hover:scale-105 transition-transform"
                >
                  Book with Annie
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-light-gray">
                <div className="w-full h-full bg-gradient-to-br from-off-white to-light-gray flex items-center justify-center">
                  <span className="text-muted text-lg">Photo</span>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-violet-400 rounded-3xl -z-10" />
            </motion.div>
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
                className="text-lg px-8 py-4 bg-transparent text-white border-2 border-white font-medium rounded-full hover:scale-105 transition-transform"
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
