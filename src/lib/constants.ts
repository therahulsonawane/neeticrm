// ── Channel Definitions ──
export type ChannelType = "whatsapp" | "email" | "sms" | "voice" | "meta" | "crm" | "sales";

export const CHANNEL_COLORS: Record<string, string> = {
  whatsapp: "#25D366",
  email: "#5B6EF5",
  sms: "#B26EFF",
  voice: "#FF5C7A",
  meta: "#1877F2",
  crm: "#FF8A3D",
  sales: "#FF8A3D",
};

export const CHANNEL_LABELS: Record<string, string> = {
  whatsapp: "WhatsApp",
  email: "Email",
  sms: "SMS",
  voice: "AI Call",
  meta: "Meta Ads",
  crm: "CRM",
  sales: "Sales",
};

// ── Hero Flow Nodes ──
export const HERO_FLOW_NODES = [
  { id: "meta-ad", label: "Meta Lead Ad", channel: "meta" },
  { id: "ai-call", label: "AI Call", channel: "voice" },
  { id: "whatsapp", label: "WhatsApp", channel: "whatsapp" },
  { id: "sms", label: "SMS", channel: "sms" },
  { id: "email", label: "Email", channel: "email" },
  { id: "sales-team", label: "Sales Team", channel: "sales" },
  { id: "won-deal", label: "Won Deal", channel: "crm" },
] as const;

// ── How It Works Steps ──
export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Capture leads from everywhere",
    description:
      "Facebook & Instagram Lead Ads, website forms, WhatsApp, SMS campaigns, manual entry — one inbox for all of it.",
    channel: "meta",
  },
  {
    number: "02",
    title: "AI responds in seconds, not hours",
    description:
      "The moment a lead lands, AI calls them, asks the questions that matter — intent, budget, timeline — and logs the answers automatically.",
    channel: "voice",
  },
  {
    number: "03",
    title: "Multi-channel follow-up runs without a human",
    description:
      "WhatsApp, email, SMS, and call tasks fire on schedule. No lead sits untouched.",
    channel: "whatsapp",
  },
  {
    number: "04",
    title: "Sales gets the leads worth their time",
    description:
      "High-intent leads route straight to a rep, with the call recording, AI summary, lead score, and full conversation history attached.",
    channel: "sales",
  },
  {
    number: "05",
    title: "You see exactly where revenue comes from",
    description:
      "Every opportunity tracked through the pipeline, mapped back to the campaign that created it.",
    channel: "crm",
  },
] as const;

// ── Feature Cards ──
export const FEATURES = [
  {
    title: "AI Lead Qualification",
    description:
      "AI calls every new lead and scores them on intent, budget, timeline, and interest — so reps spend time on people ready to buy, not on data entry.",
    channel: "voice",
    icon: "🤖",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Build automated WhatsApp journeys — welcome message → brochure → case study → meeting booked — that run themselves.",
    channel: "whatsapp",
    icon: "💬",
  },
  {
    title: "SMS Automation",
    description:
      "For the messages that have to be seen: appointment reminders, follow-ups, payment reminders, re-engagement.",
    channel: "sms",
    icon: "📱",
  },
  {
    title: "Email Automation",
    description:
      "Sequences anyone on the team can build without touching code — opens, clicks, and replies tracked automatically.",
    channel: "email",
    icon: "📧",
  },
  {
    title: "Unified Inbox",
    description:
      "WhatsApp, email, SMS, calls, notes, and tasks in one thread. No app-switching to find what was said.",
    channel: "crm",
    icon: "📥",
  },
  {
    title: "Visual Automation Builder",
    description:
      "Lead Created → Send WhatsApp → Wait 1 Day → Send Email → Wait 2 Days → Send SMS → Assign Rep — built by dragging nodes, not writing code.",
    channel: "crm",
    icon: "⚡",
  },
] as const;

// ── WhatsApp Flow Builder Data ──
export interface FlowNodeData {
  id: string;
  label: string;
  type: "trigger" | "message" | "wait" | "condition" | "action";
  channel?: string;
  x: number;
  y: number;
  children?: string[];
  phonePreview?: {
    sender: string;
    messages: { from: "bot" | "user"; text: string }[];
  };
}

export const WHATSAPP_FLOW_NODES: FlowNodeData[] = [
  {
    id: "lead-created",
    label: "Lead Created",
    type: "trigger",
    channel: "meta",
    x: 50,
    y: 5,
    children: ["welcome-msg"],
    phonePreview: {
      sender: "NeetiCRM Bot",
      messages: [
        { from: "bot", text: "🔔 New lead received from Facebook Ad!" },
      ],
    },
  },
  {
    id: "welcome-msg",
    label: "Welcome Message",
    type: "message",
    channel: "whatsapp",
    x: 50,
    y: 18,
    children: ["wait-1hr"],
    phonePreview: {
      sender: "NeetiCRM Bot",
      messages: [
        {
          from: "bot",
          text: "Hi! 👋 Thanks for your interest. I'm from NeetiCRM — let me share some details about our platform.",
        },
        { from: "user", text: "Sure, tell me more!" },
      ],
    },
  },
  {
    id: "wait-1hr",
    label: "Wait 1 Hour",
    type: "wait",
    x: 50,
    y: 31,
    children: ["did-reply"],
    phonePreview: {
      sender: "NeetiCRM Bot",
      messages: [
        { from: "bot", text: "⏳ Waiting 1 hour for response..." },
      ],
    },
  },
  {
    id: "did-reply",
    label: "Did They Reply?",
    type: "condition",
    x: 50,
    y: 44,
    children: ["send-brochure", "send-reminder"],
    phonePreview: {
      sender: "NeetiCRM Bot",
      messages: [
        { from: "bot", text: "🔍 Checking for customer reply..." },
      ],
    },
  },
  {
    id: "send-brochure",
    label: "Send Brochure",
    type: "message",
    channel: "whatsapp",
    x: 25,
    y: 60,
    children: ["assign-agent-yes"],
    phonePreview: {
      sender: "NeetiCRM Bot",
      messages: [
        { from: "user", text: "Yes, interested!" },
        {
          from: "bot",
          text: "Great! 📄 Here's our product brochure with all the features and pricing details.",
        },
      ],
    },
  },
  {
    id: "send-reminder",
    label: "Send Reminder",
    type: "message",
    channel: "whatsapp",
    x: 75,
    y: 60,
    children: ["send-offer"],
    phonePreview: {
      sender: "NeetiCRM Bot",
      messages: [
        {
          from: "bot",
          text: "Hey! 👋 Just following up — did you get a chance to check out our platform? Happy to answer any questions.",
        },
      ],
    },
  },
  {
    id: "assign-agent-yes",
    label: "Assign Agent",
    type: "action",
    channel: "sales",
    x: 25,
    y: 76,
    children: [],
    phonePreview: {
      sender: "NeetiCRM Bot",
      messages: [
        {
          from: "bot",
          text: "✅ I'm connecting you with our sales specialist, Priya. She'll call you shortly!",
        },
        { from: "user", text: "Perfect, thanks!" },
      ],
    },
  },
  {
    id: "send-offer",
    label: "Send Offer",
    type: "message",
    channel: "sms",
    x: 75,
    y: 76,
    children: ["assign-agent-no"],
    phonePreview: {
      sender: "NeetiCRM Bot",
      messages: [
        {
          from: "bot",
          text: "🎁 Special offer: Start your free trial today and get 30 days of premium features!",
        },
      ],
    },
  },
  {
    id: "assign-agent-no",
    label: "Assign Agent",
    type: "action",
    channel: "sales",
    x: 75,
    y: 90,
    children: [],
    phonePreview: {
      sender: "NeetiCRM Bot",
      messages: [
        {
          from: "bot",
          text: "📞 Our team member Rahul will give you a call to discuss this special offer.",
        },
      ],
    },
  },
];

// ── Example Flows for WhatsApp Section ──
export const EXAMPLE_FLOWS = [
  {
    title: "Lead Nurturing Flow",
    steps: [
      "Lead Created",
      "Welcome Message",
      "Product Brochure",
      "Case Study",
      "Book Meeting",
    ],
    industries: "Real estate, education, healthcare",
    channel: "whatsapp",
  },
  {
    title: "Appointment Reminder Flow",
    steps: [
      "Appointment Booked",
      "24hr Reminder",
      "2hr Reminder",
      "Follow-Up",
    ],
    industries: "Clinics, consultants, service businesses",
    channel: "sms",
  },
  {
    title: "Re-Engagement Flow",
    steps: [
      "No Reply for 7 Days",
      "Reminder",
      "Offer",
      "Agent Callback",
    ],
    industries: "Agencies, insurance, solar",
    channel: "voice",
  },
] as const;

// ── Multi-Channel Flow ──
export const MULTI_CHANNEL_FLOW = [
  { label: "Lead Created", channel: "meta" },
  { label: "WhatsApp Message", channel: "whatsapp" },
  { label: "Wait 1 Day", channel: "crm" },
  { label: "Email Follow-Up", channel: "email" },
  { label: "Wait 2 Days", channel: "crm" },
  { label: "SMS Reminder", channel: "sms" },
  { label: "Assign Rep", channel: "sales" },
  { label: "Create Task", channel: "crm" },
] as const;

// ── Comparison Table ──
export const COMPARISON_DATA = [
  {
    capability: "Lead capture",
    traditional: "check",
    neeticrm: "check",
  },
  {
    capability: "WhatsApp inbox",
    traditional: "Limited",
    neeticrm: "check",
  },
  {
    capability: "SMS automation",
    traditional: "Needs a separate tool",
    neeticrm: "check",
    neeticrmNote: "Built in",
  },
  {
    capability: "Email automation",
    traditional: "Needs a separate tool",
    neeticrm: "check",
    neeticrmNote: "Built in",
  },
  {
    capability: "AI calling",
    traditional: "cross",
    neeticrm: "check",
  },
  {
    capability: "Lead qualification",
    traditional: "Manual",
    neeticrm: "AI-powered",
  },
  {
    capability: "Meta Conversion API",
    traditional: "Rare",
    neeticrm: "check",
  },
  {
    capability: "Multi-channel automation",
    traditional: "Limited",
    neeticrm: "check",
  },
  {
    capability: "Conversion tracking",
    traditional: "Basic",
    neeticrm: "Advanced",
  },
] as const;

// ── Industries ──
export const INDUSTRIES = [
  {
    name: "Real Estate",
    useCases: "Property inquiries, site-visit booking",
    emoji: "🏠",
  },
  {
    name: "Education",
    useCases: "Admissions, counseling",
    emoji: "🎓",
  },
  {
    name: "Healthcare",
    useCases: "Patient acquisition, scheduling",
    emoji: "🏥",
  },
  {
    name: "Insurance",
    useCases: "Policy inquiries, renewals",
    emoji: "🛡️",
  },
  {
    name: "Solar",
    useCases: "Qualification, consultation booking",
    emoji: "☀️",
  },
  {
    name: "Agencies",
    useCases: "Client lead management at scale",
    emoji: "📊",
  },
  {
    name: "Automotive",
    useCases: "Test-drive and dealership booking",
    emoji: "🚗",
  },
] as const;

// ── Testimonials ──
export const TESTIMONIALS = [
  {
    quote: "Our response time dropped from hours to seconds.",
    role: "Sales Director",
    company: "Real Estate Firm",
  },
  {
    quote:
      "Follow-ups stopped depending on someone remembering to send them.",
    role: "Marketing Head",
    company: "Education Group",
  },
  {
    quote: "Sales only talks to people who are actually ready.",
    role: "CEO",
    company: "Insurance Agency",
  },
] as const;

// ── FAQ Data ──
export const FAQ_DATA = [
  {
    question: 'NeetiCRM has "CRM" in the name — is it just a CRM?',
    answer:
      "The name is short for the platform's roots, but the product goes further than a CRM. A CRM stores lead data. NeetiCRM also calls, qualifies, and follows up with leads automatically across WhatsApp, SMS, and email — the engagement layer most CRMs leave out.",
  },
  {
    question: "How fast does NeetiCRM respond to a new lead?",
    answer:
      "Under 30 seconds. The moment a lead arrives — from a Meta ad, website form, or WhatsApp — an AI call goes out automatically.",
  },
  {
    question:
      "Does NeetiCRM work with Meta (Facebook/Instagram) Lead Ads?",
    answer:
      "Yes. Leads sync in real time, and conversion data feeds back to Meta automatically through the Conversion API to improve ad targeting.",
  },
  {
    question: "Can I build WhatsApp automations without coding?",
    answer:
      "Yes. The visual flow builder uses drag-and-drop nodes — message, wait, condition, assign — with branching logic based on customer replies.",
  },
  {
    question: "What channels does NeetiCRM automate?",
    answer:
      "WhatsApp, SMS, email, and AI voice calls, combined into a single automation per lead — not separate tools per channel.",
  },
] as const;

// ── Navigation Links ──
export const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "WhatsApp Flows", href: "/#whatsapp-flow-builder" },
  { label: "Compare", href: "/#comparison" },
  { label: "FAQ", href: "/#faq" },
] as const;

// ── Proof Strip Items ──
export const PROOF_ITEMS = [
  "Responds in under 30 seconds",
  "AI-qualified, not just AI-collected",
  "WhatsApp + SMS + Email in one flow",
  "Meta Conversion API built in",
] as const;
