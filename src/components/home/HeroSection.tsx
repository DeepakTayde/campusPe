'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import AudienceCards from './AudienceCards';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  onSelectRole?: (role: 'student' | 'college' | 'employer') => void;
}

export default function HeroSection({ onSelectRole }: HeroSectionProps) {
  return (
    <section id="hero" className={styles.heroWrapper}>
      <Container>
        {/* Floating Notification Badges (Desktop) */}
        <div className={styles.floatingBadgeLeft}>
          <span className={styles.badgeIconDot} />
          <span>🎓 800+ Verified Students Onboarded</span>
        </div>

        <div className={styles.floatingBadgeRight}>
          <span className={styles.badgeIconDot} />
          <span>⚡ 100+ Jobs & Internships Live</span>
        </div>

        {/* Centered Hero Content */}
        <div className={styles.heroContent}>
          <div className={styles.topTag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>Campus Recruitment Platform</span>
          </div>

          <h1 className={styles.headline}>
            Connect <span className={styles.headlineHighlight}>10X Faster.</span>
          </h1>

          <p className={styles.subheadline}>
            One platform connecting students, colleges & employers — faster.
          </p>

          {/* Choice Prompt */}
          <div className={styles.choicePrompt}>
            <div className={styles.promptPill}>
              <span>🎯</span>
              <span className={styles.promptTitle}>What are you looking for?</span>
            </div>
          </div>
        </div>

        {/* 3 Audience Journey Cards */}
        <AudienceCards onSelectRole={onSelectRole} />
      </Container>
    </section>
  );
}

