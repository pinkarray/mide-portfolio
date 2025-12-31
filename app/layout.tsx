import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Mide Oredugba - Full-Stack Developer & Founder',
  description: 'Portfolio of Mide Oredugba. Builder of ClearRent rental marketplace, MechLink two-sided marketplace, and full-stack applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}