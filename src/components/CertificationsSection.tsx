
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
      image: '/placeholder.svg', // Replace with actual certificate image
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
      title: 'Investment Banking Associate',
      issuer: 'Wall Street Prep',
      date: 'January 2024',
      image: '/placeholder.svg', // Replace with actual certificate image
      link: 'https://example.com/certificate2',
      learnings: [
        'Leveraged buyout analysis',
        'Merger consequences analysis',
        'Accretion/dilution modeling',
        'Precedent transaction analysis'
      ]
    },
    {
      id: 3,
      title: 'CFA Level I',
      issuer: 'CFA Institute',
      date: 'December 2023',
      image: '/placeholder.svg', // Replace with actual certificate image
      link: 'https://example.com/certificate3',
      learnings: [
        'Investment management fundamentals',
        'Ethical and professional standards',
        'Quantitative methods in finance',
        'Financial reporting and analysis'
      ]
    }
  ];

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle max-w-4xl mx-auto">
          Professional qualifications that validate my expertise in finance and investment banking
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id} 
              className="bg-lightGrey rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openCertificateModal(certificate)}
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                      <Award size={24} className="text-gold" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display font-medium text-navy mb-1">
                      {certificate.title}
                    </h3>
                    <div className="text-sm text-gray-600 mb-2">
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
