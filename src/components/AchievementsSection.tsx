
import React from 'react';
import { Award, Star } from 'lucide-react';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="md:px-20 lg:px-40 section-padding bg-navy text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-gold">Achievements</h2>
        <p className="text-xl md:text-2xl font-display mb-12 text-gray-300">
          Recognition of excellence in finance and leadership
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Achievement 1 */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">
            <div className="flex items-start">
              <div className="mr-6 text-gold">
                <Award size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-medium mb-3 text-gold">Innovatus Management Competition 5th Place</h3>
                <p className="text-gray-300 mb-4">
                Secured 5th place in IIT Delhi’s prestigious Innovatus competition—competing against 322 teams from leading institutions including IIMs and top B-schools.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Led the team representing Lala Lajpatrai Institute of Management, Mumbai</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Collaborated with Manasi Amdekar, Anvay Birelliwar & Ravindra Singh Chouhan on strategy and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Crafted and presented innovative solutions under competitive case-challenge conditions</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <span className="text-sm text-white/70">Awarded Aug 2024</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Achievement 2 */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">
            <div className="flex items-start">
              <div className="mr-6 text-gold">
                <Award size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-medium mb-3 text-gold">STORM 2024 Case Study Competition – 3rd Place</h3>
                <p className="text-gray-300 mb-4">
                Secured 3rd place in the prestigious STORM 2024 Case Study Competition, competing against 120+ teams from leading institutions.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Conducted an in-depth analysis of short-selling mechanics and the GameStop short squeeze’s power dynamics.</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Uncovered insights on market manipulation, the risk/reward profile of short selling, and the importance of rigorous due diligence.</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Presented a data-driven case solution showcasing strong analytical rigor and teamwork.</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <span className="text-sm text-white/70">Awarded February 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
