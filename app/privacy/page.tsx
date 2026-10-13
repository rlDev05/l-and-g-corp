'use client';

import FadeInSection from '@/components/FadeInSection';
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
    scrollToSection('mission-vision');
  }, []);
};

const SectionTitle = ({
  title,
  highlightedWord,
}: {
  title: string;
  highlightedWord: string;
}) => (
  <div className="space-y-3">
    <h2
      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-card-foreground text-center"
      style={{ marginTop: '5%' }}
    >
      {title}{' '}
      <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
        {highlightedWord}
      </span>
    </h2>
    <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
  </div>
);

const MissionVisionSection = () => (
  <section
    id="mission-vision"
    className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-card via-card to-muted/20 scroll-mt-12 sm:scroll-mt-16 lg:scroll-mt-20 xl:scroll-mt-24"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 sm:gap-12 lg:gap-16">
        {/* Company Mission and Vision - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <FadeInSection delay={200} duration={800}>
            <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              <SectionTitle title="Privacy" highlightedWord="Policy" />
              <div className="space-y-6 text-muted-foreground border-1 p-8 rounded-2xl shadow-2xl">
                <div>
                  <h3 className="text-md font-semibold text-card-foreground mb-2">
                    1. Information We Collect
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-justify mb-2">
                    We may collect information that you voluntarily provide when
                    using our website, including when you contact us, submit an
                    inquiry, or request information about our services.
                  </p>

                  <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                    <li>Name and contact information</li>
                    <li>Email address and telephone number</li>
                    <li>Company or organization information</li>
                    <li>
                      Information included in your inquiries or communications
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-card-foreground mb-2">
                    2. How We Use Your Information
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-justify mb-2">
                    Information collected through our website may be used for
                    the following purposes:
                  </p>

                  <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                    <li>Responding to inquiries and requests</li>
                    <li>Communicating with customers and business partners</li>
                    <li>
                      Providing information about our products and services
                    </li>
                    <li>Improving our website and user experience</li>
                    <li>Maintaining website security and functionality</li>
                    <li>
                      Complying with applicable legal and regulatory
                      requirements
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-card-foreground mb-2">
                    3. Sharing of Information
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    L&G Energy Corporation does not sell or rent your personal
                    information. Information may be shared with authorized
                    personnel, service providers, government authorities, or
                    other parties when required for legitimate business, legal,
                    or regulatory purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-card-foreground mb-2">
                    4. Cookies and Similar Technologies
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    Our website may use cookies or similar technologies to
                    maintain website functionality, understand visitor
                    interactions, improve performance, and remember certain
                    preferences. You may adjust your browser settings to control
                    or disable cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-card-foreground mb-2">
                    5. Data Security
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    We take reasonable measures to protect personal information
                    against unauthorized access, disclosure, loss, misuse,
                    alteration, or destruction. However, no electronic
                    transmission or storage method can be guaranteed to be
                    completely secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-card-foreground mb-2">
                    6. Data Retention
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    We retain personal information only for as long as
                    reasonably necessary for the purposes for which it was
                    collected, business requirements, legal obligations, dispute
                    resolution, or enforcement of agreements.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-card-foreground mb-2">
                    7. Your Privacy Rights
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-justify mb-2">
                    Subject to applicable laws and regulations, you may have the
                    following rights regarding your personal information:
                  </p>

                  <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                    <li>Request access to your personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion where legally permitted</li>
                    <li>Object to or restrict certain processing activities</li>
                    <li>Withdraw consent where applicable</li>
                    <li>
                      Raise concerns regarding the handling of your information
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-card-foreground mb-2">
                    8. Third-Party Websites
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    Our website may contain links to third-party websites or
                    services. L&G Energy Corporation is not responsible for the
                    privacy practices or content of third-party websites. We
                    encourage visitors to review the privacy policies of those
                    websites.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-card-foreground mb-2">
                    9. Children&apos;s Privacy
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    Our website is intended for general business and
                    informational purposes. We do not knowingly request or
                    collect personal information from children through our
                    website.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-card-foreground mb-2">
                    10. Changes to This Privacy Policy
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    We may update this Privacy Policy from time to time to
                    reflect changes in our business operations, website,
                    services, applicable laws, or privacy practices. Any updated
                    version will be posted on this page with its corresponding
                    effective date.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-card-foreground mb-2">
                    11. Contact Us
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-justify mb-2">
                    If you have questions, concerns, or requests regarding this
                    Privacy Policy, you may contact us through:
                  </p>

                  <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                    <li>L&G Energy Corporation</li>
                    <li>
                      Unit 401, PSC Building, 2410 Gen. Belarmino St., Bangkal,
                      Makati City, Philippines
                    </li>
                    <li>ccabalonga@l-and-gcorp.com</li>
                    <li>+63 917 827 7260</li>
                  </ul>
                </div>
              </div>
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
      <MissionVisionSection />
    </div>
  );
}
