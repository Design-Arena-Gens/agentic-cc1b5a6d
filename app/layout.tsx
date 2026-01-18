import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Capacités de l'assistant IA",
  description: "Découvrez ce que l'assistant IA sait faire et comment il peut vous aider."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
