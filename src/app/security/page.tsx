import { LegalLayout, PlainEnglishBox } from "@/components/layout/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy | NeetiCRM",
  description: "Read the Security Policy for NeetiCRM. Understand our infrastructure security, encryption protocols, and backup procedures.",
};

const SECTIONS = [
  { id: "infrastructure", label: "1. Infrastructure & Hosting" },
  { id: "encryption", label: "2. Data Encryption" },
  { id: "authentication", label: "3. Account Security & Auth" },
  { id: "backup-dr", label: "4. Backups & Disaster Recovery" },
  { id: "personnel-access", label: "5. Employee & Administrative Access" },
  { id: "reporting", label: "6. Security Incident Reporting" },
];

export default function SecurityPolicy() {
  return (
    <LegalLayout
      title="Security Policy"
      lastUpdated="June 26, 2026"
      sections={SECTIONS}
    >
      <section id="infrastructure" className="space-y-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">1. Infrastructure & Hosting</h2>
        <p>
          NeetiCRM services and databases are hosted on Amazon Web Services (AWS). We utilize secure AWS data centers equipped with state-of-the-art physical security, including round-the-clock surveillance, biometric access gates, and fire suppression systems.
        </p>
        <p>
          Our primary hosting servers and database instances are located in the <strong>Asia Pacific (Mumbai, India)</strong> region. This ensures minimal latency for local operations and complies with data localization guidelines.
        </p>
      </section>

      <section id="encryption" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">2. Data Encryption</h2>
        <p>
          We secure customer information and lead data through multiple layers of encryption:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Data in Transit:</strong> All communication between your web browser and NeetiCRM servers is encrypted using industry-standard Transport Layer Security (TLS 1.3) protocols. This prevents eavesdropping or tampering.</li>
          <li><strong>Data at Rest:</strong> All customer data stored inside our databases, lead indices, and S3 file storage (including voice call recordings, media attachments, and logs) is encrypted at rest using Advanced Encryption Standard (AES-256) cryptographic keys.</li>
          <li><strong>API Integrations:</strong> Connections with Meta APIs (WhatsApp Cloud, Facebook Ads) and payment gateways use secure HTTPS tokens and signature verifications.</li>
        </ul>
      </section>

      <PlainEnglishBox>
        Every bit of data passing between your browser and our servers is encrypted (TLS 1.3). Everything saved on our servers, including call recordings and contact phone numbers, is encrypted using high-grade keys (AES-256).
      </PlainEnglishBox>

      <section id="authentication" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">3. Account Security & Authentication</h2>
        <p>
          We employ robust security practices to protect user accounts:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Password Hashing:</strong> User passwords are encrypted on our servers using the salted bcrypt hashing algorithm. We never store passwords in plain text.</li>
          <li><strong>Two-Factor Authentication (2FA):</strong> We support and encourage Multi-Factor Authentication (MFA) via TOTP authenticator apps to provide an extra layer of security during login.</li>
          <li><strong>Session Management:</strong> Active user tokens automatically expire after period of inactivity. We employ strict Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) protections inside our front-end framework.</li>
        </ul>
      </section>

      <section id="backup-dr" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">4. Backups & Disaster Recovery</h2>
        <p>
          To protect against hardware failures or regional disasters:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Automated Backups:</strong> Full database backups are captured automatically every 24 hours. These backups are encrypted and stored in isolated storage configurations.</li>
          <li><strong>Retention:</strong> Backup images are retained for a rolling period of 30 days before automatic deletion.</li>
          <li><strong>Redundancy:</strong> Our database systems run in Multi-AZ (Availability Zone) setups. If a primary database node fails, standby systems automatically take over in real time without data loss or manual intervention.</li>
        </ul>
      </section>

      <PlainEnglishBox>
        We take complete backups of our databases every 24 hours. They are encrypted and kept in multiple availability zones on AWS, so if one data center has an issue, your CRM will keep running from a secondary zone.
      </PlainEnglishBox>

      <section id="personnel-access" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">5. Employee & Administrative Access</h2>
        <p>
          We maintain strict access controls within our organization:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>NeetiCRM employees do not have access to your CRM database, lead details, or voice transcripts unless explicitly requested by you for technical troubleshooting or support.</li>
          <li>Our operations staff use secure VPN connections and MFA to access backend servers.</li>
          <li>All system access is logged and audit trials are regularly analyzed for anomalies.</li>
        </ul>
      </section>

      <section id="reporting" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">6. Security Incident Reporting</h2>
        <p>
          We take security vulnerabilities seriously. If you discover a vulnerability or suspect an account compromise:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Do not exploit the vulnerability or share details publicly.</li>
          <li>Email us immediately at <a href="mailto:security@neeticrm.com" className="text-amber-signal hover:underline">security@neeticrm.com</a> with detailed reproduction steps.</li>
          <li>We will review your submission and respond within forty-eight (48) hours. We appreciate responsible disclosure.</li>
        </ol>
      </section>
    </LegalLayout>
  );
}
