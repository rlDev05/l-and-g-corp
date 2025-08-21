import Image from "next/image";

export default function Home() {
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Powering the Philippines&apos; <br /> Energy Future.
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Leading Philippine energy trading company specializing in fuel
            products and gaseous fuels. We support key industries with reliable,
            efficient energy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                Our Services
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
            </a>
            <a
              href="#contact"
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Get in Touch
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section id="company-profile" className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
                  Company{" "}
                  <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Profile
                  </span>
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-base leading-relaxed text-justify">
                  L&G Energy Corp is a Philippine-based energy trading company established in 2025. We specialize in the import, export, and wholesale distribution of fuel products and gaseous fuels. With a strong focus on reliability, operational efficiency, and long-term partnerships, we aim to support the energy demands of key industries such as transportation, manufacturing, construction, and power generation.
                </p>
                <p className="text-base leading-relaxed text-justify">
                We are committed to delivering safe, high-quality fuel solutions across the country and are continuously expanding our network of storage, logistics, and distribution channels. Backed by a team of experienced professionals and a growing base of satisfied clients, L&G Energy Corp strives to become a trusted partner in the Philippine energy sector.
                </p>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    15+
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    500+
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    1000+
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 max-w-md mx-auto">
                <Image
                  src="/background/hero-bg.jpg"
                  alt="L&G Corporation Office"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-secondary rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Content */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="space-y-4 mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
                About{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  L&G Corporation
                </span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
              <p className="text-base leading-relaxed">
                Founded with a vision to transform businesses through innovative
                technology solutions, L&G Corporation has been at the forefront
                of digital transformation for over a decade.
              </p>
              <p className="text-base leading-relaxed">
                Our team of experienced professionals combines deep industry
                knowledge with cutting-edge technology to deliver solutions that
                drive real business value. We believe in building lasting
                partnerships with our clients, understanding their unique
                challenges, and providing tailored solutions that exceed
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Members Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
                Our{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Core Team
                </span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-8">
              Meet the talented professionals who drive our success and
              innovation
            </p>
          </div>
          {/* Vice Presidents */}
          <div className="text-center">
            <div className="space-y-4 mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-card-foreground">
                Meet Our{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Vice Presidents
                </span>
              </h3>
              <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
              {/* VP 1 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 ring-4 ring-primary/20 group-hover:ring-primary/40">
                    <Image
                      src="/members/sir-rayner.png"
                      alt="Sir Rayner - VP of Technology"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Sir Rayner
                </h4>
                <p className="text-primary font-medium mb-4">
                  Vice President of Technology
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed max-w-sm mx-auto">
                  Leading our technology initiatives with over 12 years of
                  experience in software development and digital innovation.
                  Expert in cloud architecture and emerging technologies.
                </p>
              </div>

              {/* VP 2 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 ring-4 ring-primary/20 group-hover:ring-primary/40">
                    <Image
                      src="/members/sir-arran.jpg"
                      alt="Sir Arran - VP of Operations"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Sir Arran
                </h4>
                <p className="text-primary font-medium mb-4">
                  Vice President of Operations
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed max-w-sm mx-auto">
                  Overseeing operational excellence and client success with 10+
                  years in business operations. Specializes in process
                  optimization and strategic planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
