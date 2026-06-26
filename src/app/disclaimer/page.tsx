import { LegalLayout, PlainEnglishBox } from "@/components/layout/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | NeetiCRM",
  description: "Read the legal disclaimer for NeetiCRM. Understand our platform limits, AI accuracy, and API dependencies.",
};

const SECTIONS = [
  { id: "intro", label: "1. No Legal or Business Guarantees" },
  { id: "api-dependency", label: "2. Third-Party API & Meta Dependencies" },
  { id: "ai-accuracy", label: "3. AI qualification & Accuracy Limits" },
  { id: "lead-quality", label: "4. No Guarantees on Sales or Lead Quality" },
  { id: "telecom-trai", label: "5. Compliance with Telecom & Indian DND Rules" },
  { id: "downtime", label: "6. Platform Downtime & Outages" },
];

export default function Disclaimer() {
  return (
    <LegalLayout
      title="Disclaimer"
      lastUpdated="June 26, 2026"
      sections={SECTIONS}
    >
      <section id="intro" className="space-y-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">1. No Legal or Business Guarantees</h2>
        <p>
          The information, templates, documentation, and tools provided on the NeetiCRM platform, website, and dashboard are for informational and operational purposes only. NeetiCRM does not provide legal, financial, tax, or professional business advice.
        </p>
        <p>
          Any use of our compliance templates, contract checklists, or DPA templates is at your own risk. You should consult with qualified legal counsel in India or your local jurisdiction to ensure your business operations comply with applicable privacy acts and telecom regulations.
        </p>
      </section>

      <section id="api-dependency" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">2. Third-Party API & Meta Dependencies</h2>
        <p>
          NeetiCRM functions by integrating with third-party software applications, including Meta Platforms (Facebook, Instagram, and WhatsApp Business Platform) and OpenAI.
        </p>
        <p>
          You acknowledge that NeetiCRM does not control, own, or operate these external services. We are not liable for:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Changes in Meta&rsquo;s Graph API protocols, rate limits, or WhatsApp message template approval policies.</li>
          <li>Temporary or permanent suspension of your Facebook Page, Instagram Account, or WhatsApp Business Account (WABA) due to Meta policy violations or system reviews.</li>
          <li>Increases in billing rates, categories, or conversation charges initiated by Meta.</li>
          <li>Outages or latency originating from OpenAI, AWS infrastructure, or your SMS gateway providers.</li>
        </ul>
      </section>

      <PlainEnglishBox>
        NeetiCRM depends directly on APIs from Meta and OpenAI. If their services are slow, down, or if they change their guidelines, it will affect our platform. We are not liable for outages caused by these third-party platforms.
      </PlainEnglishBox>

      <section id="ai-accuracy" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">3. AI Qualification & Accuracy Limits</h2>
        <p>
          Our Service features automated lead qualification, phone call dialers, and conversational bots powered by Large Language Models (LLMs).
        </p>
        <p>
          Because LLMs process language probabilistically, the AI qualification bot may occasionally output incorrect information, mistranscribe voice conversations, or categorize lead sentiment and budget incorrectly (sometimes referred to as &ldquo;hallucinations&rdquo;). You acknowledge that AI classifications represent automated guidance, and you are solely responsible for manually verifying critical lead details before engaging in contractual commitments with prospective customers.
        </p>
      </section>

      <section id="lead-quality" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">4. No Guarantees on Sales or Lead Quality</h2>
        <p>
          NeetiCRM is a lead management and workflow automation software tool. We do not generate leads for you, nor do we guarantee:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The volume, quality, accuracy, or buying intent of leads synced from Facebook Lead Ads or external webhooks.</li>
          <li>Increases in your business sales conversion rates, revenue, or marketing Return on Investment (ROI) after deploying the CRM.</li>
          <li>The validity of email addresses, phone numbers, or social media handles entered by leads into your landing pages or forms.</li>
        </ul>
      </section>

      <PlainEnglishBox>
        We build the tool to manage and automate your lead follow-up. We do not generate leads for you, and we cannot guarantee that using our software will increase your sales or conversions.
      </PlainEnglishBox>

      <section id="telecom-trai" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">5. Compliance with Telecom & Indian DND Rules</h2>
        <p>
          Indian telecommunications are regulated by the Telecom Regulatory Authority of India (TRAI).
        </p>
        <p>
          If you use NeetiCRM to send SMS notifications, trigger automated phone calls, or initiate WhatsApp templates to recipients in India, you are solely responsible for:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Ensuring that your recipients are not registered on the national &ldquo;Do Not Disturb&rdquo; (DND) or National Customer Preference Register (NCPR) without explicit opt-in consent.</li>
          <li>Registering your commercial headers, Entity IDs, and message templates on a certified DLT (Distributed Ledger Technology) portal in accordance with TRAI regulations.</li>
          <li>Any fines, penalties, or service blacklisting imposed by Indian telecom operators or authorities due to spam complaints or unsolicited communication triggered from your account.</li>
        </ul>
      </section>

      <section id="downtime" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">6. Platform Downtime & Outages</h2>
        <p>
          We target high availability, but the Service may occasionally experience downtime due to scheduled maintenance, software updates, server hardware failures, network routing errors, cyber-attacks, or Force Majeure events. NeetiCRM is provided on an &ldquo;As Is&rdquo; basis, and we disclaim any liability for business disruption, lost data, or missed leads resulting from these outages.
        </p>
      </section>
    </LegalLayout>
  );
}
