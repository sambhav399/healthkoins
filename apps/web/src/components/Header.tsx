'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Branding } from '@healthkoins/design/components/branding';
import { Button, buttonVariants } from '@healthkoins/design/components/button';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger
} from '@healthkoins/design/components/drawer';
import { Separator } from '@healthkoins/design/components/separator';
import { Menu, X } from '@healthkoins/design/icons';
import { cn } from '@healthkoins/design/lib/utils';
import ROUTES from '../constants/ROUTES';

const DataNavigation = Object.freeze([
  ROUTES.RANKINGS,
  ROUTES.ABOUT,
  ROUTES.BLOG,
  ROUTES.FAQ,
  ROUTES.CONTACT
] as const);

const Navigation = ({
  pathName,
  isDrawer,
  onNavigate
}: {
  pathName: string;
  isDrawer: boolean;
  onNavigate?: () => void;
}) => {
  const links = DataNavigation.map((route) => {
    const isActive = pathName === route.href;
    return (
      <li className="navigation-list-item" key={route.href}>
        <Link
          href={route.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'navigation-link',
            isActive && 'active'
          )}
          aria-current={isActive ? 'page' : undefined}
          {...(isDrawer && onNavigate ? { onClick: onNavigate } : {})}
        >
          {route.label}
        </Link>
      </li>
    );
  });

  return (
    <nav className="navigation" aria-label="Main navigation">
      <ul className="navigation-list">{links}</ul>
    </nav>
  );
};

export default function Header() {
  const pathName = usePathname();
  const [isDrawer, setDrawer] = useState<boolean>(false);

  const renderJSX_Actions = (
    className = 'actions',
    signInVariant: 'ghost' | 'secondary' = 'ghost'
  ) => (
    <div className={className}>
      <Link
        href={ROUTES.SIGN_IN.href}
        className={buttonVariants({ variant: signInVariant })}
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

  const renderJSX_DesktopNavigation = (
    <Navigation pathName={pathName} isDrawer={false} />
  );

  const renderJSX_DrawerNavigation = (
    <Navigation
      pathName={pathName}
      isDrawer={true}
      onNavigate={() => setDrawer(false)}
    />
  );

  const renderJSX_DrawerActions = (
    <div className="actions drawer-mobile-actions">
      <Link
        href={ROUTES.SIGN_IN.href}
        className={buttonVariants({ variant: 'secondary' })}
        onClick={() => setDrawer(false)}
      >
        Sign In
      </Link>
      <Link
        href={ROUTES.SIGN_UP.href}
        className={buttonVariants({ variant: 'default' })}
        onClick={() => setDrawer(false)}
      >
        Get Started
      </Link>
    </div>
  );

  const renderJSX_NavigationDrawer = (
    <Drawer
      swipeDirection="left"
      open={isDrawer}
      onOpenChange={(open) => setDrawer(open)}
    >
      <DrawerTrigger
        render={
          <Button variant="secondary" size="icon" aria-label="Open navigation">
            <Menu aria-hidden={true} />
          </Button>
        }
      />
      <DrawerContent id="header-drawer" className="header-drawer">
        <DrawerHeader className="drawer-header">
          <Link href={ROUTES.HOME.href} className="branding-link">
            <Branding />
          </Link>
          <Button
            variant="secondary"
            size="icon"
            aria-label="Close navigation"
            onClick={() => setDrawer(false)}
          >
            <X aria-hidden={true} />
          </Button>
        </DrawerHeader>
        {renderJSX_DrawerNavigation}
        <Separator />
        {renderJSX_DrawerActions}
        <DrawerFooter className="drawer-footer">
          <Link href={ROUTES.TERMS_OF_USE.href} className="link">
            {ROUTES.TERMS_OF_USE.label}
          </Link>
          <Link href={ROUTES.PRIVACY_POLICY.href} className="link">
            {ROUTES.PRIVACY_POLICY.label}
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return (
    <header id="header" className="header">
      <div className="container">
        <div className="header-data">
          <Link href={ROUTES.HOME.href} className="branding-link">
            <Branding />
          </Link>
          <div className="data-wrapper">
            <div className="desktop-header-controls">
              {renderJSX_DesktopNavigation}
              {renderJSX_Actions()}
            </div>
            {renderJSX_Actions('tablet-header-actions')}
            <div className="mobile-header-controls">
              {renderJSX_NavigationDrawer}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
