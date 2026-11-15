import { type Metadata } from 'next';
import Link from 'next/link';
import { Config } from '@healthkoins/config';
import { buttonVariants } from '@healthkoins/design/components/button';
import {
  Activity,
  Award,
  Brain,
  Gift,
  ShieldCheck,
  Smartphone,
  Trophy,
  Users
} from '@healthkoins/design/icons';
import DataLayout from '@/components/DataLayout';
import ROUTES from '@/constants/ROUTES';
import '@/styles/AboutPage.css';

const MISSION_PILLARS = [
  {
    title: 'Move More',
    description:
      'Incentivize daily physical activity through a coins-based reward system.',
    icon: Activity
  },
  {
    title: 'Connect People',
    description:
      'Build a community of health-conscious individuals who motivate each other.',
    icon: Users
  },
  {
    title: 'Real Rewards',
    description:
      'Turn fitness achievements into tangible value through vouchers and prizes.',
    icon: Gift
  }
] as const;

const PROCESS_STEPS = [
  {
    title: 'Connect Your Health Data',
    description:
      'Download the HealthKoins app and connect it to Google Health Connect (Android) or Apple Health (iOS). We read your daily steps, active calories, and workout data - nothing more. Your health data stays on your device and is never sold to advertisers.'
  },
  {
    title: 'Earn Coins Automatically',
    description:
      'Every 1,000 steps earns you HealthKoins. Every 100 active calories burned adds more to your balance. Maintain daily streaks for bonus multipliers. Complete daily quests, join 1v1 duels, and participate in monthly community challenges for even more coins.'
  },
  {
    title: 'Compete and Climb the Ranks',
    description:
      'Your coins determine your position on the global leaderboard. Rise through 10 avatar levels - from The Wanderer to The Immortal - each with unique perks. Challenge other users to step duels, form groups, and compete in monthly challenges with real cash prizes.'
  },
  {
    title: 'Redeem Real Rewards',
    description:
      'Redeem your earned coins for Amazon vouchers worth ₹1,000 / $12 USD by hitting 30,000 seasonal coins in our 6-month game cycle. You can also use your coins to spin the reward wheel for gift cards, or compete in community challenges for UPI cash prizes.'
  }
] as const;

const DIFFERENTIATORS = [
  {
    title: '100% Free',
    description:
      'No subscriptions, no premium tiers, no hidden fees. Every feature is available to every user from day one.',
    icon: Gift
  },
  {
    title: 'Privacy First',
    description:
      'We never sell your health data. Activity data is processed on-device where possible and synced only for reward calculation.',
    icon: ShieldCheck
  },
  {
    title: 'AI Health Insights',
    description:
      'Get personalized longevity insights powered by AI. Understand how your daily activity impacts your heart, brain, bones, and overall lifespan.',
    icon: Brain
  },
  {
    title: 'Social Competition',
    description:
      '1v1 step duels, group challenges, and a live global leaderboard create real motivation through friendly competition.',
    icon: Trophy
  },
  {
    title: 'Works With Your Device',
    description:
      'Compatible with Google Health Connect, Apple Health, and major fitness wearables including Amazfit, Garmin, Samsung, and Fitbit.',
    icon: Smartphone
  },
  {
    title: 'Real Rewards',
    description:
      'Unlike other fitness apps, HealthKoins offers actual rewards - Amazon vouchers, cash prizes, and exclusive digital badges.',
    icon: Award
  }
] as const;

const VALUES = [
  {
    title: 'Transparency',
    description:
      'We are open about how we collect, use, and protect your data. Our coin economy is transparent - you can see exactly how many coins each activity earns and how rewards are distributed.'
  },
  {
    title: 'Accessibility',
    description:
      'Fitness should not be a luxury. HealthKoins works without expensive gym memberships or equipment. All you need is a smartphone and the willingness to move.'
  },
  {
    title: 'Community',
    description:
      'We believe motivation is social. Our groups, challenges, achievements feed, and leaderboard features are designed to connect you with like-minded people who share your commitment to health.'
  },
  {
    title: 'Scientific Foundation',
    description:
      'Our AI health insights are grounded in published research on longevity, exercise physiology, and preventive medicine. Our blog features 26+ evidence-based articles with cited sources and DOIs.'
  }
] as const;

const PLATFORM_STATS = [
  { value: '10', label: 'Avatar Levels' },
  { value: '26+', label: 'Research Articles' },
  { value: '3', label: 'Daily Quests' },
  { value: '8+', label: 'Wearable Apps Supported' }
] as const;

export const metadata: Metadata = {
  title: ROUTES.ABOUT.title,
  description: ROUTES.ABOUT.description
};

export default function About() {
  return (
    <DataLayout
      title={ROUTES.ABOUT.pageTitle}
      description={ROUTES.ABOUT.pageDescription}
      label={ROUTES.ABOUT.badge}
      lastUpdated="May 10, 2026"
    >
      <div id="page-about" className="about-page">
        <section
          className="about-section story-section"
          aria-labelledby="about-story-title"
        >
          <h2 id="about-story-title" className="section-title">
            Our Story
          </h2>
          <div className="story-copy">
            <p>
              HealthKoins was born from a simple observation: millions of people
              struggle to stay motivated with their fitness goals. Traditional
              fitness apps track your workouts, but they do not give you a
              tangible reason to keep going. We set out to change that.
            </p>
            <p>
              Founded in 2024 in India, HealthKoins started as a small project
              to gamify daily walking. The idea was straightforward: what if
              every 1,000 steps you walked earned you digital coins that could
              be redeemed for real rewards? What if you could compete with
              friends, join community challenges, and watch your progress on a
              live global leaderboard?
            </p>
            <p>
              Today, HealthKoins has grown into a comprehensive fitness economy
              used by thousands of active users across India and beyond. Our
              platform integrates with Google Health Connect on Android and
              Apple Health on iOS, ensuring your activity data is tracked
              accurately and securely.
            </p>
          </div>
        </section>

        <section
          className="about-section mission-section"
          aria-labelledby="about-mission-title"
        >
          <h2 id="about-mission-title" className="section-title">
            Our Mission
          </h2>
          <p className="mission-intro">
            To democratize health motivation by creating a reward-based fitness
            ecosystem that is free, accessible, and genuinely fun. We aim to
            make physical activity a daily habit for millions of people by
            providing meaningful incentives and a supportive community.
          </p>
          <ul className="mission-grid">
            {MISSION_PILLARS.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <li className="mission-item" key={pillar.title}>
                  <Icon className="mission-icon" aria-hidden={true} />
                  <h3 className="mission-title">{pillar.title}</h3>
                  <p className="mission-description">{pillar.description}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          className="about-section steps-section"
          aria-labelledby="about-steps-title"
        >
          <h2 id="about-steps-title" className="section-title">
            How HealthKoins Works
          </h2>
          <ol className="steps-list">
            {PROCESS_STEPS.map((step) => (
              <li className="step-item" key={step.title}>
                <div className="step-copy">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="about-section features-section"
          aria-labelledby="about-features-title"
        >
          <h2 id="about-features-title" className="section-title">
            What Makes HealthKoins Different
          </h2>
          <ul className="features-grid">
            {DIFFERENTIATORS.map((feature) => {
              const Icon = feature.icon;

              return (
                <li className="feature-item" key={feature.title}>
                  <Icon className="feature-icon" aria-hidden={true} />
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          className="about-section values-section"
          aria-labelledby="about-values-title"
        >
          <h2 id="about-values-title" className="section-title">
            Our Values
          </h2>
          <ul className="values-grid">
            {VALUES.map((value) => (
              <li className="value-item" key={value.title}>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="about-section stats-section"
          aria-labelledby="about-stats-title"
        >
          <h2 id="about-stats-title" className="section-title">
            HealthKoins by the Numbers
          </h2>
          <ul className="stats-grid">
            {PLATFORM_STATS.map((stat) => (
              <li className="stat-item" key={stat.label}>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-cta" aria-labelledby="about-cta-title">
          <div className="cta-copy">
            <h2 id="about-cta-title" className="cta-title">
              Get in Touch
            </h2>
            <p className="cta-description">
              Have questions, feedback, or partnership ideas? We would love to
              hear from you or email us at{' '}
              <Link href={`mailto:${Config.email}`} className="link">
                {Config.email}
              </Link>
            </p>
          </div>
          <div className="cta-actions">
            <Link
              href={ROUTES.CONTACT.href}
              className={buttonVariants({ variant: 'default' })}
            >
              Contact Us
            </Link>
            <Link
              href={ROUTES.FAQ.href}
              className={buttonVariants({ variant: 'outline' })}
            >
              Read FAQs
            </Link>
          </div>
        </section>
      </div>
    </DataLayout>
  );
}
