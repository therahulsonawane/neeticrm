import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { JsonLd } from '@/components/seo/JsonLd';
import { DemoModalProvider } from '@/context/DemoModalContext';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NeetiCRM – AI Lead Follow-Up & WhatsApp Automation',
  description:
    'Stop losing leads to slow follow-up. NeetiCRM calls, qualifies, and nurtures every lead across WhatsApp, SMS, and email — automatically. Start free.',
  keywords: [
    'lead conversion platform',
    'AI lead follow-up software',
    'WhatsApp automation for sales',
    'WhatsApp flow builder',
    'WhatsApp CRM',
    'AI calling software',
    'AI lead qualification',
    'omnichannel follow-up software',
    'multi-channel lead nurturing',
    'Meta lead ads automation',
    'Facebook lead ads CRM',
  ],
  openGraph: {
    title: 'NeetiCRM – AI Lead Follow-Up & WhatsApp Automation',
    description:
      'Stop losing leads to slow follow-up. NeetiCRM calls, qualifies, and nurtures every lead across WhatsApp, SMS, and email — automatically.',
    type: 'website',
    locale: 'en_US',
    siteName: 'NeetiCRM',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeetiCRM – AI Lead Follow-Up & WhatsApp Automation',
    description:
      'Stop losing leads to slow follow-up. NeetiCRM calls, qualifies, and nurtures every lead across WhatsApp, SMS, and email — automatically.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://neeticrm.com',
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
      <body className="flex flex-col bg-ink min-h-full font-satoshi text-porcelain">
        {/* Skip Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <DemoModalProvider>{children}</DemoModalProvider>

        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        var WEBHOOK = "https://deprecatory-sonja-dilemmatical.ngrok-free.dev/api/webhooks/inbound/cmrtalh7a0003y6kruba0i8dh";
        var PARAMS  = ['gclid','utm_source','utm_medium','utm_campaign','utm_content','utm_term'];

        var urlParams = new URLSearchParams(window.location.search);
        PARAMS.forEach(function(p) {
          var v = urlParams.get(p);
          if (v) sessionStorage.setItem('_crm_' + p, v);
        });

        document.addEventListener('submit', function(e) {
          var form = e.target;
          var data = {};
          new FormData(form).forEach(function(v, k) { data[k] = v; });
          PARAMS.forEach(function(p) {
            var v = sessionStorage.getItem('_crm_' + p);
            if (v) data[p] = v;
          });

          fetch(WEBHOOK, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify(data)
          }).catch(function() {});
        }, true);
      })();
    `,
          }}
        />
      </body>
    </html>
  );
}
