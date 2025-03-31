
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Financial Modeling",
      skills: [
        { name: "DCF Valuation", level: 95 },
        { name: "LBO Modeling", level: 90 },
        { name: "M&A Modeling", level: 85 },
        { name: "Financial Statement Forecasting", level: 90 },
        { name: "Sensitivity Analysis", level: 95 },
      ]
    },
    {
      category: "Valuation",
      skills: [
        { name: "Comparable Company Analysis", level: 95 },
        { name: "Precedent Transaction Analysis", level: 90 },
        { name: "Sum-of-the-Parts Valuation", level: 85 },
        { name: "Private Company Valuation", level: 80 },
        { name: "Capital Asset Pricing Model", level: 90 },
      ]
    },
    {
      category: "Financial Analysis",
      skills: [
        { name: "Financial Statement Analysis", level: 95 },
        { name: "Ratio Analysis", level: 95 },
        { name: "Credit Analysis", level: 85 },
        { name: "Cash Flow Analysis", level: 90 },
        { name: "Capital Structure Analysis", level: 90 },
      ]
    },
    {
      category: "Technical",
      skills: [
        { name: "Excel & Financial Modeling", level: 95 },
        { name: "Bloomberg Terminal", level: 85 },
        { name: "Capital IQ", level: 85 },
        { name: "FactSet", level: 80 },
        { name: "PowerPoint", level: 90 },
      ]
    }
  ];

  const marketAnalysisSamples = [
    {
      title: "Tech Sector Quarterly Outlook",
      description: "Analysis of tech sector performance, valuation trends, and strategic M&A opportunities for Q2 2023."
    },
    {
      title: "Healthcare REIT Market Review",
      description: "Comprehensive review of healthcare REIT market dynamics, regulatory impacts, and investment outlook."
    },
    {
      title: "ESG Integration in Valuation Models",
      description: "Framework for incorporating ESG factors into traditional DCF and multiple-based valuation approaches."
    }
  ];

  const industryInvolvement = [
    {
      organization: "CFA Society",
      role: "Active Member",
      activities: "Regular attendance at networking events and educational seminars"
    },
    {
      organization: "Investment Banking Club",
      role: "Vice President",
      activities: "Organized speaker series with senior banking professionals; led resume workshops"
    },
    {
      organization: "Financial Modeling Competition",
      role: "Team Leader",
      activities: "Led team of 4 in regional financial modeling competition; placed 2nd out of 28 teams"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle max-w-4xl">
          Technical and analytical capabilities relevant to investment banking
        </p>
        
        {/* Skills Matrix */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-display font-medium mb-6 text-navy">{category.category}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gold font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-lightGrey rounded-full">
                      <div 
                        className="h-full bg-gold rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Market Analysis Samples */}
        <div className="mt-16">
          <h3 className="text-2xl font-display font-medium mb-6 text-navy">Market Analysis Samples</h3>
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
        
        {/* Industry Involvement */}
        <div className="mt-16">
          <h3 className="text-2xl font-display font-medium mb-6 text-navy">Industry Involvement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryInvolvement.map((item, index) => (
              <div 
                key={index} 
                className="border border-lightGrey p-6 rounded-lg hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-medium text-navy mb-1">{item.organization}</h4>
                <p className="text-gold font-medium mb-3">{item.role}</p>
                <p className="text-gray-600">{item.activities}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
