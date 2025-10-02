'use client';

import FadeInSection from '@/components/FadeInSection';
import OptimizedHeroBackground from '@/components/OptimizedHeroBackground';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

// Types
interface Certification {
  id: number;
  title: string;
  fullTitle: string;
  description: string;
  image: string;
  images: string[];
  category: string;
  issueDate: string;
  expiryDate: string;
  certificateNumber: string;
  issuingAuthority: string;
}

// Constants
const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: 'Business Permit',
    fullTitle: 'L&G Energy Corporation - Business Permit & Registration',
    description:
      'Official business permit and registration certificate for L&G Energy Corporation',
    image: '/certifications/buss-perm.png',
    images: ['/certifications/buss-perm.png'],
    category: 'Business Registration',
    issueDate: 'June 25, 2024',
    expiryDate: 'December 31, 2025',
    certificateNumber: 'BP-2024-001',
    issuingAuthority: 'Local Government Unit',
  },
  {
    id: 2,
    title: 'BIR Certificate of Registration',
    fullTitle:
      'L&G Energy Corporation - BIR Certificate of Registration (Pages 1 & 2)',
    description:
      'Complete BIR certificate of registration for corporate business operations including both pages',
    image: '/certifications/cor-1.png',
    images: ['/certifications/cor-1.png', '/certifications/cor-2.png'],
    category: 'Corporate Registration',
    issueDate: 'June 11, 2025',
    expiryDate: 'February 20, 2027',
    certificateNumber: 'COR-2024-001',
    issuingAuthority: 'Securities and Exchange Commission',
  },
  {
    id: 3,
    title: 'Barangay Clearance',
    fullTitle: 'L&G Energy Corporation - Barangay Business Clearance',
    description: 'Local barangay clearance certificate for business operations',
    image: '/certifications/brgy-clearance.png',
    images: ['/certifications/brgy-clearance.png'],
    category: 'Local Compliance',
    issueDate: 'June 5, 2025',
    expiryDate: 'December 31, 2025',
    certificateNumber: 'BC-2024-001',
    issuingAuthority: 'Barangay Council',
  },
  {
    id: 4,
    title: 'BOC Certificate of Registration',
    fullTitle:
      'L&G Energy Corporation - Bureau of Customs Certificate of Registration',
    description:
      'Official registration certificate from the Bureau of Customs for import/export operations',
    image: '/certifications/BOC Certificate of Registration.jpg',
    images: ['/certifications/BOC Certificate of Registration.jpg'],
    category: 'Customs Registration',
    issueDate: 'August 09, 2025',
    expiryDate: 'August 09, 2026',
    certificateNumber: 'BOC-COR-2024-001',
    issuingAuthority: 'Bureau of Customs',
  },
  {
    id: 5,
    title: 'BOC Certificate of Accreditation as Importer',
    fullTitle:
      'L&G Energy Corporation - Bureau of Customs Accreditation as Importer',
    description:
      'Official accreditation certificate from the Bureau of Customs authorizing import operations',
    image: '/certifications/BOC Certificate of Accreditation as Importer.jpg',
    images: [
      '/certifications/BOC Certificate of Accreditation as Importer.jpg',
    ],
    category: 'Customs Accreditation',
    issueDate: 'August 9, 2026',
    expiryDate: 'August 9, 2026',
    certificateNumber: 'BOC-CAI-2024-001',
    issuingAuthority: 'Bureau of Customs',
  },
];

// Custom hook for carousel management
const useCarousel = (items: Certification[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const getVisibleItems = useCallback(() => {
    const visible = [];
    const maxVisible = Math.min(3, items.length);
    for (let i = 0; i < maxVisible; i++) {
      const index = (currentIndex + i) % items.length;
      visible.push(items[index]);
    }
    return visible;
  }, [currentIndex, items]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    getVisibleItems,
  };
};

// Custom hook for modal management
const useModal = () => {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = useCallback((certification: Certification) => {
    setIsLoading(true);
    setSelectedCertification(certification);
    setIsModalOpen(true);
    // Simulate loading time for better UX
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedCertification(null);
    setIsLoading(false);
  }, []);

  return {
    selectedCertification,
    isModalOpen,
    isLoading,
    openModal,
    closeModal,
  };
};

// Components
const HeroSection = () => {
  const handleScrollToSection = useCallback(() => {
    const element = document.getElementById('certifications-carousel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <OptimizedHeroBackground
      imagePath="/background/certif-bg.jpg"
      alt="Certifications Hero Background"
      overlayOpacity={0.6}
      className="pt-20 lg:pt-24"
    >
      <FadeInSection delay={200} duration={800}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
          Our{' '}
          <span className="text-primary-foreground bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text">
            Certifications
          </span>
        </h1>
      </FadeInSection>
      <FadeInSection delay={400} duration={800}>
        <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
          L&G Energy Corp. maintains the highest standards of quality, safety,
          and environmental responsibility through our comprehensive
          certification portfolio.
        </p>
      </FadeInSection>
      <FadeInSection delay={600} duration={800}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleScrollToSection}
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
      </FadeInSection>
    </OptimizedHeroBackground>
  );
};

const CompanyIntroduction = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-card">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="space-y-6">
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Our commitment to excellence is demonstrated through our comprehensive
          certification portfolio. These certifications validate our adherence
          to international standards in quality management, environmental
          responsibility, occupational health and safety, and industry-specific
          requirements.
        </p>
        <div className="text-xl sm:text-2xl font-bold text-card-foreground">
          Trust in our certified processes and commitment to continuous
          improvement.
        </div>
      </div>
    </div>
  </section>
);

const CertificationCard = ({
  certification,
  isActive,
  onClick,
}: {
  certification: Certification;
  isActive: boolean;
  onClick: () => void;
}) => (
  <Card
    className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md bg-white overflow-hidden rounded-xl w-80 ${
      isActive ? 'opacity-100' : 'opacity-70'
    }`}
    onClick={onClick}
  >
    <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden relative">
      <Image
        src={certification.image}
        alt={certification.title}
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        priority={isActive}
        loading={isActive ? 'eager' : 'lazy'}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.nextElementSibling?.classList.remove('opacity-20');
        }}
      />
      <div className="text-4xl opacity-20 absolute">📜</div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 text-gray-800 px-4 py-2 rounded-lg font-semibold">
            Click to View
          </div>
        </div>
      </div>
    </div>
    <CardContent className="pt-0 px-5 pb-5">
      <div className="text-center mb-3">
        <CardTitle className="text-base font-bold text-gray-900 leading-tight text-center">
          {certification.title}
        </CardTitle>
      </div>
      <CardDescription className="text-sm text-gray-600 leading-relaxed mb-3 text-center line-clamp-2">
        {certification.description}
      </CardDescription>
      <div className="w-8 h-0.5 bg-primary mx-auto mb-3 rounded-full"></div>
      <div className="text-center">
        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {certification.category}
        </span>
      </div>
    </CardContent>
  </Card>
);

const CarouselNavigation = ({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) => (
  <>
    <button
      onClick={onPrev}
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
      onClick={onNext}
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
  </>
);

const CarouselIndicators = ({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}) => (
  <div className="flex justify-center mt-8 space-x-2">
    {Array.from({ length: total }, (_, index) => (
      <button
        key={index}
        onClick={() => onSelect(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === current ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
        }`}
        aria-label={`Go to certification ${index + 1}`}
      />
    ))}
  </div>
);

const CertificationsCarousel = ({
  onOpenModal,
}: {
  onOpenModal: (certification: Certification) => void;
}) => {
  const { currentIndex, nextSlide, prevSlide, goToSlide, getVisibleItems } =
    useCarousel(CERTIFICATIONS);

  const visibleCertifications = useMemo(
    () => getVisibleItems(),
    [getVisibleItems]
  );

  return (
    <section
      id="certifications-carousel"
      className="py-16 sm:py-20 lg:py-24 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
              Our{' '}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
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
          <CarouselNavigation onPrev={prevSlide} onNext={nextSlide} />

          {/* Carousel Cards */}
          <div className="flex justify-center items-center gap-6 lg:gap-8 px-16">
            {visibleCertifications.map((certification, index) => (
              <FadeInSection
                key={certification.id}
                delay={200 + index * 100}
                duration={800}
              >
                <CertificationCard
                  certification={certification}
                  isActive={index === 0}
                  onClick={() => onOpenModal(certification)}
                />
              </FadeInSection>
            ))}
          </div>

          {/* Carousel Indicators */}
          <CarouselIndicators
            total={CERTIFICATIONS.length}
            current={currentIndex}
            onSelect={goToSlide}
          />
        </div>
      </div>
    </section>
  );
};

const ModalImage = ({
  src,
  alt,
  pageNumber,
}: {
  src: string;
  alt: string;
  pageNumber?: number;
}) => (
  <div className="flex flex-col items-center">
    {pageNumber && (
      <div className="mb-2">
        <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
          Page {pageNumber}
        </span>
      </div>
    )}
    <div className="flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="max-w-full max-h-64 sm:max-h-80 md:max-h-96 object-contain rounded-md shadow-md transition-all duration-300 hover:shadow-lg"
        style={{
          maxHeight: 'min(400px, 50vh)',
        }}
        priority
        quality={90}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
    </div>
  </div>
);

const CertificationModal = ({
  certification,
  isOpen,
  onClose,
}: {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !certification) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto my-4">
        {/* Header */}
        <div className="bg-primary p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-white font-semibold text-lg">
              {certification.title}
            </h2>
          </div>
          <button
            onClick={onClose}
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
            {certification.description}
          </p>

          {/* Image Container */}
          <div className="mb-6 bg-gray-50 rounded-lg p-4">
            <div className="space-y-4">
              {certification.images && certification.images.length > 1 ? (
                // Multiple images - show with page indicators
                certification.images.map((image, index) => (
                  <ModalImage
                    key={index}
                    src={image}
                    alt={`${certification.title} - Page ${index + 1}`}
                    pageNumber={index + 1}
                  />
                ))
              ) : (
                // Single image
                <ModalImage
                  src={certification.image}
                  alt={certification.title}
                />
              )}
            </div>
          </div>

          {/* Certificate Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="space-y-1 sm:space-y-2">
              <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium text-sm">
                  Certificate No:
                </span>
                <span className="font-semibold text-gray-900 text-sm">
                  {certification.certificateNumber}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium text-sm">
                  Category:
                </span>
                <span className="font-semibold text-primary text-sm">
                  {certification.category}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 sm:py-2">
                <span className="text-gray-600 font-medium text-sm">
                  Issuing Authority:
                </span>
                <span className="font-semibold text-gray-900 text-sm">
                  {certification.issuingAuthority}
                </span>
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium text-sm">
                  Issue Date:
                </span>
                <span className="font-semibold text-gray-900 text-sm">
                  {certification.issueDate}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 sm:py-2">
                <span className="text-gray-600 font-medium text-sm">
                  Expiry Date:
                </span>
                <span className="font-semibold text-gray-900 text-sm">
                  {certification.expiryDate}
                </span>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-green-700">
              Valid Certificate
            </span>
            <span className="text-xs text-gray-500">
              • Active and in compliance
            </span>
          </div>

          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function Certifications() {
  const {
    selectedCertification,
    isModalOpen,
    isLoading,
    openModal,
    closeModal,
  } = useModal();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CompanyIntroduction />
      <CertificationsCarousel onOpenModal={openModal} />
      <CertificationModal
        certification={selectedCertification}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              <span className="text-gray-700 font-medium">
                Loading certificate...
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}