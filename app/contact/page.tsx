'use client';

import FadeInSection from '@/components/FadeInSection';
import OptimizedHeroBackground from '@/components/OptimizedHeroBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCallback, useState } from 'react';

// Types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface SubmitStatus {
  type: 'success' | 'error' | null;
  message: string;
}

// Constants
const SUBJECT_OPTIONS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'fuel-products', label: 'Fuel Products' },
  { value: 'trading-services', label: 'Trading Services' },
  { value: 'logistics', label: 'Logistics & Distribution' },
  { value: 'partnership', label: 'Partnership Opportunities' },
  { value: 'other', label: 'Other' },
];

const CONTACT_INFO = {
  address:
    'Unit 401, PSC Building, 2410, Hen. Belarmino St. Bangkal, Makati City Philippines',
  phones: ['+63 962 687 6432', '+63 918 935 8977'],
  emails: ['rlorenzo@l-and-gcorp.com', 'arrangalvan@l-and-gcorp.com'],
  businessHours: {
    weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
    weekends: 'Saturday - Sunday: Closed',
  },
};

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

// Custom hook for form management
const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: '',
  });

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: '' });

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message:
              "Thank you! Your message has been sent successfully. We'll get back to you soon.",
          });
          resetForm();
        } else {
          setSubmitStatus({
            type: 'error',
            message: result.error || 'Something went wrong. Please try again.',
          });
        }
      } catch {
        setSubmitStatus({
          type: 'error',
          message: 'Network error. Please check your connection and try again.',
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, resetForm]
  );

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  };
};

// Components
const HeroSection = () => {
  const handleScrollToSection = useCallback(() => {
    scrollToSection('contact-info');
  }, []);

  return (
    <OptimizedHeroBackground
      imagePath="/background/contact-bg.jpg"
      alt="Contact Us Hero Background"
      overlayOpacity={0.4}
      className="pt-20 lg:pt-24"
    >
      <FadeInSection delay={200} duration={800}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
          Contact{' '}
          <span className="text-primary-foreground bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text">
            Us
          </span>
        </h1>
      </FadeInSection>

      <FadeInSection delay={400} duration={800}>
        <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
          Get in touch with L&G Energy Corp. We&apos;re here to answer your
          questions and discuss how we can support your energy needs.
        </p>
      </FadeInSection>

      <FadeInSection delay={600} duration={800}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleScrollToSection}
            className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span className="flex items-center gap-2">
              Get In Touch
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

const ContactInfoItem = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start space-x-3">
    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-1 text-sm">{title}</h4>
      {children}
    </div>
  </div>
);

const ContactInformation = () => (
  <div className="space-y-6">
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        Reach out to us through any of the following channels. Our team is ready
        to assist you with your energy requirements.
      </p>
    </div>

    <div className="space-y-4">
      {/* Address */}
      <ContactInfoItem
        icon={
          <svg
            className="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        }
        title="Office Address"
      >
        <p className="text-gray-600 leading-relaxed text-sm">
          {CONTACT_INFO.address}
        </p>
      </ContactInfoItem>

      {/* Phone Numbers */}
      <ContactInfoItem
        icon={
          <svg
            className="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        }
        title="Phone Numbers"
      >
        <div className="space-y-1">
          {CONTACT_INFO.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone}`}
              className="block text-gray-600 hover:text-primary transition-colors duration-300 text-sm"
            >
              {phone}
            </a>
          ))}
        </div>
      </ContactInfoItem>

      {/* Email Addresses */}
      <ContactInfoItem
        icon={
          <svg
            className="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        }
        title="Email Addresses"
      >
        <div className="space-y-1">
          {CONTACT_INFO.emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="block text-gray-600 hover:text-primary transition-colors duration-300 text-sm"
            >
              {email}
            </a>
          ))}
        </div>
      </ContactInfoItem>

      {/* Business Hours */}
      <ContactInfoItem
        icon={
          <svg
            className="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        }
        title="Business Hours"
      >
        <p className="text-gray-600 text-sm">
          {CONTACT_INFO.businessHours.weekdays}
          <br />
          {CONTACT_INFO.businessHours.weekends}
        </p>
      </ContactInfoItem>
    </div>
  </div>
);

const FormField = ({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  value,
  onChange,
  disabled = false,
  as = 'input' as 'input' | 'textarea' | 'select',
  options = [],
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  disabled?: boolean;
  as?: 'input' | 'textarea' | 'select';
  options?: Array<{ value: string; label: string }>;
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-xs font-medium text-gray-700 mb-1"
    >
      {label} {required && '*'}
    </label>
    {as === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-sm"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    ) : as === 'select' ? (
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
        required={required}
        disabled={disabled}
      >
        <option value="">Select a subject</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    )}
  </div>
);

const ContactForm = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900">Send Us a Message</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          Have questions about our services? Fill out the form below and
          we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-gray-900">
              Contact Form
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`p-3 rounded-lg text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <FormField
                label="First Name"
                name="firstName"
                placeholder="Enter your first name"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              <FormField
                label="Last Name"
                name="lastName"
                placeholder="Enter your last name"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>

            <FormField
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              value={formData.email}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />

            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />

            <FormField
              label="Company Name"
              name="company"
              placeholder="Enter your company name"
              value={formData.company}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />

            <FormField
              label="Subject"
              name="subject"
              as="select"
              required
              placeholder="Select a subject"
              value={formData.subject}
              onChange={handleInputChange}
              disabled={isSubmitting}
              options={SUBJECT_OPTIONS}
            />

            <FormField
              label="Message"
              name="message"
              as="textarea"
              placeholder="Enter your message"
              required
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform shadow-lg text-sm ${
                isSubmitting
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

// Main Component
export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Contact Information Section */}
      <section id="contact-info" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection delay={200} duration={800}>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <FadeInSection delay={400} duration={800}>
              <ContactInformation />
            </FadeInSection>

            {/* Contact Form */}
            <FadeInSection delay={600} duration={800}>
              <ContactForm />
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
