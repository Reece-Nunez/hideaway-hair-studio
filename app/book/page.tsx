"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";

const stylists = [
  {
    name: "Annie Pursel",
    role: "Founder & Stylist",
    accent: "from-rose-400 to-rose-500",
    bookingUrl: "https://annie-pursel-hair.square.site/",
  },
  {
    name: "Paul K.",
    role: "Stylist",
    accent: "from-violet-400 to-violet-500",
    bookingUrl: "https://paulkhair.glossgenius.com/",
  },
];

export default function Book() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-neutral-800" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 w-full pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/50 font-medium tracking-widest text-sm uppercase mb-4 block">
                Schedule Your Visit
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                Book Your{" "}
                <span className="bg-gradient-to-r from-rose-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                  Appointment
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-xl mx-auto font-medium">
                Choose your stylist and book directly with them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stylists Booking Section */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gray font-medium tracking-widest text-sm uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
              Choose Your Stylist
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Each stylist manages their own schedule. Click to book directly with them.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {stylists.map((stylist, index) => (
              <motion.a
                key={stylist.name}
                href={stylist.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 flex items-center justify-between hover:shadow-xl transition-shadow group"
              >
                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${stylist.accent} mb-2`}
                  >
                    {stylist.role}
                  </span>
                  <h3 className="text-2xl font-semibold text-charcoal">
                    {stylist.name}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
              Before You Book
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A few things to know for your visit.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-off-white rounded-3xl p-8"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-charcoal" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Hours</h3>
              <div className="text-muted space-y-1">
                <p>Tuesday: 1pm – 9pm</p>
                <p>Wednesday: 11am – 9pm</p>
                <p>Thursday: 1pm – 9pm</p>
                <p>Friday: 10am – 6pm</p>
                <p>Saturday: 9am – 5pm</p>
                <p className="text-gray">Sunday & Monday: Closed</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-off-white rounded-3xl p-8"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-charcoal" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Location</h3>
              <p className="text-muted mb-4">
                2815 N Pine Grove Ave<br />
                Chicago, IL 60657
              </p>
              <a
                href="https://maps.google.com/?q=2815+N+Pine+Grove+Ave+Chicago+IL+60657"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-charcoal underline hover:no-underline"
              >
                Get Directions
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-off-white rounded-3xl p-8 mt-6"
          >
            <h3 className="text-xl font-semibold text-charcoal mb-4">Cancellation Policy</h3>
            <p className="text-muted leading-relaxed">
              We understand that life happens. If you need to cancel or reschedule, please give us at least 24 hours notice.
              Late cancellations or no-shows may be subject to a fee. Thank you for understanding—this helps us serve all our guests better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 lg:py-32 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Not sure which stylist is right for you? Get in touch and we&apos;ll help you find your perfect match.
            </p>
            <Link
              href="/contact"
              className="inline-block text-lg px-8 py-4 bg-white text-charcoal font-medium rounded-full hover:scale-105 transition-transform"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
