'use client';

import FadeInSection from '@/components/FadeInSection';
import OptimizedHeroBackground from '@/components/OptimizedHeroBackground';
import {
  Award,
  Gauge,
  Handshake,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import { useCallback } from 'react';

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
    scrollToSection('company-profile');
  }, []);

  return (
    <OptimizedHeroBackground
      imagePath="/background/hero-bg.jpg"
      alt="L&G Energy Corp Hero Background"
      overlayOpacity={0.7}
    >
      <FadeInSection delay={200} duration={800}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight text-white">
          Powering the Philippines&apos; Energy Future
        </h1>
      </FadeInSection>
      <FadeInSection delay={400} duration={800}>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light px-4 text-justify text-white">
          L&G Energy Corp is an emerging Philippine energy trading company
          engaged in the import, export, and wholesale of fuel and gaseous
          products. Guided by innovation and commitment, we aim to become a
          trusted partner in meeting the country&apos;s growing energy needs.
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
  className = '',
}: {
  title: string;
  highlightedWord: string;
  className?: string;
}) => (
  <div className={`space-y-3 ${className}`}>
    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-card-foreground">
      {title}{' '}
      <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
        {highlightedWord}
      </span>
    </h2>
    <div className="w-20 h-1 bg-primary rounded-full mx-auto lg:mx-0"></div>
  </div>
);

const CompanyImage = ({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={`relative group ${className}`}>
    <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        priority
      />
    </div>
  </div>
);

const CompanyProfileSection = () => (
  <section
    id="company-profile"
    className="pt-12 sm:pt-16 lg:pt-20 xl:pt-28 pb-12 sm:pb-16 lg:pb-20 bg-card scroll-mt-12 sm:scroll-mt-16 lg:scroll-mt-20 xl:scroll-mt-24"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <FadeInSection delay={200} duration={800}>
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <SectionTitle title="About" highlightedWord="Us" />
            <div className="space-y-4 text-muted-foreground">
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                Established in 2025, we are a Philippine-based energy trading
                company specializing in the import, export, and wholesale
                distribution of fuel products and gaseous fuels. Our focus on
                reliability, operational efficiency, and long-term partnerships
                supports the energy demands of key industries.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                L&G Energy Corp is a Philippine-based energy trading company
                established in 2025. We specialize in the import, export, and
                wholesale distribution of fuel products and gaseous fuels. With
                a strong focus on reliability, operational efficiency, and
                long-term partnerships, we aim to support the energy demands of
                key industries such as transportation, manufacturing,
                construction, and power generation.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                We are committed to delivering safe, high-quality fuel solutions
                across the country and are continuously expanding our network of
                storage, logistics, and distribution channels. Backed by a team
                of experienced professionals and a growing base of satisfied
                clients, L&G Energy Corporation strives to become a trusted
                partner in the Philippine energy sector.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Image */}
        <FadeInSection delay={400} duration={800}>
          <CompanyImage
            src="/background/company-image.jpg"
            alt="L&G Corporation Office"
          />
        </FadeInSection>
      </div>
    </div>
  </section>
);

const AboutUsSection = () => (
  <section
    id="about-us"
    className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-muted/30 scroll-mt-12 sm:scroll-mt-16 lg:scroll-mt-20 xl:scroll-mt-24"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Image */}

        {/* Text Content */}
        <FadeInSection delay={200} duration={800}>
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <SectionTitle title="Core" highlightedWord="Values" />

            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-justify">
              <p className="text-sm sm:text-base leading-relaxed">
                At L&amp;G Energy Corporation, our core values guide our
                decisions, shape our operations, and define our commitment to
                delivering reliable fuel and logistics solutions.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="border-1 p-2 rounded-lg bg-gradient-to-br from-black to-[#b27e1b]">
                    <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-2xl text-foreground uppercase mb-3 mt-2">
                      Reliability
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed">
                      We are committed to dependable service, timely deliveries,
                      and consistent operational performance, ensuring our
                      clients and partners can rely on us to meet their fuel and
                      logistics needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="border-1 p-2 rounded-lg bg-gradient-to-br from-black to-[#b27e1b]">
                    <Award className="mt-1 h-6 w-6 shrink-0 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-2xl text-foreground uppercase mb-3 mt-2">
                      Excellence
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed">
                      We pursue the highest standards in our products, services,
                      and operations through continuous improvement,
                      professional competence, and adherence to industry best
                      practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="border-1 p-2 rounded-lg bg-gradient-to-br from-black to-[#b27e1b]">
                    <Handshake className="mt-1 h-6 w-6 shrink-0 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-2xl text-foreground uppercase mb-3 mt-2">
                      Integrity
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed">
                      We conduct our business with honesty, transparency,
                      accountability, and fairness, building lasting
                      relationships through ethical decisions and responsible
                      business practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="border-1 p-2 rounded-lg bg-gradient-to-br from-black to-[#b27e1b]">
                    <Gauge className="mt-1 h-6 w-6 shrink-0 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-2xl text-foreground uppercase mb-3 mt-2">
                      Efficiency
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed">
                      We optimize our resources, strengthen our operational
                      systems, and streamline our logistics processes to deliver
                      timely, cost-effective, and high-quality solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="border-1 p-2 rounded-lg bg-gradient-to-br from-black to-[#b27e1b]">
                    <Users className="mt-1 h-6 w-6 shrink-0 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-2xl text-foreground uppercase mb-3 mt-2">
                      Partnership
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed">
                      We value the trust and cooperation of our clients,
                      suppliers, and business partners, fostering strong
                      relationships built on mutual respect, shared goals, and
                      dependable service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="border-1 p-2 rounded-lg bg-gradient-to-br from-black to-[#b27e1b]">
                    <TrendingUp className="mt-1 h-6 w-6 shrink-0 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-2xl text-foreground uppercase mb-3 mt-2">
                      Sustainable Growth
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed">
                      We pursue long-term profitability and national and
                      international competitiveness through sound management,
                      responsible business decisions, and continuous
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={400} duration={800}>
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 mx-auto lg:mx-0 text-center lg:text-left border-1 p-8 rounded-xl shadow-lg mb-9 bg-gradient-to-br from-black to-[#b27e1b]">
            <SectionTitle title="" highlightedWord="Our Mission" />
            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-justify">
              <p className="text-sm sm:text-base leading-relaxed text-white">
                L&G Energy Corp aims to become a nationally recognized company
                with the capability to compete at the international level —
                known for its reliability and excellence in providing logistics
                and fuel oil solutions. Through reliable land and sea logistics,
                L&G Energy Corp ensures timely and efficient delivery, supported
                by a well-structured and dependable operational system — earning
                the trust of partners and clients across all markets we serve.
              </p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 mx-auto lg:mx-0 text-center lg:text-left border-1 p-8 rounded-xl shadow-lg bg-gradient-to-br from-black to-[#b27e1b]">
            <SectionTitle title="" highlightedWord="Our Vision" />
            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-justify">
              <p className="text-sm sm:text-base leading-relaxed text-white">
                We envision a company that is both nationally and globally
                competitive, achieving sustainable income and profitability,
                backed by strong management that upholds global standards and
                best practices. Our operations are built on quality, efficiency,
                and integrity.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
);

// Main Component
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CompanyProfileSection />
      <AboutUsSection />
    </div>
  );
}
