
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gen Computer | Lembaga Kursus dan Pelatihan Sampit',
  description:
    'Gen Computer menyediakan program pendidikan D1 dan kursus komputer, administrasi, desain grafis, serta bisnis digital di Sampit, Kalimantan Tengah.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
