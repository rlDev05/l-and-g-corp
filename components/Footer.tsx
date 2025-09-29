import Link from 'next/link';

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#company-profile' },
    { name: 'Mission & Vision', href: '/core-values' },
    { name: 'What We Offer', href: '/what-we-offer' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact Us', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#343a40] border-t border-border font-helvetica">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Company Info */}
            <div className="flex flex-col">
              <div className="mb-4">
                <div className="text-white font-bold text-lg">
                  L&G ENERGY CORP
                </div>
                <div className="text-white font-semibold text-sm">
                  Powering the Philippines&apos; Energy Future
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3 leading-relaxed text-justify">
                L&G Energy Corp is an emerging Philippine energy trading company
                engaged in the import, export, and wholesale of fuel and gaseous
                products. Guided by innovation and commitment, we aim to become
                a trusted partner in meeting the country&apos;s growing energy
                needs.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-white hover:text-[#D4A54A] hover:bg-gray-500 transition-all duration-300 cursor-pointer"
                  aria-label="Facebook"
                  title="Follow us on Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-white hover:text-[#D4A54A] hover:bg-gray-500 transition-all duration-300 cursor-pointer"
                  aria-label="LinkedIn"
                  title="Connect with us on LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links - Centered on mobile/tablet, 20% left padding on large screens */}
            <div className="flex flex-col items-center justify-center md:items-start lg:pl-[20%]">
              <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-left">
                Quick Links
              </h3>
              <ul className="space-y-2 text-center md:text-left w-full">
                {footerLinks.quickLinks.map((link) => (
                  <li
                    key={link.name}
                    className="flex justify-center md:justify-start"
                  >
                    <Link
                      href={link.href}
                      className="text-gray-200 hover:text-[#D4A54A] transition-colors duration-300 cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-[#D4A54A] mt-0.5">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Unit 401, PSC Building, 2410, Hen. Belarmino St. Bangkal,
                    Makati City Philippines
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-[#D4A54A]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+639178277260"
                    className="text-gray-200 text-sm hover:text-[#D4A54A] transition-colors duration-300 cursor-pointer"
                  >
                    +63 917 827 7260
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-[#D4A54A]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+639189358977"
                    className="text-gray-200 text-sm hover:text-[#D4A54A] transition-colors duration-300 cursor-pointer"
                  >
                    +63 918 935 8977
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-[#D4A54A]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:rlorenzo@l-and-gcorp.com"
                    className="text-gray-200 text-sm hover:text-[#D4A54A] transition-colors duration-300 cursor-pointer"
                  >
                    rlorenzo@l-and-gcorp.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-[#D4A54A]">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:arrangalvan@l-and-gcorp.com"
                    className="text-gray-200 text-sm hover:text-[#D4A54A] transition-colors duration-300 cursor-pointer"
                  >
                    arrangalvan@l-and-gcorp.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div className="text-gray-200 text-sm">
                © 2025 L&G Energy Corp. All rights reserved. | Philippine
                Energy Trading Company
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-200">
              <Link
                href="/contact"
                className="hover:text-[#D4A54A] transition-colors duration-300 cursor-pointer"
              >
                Contact Us
              </Link>
              <Link
                href="/certifications"
                className="hover:text-[#D4A54A] transition-colors duration-300 cursor-pointer"
              >
                Certifications
              </Link>
              <Link
                href="/core-values"
                className="hover:text-[#D4A54A] transition-colors duration-300 cursor-pointer"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
