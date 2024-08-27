import React from 'react';

const PlanFeature = ({ feature }) => (
  <li className="flex items-center mb-2">
    <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
    {feature}
  </li>
);

const PricingPlan = ({ name, price, features, popular }) => (
  <div className={`flex flex-col p-6 rounded-lg transition-all duration-300 ${popular ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'bg-white text-gray-800 shadow-md hover:shadow-xl'}`}>
    {popular && <span className="self-start px-3 py-1 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-white rounded-full">Popular</span>}
    <h3 className={`mt-5 text-2xl font-bold ${popular ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
    <p className={`mt-2 ${popular ? 'text-indigo-100' : 'text-gray-500'}`}>Perfect for growing businesses</p>
    <div className="mt-8">
      <span className={`text-5xl font-extrabold ${popular ? 'text-white' : 'text-gray-900'}`}>${price}</span>
      <span className={`text-base font-medium ${popular ? 'text-indigo-100' : 'text-gray-500'}`}>/month</span>
    </div>
    <ul className="mt-8 space-y-4">
      {features.map((feature, index) => (
        <PlanFeature key={index} feature={feature} />
      ))}
    </ul>
    <button className={`mt-8 w-full py-3 px-6 text-center font-medium rounded-lg transition-colors duration-300 ${popular ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
      Choose Plan
    </button>
  </div>
);

const PricingPlans = () => {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      features: [
        '5 Projects',
        '2 TB Storage',
        'Basic Analytics',
        '24/7 Support',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '99',
      features: [
        'Unlimited Projects',
        '5 TB Storage',
        'Advanced Analytics',
        'Priority Support',
        'Custom Integrations',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '299',
      features: [
        'Unlimited Everything',
        'Dedicated Server',
        'AI-Powered Insights',
        'Personal Account Manager',
        'Custom Solutions',
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl">
            Choose Your Perfect Plan
          </h2>
          <p className="mt-4 text-xl text-indigo-600">
            Tailored solutions for every stage of your business growth
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-12">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;