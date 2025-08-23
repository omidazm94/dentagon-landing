import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Dentagon",
  description: "Created by Dentagon",
  generator: "Dentagon",
  icons: {
    icon: [
      {
        url: "/dentagon.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
    shortcut: "/dentagon.jpg",
    apple: "/dentagon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/dentagon.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/dentagon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/dentagon.jpg" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
