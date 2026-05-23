"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <div className="text-center mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-henna-900 dark:text-henna-100 mb-3">
          Contact Us
        </h1>
        <p className="text-henna-600 dark:text-henna-400">
          We would love to hear from you. Send us a message!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-henna-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mail size={18} className="text-henna-400" />
            </div>
            <div>
              <h3 className="font-semibold text-henna-900 dark:text-henna-100 mb-1">Email</h3>
              <a href="mailto:hello@mehndiglow.com" className="text-henna-400 hover:underline text-sm">
                hello@mehndiglow.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-henna-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin size={18} className="text-henna-400" />
            </div>
            <div>
              <h3 className="font-semibold text-henna-900 dark:text-henna-100 mb-1">Location</h3>
              <p className="text-henna-600 dark:text-henna-400 text-sm">Pakistan</p>
            </div>
          </div>

          <div className="p-5 bg-henna-100 dark:bg-henna-800 rounded-2xl">
            <h3 className="font-semibold text-henna-900 dark:text-henna-100 mb-2">DMCA / Image Removal</h3>
            <p className="text-sm text-henna-600 dark:text-henna-400">
              If you believe your copyrighted image is on our site, please email us with the image URL and proof of ownership. We will remove it within 24 hours.
            </p>
          </div>
        </div>

        {/* Form */}
        {sent ? (
          <div className="flex flex-col items-center justify-center text-center p-10 bg-henna-100 dark:bg-henna-800 rounded-2xl">
            <span className="text-4xl mb-3">🌸</span>
            <h3 className="font-serif text-xl font-semibold text-henna-900 dark:text-henna-100 mb-2">Message Sent!</h3>
            <p className="text-henna-600 dark:text-henna-400 text-sm">We will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-henna-700 dark:text-henna-300 mb-1">Name</label>
              <input type="text" required placeholder="Your name" className="search-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-henna-700 dark:text-henna-300 mb-1">Email</label>
              <input type="email" required placeholder="your@email.com" className="search-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-henna-700 dark:text-henna-300 mb-1">Subject</label>
              <input type="text" required placeholder="How can we help?" className="search-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-henna-700 dark:text-henna-300 mb-1">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Write your message here..."
                className="search-input resize-none rounded-2xl"
              />
            </div>
            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-3">
              <Send size={16} />
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
