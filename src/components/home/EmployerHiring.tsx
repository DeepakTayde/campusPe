'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import styles from './EmployerHiring.module.css';

export default function EmployerHiring() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'Post a role in minutes',
      description:
        'Define role requirements, required technical competencies, expected CTC, and target graduation batches in an intuitive guided flow.',
      statusText: 'Instant Publish',
      statusClass: styles.statusPill,
    },
    {
      number: '02',
      title: 'Receive a matched shortlist',
      description:
        'Our matching algorithm scans thousands of verified campus profiles, ranking candidates by real project work, skill assessments, and CGPA.',
      statusText: '95%+ Relevance',
      statusClass: styles.statusGreen,
    },
    {
      number: '03',
      title: 'Connect with shortlisted candidates',
      description:
        'Engage directly with students, schedule 1-on-1 virtual or on-campus interviews with calendar sync, and collaborate with college placement teams.',
      statusText: 'Direct Access',
      statusClass: styles.statusPill,
    },
    {
      number: '04',
      title: 'Reduce time-to-hire by 60%',
      description:
        'Eliminate chaotic email chains and fragmented spreadsheets. Issue verified offer letters and track student acceptances seamlessly.',
      statusText: '60% Faster',
      statusClass: styles.statusGreen,
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
    <section id="employers" className={styles.sectionWrapper}>
      <Container>
        <div className={styles.twoColumnLayout}>
          {/* Left Column: Employer Value Proposition */}
          <div className={styles.leftCol}>
            <div className={styles.sectionBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span>For Employers & Hiring Teams</span>
            </div>

            <h2 className={styles.heading}>
              Stop running campus drives.{' '}
              <span className={styles.headingHighlight}>Start hiring the right people.</span>
            </h2>

            <p className={styles.description}>
              Campus recruitment shouldn't take months of logistics and paperwork. Post your requirements, get matched with pre-screened talent across 130+ partner colleges, and manage interviews all in one place.
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
              Post a Job Now
            </Button>
          </div>

          {/* Right Column: 4 Step Workflow */}
          <div className={styles.workflowList}>
            {steps.map((step) => (
              <div key={step.number} className={styles.workflowCard}>
                <div className={styles.stepNumberCircle}>{step.number}</div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeaderRow}>
                    <h3 className={styles.cardTitle}>{step.title}</h3>
                    <span className={step.statusClass}>{step.statusText}</span>
                  </div>
                  <p className={styles.cardText}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Interactive Job Creation Dialog */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Post a New Opportunity on CampusPē"
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
              Job Opportunity Published!
            </h3>
            <p style={{ color: 'var(--text-muted, #64748B)', fontSize: '0.9375rem' }}>
              Your role has been broadcasted to verified students across 130+ colleges. Matched candidates will begin populating in your dashboard shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                Job Title / Position
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Graduate Software Engineer"
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
                  Employment Type
                </label>
                <select
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light, #E2E8F0)',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <option value="full-time">Full-time</option>
                  <option value="internship">Internship (3-6 Months)</option>
                  <option value="contract">Contract to Hire</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                  CTC / Stipend Package
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ₹8 - ₹12 LPA"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light, #E2E8F0)',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                Work Location / Remote Policy
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Bengaluru, India (Hybrid) or Remote"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light, #E2E8F0)',
                }}
              />
            </div>

            <Button type="submit" variant="primary" size="md" fullWidth style={{ marginTop: '8px' }}>
              Publish Job Listing
            </Button>
          </form>
        )}
      </Modal>
    </section>
  );
}

