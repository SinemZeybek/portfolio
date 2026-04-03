import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sinem Zeybek Peltokangas | Software Engineer",
  description:
    "Portfolio of Sinem Zeybek Peltokangas — Software Engineering graduate building full-stack web applications and AI-powered systems. Based in Jyväskylä, Finland.",
  metadataBase: new URL("https://portfoliosinemzpeltokangas.vercel.app"),
  openGraph: {
    title: "Sinem Zeybek Peltokangas | Software Engineer",
    description:
      "Software Engineering graduate building full-stack web applications and AI-powered systems.",
    url: "https://portfoliosinemzpeltokangas.vercel.app",
    siteName: "Sinem Zeybek Peltokangas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
