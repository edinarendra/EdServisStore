import './globals.css';

export const metadata = {
  title: 'EdServisStore',
  description: 'Layanan servis HP & Laptop profesional',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
