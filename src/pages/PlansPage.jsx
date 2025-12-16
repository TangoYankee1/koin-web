import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Check, X, ArrowLeft } from 'lucide-react';
import { plansPageStyles, responsiveStyles } from './styles';

const PLANS = [
   {
     name: 'Koin Pilot Plan',
     subtitle: 'Free',
     price: 'Free',
     users: 'Up to 200 Students & 3 Faculty/Admin seats',
     courses: 'Up to 8-12 Course Hubs',
     features: [
       'Secure Resource Exchange',
       'Course Hub Creation',
       'Gamified "Points" System',
     ],
     limitations: [
       'No AI Tutor',
       'No Admin Analytics',
       'No LMS Integration',
     ],
     cta: 'Start Free',
     highlighted: false,
   },
   {
     name: 'The Synergy Plan',
     subtitle: 'For Growing Universities',
     price: 'Custom',
     priceDetail: 'Annual subscription based on student enrollment',
     users: 'Up to 10,000 Students & Unlimited Faculty/Admin seats',
     features: [
       'Everything in Pilot, plus:',
       'Admin Analytics Dashboard (The "Heat Map")',
       'Full LMS Integration (Canvas, Blackboard, etc.)',
       'Full Moderation Tools',
       'Dedicated Onboarding & Support',
     ],
     cta: 'Contact Sales',
     highlighted: true,
   },
   {
     name: 'The Nexus Plan',
     subtitle: 'Enterprise',
     price: 'Enterprise',
     priceDetail: 'Custom Enterprise Pricing',
     users: 'Unlimited',
     features: [
       'Everything in Synergy, plus:',
       'The "Safe AI" Tutor (The Killer Feature)',
       'Advanced AI Customization (Train on your private archives)',
       'Custom Data Reporting & API Access',
       'Dedicated Account Manager',
     ],
     cta: 'Contact Sales',
     highlighted: false,
   },
 ];

 export default function Plans() {
  return (
    <div style={plansPageStyles.container}>
      <header style={plansPageStyles.header}>
        <div style={plansPageStyles.headerContainer}>
          <div style={plansPageStyles.logoContainer}>
            <img src="/koin-logo.png" alt="Koin Logo" style={plansPageStyles.logoImage} />
            <h1 style={plansPageStyles.logoTitle}>Koin Plans</h1>
          </div>
          <Link to="/">
            <button style={plansPageStyles.backButton}>
              <ArrowLeft style={plansPageStyles.backButtonIcon} />
              Back
            </button>
          </Link>
        </div>
      </header>

      <main style={plansPageStyles.mainContent}>
        <div style={plansPageStyles.pageHeader}>
          <h2 style={{...plansPageStyles.pageTitle, ...responsiveStyles.pageTitle}}>Choose Your Plan</h2>
          <p style={plansPageStyles.pageSubtitle}>Select the perfect plan for your university's academic collaboration needs</p>
        </div>

        <div style={{...plansPageStyles.plansGrid, ...responsiveStyles.plansGrid}}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                ...plansPageStyles.planCard,
                ...(plan.highlighted ? plansPageStyles.highlightedPlanCard : {}),
              }}
            >
              {plan.highlighted && (
                <div style={plansPageStyles.mostPopularBadge}>
                  <span>Most Popular</span>
                </div>
              )}

              <div style={plansPageStyles.planCardContent}>
                <div style={plansPageStyles.planHeader}>
                  <h3 style={plansPageStyles.planName}>{plan.name}</h3>
                  <p style={plansPageStyles.planSubtitle}>{plan.subtitle}</p>
                </div>

                <div style={plansPageStyles.planPriceContainer}>
                  <div style={plansPageStyles.planPrice}>{plan.price}</div>
                  {plan.priceDetail && (
                    <p style={plansPageStyles.planPriceDetail}>{plan.priceDetail}</p>
                  )}
                </div>

                <div style={plansPageStyles.planFeaturesContainer}>
                  <p style={plansPageStyles.coreFeaturesTitle}>Core Features:</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} style={plansPageStyles.featureItem}>
                      <Check style={plansPageStyles.featureIcon} />
                      <p style={plansPageStyles.featureText}>{feature}</p>
                    </div>
                  ))}
                </div>

                {plan.limitations && (
                  <div style={plansPageStyles.limitationsContainer}>
                    <p style={plansPageStyles.coreFeaturesTitle}>Key Limitations:</p>
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} style={plansPageStyles.limitationItem}>
                        <X style={plansPageStyles.limitationIcon} />
                        <p style={plansPageStyles.limitationText}>{limitation}</p>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  style={{
                    ...plansPageStyles.ctaButton,
                    ...(plan.highlighted
                      ? plansPageStyles.highlightedCtaButton
                      : plansPageStyles.defaultCtaButton),
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={plansPageStyles.footerNote}>
          <p style={plansPageStyles.footerText}>
            Need help choosing? <a style={plansPageStyles.footerLink}>Contact our team</a>
          </p>
        </div>
      </main>
    </div>
  );
}