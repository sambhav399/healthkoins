'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { Switch } from '@healthkoins/design-system';
import { Moon, Sun } from '@healthkoins/design-system/icon';

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
      checked={isDarkMode}
      onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </Switch>
  );
}
