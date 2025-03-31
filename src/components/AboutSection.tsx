
import React from 'react';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle max-w-4xl">
          A finance professional with a passion for investment strategy, valuation, and financial analysis
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 p-3 bg-navy rounded-full text-gold">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-display font-medium mb-3 text-navy">Education</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">MBA, Finance</p>
                <p className="text-gray-600">Harvard Business School</p>
                <p className="text-sm text-gray-500">2021 - 2023</p>
              </li>
              <li>
                <p className="font-semibold">BBA, Finance & Economics</p>
                <p className="text-gray-600">University of Pennsylvania</p>
                <p className="text-sm text-gray-500">2016 - 2020</p>
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
                <p className="font-semibold">CFA Level II Candidate</p>
                <p className="text-gray-600">CFA Institute</p>
                <p className="text-sm text-gray-500">Expected June 2024</p>
              </li>
              <li>
                <p className="font-semibold">Financial Modeling & Valuation Analyst</p>
                <p className="text-gray-600">Corporate Finance Institute</p>
                <p className="text-sm text-gray-500">2022</p>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 p-3 bg-navy rounded-full text-gold">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-display font-medium mb-3 text-navy">Career Objective</h3>
            <p className="text-gray-600 leading-relaxed">
              Seeking a challenging Investment Banking Associate role where I can leverage my analytical skills, 
              financial knowledge, and business acumen to deliver exceptional value for clients while growing professionally
              in deal execution and financial advisory.
            </p>
          </div>
        </div>
        
        <div className="mt-16 p-6 bg-lightGrey rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-display font-medium mb-3 text-navy">Professional Summary</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Recent Harvard MBA graduate with a concentration in Finance and Investment Banking. 
            Experienced in financial modeling, valuation, and market analysis through coursework and internship experience. 
            Strong understanding of capital markets, M&A, and corporate finance principles. 
            Seeking to leverage analytical and technical skills in a challenging Investment Banking role.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Proven track record of academic excellence, leadership, and successful project execution in both team and independent settings. 
            Committed to continuous learning and professional development in the financial services industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
