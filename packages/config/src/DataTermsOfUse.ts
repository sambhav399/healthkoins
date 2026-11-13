export type Type_TermsList = {
  title?: string;
  type: 'ordered' | 'unordered';
  data: string[];
};

export type Type_TermsSection = {
  title: string;
  data: (string | Type_TermsList)[];
};

export type Type_DataTermsOfUse = {
  lastUpdated: string;
  data: Type_TermsSection[];
};

export const DataTermsOfUse: Type_DataTermsOfUse = {
  lastUpdated: 'May 2, 2026',
  data: [
    {
      title: 'Acceptance of Terms',
      data: [
        'By downloading, installing, or using the HealthKoins mobile application or website (collectively, the "Service"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the Service. These Terms constitute a legally binding agreement between you and HealthKoins ("we", "us", or "our").',

        'We reserve the right to update these Terms at any time. Continued use of the Service after changes are posted constitutes your acceptance of the revised Terms.'
      ]
    },
    {
      title: 'Eligibility',
      data: [
        'You must be at least 13 years of age to use the Service. If you are under 18 years of age, you may only use the Service with the consent of a parent or legal guardian. To participate in cash prize programmes or receive monetary rewards (including Amazon vouchers), you must be at least 18 years of age and a resident of India.',

        'By using the Service, you represent and warrant that you meet all eligibility requirements.'
      ]
    },
    {
      title: 'Account Registration',
      data: [
        'You must create an account to use the Service. You agree to provide accurate, current, and complete information during registration and to keep your account information up to date. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.',

        'We reserve the right to suspend or terminate your account if any information provided is found to be inaccurate, misleading, or incomplete.'
      ]
    },
    {
      title: 'Health Data',
      data: [
        'The Service integrates with Google Health Connect (Android) and Apple Health (iOS) to access your physical activity data, including step counts and active calories burned. By granting this permission, you authorise HealthKoins to read and process this data solely for the purpose of calculating and awarding in-app rewards.',

        'Your health data is never sold to third parties or used for advertising. Individual activity samples may be retained temporarily for fraud detection and platform integrity purposes. For full details, please refer to our Privacy Policy.',

        'You may revoke health data permissions at any time through your device settings. Revoking permissions will prevent future coin awards but will not delete your existing account or coin balance.'
      ]
    },
    {
      title: 'Reward Programme',
      data: [
        'HealthKoins are digital tokens earned through verified physical activity. They have no guaranteed cash value except within the specific reward programmes offered within the Service at any given time.',

        {
          title: 'The following conditions apply to HealthKoins and rewards:',
          type: 'unordered',
          data: [
            'HealthKoins are non-transferable and cannot be exchanged for cash directly.',

            'Monthly community challenge prizes (Amazon vouchers) are awarded to eligible top-ranked participants at the end of each calendar month.',

            'Prize eligibility requires a minimum number of active days as stated in the challenge rules, a valid UPI ID, and account verification.',

            'Prizes are currently available only to users in India. Geographic restrictions may apply.',

            'We reserve the right to modify, suspend, or discontinue the reward programme at any time with reasonable notice.',

            'Coin balances do not expire but may be forfeited upon account termination for cause.'
          ]
        },

        'Attempting to manipulate step counts through mechanical means, GPS spoofing, data injection, or any other fraudulent method is a material violation of these Terms and will result in immediate account termination and forfeiture of all accumulated coins and rewards.'
      ]
    },
    {
      title: 'User Conduct',
      data: [
        {
          title: 'You agree not to:',
          type: 'unordered',
          data: [
            'Use the Service for any unlawful purpose or in violation of any applicable laws or regulations.',

            'Impersonate any person or entity or misrepresent your affiliation with any person or entity.',

            'Abuse, harass, threaten, or intimidate other users through social features.',

            'Attempt to gain unauthorized access to any part of the Service or its infrastructure.',

            'Use automated bots, scripts, or other tools to interact with the Service.',

            'Reverse engineer, decompile, or disassemble any part of the Service.',

            'Post content that is defamatory, obscene, or infringes on the rights of others.',

            'Abuse the referral programme or create multiple accounts to artificially accumulate rewards.'
          ]
        }
      ]
    },
    {
      title: 'Intellectual Property',
      data: [
        'All content on the Service, including but not limited to text, graphics, logos, icons, images, audio clips, and software, is the property of HealthKoins and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written consent.',

        'By posting content (including achievement posts, comments, and profile information) on the Service, you grant HealthKoins a non-exclusive, royalty-free, worldwide licence to use, display, and distribute that content in connection with the Service.'
      ]
    },
    {
      title: 'Third-Party Services',
      data: [
        'The Service integrates with third-party services including Google Health Connect, Apple Health, Google Sign-In, and advertising networks (Google AdMob). Your use of these third-party services is governed by their respective terms of service and privacy policies. We are not responsible for the practices of third-party services.',

        'HealthKoins is an independent fitness platform and is not affiliated with, endorsed by, or sponsored by Apple Inc. or Google LLC.'
      ]
    },
    {
      title: 'Disclaimers',
      data: [
        'The Service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',

        'The health and fitness information provided through the Service and our blog is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before making changes to your diet or exercise routine.',

        'We do not warrant that the Service will be uninterrupted, secure, or error-free, or that defects will be corrected.'
      ]
    },
    {
      title: 'Limitation of Liability',
      data: [
        'To the fullest extent permitted by applicable law, HealthKoins shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of the Service.',

        'Our total liability to you for any claims arising out of or related to these Terms or the Service shall not exceed the amount you have paid to us (if any) in the twelve months preceding the claim.'
      ]
    },
    {
      title: 'Termination',
      data: [
        'We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, with or without notice, for conduct that we determine violates these Terms or is otherwise harmful to other users, us, or third parties.',

        'You may delete your account at any time by contacting us at {email}. Upon deletion, your health data and personal information will be removed in accordance with our Privacy Policy.'
      ]
    },
    {
      title: 'Governing Law & Dispute Resolution',
      data: [
        'These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India.',

        'For any concerns or disputes, we encourage you to first contact us at {email} so we can attempt to resolve the matter informally.'
      ]
    },
    {
      title: 'Contact Us',
      data: [
        'If you have any questions about these Terms of Use, please contact us at: {email}'
      ]
    }
  ]
};
