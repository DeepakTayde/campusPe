'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import styles from './SupportCTA.module.css';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

export default function SupportCTA() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: 'Hello! 👋 Welcome to CampusPē Support. Are you a student, college representative, or recruiter?',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitted(true);
    setTimeout(() => {
      setIsContactModalOpen(false);
      setIsContactSubmitted(false);
    }, 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    const newMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: userText,
    };

    setChatMessages((prev) => [...prev, newMsg]);
    setInputMessage('');

    // Automated bot reply
    setTimeout(() => {
      let botReply = "Thank you for reaching out! A dedicated CampusPē placement specialist has been notified and will assist you shortly.";
      const lower = userText.toLowerCase();
      if (lower.includes('student') || lower.includes('job') || lower.includes('resume')) {
        botReply = "For students: You can upload your resume in the uploader section above to get automatically matched with 100+ active campus jobs!";
      } else if (lower.includes('college') || lower.includes('placement')) {
        botReply = "For colleges: CampusPē helps your TPO cell coordinate drives with 130+ partner companies. Click 'Join Your College' above to register!";
      } else if (lower.includes('hire') || lower.includes('recruiter') || lower.includes('company')) {
        botReply = "For employers: You can post campus roles in under 2 minutes and receive a pre-screened shortlist with 95%+ fit!";
      }

      setChatMessages((prev) => [
        ...prev,
        {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: botReply,
        },
      ]);
    }, 800);
  };

  return (
    <section className={styles.sectionWrapper} aria-label="Support & Help">
      <Container>
        <div className={styles.supportCard}>
          <h2 className={styles.headline}>Still have questions?</h2>
          <p className={styles.subheadline}>
            Our support team is here to help you succeed. Get in touch anytime.
          </p>

          <div className={styles.actionsRow}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              }
            >
              Contact Support
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => setIsChatOpen(!isChatOpen)}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              }
            >
              Start a Live Chat
            </Button>
          </div>
        </div>
      </Container>

      {/* Contact Support Dialog */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Contact CampusPē Support"
      >
        {isContactSubmitted ? (
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
              Message Received!
            </h3>
            <p style={{ color: 'var(--text-muted, #64748B)', fontSize: '0.9375rem' }}>
              Thank you for contacting us. A member of our support team will respond to your email within 2-4 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Priyanshu Mehta"
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
                placeholder="you@domain.com"
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
                How can we help?
              </label>
              <textarea
                required
                rows={3}
                placeholder="Describe your query or requirement..."
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light, #E2E8F0)',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                }}
              />
            </div>

            <Button type="submit" variant="primary" size="md" fullWidth style={{ marginTop: '8px' }}>
              Send Support Request
            </Button>
          </form>
        )}
      </Modal>

      {/* Live Chat Floating Drawer */}
      {isChatOpen && (
        <div className={styles.chatDrawer} role="dialog" aria-label="CampusPē Live Chat">
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderTitle}>
              <span className={styles.onlineDot} />
              <span>CampusPē Live Support</span>
            </div>
            <button
              type="button"
              className={styles.chatCloseBtn}
              onClick={() => setIsChatOpen(false)}
              aria-label="Close Chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className={styles.chatMessages}>
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={msg.sender === 'bot' ? styles.chatBubbleBot : styles.chatBubbleUser}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form className={styles.chatInputForm} onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Ask a question..."
              className={styles.chatInput}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit" className={styles.chatSendBtn} aria-label="Send message">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

