import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeetiCRM – AI Lead Follow-Up & WhatsApp Automation",
  description:
    "Stop losing leads to slow follow-up. NeetiCRM calls, qualifies, and nurtures every lead across WhatsApp, SMS, and email — automatically. Start free.",
  keywords: [
    "lead conversion platform",
    "AI lead follow-up software",
    "WhatsApp automation for sales",
    "WhatsApp flow builder",
    "WhatsApp CRM",
    "AI calling software",
    "AI lead qualification",
    "omnichannel follow-up software",
    "multi-channel lead nurturing",
    "Meta lead ads automation",
    "Facebook lead ads CRM",
  ],
  openGraph: {
    title: "NeetiCRM – AI Lead Follow-Up & WhatsApp Automation",
    description:
      "Stop losing leads to slow follow-up. NeetiCRM calls, qualifies, and nurtures every lead across WhatsApp, SMS, and email — automatically.",
    type: "website",
    locale: "en_US",
    siteName: "NeetiCRM",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeetiCRM – AI Lead Follow-Up & WhatsApp Automation",
    description:
      "Stop losing leads to slow follow-up. NeetiCRM calls, qualifies, and nurtures every lead across WhatsApp, SMS, and email — automatically.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        {/* Fontshare CDN - Clash Display & Satoshi */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0B1620" />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-satoshi bg-ink text-porcelain">
        {/* Skip Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
