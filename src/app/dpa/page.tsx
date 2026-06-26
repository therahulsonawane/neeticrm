import { LegalLayout, PlainEnglishBox } from "@/components/layout/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Agreement (DPA) | NeetiCRM",
  description: "Read the Data Processing Agreement (DPA) for NeetiCRM. Learn about our data processor terms, sub-processors, and GDPR/DPDP compliance.",
};

const SECTIONS = [
  { id: "intro", label: "1. Scope & Application" },
  { id: "roles", label: "2. Roles of the Parties" },
  { id: "obligations", label: "3. Processing & Instructions" },
  { id: "security-measures", label: "4. Technical & Organizational Measures" },
  { id: "sub-processors", label: "5. Sub-processors" },
  { id: "data-breach", label: "6. Security Incident Notification" },
  { id: "deletion-return", label: "7. Data Return & Deletion" },
  { id: "annex", label: "Annex A: Processing Details" },
];

export default function DataProcessingAgreement() {
  return (
    <LegalLayout
      title="Data Processing Agreement (DPA)"
      lastUpdated="June 26, 2026"
      sections={SECTIONS}
    >
      <section id="intro" className="space-y-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">1. Scope & Application</h2>
        <p>
          This Data Processing Agreement (&ldquo;DPA&rdquo;) is entered into by and between NeetiCRM (acting as the &ldquo;Data Processor&rdquo; or &ldquo;Data Processor Entity&rdquo;) and the Customer using the NeetiCRM platform (acting as the &ldquo;Data Fiduciary&rdquo; or &ldquo;Data Controller&rdquo;).
        </p>
        <p>
          This DPA applies to the processing of Customer Lead Data and personal data synced, uploaded, or generated through the Service. This agreement is integrated into, and forms part of, our Terms of Service, and is designed to ensure compliance with the Digital Personal Data Protection Act, 2023 (India) (&ldquo;DPDP Act&rdquo;), the General Data Protection Regulation (&ldquo;GDPR&rdquo;), and other applicable international data protection frameworks.
        </p>
      </section>

      <section id="roles" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">2. Roles of the Parties</h2>
        <p>
          The parties acknowledge and agree that:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Customer</strong> acts as the Data Fiduciary (under the DPDP Act) or Data Controller (under GDPR). The Customer determines the purposes, categories, and lawful basis for collecting and qualifying lead details.</li>
          <li><strong>NeetiCRM</strong> acts as the Data Processor. NeetiCRM only processes personal data on behalf of and according to the instructions of the Customer, as outlined in the Terms of Service and this DPA.</li>
        </ul>
      </section>

      <PlainEnglishBox>
        This agreement formalizes our relationship: you are the boss of your data (Controller/Fiduciary) and we are the builders processing it under your exact instructions (Processor). This keeps your business compliant with GDPR and the Indian DPDP Act.
      </PlainEnglishBox>

      <section id="obligations" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">3. Processing & Instructions</h2>
        <p>
          NeetiCRM shall:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Process Customer Lead Data solely in accordance with the Customer&rsquo;s written instructions, including configurations set up in the workflow builder, dashboard campaigns, and webhook links.</li>
          <li>Ensure that all personnel authorized to process lead data are bound by strict obligations of confidentiality.</li>
          <li>Promptly inform the Customer if, in our opinion, an instruction from the Customer violates applicable data protection regulations.</li>
        </ul>
      </section>

      <section id="security-measures" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">4. Technical & Organizational Measures</h2>
        <p>
          We implement and maintain industry-standard security controls to protect lead data against unauthorized access, loss, alteration, or disclosure. These controls include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Encryption of all personal data at rest (AES-256) and in transit (TLS 1.3).</li>
          <li>Vulnerability monitoring, firewalls, and regular security patching of our database hosting environments.</li>
          <li>Access tracking, role-based controls, and security awareness training for NeetiCRM engineering and operations staff.</li>
          <li>Audit logs that record API queries and administrative changes made inside your workspace.</li>
        </ul>
      </section>

      <section id="sub-processors" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">5. Sub-processors</h2>
        <p>
          The Customer grants NeetiCRM general authorization to engage sub-processors to perform infrastructure, hosting, AI transcription, and payment processing tasks.
        </p>
        <p>
          We list all active sub-processors in our Privacy Policy. We ensure that our contracts with sub-processors impose data protection obligations no less restrictive than those set out in this DPA.
        </p>
        <p>
          We will notify you of any additions or replacements to our sub-processor directory via email or system notification. If you have reasonable grounds to object to a new sub-processor on security or data protection grounds, you must notify us in writing within ten (10) days of receiving the update.
        </p>
      </section>

      <PlainEnglishBox>
        We use sub-processors (like AWS for database hosting, OpenAI for AI summaries, and Meta for WhatsApp API routing) to run NeetiCRM. We hold them to the same high security standards we hold ourselves.
      </PlainEnglishBox>

      <section id="data-breach" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">6. Security Incident Notification</h2>
        <p>
          In the event of a confirmed security incident leading to the unauthorized access, disclosure, or loss of Customer Lead Data hosted on NeetiCRM (a &ldquo;Data Breach&rdquo;):
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>We will notify the Customer without undue delay, and in any case within seventy-two (72) hours of confirming the breach.</li>
          <li>Our notification will describe the nature of the breach, the estimated volume of affected lead records, and our mitigation actions.</li>
          <li>We will immediately take all necessary measures to secure our infrastructure and prevent further data exposure.</li>
        </ul>
      </section>

      <section id="deletion-return" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">7. Data Return & Deletion</h2>
        <p>
          During the active subscription term, you may export your lead records, logs, and transcripts from the dashboard at any time.
        </p>
        <p>
          Upon termination of your account or subscription:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>NeetiCRM will retain lead data in an archival state for up to ninety (90) days to allow you to renew or download your records.</li>
          <li>After this retention window, we will permanently delete all Customer Lead Data, call recordings, and chat transcripts from our active databases and servers.</li>
          <li>Data residing in secure database backups will be systematically overwritten according to our 30-day backup cycle.</li>
        </ul>
      </section>

      <section id="annex" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">Annex A: Details of Processing</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 text-sm leading-relaxed">
          <p><strong>A. Categories of Data Subjects:</strong> Customer&rsquo;s prospective leads, contacts, active buyers, and website visitors.</p>
          <p><strong>B. Categories of Personal Data:</strong> Name, phone numbers, email addresses, pipeline status, AI conversation summaries, transcripts of qualification calls, and chat logs.</p>
          <p><strong>C. Nature & Purpose of Processing:</strong> Provision of CRM workspace, pipeline tracking, automated lead routing, and multi-channel campaign qualification via voice, SMS, email, and WhatsApp.</p>
          <p><strong>D. Processing Duration:</strong> For the duration of the Customer&rsquo;s paid subscription, plus up to 90 days of grace period post-termination.</p>
        </div>
      </section>
    </LegalLayout>
  );
}
