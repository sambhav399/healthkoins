import { type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@healthkoins/design/components/button';
import { LogoImgAuth } from '@healthkoins/design/logo';
import '@/styles/AuthLayout.css';
import { type TYPE_Route } from '../constants/ROUTES';

export default function AuthLayout({
  title,
  description,
  footerLabel,
  route,
  children
}: {
  title: string;
  description: string;
  footerLabel: string;
  route: TYPE_Route;
  children: ReactNode;
}) {
  return (
    <div id="layout-auth" className="layout-auth">
      <div className="container">
        <div className="auth-data">
          <Image src={LogoImgAuth} alt="" className="data-image" />
          <div className="data-body">
            <h1 className="body-title">{title}</h1>
            <div className="body-description">{description}</div>
            <div className="body-content">{children}</div>
            <div className="body-footer">
              <span>{footerLabel}</span>
              <Link href={route.href} className="footer-link">
                <Button variant="link" tabIndex={-1}>
                  {route.label}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
