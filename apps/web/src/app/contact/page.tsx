import Link from 'next/link';
import { Config } from '@healthkoins/config';
import { buttonVariants } from '@healthkoins/design/components/button';
import { Check } from '@healthkoins/design/icons';
import DataLayout from '@/components/DataLayout';
import ROUTES from '@/constants/ROUTES';
import '@/styles/ContactPage.css';

const contactOptions = [
  {
    title: 'Email Us',
    description:
      'For general inquiries, account support, or feedback, send us an email. We typically respond within 24–48 hours.',
    href: `mailto:${Config.email}`,
    action: 'Send an Email'
  },
  {
    title: 'Report a Bug',
    description:
      'Found something that does not work right? Please email us with a description of the issue, your device model, and OS version. Screenshots help us fix things faster.',
    href: `mailto:${Config.email}?subject=Bug%20Report`,
    action: 'Submit Bug Report'
  },
  {
    title: 'Partnerships',
    description:
      'Interested in partnering with HealthKoins? We are open to collaborations with fitness brands, health organizations, corporate wellness programs, and content creators.',
    href: `mailto:${Config.email}?subject=Partnership%20Inquiry`,
    action: 'Discuss Partnership'
  },
  {
    title: 'Feature Requests',
    description:
      'Have an idea that would make HealthKoins better? We actively listen to our community and prioritize features based on user feedback.',
    href: `mailto:${Config.email}?subject=Feature%20Request`,
    action: 'Suggest a Feature'
  }
];

const expectations = [
  {
    title: 'Response Time',
    text: 'We aim to respond to all emails within 24–48 hours on business days.'
  },
  {
    title: 'Privacy',
    text: 'We will never ask for your password via email. All account-related requests are verified through our secure systems.'
  },
  {
    title: 'Language',
    text: 'Our support team communicates in English and Hindi.'
  }
];

export const metadata = {
  title: ROUTES.CONTACT.title,
  description: ROUTES.CONTACT.description
};

export default function Contact() {
  return (
    <DataLayout
      title={ROUTES.CONTACT.pageTitle}
      description={ROUTES.CONTACT.pageDescription}
      label={ROUTES.CONTACT.badge}
      lastUpdated="May 10, 2026"
    >
      <div id="page-contact" className="contact-page">
        <section className="contact-section">
          <div className="contact-grid">
            {contactOptions.map((item) => (
              <article key={item.title} className="contact-card">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <div className="card-action">
                  <Link
                    href={item.href}
                    className={buttonVariants({ variant: 'default' })}
                  >
                    {item.action}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section social-section">
          <div className="social-header">
            <h3 className="section-title">Follow us</h3>
            <p className="section-description">
              Stay updated with the latest features, challenges, and community
              highlights by following us on social media.
            </p>
          </div>

          <div className="social-links">
            {Config.socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="contact-section cta-section">
          <div className="cta-card">
            <div className="cta-copy">
              <p className="cta-label">Looking for a quick answer?</p>
              <h3 className="cta-title">Browse our help center</h3>
            </div>
            <div className="cta-body">
              <p className="cta-text">
                Many common questions are already answered in our comprehensive
                FAQ page, covering account setup, coin earning, rewards, health
                data privacy, and more.
              </p>
              <Link
                href={ROUTES.FAQ.href}
                className={buttonVariants({ variant: 'default' })}
              >
                Visit FAQs
              </Link>
            </div>
          </div>
        </section>

        <section className="contact-section expect-section">
          <h3 className="section-title">What to expect</h3>
          <ul className="expect-list">
            {expectations.map((item) => (
              <li key={item.title} className="expect-item">
                <span className="expect-badge">
                  <Check aria-hidden={true} />
                </span>
                <div>
                  <strong>{item.title}:</strong> {item.text}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </DataLayout>
  );
}
