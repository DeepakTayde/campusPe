'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import styles from './AppDownload.module.css';

export default function AppDownload() {
  const [downloadModal, setDownloadModal] = useState<{ isOpen: boolean; platform: string }>({
    isOpen: false,
    platform: '',
  });
  const [linkSent, setLinkSent] = useState(false);

  const handleStoreClick = (platform: string) => {
    setDownloadModal({ isOpen: true, platform });
    setLinkSent(false);
  };

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    setLinkSent(true);
    setTimeout(() => {
      setDownloadModal({ isOpen: false, platform: '' });
      setLinkSent(false);
    }, 2000);
  };

  return (
    <section id="download" className={styles.sectionWrapper}>
      <div className={styles.glowBackground} />
      <Container>
        <div className={styles.twoColumnLayout}>
          {/* Left Column: Download Info & Store Badges */}
          <div className={styles.leftCol}>
            <h2 className={styles.headline}>Download App Now</h2>

            <p className={styles.description}>
              Get the full CampusPē experience right in your pocket. Search opportunities, receive instant interview alerts, track applications in real time, and chat directly with recruiters wherever you are.
            </p>

            <ul className={styles.advantagesList}>
              <li className={styles.advantageItem}>
                <span className={styles.checkDot}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Instant push alerts for interview rounds and offer rollouts</span>
              </li>
              <li className={styles.advantageItem}>
                <span className={styles.checkDot}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>1-Tap apply to campus drives with auto-synced ATS resume</span>
              </li>
              <li className={styles.advantageItem}>
                <span className={styles.checkDot}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Direct secure messaging with verified hiring managers</span>
              </li>
            </ul>

            {/* Official Store Badges */}
            <div className={styles.storeBadgesRow}>
              {/* Google Play Store Badge */}
              <button
                type="button"
                className={styles.storeBadge}
                onClick={() => handleStoreClick('Google Play')}
                aria-label="Get it on Google Play"
              >
                <svg className={styles.storeBadgeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.6 2.4C3.2 2.8 3 3.4 3 4.2V19.8C3 20.6 3.2 21.2 3.6 21.6L3.7 21.7L12.5 12.9V11.1L3.7 2.3L3.6 2.4Z" fill="#00D2FF" />
                  <path d="M15.4 15.8L12.5 12.9V11.1L15.4 8.2L15.5 8.3L18.9 10.2C19.9 10.8 19.9 11.7 18.9 12.3L15.5 14.2L15.4 15.8Z" fill="#FFD200" />
                  <path d="M12.5 12L3.6 21.7C4 22.1 4.7 22.2 5.5 21.7L15.4 16.1L12.5 12Z" fill="#FF3333" />
                  <path d="M12.5 12L15.4 7.9L5.5 2.3C4.7 1.8 4 1.9 3.6 2.3L12.5 12Z" fill="#00E676" />
                </svg>
                <div className={styles.storeBadgeText}>
                  <span className={styles.storeBadgeSmall}>GET IT ON</span>
                  <span className={styles.storeBadgeBig}>Google Play</span>
                </div>
              </button>

              {/* Apple App Store Badge */}
              <button
                type="button"
                className={styles.storeBadge}
                onClick={() => handleStoreClick('Apple App Store')}
                aria-label="Download on the App Store"
              >
                <svg className={styles.storeBadgeIcon} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.66-.99 1.72-.85 2.74 1 .08 2.03-.51 2.56-1.24z" />
                </svg>
                <div className={styles.storeBadgeText}>
                  <span className={styles.storeBadgeSmall}>Download on the</span>
                  <span className={styles.storeBadgeBig}>App Store</span>
                </div>
              </button>
            </div>

            {/* QR Code Scan Info */}
            <div className={styles.qrCodeContainer}>
              <div style={{ width: '36px', height: '36px', backgroundColor: '#0B1A30', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '1.25rem' }}>
                📱
              </div>
              <div className={styles.qrCodeText}>
                <strong>Scan or click badges</strong> to get instant mobile app installation link
              </div>
            </div>
          </div>

          {/* Right Column: Dual Overlapping Angled Phone Mockups */}
          <div className={styles.phonesContainer}>
            {/* Phone Under (Left Angled) */}
            <div className={styles.phoneUnder}>
              <div className={styles.mockupScreen}>
                <div className={styles.mockupNotch} />
                <div className={styles.mockupHeader}>
                  <span>CampusPē Opportunities</span>
                  <span>9:41</span>
                </div>
                <div className={styles.mockupCard}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#0B1A30' }}>
                    Software Engineer
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#64748B', marginTop: '2px' }}>
                    Razorpay • Bengaluru
                  </div>
                  <div style={{ marginTop: '8px', display: 'inline-block', backgroundColor: '#ECFDF5', color: '#047857', fontSize: '0.625rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px' }}>
                    96% Compatibility Match
                  </div>
                </div>
                <div className={styles.mockupCard}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#0B1A30' }}>
                    Product Designer
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#64748B', marginTop: '2px' }}>
                    Swiggy • Remote
                  </div>
                  <div style={{ marginTop: '8px', display: 'inline-block', backgroundColor: '#ECFDF5', color: '#047857', fontSize: '0.625rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px' }}>
                    93% Compatibility Match
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Over (Foreground Angled) */}
            <div className={styles.phoneOver}>
              <div className={styles.mockupScreen}>
                <div className={styles.mockupNotch} />
                <div className={styles.mockupHeader}>
                  <span>Live Application Alerts</span>
                  <span>⚡ 9:41</span>
                </div>
                <div style={{ padding: '14px 12px 6px' }}>
                  <div style={{ backgroundColor: '#087FF5', color: '#FFFFFF', padding: '14px', borderRadius: '14px', boxShadow: '0 8px 20px rgba(8, 127, 245, 0.3)' }}>
                    <div style={{ fontSize: '0.6875rem', opacity: 0.9 }}>Congratulations Aarav! 🎉</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 800, marginTop: '2px' }}>
                      Official Offer Received
                    </div>
                    <div style={{ fontSize: '0.75rem', marginTop: '6px', opacity: 0.95 }}>
                      CRED • ₹40,000 / month
                    </div>
                  </div>
                </div>

                <div className={styles.mockupCard}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#0B1A30' }}>Upcoming Interview</span>
                    <span style={{ fontSize: '0.625rem', color: '#087FF5', fontWeight: 700 }}>In 2 Hours</span>
                  </div>
                  <p style={{ fontSize: '0.6875rem', color: '#64748B', marginTop: '4px' }}>
                    Razorpay Technical Round with Principal Architect
                  </p>
                  <div style={{ marginTop: '8px', backgroundColor: '#EAF3FF', color: '#087FF5', padding: '6px', borderRadius: '6px', textAlign: 'center', fontSize: '0.6875rem', fontWeight: 700 }}>
                    Enter Interview Room
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* App Download Dialog */}
      <Modal
        isOpen={downloadModal.isOpen}
        onClose={() => setDownloadModal({ isOpen: false, platform: '' })}
        title={`Get CampusPē on ${downloadModal.platform}`}
      >
        {linkSent ? (
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
              Download Link Sent!
            </h3>
            <p style={{ color: 'var(--text-muted, #64748B)', fontSize: '0.9375rem' }}>
              Check your mobile device to install the official CampusPē application for {downloadModal.platform}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSendLink} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'var(--bg-soft, #F5F8FC)', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '4px' }}>📲</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-dark, #0B1A30)' }}>
                Official CampusPē App ({downloadModal.platform})
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted, #64748B)' }}>
                Free for Android & iOS devices
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                Enter your mobile number or email to receive the direct link:
              </label>
              <input
                type="text"
                required
                placeholder="+91 98765 43210 or you@domain.com"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light, #E2E8F0)',
                }}
              />
            </div>

            <Button type="submit" variant="primary" size="md" fullWidth style={{ marginTop: '8px' }}>
              Send Direct App Link
            </Button>
          </form>
        )}
      </Modal>
    </section>
  );
}

