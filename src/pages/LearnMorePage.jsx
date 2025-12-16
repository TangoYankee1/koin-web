import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, BarChart2, UploadCloud, Award, MessageSquare, Eye, FileText, Lock } from 'lucide-react';

const LearnMorePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logoContainer}>
            <img src="/koin-logo.png" alt="Koin Logo" style={styles.logoImage} />
            <div>
              <h1 style={styles.logoTitle}>Koin</h1>
              <p style={styles.logoSubtitle}>Academic Collaboration</p>
            </div>
          </div>
          <Link to="/">
            <button style={styles.backButton}>
              <ArrowLeft style={styles.backButtonIcon} />
              Back
            </button>
          </Link>
        </div>
      </header>

      <main style={styles.mainContent}>
        {/* What is Koin */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What is Koin?</h2>
          <p style={styles.sectionContent}>
            Koin is a secure, university-sanctioned platform designed to support student-to-student academic collaboration — without compromising academic integrity.
          </p>
        </section>

        {/* The Problem */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>The Problem Universities Face Today</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>Students rely on unsanctioned platforms for academic help</li>
            <li style={styles.listItem}>Faculty intellectual property is shared without oversight</li>
            <li style={styles.listItem}>Universities lack visibility into where students struggle</li>
          </ul>
          <p style={styles.sectionContent}>The result? Support becomes reactive instead of proactive.</p>
        </section>

        {/* How Koin Is Different */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Koin Is Different</h2>
          <div style={styles.cardGrid}>
            <div style={styles.card}>
              <Shield style={styles.cardIcon} />
              <h3 style={styles.cardTitle}>Official & Sanctioned</h3>
              <p style={styles.cardContent}>University-approved collaboration instead of shadow platforms.</p>
            </div>
            <div style={styles.card}>
              <Users style={styles.cardIcon} />
              <h3 style={styles.cardTitle}>Built for Collaboration</h3>
              <p style={styles.cardContent}>Structured course hubs, shared resources, and peer accountability.</p>
            </div>
            <div style={styles.card}>
              <BarChart2 style={styles.cardIcon} />
              <h3 style={styles.cardTitle}>Designed for Insight</h3>
              <p style={styles.cardContent}>Admins see trends and struggles early — before students fail.</p>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What You Can Do With Koin</h2>
          <div style={styles.featureGrid}>
            <div style={styles.featureColumn}>
              <h3 style={styles.featureTitle}>For Students</h3>
              <ul style={styles.featureList}>
                <li style={styles.featureListItem}><UploadCloud style={styles.featureIcon} /> Upload and access verified study resources</li>
                <li style={styles.featureListItem}><Award style={styles.featureIcon} /> Earn points by contributing high-quality materials</li>
                <li style={styles.featureListItem}><MessageSquare style={styles.featureIcon} /> Collaborate safely within course hubs</li>
              </ul>
            </div>
            <div style={styles.featureColumn}>
              <h3 style={styles.featureTitle}>For Universities</h3>
              <ul style={styles.featureList}>
                <li style={styles.featureListItem}><Eye style={styles.featureIcon} /> Monitor academic engagement trends</li>
                <li style={styles.featureListItem}><Lock style={styles.featureIcon} /> Moderate content and protect faculty IP</li>
                <li style={styles.featureListItem}><FileText style={styles.featureIcon} /> Reduce TA and faculty workload</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>How Koin Works</h2>
          <div style={styles.flowContainer}>
            <div style={styles.flowStep}>
              <div style={styles.flowIconContainer}><Users /></div>
              <p style={styles.flowText}>Universities create official course hubs</p>
            </div>
            <div style={styles.flowStep}>
              <div style={styles.flowIconContainer}><UploadCloud /></div>
              <p style={styles.flowText}>Students contribute and access study resources</p>
            </div>
            <div style={styles.flowStep}>
              <div style={styles.flowIconContainer}><BarChart2 /></div>
              <p style={styles.flowText}>Activity generates insights for proactive support</p>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Built for Academic Integrity</h2>
          <ul style={styles.trustList}>
            <li style={styles.trustListItem}>University-sanctioned environment</li>
            <li style={styles.trustListItem}>Privacy-first design</li>
            <li style={styles.trustListItem}>No public content scraping</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section style={styles.ctaSection}>
          <Link to="/login">
            <button style={styles.ctaButton}>Continue to Login</button>
          </Link>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: 'sans-serif',
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
  },
  headerContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoImage: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '0.75rem',
  },
  logoTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#002147',
  },
  logoSubtitle: {
    fontSize: '0.75rem',
    color: '#56C1E8',
    fontWeight: '500',
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    color: '#475569',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  backButtonIcon: {
    width: '1rem',
    height: '1rem',
    marginRight: '0.5rem',
  },
  mainContent: {
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '4rem 1.5rem',
  },
  section: {
    marginBottom: '4rem',
  },
  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#002147',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  sectionContent: {
    fontSize: '1.125rem',
    color: '#475569',
    maxWidth: '768px',
    margin: '0 auto',
    textAlign: 'center',
    lineHeight: '1.6',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    maxWidth: '768px',
    margin: '0 auto 1.5rem auto',
    textAlign: 'center',
  },
  listItem: {
    fontSize: '1.125rem',
    color: '#475569',
    marginBottom: '0.5rem',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e2e8f0',
  },
  cardIcon: {
    width: '2.5rem',
    height: '2.5rem',
    color: '#56C1E8',
    margin: '0 auto 1rem auto',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#002147',
    marginBottom: '0.5rem',
  },
  cardContent: {
    fontSize: '1rem',
    color: '#475569',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    marginTop: '3rem',
  },
  featureColumn: {},
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#002147',
    marginBottom: '1.5rem',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
  },
  featureListItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1rem',
    color: '#475569',
    marginBottom: '1rem',
  },
  featureIcon: {
    width: '1.25rem',
    height: '1.25rem',
    color: '#56C1E8',
  },
  flowContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: '3rem',
  },
  flowStep: {
    textAlign: 'center',
    maxWidth: '200px',
  },
  flowIconContainer: {
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    backgroundColor: '#e0f2fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem auto',
    color: '#0ea5e9',
  },
  flowText: {
    fontSize: '1rem',
    color: '#475569',
  },
  trustList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '2rem',
  },
  trustListItem: {
    fontSize: '1rem',
    color: '#475569',
    fontWeight: '500',
  },
  ctaSection: {
    textAlign: 'center',
    marginTop: '4rem',
  },
  ctaButton: {
    backgroundColor: '#002147',
    color: '#ffffff',
    padding: '1rem 2.5rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#003366',
    },
  },
};

export default LearnMorePage;