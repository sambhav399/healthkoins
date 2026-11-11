import { type ReactNode } from 'react';
import { Badge } from '@healthkoins/design/components/badge';
import '@/styles/DataLayout.css';

export default function DataLayout({
  title,
  description,
  label,
  children
}: {
  title: string;
  description: string;
  label?: string;
  children?: ReactNode;
}) {
  return (
    <div id="layout-data" className="layout-data">
      <div className="data-header">
        <div className="container">
          <Badge className="badge">{label}</Badge>
          <h1 className="header-title">{title}</h1>
          <p className="header-description">{description}</p>
        </div>
      </div>
      <div className="data-body container">{children}</div>
    </div>
  );
}
