import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/shared/JsonLd";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Little Shines Concept School | Premium CBSE English Medium School",
  description: "A premier educational institution offering CBSE curriculum from Play Group to 6th Class. Focus on holistic development, premium facilities, and 3D-integrated learning.",
  keywords: ["CBSE School", "English Medium School", "Play Group to 6th School", "Little Shines Concept School", "Best CBSE School"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/logo.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    apple: [
      { url: "/logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
};

import { ReactLenis } from 'lenis/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-outfit" suppressHydrationWarning>
        <ReactLenis root>
          <JsonLd />
          {children}
          <FloatingWhatsApp />
        </ReactLenis>
      </body>
    </html>
  );
}
