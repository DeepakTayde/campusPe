import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import TrustStats from '@/components/home/TrustStats';
import PartnerLogos from '@/components/home/PartnerLogos';
import OpportunityMatching from '@/components/home/OpportunityMatching';
import ResumeUpload from '@/components/home/ResumeUpload';
import CollegeDiscovery from '@/components/home/CollegeDiscovery';
import EmployerHiring from '@/components/home/EmployerHiring';
import AppShowcase from '@/components/home/AppShowcase';
import AppDownload from '@/components/home/AppDownload';
import SupportCTA from '@/components/home/SupportCTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustStats />
        <PartnerLogos />
        <OpportunityMatching />
        <ResumeUpload />
        <CollegeDiscovery />
        <EmployerHiring />
        <AppShowcase />
        <AppDownload />
        <SupportCTA />
      </main>
    </>
  );
}
