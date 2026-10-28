import React from 'react';
import Navbar from '@/components/layout/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-dark)' }}>
          Connect <span style={{ color: 'var(--primary-blue)' }}>10X Faster.</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '12px' }}>
          One platform connecting students, colleges & employers — faster.
        </p>
      </main>
    </>
  );
}
