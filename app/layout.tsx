import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alex Demo | Animated Developer Portfolio',
  description: 'Interactive fictional developer portfolio template with light and dark themes, motion, project demos and responsive design.',
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
