import { Header } from '@/components';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News App',
  description: 'Generated by Gismo dev',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 transition-all">
        <Header />
        {children}
      </body>
    </html>
  );
}
