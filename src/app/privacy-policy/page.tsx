import { LegalLayout, PlainEnglishBox } from "@/components/layout/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NeetiCRM",
  description: "Learn how NeetiCRM collects, stores, and processes customer and lead data in compliance with DPDP Act 2023 and Meta platforms.",
};

const SECTIONS = [
  { id: "intro", label: "1. Introduction" },
  { id: "info-collect", label: "2. Information We Collect" },
  { id: "whatsapp-lead", label: "3. WhatsApp & Lead Data" },
  { id: "ai-processing", label: "4. AI Qualification & Call Tracking" },
  { id: "use-of-data", label: "5. How We Use Information" },
  { id: "third-party", label: "6. Third-Party Sub-processors" },
  { id: "retention-delete", label: "7. Data Retention & Deletion" },
  { id: "dpdp-rights", label: "8. DPDP Act & User Rights" },
  { id: "data-security", label: "9. Data Security" },
  { id: "contact", label: "10. Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="June 26, 2026"
      sections={SECTIONS}
    >
      <section id="intro" className="space-y-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">1. Introduction</h2>
        <p>
          Welcome to NeetiCRM (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your privacy and ensuring the security of your personal data and the data of your leads. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our SaaS Customer Relationship Management (CRM) platform, services, and website (collectively, the &ldquo;Service&rdquo;).
        </p>
        <p>
          Under the Digital Personal Data Protection Act, 2023 (India) (&ldquo;DPDP Act&rdquo;) and other international privacy frameworks such as the General Data Protection Regulation (&ldquo;GDPR&rdquo;), NeetiCRM acts as a <strong>Data Processor</strong> with respect to the customer leads, contacts, and WhatsApp/SMS message logs you import or collect through the platform. NeetiCRM acts as a <strong>Data Fiduciary</strong> (or Data Controller) only with respect to your account administration, billing, and system usage information.
        </p>
      </section>

      <PlainEnglishBox>
        We act as a &ldquo;Processor&rdquo; for the leads you bring into NeetiCRM, meaning you own your leads' data and we only process it on your instructions. We act as a &ldquo;Controller&rdquo; (or Fiduciary) only for your account registration, configuration, and subscription billing details.
      </PlainEnglishBox>

      <section id="info-collect" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">2. Information We Collect</h2>
        <p>
          We collect information in three ways: information you provide directly, information collected automatically, and information received from third-party integrations.
        </p>
        <h3 className="font-clash text-lg font-medium text-porcelain">A. Information You Provide to Us</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Account Information:</strong> When you register an account, we collect your name, email address, password, company name, phone number, and physical address in India.</li>
          <li><strong>Payment Information:</strong> We collect billing details and tax identification numbers (GSTIN for Indian companies). Actual transactions are processed securely through our payment processors (Razorpay and Stripe); we do not store raw credit card numbers or banking credentials.</li>
        </ul>
        <h3 className="font-clash text-lg font-medium text-porcelain">B. Lead Data You Upload or Capture</h3>
        <p>
          You may upload, import, or automatically sync customer and lead data into the Service. This data (collectively, &ldquo;Customer Lead Data&rdquo;) may include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Names, email addresses, phone numbers, and job titles of your prospects.</li>
          <li>Interaction history, custom pipeline stages, lead scores, and qualification criteria.</li>
          <li>Any other custom metadata fields you define for your lead tracking.</li>
        </ul>
      </section>

      <section id="whatsapp-lead" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">3. WhatsApp Business Platform & Lead Ads Data</h2>
        <p>
          NeetiCRM integrates directly with the Meta Graph API (including WhatsApp Cloud API, Facebook Lead Ads, and Instagram Leads).
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>WhatsApp Messages:</strong> To provide CRM messaging inbox and automated flows, NeetiCRM accesses, processes, and stores the content of WhatsApp chats, media attachments, template status updates, and delivery confirmations exchanged between your business and your leads. This data is handled in strict compliance with the Meta WhatsApp Business Terms and developer guidelines.
          </li>
          <li>
            <strong>Meta Lead Ads:</strong> When you link your Facebook page or Instagram professional account, we sync lead data generated from your campaigns in real time. We process this information to trigger automated workflows and push conversion events back to Meta via the Conversions API.
          </li>
        </ul>
      </section>

      <PlainEnglishBox>
        If you link WhatsApp or Facebook Ads, we access and sync those conversations and leads automatically so the CRM can trigger follow-ups. We do this under Meta's developer terms and keep this data private to your account.
      </PlainEnglishBox>

      <section id="ai-processing" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">4. AI Lead Qualification & Call Tracking</h2>
        <p>
          NeetiCRM features AI-driven calling, qualification bots, and communication tools.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Voice Recordings and Transcripts:</strong> When you enable AI voice qualification, calls between our AI agent and your leads are recorded. We transcribe these calls and generate structured summaries (identifying intent, budget, timeline) for your dashboard.
          </li>
          <li>
            <strong>Lead Consent:</strong> You represent and warrant that you have obtained all necessary consents, legal approvals, and registrations under applicable law (including Indian TRAI telecommunication and DND rules) before initiating automated voice calls, SMS, or WhatsApp campaigns to your leads.
          </li>
        </ul>
      </section>

      <section id="use-of-data" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">5. How We Use Collected Information</h2>
        <p>
          We use the information we collect to operate, manage, and improve NeetiCRM, including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Providing, maintaining, and developing the CRM features and automation builders.</li>
          <li>Processing subscription fees, managing billing profiles, and collecting GST taxes.</li>
          <li>Sending system alerts, security notices, service changes, and support updates.</li>
          <li>Aggregating anonymized performance metrics (e.g., email open rates, average bot qualification time) to optimize our AI algorithms and platform capacity. We do not sell or monetize raw lead data.</li>
        </ul>
      </section>

      <section id="third-party" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">6. Third-Party Sub-processors</h2>
        <p>
          We share data with verified third-party sub-processors to assist in delivering NeetiCRM services. These sub-processors are legally bound to protect your data under confidentiality agreements equivalent to ours.
        </p>
        <div className="overflow-x-auto my-4 border border-white/10 rounded-xl">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="bg-white/5 text-porcelain font-clash">
              <tr>
                <th className="px-4 py-3 text-left">Sub-processor</th>
                <th className="px-4 py-3 text-left">Purpose</th>
                <th className="px-4 py-3 text-left">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-4 py-3 font-semibold">Amazon Web Services (AWS)</td>
                <td className="px-4 py-3">Infrastructure hosting and database storage</td>
                <td className="px-4 py-3">Asia Pacific (Mumbai, India)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Meta Platforms, Inc.</td>
                <td className="px-4 py-3">WhatsApp Cloud API & Lead Ad sync</td>
                <td className="px-4 py-3">Global / US</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Razorpay / Stripe</td>
                <td className="px-4 py-3">Payment processing and transaction billing</td>
                <td className="px-4 py-3">India / Global</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">OpenAI, LLC</td>
                <td className="px-4 py-3">AI qualification text and voice summary APIs</td>
                <td className="px-4 py-3">Global / US</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Google Analytics</td>
                <td className="px-4 py-3">Website usage analytics</td>
                <td className="px-4 py-3">Global</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="retention-delete" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">7. Data Retention & Deletion</h2>
        <p>
          We retain account and administrative data for as long as your subscription is active, and for a reasonable period thereafter to comply with audit, tax, and legal requirements.
        </p>
        <p>
          For Customer Lead Data and communication logs, we store this information according to your subscription tier and account configuration. You may export or request deletion of your lead data directly from the dashboard. Upon subscription cancellation or non-payment, we store lead data for up to 90 days before permanent deletion from active servers and database backups.
        </p>
      </section>

      <section id="dpdp-rights" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">8. DPDP Act (India) & User Rights</h2>
        <p>
          In accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act, India), you are designated as the Principal (Data Principal) for your account information, and you act as the Data Fiduciary for your customer leads. We support your rights under this Act, including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Right to Access & Correction:</strong> You can access, update, or rectify your account data inside the CRM portal.</li>
          <li><strong>Right to Erasure (Right to be Forgotten):</strong> You can request complete erasure of your business contact information from our marketing directories.</li>
          <li><strong>Right to Grievance Redressal:</strong> You have the right to register complaints regarding data handling. We will resolve DPDP grievances within the statutory timeline.</li>
        </ul>
        <p>
          If you are an individual whose data is held in NeetiCRM as a lead of one of our customers, please contact the respective customer (who acts as the Data Fiduciary) to exercise your rights. We will assist our customers in fulfilling these requests.
        </p>
      </section>

      <section id="data-security" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">9. Data Security</h2>
        <p>
          We implement rigorous administrative, technical, and physical security measures to safeguard data:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Encryption of data in transit using industry-standard TLS 1.3.</li>
          <li>Encryption of data at rest inside our AWS database instances using AES-256 keys.</li>
          <li>Role-based access controls for internal operations teams, coupled with regular security audits.</li>
          <li>Secure password hashing using salted bcrypt hashing algorithms.</li>
        </ul>
      </section>

      <section id="contact" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, wish to exercise your rights under the DPDP Act, or have a data grievance, you may contact our Grievance Officer:
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 font-mono text-sm leading-relaxed max-w-md">
          <p className="font-semibold text-porcelain">NeetiCRM Data Operations</p>
          <p>Grievance Officer: Rahul Sonawane</p>
          <p>Email: legal@neeticrm.com</p>
          <p>Address: Mumbai, Maharashtra, India</p>
        </div>
      </section>
    </LegalLayout>
  );
}
