import { LegalLayout, PlainEnglishBox } from "@/components/layout/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | NeetiCRM",
  description: "Read the Acceptable Use Policy for NeetiCRM. Learn about our restrictions on spam, automated messaging, and Meta guidelines.",
};

const SECTIONS = [
  { id: "intro", label: "1. Purpose & Scope" },
  { id: "anti-spam", label: "2. Anti-Spam & Messaging Rules" },
  { id: "content-restrictions", label: "3. Restricted & Prohibited Content" },
  { id: "system-abuse", label: "4. System Integrity & Security" },
  { id: "meta-compliance", label: "5. Meta & WhatsApp Platform Compliance" },
  { id: "enforcement", label: "6. Monitoring & Enforcement" },
];

export default function AcceptableUsePolicy() {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      lastUpdated="June 26, 2026"
      sections={SECTIONS}
    >
      <section id="intro" className="space-y-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">1. Purpose & Scope</h2>
        <p>
          This Acceptable Use Policy (&ldquo;AUP&rdquo;) defines the acceptable standards of conduct and content requirements for accessing and using the NeetiCRM platform. This policy is designed to protect our infrastructure, our customers, and their end leads from spam, security threats, and unlawful activities.
        </p>
        <p>
          This AUP applies to all users of NeetiCRM, including administrators, sales agents, and automated software workflows. By using the Service, you agree to comply with this policy. Violation of this AUP may lead to immediate suspension or termination of your account without notice or refund.
        </p>
      </section>

      <section id="anti-spam" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">2. Anti-Spam & Messaging Rules</h2>
        <p>
          NeetiCRM provides powerful multi-channel automation tools. However, we maintain a zero-tolerance policy for spam and abusive communications.
        </p>
        <h3 className="font-clash text-lg font-medium text-porcelain">A. Opt-In & Consent</h3>
        <p>
          You must not send marketing messages, broadcast templates, or initiate automated sales calls to any lead unless you have obtained clear, verifiable consent (opt-in) from the recipient as required by applicable laws (such as CAN-SPAM, GDPR, or TRAI regulations in India). 
        </p>
        <h3 className="font-clash text-lg font-medium text-porcelain">B. Bulk Unsolicited Messages</h3>
        <p>
          You are prohibited from:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Uploading lists of scraped contacts, purchased databases, or leads obtained from unverified directory listings.</li>
          <li>Sending bulk unsolicited marketing messages (&ldquo;broadcast storms&rdquo;) via WhatsApp, SMS, or Email.</li>
          <li>Tricking recipients by masking your business identity, using spoofed caller IDs, or presenting fraudulent header details.</li>
          <li>Failing to provide a clear, functional opt-out or unsubscribe option (such as replying &ldquo;STOP&rdquo;) in all outbound automation sequences.</li>
        </ul>
      </section>

      <PlainEnglishBox>
        You cannot buy a list of random phone numbers and bulk-spam them on WhatsApp or SMS using NeetiCRM. You must only message leads who have explicitly requested contact from your business. Always include a way for them to opt-out.
      </PlainEnglishBox>

      <section id="content-restrictions" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">3. Restricted & Prohibited Content</h2>
        <p>
          You may not use NeetiCRM to transmit, publish, or manage data associated with any of the following restricted categories:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Illegal Activity:</strong> Content promoting drug trafficking, human smuggling, money laundering, cyber-crime, or illegal gambling.</li>
          <li><strong>Exploitative/Adult Content:</strong> Material depicting pornography, sexual services, escort referrals, or child exploitation.</li>
          <li><strong>Hate & Harassment:</strong> Messages promoting hate speech, cyber-bullying, discrimination, racism, or incitement to violence against protected groups.</li>
          <li><strong>Phishing & Fraud:</strong> Attempting to gather banking credentials, social security details, passwords, or biometrics from leads via deceptive landing page forms or automated messages.</li>
          <li><strong>Unregulated Goods:</strong> Marketing of prescription medications, firearms, tobacco products, vaping devices, or unauthorized financial schemes (including get-rich-quick cryptocurrency programs).</li>
        </ul>
      </section>

      <section id="system-abuse" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">4. System Integrity & Security</h2>
        <p>
          You agree not to abuse or exploit our server infrastructure:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Do not attempt to bypass platform rate-limiting, execute brute-force attacks on our APIs, or introduce denial-of-service (DoS) requests.</li>
          <li>Do not upload lead files, custom scripts, or attachments containing malware, spyware, trojans, ransomware, or corrupted archives.</li>
          <li>Do not attempt to gain unauthorized access to other customers&rsquo; workspaces, databases, or API keys.</li>
          <li>Do not use web crawlers or scraping utilities to export platform interfaces or system-generated code.</li>
        </ul>
      </section>

      <PlainEnglishBox>
        Do not try to hack our servers, reverse-engineer the automation engine, upload files containing malware, or sneak into other customers' dashboards. Doing so will result in immediate legal action and account closure.
      </PlainEnglishBox>

      <section id="meta-compliance" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">5. Meta & WhatsApp Platform Compliance</h2>
        <p>
          Since NeetiCRM integrates with the WhatsApp Cloud API, you must adhere strictly to Meta&rsquo;s rules:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Your WhatsApp templates must belong to approved categories (Utility, Marketing, Authentication). You may not use templates to bypass Meta&rsquo;s content verification checks.</li>
          <li>You must monitor your WhatsApp Business Quality Rating. If your quality tier drops to &ldquo;Low&rdquo; or your number is blocked by users, we reserve the right to pause your automated campaigns to protect our shared WhatsApp API nodes.</li>
          <li>You are responsible for ensuring that your Facebook Business Verification remains active and compliant.</li>
        </ul>
      </section>

      <section id="enforcement" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">6. Monitoring & Enforcement</h2>
        <p>
          <strong>Monitoring:</strong> We do not actively read the content of all your private WhatsApp chats or voice calls. However, we use automated anomaly-detection algorithms to monitor message volume spikes, high bounce/error rates, block-list triggers, and system resource usage.
        </p>
        <p>
          <strong>Account Action:</strong> If we detect or receive reports of violations of this AUP, we may take immediate action:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Issuing a warning warning or forcing a temporary pause on your campaign automations.</li>
          <li>Rate-limiting or throttling your API throughput.</li>
          <li>Suspending your account access immediately without liability for data loss or missed leads.</li>
          <li>Reporting unlawful actions to the appropriate law enforcement authorities in India or your local jurisdiction.</li>
        </ul>
      </section>
    </LegalLayout>
  );
}
