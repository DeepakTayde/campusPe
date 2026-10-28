'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.sectionWrapper} aria-label="Final Conversion Action">
      <Container>
        <div className={styles.conversionCard}>
          <div className={styles.textGroup}>
            <h2 className={styles.heading}>Ready for what&apos;s next?</h2>
            <p className={styles.subheading}>
              Join thousands of students, colleges, and employers already using CampusPē to transform campus recruitment.
            </p>
          </div>

          <div className={styles.actionsGroup}>
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollTo('colleges')}
            >
              Explore Colleges
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollTo('opportunities')}
            >
              Find Opportunities
            </Button>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsOptionsModalOpen(true)}
            >
              Learn Your Options
            </Button>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollTo('employers')}
            >
              Post a Job
            </Button>
          </div>
        </div>
      </Container>

      {/* Learn Your Options Modal */}
      <Modal
        isOpen={isOptionsModalOpen}
        onClose={() => setIsOptionsModalOpen(false)}
        title="Choose Your CampusPē Journey"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div
            onClick={() => {
              setIsOptionsModalOpen(false);
              scrollTo('opportunities');
            }}
            style={{
              padding: '16px',
              borderRadius: '16px',
              backgroundColor: 'var(--bg-soft, #F5F8FC)',
              border: '1px solid var(--border-light, #E2E8F0)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 150ms ease',
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-dark, #0B1A30)' }}>🎓 For Students & Freshers</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted, #64748B)', marginTop: '2px' }}>
                Upload your resume, find verified high-paying roles, and track interview calls.
              </div>
            </div>
            <span style={{ color: 'var(--primary-blue)', fontWeight: 700 }}>→</span>
          </div>

          <div
            onClick={() => {
              setIsOptionsModalOpen(false);
              scrollTo('colleges');
            }}
            style={{
              padding: '16px',
              borderRadius: '16px',
              backgroundColor: 'var(--bg-soft, #F5F8FC)',
              border: '1px solid var(--border-light, #E2E8F0)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 150ms ease',
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-dark, #0B1A30)' }}>🏛️ For Colleges & Placement Cells</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted, #64748B)', marginTop: '2px' }}>
                Showcase institutional track record and connect student batches to 100+ recruiters.
              </div>
            </div>
            <span style={{ color: 'var(--primary-blue)', fontWeight: 700 }}>→</span>
          </div>

          <div
            onClick={() => {
              setIsOptionsModalOpen(false);
              scrollTo('employers');
            }}
            style={{
              padding: '16px',
              borderRadius: '16px',
              backgroundColor: 'var(--bg-soft, #F5F8FC)',
              border: '1px solid var(--border-light, #E2E8F0)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 150ms ease',
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-dark, #0B1A30)' }}>💼 For Employers & Talent Teams</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted, #64748B)', marginTop: '2px' }}>
                Post job requirements, view pre-screened shortlists, and cut hiring time by 60%.
              </div>
            </div>
            <span style={{ color: 'var(--primary-blue)', fontWeight: 700 }}>→</span>
          </div>
        </div>
      </Modal>
    </section>
  );
}

