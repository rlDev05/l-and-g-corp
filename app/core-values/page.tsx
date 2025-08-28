'use client';

import FadeInSection from '@/components/FadeInSection';
import OptimizedHeroBackground from '@/components/OptimizedHeroBackground';
import Image from 'next/image';
import { useCallback } from 'react';

// Constants
const TEAM_MEMBERS = [
  {
    name: 'Rayner C. Lorenzo',
    position: 'President',
    image: '/members/sir-rayner.png',
    alt: 'Rayner C. Lorenzo - President',
  },
  {
    name: 'Arran Lester P. Galvan',
    position: 'Vice President',
    image: '/members/sir-arran.jpg',
    alt: 'Arran Lester P. Galvan - Vice President',
  },
];

// Utility function for smooth scrolling
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Components
const HeroSection = () => {
  const handleScrollToSection = useCallback(() => {
    scrollToSection('mission-vision');
  }, []);

  return (
    <OptimizedHeroBackground
      imagePath="/background/bg-6.jpg"
      alt="Mission and Vision Hero Background"
      overlayOpacity={0.6}
    >
      <FadeInSection delay={200} duration={800}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
          Mission and Vision
        </h1>
      </FadeInSection>
      <FadeInSection delay={400} duration={800}>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light px-4">
          Discover what drives L&G Energy Corp forward and how we&apos;re
          committed to powering the Philippines&apos; energy future with
          integrity, innovation, and sustainability.
        </p>
      </FadeInSection>
      <FadeInSection delay={600} duration={800}>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button
            onClick={handleScrollToSection}
            className="group bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer w-full sm:w-auto min-h-[44px] flex items-center justify-center"
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
    </OptimizedHeroBackground>
  );
};

const SectionTitle = ({
  title,
  highlightedWord,
}: {
  title: string;
  highlightedWord: string;
}) => (
  <div className="space-y-3">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-card-foreground text-center lg:text-left">
      {title}{' '}
      <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
        {highlightedWord}
      </span>
    </h2>
    <div className="w-20 h-1 bg-primary rounded-full mx-auto lg:mx-0"></div>
  </div>
);

const TeamMemberCard = ({ member }: { member: (typeof TEAM_MEMBERS)[0] }) => (
  <div className="text-center group">
    <div className="relative mb-4 sm:mb-6">
      <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 ring-2 ring-primary/20 group-hover:ring-primary/40">
        <Image
          src={member.image}
          alt={member.alt}
          width={192}
          height={192}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-base sm:text-lg font-bold text-card-foreground">
        {member.name}
      </h4>
      <p className="text-primary font-semibold text-sm sm:text-base">
        {member.position}
      </p>
    </div>
  </div>
);

const MissionVisionSection = () => (
  <section
    id="mission-vision"
    className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-card via-card to-muted/20 scroll-mt-12 sm:scroll-mt-16 lg:scroll-mt-20 xl:scroll-mt-24"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
        {/* Company Mission and Vision - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <FadeInSection delay={200} duration={800}>
            <div className="space-y-4 sm:space-y-6 lg:pt-8 xl:pt-16">
              <SectionTitle
                title="Mission and Vision"
                highlightedWord="Statement"
              />
              <div className="space-y-4 text-muted-foreground">
                <p className="text-sm sm:text-base leading-relaxed text-justify">
                  L&G Energy Corp aims to become a nationally recognized company
                  with the capability to compete at the international level —
                  known for its reliability and excellence in providing
                  logistics and fuel oil solutions.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-justify">
                  We envision a company that is both nationally and globally
                  competitive, achieving sustainable income and profitability,
                  backed by strong management that upholds global standards and
                  best practices. Our operations are built on quality,
                  efficiency, and integrity.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-justify">
                  Through reliable land and sea logistics, L&G Energy Corp
                  ensures timely and efficient delivery, supported by a
                  well-structured and dependable operational system — earning
                  the trust of partners and clients across all markets we serve.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Team Members - Takes up 1 column */}
        <div className="lg:col-span-1">
          <FadeInSection delay={400} duration={800}>
            <div className="space-y-6 sm:space-y-8">
              {TEAM_MEMBERS.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  </section>
);

// Main Component
export default function CoreValues() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MissionVisionSection />
    </div>
  );
}
