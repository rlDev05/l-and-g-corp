"use client";

import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/hero-bg.jpg')",
          }}
        />

        {/* Overlay Filter */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeInSection delay={200} duration={800}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Powering the Philippines&apos; <br /> Energy Future.
            </h1>
          </FadeInSection>
          <FadeInSection delay={400} duration={800}>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            L&G Energy Corp is an emerging Philippine energy trading company engaged in the import, export, and wholesale of fuel and gaseous products. Guided by innovation and commitment, we aim to become a trusted partner in meeting the country’s growing energy needs.
            </p>
          </FadeInSection>
          <FadeInSection delay={600} duration={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('company-profile')}
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Learn More
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
          </FadeInSection>
        </div>
      </section>

      {/* Company Profile Section */}
      <section id="company-profile" className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <FadeInSection delay={200} duration={800}>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
                    Company{" "}
                    <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
                      Profile
                    </span>
                  </h2>
                  <div className="w-20 h-1 bg-primary rounded-full"></div>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base leading-relaxed text-justify">
                    L&G Energy Corp is a Philippine-based energy trading company established in 2025. We specialize in the import, export, and wholesale distribution of fuel products and gaseous fuels. With a strong focus on reliability, operational efficiency, and long-term partnerships, we aim to support the energy demands of key industries such as transportation, manufacturing, construction, and power generation.
                  </p>
                  <p className="text-base leading-relaxed text-justify">
                  We are committed to delivering safe, high-quality fuel solutions across the country and are continuously expanding our network of storage, logistics, and distribution channels. Backed by a team of experienced professionals and a growing base of satisfied clients, L&G Energy Corp strives to become a trusted partner in the Philippine energy sector.
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Image */}
            <FadeInSection delay={400} duration={800}>
              <div className="relative group">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 max-w-sm mx-auto">
                  <Image
                    src="/background/company-image.jpg"
                    alt="L&G Corporation Office"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-16 sm:py-20 lg:py-24 bg-muted/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Image */}
            <FadeInSection delay={400} duration={800}>
              <div className="relative group order-2 lg:order-1">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 max-w-md mx-auto">
                  <Image
                    src="/logo/l-and-g-corp-logo.jpg"
                    alt="L&G Energy Operations"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </FadeInSection>

            {/* Text Content */}
            <FadeInSection delay={200} duration={800}>
              <div className="space-y-8 order-1 lg:order-2 max-w-2xl mx-auto lg:mx-0">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
                    About{" "}
                    <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
                      L&G Energy
                    </span>
                  </h2>
                  <div className="w-20 h-1 bg-primary rounded-full"></div>
                </div>
                <div className="space-y-6 text-muted-foreground text-justify">
                  <p className="text-base leading-relaxed">
                  Established in 2025, we are a Philippine-based energy trading company specializing in the import, export, and wholesale distribution of fuel products and gaseous fuels. Our focus on reliability, operational efficiency, and long-term partnerships supports the energy demands of key industries.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
