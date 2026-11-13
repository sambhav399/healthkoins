'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NextThemeToggle } from '@healthkoins/design';
import { Button } from '@healthkoins/design/components/button';
import { useIsMobile } from '@healthkoins/design/hooks/use-mobile';
import { cn } from '@healthkoins/design/lib/utils';
import ROUTES from '../constants/ROUTES';

const NAVIGATION = Object.freeze([
  ROUTES.RANKINGS,
  ROUTES.ABOUT,
  ROUTES.BLOG,
  ROUTES.FAQ,
  ROUTES.CONTACT
] as const);

export default function Header() {
  const pathName = usePathname();
  const isMobile = useIsMobile();

  const renderJSX_Navigation = (
    <nav className="navigation">
      <ul className="navigation-list">
        {NAVIGATION.map((route) => (
          <li className="navigation-list-item" key={route.href}>
            <Link
              href={route.href}
              className={cn(
                'navigation-link',
                pathName === route.href && 'active'
              )}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  const renderJSX_Actions = (
    <div className="actions">
      <NextThemeToggle />
      <Link href={ROUTES.SIGN_IN.href}>
        <Button variant="ghost" tabIndex={-1}>
          Sign In
        </Button>
      </Link>
      <Link href={ROUTES.SIGN_UP.href}>
        <Button tabIndex={-1}>Get Started</Button>
      </Link>
    </div>
  );

  return (
    <header id="header" className="header">
      <div className="container">
        <div className="header-data">
          <div className="branding">HealthKoins</div>
          {!isMobile && (
            <>
              {renderJSX_Navigation}
              {renderJSX_Actions}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
