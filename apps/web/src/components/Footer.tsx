'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@healthkoins/design/lib/utils';
import ROUTES from '../constants/ROUTES';

const NAVIGATION = Object.freeze([
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.RANKINGS,
  ROUTES.BLOG,
  ROUTES.FAQ,
  ROUTES.CONTACT,
  ROUTES.PRIVACY_POLICY,
  ROUTES.TERMS_OF_USE
] as const);

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-data">
          <div className="footer-info">
            HealthKoins is an independent fitness gamification platform. We are
            not affiliated with Apple Inc. or Google LLC. Rewards are subject to
            our terms of service and verification of physical activity.
          </div>
          <div className="footer-links">
            {NAVIGATION.map((route) => (
              <Link
                href={route.href}
                key={route.label}
                className={cn(
                  'footer-link',
                  pathName === route.href && 'active'
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; 2026 HealthKoins. All rights reserved.
      </p>
    </footer>
  );
}
