import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import BackgroundEffects from '@/components/BackgroundEffects';
import { Notifications } from '@mantine/notifications';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Trishita Majumder | Full Stack Developer',
  description:
    'Full Stack Developer specializing in Spring Boot, React, Microservices, and scalable systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={inter.className}>
        <MantineProvider
          defaultColorScheme="dark"
          theme={{
            primaryColor: 'violet',
            fontFamily: 'Inter, sans-serif',

            colors: {
              brand: [
                '#f3e8ff',
                '#e9d5ff',
                '#d8b4fe',
                '#c084fc',
                '#a855f7',
                '#9333ea',
                '#7e22ce',
                '#6b21a8',
                '#581c87',
                '#3b0764',
              ],
            },
          }}
        >
          <Notifications position="top-right" />
          <BackgroundEffects />
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}