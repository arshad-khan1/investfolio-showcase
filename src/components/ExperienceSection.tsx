
import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-lightGrey">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle max-w-4xl">
          Professional experience in the finance and investment banking industry
        </p>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-lightGrey">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-display font-medium text-navy">Summer Associate</h3>
                <span className="text-sm text-gold font-semibold px-3 py-1 rounded-full bg-gold/10 mt-1">
                  Jun 2022 - Aug 2022
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-4">Goldman Sachs - Investment Banking Division</p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1 mr-3">1</div>
                  <p>Conducted financial analysis and valuation for a $2.5B acquisition in the technology sector, building DCF and comparable company analysis models that informed deal pricing strategy.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1 mr-3">2</div>
                  <p>Created comprehensive pitch books and client presentations for potential M&A transactions and capital raising opportunities.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1 mr-3">3</div>
                  <p>Collaborated with deal team on industry research and market analysis across healthcare and consumer retail sectors.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1 mr-3">4</div>
                  <p>Assisted in due diligence processes, reviewing financial statements and preparing analysis of operational and financial metrics.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1 mr-3">5</div>
                  <p>Developed financial models to analyze impact of various capital structure scenarios on client's financial performance and valuation.</p>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-medium text-navy mb-2">Key Achievements:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Financial Modeling</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Due Diligence</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Valuation</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Client Presentations</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">Industry Research</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gold/5">
              <h4 className="font-medium text-navy mb-3">Testimonial</h4>
              <blockquote className="pl-4 border-l-4 border-gold italic text-gray-600">
                "John demonstrated exceptional analytical abilities and attention to detail during his summer internship. 
                His financial models were thorough and his insights valuable to the deal team. 
                He showed great potential for a career in investment banking."
                <footer className="mt-2 text-navy font-medium not-italic">— Sarah Johnson, VP Investment Banking</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
