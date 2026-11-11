import { type Metadata } from 'next';
import Script from 'next/script';
import NextThemeProvider from '@healthkoins/design/next-theme-provider';
import '@/app/globals.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ROUTES from '../constants/ROUTES';

export const metadata: Metadata = {
  title: {
    default: ROUTES.HOME.title,
    template: '%s | HealthKoins'
  },
  description: ROUTES.HOME.description
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
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <Header />
          <main id="main" className="main">
            {children}
          </main>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
