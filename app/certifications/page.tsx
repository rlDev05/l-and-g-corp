"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Actual certifications data using your real certification images
const certifications = [
  {
    id: 1,
    title: "Business Permit",
    fullTitle: "L&G Energy Corporation - Business Permit & Registration",
    description: "Official business permit and registration certificate for L&G Energy Corporation",
    image: "/certifications/buss-perm.png",
    category: "Business Registration",
    issueDate: "June 25, 2024",
    expiryDate: "December 31, 2025",
    certificateNumber: "BP-2024-001",
    issuingAuthority: "Local Government Unit"
  },
  {
    id: 2,
    title: "Page 1 of BIR Certificate of Registration",
    fullTitle: "L&G Energy Corporation - Primary Certificate of Registration",
    description: "Primary certificate of registration for corporate business operations",
    image: "/certifications/cor-1.png",
    category: "Corporate Registration",
    issueDate: "June 11, 2025",
    expiryDate: "February 20, 2027",
    certificateNumber: "COR-2024-001",
    issuingAuthority: "Securities and Exchange Commission"
  },
  {
    id: 3,
    title: "Page 2 of BIR Certificate of Registration",
    fullTitle: "L&G Energy Corporation - Secondary Certificate of Registration",
    description: "Additional certificate of registration for expanded business operations",
    image: "/certifications/cor-2.png",
    category: "Corporate Registration",
    issueDate: "June 11, 2025",
    expiryDate: "March 10, 2027",
    certificateNumber: "COR-2024-002",
    issuingAuthority: "Securities and Exchange Commission"
  },
  {
    id: 4,
    title: "Barangay Clearance",
    fullTitle: "L&G Energy Corporation - Barangay Business Clearance",
    description: "Local barangay clearance certificate for business operations",
    image: "/certifications/brgy-clearance.png",
    category: "Local Compliance",
    issueDate: "June 5, 2025",
    expiryDate: "December 31, 2025",
    certificateNumber: "BC-2024-001",
    issuingAuthority: "Barangay Council"
  },
  {
    id: 5,
    title: "BOC Certificate of Registration",
    fullTitle: "L&G Energy Corporation - Bureau of Customs Certificate of Registration",
    description: "Official registration certificate from the Bureau of Customs for import/export operations",
    image: "/certifications/BOC Certificate of Registration.jpg",
    category: "Customs Registration",
    issueDate: "August 09, 2025",
    expiryDate: "August 09, 2026",
    certificateNumber: "BOC-COR-2024-001",
    issuingAuthority: "Bureau of Customs"
  },
  {
    id: 6,
    title: "BOC Certificate of Accreditation as Importer",
    fullTitle: "L&G Energy Corporation - Bureau of Customs Accreditation as Importer",
    description: "Official accreditation certificate from the Bureau of Customs authorizing import operations",
    image: "/certifications/BOC Certificate of Accreditation as Importer.jpg",
    category: "Customs Accreditation",
    issueDate: "August 9, 2025",
    expiryDate: "August 9, 2026",
    certificateNumber: "BOC-CAI-2024-001",
    issuingAuthority: "Bureau of Customs"
  }
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCertification, setSelectedCertification] = useState<typeof certifications[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const openModal = (certification: typeof certifications[0]) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertification(null);
  };

  // Calculate which certifications to show in the carousel
  const getVisibleCertifications = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % certifications.length;
      visible.push(certifications[index]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/bg-3.png')",
          }}
        />

        {/* Overlay Filter */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Our{" "}
            <span className="text-primary-foreground bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">
              Certifications
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            L&G Energy Corp. maintains the highest standards of quality, safety, and environmental responsibility through our comprehensive certification portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('certifications-carousel')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span className="flex items-center gap-2">
                View Certifications
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

      {/* Company Introduction */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our commitment to excellence is demonstrated through our comprehensive certification portfolio. These certifications validate our adherence to international standards in quality management, environmental responsibility, occupational health and safety, and industry-specific requirements.
            </p>
            <div className="text-xl sm:text-2xl font-bold text-card-foreground">
              Trust in our certified processes and commitment to continuous improvement.
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Carousel Section */}
      <section id="certifications-carousel" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
                Our{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-8 leading-relaxed">
              Click on any certification to view the full image
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Previous certification"
            >
              <svg
                className="w-6 h-6 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Next certification"
            >
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
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
            </button>

                         {/* Carousel Cards */}
             <div className="flex justify-center items-center gap-6 lg:gap-8 px-16">
               {getVisibleCertifications().map((certification, index) => (
                 <Card
                   key={certification.id}
                   className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md bg-white overflow-hidden rounded-xl w-80 h-96 ${
                     index === 0 ? 'opacity-100' : 'opacity-70'
                   }`}
                   onClick={() => openModal(certification)}
                 >
                   <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden relative">
                     <img 
                       src={certification.image} 
                       alt={certification.title}
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.style.display = 'none';
                         target.nextElementSibling?.classList.remove('opacity-20');
                       }}
                     />
                     <div className="text-4xl opacity-20 absolute">
                       📜
                     </div>
                     {/* Overlay */}
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                       <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <div className="bg-white/90 text-gray-800 px-4 py-2 rounded-lg font-semibold">
                           Click to View
                         </div>
                       </div>
                     </div>
                   </div>
                   <CardContent className="p-4 h-48 flex flex-col justify-between">
                     <div>
                       <h3 className="text-base font-bold text-gray-900 leading-tight text-center group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-2">
                         {certification.title}
                       </h3>
                       <p className="text-sm text-gray-600 leading-relaxed text-left line-clamp-3">
                         {certification.description}
                       </p>
                     </div>
                     <div>
                       <div className="w-8 h-0.5 bg-primary mx-auto mb-3 rounded-full"></div>
                       <div className="text-center">
                         <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                           {certification.category}
                         </span>
                       </div>
                     </div>
                   </CardContent>
                </Card>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to certification ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

             {/* Modal */}
       {isModalOpen && selectedCertification && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
             onClick={closeModal}
           />
           
                        {/* Modal Content */}
           <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto my-4">
             {/* Header */}
             <div className="bg-primary p-4 flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                   </svg>
                 </div>
                 <h2 className="text-white font-semibold text-lg">
                   {selectedCertification.title}
                 </h2>
               </div>
               <button
                 onClick={closeModal}
                 className="text-white hover:text-white/80 transition-colors"
                 aria-label="Close modal"
               >
                 <svg
                   className="w-6 h-6"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M6 18L18 6M6 6l12 12"
                   />
                 </svg>
               </button>
             </div>

             {/* Body */}
             <div className="p-4 sm:p-6">
               {/* Main Heading */}
               <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                 Certificate Details
               </h3>
               
               {/* Description */}
               <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                 {selectedCertification.description}
               </p>

                               {/* Image Container */}
                <div className="mb-6 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-center">
                    <img 
                      src={selectedCertification.image} 
                      alt={selectedCertification.title}
                      className="max-w-full max-h-64 sm:max-h-80 md:max-h-96 object-contain rounded-md shadow-md"
                      style={{
                        maxHeight: 'min(400px, 50vh)'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                               {/* Certificate Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm">Certificate No:</span>
                      <span className="font-semibold text-gray-900 text-sm">{selectedCertification.certificateNumber}</span>
                    </div>
                                         <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-200">
                       <span className="text-gray-600 font-medium text-sm">Category:</span>
                       <span className="font-semibold text-primary text-sm">{selectedCertification.category}</span>
                     </div>
                    <div className="flex justify-between items-center py-1.5 sm:py-2">
                      <span className="text-gray-600 font-medium text-sm">Issuing Authority:</span>
                      <span className="font-semibold text-gray-900 text-sm">{selectedCertification.issuingAuthority}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm">Issue Date:</span>
                      <span className="font-semibold text-gray-900 text-sm">{selectedCertification.issueDate}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 sm:py-2">
                      <span className="text-gray-600 font-medium text-sm">Expiry Date:</span>
                      <span className="font-semibold text-gray-900 text-sm">{selectedCertification.expiryDate}</span>
                    </div>
                  </div>
                </div>
 
                {/* Status */}
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-semibold text-green-700">Valid Certificate</span>
                  <span className="text-xs text-gray-500">• Active and in compliance</span>
                </div>
 
                                 {/* Close Button */}
                 <div className="flex justify-end">
                   <button
                     onClick={closeModal}
                     className="bg-primary hover:bg-primary/90 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                   >
                     Close
                   </button>
                 </div>
             </div>
           </div>
         </div>
       )}
    </div>
  );
}
