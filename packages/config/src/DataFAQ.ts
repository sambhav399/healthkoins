export type Type_FAQ = {
  question: string;
  answer: string;
};

export type Type_DataFAQ = {
  lastUpdated: string;
  data: {
    title: string;
    data: Type_FAQ[];
  }[];
};

export const DataFAQ: Type_DataFAQ = {
  lastUpdated: 'May 2, 2026',
  data: [
    {
      title: 'Getting Started',
      data: [
        {
          question: 'What is HealthKoins?',
          answer:
            'HealthKoins is a free fitness gamification platform that rewards you with digital coins (HealthKoins) for your daily physical activity. Sync your steps and calories from Google Health Connect or Apple Health, earn coins, compete on a global leaderboard, and redeem real rewards like Amazon vouchers.'
        },
        {
          question: 'Is HealthKoins free to use?',
          answer:
            'Yes, HealthKoins is completely free. There are no subscription fees, premium tiers, or hidden costs. Every feature — including duels, group challenges, daily quests, AI health insights, and the leaderboard — is available to all users at no charge.'
        },
        {
          question: 'How do I create an account?',
          answer:
            'Download the HealthKoins app from the Google Play Store (Android) or sign up on our website at healthkoins.com/signup. You will need to provide a name, email address, and password. You can also sign in with Google for a faster setup.'
        },
        {
          question: 'Which devices and platforms are supported?',
          answer:
            'HealthKoins works on Android (via Google Health Connect) and iOS (via Apple Health). The web dashboard is accessible from any modern browser. We support wearables from Amazfit, Garmin, Samsung, Fitbit, Strava, Google Fit, Noise, and boAt — any device that syncs to Health Connect or Apple Health.'
        }
      ]
    },
    {
      title: 'Earning Coins',
      data: [
        {
          question: 'How do I earn HealthKoins?',
          answer:
            'You earn HealthKoins automatically by syncing your daily activity. Every 1,000 steps earns you coins, and every 100 active calories burned adds more. Additional earning opportunities include: daily streak bonuses (maintaining consecutive active days), completing 3 daily quests (sync, social interaction, and step goals), winning 1v1 step duels against other users, and participating in monthly community challenges.'
        },
        {
          question: 'How often should I sync my activity?',
          answer:
            'We recommend syncing at least once per day to ensure your steps and calories are counted. The app syncs your data from Health Connect or Apple Health — open the app, tap sync, and your daily activity is recorded. More frequent syncing ensures your leaderboard position stays current.'
        },
        {
          question: 'What are Daily Quests?',
          answer:
            'Daily Quests are 3 simple tasks refreshed every day: (1) Sync your activity, (2) Interact socially on the achievements feed (like or comment), and (3) Hit your daily step goal. Each completed quest earns 10 coins. Complete all three for the daily set.'
        },
        {
          question: 'What are 1v1 Duels?',
          answer:
            'Duels are 24-hour step challenges between two users. You choose an opponent, set a step target (1,000 to 100,000), and optionally wager coins. Both players have until midnight to reach the target. The first to hit the target — or the player with more steps at the end — wins. Winners earn the wagered coins from the opponent.'
        },
        {
          question: 'What are Community Challenges?',
          answer:
            'Monthly community challenges run for the entire calendar month. Categories include Step King (most steps), Calorie Crusher (most calories burned), and Streak Master (longest consecutive active days). You need at least 20 active days in the month to qualify for prizes. Top performers in each category can win cash rewards.'
        },
        {
          question: 'Do my streaks matter?',
          answer:
            'Yes! A streak is the number of consecutive days you sync at least some activity. Maintaining a streak earns bonus coins each day. You also earn a Streak Freeze token each month (up to 2 stored) that can protect your streak if you miss a day. Challenge streaks (completing consecutive personal challenges) unlock special badges at 3 and 5 challenge streaks.'
        }
      ]
    },
    {
      title: 'Rewards & Redemption',
      data: [
        {
          question: 'What rewards can I earn?',
          answer:
            'HealthKoins offers several reward types: (1) Amazon Gift Card vouchers worth ₹1,000 INR / $12 USD through the seasonal cashing-out system, (2) Amazon Gift Card vouchers through the Spin Wheel, (3) Cash prizes for top performers in monthly community challenges (deposited via UPI in India), and (4) Digital badges and avatar upgrades that showcase your achievements.'
        },
        {
          question: 'How does the 6-month seasonal window work?',
          answer:
            'Each season lasts exactly 6 months (180 days). You must reach the 30,000 coin target within this seasonal window to claim your Amazon Voucher. If the season ends before you hit 30,000 coins, your active coins reset to 0 to start a fresh season. However, your Lifetime Earned Coins are preserved so your all-time progression stats are kept.'
        },
        {
          question:
            'What is a Prestige Reset? Does it affect my Lifetime Coins?',
          answer:
            'When you reach 30,000 coins and cash out your voucher, your account undergoes a Prestige Reset. This sets your seasonal active coins to 0, resets your active level to 1, increases your Prestige level by +1 (giving you a permanent +5% step earning rate boost), and starts a new season. To keep rankings active and competitive, cashing out a voucher also deducts 30,000 coins from your Lifetime Coins, which will temporarily lower your position on the global all-time leaderboard.'
        },
        {
          question: 'How does the Spin Wheel work?',
          answer:
            'The Spin Wheel is a reward mechanism where eligible users can spin for a chance to win Amazon vouchers and other prizes. Eligibility is based on your coin balance and activity level. Each spin gives you a random prize from the available reward pool.'
        },
        {
          question: 'Are the rewards real? Can I actually get Amazon vouchers?',
          answer:
            'Yes, the rewards are real. Amazon voucher codes are delivered digitally and can be redeemed on Amazon India. Cash prizes from community challenges are transferred via UPI. All rewards are subject to our Terms of Use, including verification of genuine physical activity.'
        },
        {
          question: 'What is the avatar system?',
          answer:
            'As you earn coins, you progress through 10 avatar levels — from "The Wanderer" (Level 1) to "The Immortal" (Level 10). Each level unlocks a unique warrior avatar with special perks. Your avatar level is displayed on the leaderboard, in your achievements, and on your profile.'
        }
      ]
    },
    {
      title: 'Health Data & Privacy',
      data: [
        {
          question: 'What health data does HealthKoins collect?',
          answer:
            'HealthKoins reads only two types of data from your health platform: daily step count and active calories burned. We do not access heart rate, sleep data, blood pressure, GPS location, or any other health metrics. Data is synced solely for the purpose of calculating your coin rewards.'
        },
        {
          question: 'Is my health data sold to advertisers?',
          answer:
            'No. We never sell, share, or use your health data for advertising purposes. Your activity data is used exclusively to calculate HealthKoins rewards and for platform integrity (anti-cheat verification). Our full privacy practices are detailed in our Privacy Policy.'
        },
        {
          question: 'How does anti-cheat work?',
          answer:
            'To maintain fairness for all users, we collect granular activity samples (individual step records with timestamps) alongside daily totals. This allows us to detect and prevent artificially inflated step counts. Users found manipulating their data may have their accounts suspended or rewards revoked, as outlined in our Terms of Use.'
        },
        {
          question: 'Can I delete my data?',
          answer:
            'Yes. You can request deletion of your account and all associated data by emailing {email}. We will process your request within 30 days in accordance with applicable data protection regulations.'
        }
      ]
    },
    {
      title: 'Account & Technical',
      data: [
        {
          question: 'My steps are not syncing. What should I do?',
          answer:
            'First, ensure that Health Connect (Android) or Apple Health (iOS) is installed and has permission to share data with HealthKoins. On Android 14+, Health Connect is built into the system — go to Settings > Health Connect. On older Android versions, install the Health Connect app from the Play Store. Then open HealthKoins, go to Watch Sync, and tap "Connect." If issues persist, try revoking and re-granting permissions.'
        },
        {
          question: 'Which wearables work with HealthKoins?',
          answer:
            'Any wearable or fitness tracker that syncs data to Google Health Connect or Apple Health will work with HealthKoins. This includes Amazfit (via Zepp), Garmin Connect, Samsung Health, Fitbit, Google Fit, Noise Fit, boAt Wave, and Apple Watch. Simply ensure your wearable app is configured to write step and calorie data to Health Connect or Apple Health.'
        },
        {
          question: 'I forgot my password. How do I reset it?',
          answer:
            'On the login screen, tap "Forgot Password" and enter the email address associated with your account. You will receive a password reset link via email. If you signed up with Google, simply use the "Sign in with Google" option.'
        },
        {
          question: 'Can I use HealthKoins on both Android and iOS?',
          answer:
            'Yes, your HealthKoins account works across platforms. Sign in with the same credentials on any device. However, health data is platform-specific — an Android device syncs via Health Connect, and an iPhone syncs via Apple Health. You can only have one active health data connection at a time.'
        },
        {
          question: 'How do I join a group?',
          answer:
            'You can join a group by receiving an invite from an existing group member (delivered as a push notification with Accept/Decline buttons), or by using a group invite code. Any group member can invite others — it is not restricted to admins. Groups can set monthly step targets for collective progress tracking.'
        }
      ]
    },
    {
      title: 'Leaderboard & Competition',
      data: [
        {
          question: 'How does the global leaderboard work?',
          answer:
            'The leaderboard ranks all HealthKoins users by their total coins earned. You can filter rankings by time period (All Time, This Week, This Month) and by gender (All, Male, Female, Other). Rankings update in real-time as users sync their activity. The top 3 users are displayed on a podium, and all users can see their global rank.'
        },
        {
          question: 'Can I see the leaderboard without an account?',
          answer:
            'Yes! Our public rankings page at healthkoins.com/rankings shows the live global leaderboard without requiring an account. This includes the podium, search functionality, and Hall of Fame from past monthly challenges.'
        },
        {
          question: 'What is the Hall of Fame?',
          answer:
            'The Hall of Fame showcases winners from the last 3 months of community challenges. It displays top performers in each challenge category (Step King, Calorie Crusher, Streak Master) organized by gender brackets. The Hall of Fame is visible on the public rankings page.'
        }
      ]
    }
  ]
};
