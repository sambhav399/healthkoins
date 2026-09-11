import { ReactLenis } from 'lenis/react';
import DesignSystemProvider from '@healthkoins/design-system/design-system-provider';
import NextThemeProvider from '@healthkoins/design-system/next-theme-provider';
import '@/app/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <DesignSystemProvider>
            <ReactLenis
              root
              options={{
                autoRaf: true,
                smoothWheel: true,
                syncTouch: true,
                touchMultiplier: 1.1,
                lerp: 0.1
              }}
            >
              <Header />
              <main>{children}</main>
              <Footer />
            </ReactLenis>
          </DesignSystemProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
