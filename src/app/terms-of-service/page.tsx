import { LegalLayout, PlainEnglishBox } from "@/components/layout/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NeetiCRM",
  description: "Read the Terms of Service for NeetiCRM. Learn about subscriptions, usage guidelines, India tax details, and legal compliance.",
};

const SECTIONS = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "eligibility", label: "2. Eligibility & Account Registration" },
  { id: "billing-taxes", label: "3. Subscription Plans, Billing & Taxes" },
  { id: "refunds", label: "4. Cancellation & Refunds" },
  { id: "ownership", label: "5. CRM Data Ownership" },
  { id: "whatsapp-meta", label: "6. WhatsApp & Meta Compliance" },
  { id: "ai-limitations", label: "7. AI Automations & Limits" },
  { id: "prohibited", label: "8. Prohibited Conduct" },
  { id: "disclaimer-liability", label: "9. Liability & Warranties" },
  { id: "governing-law", label: "10. Governing Law & Arbitration" },
  { id: "contact", label: "11. Contact" },
];

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="June 26, 2026"
      sections={SECTIONS}
    >
      <section id="acceptance" className="space-y-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">1. Acceptance of Terms</h2>
        <p>
          By creating an account, accessing, or using the NeetiCRM platform, websites, browser extensions, or associated software integrations (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). These Terms form a legally binding contract between you (the &ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and NeetiCRM (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
        </p>
        <p>
          If you are entering into this agreement on behalf of a company, organization, or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms. If you do not agree to these Terms, you must not access or use the Service.
        </p>
      </section>

      <section id="eligibility" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">2. Eligibility & Account Registration</h2>
        <p>
          To use NeetiCRM, you must be a legally registered business entity or an individual of at least 18 years of age who can form legally binding contracts under the Indian Contract Act, 1872.
        </p>
        <p>
          You agree to provide true, accurate, and complete registration information. You are solely responsible for maintaining the confidentiality of your account credentials, passwords, and API keys. You are fully responsible for all activities, automated flows, and API requests that occur under your account. You agree to notify us immediately of any unauthorized use of your credentials.
        </p>
      </section>

      <PlainEnglishBox>
        You must be legal age (18+) and register as a valid business or professional. Keep your login details secret, as you are responsible for everything that runs under your account (including automated WhatsApp flows and AI calls).
      </PlainEnglishBox>

      <section id="billing-taxes" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">3. Subscription Plans, Billing & Taxes</h2>
        <p>
          <strong>Subscription Structure:</strong> NeetiCRM is billed on a subscription basis (monthly or annually) according to the pricing tier chosen during registration. Subscriptions automatically renew at the end of each billing period unless cancelled.
        </p>
        <p>
          <strong>Billing Cycle:</strong> Payment is collected in advance via credit card, UPI, Net Banking, or other approved gateways. Our payment partners include Stripe and Razorpay. 
        </p>
        <p>
          <strong>Indian Taxes (GST):</strong> For Customers operating within India, services are subject to Goods and Services Tax (GST) under Indian tax regulations. We collect GST at the standard rate (currently 18% for SaaS/Cloud services) in addition to the base subscription fee. You must provide your valid GSTIN during checkout to claim Input Tax Credit (ITC).
        </p>
        <p>
          <strong>Rate Limiting & Overages:</strong> Some subscription tiers include limits on the number of leads, WhatsApp templates sent, API calls, and AI voice minutes. Overages will be billed separately at the end of each month, or system access may be temporarily throttled if quotas are exceeded.
        </p>
      </section>

      <section id="refunds" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">4. Cancellation & Refunds</h2>
        <p>
          <strong>Cancellation:</strong> You can cancel your subscription at any time through the billing dashboard. Upon cancellation, your account will remain active until the end of your current paid billing cycle, after which access will be limited and data will be flagged for archival deletion.
        </p>
        <p>
          <strong>Trial Period:</strong> We may offer a trial period for new accounts. If you do not cancel before the end of the trial period, you will be billed for the selected plan.
        </p>
        <p>
          <strong>Refund Eligibility:</strong> All payments are non-refundable. Since NeetiCRM is a business-to-business (B2B) SaaS utility that consumes third-party API costs (including OpenAI token fees and Meta WhatsApp Cloud API credits) in real time, we do not offer pro-rated refunds for partial months or unused limits. Please refer to our Refund Policy for specific exclusions.
        </p>
      </section>

      <PlainEnglishBox>
        Indian customers are charged 18% GST on top of standard plan prices. Provide your GSTIN to claim tax credits. Because we pay for AI and Meta APIs in real time, subscriptions are non-refundable once billed, but you can cancel anytime to prevent renewals.
      </PlainEnglishBox>

      <section id="ownership" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">5. CRM Data Ownership</h2>
        <p>
          <strong>Your Leads, Your Data:</strong> You retain complete ownership, rights, and intellectual property over all Customer Lead Data, lead lists, contact details, call recordings, and message history uploaded or synced with NeetiCRM. We claim no ownership over your lead data.
        </p>
        <p>
          <strong>Data License to Us:</strong> You grant NeetiCRM a limited, worldwide, non-exclusive license to host, copy, process, transmit, and display your Customer Lead Data solely to deliver, secure, and maintain the CRM platform services for you.
        </p>
      </section>

      <section id="whatsapp-meta" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">6. WhatsApp & Meta API Compliance</h2>
        <p>
          NeetiCRM integrates with the WhatsApp Cloud API and Meta developer graphs to trigger messaging campaigns.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Meta Developer Policies:</strong> You agree to comply with Meta&rsquo;s Developer Policies and WhatsApp&rsquo;s Business Terms. If Meta suspends your WhatsApp Business Account (WABA) or developer token for violations, NeetiCRM is not responsible for any service disruption.
          </li>
          <li>
            <strong>Opt-In Requirements:</strong> You warrant that you have obtained explicit, verifiable consent (&ldquo;opt-in&rdquo;) from every lead before sending them a WhatsApp template message, transactional alert, or marketing automation. You agree to include clear, simple &ldquo;Stop&rdquo; or &ldquo;Opt-out&rdquo; options in all initial outreach messages.
          </li>
          <li>
            <strong>WhatsApp Message Fees:</strong> Meta charges for WhatsApp conversations based on Category (Marketing, Utility, Authentication, Service). You are responsible for configuring your own Meta Business Manager payment credentials to pay Meta directly for conversation fees, or you agree to reimburse NeetiCRM for charges incurred.
          </li>
        </ul>
      </section>

      <section id="ai-limitations" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">7. AI Qualification Automations & Limits</h2>
        <p>
          NeetiCRM features AI-driven lead qualification, automated call dialers, and auto-responding agents.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>AI Accuracy:</strong> AI qualification results (including lead scores, intent classifications, and summaries) are generated using predictive machine learning models. We do not guarantee the 100% accuracy, completeness, or truthfulness of any AI-transcribed call or qualified lead details. You must verify critical lead credentials manually.
          </li>
          <li>
            <strong>Liability for Automated Actions:</strong> NeetiCRM is not liable for business decisions, customer conflicts, or lost deals resulting from AI-generated template outputs, automatic system statuses, or voice-bot conversational responses.
          </li>
        </ul>
      </section>

      <PlainEnglishBox>
        You must get clear consent before messaging leads on WhatsApp. You must also pay Meta directly for their conversation fees. Since AI is predictive, it may sometimes summarize calls or intent incorrectly; always double-check important details.
      </PlainEnglishBox>

      <section id="prohibited" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">8. Prohibited Conduct</h2>
        <p>
          You agree not to use NeetiCRM for:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Spamming, broadcasting unsolicited bulk messages via WhatsApp or SMS, or violating Indian TRAI guidelines on promotional calling.</li>
          <li>Sending message templates promoting adult content, gambling, illegal activities, weapons, or hate speech.</li>
          <li>Phishing, malware distribution, tracking individual users without consent, or collecting sensitive personal data like credit card numbers or biometric information.</li>
          <li>Circumventing API limits, attempting reverse-engineering of CRM algorithms, or introducing denial of service scripts to our servers.</li>
        </ul>
      </section>

      <section id="disclaimer-liability" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">9. Limitation of Liability & Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. NEETICRM DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
        </p>
        <p>
          IN NO EVENT SHALL NEETICRM&rsquo;S AGGREGATE LIABILITY EXCEED THE TOTAL FEES PAID BY YOU TO NEETICRM IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE CLAIM. NEETICRM IS NOT LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR LEADS.
        </p>
      </section>

      <section id="governing-law" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">10. Governing Law & Dispute Resolution</h2>
        <p>
          <strong>Governing Law:</strong> These Terms and any dispute arising out of or in connection with them shall be governed by, and construed in accordance with, the laws of India, without regard to conflict of law principles.
        </p>
        <p>
          <strong>Arbitration:</strong> Any dispute, controversy, or claim arising out of these Terms, including the validity, invalidity, breach, or termination thereof, shall be referred to and finally resolved by binding arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be <strong>Mumbai, Maharashtra, India</strong>. The arbitration proceedings shall be conducted in English, and the tribunal shall consist of a sole arbitrator appointed by mutual consent.
        </p>
        <p>
          <strong>Jurisdiction:</strong> Subject to arbitration clauses, the courts in <strong>Mumbai, India</strong> shall have exclusive jurisdiction over all litigation matters.
        </p>
      </section>

      <section id="contact" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">11. Contact Information</h2>
        <p>
          If you wish to contact NeetiCRM regarding these Terms of Service or to raise a compliance dispute, please email:
        </p>
        <p className="font-mono text-sm text-porcelain bg-white/5 p-4 rounded-xl max-w-sm border border-white/10">
          NeetiCRM Legal Counsel<br />
          Email: legal@neeticrm.com<br />
          Mumbai, India
        </p>
      </section>
    </LegalLayout>
  );
}
