import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/hero-bg.jpg')"
          }}
        />
        
        {/* Overlay Filter */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Welcome to <span className="text-primary-foreground bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">L&G Corporation</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            We provide innovative solutions and exceptional services to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#services" 
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                Our Services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a 
              href="#contact" 
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Get in Touch
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground">
                  Company <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Profile</span>
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  L&G Corporation is a leading technology company dedicated to transforming businesses through innovative solutions. 
                  With over 15 years of experience, we have established ourselves as a trusted partner for organizations seeking 
                  digital transformation and technological advancement.
                </p>
                <p className="text-lg leading-relaxed">
                  Our comprehensive portfolio spans across multiple industries, delivering cutting-edge solutions that drive 
                  real business value. We pride ourselves on our commitment to excellence, innovation, and client satisfaction.
                </p>
              </div>
              
              {/* Key Statistics */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center group">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">15+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">1000+</div>
                  <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative group">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <Image 
                  src="/background/hero-bg.jpg"
                  alt="L&G Corporation Office"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground">
                About <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">L&G Corporation</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Founded with a vision to transform businesses through innovative technology solutions, 
                L&G Corporation has been at the forefront of digital transformation for over a decade.
              </p>
              <p className="text-lg leading-relaxed">
                Our team of experienced professionals combines deep industry knowledge with cutting-edge 
                technology to deliver solutions that drive real business value. We believe in building 
                lasting partnerships with our clients, understanding their unique challenges, and 
                providing tailored solutions that exceed expectations.
              </p>
            </div>
            
            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mt-12">
              <div className="group p-8 bg-card rounded-2xl border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-card-foreground text-xl">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">We are dedicated to delivering exceptional value to our clients through innovative solutions and unwavering commitment to quality.</p>
              </div>
              <div className="group p-8 bg-card rounded-2xl border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-card-foreground text-xl">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">To become the leading provider of cutting-edge solutions that transform businesses and drive success in the digital age.</p>
              </div>
            </div>
          </div>
          
          {/* Vice Presidents */}
          <div className="text-center">
            <div className="space-y-4 mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                Meet Our <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Vice Presidents</span>
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
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-card-foreground mb-2">Sir Rayner</h4>
                <p className="text-primary font-medium mb-4">Vice President of Technology</p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                  Leading our technology initiatives with over 12 years of experience in software development 
                  and digital innovation. Expert in cloud architecture and emerging technologies.
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
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-card-foreground mb-2">Sir Arran</h4>
                <p className="text-primary font-medium mb-4">Vice President of Operations</p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                  Overseeing operational excellence and client success with 10+ years in business operations. 
                  Specializes in process optimization and strategic planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Members Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground">
                Our <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Core Team</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-8">
              Meet the talented professionals who drive our success and innovation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
