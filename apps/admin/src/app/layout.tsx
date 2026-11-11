import { type Metadata } from 'next';
import Script from 'next/script';
import NextThemeProvider from '@healthkoins/design/next-theme-provider';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Admin | HealthKoins',
    template: '%s | Admin HealthKoins'
  },
  description: 'Earn Real Rewards for Walking & Fitness'
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            let theme = 'system';
            try {
              theme = localStorage.getItem('theme') || theme;
            } catch {}

            const resolvedTheme = theme === 'system'
              ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
              : theme;
            const root = document.documentElement;
            root.classList.remove('light', 'dark');
            root.classList.add(resolvedTheme);
            if (resolvedTheme === 'light' || resolvedTheme === 'dark') {
              root.style.colorScheme = resolvedTheme;
            }
          })();`}
        </Script>
      </head>
      <body suppressHydrationWarning={true}>
        <NextThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <main id="main" className="main">
            {children}
          </main>
        </NextThemeProvider>
      </body>
    </html>
  );
}
