'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper} aria-label="CampusPē Footer">
      <div className={styles.footerGlow} />
      <Container>
        {/* Top Grid: Brand & 5 Link Groups */}
        <div className={styles.topGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <a href="#" className={styles.logo} aria-label="CampusPē Home">
              <span className={styles.logoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </span>
              <span>
                Campus<span className={styles.logoAccent}>Pē</span>
              </span>
            </a>

            <p className={styles.missionStatement}>
              From choosing a college to finding your next opportunity, a connected campus platform.
            </p>

            <p className={styles.brandDescription}>
              CampusPē bridges the gap between ambitious students, prestigious institutions, and forward-thinking recruiters across India.
            </p>
          </div>

          {/* 5 Link Groups */}
          <div className={styles.linksGrid}>
            {/* Group 1: For Students */}
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>For Students</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="#opportunities" className={styles.linkItem}>
                    Find Jobs
                  </a>
                </li>
                <li>
                  <a href="#colleges" className={styles.linkItem}>
                    Explore Colleges
                  </a>
                </li>
                <li>
                  <a href="#resume-upload" className={styles.linkItem}>
                    Resume Parser
                  </a>
                </li>
                <li>
                  <a href="#showcase" className={styles.linkItem}>
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="#hero" className={styles.linkItem}>
                    Career Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Group 2: For Employers */}
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>For Employers</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="#employers" className={styles.linkItem}>
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#opportunities" className={styles.linkItem}>
                    Find Talent
                  </a>
                </li>
                <li>
                  <a href="#employers" className={styles.linkItem}>
                    Campus Hiring
                  </a>
                </li>
                <li>
                  <a href="#employers" className={styles.linkItem}>
                    Virtual Drives
                  </a>
                </li>
                <li>
                  <a href="#employers" className={styles.linkItem}>
                    Enterprise Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Group 3: For Colleges */}
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>For Colleges</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="#colleges" className={styles.linkItem}>
                    College Profiles
                  </a>
                </li>
                <li>
                  <a href="#colleges" className={styles.linkItem}>
                    Placement Services
                  </a>
                </li>
                <li>
                  <a href="#colleges" className={styles.linkItem}>
                    Campus Recruitment
                  </a>
                </li>
                <li>
                  <a href="#colleges" className={styles.linkItem}>
                    Verified Badges
                  </a>
                </li>
                <li>
                  <a href="#colleges" className={styles.linkItem}>
                    Intake Analytics
                  </a>
                </li>
              </ul>
            </div>

            {/* Group 4: Company */}
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Company</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="#hero" className={styles.linkItem}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#opportunities" className={styles.linkItem}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#hero" className={styles.linkItem}>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#hero" className={styles.linkItem}>
                    Blog & News
                  </a>
                </li>
                <li>
                  <a href="#hero" className={styles.linkItem}>
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>

            {/* Group 5: Legal & Policies */}
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Legal & Policies</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="#hero" className={styles.linkItem}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#hero" className={styles.linkItem}>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#hero" className={styles.linkItem}>
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#hero" className={styles.linkItem}>
                    Grievance Officer
                  </a>
                </li>
                <li>
                  <a href="#hero" className={styles.linkItem}>
                    Security Standards
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Contact Strip */}
        <div className={styles.contactStrip}>
          <a href="mailto:contact@campuspe.com" className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
            <span>contact@campuspe.com</span>
          </a>

          <a href="tel:+919876543210" className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
            <span>+91 98765 43210</span>
          </a>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className={styles.bottomBar}>
          <div>
            © {currentYear} CampusPē Technologies Pvt. Ltd. All rights reserved.
          </div>

          <div className={styles.socialLinks} aria-label="Social Media Links">
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn} aria-label="CampusPē on LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn} aria-label="CampusPē on X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn} aria-label="CampusPē on Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn} aria-label="CampusPē on YouTube">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn} aria-label="CampusPē on Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

