import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/app/components/nav-bar';
import { Providers } from '@/app/providers';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'MealAI',
  description: 'Meal planning',
  icons: {
    icon: [{ url: '/icons/favicon.svg', type: 'image/svg+xml', sizes: 'any' }],
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-pt-28 scroll-smooth antialiased motion-reduce:scroll-auto`}
    >
      <body className="flex min-h-full flex-col font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="flex min-h-0 flex-1 flex-col">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
