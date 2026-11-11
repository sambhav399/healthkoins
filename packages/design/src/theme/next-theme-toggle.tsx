'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@healthkoins/design/components/switch';

export default function NextThemeToggle(): React.ReactElement | null {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <Switch
      aria-label="Toggle dark mode"
      checked={isDarkMode}
      onCheckedChange={(checked: boolean) =>
        setTheme(checked ? 'dark' : 'light')
      }
    />
  );
}
