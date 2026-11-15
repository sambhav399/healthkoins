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

const HOME_FAQS = DataFAQ.data.flatMap((group) => group.data).slice(0, 5);

const FEATURES = [
  {
    icon: <CalendarDays className="feature-icon-symbol" aria-hidden={true} />,
    title: '6-Month Seasons & Vouchers',
    description:
      'Build toward a clear 30,000-coin milestone over a 180-day season and redeem a ₹1,000 / $12 USD Amazon Gift Voucher.'
  },
  {
    icon: <Trophy className="feature-icon-symbol" aria-hidden={true} />,
    title: '1v1 Battle Arena',
    description:
      'Challenge other walkers in step duels, follow your progress, and compete for a place on the global leaderboard.'
  },
  {
    icon: <Watch className="feature-icon-symbol" aria-hidden={true} />,
    title: 'Universal Smartwatch Sync',
    description:
      'Connect Apple Health or Google Health Connect to bring activity from your compatible watch and fitness apps together.'
  },
  {
    icon: <Activity className="feature-icon-symbol" aria-hidden={true} />,
    title: 'Avatar Progression',
    description:
      'Turn consistent movement into visible progress as your activity earns coins and advances your avatar.'
  },
  {
    icon: <Bot className="feature-icon-symbol" aria-hidden={true} />,
    title: 'AI Health Insights',
    description:
      'Explore personalized activity insights and calorie summaries based on your synced steps and activity.'
  },
  {
    icon: <Flame className="feature-icon-symbol" aria-hidden={true} />,
    title: 'Quests & Streaks',
    description:
      'Stay motivated with daily quests, streak milestones, and rewards that make healthy routines more engaging.'
  }
];

const STEPS = [
  {
    icon: <Watch className="step-icon-symbol" aria-hidden={true} />,
    title: 'Sync Your Wearable',
    description:
      'Connect Google Health Connect on Android or Apple Health on iOS to bring your activity into HealthKoins.'
  },
  {
    icon: <Activity className="step-icon-symbol" aria-hidden={true} />,
    title: 'Walk, Duel & Quest',
    description:
      'Earn coins from verified activity, complete daily quests, and challenge other members in step duels.'
  },
  {
    icon: <Gift className="step-icon-symbol" aria-hidden={true} />,
    title: 'Redeem Your Rewards',
    description:
      'Work toward the seasonal coin target and redeem eligible rewards as you build healthy habits.'
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
            <h2 className="section-title">Built for Lasting Healthy Habits</h2>
            <p className="section-description">
              Make everyday movement more engaging with tools to track, compete,
              and celebrate your progress.
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
              <span className="section-eyebrow">Community rankings</span>
              <h2 className="rankings-title">
                Find Your Place in the Global Arena
              </h2>
              <p className="rankings-description">
                See how your progress compares with walkers around the world.
                Keep moving, climb the rankings, and celebrate every milestone.
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
            <h2 className="section-title">From First Step to Reward</h2>
            <p className="section-description">
              Three simple steps to turn your daily activity into progress.
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
              <span className="section-eyebrow">Science &amp; analysis</span>
              <h2 className="section-title">Knowledge Hub</h2>
              <p className="section-description">
                Explore evidence-based insights on movement, habit building, and
                fitness technology.
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
            <span className="section-eyebrow">Help center</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
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
            <h2 className="cta-title">Make Your Steps Count</h2>
            <p className="cta-description">
              Join HealthKoins to build healthier routines, compete with
              walkers, and earn rewards for staying active.
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
