export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/bg-1.png')",
          }}
        />

        {/* Overlay Filter */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            About{" "}
            <span className="text-primary-foreground bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">
              L&G Corporation
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Learn more about our company, mission, and values that drive our
            success and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#mission"
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                Our Mission
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
              href="#values"
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Core Values
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16">
            {/* Mission Section */}
            <section id="mission" className="group">
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are dedicated to delivering exceptional value to our
                  clients through innovative solutions and unwavering commitment
                  to quality. Our mission is to transform businesses by
                  leveraging cutting-edge technology and industry best
                  practices.
                </p>
              </div>
            </section>

            {/* Vision Section */}
            <section className="group">
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the leading provider of cutting-edge solutions that
                  transform businesses and drive success in the digital age. We
                  envision a future where technology seamlessly enhances human
                  potential and business growth.
                </p>
              </div>
            </section>

            {/* Values Section */}
            <section id="values" className="group">
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                    Our Values
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-card-foreground text-lg">
                      Innovation
                    </h3>
                    <p className="text-muted-foreground">
                      Constantly pushing boundaries and exploring new
                      technologies to deliver cutting-edge solutions.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-card-foreground text-lg">
                      Excellence
                    </h3>
                    <p className="text-muted-foreground">
                      Maintaining the highest standards of quality in everything
                      we do, from code to customer service.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-card-foreground text-lg">
                      Integrity
                    </h3>
                    <p className="text-muted-foreground">
                      Building trust through honest communication, transparent
                      processes, and ethical business practices.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-card-foreground text-lg">
                      Collaboration
                    </h3>
                    <p className="text-muted-foreground">
                      Working together with clients and team members to achieve
                      shared goals and mutual success.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* History Section */}
            <section className="group">
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                    Our History
                  </h2>
                </div>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Founded in 2009, L&G Corporation began as a small team of
                    passionate developers with a vision to transform how
                    businesses approach technology. What started as a local web
                    development agency has grown into a comprehensive technology
                    solutions provider.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Over the past 15+ years, we've helped hundreds of businesses
                    across various industries achieve their digital
                    transformation goals. Our journey has been marked by
                    continuous learning, adaptation to emerging technologies,
                    and unwavering commitment to client success.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, we're proud to be a trusted partner for organizations
                    seeking innovative solutions, with a team of experienced
                    professionals and a proven track record of delivering
                    exceptional results.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
