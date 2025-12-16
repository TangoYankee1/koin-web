export const plansPageStyles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #F0F4F8, #FFFFFF, #E6F0FF)',
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E5E7EB',
  },
  headerContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logo: {
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: '#002147',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    width: '1.25rem',
    height: '1.25rem',
    color: '#56C1E8',
  },
  logoTextContainer: {},
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
    display: 'inline-flex',
    alignItems: 'center',
    color: '#4B5563',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  backButtonIcon: {
    width: '1rem',
    height: '1rem',
    marginRight: '0.5rem',
  },
  mainContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '4rem 1.5rem',
  },
  pageHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  pageTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#002147',
    marginBottom: '1rem',
  },
  pageSubtitle: {
    fontSize: '1.25rem',
    color: '#4B5563',
    maxWidth: '42rem',
    margin: '0 auto',
  },
  plansGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    maxWidth: '48rem',
    margin: '0 auto',
  },
  planCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '1rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    border: '2px solid #E5E7EB',
    transition: 'all 0.3s ease-in-out',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  highlightedPlanCard: {
    borderColor: '#FFC72C',
    transform: 'scale(1.05)',
  },
  mostPopularBadge: {
    position: 'absolute',
    top: '-1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#FFC72C',
    color: '#002147',
    padding: '0.25rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '600',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  planCardContent: {
    padding: '2rem',
  },
  planHeader: {
    marginBottom: '1.5rem',
  },
  planName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#002147',
    marginBottom: '0.25rem',
  },
  planSubtitle: {
    fontSize: '0.875rem',
    color: '#56C1E8',
    fontWeight: '500',
  },
  planPriceContainer: {
    marginBottom: '1.5rem',
  },
  planPrice: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#002147',
    marginBottom: '0.5rem',
  },
  planPriceDetail: {
    fontSize: '0.875rem',
    color: '#6B7280',
  },
  planFeaturesContainer: {
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
  },
  featureIcon: {
    width: '1.25rem',
    height: '1.25rem',
    color: '#56C1E8',
    flexShrink: 0,
    marginTop: '0.125rem',
  },
  featureText: {
    fontSize: '0.875rem',
    color: '#4B5563',
  },
  coreFeaturesTitle: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#002147',
    marginBottom: '0.75rem',
  },
  limitationsContainer: {
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  limitationItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
  },
  limitationIcon: {
    width: '1.25rem',
    height: '1.25rem',
    color: '#D1D5DB',
    flexShrink: 0,
    marginTop: '0.125rem',
  },
  limitationText: {
    fontSize: '0.875rem',
    color: '#9CA3AF',
  },
  ctaButton: {
    width: '100%',
    height: '3rem',
    fontWeight: '600',
    borderRadius: '0.5rem',
    transition: 'all 0.3s ease-in-out',
    border: 'none',
    cursor: 'pointer',
  },
  highlightedCtaButton: {
    backgroundColor: '#FFC72C',
    color: '#002147',
    boxShadow: '0 4px 14px 0 rgba(255, 199, 44, 0.39)',
  },
  defaultCtaButton: {
    backgroundColor: '#002147',
    color: '#FFFFFF',
  },
  footerNote: {
    textAlign: 'center',
    marginTop: '4rem',
  },
  footerText: {
    fontSize: '0.875rem',
    color: '#6B7280',
  },
  footerLink: {
    color: '#56C1E8',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};

export const responsiveStyles = {
  pageTitle: {
    '@media (min-width: 1024px)': {
      fontSize: '3.75rem',
    },
  },
  plansGrid: {
    '@media (min-width: 1024px)': {
      flexDirection: 'row',
      maxWidth: '1280px',
    },
  },
};