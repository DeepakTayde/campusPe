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
            <img
              src="/assets/icons/ai_assistant_icon.png"
              alt="ai assistant"
              className={styles.logoImage}
            />
            <span>AI-Powered Campus Assistant</span>
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

