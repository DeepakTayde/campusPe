'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import styles from './AudienceCards.module.css';

interface AudienceCardsProps {
  onSelectRole?: (role: 'student' | 'college' | 'employer') => void;
}

export default function AudienceCards({ onSelectRole }: AudienceCardsProps) {
  const cards = [
    {
      id: 'college',
      role: 'college' as const,
      tag: 'Institutions',
      title: 'College',
      description: 'Manage students, placements, courses and campus recruitment.',
      buttonText: 'Join as College',
      actionUrl: '#colleges',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
      features: [
        'Centralized placement & intake dashboard',
        'Direct connection to 100+ verified recruiters',
        'Automated student profiles & verification',
      ],
    },
    {
      id: 'student',
      role: 'student' as const,
      tag: 'Students',
      title: "I'm looking for a Job",
      description: 'Build a profile, find jobs and apply for opportunities.',
      buttonText: 'Explore Jobs',
      actionUrl: '#opportunities',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      features: [
        '1-click apply with automated resume parsing',
        'Tailored matches based on skills & goals',
        'Real-time interview alerts & status tracking',
      ],
    },
    {
      id: 'employer',
      role: 'employer' as const,
      tag: 'Recruiters',
      title: "I'm Hiring",
      description: 'Find candidates, connect with colleges and recruit talent.',
      buttonText: 'Post a Job',
      actionUrl: '#employers',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      features: [
        'Instant access to verified pre-vetted students',
        'Fast shortlisted candidates matching job specs',
        'Reduce campus recruitment cycle by 60%',
      ],
    },
  ];

  const handleCardClick = (role: 'student' | 'college' | 'employer', actionUrl: string) => {
    if (onSelectRole) {
      onSelectRole(role);
    } else {
      const element = document.querySelector(actionUrl);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={styles.cardsGrid}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.decorativeArt} />

          <div>
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>{card.tag}</span>
              <div className={styles.cardIconCircle}>{card.icon}</div>
            </div>

            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>

            <ul className={styles.featureList}>
              {card.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <span className={styles.checkIcon}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.cardFooter}>
            <Button
              variant="primary"
              size="md"
              fullWidth
              className={styles.cardAction}
              onClick={() => handleCardClick(card.role, card.actionUrl)}
            >
              {card.buttonText}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

