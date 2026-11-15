'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from '@healthkoins/design/components/button';
import { useIsMobile } from '@healthkoins/design/hooks/use-mobile';
import { LogoImageHealthKoins } from '@healthkoins/design/images';
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
                buttonVariants({ variant: 'ghost' }),
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
      <Link
        href={ROUTES.SIGN_IN.href}
        className={buttonVariants({ variant: 'ghost' })}
      >
        Sign In
      </Link>
      <Link
        href={ROUTES.SIGN_UP.href}
        className={buttonVariants({ variant: 'default' })}
      >
        Get Started
      </Link>
    </div>
  );

  return (
    <header id="header" className="header">
      <div className="container">
        <div className="header-data">
          <div className="branding">
            <Image
              src={LogoImageHealthKoins}
              alt="HealthKoins"
              height={48}
              className="brand-icon"
            />
            <span className="brand-label">HealthKoins</span>
          </div>
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
