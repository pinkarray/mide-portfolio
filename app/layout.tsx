import type { Metadata } from 'next';
import './globals.css';

const description =
  'Frontend engineer in Lagos building production web and mobile interfaces with React, Next.js, TypeScript and Flutter. Currently building ClearRent.';

export const metadata: Metadata = {
  metadataBase: new URL('https://mide-builds.vercel.app'),
  title: 'Ayomide Oredugba | Frontend Engineer',
  description,
  openGraph: {
    title: 'Ayomide Oredugba | Frontend Engineer',
    description,
    url: 'https://mide-builds.vercel.app',
    siteName: 'Ayomide Oredugba',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayomide Oredugba | Frontend Engineer',
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
