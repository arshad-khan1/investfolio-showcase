
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: 'Master of Management Studies',
      specialization: 'Finance',
      institution: 'Lala Lajpatrai Institute Of Management',
      location: 'Mumbai, Maharashtra',
      period: '2023 - 2025',
      achievements: [
        'Specializing in Investment Banking and Valuation',
        'Focus on Corporate Finance and Financial Modeling',
        'Developing expertise in Mergers & Acquisitions strategy'
      ]
    }
  ];

  return (
    <section id="education" className="md:px-20 lg:px-40 section-padding bg-lightGrey">
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle mx-auto">
          Academic foundations that have shaped my analytical approach to finance
        </p>
        
        <div className="mx-auto">
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
