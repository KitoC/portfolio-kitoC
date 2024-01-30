import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kito Clark - Portfolio",
  description: "A showcase of my career thus far",
  creator: "Kito Clark",
  openGraph: {
    title: "Kito Clark - Portfolio",
    description: "A showcase of my career thus far",
    url: "https://jazzy-pixie-b8f2b2.netlify.app",
    siteName: "Kito Clark - Portfolio",
    images: [
      {
        url: "https://jazzy-pixie-b8f2b2.netlify.app/thumbnail.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-500 text-slate-100 relative`}>
        {children}
      </body>
    </html>
  );
}
