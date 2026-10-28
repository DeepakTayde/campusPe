'use client';

import React, { useState, useEffect } from 'react';
import Container from '@/components/layout/Container';
import styles from './AppShowcase.module.css';

interface ScreenData {
  id: string;
  title: string;
  renderScreen: () => React.ReactNode;
}

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(2); // Center screen (Dashboard) as default
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const screens: ScreenData[] = [
    {
      id: 'profile',
      title: 'Student Profile & Skills',
      renderScreen: () => (
        <div className={styles.screenBody}>
          <div className={styles.appHeader}>
            <span className={styles.appBrand}>Student Profile</span>
            <span className={styles.appAvatar}>AS</span>
          </div>
          <div style={{ padding: '12px', textAlign: 'center', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#EAF3FF', color: '#087FF5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 800, fontSize: '1.125rem' }}>
              AS
            </div>
            <div style={{ fontWeight: 800, fontSize: '0.9375rem', color: '#0B1A30' }}>Aarav Sharma</div>
            <div style={{ fontSize: '0.6875rem', color: '#64748B' }}>B.Tech CSE • RVCE Bengaluru</div>
            <div style={{ display: 'inline-block', marginTop: '6px', backgroundColor: '#ECFDF5', color: '#047857', fontSize: '0.625rem', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>
              ✓ Verified Student
            </div>
          </div>
          <div style={{ padding: '12px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0B1A30', marginBottom: '6px' }}>Core Skills</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
              {['React', 'TypeScript', 'Data Structures', 'Python', 'SQL'].map((skill) => (
                <span key={skill} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '2px 8px', borderRadius: '6px', fontSize: '0.625rem', fontWeight: 600, color: '#087FF5' }}>
                  {skill}
                </span>
              ))}
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0B1A30', marginBottom: '6px' }}>ATS Resume</div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.6875rem' }}>
              <span style={{ color: '#0B1A30', fontWeight: 600 }}>Resume_2026.pdf</span>
              <span style={{ color: '#047857', fontWeight: 700 }}>96/100</span>
            </div>
          </div>
          <div className={styles.appBottomNav}>
            <span>🏠 Home</span>
            <span>💼 Jobs</span>
            <span className={styles.appNavItemActive}>👤 Profile</span>
          </div>
        </div>
      ),
    },
    {
      id: 'search',
      title: 'Job Search & Discovery',
      renderScreen: () => (
        <div className={styles.screenBody}>
          <div className={styles.appHeader}>
            <span className={styles.appBrand}>Explore Jobs</span>
            <span style={{ fontSize: '0.75rem' }}>🔍</span>
          </div>
          <div className={styles.appSearchBox}>
            <span>🔍</span>
            <span>Search roles, tech stack...</span>
          </div>
          <div style={{ display: 'flex', gap: '4px', padding: '0 10px 8px', overflowX: 'hidden' }}>
            {['All', 'Full-time', 'Intern', 'Remote'].map((tab, idx) => (
              <span key={tab} style={{ backgroundColor: idx === 0 ? '#087FF5' : '#FFFFFF', color: idx === 0 ? '#FFFFFF' : '#475569', padding: '3px 8px', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 600 }}>
                {tab}
              </span>
            ))}
          </div>
          <div className={styles.appJobList}>
            <div className={styles.miniJobCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className={styles.miniJobTitle}>Frontend Engineer</span>
                <span style={{ color: '#047857', fontSize: '0.625rem', fontWeight: 700 }}>96%</span>
              </div>
              <div className={styles.miniJobMeta}>
                <span>Razorpay • Bengaluru</span>
                <span style={{ color: '#087FF5', fontWeight: 600 }}>₹14 LPA</span>
              </div>
            </div>
            <div className={styles.miniJobCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className={styles.miniJobTitle}>UI/UX Designer</span>
                <span style={{ color: '#047857', fontSize: '0.625rem', fontWeight: 700 }}>93%</span>
              </div>
              <div className={styles.miniJobMeta}>
                <span>Swiggy • Remote</span>
                <span style={{ color: '#087FF5', fontWeight: 600 }}>₹10 LPA</span>
              </div>
            </div>
            <div className={styles.miniJobCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className={styles.miniJobTitle}>Data Analyst Intern</span>
                <span style={{ color: '#047857', fontSize: '0.625rem', fontWeight: 700 }}>89%</span>
              </div>
              <div className={styles.miniJobMeta}>
                <span>CRED • Bengaluru</span>
                <span style={{ color: '#087FF5', fontWeight: 600 }}>₹35k/mo</span>
              </div>
            </div>
          </div>
          <div className={styles.appBottomNav}>
            <span>🏠 Home</span>
            <span className={styles.appNavItemActive}>💼 Jobs</span>
            <span>👤 Profile</span>
          </div>
        </div>
      ),
    },
    {
      id: 'dashboard',
      title: 'Main Student Dashboard',
      renderScreen: () => (
        <div className={styles.screenBody}>
          <div className={styles.appHeader}>
            <span className={styles.appBrand}>CampusPē</span>
            <span className={styles.appAvatar}>AS</span>
          </div>
          <div className={styles.appBanner}>
            <div className={styles.appBannerTitle}>Hi, Aarav! 👋</div>
            <div className={styles.appBannerSub}>4 new campus roles matched your profile today.</div>
          </div>
          <div className={styles.appSearchBox}>
            <span>🔍</span>
            <span>Search jobs, companies...</span>
          </div>
          <div className={styles.appCategories}>
            <div className={styles.catItem}>💻 Tech</div>
            <div className={styles.catItem}>🎨 Design</div>
            <div className={styles.catItem}>📈 Analytics</div>
            <div className={styles.catItem}>🚀 Startup</div>
          </div>
          <div className={styles.appJobList}>
            <div className={styles.miniJobCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className={styles.miniJobTitle}>Software Engineer</span>
                <span style={{ backgroundColor: '#ECFDF5', color: '#047857', fontSize: '0.625rem', fontWeight: 700, padding: '1px 6px', borderRadius: '4px' }}>96% Match</span>
              </div>
              <div className={styles.miniJobMeta}>
                <span>Razorpay • ₹12 - 18 LPA</span>
                <span style={{ color: '#087FF5', fontWeight: 700 }}>Apply</span>
              </div>
            </div>
            <div className={styles.miniJobCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className={styles.miniJobTitle}>Product Designer</span>
                <span style={{ backgroundColor: '#ECFDF5', color: '#047857', fontSize: '0.625rem', fontWeight: 700, padding: '1px 6px', borderRadius: '4px' }}>93% Match</span>
              </div>
              <div className={styles.miniJobMeta}>
                <span>Swiggy • ₹8 - 14 LPA</span>
                <span style={{ color: '#087FF5', fontWeight: 700 }}>Apply</span>
              </div>
            </div>
          </div>
          <div className={styles.appBottomNav}>
            <span className={styles.appNavItemActive}>🏠 Home</span>
            <span>💼 Jobs</span>
            <span>📄 Status</span>
            <span>👤 Profile</span>
          </div>
        </div>
      ),
    },
    {
      id: 'applications',
      title: 'Application Tracking',
      renderScreen: () => (
        <div className={styles.screenBody}>
          <div className={styles.appHeader}>
            <span className={styles.appBrand}>Applications</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#087FF5' }}>3 Active</span>
          </div>
          <div style={{ display: 'flex', gap: '4px', padding: '10px 10px 6px' }}>
            <span style={{ backgroundColor: '#087FF5', color: '#FFFFFF', padding: '3px 8px', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 600 }}>
              All (3)
            </span>
            <span style={{ backgroundColor: '#FFFFFF', color: '#475569', padding: '3px 8px', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 600 }}>
              Shortlisted (1)
            </span>
            <span style={{ backgroundColor: '#FFFFFF', color: '#475569', padding: '3px 8px', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 600 }}>
              Interviews (2)
            </span>
          </div>
          <div className={styles.appJobList}>
            <div className={styles.miniJobCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className={styles.miniJobTitle}>Razorpay • SDE 1</span>
                <span style={{ color: '#2563EB', fontSize: '0.625rem', fontWeight: 700 }}>Technical Round</span>
              </div>
              <div style={{ fontSize: '0.625rem', color: '#64748B', marginTop: '2px' }}>Tomorrow, 3:00 PM via Google Meet</div>
              <div style={{ marginTop: '4px', backgroundColor: '#EFF6FF', color: '#1D4ED8', fontSize: '0.625rem', padding: '4px', borderRadius: '4px', textAlign: 'center', fontWeight: 600 }}>
                Join Video Call
              </div>
            </div>
            <div className={styles.miniJobCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className={styles.miniJobTitle}>CRED • Data Intern</span>
                <span style={{ color: '#047857', fontSize: '0.625rem', fontWeight: 700 }}>Offer Received 🎉</span>
              </div>
              <div style={{ fontSize: '0.625rem', color: '#64748B', marginTop: '2px' }}>Stipend: ₹40k/mo • Starts July 2026</div>
              <div style={{ marginTop: '4px', backgroundColor: '#ECFDF5', color: '#047857', fontSize: '0.625rem', padding: '4px', borderRadius: '4px', textAlign: 'center', fontWeight: 600 }}>
                Review Offer Letter
              </div>
            </div>
          </div>
          <div className={styles.appBottomNav}>
            <span>🏠 Home</span>
            <span>💼 Jobs</span>
            <span className={styles.appNavItemActive}>📄 Status</span>
            <span>👤 Profile</span>
          </div>
        </div>
      ),
    },
    {
      id: 'recruiter',
      title: 'Recruiter & College Portal',
      renderScreen: () => (
        <div className={styles.screenBody}>
          <div className={styles.appHeader}>
            <span className={styles.appBrand}>Campus Portal</span>
            <span style={{ fontSize: '0.75rem' }}>🔔</span>
          </div>
          <div style={{ padding: '10px' }}>
            <div style={{ backgroundColor: '#0B1A30', color: '#FFFFFF', padding: '12px', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6875rem', opacity: 0.8 }}>Active Campus Drive</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, marginTop: '2px' }}>RVCE Bengaluru - CSE</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.6875rem' }}>
                <span>Applied: 142</span>
                <span style={{ color: '#10B981', fontWeight: 700 }}>Shortlisted: 18</span>
              </div>
            </div>
          </div>
          <div style={{ padding: '0 10px', fontSize: '0.75rem', fontWeight: 700, color: '#0B1A30', marginBottom: '6px' }}>Top Shortlisted Students</div>
          <div className={styles.appJobList}>
            <div className={styles.miniJobCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className={styles.miniJobTitle}>Aarav Sharma</span>
                <span style={{ color: '#047857', fontSize: '0.625rem', fontWeight: 700 }}>96% Fit</span>
              </div>
              <div className={styles.miniJobMeta}>
                <span>9.2 CGPA • Full Stack</span>
                <span style={{ color: '#087FF5', fontWeight: 700 }}>Invite</span>
              </div>
            </div>
            <div className={styles.miniJobCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className={styles.miniJobTitle}>Pooja Nair</span>
                <span style={{ color: '#047857', fontSize: '0.625rem', fontWeight: 700 }}>94% Fit</span>
              </div>
              <div className={styles.miniJobMeta}>
                <span>8.9 CGPA • AI & ML</span>
                <span style={{ color: '#087FF5', fontWeight: 700 }}>Invite</span>
              </div>
            </div>
          </div>
          <div className={styles.appBottomNav}>
            <span className={styles.appNavItemActive}>📊 Analytics</span>
            <span>👥 Talent</span>
            <span>⚙️ Settings</span>
          </div>
        </div>
      ),
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < screens.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section id="showcase" className={styles.sectionWrapper}>
      <Container>
        <div className={styles.headerContent}>
          <h2 className={styles.headline}>Checkout Our App Interface Look</h2>
          <p className={styles.subheadline}>
            Experience the convenience of campus placements and job search on the go. Available for both students and recruiters.
          </p>
        </div>

        {/* 5-Phone Interactive Carousel Stage */}
        <div
          className={styles.showcaseStage}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.phonesRow}>
            {screens.map((screen, idx) => {
              const distance = idx - activeIndex;

              let positionClass = styles.farPhone;
              if (distance === 0) positionClass = styles.centerPhone;
              else if (Math.abs(distance) === 1) positionClass = styles.nearPhone;

              return (
                <div
                  key={screen.id}
                  className={`${styles.phoneWrapper} ${positionClass}`}
                  onClick={() => setActiveIndex(idx)}
                  title={`View ${screen.title}`}
                >
                  <div className={styles.phoneFrame}>
                    <div className={styles.phoneNotch} />
                    <div className={styles.phoneStatusBar}>
                      <span>9:41</span>
                      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                        <span>📶</span>
                        <span>🔋</span>
                      </div>
                    </div>
                    {screen.renderScreen()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Arrows & Indicators */}
        <div className={styles.controlsRow}>
          <button
            type="button"
            className={styles.navArrowBtn}
            onClick={handlePrev}
            aria-label="Previous screen"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className={styles.dotsList} role="tablist" aria-label="Showcase Screens">
            {screens.map((screen, idx) => (
              <button
                key={screen.id}
                type="button"
                className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to ${screen.title}`}
                aria-selected={idx === activeIndex}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.navArrowBtn}
            onClick={handleNext}
            aria-label="Next screen"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}

