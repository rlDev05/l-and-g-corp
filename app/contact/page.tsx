"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/bg-3.png')",
          }}
        />

        {/* Overlay Filter */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Get in touch with L&G Energy Corp. We&apos;re here to answer your questions and discuss how we can support your energy needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact-info')}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="contact-info" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
            <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto">
              Ready to discuss your energy needs? Contact our team for personalized solutions and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">
                  Contact Information
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Reach out to us through any of the following channels. Our team is ready to assist you with your energy requirements.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Office Address</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Unit 401, PSC Building, 2410, Hen. Belarmino St. Bangkal, Makati City Philippines
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Phone Numbers</h4>
                    <div className="space-y-1">
                      <a href="tel:+639626876432" className="block text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                        +63 962 687 6432
                      </a>
                      <a href="tel:+639189358977" className="block text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                        +63 918 935 8977
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Email Addresses</h4>
                    <div className="space-y-1">
                      <a href="mailto:rlorenzo@l-and-gcorp.com" className="block text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                        rlorenzo@l-and-gcorp.com
                      </a>
                      <a href="mailto:arrangalvan@l-and-gcorp.com" className="block text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                        arrangalvan@l-and-gcorp.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Business Hours</h4>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 3:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">
                  Send Us a Message
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Have questions about our services? Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-gray-900">Contact Form</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="fuel-products">Fuel Products</option>
                      <option value="trading-services">Trading Services</option>
                      <option value="logistics">Logistics & Distribution</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-sm"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                  >
                    Send Message
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
