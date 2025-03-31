
import React from 'react';
import { Award, Star } from 'lucide-react';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-navy text-white">
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
                <h3 className="text-2xl font-display font-medium mb-3 text-gold">Global Investment Banking Case Competition Winner</h3>
                <p className="text-gray-300 mb-4">
                  First place in Harvard Business School's annual Investment Banking Case Competition, competing against 32 teams from top business schools globally.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Developed winning M&A strategy for a $5B healthcare company acquisition</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Built comprehensive valuation model incorporating synergies and integration risks</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Presented strategic recommendations to panel of MD-level investment bankers</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <span className="text-sm text-white/70">Awarded May 2022</span>
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
                <h3 className="text-2xl font-display font-medium mb-3 text-gold">CFAI Research Challenge Regional Finalist</h3>
                <p className="text-gray-300 mb-4">
                  Led team to regional finals in the CFA Institute Research Challenge, producing professional-quality equity research report and presentation.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Created comprehensive equity valuation model for publicly traded fintech company</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Conducted management interviews and in-depth industry competitive analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Star size={16} className="mr-2 mt-1 text-gold" />
                    <span>Defended investment thesis to panel of industry professionals</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <span className="text-sm text-white/70">Awarded February 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CFA Progress */}
        <div className="mt-16 p-8 bg-white/5 backdrop-blur rounded-lg border border-white/10">
          <h3 className="text-2xl font-display font-medium mb-6 text-gold">CFA Progress</h3>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-xs">✓</div>
                <span className="ml-3 text-white">Level I - Passed (June 2022)</span>
              </div>
            </div>
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-gold/30 flex items-center justify-center text-navy font-bold text-xs">2</div>
                <span className="ml-3 text-gold">Level II - Candidate (June 2024)</span>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white/70 font-bold text-xs">3</div>
                <span className="ml-3 text-white/50">Level III - Future</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
