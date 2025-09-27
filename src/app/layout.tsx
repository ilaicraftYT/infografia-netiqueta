import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Infografía: Netiqueta",
  description: "¿Qué es la netiqueta?",
  authors: [{
    name: "Ilai",
    url: "https://ilai.chimoteam.eu.org"
  }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
