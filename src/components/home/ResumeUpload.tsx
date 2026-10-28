'use client';

import React, { useState, useRef } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import styles from './ResumeUpload.module.css';

export default function ResumeUpload() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'parsing' | 'success'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAndProcessFile = (file: File) => {
    setErrorMessage('');
    const validExtensions = ['.pdf', '.docx'];
    const hasValidExt = validExtensions.some((ext) => file.name.toLowerCase().endsWith(ext));

    if (!hasValidExt) {
      setErrorMessage('Please upload a valid PDF or DOCX file.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('File size exceeds the 10MB limit. Please upload a smaller file.');
      return;
    }

    setFileName(file.name);
    setFileSize((file.size / (1024 * 1024)).toFixed(2) + ' MB');
    setUploadState('uploading');
    setUploadProgress(15);

    // Simulated upload and parse sequence
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          setUploadState('parsing');
          setTimeout(() => {
            setUploadState('success');
          }, 1200);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadState('idle');
    setUploadProgress(0);
    setFileName('');
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="resume-upload" className={styles.sectionWrapper}>
      <Container>
        {/* Header */}
        <div className={styles.headerContent}>
          <div className={styles.sectionBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>Fast Track • Instant Match</span>
          </div>

          <h2 className={styles.headline}>
            Upload your resume.{' '}
            <span className={styles.headlineHighlight}>Find jobs that fit.</span>
          </h2>

          <p className={styles.subheadline}>
            Upload once. CampusPē extracts your skills, experience, and preferences — matching you with roles in seconds.
          </p>
        </div>

        {/* Upload Container */}
        <div className={styles.uploadContainer}>
          {/* Floating Badges */}
          <div className={styles.floatingBadgeTop}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>ATS-Friendly Parsing</span>
          </div>

          <div className={styles.floatingBadgeBottom}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>99% Match Precision</span>
          </div>

          {/* Upload Card */}
          <div
            className={`${styles.uploadCard} ${isDragOver ? styles.uploadCardDragOver : ''}`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            onClick={() => {
              if (uploadState === 'idle') {
                fileInputRef.current?.click();
              }
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className={styles.fileInput}
              onChange={handleFileChange}
            />

            {uploadState === 'idle' && (
              <>
                <div className={styles.uploadIconCircle}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>

                <h3 className={styles.uploadTitle}>Upload your resume</h3>
                <p className={styles.uploadSubtitle}>
                  Drag and drop your file here, or click to browse
                </p>

                <Button
                  variant="primary"
                  size="md"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                >
                  Upload Resume
                </Button>

                <div className={styles.uploadFormatInfo}>
                  <span className={styles.formatBadge}>PDF</span>
                  <span className={styles.formatBadge}>DOCX</span>
                  <span>up to 10MB</span>
                </div>
              </>
            )}

            {(uploadState === 'uploading' || uploadState === 'parsing') && (
              <div className={styles.processingBox}>
                <div className={styles.uploadIconCircle}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="2" x2="12" y2="6"></line>
                    <line x1="12" y1="18" x2="12" y2="22"></line>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                    <line x1="2" y1="12" x2="6" y2="12"></line>
                    <line x1="18" y1="12" x2="22" y2="12"></line>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                  </svg>
                </div>

                <h4 className={styles.parsingText}>
                  {uploadState === 'uploading'
                    ? `Uploading ${fileName} (${uploadProgress}%)...`
                    : 'Analyzing skills, education & experience...'}
                </h4>

                <div className={styles.progressBarContainer}>
                  <div
                    className={styles.progressBar}
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {uploadState === 'success' && (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                    Resume Parsed Successfully!
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {fileName} ({fileSize}) • ATS Compatibility: <strong>96/100</strong>
                  </p>
                </div>

                <div className={styles.extractedSkills}>
                  <span className={styles.skillPill}>React</span>
                  <span className={styles.skillPill}>TypeScript</span>
                  <span className={styles.skillPill}>Data Structures</span>
                  <span className={styles.skillPill}>SQL</span>
                  <span className={styles.skillPill}>Frontend Dev</span>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                  <Button
                    variant="primary"
                    size="md"
                    as="a"
                    href="#opportunities"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View 24+ Matched Jobs
                  </Button>
                  <button type="button" className={styles.resetBtn} onClick={handleReset}>
                    Upload Another File
                  </button>
                </div>
              </div>
            )}

            {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
          </div>
        </div>

        {/* 4 Supporting Benefit Cards */}
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h4 className={styles.benefitTitle}>Automated Parsing</h4>
            <p className={styles.benefitDesc}>
              Instant extraction of your skills, degrees, projects, and work history with high accuracy.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h4 className={styles.benefitTitle}>Profile Auto-Fill</h4>
            <p className={styles.benefitDesc}>
              Skip tedious manual profile creation. Your student dashboard is populated automatically.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h4 className={styles.benefitTitle}>Smart Role Match</h4>
            <p className={styles.benefitDesc}>
              Get tailored recommendations ranked by true compatibility, not simple keyword matching.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h4 className={styles.benefitTitle}>100% Data Secure</h4>
            <p className={styles.benefitDesc}>
              Your personal data is encrypted and only shared with recruiters upon your explicit approval.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

