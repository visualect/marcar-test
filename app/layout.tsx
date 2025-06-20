import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Маркар - тестовое задание',
  description: 'Тестовое задание',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        suppressHydrationWarning
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
