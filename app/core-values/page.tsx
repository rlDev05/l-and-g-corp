"use client";

import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";

export default function CoreValues() {
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
            backgroundImage: "url('/background/bg-6.jpg')",
          }}
        />

        {/* Overlay Filter */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeInSection delay={200} duration={800}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Mission and Vision
            </h1>
          </FadeInSection>
          <FadeInSection delay={400} duration={800}>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Discover what drives L&G Energy Corp forward and how we&apos;re committed to powering the Philippines&apos; energy future with integrity, innovation, and sustainability.
            </p>
          </FadeInSection>
          <FadeInSection delay={600} duration={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('mission-vision')}
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

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-card via-card to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Company Mission and Vision - Takes up 2 columns */}
            <div className="lg:col-span-2">
              <FadeInSection delay={200} duration={800}>
                <div className="space-y-6 lg:pt-16">
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
                      Mission and Vision
                    </h2>
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-base leading-relaxed text-justify">
                      L&G Energy Corp aims to become a nationally recognized company with the capability to compete at the international level — known for its reliability and excellence in providing logistics and fuel oil solutions.
                    </p>
                    <p className="text-base leading-relaxed text-justify">
                      We envision a company that is both nationally and globally competitive, achieving sustainable income and profitability, backed by strong management that upholds global standards and best practices. Our operations are built on quality, efficiency, and integrity.
                    </p>
                    <p className="text-base leading-relaxed text-justify">
                      Through reliable land and sea logistics, L&G Energy Corp ensures timely and efficient delivery, supported by a well-structured and dependable operational system — earning the trust of partners and clients across all markets we serve.
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Team Members - Takes up 1 column */}
            <div className="lg:col-span-1">
              <FadeInSection delay={400} duration={800}>
                <div className="space-y-8">
                  {/* President */}
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 ring-2 ring-primary/20 group-hover:ring-primary/40">
                        <Image
                          src="/members/sir-rayner.png"
                          alt="Rayner C. Lorenzo - President"
                          width={192}
                          height={192}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-card-foreground">
                        Rayner C. Lorenzo
                      </h4>
                      <p className="text-primary font-semibold text-base">
                        President
                      </p>
                    </div>
                  </div>

                  {/* Vice President */}
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 ring-2 ring-primary/20 group-hover:ring-primary/40">
                        <Image
                          src="/members/sir-arran.jpg"
                          alt="Arran Lester P. Galvan - Vice President"
                          width={192}
                          height={192}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-card-foreground">
                        Arran Lester P. Galvan
                      </h4>
                      <p className="text-primary font-semibold text-base">
                        Vice President
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
     </div>
   );
 }
