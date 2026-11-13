export type Type_PrivacyPolicyList = {
  title?: string;
  type: 'ordered' | 'unordered';
  data: string[];
};

export type Type_PrivacyPolicySection = {
  title: string;
  data: (string | Type_PrivacyPolicyList | Type_PrivacyPolicySection)[];
};

export type Type_DataPrivacyPolicy = {
  lastUpdated: string;
  description: string;
  data: Type_PrivacyPolicySection[];
};

export const DataPrivacyPolicy: Type_DataPrivacyPolicy = {
  lastUpdated: 'May 10, 2026',
  description:
    'This Privacy Policy explains how HealthKoins ("we," "us," or "our") collects, uses, stores, and protects your personal information when you use our mobile application, website (healthkoins.com), and related services (collectively, the "Service"). By using the Service, you agree to the practices described in this policy.',
  data: [
    {
      title: 'Information We Collect',
      data: [
        {
          title: 'Account Information',
          data: [
            'When you create a HealthKoins account, we collect your name, email address, and password. If you sign in using Google, we receive your name, email, and profile picture from Google. You may optionally provide your date of birth and gender to enable age-based and gender-based leaderboard filtering.'
          ]
        },
        {
          title: 'Health & Fitness Data',
          data: [
            'HealthKoins reads the following data from Google Health Connect (Android) or Apple Health (iOS):',
            {
              type: 'unordered',
              data: [
                'Daily step count — the total number of steps recorded by your device or wearable each day',
                'Active calories burned — calories burned through physical activity (not basal metabolic rate)',
                'Granular activity samples — individual step records with timestamps, collected solely for anti-cheat verification and platform integrity'
              ]
            },
            'We do not collect heart rate, blood pressure, sleep data, GPS location, body measurements, medical records, or any health data beyond steps and active calories.'
          ]
        },
        {
          title: 'Device & Technical Information',
          data: [
            'We automatically collect device type, operating system version, app version, timezone, and push notification tokens (for delivering notifications). This information helps us provide technical support and ensure app compatibility.'
          ]
        },
        {
          title: 'Usage Data',
          data: [
            'We collect information about how you interact with the Service, including pages visited, features used, leaderboard interactions, challenge participation, and social actions (likes, comments, reactions on achievements). This helps us improve the user experience.'
          ]
        },
        {
          title: 'Payment Information',
          data: [
            'If you participate in community challenges with cash prizes, you may provide a UPI ID for prize disbursement. We do not collect credit card numbers, bank account details, or any payment information beyond UPI IDs. UPI IDs are stored securely and used only for reward transfers.'
          ]
        }
      ]
    },

    {
      title: 'How We Use Your Information',
      data: [
        'We use the collected information for the following purposes:',
        {
          type: 'unordered',
          data: [
            'Reward Calculation: Your step and calorie data is used to calculate daily HealthKoins earned',
            'Leaderboard Rankings: Coins and activity data determine your position on the global leaderboard',
            'Challenge Management: Track progress in personal challenges, community challenges, and 1v1 duels',
            'Anti-Cheat Verification: Granular activity samples are analyzed to detect and prevent fraudulent activity data',
            'Push Notifications: Deliver workout summaries, challenge updates, duel invites, rank changes, and promotional messages',
            'AI Health Insights: Provide personalized health and longevity insights based on your aggregated activity (no individual health records are sent to AI — only anonymized step/calorie buckets)',
            'Service Improvement: Analyze usage patterns to improve features, fix bugs, and enhance user experience'
          ]
        }
      ]
    },

    {
      title: 'Data Security & Storage',
      data: [
        'We prioritize on-device processing wherever possible. Health data aggregation occurs on your device before syncing daily totals to our servers. We use industry-standard security measures including:',
        {
          type: 'unordered',
          data: [
            'HTTPS/TLS encryption for all data in transit',
            'Encrypted database storage on Azure Cosmos DB infrastructure',
            'JWT-based authentication with secure token handling',
            'Password hashing using bcrypt (passwords are never stored in plain text)',
            'Rate limiting on API endpoints to prevent abuse'
          ]
        },
        'While we implement robust security measures, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data to the best of our ability.'
      ]
    },

    {
      title: 'Data Retention',
      data: [
        'We retain your data for as long as your account is active. Specifically:',
        {
          type: 'unordered',
          data: [
            'Account data: Retained until you request deletion',
            'Activity data (steps, calories): Retained for the lifetime of your account for leaderboard and reward history',
            'Anti-cheat samples: Retained for up to 90 days, then automatically purged',
            'Push notification tokens: Capped at 5 per user; stale tokens are cleaned up automatically',
            'AI insight cache: Anonymized insight cache entries expire after 24 hours'
          ]
        },
        'Upon account deletion, we remove all personal data within 30 days. Anonymized, aggregated statistics (such as total platform step counts) may be retained indefinitely.'
      ]
    },

    {
      title: 'Third-Party Sharing & Disclosure',
      data: [
        'We do not sell your personal data or health data to any third party. We do not use your health data for advertising targeting. We may share limited information with the following categories of third parties:',
        {
          type: 'unordered',
          data: [
            'Infrastructure providers: Azure (Microsoft) for database hosting, Vercel for web hosting — subject to their respective privacy policies and data processing agreements',
            'Push notification service: Expo (expo.dev) for delivering push notifications — receives only device tokens and notification content, not health data',
            'Analytics: Vercel Analytics for aggregated, anonymized web traffic analysis — no personally identifiable health data is shared',
            'AI services: Google Gemini API for health insights — receives only anonymized activity buckets (e.g., "5000-6000 steps"), never individual user data or identifiers',
            'Legal requirements: We may disclose information if required by law, court order, or governmental regulation'
          ]
        }
      ]
    },

    {
      title: 'Cookies, Advertising & Third-Party Scripts',
      data: [
        {
          title: 'Cookies',
          data: [
            'Our website uses cookies and similar technologies for:',
            {
              type: 'unordered',
              data: [
                'Essential cookies: Authentication tokens (JWT) stored in cookies to keep you logged in',
                'Analytics cookies: Vercel Analytics uses anonymized cookies to understand site traffic patterns',
                'Advertising cookies: Google AdSense may set cookies to serve relevant ads and measure ad performance (see section 6.2)'
              ]
            },
            'You can control cookie preferences through your browser settings. Disabling essential cookies will prevent you from logging in to the web dashboard.'
          ]
        },
        {
          title: 'Google AdSense',
          data: [
            "We use Google AdSense to display advertisements on our website. Google AdSense uses cookies and web beacons to serve ads based on your prior visits to our website and other sites on the internet. Google's use of advertising cookies enables it and its partners to serve ads based on your browsing history. You may opt out of personalized advertising by visiting Google Ads Settings (https://www.google.com/settings/ads). For more information, see Google's Privacy Policy (https://policies.google.com/privacy).",
            'Important: Ads are only displayed to visitors who are not logged in. Logged-in users never see advertisements. Your health data (steps, calories) is never shared with advertising networks or used for ad targeting.'
          ]
        },
        {
          title: 'Google Funding Choices',
          data: [
            'We participate in the Google Funding Choices program, which provides ad-blocking recovery messages to help support our free service. This may display a consent dialog to users with ad blockers enabled.'
          ]
        }
      ]
    },

    {
      title: 'Your Rights',
      data: [
        'Depending on your jurisdiction, you may have the following rights regarding your personal data:',
        {
          type: 'unordered',
          data: [
            'Right to Access: Request a copy of the personal data we hold about you',
            'Right to Rectification: Request correction of inaccurate personal data',
            'Right to Deletion: Request deletion of your account and associated data',
            'Right to Data Portability: Request your data in a machine-readable format',
            'Right to Object: Object to processing of your data for certain purposes',
            'Right to Withdraw Consent: Withdraw previously given consent at any time'
          ]
        },
        'To exercise any of these rights, please contact us at {email}. We will respond to your request within 30 days.'
      ]
    },

    {
      title: "Children's Privacy",
      data: [
        'HealthKoins is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. Users between 13 and 18 may use the Service with parental consent. If we learn that we have collected data from a child under 13, we will delete that information promptly. If you believe a child under 13 has provided us with personal data, please contact us at {email}.'
      ]
    },

    {
      title: 'International Data Transfers',
      data: [
        'HealthKoins is operated from India. Your data may be stored and processed on servers located in various regions through our infrastructure providers (Azure, Vercel). By using the Service, you consent to the transfer of your data to these locations. We ensure that all data transfers comply with applicable data protection regulations and that our infrastructure providers maintain adequate security standards.'
      ]
    },

    {
      title: 'Push Notifications',
      data: [
        'With your permission, we send push notifications for activity reminders, challenge updates, duel invites, rank changes, weekly summaries, and occasional promotional messages. You can control push notifications through:',
        {
          type: 'unordered',
          data: [
            'The in-app notification toggle in your Profile settings',
            "Your device's system notification settings"
          ]
        },
        'We enforce a daily push notification limit (maximum 10 per day) and a 12-hour cooldown period to prevent notification fatigue. Promotional notifications are limited to once per week.'
      ]
    },

    {
      title: 'Changes to This Privacy Policy',
      data: [
        'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will update the "Last updated" date at the bottom of this page and, where appropriate, notify you via push notification or email. We encourage you to review this page periodically for the latest information.'
      ]
    },

    {
      title: 'Contact Us',
      data: [
        'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
        {
          type: 'unordered',
          data: ['Email: {email}', 'Website: {contact}']
        }
      ]
    }
  ]
};
