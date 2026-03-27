import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://orthero.com'),
  title: {
    default: 'Orthero - The Clearest Way of Changing Your Smile',
    template: '%s | Orthero',
  },
  description:
    'Orthero leverages advanced 3D scanning and design technology within the field of aesthetic orthodontics. Discover our clear aligners for a perfect smile transformation.',
  keywords: [
    'clear aligners',
    'orthodontics',
    'invisible braces',
    'smile transformation',
    'dental aligners',
    'teeth straightening',
  ],
  authors: [{ name: 'Orthero' }],
  creator: 'Orthero',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orthero.com',
    siteName: 'Orthero',
    title: 'Orthero - The Clearest Way of Changing Your Smile',
    description:
      'Orthero leverages advanced 3D scanning and design technology within the field of aesthetic orthodontics.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Orthero Clear Aligners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orthero - The Clearest Way of Changing Your Smile',
    description:
      'Advanced 3D scanning and design technology for aesthetic orthodontics.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg z-[100]"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
