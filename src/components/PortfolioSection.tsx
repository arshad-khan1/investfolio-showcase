
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

  const marketAnalysisSamples = [
    {
      title: "Cement",
      description: "Built a 5-year forecast for revenues, EBITDA and FCF; ran a DCF (WACC + terminal growth) and 8–10× EV/EBITDA comps; stress-tested energy-cost and volume sensitivities."
    },
    {
      title: "Specialty Chemicals",
      description: "Modeled segment revenues and margins; applied DCF and 12–15× EV/EBITDA multiples; ran feedstock-price shock scenarios to gauge FCF volatility."
    },
    {
      title: "Real Estate",
      description: "Structured cash-flow waterfalls for residential and Grade-A office; calculated IRR, NPV, and equity multiples; applied DCF with yield-spread discount rates and DSCR/LTV stress tests."
    },
    {
      title: "Steel",
      description: "Projected financials for integrated mills vs. EAF players; valued via DCF and 5–7× EV/EBITDA comps; layered iron-ore, coking-coal and carbon-pricing scenario analyses."
    }
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Sensex Index Valuation Model",
      category: "Valuation",
      description: "Performed a valuation of the S&P BSE Sensex using a dividend discount model and earnings-yield multiple approach to assess current index levels against historical norms.",
      methodology: "Projected constituent dividends using historical payout ratios and analyst‐driven EPS growth, then applied a two-stage DDM (5-year explicit + perpetuity). We stress-tested the output with ±100 bp shifts in discount rate and ±1 % in dividend growth to define a fair-value range.",
      result: "Implied fair Sensex range: 58,000–62,000 (current ~60,500), indicating slight undervaluation.",
      skills: ["Dividend Discount Modeling", "Earnings Yield & P/E Analysis", "Comparable Multiples", "Sensitivity Testing"]
    },
    {
      id: 2,
      title: "Nifty 50 Index Valuation Model",
      category: "Valuation",
      description: "Built a valuation for the NSE Nifty 50 by aggregating sector-level cash flows and applying both DCF and relative P/E/P/B multiples.",
      methodology: "Forecasted five years of FCFE (using historical payout ratios and consensus earnings CAGR), discounted at the 10-year government bond yield + equity risk premium, added a terminal value at a long-term growth rate, and ran sensitivity tests on growth and discount-rate assumptions.",
      result: "Implied fair Nifty 50 range: 17,200–18,400 (current ~17,800), suggesting a fair valuation.",
      skills: ["Free Cash Flow Forecasting", "WACC Calculation", "Comparative Valuation", "DCF & Relative Valuation", "Sector Aggregation"]
    },
    {
      id: 3,
      title: "Shri Cements Ltd. Valuation Model",
      category: "Valuation",
      description: "Valuated Shri Cements via a three-stage DCF, capturing volume growth, margin expansion, and capex cycles typical in the cement sector.",
      methodology: "Modeled volumes, pricing, and input costs to construct a three-phase DCF (growth, transition, terminal multiple), including detailed capex and working-capital schedules. Validated the result with 8–10× EV/EBITDA peer comps and ran sensitivity cases for raw-material and carbon-pricing swings.",
      result: "Fair equity value: ₹1,150–1,250 per share vs. current ₹1,100, indicating modest upside.",
      skills: ["Three-Stage DCF Modeling", "Terminal Multiple Analysis", "Peer EV/EBITDA Comps", "Scenario & Sensitivity Analysis"]
    },
    // {
    //   id: 4,
    //   title: "Cross-Border M&A Tax Structure",
    //   category: "M&A Advisory",
    //   description: "Designed optimal tax structure for a US-based corporation acquiring a European target with operations in multiple jurisdictions.",
    //   methodology: "Analyzed various acquisition structures considering tax implications, regulatory requirements, and strategic objectives. Modeled financial impact of different approaches.",
    //   result: "Recommended structure projected to create $45M in tax savings over 10 years while minimizing regulatory friction and operational disruption.",
    //   skills: ["International Tax", "Deal Structuring", "Regulatory Analysis", "Financial Impact Modeling", "Strategic Advisory"]
    // },
    // {
    //   id: 5,
    //   title: "Airline Industry Financial Stress Test",
    //   category: "Risk Analysis",
    //   description: "Developed a comprehensive stress testing model for major airline corporations under various macroeconomic and industry-specific scenarios.",
    //   methodology: "Created dynamic financial model with macro factor sensitivity, liquidity analysis, and covenant testing. Incorporated fuel price hedging strategies and fleet flexibility scenarios.",
    //   result: "Identified key vulnerability thresholds and optimal hedging strategies, with specific recommendations for capital structure and liquidity management.",
    //   skills: ["Stress Testing", "Scenario Analysis", "Risk Modeling", "Liquidity Analysis", "Strategic Recommendations"]
    // }
  ];
  
  return (
    <section id="portfolio" className="md:px-20 lg:px-40 section-padding bg-white">
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


        {/* Market Analysis Samples */}
        <div className="mt-16">
          <h3 className="text-2xl font-display font-medium mb-6 text-navy">Market Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketAnalysisSamples.map((sample, index) => (
              <div 
                key={index} 
                className="bg-lightGrey p-6 rounded-lg hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-medium text-navy mb-3">{sample.title}</h4>
                <p className="text-gray-600">{sample.description}</p>
                <button className="mt-4 text-gold font-medium hover:underline">
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
