import Image from 'next/image';
import Link from 'next/link';
import { DataBlog } from '@healthkoins/config/DataBlog';
import { DataFAQ } from '@healthkoins/config/DataFAQ';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@healthkoins/design/components/accordion';
import { buttonVariants } from '@healthkoins/design/components/button';
import {
  Activity,
  ArrowRight,
  Bot,
  CalendarDays,
  Flame,
  Gift,
  ShieldCheck,
  Trophy,
  Watch
} from '@healthkoins/design/icons';
import { ImageAuth } from '@healthkoins/design/images';
import { cn } from '@healthkoins/design/lib/utils';
import { ActionAppDownload } from '@/components/ActionAppDownload';
import HomeEarningsCalculator from '@/components/HomeEarningsCalculator';
import ROUTES from '@/constants/ROUTES';
import { renderText } from '@/utils/renderText';
import '@/styles/HomePage.css';

export const metadata = {
  title: ROUTES.HOME.title,
  description: ROUTES.HOME.description
};

const ARTICLES = [...DataBlog.data]
  .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
  .slice(0, 3);

const HOME_FAQS = DataFAQ.data.flatMap((group) => group.data).slice(0, 4);

const FEATURES = [
  {
    icon: <CalendarDays className="feature-icon-symbol" aria-hidden={true} />,
    badge: '180-Day Cycle',
    title: '6-Month Seasons & Vouchers',
    description:
      'Hit 30,000 coins across your 180-day season to claim a ₹1,000 / $12 USD Amazon Gift Voucher. Seasonal resets keep leaderboards fresh and competitive.',
    pillars: 'Pillars: Goal Gradient • Real Rewards'
  },
  {
    icon: <Trophy className="feature-icon-symbol" aria-hidden={true} />,
    badge: 'PvP & AI Duels',
    title: '1v1 Battle Arena',
    description:
      'Challenge rivals or train against &ldquo;The Ranger&rdquo; AI bot. Our interactive tug-of-war step meter reflects every footstep in real-time.',
    pillars: 'Pillars: Social Facilitation • Real-time Sync'
  },
  {
    icon: <Watch className="feature-icon-symbol" aria-hidden={true} />,
    badge: 'Health Connect & HealthKit',
    title: 'Universal Smartwatch Sync',
    description:
      'Connect Apple Watch, Garmin, Zepp / Amazfit, Fitbit, Noise, and boAt via Google Health Connect and Apple HealthKit. Zero battery drain.',
    pillars: 'Pillars: Multi-Device • Deduplicated Steps'
  },
  {
    icon: <Activity className="feature-icon-symbol" aria-hidden={true} />,
    badge: 'Tiers of Glory',
    title: 'Avatar Evolution',
    description:
      'Turn consistent movement into visible progress as your activity earns coins and advances your avatar.',
    pillars: 'Pillars: RPG Identity • Prestige Resets'
  },
  {
    icon: <Bot className="feature-icon-symbol" aria-hidden={true} />,
    badge: 'AI Coaching',
    title: 'AI Health Insights',
    description:
      'Receive personalized activity insights, recovery scores, and metabolic breakdown calculated from your daily steps and active caloric expenditure.',
    pillars: 'Pillars: Evidence-Based • Calorie Burn Analytics'
  },
  {
    icon: <Flame className="feature-icon-symbol" aria-hidden={true} />,
    badge: 'Daily Quests & Spins',
    title: 'Streak Defense & Spin Wheel',
    description:
      'Protect your hard-earned streaks with streak freezes and 7-day comeback missions. Open mystery boxes and spin the prize wheel for coin multipliers.',
    pillars: 'Pillars: Loss Aversion • Variable Reinforcement'
  }
];

const STEPS = [
  {
    icon: <Watch className="step-icon-symbol" aria-hidden={true} />,
    title: 'Sync Your Wearable',
    description:
      'Connect Health Connect (Android) or Apple Health (iOS). Works effortlessly with smartwatches from Apple, Garmin, Zepp / Amazfit, Noise, and boAt.'
  },
  {
    icon: <Activity className="step-icon-symbol" aria-hidden={true} />,
    title: 'Walk, Duel & Quest',
    description:
      'Earn 10 coins per 1,000 steps and 1 coin per 10 active calories. Challenge rivals in 1v1 PvP battles and claim daily quest multipliers.'
  },
  {
    icon: <Gift className="step-icon-symbol" aria-hidden={true} />,
    title: 'Redeem Amazon Vouchers',
    description:
      'Accumulate 30,000 coins across your 6-month season to unlock ₹1,000 / $12 Amazon Gift Cards, or spin the prize wheel for instant gear perks.'
  }
];

export default function Home() {
  return (
    <div id="page-home" className="home-page">
      <section className="home-hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-copy">
              <div className="hero-release">
                <span className="release-indicator" />
                <span className="release-label">Seasonal rewards are live</span>
                <span className="release-divider" aria-hidden={true}>
                  ·
                </span>
                <span className="release-description">
                  Sync Android and Apple Health activity
                </span>
              </div>
              <h1 className="hero-title">
                Turn Every Step Into{' '}
                <span className="hero-title-highlight">
                  Real Digital Assets
                </span>
              </h1>
              <p className="hero-description">
                Make movement rewarding. Compete in 6-month seasons, challenge
                other walkers, sync your smartwatch, and work toward real
                rewards for your activity.
              </p>
              <div className="hero-actions">
                <Link
                  href={ROUTES.SIGN_UP.href}
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'hero-primary-action'
                  )}
                >
                  Start Earning Today
                  <ArrowRight aria-hidden={true} />
                </Link>
                <Link
                  href={ROUTES.RANKINGS.href}
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'hero-secondary-action'
                  )}
                >
                  <Trophy aria-hidden={true} />
                  Global Leaderboard
                </Link>
              </div>
              <div className="hero-downloads">
                <p className="downloads-label">Get started on mobile</p>
                <ActionAppDownload className="home-app-downloads" />
              </div>
            </div>

            <div className="hero-showcase">
              <div className="hero-image-wrap">
                <Image
                  src={ImageAuth}
                  alt="A HealthKoins avatar in a fitness arena"
                  fill={true}
                  priority={true}
                  className="hero-image"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="hero-image-overlay" />
                <span className="hero-image-badge">
                  <ShieldCheck className="hero-badge-icon" aria-hidden={true} />
                  Verified activity
                </span>
              </div>
              <div className="season-card">
                <div className="season-card-heading">
                  <div>
                    <p className="season-eyebrow">Your next milestone</p>
                    <h2 className="season-title">180-Day Season</h2>
                  </div>
                  <span className="season-reward">
                    <Gift className="season-reward-icon" aria-hidden={true} />
                    Amazon Voucher
                  </span>
                </div>
                <div className="season-card-metrics">
                  <div>
                    <span className="metric-value">30,000</span>
                    <span className="metric-label">Coins to target</span>
                  </div>
                  <div>
                    <span className="metric-value">₹1,000</span>
                    <span className="metric-label">Voucher value</span>
                  </div>
                  <div>
                    <span className="metric-value">100%</span>
                    <span className="metric-label">Free to join</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-calculator-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Interactive forecast</span>
            <h2 className="section-title">Estimate Your Seasonal Earnings</h2>
            <p className="section-description">
              Set your average daily steps to see an estimate of your coins and
              seasonal voucher progress.
            </p>
          </div>
          <HomeEarningsCalculator />
        </div>
      </section>

      <section className="home-features-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Engine features</span>
            <h2 className="section-title">Built for Serious Habit Formation</h2>
            <p className="section-description">
              Every screen, quest, and battle is scientifically engineered to
              eliminate workout procrastination.
            </p>
          </div>
          <ul className="feature-grid">
            {FEATURES.map((feature) => (
              <li className="feature-card" key={feature.title}>
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-rankings-section">
        <div className="container">
          <Link
            href={ROUTES.RANKINGS.href}
            className="rankings-card"
            aria-label="View the global HealthKoins rankings"
          >
            <div className="rankings-copy">
              <span className="section-eyebrow">Live Meta-Rankings</span>
              <h2 className="rankings-title">
                The Global <br /> Elite 100 Arena
              </h2>
              <p className="rankings-description">
                Compete against the most dedicated walkers worldwide. Verified
                steps sync every minute, updating dynamic podium positions and
                unlocking seasonal honors.
              </p>
              <span className="rankings-action">
                View Live Rankings
                <ArrowRight
                  className="rankings-action-icon"
                  aria-hidden={true}
                />
              </span>
            </div>
            <div className="rankings-highlight" aria-hidden={true}>
              <Trophy className="rankings-trophy-icon" />
              <span>Global</span>
              <span>Leaderboard</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="home-steps-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Getting started</span>
            <h2 className="section-title">From Wanderer to Legend</h2>
            <p className="section-description">
              Three seamless steps to convert your physical effort into
              verifiable digital assets.
            </p>
          </div>
          <ol className="steps-grid">
            {STEPS.map((step) => (
              <li className="step-card" key={step.title}>
                <span className="step-icon">{step.icon}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-knowledge-section">
        <div className="container">
          <div className="knowledge-heading">
            <div>
              <span className="section-eyebrow">{ROUTES.BLOG.badge}</span>
              <h2 className="section-title">{ROUTES.BLOG.pageTitle}</h2>
              <p className="section-description">
                Peer-reviewed evidence on exercise physiology, smartwatch
                precision, and habit psychology.
              </p>
            </div>
            <Link
              href={ROUTES.BLOG.href}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'knowledge-all-link'
              )}
            >
              Explore All Research
              <ArrowRight aria-hidden={true} />
            </Link>
          </div>
          <ul className="knowledge-grid">
            {ARTICLES.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`${ROUTES.BLOG.href}/${article.slug}`}
                  className="knowledge-card"
                >
                  <span className="knowledge-category">{article.category}</span>
                  <h3 className="knowledge-title">{article.title}</h3>
                  <p className="knowledge-description">{article.description}</p>
                  <span className="knowledge-meta">
                    {article.readTime} min read
                    <ArrowRight
                      className="knowledge-meta-icon"
                      aria-hidden={true}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-faq-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">{ROUTES.FAQ.badge}</span>
            <h2 className="section-title">{ROUTES.FAQ.pageTitle}</h2>
          </div>
          <Accordion multiple={true} className="home-faq-accordion">
            {HOME_FAQS.map((faq) => (
              <AccordionItem key={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{renderText(faq.answer)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Link href={ROUTES.FAQ.href} className="home-faq-link">
            See all frequently asked questions
            <ArrowRight className="faq-link-icon" aria-hidden={true} />
          </Link>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta">
            <span className="section-eyebrow">
              Your next season starts here
            </span>
            <h2 className="cta-title">
              Claim Your Spot in the
              <br />
              Walking Revolution
            </h2>
            <p className="cta-description">
              Join thousands of daily walkers leveling up their avatars, winning
              1v1 duels, and turning steps into Amazon Gift Cards for staying
              active.
            </p>
            <div className="cta-actions">
              <Link
                href={ROUTES.SIGN_UP.href}
                className={cn(
                  buttonVariants({ variant: 'default', size: 'lg' }),
                  'cta-primary-action'
                )}
              >
                Sign Up Free
                <ArrowRight aria-hidden={true} />
              </Link>
              <Link
                href={ROUTES.RANKINGS.href}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'cta-secondary-action'
                )}
              >
                Live Leaderboard
              </Link>
            </div>
            <ActionAppDownload className="home-cta-downloads" size={40} />
          </div>
        </div>
      </section>
    </div>
  );
}
