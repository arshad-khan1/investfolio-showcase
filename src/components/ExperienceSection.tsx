
import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-0 md:px-20 lg:px-40 section-padding md:pt-0 bg-lightGrey">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Professional experience in finance and investment industry
        </p>
        
        <div className="mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-lightGrey">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-display font-medium text-navy">Finance Intern</h3>
                <span className="text-sm text-gold font-semibold px-3 py-1 rounded-full bg-gold/10 mt-1">
                  May 2024 - July 2024
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-4">Invest4Edu - Mumbai, Maharashtra, India</p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="h-4 w-4 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1 mr-3">1</div>
                  <p>Provided comprehensive guidance to parents and students on educational planning, focusing on investment in mutual funds to help them achieve their specific financial goals.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1 mr-3">2</div>
                  <p>Analyzed financial needs, future education costs, and risk tolerance to craft personalized investment solutions.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1 mr-3">3</div>
                  <p>Tailored strategies to individual circumstances, helping clients maximize returns while ensuring financial plans aligned with educational aspirations.</p>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-medium text-navy mb-3">Key Skills Applied:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Financial Planning</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Investment Analysis</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Client Consultation</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Mutual Funds</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Risk Assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
