import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Set proper page title and meta description
    document.title = 'Susan Chen - Software Engineer & Web Developer';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Susan Chen - Experienced Software Engineer and Web Developer specializing in React, Node.js, and scalable web applications. View my portfolio and get in touch.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
