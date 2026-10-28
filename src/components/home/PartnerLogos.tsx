'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import styles from './PartnerLogos.module.css';

export default function PartnerLogos() {
  const partners = [
    {
      name: 'GINSERV',
      id: 'ginserv',
      svg: (
        <svg viewBox="0 0 160 48" fill="none" className={styles.partnerSvg} xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="24" r="14" fill="#00A0E3" opacity="0.15" />
          <path d="M14 16C18.4 16 22 19.6 22 24C22 28.4 18.4 32 14 32C9.6 32 6 28.4 6 24C6 19.6 9.6 16 14 16Z" stroke="#00A0E3" strokeWidth="3" />
          <path d="M22 24H14" stroke="#00A0E3" strokeWidth="3" strokeLinecap="round" />
          <text x="36" y="27" fill="#0B2545" fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.05em">GINSERV</text>
          <text x="36" y="36" fill="#64748B" fontSize="6.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.08em">GLOBAL INCUBATION</text>
        </svg>
      ),
    },
    {
      name: 'STARTUP KARNATAKA',
      id: 'startup-karnataka',
      svg: (
        <svg viewBox="0 0 180 48" fill="none" className={styles.partnerSvg} xmlns="http://www.w3.org/2000/svg">
          <path d="M8 32L34 14L22 34L18 26L8 32Z" fill="#F44336" />
          <path d="M18 26L34 14L26 30L18 26Z" fill="#D32F2F" />
          <text x="42" y="23" fill="#1E293B" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.08em">STARTUP</text>
          <text x="42" y="34" fill="#E53935" fontSize="11" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.12em">KARNATAKA</text>
        </svg>
      ),
    },
    {
      name: 'Govt of Karnataka',
      id: 'govt-karnataka',
      svg: (
        <svg viewBox="0 0 160 48" fill="none" className={styles.partnerSvg} xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="24" r="16" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <path d="M14 26C14 20 20 16 20 16C20 16 26 20 26 26C26 29 23 32 20 32C17 32 14 29 14 26Z" fill="#B45309" />
          <circle cx="20" cy="20" r="2" fill="#FEF3C7" />
          <text x="44" y="22" fill="#78350F" fontSize="10" fontWeight="800" fontFamily="sans-serif">GOVERNMENT OF</text>
          <text x="44" y="33" fill="#B45309" fontSize="12" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.05em">KARNATAKA</text>
        </svg>
      ),
    },
    {
      name: 'K-TECH',
      id: 'k-tech',
      svg: (
        <svg viewBox="0 0 140 48" fill="none" className={styles.partnerSvg} xmlns="http://www.w3.org/2000/svg">
          <path d="M18 12V36M18 24L28 14M18 24L28 34" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="24" r="3" fill="#059669" />
          <text x="36" y="30" fill="#065F46" fontSize="18" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.04em">k-tech</text>
        </svg>
      ),
    },
    {
      name: 'Startup India',
      id: 'startup-india',
      svg: (
        <svg viewBox="0 0 160 48" fill="none" className={styles.partnerSvg} xmlns="http://www.w3.org/2000/svg">
          <path d="M18 34C18 34 13 31 13 25C13 20 17 17 17 14C17 14 23 18 23 25C23 31 18 34 18 34Z" fill="#EA580C" />
          <path d="M18 33C18 33 15 31 15 27C15 23 18 21 18 19C18 19 21 22 21 27C21 31 18 33 18 33Z" fill="#FACC15" />
          <text x="32" y="24" fill="#0F172A" fontSize="13" fontWeight="800" fontFamily="sans-serif">Startup</text>
          <text x="80" y="24" fill="#EA580C" fontSize="13" fontWeight="800" fontFamily="sans-serif">India</text>
          <text x="32" y="34" fill="#64748B" fontSize="7" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.05em">GOVT OF INDIA</text>
        </svg>
      ),
    },
    {
      name: 'Digital India',
      id: 'digital-india',
      svg: (
        <svg viewBox="0 0 160 48" fill="none" className={styles.partnerSvg} xmlns="http://www.w3.org/2000/svg">
          <path d="M18 14C23.5 14 28 18.5 28 24C28 29.5 23.5 34 18 34" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
          <path d="M14 18C17.3 18 20 20.7 20 24C20 27.3 17.3 30 14 30" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="10" cy="24" r="2.5" fill="#0284C7" />
          <text x="36" y="24" fill="#0C4A6E" fontSize="12" fontWeight="800" fontFamily="sans-serif">Digital</text>
          <text x="76" y="24" fill="#0284C7" fontSize="12" fontWeight="800" fontFamily="sans-serif">India</text>
          <text x="36" y="34" fill="#0284C7" fontSize="7" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.06em">POWER TO EMPOWER</text>
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.partnerSection} aria-label="Trusted Partners">
      <Container>
        <h2 className={styles.trustHeading}>Trusted by partners across India</h2>
        <div className={styles.logoRow}>
          {partners.map((partner) => (
            <div key={partner.id} className={styles.partnerItem} title={partner.name}>
              {partner.svg}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

