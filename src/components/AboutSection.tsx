
import React from 'react';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle max-w-4xl">
          Finance enthusiast with expertise in investment banking, valuation, and financial modeling
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 p-3 bg-navy rounded-full text-gold">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-display font-medium mb-3 text-navy">Education</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">MMS, Finance</p>
                <p className="text-gray-600">Lala Lajpatrai Institute Of Management</p>
                <p className="text-sm text-gray-500">2023 - 2025</p>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 p-3 bg-navy rounded-full text-gold">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-display font-medium mb-3 text-navy">Certifications</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">BCG - Strategy Consulting Job Simulation</p>
                <p className="text-sm text-gray-500">2023</p>
              </li>
              <li>
                <p className="font-semibold">CITI - Investment Banking Job Simulation</p>
                <p className="text-sm text-gray-500">2023</p>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 p-3 bg-navy rounded-full text-gold">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-display font-medium mb-3 text-navy">Skills</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Market Research</li>
              <li className="text-gray-600">Data Analysis</li>
              <li className="text-gray-600">Data Gathering</li>
              <li className="text-gray-600">Financial Modeling</li>
              <li className="text-gray-600">Valuation</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 p-6 bg-lightGrey rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-display font-medium mb-3 text-navy">Professional Summary</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Finance is more than just numbers—it's about unlocking value, driving strategic decisions, and fueling growth. 
            As an MMS Finance candidate with a passion for Investment Banking, Valuation, and Mergers & Acquisitions, 
            I am developing a deep understanding of corporate finance, financial modeling, and deal structuring to navigate high-stakes transactions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            What I Bring to the Table:
            ✔ Valuation & Financial Analysis – Expertise in DCF, trading comparables
            ✔ Index Valuation & Equity Research – Assessing market trends and financial statements
            ✔ Strategic Consulting & Data Analysis – Applying analytical skills to real-world finance challenges
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
