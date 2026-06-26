import { LegalLayout, PlainEnglishBox } from "@/components/layout/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | NeetiCRM",
  description: "Read our Cookie Policy. Learn how we use cookies, tracking pixels, and analytics to optimize NeetiCRM.",
};

const SECTIONS = [
  { id: "what-are-cookies", label: "1. What Are Cookies" },
  { id: "how-we-use", label: "2. How We Use Cookies" },
  { id: "cookie-types", label: "3. Categories of Cookies We Use" },
  { id: "cookie-table", label: "4. Detailed Cookie Inventory" },
  { id: "cookie-control", label: "5. How to Control Cookies" },
  { id: "changes", label: "6. Changes to This Policy" },
];

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="June 26, 2026"
      sections={SECTIONS}
    >
      <section id="what-are-cookies" className="space-y-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">1. What Are Cookies</h2>
        <p>
          Cookies are small text files containing a string of alphanumeric characters that are downloaded to your computer or mobile device when you visit a website. They allow the website to recognize your browser, remember your preferences, and track your activity across sessions to improve your user experience.
        </p>
        <p>
          We also use web beacons, tracking pixels (like the Meta Pixel), and local browser storage (such as HTML5 local storage) to collect operational data. In this policy, all these technologies are collectively referred to as &ldquo;Cookies.&rdquo;
        </p>
      </section>

      <section id="how-we-use" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">2. How We Use Cookies</h2>
        <p>
          NeetiCRM uses Cookies to facilitate account authentication, ensure system security, maintain subscription billing flows, and analyze website traffic.
        </p>
        <p>
          Cookies help us verify your active session, keep you logged in as you navigate between pipeline pages, remember your dashboard view preferences (such as dark mode configurations), and understand which landing page features are most popular.
        </p>
      </section>

      <PlainEnglishBox>
        Cookies are small files we save on your browser to make sure you stay logged in and to remember your dashboard preferences. We do not use them to spy on your personal computer files.
      </PlainEnglishBox>

      <section id="cookie-types" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">3. Categories of Cookies We Use</h2>
        <p>
          We classify our cookies into the following categories:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Essential / Strictly Necessary Cookies:</strong> These cookies are critical to operating the CRM. Without them, you cannot log in, access secure workspace URLs, or process payments. They do not require consent and cannot be turned off.</li>
          <li><strong>Performance & Analytics Cookies:</strong> These cookies gather anonymous, aggregated data on how visitors interact with NeetiCRM (such as page visit counts, click maps, and error triggers). We use this data to optimize dashboard load speeds and fix interface bugs.</li>
          <li><strong>Functionality Cookies:</strong> These cookies remember choices you make (such as language preference or workflow builder settings) to customize and streamline your account experience.</li>
          <li><strong>Marketing & Targeting Cookies:</strong> These third-party cookies (such as the Meta Pixel) are deployed on our public marketing website to measure the effectiveness of our Facebook and Instagram lead ad campaigns. They help us retarget ads to relevant business audiences. We do not deploy marketing cookies inside the secure CRM dashboard.</li>
        </ul>
      </section>

      <section id="cookie-table" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">4. Detailed Cookie Inventory</h2>
        <p>
          The table below lists the primary cookies used by NeetiCRM:
        </p>
        <div className="overflow-x-auto my-4 border border-white/10 rounded-xl">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="bg-white/5 text-porcelain font-clash">
              <tr>
                <th className="px-4 py-3 text-left">Cookie Name</th>
                <th className="px-4 py-3 text-left">Provider</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Duration</th>
                <th className="px-4 py-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-4 py-3 font-mono font-semibold text-amber-signal">__neeti_session</td>
                <td className="px-4 py-3">NeetiCRM</td>
                <td className="px-4 py-3">Essential</td>
                <td className="px-4 py-3">Session</td>
                <td className="px-4 py-3">Authenticates your active account session and keeps you logged in.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-semibold text-amber-signal">__stripe_mid / __stripe_sid</td>
                <td className="px-4 py-3">Stripe</td>
                <td className="px-4 py-3">Essential</td>
                <td className="px-4 py-3">1 Year / Session</td>
                <td className="px-4 py-3">Secures credit card transactions and prevents payment fraud.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-semibold text-amber-signal">_ga / _gid</td>
                <td className="px-4 py-3">Google Analytics</td>
                <td className="px-4 py-3">Analytics</td>
                <td className="px-4 py-3">2 Years / 24 Hours</td>
                <td className="px-4 py-3">Tracks anonymous page views, scroll depth, and traffic sources.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-semibold text-amber-signal">_fbp</td>
                <td className="px-4 py-3">Meta Platforms</td>
                <td className="px-4 py-3">Marketing</td>
                <td className="px-4 py-3">90 Days</td>
                <td className="px-4 py-3">Measures the conversion rates of Facebook Lead Ads. Used only on marketing pages.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <PlainEnglishBox>
        Essential cookies run the login portal. Google Analytics helps us improve platform speed. Meta Pixels are only placed on our public site to check if our ads are working; we do not track you inside the dashboard.
      </PlainEnglishBox>

      <section id="cookie-control" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">5. How to Control Cookies</h2>
        <p>
          You have the right to accept or decline non-essential cookies. You can manage your preferences using:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cookie Consent Banner:</strong> When you first visit NeetiCRM, our consent banner allows you to toggle marketing and analytics cookies on or off.</li>
          <li><strong>Browser Settings:</strong> Most web browsers allow you to block, delete, or reject cookies entirely through their settings panel (typically under &ldquo;Privacy &amp; Security&rdquo;). However, blocking strictly necessary cookies will prevent you from logging into the CRM dashboard.</li>
        </ul>
      </section>

      <section id="changes" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">6. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in our technology partners, tracking vendors, or compliance requirements. Any changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date.
        </p>
      </section>
    </LegalLayout>
  );
}
