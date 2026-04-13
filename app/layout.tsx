import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BaseBuzz',
  description: 'Onchain Reputation Layer for Base',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
