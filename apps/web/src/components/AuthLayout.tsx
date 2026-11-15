import { type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@healthkoins/design/components/button';
import { ImageAuth } from '@healthkoins/design/images';
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
          <Image src={ImageAuth} alt="" className="data-image" />
          <div className="data-body">
            <h1 className="body-title">{title}</h1>
            <div className="body-description">{description}</div>
            <div className="body-content">{children}</div>
            <div className="body-footer">
              <span>{footerLabel}</span>
              <Link
                href={route.href}
                className={buttonVariants({ variant: 'link' })}
              >
                {route.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
