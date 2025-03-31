
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: 'Master of Business Administration',
      specialization: 'Finance & Investment Banking',
      institution: 'Harvard Business School',
      location: 'Boston, MA',
      period: '2021 - 2023',
      achievements: [
        'GPA: 3.95/4.0',
        'Recipient of Dean\'s Excellence Scholarship',
        'Specialized coursework in Financial Modeling, Valuation, and M&A',
        'Winner of HBS Case Competition 2022'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Science',
      specialization: 'Economics & Mathematics',
      institution: 'University of Pennsylvania',
      location: 'Philadelphia, PA',
      period: '2017 - 2021',
      achievements: [
        'GPA: 3.8/4.0',
        'Graduated Magna Cum Laude',
        'Honors Thesis: "Quantitative Analysis of Financial Market Efficiency"',
        'Investment Club President (2019-2021)'
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-lightGrey">
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle max-w-4xl mx-auto">
          Academic foundations that have shaped my analytical approach to finance
        </p>
        
        <div className="mt-12 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-lg shadow-md p-8 ${
                index < education.length - 1 ? 'mb-8' : ''
              }`}
            >
              <div className="flex items-start">
                <div className="mr-6 hidden md:block">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center">
                    <GraduationCap size={32} className="text-navy" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-medium text-navy mb-1">
                    {item.degree}
                  </h3>
                  <h4 className="text-xl text-gold mb-3">
                    {item.specialization}
                  </h4>
                  
                  <div className="flex flex-col md:flex-row md:items-center text-gray-500 mb-6">
                    <div className="flex items-center mb-2 md:mb-0 md:mr-6">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{item.institution}, {item.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
