import { type ReactNode } from 'react';
import { Badge } from '@healthkoins/design/components/badge';
import '@/styles/DataLayout.css';

export default function DataLayout({
  title,
  description,
  label,
  lastUpdated,
  children
}: {
  title: string;
  description: string;
  label?: string;
  lastUpdated?: string;
  children?: ReactNode;
}) {
  return (
    <div id="layout-data" className="layout-data">
      <div className="data-header">
        <div className="container">
          {label && <Badge className="badge">{label}</Badge>}
          <h1 className="header-title">{title}</h1>
          <p className="header-description">{description}</p>
        </div>
      </div>
      {children && <div className="data-body container">{children}</div>}
      {lastUpdated && (
        <div className="data-footer container">
          <p className="footer-lastUpdated">Last Updated: {lastUpdated}</p>
        </div>
      )}
    </div>
  );
}
