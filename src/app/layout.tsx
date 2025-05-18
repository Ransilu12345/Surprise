import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Bornday",
  description: "A birthday surprise app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, width: '100%', height: '100%' }}>
        {children}
      </body>
    </html>
  );
}
