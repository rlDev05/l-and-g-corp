"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Our Mission, Vision & <br />
            <span className="text-primary-foreground bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">
              Core Values
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Discover what drives L&G Energy Corp forward and how we&apos;re committed to powering the Philippines&apos; energy future with integrity, innovation, and sustainability.
          </p>
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
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Company Mission Text */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Company Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through reliable land and sea logistics, L&G Energy Corp ensures timely and efficient delivery, supported by a well-structured and dependable operational system — earning the trust of partners and clients across all markets we serve.
              </p>
            </div>

            {/* Mission Statement Card */}
            <Card className="border-0 shadow-lg bg-white rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Mission Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-600 rounded-full"></div>
                  <blockquote className="pl-6 italic text-lg text-gray-700 leading-relaxed">
                    &quot;To deliver exceptional energy solutions that empower Philippine industries, ensuring sustainable growth and operational excellence through innovation, integrity, and unwavering commitment to our partners.&quot;
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision Statement Card */}
            <Card className="border-0 shadow-lg bg-white rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Vision Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-600 rounded-full"></div>
                  <blockquote className="pl-6 italic text-lg text-gray-700 leading-relaxed">
                    &quot;To be the most trusted and innovative energy partner in the Philippines, leading the transition to sustainable energy solutions while maintaining our position as the premier fuel trading company in the region.&quot;
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            {/* Company Vision Text */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Company Vision
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  L&G Energy Corp aims to become a nationally recognized company with the capability to compete at the international level — known for its reliability and excellence in providing logistics and fuel oil solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We envision a company that is both nationally and globally competitive, achieving sustainable income and profitability, backed by strong management that upholds global standards and best practices. Our operations are built on quality, efficiency, and integrity.
                </p>
              </div>
            </div>
                     </div>
         </div>
       </section>
     </div>
   );
 }
