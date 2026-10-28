'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'signin' | 'signup' }>({
    isOpen: false,
    mode: 'signin',
  });
  const [selectedRole, setSelectedRole] = useState<'student' | 'college' | 'employer'>('student');
  const [authFormSubmitted, setAuthFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAuth = (mode: 'signin' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
    setIsMobileMenuOpen(false);
    setAuthFormSubmitted(false);
  };

  const closeAuth = () => {
    setAuthModal({ isOpen: false, mode: 'signin' });
    setAuthFormSubmitted(false);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthFormSubmitted(true);
    setTimeout(() => {
      closeAuth();
    }, 1800);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`.trim()}>
        <div className={styles.navContainer}>
          {/* Brand Logo */}
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

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className={styles.navLinks}>
              <li>
                <a href="#colleges" className={styles.navLink}>
                  Colleges
                </a>
              </li>
              <li>
                <a href="#employers" className={styles.navLink}>
                  Employers
                </a>
              </li>
              <li>
                <a href="#opportunities" className={styles.navLink}>
                  Jobs
                </a>
              </li>
              <li>
                <a href="#showcase" className={styles.navLink}>
                  App Tour
                </a>
              </li>
              <li>
                <a href="#download" className={styles.navLink}>
                  Download
                </a>
              </li>
            </ul>
          </nav>

          {/* Desktop Auth CTAs */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.signInBtn}
              onClick={() => openAuth('signin')}
            >
              Sign In
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => openAuth('signup')}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileNavLinks}>
              <li>
                <a
                  href="#colleges"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Colleges
                </a>
              </li>
              <li>
                <a
                  href="#employers"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Employers
                </a>
              </li>
              <li>
                <a
                  href="#opportunities"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  App Tour
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download
                </a>
              </li>
            </ul>

            <div className={styles.mobileActions}>
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => openAuth('signin')}
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => openAuth('signup')}
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Accessible Auth Dialog */}
      <Modal
        isOpen={authModal.isOpen}
        onClose={closeAuth}
        title={authModal.mode === 'signin' ? 'Sign in to CampusPē' : 'Create your CampusPē account'}
      >
        {authFormSubmitted ? (
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
              {authModal.mode === 'signin' ? 'Welcome Back!' : 'Account Created!'}
            </h3>
            <p style={{ color: 'var(--text-muted, #64748B)', fontSize: '0.9375rem' }}>
              Redirecting you to your personalized {selectedRole} dashboard...
            </p>
          </div>
        ) : (
          <form className={styles.authForm} onSubmit={handleAuthSubmit}>
            <div className={styles.roleTabs}>
              <button
                type="button"
                className={`${styles.roleTab} ${selectedRole === 'student' ? styles.roleTabActive : ''}`}
                onClick={() => setSelectedRole('student')}
              >
                Student
              </button>
              <button
                type="button"
                className={`${styles.roleTab} ${selectedRole === 'college' ? styles.roleTabActive : ''}`}
                onClick={() => setSelectedRole('college')}
              >
                College
              </button>
              <button
                type="button"
                className={`${styles.roleTab} ${selectedRole === 'employer' ? styles.roleTabActive : ''}`}
                onClick={() => setSelectedRole('employer')}
              >
                Employer
              </button>
            </div>

            {authModal.mode === 'signup' && (
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="auth-name">
                  {selectedRole === 'college'
                    ? 'Institution Name'
                    : selectedRole === 'employer'
                    ? 'Company Name'
                    : 'Full Name'}
                </label>
                <input
                  id="auth-name"
                  type="text"
                  required
                  placeholder={
                    selectedRole === 'college'
                      ? 'e.g. RV College of Engineering'
                      : selectedRole === 'employer'
                      ? 'e.g. Acme Tech Solutions'
                      : 'e.g. Rahul Sharma'
                  }
                  className={styles.input}
                />
              </div>
            )}

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="auth-email">
                Work / Academic Email
              </label>
              <input
                id="auth-email"
                type="email"
                required
                placeholder="you@domain.com"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="auth-password">
                Password
              </label>
              <input
                id="auth-password"
                type="password"
                required
                placeholder="••••••••"
                className={styles.input}
              />
            </div>

            <Button type="submit" variant="primary" size="md" fullWidth style={{ marginTop: '8px' }}>
              {authModal.mode === 'signin'
                ? `Sign In as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`
                : `Join CampusPē as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`}
            </Button>

            <div className={styles.switchAuth}>
              {authModal.mode === 'signin' ? (
                <>
                  Don't have an account?
                  <button
                    type="button"
                    className={styles.switchAuthBtn}
                    onClick={() => openAuth('signup')}
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already registered?
                  <button
                    type="button"
                    className={styles.switchAuthBtn}
                    onClick={() => openAuth('signin')}
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </form>
        )}
      </Modal>
    </>
  );
}

