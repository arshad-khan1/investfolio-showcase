
import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CertificationsSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Financial Modeling & Valuation Analyst',
      issuer: 'Corporate Finance Institute',
      date: 'March 2024',
      image: '/CITI_Inv_Cert.png', // Replace with actual certificate image
      link: 'https://example.com/certificate1',
      learnings: [
        'Advanced DCF modeling techniques',
        'LBO modeling and private equity analysis',
        'M&A transaction modeling',
        'Relative valuation methodologies'
      ]
    },
    {
      id: 2,
      title: 'BCG - Strategy Consulting Job Simulation',
      issuer: 'BCG',
      date: 'October 2024',
      image: '/BCG_Inv_Cert.png', // Replace with actual certificate image
      link: 'https://drive.google.com/file/d/1ik7xvmU1iWtams0q2bF2mX2KZjkckm9k/view?usp=drive_link',
      learnings: [
        'Applied BCG’s hypothesis-driven problem-solving frameworks on real-world case tasks.',
        'Built dynamic Excel financial models and ran sensitivity analyses to inform strategic decisions.',
        'Synthesized complex data into concise, high-impact insights and PowerPoint deliverables.',
        'Benchmarked my solutions against leader sample answers to ensure best-practice rigor.'
      ]
    },
    {
      id: 3,
      title: 'CITI - Investment Banking Job Simulation',
      issuer: 'CITI',
      date: 'December 2024',
      image: '/CITI_Inv_Cert.png', // Replace with actual certificate image
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/8eNRcRqBZM9HLvwGw/amBSJDTDDFcYiKq9Z_8eNRcRqBZM9HLvwGw_s8XfRdWw2wvJq2pMZ_1735148802346_completion_certificate.pdf',
      learnings: [
        'Synthesized live market news and data into concise trade insights under time pressure.',
        'Formulated and back-tested market views, developing actionable trading ideas and hedges.',
        'Executed simulated desk workflows across Sales & Trading, demonstrating adaptability on both fronts.',
        'Managed risk scenarios through dynamic hedging exercises, showcasing disciplined decision-making.'
      ]
    }
  ];

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  return (
    <section id="certifications" className="px-0 md:px-20 lg:px-40 section-padding bg-navy">
      <div className="container mx-auto">
        <h2 className="section-title text-gold">Certifications</h2>
        <p className="section-subtitle text-gray-300">
          Professional qualifications that validate my expertise in finance and investment banking
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id} 
              className="bg-white/10 backdrop-blur rounded-lg overflow-hidden shadow-md border border-white/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openCertificateModal(certificate)}
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Award size={24} className="text-gold" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display font-medium text-gray-300 mb-1">
                      {certificate.title}
                    </h3>
                    <div className="text-sm text-gray-400 mb-2">
                      {certificate.issuer} • {certificate.date}
                    </div>
                    <button 
                      className="text-sm text-gold hover:underline flex items-center"
                    >
                      View Certificate Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="sm:max-w-3xl">
          {selectedCertificate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-display">{selectedCertificate.title}</DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedCertificate.issuer} • {selectedCertificate.date}
                </DialogDescription>
              </DialogHeader>

              <div className="my-4">
                <div className="bg-lightGrey p-4 rounded-lg mb-6 aspect-video flex items-center justify-center">
                  <img 
                    src={selectedCertificate.image} 
                    alt={`${selectedCertificate.title} certificate`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <h4 className="text-lg font-semibold mb-3">Key Learnings:</h4>
                <ul className="list-disc list-inside space-y-2">
                  {selectedCertificate.learnings.map((learning, index) => (
                    <li key={index} className="text-gray-700">{learning}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex justify-end">
                <a 
                  href={selectedCertificate.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
                >
                  View Full Certificate <ExternalLink size={16} />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsSection;
