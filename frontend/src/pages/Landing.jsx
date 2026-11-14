import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainSection from '../components/section/MainSection';
import AboutSection from '../components/section/AboutSection';
import FeatureSection from '../components/section/FeatureSection';
import ServiceSection from '../components/section/ServiceSection';
import DownloadSection from '../components/section/DownloadSection';

function LandingPage() {
  return (
    <div className="grid grid-cols-1">
      <Header />
      <main className="relative">
        <MainSection />
        <AboutSection />
        <FeatureSection />
        <ServiceSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
