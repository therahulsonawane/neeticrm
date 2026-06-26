import { LegalLayout, PlainEnglishBox } from "@/components/layout/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Level Agreement (SLA) | NeetiCRM",
  description: "Read the Service Level Agreement (SLA) for NeetiCRM. Review our uptime targets, maintenance windows, and support response times.",
};

const SECTIONS = [
  { id: "uptime-target", label: "1. Uptime Commitment" },
  { id: "maintenance", label: "2. Maintenance Windows" },
  { id: "support-response", label: "3. Incident Severity & Response Times" },
  { id: "service-credits", label: "4. Service Credits" },
  { id: "exclusions", label: "5. SLA Exclusions" },
];

export default function ServiceLevelAgreement() {
  return (
    <LegalLayout
      title="Service Level Agreement (SLA)"
      lastUpdated="June 26, 2026"
      sections={SECTIONS}
    >
      <section id="uptime-target" className="space-y-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">1. Uptime Commitment</h2>
        <p>
          NeetiCRM targets a service availability rating of <strong>99.9%</strong> during any calendar month.
        </p>
        <p>
          Uptime is defined as the availability of our core web application dashboard, webhook intake endpoints, automation engines, and database access. System availability is monitored continuously using automated diagnostic checkers.
        </p>
      </section>

      <section id="maintenance" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">2. Maintenance Windows</h2>
        <p>
          To maintain database safety and update system dependencies, we run periodic maintenance.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Scheduled Maintenance:</strong> We perform major system upgrades during off-peak hours (typically 2:00 AM to 5:00 AM Indian Standard Time). We notify customers at least forty-eight (48) hours in advance of any maintenance expected to cause system access interruptions.</li>
          <li><strong>Emergency Maintenance:</strong> If critical security patches or infrastructure failures require immediate action, we may perform emergency maintenance without notice. We will post real-time status updates on our status portal.</li>
        </ul>
        <p>
          Scheduled and emergency maintenance downtime is excluded from monthly uptime calculations.
        </p>
      </section>

      <PlainEnglishBox>
        We aim for 99.9% uptime. If we need to perform routine database maintenance, we do it in the middle of the night (India Time) and tell you in advance. Maintenance downtime does not count against our uptime target.
      </PlainEnglishBox>

      <section id="support-response" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">3. Support Hours & Response Times</h2>
        <p>
          NeetiCRM support operates from <strong>9:30 AM to 6:30 PM (IST)</strong>, Monday through Saturday.
        </p>
        <p>
          Incidents reported to our support desk are categorized by severity. We respond within the following targeted timelines:
        </p>
        <div className="overflow-x-auto my-4 border border-white/10 rounded-xl">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="bg-white/5 text-porcelain font-clash">
              <tr>
                <th className="px-4 py-3 text-left">Severity</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Target Response</th>
                <th className="px-4 py-3 text-left">Target Resolution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-4 py-3 font-semibold text-danger">P1 - Critical</td>
                <td className="px-4 py-3">Entire platform is down, or core database is inaccessible for all users.</td>
                <td className="px-4 py-3">&lt; 1 Hour</td>
                <td className="px-4 py-3">&lt; 4 Hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-amber-signal">P2 - High</td>
                <td className="px-4 py-3">Core features (like WhatsApp flows or AI voice dialers) are failing. No workaround is available.</td>
                <td className="px-4 py-3">&lt; 4 Hours</td>
                <td className="px-4 py-3">&lt; 12 Hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-porcelain">P3 - Medium</td>
                <td className="px-4 py-3">Minor features are failing, or a workaround exists for the issue.</td>
                <td className="px-4 py-3">&lt; 12 Hours</td>
                <td className="px-4 py-3">&lt; 24 Hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-custom">P4 - Low</td>
                <td className="px-4 py-3">General inquiries, cosmetic UI bugs, or feature request updates.</td>
                <td className="px-4 py-3">&lt; 24 Hours</td>
                <td className="px-4 py-3">Next release cycle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="service-credits" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">4. Service Credits</h2>
        <p>
          If we fail to meet the 99.9% uptime commitment during any billing month, you are eligible to claim a Service Credit. Service Credits are applied as a discount on your next monthly renewal invoice.
        </p>
        <div className="overflow-x-auto my-4 border border-white/10 rounded-xl">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="bg-white/5 text-porcelain font-clash">
              <tr>
                <th className="px-4 py-3 text-left">Monthly Uptime Tier</th>
                <th className="px-4 py-3 text-left">Service Credit Percentage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-4 py-3 font-semibold">&gt;= 99.0% and &lt; 99.9%</td>
                <td className="px-4 py-3 text-amber-signal">10% of monthly bill</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">&gt;= 95.0% and &lt; 99.0%</td>
                <td className="px-4 py-3 text-amber-signal">25% of monthly bill</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">&lt; 95.0%</td>
                <td className="px-4 py-3 text-amber-signal">50% of monthly bill</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          To claim a credit, you must email <a href="mailto:billing@neeticrm.com" className="text-amber-signal hover:underline">billing@neeticrm.com</a> within fifteen (15) days of the end of the billing month in which the uptime target was missed.
        </p>
      </section>

      <PlainEnglishBox>
        If our platform uptime drops below 99.9% in any billing month, you can request a partial refund on your next bill (up to 50% discount if uptime drops below 95%). Just email billing within 15 days of the month-end.
      </PlainEnglishBox>

      <section id="exclusions" className="space-y-4 pt-4">
        <h2 className="font-clash text-2xl font-semibold text-porcelain">5. SLA Exclusions</h2>
        <p>
          This SLA and uptime commitment do not apply to performance issues or downtime resulting from:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Scheduled database maintenance.</li>
          <li>Outages or latency in third-party services, including Meta APIs, WhatsApp Cloud API nodes, OpenAI LLM servers, or SMS gateway operators.</li>
          <li>Suspension of your account due to billing failure or AUP violations.</li>
          <li>Force Majeure events, internet service provider outages, or network routing issues outside our direct cloud architecture.</li>
        </ul>
      </section>
    </LegalLayout>
  );
}
