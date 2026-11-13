export type TYPE_Route = Readonly<{
  href: string;
  title: string;
  description: string;
  label: string;
  badge?: string;
  pageTitle?: string;
  pageDescription?: string;
}>;

function defineRoutes<const T extends Record<string, TYPE_Route>>(
  routes: T
): Readonly<T> {
  for (const route of Object.values(routes)) {
    Object.freeze(route);
  }

  return Object.freeze(routes);
}

export default defineRoutes({
  HOME: {
    href: '/',
    title: 'HealthKoins | Earn Real Rewards for Walking & Fitness',
    description:
      'Track healthy habits, earn rewards, and build a more active lifestyle with HealthKoins.',
    label: 'Home'
  },

  ABOUT: {
    href: '/about',
    title: 'About',
    description:
      'Learn how HealthKoins helps people build healthier routines and turn everyday progress into meaningful rewards.',
    label: 'About'
  },

  BLOG: {
    href: '/blog',
    title: 'Blog',
    description:
      'Explore wellness insights, healthy living tips, product updates, and stories from the HealthKoins community.',
    label: 'Blog',
    badge: 'Knowledge & Science Hub',
    pageTitle: 'The Science of Human Movement',
    pageDescription:
      'Evidence-based research on habit psychology, smartwatch precision, and the behavioral economics of gamified fitness. Every claim peer-reviewed.'
  },

  CONTACT: {
    href: '/contact',
    title: 'Contact',
    description:
      'Reach out to the HealthKoins team for support, partnerships, and general questions.',
    label: 'Contact',
    badge: 'Get In Touch',
    pageTitle: 'Contact Us',
    pageDescription:
      'We value your feedback and are here to help. Whether you have a question about your account, want to report a bug, or have a partnership idea... we would love to hear from you.'
  },
  FAQ: {
    href: '/faq',
    title: 'FAQs',
    description:
      'Find answers to common questions about getting started, earning rewards, privacy, and using HealthKoins.',
    label: 'FAQs',
    badge: 'Help Center',
    pageTitle: 'Frequently Asked Questions',
    pageDescription:
      'Find answers to the most common questions about HealthKoins from getting started and earning coins to rewards, privacy, and technical support.'
  },

  PRIVACY_POLICY: {
    href: '/privacy-policy',
    title: 'Privacy Policy',
    description:
      'This Privacy Policy explains how HealthKoins ("we," "us," or "our") collects, uses, stores, and protects your personal information when you use our mobile application, website (healthkoins.com), and related services (collectively, the "Service"). By using the Service, you agree to the practices described in this policy.',
    label: 'Privacy Policy'
  },

  RANKINGS: {
    href: '/rankings',
    title: 'Rankings',
    description:
      'Discover top performers, track progress, and see how members are growing their healthy habits through HealthKoins.',
    label: 'Rankings'
  },

  SIGN_IN: {
    href: '/signin',
    title: 'Sign In',
    description:
      'Log in to your HealthKoins account to keep tracking your progress, rewards, and wellness goals.',
    label: 'Sign In'
  },

  SIGN_UP: {
    href: '/signup',
    title: 'Sign Up',
    description:
      'Join HealthKoins to build healthier habits, earn rewards, and connect with a supportive wellness community.',
    label: 'Sign Up'
  },

  TERMS_OF_USE: {
    href: '/terms-of-use',
    title: 'Terms of Use',
    description:
      'Review the rules and conditions for using the HealthKoins website and services.',
    label: 'Terms of Use'
  }
} satisfies Record<string, TYPE_Route>);
