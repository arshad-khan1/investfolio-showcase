
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  methodology: string;
  result: string;
  skills: string[];
};

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Tech Sector M&A Valuation Model",
      category: "Valuation",
      description: "Built a comprehensive valuation model for a hypothetical acquisition of a SaaS company by a major tech conglomerate.",
      methodology: "Created DCF, comparable companies, and precedent transactions analyses with sensitivity testing across key variables. Incorporated synergy analysis and accretion/dilution modeling.",
      result: "Determined fair acquisition price range of $3.2-3.8B, with detailed breakdown of value drivers and strategic rationale.",
      skills: ["DCF Modeling", "Comparable Analysis", "Synergy Modeling", "Sensitivity Analysis", "Strategic Rationale"]
    },
    {
      id: 2,
      title: "Healthcare REIT Equity Research Report",
      category: "Equity Research",
      description: "Developed a comprehensive equity research report on a publicly-traded healthcare REIT with buy/hold/sell recommendation.",
      methodology: "Conducted industry analysis, competitive positioning review, and financial statement analysis. Built 5-year financial projections with full three-statement model.",
      result: "Issued BUY recommendation with 18% upside to target price based on NAV, AFFO multiple, and DDM valuation methodologies.",
      skills: ["Industry Analysis", "Financial Modeling", "Comparative Valuation", "Investment Thesis", "Risk Assessment"]
    },
    {
      id: 3,
      title: "Retail Company LBO Analysis",
      category: "Private Equity",
      description: "Created a leveraged buyout model for a mid-cap retail company, analyzing potential returns for PE investors.",
      methodology: "Built detailed LBO model with multiple debt tranches, management rollover, and various exit scenarios. Conducted operational improvement analysis and debt paydown scheduling.",
      result: "Projected 22% IRR over 5-year hold period with 2.4x MOIC under base case scenario, with detailed sensitivity analysis across key value drivers.",
      skills: ["LBO Modeling", "Debt Structuring", "Exit Strategy", "Return Analysis", "Operational Improvements"]
    },
    {
      id: 4,
      title: "Cross-Border M&A Tax Structure",
      category: "M&A Advisory",
      description: "Designed optimal tax structure for a US-based corporation acquiring a European target with operations in multiple jurisdictions.",
      methodology: "Analyzed various acquisition structures considering tax implications, regulatory requirements, and strategic objectives. Modeled financial impact of different approaches.",
      result: "Recommended structure projected to create $45M in tax savings over 10 years while minimizing regulatory friction and operational disruption.",
      skills: ["International Tax", "Deal Structuring", "Regulatory Analysis", "Financial Impact Modeling", "Strategic Advisory"]
    },
    {
      id: 5,
      title: "Airline Industry Financial Stress Test",
      category: "Risk Analysis",
      description: "Developed a comprehensive stress testing model for major airline corporations under various macroeconomic and industry-specific scenarios.",
      methodology: "Created dynamic financial model with macro factor sensitivity, liquidity analysis, and covenant testing. Incorporated fuel price hedging strategies and fleet flexibility scenarios.",
      result: "Identified key vulnerability thresholds and optimal hedging strategies, with specific recommendations for capital structure and liquidity management.",
      skills: ["Stress Testing", "Scenario Analysis", "Risk Modeling", "Liquidity Analysis", "Strategic Recommendations"]
    }
  ];
  
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle max-w-4xl">
          Showcasing my financial analysis, valuation, and advisory work
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-lightGrey rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-gold font-semibold px-3 py-1 rounded-full bg-gold/10">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display font-medium mb-3 text-navy">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex items-center text-navy font-medium">
                  <span>View Details</span>
                  <ChevronRight size={18} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-lightGrey">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-display font-medium text-navy">{selectedProject.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-navy"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-gold font-semibold px-3 py-1 rounded-full bg-gold/10">
                    {selectedProject.category}
                  </span>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-navy mb-2">Overview</h4>
                  <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-navy mb-2">Methodology</h4>
                  <p className="text-gray-600 mb-4">{selectedProject.methodology}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-navy mb-2">Result</h4>
                  <p className="text-gray-600 mb-4">{selectedProject.result}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-navy mb-2">Skills Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 bg-lightGrey border-t border-gray-200">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-navy text-white font-semibold rounded hover:bg-opacity-90 transition-all w-full"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
