import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import TrustStats from '@/components/home/TrustStats';
import PartnerLogos from '@/components/home/PartnerLogos';
import OpportunityMatching from '@/components/home/OpportunityMatching';
import ResumeUpload from '@/components/home/ResumeUpload';

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
      </main>
    </>
  );
}
