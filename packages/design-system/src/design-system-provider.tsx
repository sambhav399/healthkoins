'use client';

import { TooltipProvider } from '@healthkoins/design-system';

export default function DesignSystemProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
