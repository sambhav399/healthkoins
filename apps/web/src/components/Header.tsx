import Link from 'next/link';
import { Button } from '@healthkoins/design/components/button';
import ROUTES from '../constants/ROUTES';

const NAVIGATION = Object.freeze([
  ROUTES.RANKINGS,
  ROUTES.ABOUT,
  ROUTES.BLOG,
  ROUTES.FAQ,
  ROUTES.CONTACT
] as const);

export default function Header() {
  return (
    <header id="header" className="header">
      <div className="container">
        <div className="header-data">
          <div className="branding">HealthKoins</div>
          <nav className="navigation">
            <ul className="navigation-list">
              {NAVIGATION.map((route) => (
                <li className="navigation-list-item" key={route.href}>
                  <Link href={route.href} className="navigation-link">
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="actions">
            <Button variant="ghost">Signin</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
