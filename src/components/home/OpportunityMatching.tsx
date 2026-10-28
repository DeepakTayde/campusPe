'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import styles from './OpportunityMatching.module.css';

interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Internships';
  isRemote: boolean;
  category: 'Tech' | 'Design' | 'Analytics';
  package: string;
  matchScore: number;
  logoColor: string;
  logoLetter: string;
}

export default function OpportunityMatching() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Full-time' | 'Internships' | 'remote' | 'Tech'>('all');
  const [selectedJob, setSelectedJob] = useState<JobOpportunity | null>(null);
  const [isApplied, setIsApplied] = useState(false);

  const allJobs: JobOpportunity[] = [
    {
      id: 'job-1',
      title: 'Software Development Engineer',
      company: 'Razorpay',
      location: 'Bengaluru, KA',
      type: 'Full-time',
      isRemote: false,
      category: 'Tech',
      package: '₹12 - 18 LPA',
      matchScore: 96,
      logoColor: '#0C2340',
      logoLetter: 'R',
    },
    {
      id: 'job-2',
      title: 'Associate Product Designer',
      company: 'Swiggy',
      location: 'Bengaluru / Remote',
      type: 'Full-time',
      isRemote: true,
      category: 'Design',
      package: '₹8 - 14 LPA',
      matchScore: 93,
      logoColor: '#FC8019',
      logoLetter: 'S',
    },
    {
      id: 'job-3',
      title: 'Data Science & AI Intern',
      company: 'CRED',
      location: 'Bengaluru, KA',
      type: 'Internships',
      isRemote: false,
      category: 'Analytics',
      package: '₹40,000 / month',
      matchScore: 89,
      logoColor: '#121212',
      logoLetter: 'C',
    },
    {
      id: 'job-4',
      title: 'Cloud & DevOps Engineer',
      company: 'Postman',
      location: 'Remote, India',
      type: 'Full-time',
      isRemote: true,
      category: 'Tech',
      package: '₹10 - 16 LPA',
      matchScore: 88,
      logoColor: '#FF6C37',
      logoLetter: 'P',
    },
  ];

  const filteredJobs = allJobs.filter((job) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'remote') return job.isRemote;
    if (activeFilter === 'Tech') return job.category === 'Tech';
    return job.type === activeFilter;
  });

  const handleApplyClick = (job: JobOpportunity) => {
    setSelectedJob(job);
    setIsApplied(false);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplied(true);
    setTimeout(() => {
      setSelectedJob(null);
      setIsApplied(false);
    }, 2000);
  };

  return (
    <section id="opportunities" className={styles.sectionWrapper}>
      <div className={styles.glowBackground} />
      <Container>
        <div className={styles.twoColumnLayout}>
          {/* Left Column: Value Proposition & 3 Steps */}
          <div className={styles.leftCol}>
            <div className={styles.sectionBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="12 8 8 12 12 16 12 8"></polygon>
              </svg>
              <span>AI / Opportunity Matching</span>
            </div>

            <h2 className={styles.heading}>
              Stop searching.{' '}
              <span className={styles.headingHighlight}>Start getting matched.</span>
            </h2>

            <p className={styles.subheading}>
              Tell us about your skills, interests, and goals. Our smart algorithm matches you with opportunities that fit your profile, not just keywords.
            </p>

            <div className={styles.stepList}>
              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepText}>
                  <h3 className={styles.stepTitle}>Set your career preferences</h3>
                  <p className={styles.stepDescription}>
                    Define your target roles, preferred locations, CTC expectations, and technical domains.
                  </p>
                </div>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepText}>
                  <h3 className={styles.stepTitle}>Discover high-compatibility roles</h3>
                  <p className={styles.stepDescription}>
                    Our AI evaluates college curriculum, projects, and skills to provide precise compatibility scores.
                  </p>
                </div>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepText}>
                  <h3 className={styles.stepTitle}>Receive direct interview invites</h3>
                  <p className={styles.stepDescription}>
                    Skip endless applications. Verified recruiters directly review your matched profile and send invites.
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              as="a"
              href="#resume-upload"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              }
            >
              Get Matched Now
            </Button>
          </div>

          {/* Right Column: Live Interactive Opportunity Feed */}
          <div className={styles.feedCard}>
            <div className={styles.feedHeader}>
              <div className={styles.feedTitleGroup}>
                <div className={styles.feedIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3 className={styles.feedTitle}>CampusPē Opportunity Feed</h3>
              </div>
              <div className={styles.matchRateBadge}>
                <span className={styles.pulseDot} />
                <span>98% Match Accuracy</span>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className={styles.filterChips} role="tablist" aria-label="Opportunity Filters">
              <button
                type="button"
                className={`${styles.filterChip} ${activeFilter === 'all' ? styles.filterChipActive : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Types
              </button>
              <button
                type="button"
                className={`${styles.filterChip} ${activeFilter === 'Full-time' ? styles.filterChipActive : ''}`}
                onClick={() => setActiveFilter('Full-time')}
              >
                Full-time
              </button>
              <button
                type="button"
                className={`${styles.filterChip} ${activeFilter === 'Internships' ? styles.filterChipActive : ''}`}
                onClick={() => setActiveFilter('Internships')}
              >
                Internships
              </button>
              <button
                type="button"
                className={`${styles.filterChip} ${activeFilter === 'remote' ? styles.filterChipActive : ''}`}
                onClick={() => setActiveFilter('remote')}
              >
                Remote
              </button>
              <button
                type="button"
                className={`${styles.filterChip} ${activeFilter === 'Tech' ? styles.filterChipActive : ''}`}
                onClick={() => setActiveFilter('Tech')}
              >
                Tech Roles
              </button>
            </div>

            {/* Job Listings List */}
            <div className={styles.jobList}>
              {filteredJobs.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--text-muted)' }}>
                  No jobs found matching this filter.
                </div>
              ) : (
                filteredJobs.map((job) => (
                  <div key={job.id} className={styles.jobItem}>
                    <div className={styles.jobLeft}>
                      <div className={styles.companyLogo} style={{ backgroundColor: job.logoColor }}>
                        {job.logoLetter}
                      </div>
                      <div className={styles.jobDetails}>
                        <h4 className={styles.jobTitle}>{job.title}</h4>
                        <div className={styles.jobMeta}>
                          <span>{job.company}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span className={styles.metaTag}>{job.package}</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.jobRight}>
                      <span className={styles.matchScore}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {job.matchScore}% Match
                      </span>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleApplyClick(job)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Feed Footer */}
            <div className={styles.feedFooter}>
              <a href="#hero" className={styles.viewAllLink}>
                <span>View all matching jobs (140+)</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Floating bottom placement indicator */}
            <div className={styles.placedBadge}>
              <span>⚡</span>
              <span>Over <strong>500+ students</strong> placed this month</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Modal for 1-Click Application */}
      <Modal
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        title={selectedJob ? `Apply to ${selectedJob.company}` : 'Job Application'}
      >
        {isApplied ? (
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
              Application Submitted!
            </h3>
            <p style={{ color: 'var(--text-muted, #64748B)', fontSize: '0.9375rem' }}>
              Your profile and {selectedJob?.matchScore}% match rating have been forwarded directly to the hiring team at {selectedJob?.company}.
            </p>
          </div>
        ) : (
          selectedJob && (
            <form onSubmit={handleApplicationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                padding: '12px 16px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-soft, #F5F8FC)',
                border: '1px solid var(--border-light, #E2E8F0)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <h4 style={{ fontWeight: 700, color: 'var(--text-dark, #0B1A30)' }}>{selectedJob.title}</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted, #64748B)' }}>
                    {selectedJob.company} • {selectedJob.location} • {selectedJob.package}
                  </p>
                </div>
                <span className={styles.matchScore}>{selectedJob.matchScore}% Match</span>
              </div>

              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  defaultValue="Aarav Sharma"
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
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  defaultValue="aarav.sharma@college.edu"
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
                  Linked Resume
                </label>
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px dashed var(--primary-blue)',
                  backgroundColor: 'var(--accent-badge-bg)',
                  fontSize: '0.875rem',
                  color: 'var(--primary-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  <span>Aarav_Sharma_Resume.pdf (Verified ATS Score: 94/100)</span>
                </div>
              </div>

              <Button type="submit" variant="primary" size="md" fullWidth style={{ marginTop: '8px' }}>
                Confirm & Submit Application
              </Button>
            </form>
          )
        )}
      </Modal>
    </section>
  );
}

