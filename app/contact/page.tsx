"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, Send, CheckCircle } from "lucide-react";

// Validation helpers
const validateName = (name: string): string | null => {
  const trimmed = name.trim();

  // Must be at least 2 characters
  if (trimmed.length < 2) {
    return "Please enter a valid name";
  }

  // Must contain at least one vowel (real names have vowels)
  if (!/[aeiouAEIOU]/.test(trimmed)) {
    return "Please enter a valid name";
  }

  // Check for too many consecutive consonants (more than 4 is suspicious)
  if (/[^aeiouAEIOU\s'-]{5,}/i.test(trimmed)) {
    return "Please enter a valid name";
  }

  // Must only contain letters, spaces, hyphens, and apostrophes
  if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) {
    return "Name can only contain letters, spaces, hyphens, and apostrophes";
  }

  // Check for repetitive characters (like "aaaa" or "xxxx")
  if (/(.)\1{3,}/.test(trimmed)) {
    return "Please enter a valid name";
  }

  return null;
};

const validateEmail = (email: string): string | null => {
  const trimmed = email.trim();

  // Standard email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(trimmed)) {
    return "Please enter a valid email address";
  }

  return null;
};

const formatPhoneNumber = (value: string): string => {
  // Remove all non-digits
  const digits = value.replace(/\D/g, "");

  // Limit to 10 digits
  const limited = digits.slice(0, 10);

  // Format as (XXX) XXX-XXXX
  if (limited.length === 0) return "";
  if (limited.length <= 3) return `(${limited}`;
  if (limited.length <= 6) return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
  return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
};

const validatePhone = (phone: string): string | null => {
  if (!phone.trim()) return null; // Phone is optional

  const digits = phone.replace(/\D/g, "");

  if (digits.length > 0 && digits.length !== 10) {
    return "Please enter a valid 10-digit phone number";
  }

  return null;
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateName(formState.name);
    const emailError = validateEmail(formState.email);
    const phoneError = validatePhone(formState.phone);

    setErrors({
      name: nameError || "",
      email: emailError || "",
      phone: phoneError || "",
    });

    // If any errors, don't submit
    if (nameError || emailError || phoneError) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", phone: "", message: "" });
    setErrors({ name: "", email: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Special handling for phone number formatting
    if (name === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormState((prev) => ({ ...prev, phone: formatted }));
      // Clear error on change
      if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
      return;
    }

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on change
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Validate on blur
    if (name === "name" && value) {
      const error = validateName(value);
      setErrors((prev) => ({ ...prev, name: error || "" }));
    }
    if (name === "email" && value) {
      const error = validateEmail(value);
      setErrors((prev) => ({ ...prev, email: error || "" }));
    }
    if (name === "phone" && value) {
      const error = validatePhone(value);
      setErrors((prev) => ({ ...prev, phone: error || "" }));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-charcoal overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-neutral-800" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 w-full pt-32 pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-white/50 font-medium tracking-widest text-sm uppercase mb-4 block">
                Get In Touch
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                Contact{" "}
                <span className="bg-gradient-to-r from-rose-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
                Have questions? We&apos;d love to hear from you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted text-lg mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-8 lg:p-12 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-muted mb-6">
                    Thank you for reaching out. We&apos;ll be in touch soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-charcoal underline hover:no-underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-5 py-4 bg-white rounded-2xl border text-charcoal placeholder-gray focus:ring-2 focus:ring-violet-400 transition-shadow ${
                        errors.name ? "border-red-400" : "border-gray-400"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-5 py-4 bg-white rounded-2xl border text-charcoal placeholder-gray focus:ring-2 focus:ring-violet-400 transition-shadow ${
                          errors.email ? "border-red-400" : "border-gray-400"
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Phone <span className="text-muted">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-5 py-4 bg-white rounded-2xl border text-charcoal placeholder-gray focus:ring-2 focus:ring-violet-400 transition-shadow ${
                          errors.phone ? "border-red-400" : "border-gray-400"
                        }`}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 bg-white rounded-2xl border border-gray-400 text-charcoal placeholder-gray focus:ring-2 focus:ring-violet-400 transition-shadow resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-medium rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" strokeWidth={1.5} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="bg-white rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-off-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-charcoal" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">Location</h3>
                    <p className="text-muted">
                      2815 N Pine Grove Ave<br />
                      Chicago, IL 60657
                    </p>
                    <a
                      href="https://maps.google.com/?q=2815+N+Pine+Grove+Ave+Chicago+IL+60657"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm font-medium text-charcoal underline hover:no-underline"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-off-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-charcoal" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">Hours</h3>
                    <div className="text-muted space-y-1">
                      <p>Tuesday: 1pm – 9pm</p>
                      <p>Wednesday: 11am – 9pm</p>
                      <p>Thursday: 1pm – 9pm</p>
                      <p>Friday: 10am – 6pm</p>
                      <p>Saturday: 9am – 5pm</p>
                      <p className="text-gray">Sunday & Monday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-off-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-charcoal" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">Email</h3>
                    <a
                      href="mailto:hello@hideawayhairstudio.com"
                      className="text-muted hover:text-charcoal transition-colors"
                    >
                      hello@hideawayhairstudio.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-xl h-[250px]">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-charcoal mb-6">
              Ready to Book?
            </h2>
            <p className="text-muted text-xl mb-10 max-w-2xl mx-auto">
              Skip the wait and schedule your appointment online.
            </p>
            <Link
              href="/book"
              className="inline-block text-lg px-8 py-4 bg-charcoal text-white font-medium rounded-full hover:scale-105 transition-transform"
              style={{ color: "#FFFFFF" }}
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
