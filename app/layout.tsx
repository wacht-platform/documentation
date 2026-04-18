import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './globals.css';

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'Wacht Documentation',
    template: '%s | Wacht Documentation',
  },
  description:
    'Developer documentation for Wacht platform services, SDKs, and API contracts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} min-h-screen bg-[radial-gradient(circle_at_top,#f6f4ed_0%,#efe9da_32%,#e6dfcf_60%,#ddd4c0_100%)] font-sans text-stone-900 antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
