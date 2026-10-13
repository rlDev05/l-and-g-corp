'use client';

import FadeInSection from '@/components/FadeInSection';
import Image from 'next/image';
import { useCallback, useState } from 'react';

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

// Team Members
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
  {
    name: 'Cornelius C. Cabalonga',
    position: 'General Manager',
    image: '/members/sir-cornelius.jpg',
    alt: 'Cornelius C. Cabalonga - General Manager',
  },
];

// Certifications
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

// Modal Hook
const useModal = () => {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = useCallback((certification: Certification) => {
    setIsLoading(true);
    setSelectedCertification(certification);
    setIsModalOpen(true);

    window.setTimeout(() => setIsLoading(false), 300);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedCertification(null);
    setIsLoading(false);
  }, []);

  const changeCertificate = useCallback((certification: Certification) => {
    setSelectedCertification(certification);
  }, []);

  return {
    selectedCertification,
    isModalOpen,
    isLoading,
    openModal,
    closeModal,
    changeCertificate,
  };
};

// Company Introduction
const CompanyIntroduction = () => (
  <FadeInSection delay={600} duration={800} className="bg-card">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-25 lg:pt-40 mb-0">
      <div className="space-y-6">
        <div className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light space-y-4 sm:space-y-6 px-6 lg:px-0 text-center lg:text-justify">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
            Our{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8 mx-auto lg:mx-0" />
        </div>

        <p className="text-base sm:text-lg text-muted-foreground mx-auto text-justify max-w-2xl pb-25">
          L&G Energy Corp. maintains the highest standards of quality, safety,
          and environmental responsibility through our comprehensive
          certification portfolio. Our commitment to excellence is demonstrated
          through these certifications, which validate our adherence to
          international standards in quality management, environmental
          responsibility, occupational health and safety, and industry-specific
          requirements. Trust in our certified processes and commitment to
          continuous improvement.
        </p>
      </div>
    </div>
  </FadeInSection>
);

// Certification Card
const CertificationCard = ({
  certification,
  isActive,
  onClick,
}: {
  certification: Certification;
  isActive: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="group w-full max-w-md mx-auto cursor-pointer text-center"
  >
    {' '}
    {/* Certificate Image with Hover Overlay */}{' '}
    <div className="relative w-full aspect-[3/4] max-h-[560px] flex items-center justify-center overflow-hidden rounded-2xl">
      {' '}
      <Image
        src={certification.image}
        alt={certification.title}
        width={400}
        height={540}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        priority={isActive}
      />{' '}
      {/* Hover Overlay */}{' '}
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
        {' '}
        <span className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-100 scale-95">
          {' '}
          Click to view{' '}
        </span>{' '}
      </div>{' '}
    </div>{' '}
    {/* Certificate Category */}{' '}
    <p className="inline-block text-sm font-semibold text-primary bg-primary/10 px-5 py-1 rounded-full mt-3">
      {' '}
      {certification.category}{' '}
    </p>{' '}
    {/* Certificate Title */}{' '}
    <h4 className="mt-2 text-xl font-semibold text-gray-900">
      {' '}
      {certification.title}{' '}
    </h4>{' '}
  </div>
);

const CertificationsGrid = ({
  onOpenModal,
}: {
  onOpenModal: (certification: Certification) => void;
}) => (
  <section id="certifications-carousel" className="pb-16 sm:pb-20 lg:pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        {CERTIFICATIONS.map((certification, index) => (
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
    </div>
  </section>
);

// Team Member Card
const TeamMemberCard = ({ member }: { member: (typeof TEAM_MEMBERS)[0] }) => (
  <div className="group text-center">
    <div className="relative mb-3">
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

    <div className="space-y-1">
      <h4 className="text-base sm:text-lg font-bold text-card-foreground">
        {member.name}
      </h4>
      <p className="text-primary font-semibold text-sm sm:text-base">
        {member.position}
      </p>
    </div>
  </div>
);

// Leadership Team Section
const TeamSection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-card">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeInSection delay={200} duration={800}>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
            Board of <span className="text-primary">Directors</span>
          </h2>

          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-4" />

          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            Meet the leaders guiding L&G Energy Corp. toward sustainable growth,
            operational excellence, and long-term success.
          </p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {TEAM_MEMBERS.map((member, index) => (
          <FadeInSection
            key={member.name}
            delay={300 + index * 100}
            duration={800}
          >
            <TeamMemberCard member={member} />
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

// Certification Modal
const CertificationModal = ({
  certification,
  isOpen,
  onClose,
  onChangeCertificate,
}: {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
  onChangeCertificate: (certification: Certification) => void;
}) => {
  if (!isOpen || !certification) return null;

  const currentIndex = CERTIFICATIONS.findIndex(
    (item) => item.id === certification.id
  );

  const handlePrevious = () => {
    const previousIndex =
      (currentIndex - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length;

    onChangeCertificate(CERTIFICATIONS[previousIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % CERTIFICATIONS.length;

    onChangeCertificate(CERTIFICATIONS[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md">
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="fixed top-4 right-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-transform hover:scale-95 cursor-pointer"
        aria-label="Close certificate viewer"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>
      </button>

      {/* Previous Certificate */}
      <button
        type="button"
        onClick={handlePrevious}
        className="fixed left-4 top-1/2 z-[60] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-transform hover:scale-95 sm:left-6 cursor-pointer"
        aria-label="Previous certificate"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 18l-6-6 6-6"
          />
        </svg>
      </button>

      {/* Next Certificate */}
      <button
        type="button"
        onClick={handleNext}
        className="fixed right-4 top-1/2 z-[60] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-transform hover:scale-95 sm:right-6 cursor-pointer"
        aria-label="Next certificate"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 18l6-6-6-6"
          />
        </svg>
      </button>

      {/* Certificate and Caption */}
      <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto px-14 py-16 sm:px-20">
        <div className="flex min-h-0 flex-1 items-center justify-center">
          <div className="relative flex max-h-full items-center justify-center">
            <Image
              src={certification.image}
              alt={certification.title}
              width={800}
              height={1100}
              priority
              quality={95}
              className="max-h-[75vh] max-w-full object-contain shadow-2xl"
            />
          </div>
        </div>

        {/* Certificate Caption */}
        <div className="mt-6 w-full shrink-0 text-center text-white">
          <h4 className="text-xl font-bold mt-3">{certification.title}</h4>
          <p className="inline-block text-sm font-semibold text-primary bg-primary/10 px-5 py-1 rounded-full mt-2">
            {certification.category}
          </p>
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
    openModal,
    closeModal,
    changeCertificate,
  } = useModal();

  return (
    <div className="min-h-screen bg-background">
      <CompanyIntroduction />

      <CertificationsGrid onOpenModal={openModal} />

      {/* Leadership team below the certificates */}
      <TeamSection />

      <CertificationModal
        certification={selectedCertification}
        isOpen={isModalOpen}
        onClose={closeModal}
        onChangeCertificate={changeCertificate}
      />
    </div>
  );
}
