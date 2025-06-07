import React from 'react';

// Inline SVG for Check icon (re-used for consistency)
const CheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// Inline SVG for ArrowRight icon (re-used for consistency)
const ArrowRightIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

// Reusable PricingCard component (adapted for standalone page)
const PricingCard = ({ plan, price, period, description, features, isFeatured = false, buttonText = "Get Started" }) => {
  return (
    <div className={`
      relative
      flex flex-col
      p-8
      rounded-3xl
      shadow-xl
      transition-all duration-300 ease-in-out
      transform hover:scale-105
      ${isFeatured
        ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white border border-blue-800'
        : 'bg-white text-gray-900 border border-gray-200'
      }
      h-full {/* Ensure cards take full height */}
    `}>
      {isFeatured && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-yellow-400 text-yellow-900 text-sm font-semibold rounded-full uppercase tracking-wide shadow-md">
          Recommended
        </span>
      )}
      <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
        {plan}
      </h3>
      <p className={`text-sm mb-6 ${isFeatured ? 'text-blue-200' : 'text-gray-600'}`}>
        {description}
      </p>
      <div className="flex items-baseline mb-8">
        <span className={`text-5xl md:text-6xl font-extrabold ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
          ${price}
        </span>
        <span className={`text-xl font-medium ml-2 ${isFeatured ? 'text-blue-200' : 'text-gray-500'}`}>
          {period}
        </span>
      </div>
      <ul className="flex-grow space-y-4 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {isFeatured ? (
              <CheckIcon className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
            ) : (
              <CheckIcon className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
            )}
            <span className={`${isFeatured ? 'text-blue-100' : 'text-gray-700'} text-lg`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button className={`
        mt-auto
        flex items-center justify-center
        px-8 py-4
        rounded-xl
        font-semibold text-lg
        shadow-lg
        transition-all duration-300 ease-in-out
        ${isFeatured
          ? 'bg-white text-blue-700 hover:bg-gray-100'
          : 'bg-blue-600 text-white hover:bg-blue-700'
        }
        hover:shadow-xl
      `}>
        {buttonText}
        <ArrowRightIcon className="w-5 h-5 ml-3" />
      </button>
    </div>
  );
};

export function PricingPage() {
  const plans = [
    {
      plan: 'Basic',
      price: 15,
      period: 'per month',
      description: 'Ideal for individuals and small teams beginning their journey towards enhanced productivity.',
      features: [
        'All Core Task Management Tools',
        'Unlimited Projects & Tasks',
        'Basic Analytics & Reporting',
        'Standard Email Support',
        'Secure Cloud Storage (10GB)'
      ],
      buttonText: 'Start Free Trial'
    },
    {
      plan: 'Professional',
      price: 29,
      period: 'per month',
      description: 'Designed for growing teams needing advanced collaboration and insightful performance metrics.',
      features: [
        'Basic Plan',
        'Advanced Team Collaboration',
        'Customizable Workflows',
        'Priority Chat & Email Support',
        'Enhanced Security Features',
        'Dedicated Account Manager'
      ],
      isFeatured: true,
      buttonText: 'Choose Professional'
    },
    {
      plan: 'Enterprise',
      price: 70,
      period: 'per month',
      description: 'Comprehensive solutions for large organizations requiring tailored support and robust features.',
      features: [
        'All Professional Features',
        'Unlimited User Licenses',
        'Single Sign-On (SSO)',
        '24/7 Premium Phone Support',
        'On-Premise Deployment Options',
        'Custom Integrations & APIs',
        'Dedicated Technical Consultant'
      ],
      buttonText: 'Contact Sales'
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-100 min-h-screen">
      {/* Hero Section for Pricing */}
      <section className="bg-white md:mt-20 py-20 px-4 sm:px-6 lg:px-8 text-center shadow-md">
        <span className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-4 py-2 rounded-full mb-6 inline-block animate-fadeInUp">
          Unlock Your Potential
        </span>
        <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-8 leading-tight animate-fadeInUp delay-100">
          Flexible Plans for Every Journey
        </h1>
        <p className="max-w-4xl mx-auto md:text-xl text-sm text-gray-600 mb-10 animate-fadeInUp delay-200">
          At nextUp, we believe in empowering every individual and team to achieve their best. Explore our transparent pricing options, meticulously crafted to align with your needs, from solo ventures to large-scale enterprises. Choose the path that leads to your unparalleled success.
        </p>
        <div className="flex justify-center gap-2 animate-fadeInUp delay-300">
          <button className="flex items-center md:px-8 px-2 md:py-4 bg-blue-600 text-white rounded-lg md:rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors text-xs md:text-base duration-300">
            View All Features
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
          <button className="flex items-center md:px-8 px-2 md:py-4 py-2 bg-gray-200 text-gray-800 rounded-lg md:rounded-xl font-semibold shadow-lg hover:bg-gray-300 transition-colors duration-300 text-xs md:text-base ">
            Talk to Sales
          </button>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-8 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </section>

      {/* Call to Action/FAQ Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-center shadow-inner">
        <h2 className="text-2xl md:text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          Still Have Questions?
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-lg text-gray-700 mb-8">
          We're here to help you navigate your options and find the perfect fit for your productivity journey. Reach out to our dedicated support team or explore our extensive FAQ section.
        </p>
        <button className="flex items-center justify-center mx-auto px-8 py-4 bg-yellow-400 text-yellow-900 rounded-xl font-semibold shadow-lg hover:bg-yellow-500 transition-colors duration-300">
          Contact Our Team
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </button>
      </section>
    </div>
  );
}
