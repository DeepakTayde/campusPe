'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import styles from './CollegeDiscovery.module.css';

export default function CollegeDiscovery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const features = [
    {
      id: 'profile',
      title: 'Build your college profile',
      description:
        'Showcase accredited programs, department strengths, research infrastructure, and faculty excellence to thousands of verified recruiters.',
      statusText: 'Verified Badge',
      statusClass: styles.statusVerified,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
    },
    {
      id: 'connect',
      title: 'Connect students with recruiters',
      description:
        'Empower your campus placement cell to introduce student cohorts directly to hiring managers from high-growth tech firms and Fortune 500s.',
      statusText: 'Direct Connect',
      statusClass: styles.statusBlue,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      id: 'records',
      title: 'Showcase your placement records',
      description:
        'Publish verified placement statistics, median and peak CTC packages, and marquee partner companies with cryptographic verification.',
      statusText: 'Live Analytics',
      statusClass: styles.statusVerified,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
    },
    {
      id: 'tracking',
      title: 'Track applications & outcomes',
      description:
        'Monitor active campus recruitment drives, student interview schedules, offer letters, and cohort acceptance rates in real time.',
      statusText: 'Real-time Reports',
      statusClass: styles.statusBlue,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <section id="colleges" className={styles.sectionWrapper}>
      <Container>
        <div className={styles.twoColumnLayout}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <div className={styles.sectionBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              <span>For Colleges & Universities</span>
            </div>

            <h2 className={styles.heading}>
              Get Discovered by{' '}
              <span className={styles.headingHighlight}>Students and Recruiters.</span>
            </h2>

            <p className={styles.description}>
              Put your institution in front of thousands of aspiring students and top campus recruiters. CampusPē helps colleges showcase their programs, verify placement records, and attract marquee hiring partners.
            </p>

            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              }
            >
              Join Your College
            </Button>
          </div>

          {/* Right Column: 4 Feature Cards */}
          <div className={styles.featureCardsList}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.featureCard}>
                <div className={styles.cardIcon}>{feature.icon}</div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeaderRow}>
                    <h3 className={styles.cardTitle}>{feature.title}</h3>
                    <span className={`${styles.statusPill} ${feature.statusClass}`}>
                      {feature.statusText}
                    </span>
                  </div>
                  <p className={styles.cardText}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* College Onboarding Dialog */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Register Your Institution with CampusPē"
      >
        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'var(--status-success-bg, #ECFDF5)',
              color: 'var(--status-success, #10B981)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark, #0B1A30)', marginBottom: '8px' }}>
              Institution Registered!
            </h3>
            <p style={{ color: 'var(--text-muted, #64748B)', fontSize: '0.9375rem' }}>
              Our institutional partnerships team will verify your credentials and configure your placement portal within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                Institution / University Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. National Institute of Technology Karnataka"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light, #E2E8F0)',
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                Official University Email (TPO / Placement Cell)
              </label>
              <input
                type="email"
                required
                placeholder="placements@nitk.edu.in"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light, #E2E8F0)',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                  City / State
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Surathkal, Karnataka"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light, #E2E8F0)',
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                  Annual Student Intake
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1,200+ students"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light, #E2E8F0)',
                  }}
                />
              </div>
            </div>

            <Button type="submit" variant="primary" size="md" fullWidth style={{ marginTop: '8px' }}>
              Submit College Application
            </Button>
          </form>
        )}
      </Modal>
    </section>
  );
}

