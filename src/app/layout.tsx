import "./globals.css";
import type { Metadata } from "next";
import { CSPostHogProvider } from "../providers/PostHogProvider";
import { GeistMono } from "geist/font/mono";
import { Space_Mono, Unbounded } from "next/font/google";

import "./globals.css";
import clsx from "clsx";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-unbounded",
  fallback: ["sans-serif"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  fallback: ["Courier New", "monospace"],
});

const geist = GeistMono;
export const metadata: Metadata = {
  title: "gtfol - ai product studio",
  icons: ["/favicon.ico"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gtfol.dev",
    images: [
      {
        url: "https://www.gtfol.dev/logo.png",
        width: 600,
        height: 600,
        alt: "gtfol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "gtfol - ai product studio",
    description: "we build software that go from 0 → 1, scale, and repeat.",
    images: ["https://www.gtfol.dev/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-black" lang="en">
      <CSPostHogProvider>
        <body
          className={clsx(
            unbounded.variable,
            spaceMono.variable,
            geist.className,
            "h-full text-black font-light tracking-wide"
          )}
        >
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
