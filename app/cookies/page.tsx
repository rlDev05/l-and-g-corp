'use client';

import FadeInSection from '@/components/FadeInSection';

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
    <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
  </div>
);

const CookiesSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-card via-card to-muted/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeInSection delay={200} duration={800}>
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          <SectionTitle title="Cookies" highlightedWord="Policy" />

          <div className="space-y-6 text-muted-foreground border p-6 sm:p-8 rounded-2xl shadow-2xl">
            <p className="text-sm sm:text-base leading-relaxed text-justify">
              L&amp;G Energy Corporation uses cookies and similar technologies
              to support website functionality, improve visitor experience, and
              understand how our website is used. This Cookies Policy explains
              what cookies are, how they may be used, and the choices available
              to you.
            </p>

            <div>
              <h3 className="text-md font-semibold text-card-foreground mb-2">
                1. What Are Cookies?
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                Cookies are small text files stored on your device when you
                visit a website. They help websites remember certain information
                about your visit, such as preferences or session settings.
                Similar technologies may also be used to support website
                functionality and performance.
              </p>
            </div>

            <div>
              <h3 className="text-md font-semibold text-card-foreground mb-2">
                2. How We Use Cookies
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify mb-2">
                Depending on the features enabled on our website, cookies may be
                used to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li>Support essential website functions and navigation</li>
                <li>Remember user preferences and settings</li>
                <li>Understand website traffic and visitor interactions</li>
                <li>
                  Monitor website performance and identify technical issues
                </li>
                <li>Help maintain website security and reliability</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold text-card-foreground mb-2">
                3. Types of Cookies
              </h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-card-foreground">
                    Essential Cookies
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    These cookies are necessary for core website functions,
                    security, and navigation. Disabling them may affect how
                    certain parts of the website operate.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-card-foreground">
                    Functional Cookies
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    These cookies may remember selected preferences to provide a
                    more consistent and convenient browsing experience.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-card-foreground">
                    Analytics Cookies
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    If analytics tools are enabled, these cookies may help us
                    understand how visitors use our website so we can improve
                    its content, performance, and usability.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-card-foreground">
                    Third-Party Cookies
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-justify">
                    Certain third-party services integrated into our website may
                    set their own cookies, subject to their respective policies
                    and settings.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-md font-semibold text-card-foreground mb-2">
                4. Third-Party Services
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                Our website may use third-party services for functions such as
                website hosting, security, embedded content, or analytics. Where
                applicable, these services may use cookies or similar
                technologies in accordance with their own privacy policies. The
                use of any such services depends on the tools enabled on our
                website.
              </p>
            </div>

            <div>
              <h3 className="text-md font-semibold text-card-foreground mb-2">
                5. Managing Cookies
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                You can manage or disable cookies through your browser settings.
                Please note that blocking certain cookies may affect website
                functionality or prevent some features from working as intended.
                If our website provides cookie preference controls, you may also
                use those controls to manage your choices.
              </p>
            </div>

            <div>
              <h3 className="text-md font-semibold text-card-foreground mb-2">
                6. Consent and Your Choices
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                Where consent is required, non-essential cookies should only be
                used in accordance with your applicable choices and legal
                requirements. You may change your browser settings or withdraw
                consent where a cookie preference mechanism is provided.
                Essential cookies may still be used where necessary for the
                operation and security of the website.
              </p>
            </div>

            <div>
              <h3 className="text-md font-semibold text-card-foreground mb-2">
                7. Data and Privacy
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                Information collected through cookies may be subject to our
                Privacy Policy. We take reasonable measures to handle
                information in accordance with applicable privacy and data
                protection requirements. Please review our Privacy Policy for
                additional information about how personal information is
                handled.
              </p>
            </div>

            <div>
              <h3 className="text-md font-semibold text-card-foreground mb-2">
                8. Changes to This Cookies Policy
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                We may update this Cookies Policy to reflect changes in our
                website, technologies, business practices, or applicable
                requirements. Any revised version will be published on this
                page.
              </p>
            </div>

            <div>
              <h3 className="text-md font-semibold text-card-foreground mb-2">
                9. Contact Us
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify mb-2">
                If you have questions about this Cookies Policy, you may
                contact:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li>L&amp;G Energy Corporation</li>
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
  </section>
);

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <CookiesSection />
    </div>
  );
}
