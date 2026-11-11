'use client';

import type * as React from 'react';
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps
} from 'next-themes';
import { TooltipProvider } from '@healthkoins/design/components/tooltip';

type Props = React.PropsWithChildren<ThemeProviderProps>;

export default function NextThemeProvider({ children, ...props }: Props) {
  return (
    <NextThemesProvider
      {...props}
      scriptProps={{ ...props.scriptProps, type: 'application/json' }}
    >
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemesProvider>
  );
}
