
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import PortfolioSection from '../components/PortfolioSection';
import AchievementsSection from '../components/AchievementsSection';
import SkillsSection from '../components/SkillsSection';
import BlogSection from '../components/BlogSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <PortfolioSection />
      <AchievementsSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
