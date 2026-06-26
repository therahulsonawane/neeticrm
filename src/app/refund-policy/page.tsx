import { LegalLayout, PlainEnglishBox } from "@/components/layout/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | NeetiCRM",
  description: "Read our Refund and Cancellation Policy. Understand subscription billing, monthly/annual plans, and trial policies.",
};

const SECTIONS = [
  { id: "subscription-billing", label: "1. Subscription Billing" },
  { id: "trial-policy", label: "2. Free Trial Policy" },
  { id: "refund-eligibility", label: "3. Refund Eligibility" },
  { id: "cancellation-process", label: "4. Cancellation Process" },
  { id: "failed-payments", label: "5. Failed Payments & Account Suspension" },
  { id: "contact", label: "6. Billing Contact" },
];

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      lastUpdated="June 26, 2026"
      sections={SECTIONS}
    >
      <section id="subscription-billing" className="space-y-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">1. Subscription Billing</h2>
        <p>
          NeetiCRM offers subscription-based access plans billed on a recurring monthly or annual cycle.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Monthly Plans:</strong> Billed every 30 days starting from your date of registration or upgrade. You are charged in advance for the upcoming month of service.</li>
          <li><strong>Annual Plans:</strong> Billed once every 365 days in advance. Annual plans are sold at a discounted rate relative to the monthly plan.</li>
        </ul>
        <p>
          Billing includes the flat-rate fee for your selected plan tier. In addition, GST taxes (18% for Indian businesses) are applied during checkout. Usage fees (such as overages on AI tokens or custom SMS message integrations) will be charged to your active payment card at the end of the billing cycle.
        </p>
      </section>

      <section id="trial-policy" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">2. Free Trial Policy</h2>
        <p>
          We may offer a free trial period for new accounts to explore NeetiCRM features (typically 7 or 14 days).
        </p>
        <p>
          To prevent abuse, we may require a valid credit card or payment authorization to activate a free trial. You will not be charged during the trial period. If you do not cancel your subscription before the trial period expires, your account will automatically convert to the selected paid subscription plan, and your card will be billed for the first billing cycle.
        </p>
      </section>

      <PlainEnglishBox>
        If you sign up for a free trial, cancel before it ends if you do not wish to continue. If the trial ends and you haven't cancelled, the system will automatically charge your card for the upcoming month or year.
      </PlainEnglishBox>

      <section id="refund-eligibility" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">3. Refund Eligibility</h2>
        <p>
          <strong>All Payments are Non-Refundable:</strong> Due to the digital nature of NeetiCRM and the immediate infrastructure costs we incur upon account activation (including provisioning server space, executing AI voice/qualification models, and paying Meta API conversation charges), <strong>we do not offer refunds, credits, or pro-rated adjustments</strong> for:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Partial months of service.</li>
          <li>Unused lead quotas, WhatsApp message limits, or AI call minutes.</li>
          <li>Switching from a higher-priced plan to a lower-priced plan mid-cycle.</li>
          <li>Downgrades from annual billing to monthly billing.</li>
          <li>Account suspension or termination resulting from violation of our Acceptable Use Policy.</li>
        </ul>
        <p>
          <strong>Exceptions:</strong> In the event that NeetiCRM experiences an extended, unscheduled service outage exceeding forty-eight (48) consecutive hours that prevents you from using the core CRM interface, we may, at our sole discretion, issue a pro-rated credit or refund for the affected days.
        </p>
      </section>

      <section id="cancellation-process" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">4. Cancellation Process</h2>
        <p>
          You may cancel your NeetiCRM subscription at any time. To cancel, please:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Log in to your NeetiCRM dashboard.</li>
          <li>Navigate to <strong>Settings &gt; Billing &amp; Subscriptions</strong>.</li>
          <li>Click on <strong>Cancel Subscription</strong> and confirm the prompt.</li>
        </ol>
        <p>
          Alternatively, you can email our billing support team at <a href="mailto:billing@neeticrm.com" className="text-amber-signal hover:underline">billing@neeticrm.com</a> at least three (3) business days prior to your next renewal date.
        </p>
        <p>
          Upon cancellation, your subscription will remain active until the end of your current paid billing cycle. No further recurring charges will be made.
        </p>
      </section>

      <PlainEnglishBox>
        You can cancel your subscription at any time through your dashboard settings. You will retain full access until the end of your current billing period, but no refunds will be issued for the remaining days.
      </PlainEnglishBox>

      <section id="failed-payments" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">5. Failed Payments & Account Suspension</h2>
        <p>
          If a renewal payment fails due to card expiration, insufficient funds, or network errors:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Our payment systems will automatically retry the card three (3) times over a seven (7) day period.</li>
          <li>During this grace period, you will receive email alerts prompting you to update your billing details.</li>
          <li>If payment is not completed after seven (7) days, your account will be suspended. Automated qualification calls, SMS sequences, and WhatsApp campaigns will stop firing.</li>
          <li>If payment remains outstanding after thirty (30) days, your account data will be marked for archival deletion in accordance with our data retention schedule.</li>
        </ul>
      </section>

      <section id="contact" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">6. Billing Contact</h2>
        <p>
          For questions, invoice requests, or billing dispute claims, please contact our billing department:
        </p>
        <p className="font-mono text-sm text-porcelain bg-white/5 p-4 rounded-xl max-w-sm border border-white/10">
          NeetiCRM Billing Support<br />
          Email: billing@neeticrm.com<br />
          Mumbai, India
        </p>
      </section>
    </LegalLayout>
  );
}
