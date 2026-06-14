import React, { useState } from 'react'
import {
  AlertTriangle, TrendingUp, Users, Clock, Target, Shield,
  Factory, FlaskConical, Wrench, ChevronRight, CheckCircle2,
  Circle, AlertCircle, Pause, BarChart3, Zap, ArrowRight,
  Info, Flag, Lock, Star, Award, Radio, Mail, Megaphone,
  DollarSign, TrendingDown, BookOpen, Calendar, ChevronDown,
  Code2, Layers, ListChecks, Filter, Tag
} from 'lucide-react'

// ─── KPIs ────────────────────────────────────────────────────────────────────

const KPIs = [
  {
    label: 'Target Annual Turnover',
    value: '£2.3m – £2.5m',
    sub: '~£200k / month target',
    icon: TrendingUp,
    color: 'text-[#3ecf8e]',
    bg: 'bg-[#3ecf8e]/10',
    border: 'border-[#3ecf8e]/20',
  },
  {
    label: 'Target Retainer Floor',
    value: '£3,000 / mo',
    sub: 'Up from £1,350 average',
    icon: Target,
    color: 'text-[#4f7ef8]',
    bg: 'bg-[#4f7ef8]/10',
    border: 'border-[#4f7ef8]/20',
  },
  {
    label: 'Target Client Retention',
    value: '92%',
    sub: 'Up from 89% current',
    icon: Users,
    color: 'text-[#a78bfa]',
    bg: 'bg-[#a78bfa]/10',
    border: 'border-[#a78bfa]/20',
  },
  {
    label: 'Monthly Capacity Cap',
    value: '42 hrs max',
    sub: 'Hard ceiling — no exceptions',
    icon: Clock,
    color: 'text-[#f5a623]',
    bg: 'bg-[#f5a623]/10',
    border: 'border-[#f5a623]/20',
  },
  {
    label: 'Target Gross Margin',
    value: '64%',
    sub: '35% net margin target',
    icon: DollarSign,
    color: 'text-[#3ecf8e]',
    bg: 'bg-[#3ecf8e]/10',
    border: 'border-[#3ecf8e]/20',
  },
  {
    label: 'Revenue / Employee',
    value: '£85k',
    sub: '£29k profit per employee',
    icon: Award,
    color: 'text-[#4f7ef8]',
    bg: 'bg-[#4f7ef8]/10',
    border: 'border-[#4f7ef8]/20',
  },
  {
    label: 'New Retainer Clients',
    value: '5–7',
    sub: '£10k–£20k+/mo each',
    icon: Star,
    color: 'text-[#a78bfa]',
    bg: 'bg-[#a78bfa]/10',
    border: 'border-[#a78bfa]/20',
  },
  {
    label: 'Cash Reserve Target',
    value: '£250k+',
    sub: '4 months overhead buffer',
    icon: TrendingDown,
    color: 'text-[#f5a623]',
    bg: 'bg-[#f5a623]/10',
    border: 'border-[#f5a623]/20',
  },
]

// ─── SECTORS ─────────────────────────────────────────────────────────────────

const SECTORS = [
  { id: 'defense', label: 'Defence', icon: Shield },
  { id: 'chemical', label: 'Chemical', icon: FlaskConical },
  { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
  { id: 'engineering', label: 'Engineering', icon: Wrench },
]

const SECTOR_DETAILS = {
  defense: {
    title: 'Defence Sector Guardrails',
    color: 'text-[#4f7ef8]',
    accentBg: 'bg-[#4f7ef8]/8',
    accentBorder: 'border-[#4f7ef8]/25',
    credential: 'Make UK Defence',
    credentialNote: 'Membership is a critical trust signal — reference on all sector collateral and proposals.',
    points: [
      { label: 'Long Career Lifespans', detail: 'Deep institutional loyalty. Messaging must respect hierarchy, seniority, and experience. Do not use startup or disruptive language.' },
      { label: 'Data & Spec Heavy', detail: 'Decision-makers demand precise technical specifications, compliance documentation and data over marketing language. Zero fluff.' },
      { label: 'Extremely Cautious', detail: 'Much happens behind closed doors. Digital footprints are viewed with suspicion. Build trust incrementally — never push for fast commitment.' },
      { label: 'Pre-Tender Influence', detail: '"Requirement Shaping" — our marketing must position clients firmly in the minds of procurement officers before an RFP is even published. ABM focus.' },
      { label: 'Data Sovereignty', detail: 'Emphasise understanding of data sovereignty and secure communication channels. NDAs limit case study specifics — articulate ROI without naming names.' },
      { label: 'Make UK Defence', detail: 'Credentials via Make UK Defence membership are non-negotiable trust signals. Reference prominently in all sector collateral, bids, and web pages.' },
    ],
    demographic: 'Highly cautious, male-dominated, slow to trust. Traditional senior management dominant. Defence contracts take years — focus on long-cycle nurture, not quick conversions.',
    contentFocus: 'Factual, specification-heavy, zero fluff. Explicitly highlight data sovereignty and compliance credentials.',
  },
  chemical: {
    title: 'Chemical Sector Guardrails',
    color: 'text-[#3ecf8e]',
    accentBg: 'bg-[#3ecf8e]/8',
    accentBorder: 'border-[#3ecf8e]/25',
    credential: 'Chemical Business Association',
    credentialNote: 'CBA links and membership signals are key trust validators — embed in sector pages and all proposals.',
    points: [
      { label: 'Regulatory Compliance First', detail: 'Strict adherence to REACH, COSHH, and sector-specific standards. All content must signal compliance awareness — never make vague regulatory claims.' },
      { label: 'Chemical Business Association', detail: 'CBA links and membership are key trust validators. The UK market is slow but surging in US/EU — content must reflect both landscapes.' },
      { label: 'Anti-Greenwashing', detail: 'Buyers are highly savvy. Vague sustainability claims will actively damage credibility. Use only verified data, certification references, and auditable claims.' },
      { label: 'Scientific Authority', detail: 'Content must demonstrate fluency in chemical manufacturing processes, not surface marketing. Write at the level of chemists and scientists.' },
      { label: 'Complex Applications', detail: 'Communicating complex chemical applications to a global audience is a core buyer challenge — position EMD as the agency that understands this niche.' },
    ],
    demographic: 'Technical procurement managers and compliance officers. Gen Z researchers now conducting first-pass supplier vetting digitally — need self-service content paths alongside deep technical resources.',
    contentFocus: 'Address greenwashing, strict regulatory compliance, and complex scientific applications. Use precise, formal, authoritative language.',
  },
  manufacturing: {
    title: 'Manufacturing Sector Guardrails',
    color: 'text-[#f5a623]',
    accentBg: 'bg-[#f5a623]/8',
    accentBorder: 'border-[#f5a623]/25',
    credential: null,
    credentialNote: null,
    points: [
      { label: 'Speed to Market', detail: 'Beating competitors to orders is the primary KPI. All messaging must be framed around speed-to-market, order conversion, and reducing sales cycle length.' },
      { label: 'Global Supply Chain Pressure', detail: "Buyers operate under constant supply chain pressure — position EMD's clients as reliable, proven, UK-based alternatives to global competitors." },
      { label: 'ROI Language Only', detail: 'Every investment, including marketing, is measured against tangible business outcomes. Lead with cost reduction, lead time, and capacity metrics — not narrative.' },
      { label: 'Skilled Talent Attraction', detail: 'Digital channels are now essential for recruiting top engineering and manufacturing talent. Frame digital presence as a competitive advantage for hiring.' },
      { label: 'Digital Self-Service', detail: 'Younger buyers research independently. Calculators, comparison tools, gated white papers, and interactive content are essential for capturing pre-sales intent.' },
    ],
    demographic: 'Bridge required: traditional ops managers (60s) alongside Millennial procurement leads who expect digital-first self-directed journeys. Both must be served simultaneously.',
    contentFocus: 'Showcase clear metrics on how EMD reduces the B2B sales cycle length and turns site traffic into Sales Qualified Leads (SQLs).',
  },
  engineering: {
    title: 'Engineering Sector Guardrails',
    color: 'text-[#f04040]',
    accentBg: 'bg-[#f04040]/8',
    accentBorder: 'border-[#f04040]/25',
    credential: null,
    credentialNote: null,
    points: [
      { label: 'Technical Credibility', detail: 'Engineers buy from engineers. Content must demonstrate deep domain knowledge — avoid generic B2B marketing tropes or buzzwords without examples.' },
      { label: 'Problem-Solution Framing', detail: 'Frame all content around specific engineering challenges: tolerances, certifications, failure modes, standards compliance. Spec-depth is a qualifier.' },
      { label: 'Long Sales Cycles', detail: 'Need to nurture leads over months or years. Provide rich ongoing resources — white papers, technical FAQs, video walkthroughs — to keep EMD clients top of mind.' },
      { label: 'Data & Specifications', detail: 'Content must be rich with data, performance metrics, and technical details. Infographics and interactive elements for complex info are highly effective.' },
      { label: 'Peer Validation', detail: 'Case studies and testimonials from identifiable engineering peers carry outsized influence. Metrics: reduction in sales cycle, increase in qualified inbound inquiries.' },
    ],
    demographic: 'Increasingly Millennial/Gen Z engineers conducting deep digital research paths before any contact with sales. Older senior engineers and MDs still approve final spend.',
    contentFocus: 'Data-rich, spec-heavy, peer-validated content. Focus on shortening buyer research journeys with structured, easy-to-find technical information.',
  },
}

// ─── TASKS ───────────────────────────────────────────────────────────────────

const TASKS = {
  june: [
    {
      id: 't1',
      type: 'SEO / AIO',
      typeColor: 'bg-[#4f7ef8]/15 text-[#4f7ef8]',
      title: 'Merge thin blogs into information pillar pages & embed advanced schema markup',
      detail: 'Consolidate thin, similar blog posts into informationally viable pillar pages. Build out advanced schema markup (FAQ, Article, HowTo) across all merged content. Integrate conversational prompt research to boost SEMrush AI score (target: 10 by September — currently 0). Add TL;DR summaries to major posts for SGE/Perplexity crawlers.',
      assigned: ['James Roberts', 'Sarah'],
      budget: '13 hrs',
      budgetColor: 'text-[#3ecf8e]',
      status: 'in-progress',
      deadline: null,
    },
    {
      id: 't2',
      type: 'UX / Copy',
      typeColor: 'bg-[#a78bfa]/15 text-[#a78bfa]',
      title: 'Copy overhaul: Home & Sector Pages, Z→S spelling, Outsourced vs In-house Cost Calculator',
      detail: 'Complete text/copy overhaul of Home and all four Sector pages. Resolve narrative disconnect between Pain Points and Results on the Home Page. Fix all Z→S British English spelling errors. Finalise browser-based Outsourced vs In-house marketing cost-comparison calculator (using Northpoint framework logic). DEADLINE: Copy signed off by June 24th for Amanda review on return.',
      assigned: ['Sarah', 'Tara'],
      budget: '12 hrs',
      budgetColor: 'text-[#3ecf8e]',
      status: 'in-progress',
      deadline: 'June 24th',
    },
    {
      id: 't3',
      type: 'CRM',
      typeColor: 'bg-[#3ecf8e]/15 text-[#3ecf8e]',
      title: 'HubSpot full audit, tag cleanup & Long-Cycle Value Welcome Sequences',
      detail: 'Audit full HubSpot infrastructure. Clean up contact tags and list segmentation — separate clearly by four key target sectors ready for July exhibition leads. Move away from generic newsletters toward automated Long-Cycle Value "Welcome" and drip sequences. Build bespoke landing pages and user journeys per sector ICP (Defence buyer ≠ Chemical buyer funnel).',
      assigned: ['Matt'],
      budget: '10 hrs',
      budgetColor: 'text-[#3ecf8e]',
      status: 'pending',
      deadline: null,
    },
    {
      id: 't4',
      type: 'Strategy',
      typeColor: 'bg-[#f5a623]/15 text-[#f5a623]',
      title: 'Complete Delivery Matrix: add Design & Development tracking tabs',
      detail: 'James Alderman to coordinate with client team to incorporate Design and Development tracking tabs into the core delivery tracking framework to create a unified output view covering James Evans, Aiden, Matt, and Tristan. Must be complete by July 1st ahead of team Offsite Meeting.',
      assigned: ['James Alderman'],
      budget: null,
      budgetColor: 'text-[#f5a623]',
      status: 'pending',
      deadline: 'July 1st',
    },
  ],
  july: [
    {
      id: 't5',
      type: 'Social',
      typeColor: 'bg-[#f5a623]/15 text-[#f5a623]',
      title: 'Launch Employee Advocacy Programme, LinkedIn Premium targeting & AI-Readiness carousels',
      detail: 'Launch Employee Advocacy Programme with Luke F leading. Activate LinkedIn Premium targeting for B2B sector audiences. Deploy "AI-Readiness" and "How to optimise for AI vs. Google" carousel series. Target: 8,500+ monthly impression floor. LinkedIn engagement KPI: consistently 22%.',
      assigned: ['Luke F'],
      budget: '10 hrs',
      budgetColor: 'text-[#3ecf8e]',
      status: 'pending',
      deadline: 'July 1st',
    },
    {
      id: 't6',
      type: 'CRM',
      typeColor: 'bg-[#3ecf8e]/15 text-[#3ecf8e]',
      title: 'Deploy 20-day email sequence for webinar registrations + embed CTAs across blogs',
      detail: 'Partner with Matt to deploy 20-day email drip sequence driving registrations for live webinar events. Webinar target: 50 sign-ups, 25 attendees. Embed explicit CTAs across all June merged blog content to funnel users into automated sequences. Email KPI: 25% open rate, 10% CTR.',
      assigned: ['Matt', 'James Roberts'],
      budget: null,
      budgetColor: 'text-[#3ecf8e]',
      status: 'pending',
      deadline: null,
    },
    {
      id: 't7',
      type: 'Paid Media',
      typeColor: 'bg-[#f04040]/15 text-[#f04040]',
      title: 'PAUSED — campaigns held until landing page, CTA & HubSpot integrations verified end-to-end',
      detail: 'All paid campaigns remain intentionally paused. Previous setup was generic — being completely overhauled to target: expo data, poorly-performing competitor agencies, and active pipeline prospects. All traffic to direct exclusively to optimised landing pages. Must not re-activate until landing page form paths, CTAs, and HubSpot integrations are verified end-to-end.',
      assigned: ['Matt', 'Aiden'],
      budget: 'Paused',
      budgetColor: 'text-[#f04040]',
      status: 'paused',
      deadline: null,
    },
    {
      id: 't8',
      type: 'Content',
      typeColor: 'bg-[#a78bfa]/15 text-[#a78bfa]',
      title: 'Pivot podcast to ROI case study video/audio — repurpose as sales enablement assets',
      detail: 'Drastically reduce standard podcast production hours. Shift editorial focus entirely to video/audio case studies where existing clients discuss their ROI and business growth with EMD. Repurpose high-value snippets directly into CRM email journeys for prospects with pending proposals. Podcast KPI: 10 downloads within 7 days of release.',
      assigned: ['James Roberts'],
      budget: '10 hrs',
      budgetColor: 'text-[#3ecf8e]',
      status: 'pending',
      deadline: null,
    },
  ],
}

// ─── TEAM ────────────────────────────────────────────────────────────────────

const TEAM = [
  {
    name: 'Sarah',
    role: 'Strategic Copywriter',
    flag: 'Ring-fenced',
    flagColor: 'text-[#f5a623]',
    cardBorder: 'border-[#f5a623]/20',
    cardBg: 'bg-[#f5a623]/5',
    allocation: 85,
    barColor: 'bg-[#f5a623]',
    directive: 'Ring-fenced for strategic copywriting and FAQ creation only. Must be protected from all administrative or routine execution tasks. Minor tasks offloaded to Holly and AI tools.',
    tasks: ['Home & Sector Page Copy', 'FAQ Frameworks (AIO)', 'Blog Pillar Content'],
    deadline: 'Copy deadline: June 24th',
    deadlineColor: 'text-[#f04040]',
    icon: Lock,
    iconColor: 'text-[#f5a623]',
  },
  {
    name: 'James Evans',
    role: 'AI & AIO Lead',
    flag: 'Shifted',
    flagColor: 'text-[#4f7ef8]',
    cardBorder: 'border-[#4f7ef8]/20',
    cardBg: 'bg-[#4f7ef8]/5',
    allocation: 100,
    barColor: 'bg-[#4f7ef8]',
    directive: 'Shifted entirely to internal AI development and AIO (AI Optimisation). Focus: predictive campaign analytics tools, prompt-tracking framework in SEMrush, and AI search visibility. No standard client delivery.',
    tasks: ['AI Tool Development', 'SEMrush AI Score (target: 10)', 'Predictive Analytics'],
    deadline: null,
    deadlineColor: null,
    icon: Zap,
    iconColor: 'text-[#4f7ef8]',
  },
  {
    name: 'Matt',
    role: 'CRM & Paid Media',
    flag: 'Dual Track',
    flagColor: 'text-[#3ecf8e]',
    cardBorder: 'border-[#3ecf8e]/20',
    cardBg: 'bg-[#3ecf8e]/5',
    allocation: 70,
    barColor: 'bg-[#3ecf8e]',
    directive: 'HubSpot infrastructure owner in June. Paid media standby — campaigns paused until all landing pages and CTA paths are verified. Owns CRM segmentation by sector for July exhibition lead intake.',
    tasks: ['HubSpot Audit & Cleanup', 'Welcome Sequences', 'Paid Media (Standby July)'],
    deadline: null,
    deadlineColor: null,
    icon: Target,
    iconColor: 'text-[#3ecf8e]',
  },
  {
    name: 'Luke F',
    role: 'Social & Advocacy',
    flag: 'July Active',
    flagColor: 'text-[#a78bfa]',
    cardBorder: 'border-[#a78bfa]/20',
    cardBg: 'bg-[#a78bfa]/5',
    allocation: 60,
    barColor: 'bg-[#a78bfa]',
    directive: 'Activated from July on a campaign-by-campaign basis. Leads the Employee Advocacy Programme and LinkedIn Premium targeting. Target: 8,500+ monthly impression floor. 22% LinkedIn engagement KPI.',
    tasks: ['Employee Advocacy (EAP)', 'LinkedIn Premium Targeting', 'AI-Readiness Carousels'],
    deadline: 'Activates: July 1st',
    deadlineColor: 'text-[#a78bfa]',
    icon: Megaphone,
    iconColor: 'text-[#a78bfa]',
  },
  {
    name: 'Jim & Tristan',
    role: 'SEO',
    flag: 'SEO',
    flagColor: 'text-[#3ecf8e]',
    cardBorder: 'border-[#3ecf8e]/20',
    cardBg: 'bg-[#3ecf8e]/5',
    allocation: 80,
    barColor: 'bg-[#3ecf8e]',
    directive: 'Responsible for SEO delivery across client accounts and internal EMD content. Executing blog pillar merges, advanced schema markup, and AIO content alignment to hit SEMrush AI score target of 10 by September.',
    tasks: ['Blog Pillar Merges', 'Advanced Schema Markup', 'AIO Content Alignment', 'SEMrush AI Score'],
    deadline: null,
    deadlineColor: null,
    icon: BarChart3,
    iconColor: 'text-[#3ecf8e]',
  },
  {
    name: 'Tara',
    role: 'UX Specialist',
    flag: 'Campaign Only',
    flagColor: 'text-[#888]',
    cardBorder: 'border-white/10',
    cardBg: 'bg-white/3',
    allocation: 40,
    barColor: 'bg-[#888]',
    directive: 'Pulled in on a campaign-by-campaign basis for meticulous CTA and UX detail work. Currently supporting Sarah on Home and Sector page copy overhaul.',
    tasks: ['CTA / UX Detail', 'Sector Page Layout', 'Cost Calculator UX'],
    deadline: null,
    deadlineColor: null,
    icon: BookOpen,
    iconColor: 'text-[#888]',
  },
  {
    name: 'James Alderman',
    role: 'Account Management',
    flag: 'Account Lead',
    flagColor: 'text-[#3ecf8e]',
    cardBorder: 'border-[#3ecf8e]/20',
    cardBg: 'bg-[#3ecf8e]/5',
    allocation: 90,
    barColor: 'bg-[#3ecf8e]',
    directive: 'Account lead for EMD. Coordinating with client team (Jene, Amanda, James Roberts) to drive the 30/60/90 plan. Owns delivery matrix build, recurring revenue pillar, and ensures all agency output aligns to EMD strategic objectives.',
    tasks: ['Client Coordination', 'Delivery Matrix', 'Recurring Revenue', 'Upsell / Cross-sell'],
    deadline: 'Matrix deadline: July 1st',
    deadlineColor: 'text-[#f04040]',
    icon: BarChart3,
    iconColor: 'text-[#3ecf8e]',
  },
]

// ─── CHANNEL MIX ─────────────────────────────────────────────────────────────

const CHANNELS = [
  { label: 'Organic Social', hours: '12–15 hrs', pct: 33, color: 'bg-[#a78bfa]', note: 'Video-first, YouTube + TikTok, educational snippets' },
  { label: 'Paid Media', hours: '8 hrs', pct: 19, color: 'bg-[#f04040]', note: 'PAUSED in June. Expo data + competitor agency targeting in July' },
  { label: 'AIO / AI Search', hours: '6 hrs', pct: 14, color: 'bg-[#4f7ef8]', note: 'SEMrush AI score target: 10 by Sept. TL;DR summaries, schema' },
  { label: 'Podcast', hours: '10 hrs', pct: 24, color: 'bg-[#3ecf8e]', note: '1/month. Pivoting to ROI case study format in July' },
  { label: 'Email / CRM', hours: 'TBC', pct: 10, color: 'bg-[#f5a623]', note: 'Sector-focused sequences. 25% open rate / 10% CTR target' },
]

// ─── MONDAY TASKS ────────────────────────────────────────────────────────────

const MONDAY_TASKS = [
  // ── SEO & AIO ──
  {
    id: 'm1', cat: 'SEO / AIO', owner: ['Jim', 'Tristan'], priority: 'Critical', dev: true, status: 'In Progress',
    title: 'Merge thin & duplicate blog posts into information pillar pages',
    impact: 'Eliminates crawl bloat, consolidates ranking signals, improves AIO visibility immediately.',
    notes: 'Dev to handle 301 redirects from merged URLs. Target: reduce total indexed posts by ~40%.',
  },
  {
    id: 'm2', cat: 'SEO / AIO', owner: ['Jim', 'Tristan'], priority: 'Critical', dev: true, status: 'In Progress',
    title: 'Implement advanced schema markup across all commercial & service pages',
    impact: 'Feeds search engine user agents and AI crawlers (SGE/Perplexity). Direct AIO ranking factor.',
    notes: 'Types: FAQ, Article, HowTo, Service, Organization. Dev to inject via JSON-LD in page <head>.',
  },
  {
    id: 'm3', cat: 'SEO / AIO', owner: ['James Evans'], priority: 'High', dev: false, status: 'To Do',
    title: 'Add TL;DR summary blocks to all major blog and pillar posts',
    impact: 'Directly satisfies AI search crawlers (Perplexity, ChatGPT, SGE). Boosts AIO citation rate.',
    notes: 'Format: collapsible summary box at top of each post. Can be added via CMS block — no full dev required.',
  },
  {
    id: 'm4', cat: 'SEO / AIO', owner: ['James Evans', 'Jim'], priority: 'High', dev: false, status: 'To Do',
    title: 'Integrate conversational prompt research into existing content',
    impact: 'Aligns content with how AI tools surface answers. Target: SEMrush AI score from 0 → 10 by Sept.',
    notes: 'Use SEMrush AI Toolkit to identify prompt gaps. Embed natural language Q&A phrasing into pillar content.',
  },
  {
    id: 'm5', cat: 'SEO / AIO', owner: ['Sarah'], priority: 'Critical', dev: false, status: 'In Progress',
    title: 'Generate strategic FAQ content optimised for AI search visibility',
    impact: 'FAQ schema + conversational language = primary AIO citation trigger for B2B agency queries.',
    notes: 'Sarah to draft before end of June. Must be briefed by James immediately to protect her capacity.',
  },
  {
    id: 'm6', cat: 'SEO / AIO', owner: ['Jim', 'Tristan'], priority: 'Medium', dev: true, status: 'To Do',
    title: 'Audit and fix all internal linking — merged blogs → commercial pillar pages',
    impact: 'Passes link equity from high-traffic informational content to revenue-driving service pages.',
    notes: 'Dev to update href targets in bulk post-merge. Map old blog slugs to new pillar page anchors.',
  },
  {
    id: 'm7', cat: 'SEO / AIO', owner: ['Jim'], priority: 'Medium', dev: false, status: 'To Do',
    title: 'Keyword strategy: target long-tail, high-intent B2B sector queries',
    impact: 'Attracts qualified inbound leads vs generic traffic. Core to the 65% Lead Gen budget focus.',
    notes: 'Examples: "chemical industry digital marketing agency", "B2B manufacturing website design". Map to pillar pages.',
  },

  // ── WEBSITE & COPY ──
  {
    id: 'm8', cat: 'Website & Copy', owner: ['Sarah', 'Tara'], priority: 'Critical', dev: false, status: 'In Progress',
    title: 'Complete copy overhaul of Home page — fix Pain Points / Results narrative disconnect',
    impact: 'Current home page loses visitors at the hero. Fix directly improves conversion from organic and paid traffic.',
    notes: 'Deadline: June 24th for Amanda sign-off. Hero headline must immediately state who EMD helps and the outcome.',
  },
  {
    id: 'm9', cat: 'Website & Copy', owner: ['Sarah'], priority: 'Critical', dev: false, status: 'In Progress',
    title: 'Rewrite all four Sector pages — Defence, Chemical, Manufacturing, Engineering',
    impact: 'Sector pages are the primary conversion surface for B2B buyers researching specialist agencies.',
    notes: 'Tone per sector: Defence = factual/cautious. Chemical = scientific/compliant. Mfg/Eng = competitive/ROI-led.',
  },
  {
    id: 'm10', cat: 'Website & Copy', owner: ['Tara', 'Sarah'], priority: 'High', dev: false, status: 'In Progress',
    title: 'Full site spelling audit — replace all US "Z" spellings with UK "S" equivalents',
    impact: 'Credibility issue for UK B2B buyers. Directly contradicts specialist positioning.',
    notes: 'Scope: entire site. Use find-replace in CMS. Prioritise Home, Sector, Service, and About pages first.',
  },
  {
    id: 'm11', cat: 'Website & Copy', owner: ['Tara'], priority: 'High', dev: true, status: 'To Do',
    title: 'CTA audit and optimisation across all pages — align with HubSpot form paths',
    impact: 'Prerequisite for re-activating paid media in July. Without verified CTAs, paid spend is wasted.',
    notes: 'Every CTA must link to a HubSpot-connected form. Dev to audit and rewire any broken or generic CTAs.',
  },
  {
    id: 'm12', cat: 'Website & Copy', owner: ['Sarah', 'Tara'], priority: 'Medium', dev: false, status: 'To Do',
    title: 'Build Make UK Defence and Chemical Business Association credential badges into sector pages',
    impact: 'Immediate trust signal for Defence and Chemical prospects. Credibility shortcut for cautious buyers.',
    notes: 'Static badge/logo with short copy block. No dev required if CMS supports image blocks per page.',
  },
  {
    id: 'm13', cat: 'Website & Copy', owner: ['Sarah'], priority: 'Medium', dev: false, status: 'To Do',
    title: 'Write and publish sector-specific case study narrative pages (Challenge / Solution / Results)',
    impact: 'Most powerful conversion tool for a specialist agency. Engineers and procurement managers cite peer proof.',
    notes: 'Prioritise: one per sector in June. Results must include quantified metrics (% lead increase, CPA reduction).',
  },

  // ── DEVELOPER ──
  {
    id: 'm14', cat: 'Developer', owner: ['James Evans', 'Tara'], priority: 'Critical', dev: true, status: 'In Progress',
    title: 'Build browser-based Outsourced vs In-house Marketing Cost Calculator',
    impact: 'Highest-converting lead gen tool for manufacturing and engineering buyers who are ROI-driven.',
    notes: 'Use Northpoint framework logic. Must be live by end of June. Captures lead data via HubSpot on result output.',
  },
  {
    id: 'm15', cat: 'Developer', owner: ['Aiden', 'Matt'], priority: 'Critical', dev: true, status: 'Blocked',
    title: 'Build and verify all paid media landing pages with HubSpot forms and GDPR compliance',
    impact: 'Hard gate for paid campaign reactivation in July. Without this, Matt/Aiden cannot spend.',
    notes: 'Each landing page: single CTA, HubSpot form connected, GDPR checkbox, confirmation email trigger.',
  },
  {
    id: 'm16', cat: 'Developer', owner: ['James Evans'], priority: 'High', dev: true, status: 'To Do',
    title: 'Set up SEMrush AI Toolkit prompt-tracking framework',
    impact: 'Enables measurement of AI search visibility. Essential for hitting SEMrush AI score of 10 by September.',
    notes: 'James Evans to own setup. Track conversational prompt rankings across all four target sectors.',
  },
  {
    id: 'm17', cat: 'Developer', owner: ['Aiden'], priority: 'High', dev: true, status: 'To Do',
    title: 'Implement LinkedIn Insight Tag and conversion tracking across site',
    impact: 'Without tracking, LinkedIn Premium and EAP launch in July will have no measurable attribution data.',
    notes: 'Install tag site-wide. Set up conversion events: form submit, calculator result, case study download.',
  },
  {
    id: 'm18', cat: 'Developer', owner: ['James Evans', 'Aiden'], priority: 'High', dev: true, status: 'To Do',
    title: 'Build sector-specific landing page templates in HubSpot',
    impact: 'Enables ABM and paid media to drive sector-targeted traffic to bespoke, converting pages.',
    notes: 'One template per sector (Defence / Chemical / Manufacturing / Engineering). Tone and imagery per guardrail.',
  },
  {
    id: 'm19', cat: 'Developer', owner: ['Tristan'], priority: 'Medium', dev: true, status: 'To Do',
    title: 'Site speed and Core Web Vitals audit and fix',
    impact: 'Directly impacts SEO rankings and bounce rate. B2B buyers on slow sites leave immediately.',
    notes: 'Target: LCP < 2.5s, CLS < 0.1, FID < 100ms. Prioritise Home and Sector pages.',
  },
  {
    id: 'm20', cat: 'Developer', owner: ['Tristan'], priority: 'Medium', dev: true, status: 'To Do',
    title: 'Build downloadable gated content hub (white papers, reports, checklists)',
    impact: 'Lead magnet for all four sectors. Captures MQL data directly into HubSpot for nurture sequences.',
    notes: 'Gate via HubSpot form. Start with 1 asset per sector. "2026 State of Digital Marketing in Manufacturing" is first.',
  },

  // ── CRM & HUBSPOT ──
  {
    id: 'm21', cat: 'CRM & HubSpot', owner: ['Matt'], priority: 'Critical', dev: false, status: 'To Do',
    title: 'Full HubSpot infrastructure audit — contacts, tags, lists, and pipeline stages',
    impact: 'Precondition for all July email automation and paid media tracking. Dirty data = wasted campaigns.',
    notes: 'Clean up dead contacts, merge duplicates, standardise tag taxonomy across all four sectors.',
  },
  {
    id: 'm22', cat: 'CRM & HubSpot', owner: ['Matt'], priority: 'Critical', dev: false, status: 'To Do',
    title: 'Segment all HubSpot contacts by sector — Defence, Chemical, Manufacturing, Engineering',
    impact: 'Enables sector-specific messaging. Exhibition leads in July must be ingested into correct segment immediately.',
    notes: 'Build smart lists per sector using industry/company fields. Apply to all existing contacts this month.',
  },
  {
    id: 'm23', cat: 'CRM & HubSpot', owner: ['Matt'], priority: 'High', dev: false, status: 'To Do',
    title: 'Build Long-Cycle Value Welcome Sequences for each sector ICP',
    impact: 'Moves EMD away from generic newsletters. Starts nurturing leads in June ready for July campaign drop.',
    notes: 'Sequences must reflect sector tone: Defence = formal/slow-burn; Engineering = data-dense; Chemical = compliance-led.',
  },
  {
    id: 'm24', cat: 'CRM & HubSpot', owner: ['Matt', 'James Alderman'], priority: 'High', dev: false, status: 'To Do',
    title: 'Shift email cadence: replace generic newsletter with sector-focused monthly sends',
    impact: 'Current newsletter drives no enquiries. Sector focus increases relevance and open rates (target: 25%).',
    notes: 'Hyper-focus option: monthly AI-in-B2B newsletter ("we keep you at the front of AI know-how").',
  },
  {
    id: 'm25', cat: 'CRM & HubSpot', owner: ['Matt'], priority: 'Medium', dev: false, status: 'To Do',
    title: 'Set up exhibition lead intake workflow — auto-segment by sector on form submit',
    impact: 'July exhibitions will generate leads. Without workflow, they land in an unsegmented pile and decay.',
    notes: 'Trigger: form submit from exhibition landing page. Action: tag sector, enrol in welcome sequence, notify sales.',
  },

  // ── STRATEGY & PLANNING ──
  {
    id: 'm26', cat: 'Strategy', owner: ['James Alderman', 'Amanda'], priority: 'Critical', dev: false, status: 'To Do',
    title: 'Finalise and sign off Master Marketing Strategy — ready for team Offsite',
    impact: 'Unlocks July execution. Without a signed-off strategy, team direction is ambiguous at Offsite Meeting.',
    notes: 'Deadline: first week of July. James + Amanda to co-author final version. Must reflect all June learnings.',
  },
  {
    id: 'm27', cat: 'Strategy', owner: ['James Alderman'], priority: 'High', dev: false, status: 'To Do',
    title: 'Build 20–30 target company ABM list (Dream Client list) by sector',
    impact: 'Enables personalised outreach and LinkedIn targeting from July. High-value, low-volume acquisition strategy.',
    notes: 'Criteria: turnover, sector, marketing maturity, growth signals. Use LinkedIn Sales Navigator to identify DMs.',
  },
  {
    id: 'm28', cat: 'Strategy', owner: ['James Alderman', 'Amanda'], priority: 'High', dev: false, status: 'To Do',
    title: 'Identify and begin offboarding time-draining low-ROI clients',
    impact: 'Frees capacity immediately. Every hour on low-value clients costs a high-value one.',
    notes: 'Criteria: low retainer, high admin, low growth potential. Amanda to lead commercial conversation.',
  },
  {
    id: 'm29', cat: 'Strategy', owner: ['James Alderman'], priority: 'High', dev: false, status: 'To Do',
    title: 'Complete Delivery Matrix — add Design & Development tracking tabs',
    impact: 'Unifies visibility of all team output. Required for accurate capacity planning and client reporting.',
    notes: 'Add tabs for: Design (Tristan), Development (Aiden/James Evans). Must be live by July 1st.',
  },
  {
    id: 'm30', cat: 'Strategy', owner: ['Amanda'], priority: 'Medium', dev: false, status: 'To Do',
    title: 'Shift commercial review cadence from quarterly to monthly',
    impact: 'Catch underperformance 3x faster. Monthly data review is baseline for a performance-led agency.',
    notes: 'Format: 1hr structured review. KPIs vs targets. What worked / what did not. Action items logged.',
  },
  {
    id: 'm31', cat: 'Strategy', owner: ['James Alderman', 'Amanda'], priority: 'Medium', dev: false, status: 'To Do',
    title: 'Competitor deep-dive: Gravity Global and Fox Agency positioning audit',
    impact: 'Sharpen differentiation messaging. Know exactly where to outflank them on sector specialisation.',
    notes: 'Analyse: service pages, case studies, tone of voice, sector focus, pricing signals, LinkedIn presence.',
  },

  // ── SOCIAL & CONTENT ──
  {
    id: 'm32', cat: 'Social & Content', owner: ['Luke F'], priority: 'High', dev: false, status: 'To Do',
    title: 'Pre-launch Employee Advocacy Programme (EAP) — brief team, set up tool, define content pillars',
    impact: 'EAP launches July 1st. Pre-work must happen in June or launch will slip.',
    notes: 'Brief all participants this month. Define 3 content pillars. Set target: 8,500+ monthly impression floor.',
  },
  {
    id: 'm33', cat: 'Social & Content', owner: ['Luke F'], priority: 'High', dev: false, status: 'To Do',
    title: 'Create June LinkedIn content calendar — educational video snippets, sector insight posts',
    impact: 'LinkedIn is the primary B2B brand channel. Consistent posting in June builds audience for July EAP launch.',
    notes: 'Format: 3x posts/week minimum. Mix: educational snippet, sector insight, behind-the-scenes. Video-first.',
  },
  {
    id: 'm34', cat: 'Social & Content', owner: ['James Roberts'], priority: 'Medium', dev: false, status: 'To Do',
    title: 'Plan next 3 podcast episodes — pivot to ROI case study format',
    impact: 'Podcast repurposed as sales enablement. ROI-focused episodes can be embedded directly into proposals.',
    notes: 'Format: client interviews on growth impact with EMD. Topics: Data/ROI theme. Plan Aug + Nov ExtraByte too.',
  },
  {
    id: 'm35', cat: 'Social & Content', owner: ['James Evans', 'Jim'], priority: 'High', dev: false, status: 'To Do',
    title: 'Design and publish "AI-Readiness" content series — how B2B manufacturers should prepare',
    impact: 'Positions EMD as AI-forward. Pre-loads content for July LinkedIn carousel deployment by Luke F.',
    notes: 'Format: carousel scripts + blog long-form. Angle: "How to optimise for AI vs Google" for industrial B2B.',
  },
]

const CAT_COLORS = {
  'SEO / AIO':       { bg: 'bg-[#4f7ef8]/12', text: 'text-[#4f7ef8]', border: 'border-[#4f7ef8]/25' },
  'Website & Copy':  { bg: 'bg-[#a78bfa]/12', text: 'text-[#a78bfa]', border: 'border-[#a78bfa]/25' },
  'Developer':       { bg: 'bg-[#3ecf8e]/12', text: 'text-[#3ecf8e]', border: 'border-[#3ecf8e]/25' },
  'CRM & HubSpot':   { bg: 'bg-[#f5a623]/12', text: 'text-[#f5a623]', border: 'border-[#f5a623]/25' },
  'Strategy':        { bg: 'bg-[#f04040]/12', text: 'text-[#f04040]', border: 'border-[#f04040]/25' },
  'Social & Content':{ bg: 'bg-[#888]/12',    text: 'text-[#aaa]',    border: 'border-[#888]/25' },
}

const PRIORITY_COLORS = {
  'Critical': 'text-[#f04040]',
  'High':     'text-[#f5a623]',
  'Medium':   'text-[#3ecf8e]',
}

const STATUS_STYLES = {
  'In Progress': 'bg-[#3ecf8e]/12 text-[#3ecf8e]',
  'To Do':       'bg-white/5 text-[#777]',
  'Blocked':     'bg-[#f04040]/12 text-[#f04040]',
}

const ALL_CATS = ['All', 'SEO / AIO', 'Website & Copy', 'Developer', 'CRM & HubSpot', 'Strategy', 'Social & Content']

function MondayBoard() {
  const [activeCat, setActiveCat] = useState('All')
  const [devOnly, setDevOnly] = useState(false)
  const [expanded, setExpanded] = useState(null)

  const filtered = MONDAY_TASKS.filter(t =>
    (activeCat === 'All' || t.cat === activeCat) &&
    (!devOnly || t.dev)
  )

  const counts = ALL_CATS.reduce((acc, c) => {
    acc[c] = c === 'All' ? MONDAY_TASKS.length : MONDAY_TASKS.filter(t => t.cat === c).length
    return acc
  }, {})

  const criticalCount = filtered.filter(t => t.priority === 'Critical').length
  const devCount = MONDAY_TASKS.filter(t => t.dev).length

  return (
    <div className="space-y-6">
      {/* Summary bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Total Tasks', val: MONDAY_TASKS.length, color: 'text-[#f0f0f0]' },
          { label: 'Critical Priority', val: MONDAY_TASKS.filter(t => t.priority === 'Critical').length, color: 'text-[#f04040]' },
          { label: 'Needs Developer', val: devCount, color: 'text-[#3ecf8e]' },
          { label: 'In Progress', val: MONDAY_TASKS.filter(t => t.status === 'In Progress').length, color: 'text-[#f5a623]' },
        ].map(s => (
          <div key={s.label} className="rounded-xl border border-white/7 p-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <p className={`text-2xl font-bold ${s.color}`}>{s.val}</p>
            <p className="text-xs text-[#555] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          {ALL_CATS.map(c => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
              style={{
                background: activeCat === c ? 'rgba(79,126,248,0.12)' : 'rgba(255,255,255,0.03)',
                borderColor: activeCat === c ? 'rgba(79,126,248,0.4)' : 'rgba(255,255,255,0.08)',
                color: activeCat === c ? '#4f7ef8' : '#666',
              }}
            >
              {c}
              <span className="text-[10px] opacity-60">{counts[c]}</span>
            </button>
          ))}
        </div>
        <button
          onClick={() => setDevOnly(!devOnly)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ml-auto"
          style={{
            background: devOnly ? 'rgba(62,207,142,0.12)' : 'rgba(255,255,255,0.03)',
            borderColor: devOnly ? 'rgba(62,207,142,0.4)' : 'rgba(255,255,255,0.08)',
            color: devOnly ? '#3ecf8e' : '#666',
          }}
        >
          <Code2 size={11} />
          Dev tasks only
        </button>
      </div>

      {/* Task count */}
      <p className="text-xs text-[#555]">
        Showing <span className="text-[#888] font-medium">{filtered.length}</span> of {MONDAY_TASKS.length} tasks
        {criticalCount > 0 && activeCat !== 'All' && (
          <span className="text-[#f04040] ml-2">· {filtered.filter(t => t.priority === 'Critical').length} critical</span>
        )}
      </p>

      {/* Task rows */}
      <div className="space-y-2">
        {filtered.map(task => {
          const c = CAT_COLORS[task.cat]
          const isOpen = expanded === task.id
          return (
            <div
              key={task.id}
              className="rounded-xl border transition-all duration-150 cursor-pointer"
              style={{
                background: isOpen ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                borderColor: isOpen ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)',
              }}
              onClick={() => setExpanded(isOpen ? null : task.id)}
            >
              <div className="p-4">
                <div className="flex items-start gap-3">
                  {/* Priority stripe */}
                  <div className={`w-0.5 self-stretch rounded-full shrink-0 mt-0.5 ${
                    task.priority === 'Critical' ? 'bg-[#f04040]' :
                    task.priority === 'High' ? 'bg-[#f5a623]' : 'bg-[#3ecf8e]'
                  }`} style={{ minHeight: 16 }} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <p className="text-sm font-medium text-[#e8e8e8] leading-snug">{task.title}</p>
                      <ChevronRight
                        size={14}
                        className={`text-[#444] shrink-0 mt-0.5 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                      />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${c.bg} ${c.text} ${c.border}`}>
                        {task.cat}
                      </span>
                      <span className={`text-[10px] font-semibold ${PRIORITY_COLORS[task.priority]}`}>
                        ▲ {task.priority}
                      </span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${STATUS_STYLES[task.status]}`}>
                        {task.status}
                      </span>
                      {task.dev && (
                        <span className="flex items-center gap-1 text-[10px] font-medium text-[#3ecf8e] bg-[#3ecf8e]/8 px-2 py-0.5 rounded-full border border-[#3ecf8e]/20">
                          <Code2 size={9} />
                          Dev required
                        </span>
                      )}
                      <span className="text-[10px] text-[#555] ml-1">
                        {task.owner.join(' · ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {isOpen && (
                <div className="px-4 pb-4 border-t border-white/7 space-y-3 pt-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.2)' }}>
                      <p className="text-[10px] font-semibold text-[#555] uppercase tracking-wider mb-1.5">Impact</p>
                      <p className="text-xs text-[#999] leading-relaxed">{task.impact}</p>
                    </div>
                    <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.2)' }}>
                      <p className="text-[10px] font-semibold text-[#555] uppercase tracking-wider mb-1.5">Notes / Action</p>
                      <p className="text-xs text-[#999] leading-relaxed">{task.notes}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  if (status === 'in-progress') return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-[#3ecf8e]/15 text-[#3ecf8e]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e]" />
      In Progress
    </span>
  )
  if (status === 'paused') return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-[#f04040]/15 text-[#f04040]">
      <Pause size={10} />
      Paused
    </span>
  )
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-white/5 text-[#888]">
      <Circle size={10} />
      Pending
    </span>
  )
}

function TaskCard({ task, expanded, onToggle }) {
  return (
    <div
      className={`rounded-xl border transition-all duration-200 cursor-pointer ${
        expanded
          ? 'bg-[#1e1e22] border-white/12'
          : 'bg-[#16161a] border-white/7 hover:border-white/12 hover:bg-[#1a1a1e]'
      }`}
      onClick={onToggle}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2.5 flex-wrap">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${task.typeColor}`}>
                {task.type}
              </span>
              <StatusBadge status={task.status} />
              {task.deadline && (
                <span className="text-xs font-medium text-[#f04040] bg-[#f04040]/10 px-2 py-0.5 rounded-md border border-[#f04040]/20">
                  Deadline: {task.deadline}
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-[#f0f0f0] leading-snug">{task.title}</p>
          </div>
          <ChevronRight
            size={15}
            className={`text-[#555] shrink-0 mt-0.5 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
          />
        </div>
        <div className="flex items-center gap-4 mt-3 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-[#666]">
            <Users size={11} />
            {task.assigned.join(', ')}
          </div>
          {task.budget && (
            <div className={`flex items-center gap-1.5 text-xs font-semibold ${task.budgetColor}`}>
              <Clock size={11} />
              {task.budget}
            </div>
          )}
        </div>
      </div>
      {expanded && (
        <div className="px-4 pb-4 pt-0 border-t border-white/7">
          <p className="text-sm text-[#888] leading-relaxed mt-3">{task.detail}</p>
        </div>
      )}
    </div>
  )
}

// ─── EXPORT ──────────────────────────────────────────────────────────────────

function exportDashboard() {
  const now = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  const lines = [
    `# EMD Account Command Centre — Context Brief`,
    `**Last updated:** ${now}`,
    `**Purpose:** This document is the live context source for the EMD Gemini Gem. It reflects the current state of the Extra Mile Digital account — strategic priorities, team workload, tasks, KPIs and sector guardrails.`,
    ``,
    `---`,
    ``,
    `## Company Context`,
    `Extra Mile Digital (EMD) is a 28-person B2B marketing agency undergoing major structural transformation in 2026. Repositioning from generalist B2B marketing to "The go-to agency for lead generation and revenue growth" in Defence, Manufacturing, Chemical, and Engineering.`,
    ``,
    `**Brand rule:** "Extra Mile" = data-proven ROI and undeniable value — NOT unbilled over-servicing. Hard internal rule. Monthly capacity cap: 42 hours per account maximum.`,
    ``,
    `---`,
    ``,
    `## Financial KPIs (2026/27 Targets)`,
    ...KPIs.map(k => `- **${k.label}:** ${k.value} — ${k.sub}`),
    ``,
    `---`,
    ``,
    `## Key Performance Metrics`,
    `- Organic traffic: +30% YoY`,
    `- LinkedIn engagement: consistently 22%`,
    `- Email: 25% open rate, 10% CTR`,
    `- Webinar sign-ups: 50 (attendance target: 25)`,
    `- Podcast: 10 downloads within 7 days of release`,
    `- SEMrush AI score: 10 by September 2026 (currently 0)`,
    `- Average engagement time: 90 seconds on site`,
    ``,
    `---`,
    ``,
    `## Sector Guardrails`,
    ...SECTORS.flatMap(s => {
      const d = SECTOR_DETAILS[s.id]
      return [
        ``,
        `### ${d.title}`,
        d.credential ? `**Key credential:** ${d.credential} — ${d.credentialNote}` : '',
        `**Demographic:** ${d.demographic}`,
        `**Content focus:** ${d.contentFocus}`,
        `**Guardrails:**`,
        ...d.points.map(p => `- **${p.label}:** ${p.detail}`),
      ].filter(Boolean)
    }),
    ``,
    `---`,
    ``,
    `## Team Workload (June 2026)`,
    ...TEAM.map(m =>
      `### ${m.name} — ${m.role} [${m.flag}] (${m.allocation}% capacity)\n${m.directive}\n**Current tasks:** ${m.tasks.join(', ')}${m.deadline ? `\n**Deadline:** ${m.deadline}` : ''}`
    ),
    ``,
    `---`,
    ``,
    `## 30/60/90 Day Plan`,
    ``,
    `### June 2026 Tasks`,
    ...TASKS.june.map(t =>
      `**[${t.type}] ${t.title}**\n- Owner: ${t.assigned.join(', ')} | Budget: ${t.budget || 'TBC'} | Status: ${t.status}${t.deadline ? ` | Deadline: ${t.deadline}` : ''}\n- ${t.detail}`
    ),
    ``,
    `### July 2026 Tasks`,
    ...TASKS.july.map(t =>
      `**[${t.type}] ${t.title}**\n- Owner: ${t.assigned.join(', ')} | Budget: ${t.budget || 'TBC'} | Status: ${t.status}${t.deadline ? ` | Deadline: ${t.deadline}` : ''}\n- ${t.detail}`
    ),
    ``,
    `---`,
    ``,
    `## Monday.com Task Board (June 2026)`,
    ...MONDAY_TASKS.map(t =>
      `**[${t.cat}] ${t.title}**\n- Owner: ${t.owner.join(', ')} | Priority: ${t.priority} | Status: ${t.status}${t.dev ? ' | Dev required' : ''}\n- Impact: ${t.impact}\n- Notes: ${t.notes}`
    ),
    ``,
    `---`,
    ``,
    `## Channel Mix (42hr monthly cap)`,
    ...CHANNELS.map(c => `- **${c.label}** (${c.hours}, ${c.pct}%): ${c.note}`),
    ``,
    `---`,
    ``,
    `## Account Management`,
    `- **Account Lead (Extramile Digital):** James Alderman`,
    `- **Client EMD Team:** Jene (delivery matrix), Amanda (CEO/strategic lead), James Roberts (KAM/transformation)`,
    ``,
    `---`,
    ``,
    `*Generated from EMD Account Command Centre dashboard. Re-export and re-upload to Drive after any significant dashboard update.*`,
  ]

  const content = lines.join('\n')
  const blob = new Blob([content], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `EMD-Context-Brief-${new Date().toISOString().slice(0, 10)}.md`
  a.click()
  URL.revokeObjectURL(url)
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

export default function EMDDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [activeSector, setActiveSector] = useState(null)
  const [expandedTask, setExpandedTask] = useState(null)
  const [unbilledHours, setUnbilledHours] = useState(38)
  const [kpiExpanded, setKpiExpanded] = useState(false)

  const overCapacity = unbilledHours > 42
  const sector = activeSector ? SECTOR_DETAILS[activeSector] : null

  return (
    <div className="min-h-screen bg-[#0d0d10] text-[#f0f0f0]" style={{ fontFamily: "'Inter', system-ui, sans-serif", WebkitFontSmoothing: 'antialiased' }}>

      {/* ── HEADER ── */}
      <header style={{ position: 'sticky', top: 0, zIndex: 30, borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(13,13,16,0.92)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(62,207,142,0.12)', border: '1px solid rgba(62,207,142,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={16} className="text-[#3ecf8e]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#f0f0f0] tracking-tight">EMD Account Command Centre</p>
              <p className="text-xs text-[#555]">Extra Mile Digital · 2026 Business Transformation</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-5">
              {[
                { label: 'Lead Gen', val: '65%', color: '#3ecf8e' },
                { label: 'Brand Build', val: '35%', color: '#4f7ef8' },
              ].map(b => (
                <div key={b.label} className="text-right">
                  <p className="text-xs font-bold" style={{ color: b.color }}>{b.val}</p>
                  <p className="text-[10px] text-[#555]">{b.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-[#555]">
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3ecf8e', display: 'inline-block' }} />
              Live · June 2026
            </div>
            <button
              onClick={exportDashboard}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
              style={{ background: 'rgba(79,126,248,0.1)', borderColor: 'rgba(79,126,248,0.3)', color: '#4f7ef8' }}
              title="Download dashboard context as markdown — upload to Google Drive for your Gem"
            >
              <BookOpen size={11} />
              Sync to Drive
            </button>
          </div>
        </div>
      </header>

      {/* ── TAB NAV ── */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(13,13,16,0.7)' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-1">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'monday', label: 'Monday.com Tasks', icon: ListChecks },
          ].map(tab => {
            const Icon = tab.icon
            const active = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-4 py-3 text-xs font-medium transition-all relative"
                style={{ color: active ? '#f0f0f0' : '#555', borderBottom: active ? '2px solid #3ecf8e' : '2px solid transparent' }}
              >
                <Icon size={13} />
                {tab.label}
                {tab.id === 'monday' && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-0.5" style={{ background: 'rgba(240,64,64,0.15)', color: '#f04040' }}>
                    {MONDAY_TASKS.filter(t => t.priority === 'Critical').length} critical
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── BRAND PRINCIPLE BANNER ── */}
      <div style={{ background: 'rgba(62,207,142,0.06)', borderBottom: '1px solid rgba(62,207,142,0.12)' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3">
          <Star size={13} className="text-[#3ecf8e] shrink-0" />
          <p className="text-xs text-[#888] leading-relaxed">
            <span className="text-[#3ecf8e] font-semibold">"Extra Mile" redefined:</span>{' '}
            We deliver undeniable, data-proven ROI — not unbilled over-servicing. Every hour must justify its value.
            <span className="text-[#555] ml-2">·</span>
            <span className="text-[#666] ml-2 italic">"Marketing for technical businesses isn't about being loud; it's about being right."</span>
          </p>
        </div>
      </div>

      {/* ── MONDAY TAB ── */}
      {activeTab === 'monday' && (
        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-2 mb-2">
            <ListChecks size={15} className="text-[#4f7ef8]" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555]">Monday.com · June 2026 Task Pipeline</h2>
          </div>
          <p className="text-xs text-[#555] mb-7 ml-5">All content, strategic and developer tasks derived from EMD documentation. Click any row to expand impact and action notes.</p>
          <MondayBoard />
        </main>
      )}

      {activeTab === 'dashboard' && (
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-10">

        {/* ── SECTION 1: KPI SNAPSHOT ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <BarChart3 size={15} className="text-[#3ecf8e]" />
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555]">Executive KPI Snapshot</h2>
            </div>
            <button
              onClick={() => setKpiExpanded(!kpiExpanded)}
              className="flex items-center gap-1.5 text-xs text-[#555] hover:text-[#888] transition-colors"
            >
              {kpiExpanded ? 'Show less' : 'All metrics'}
              <ChevronDown size={13} className={`transition-transform ${kpiExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Primary 4 KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
            {KPIs.slice(0, 4).map((kpi) => {
              const Icon = kpi.icon
              return (
                <div key={kpi.label} className={`rounded-xl border p-4 ${kpi.bg} ${kpi.border}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={14} className={kpi.color} />
                    <span className="text-xs text-[#666]">{kpi.label}</span>
                  </div>
                  <p className={`text-xl font-bold tracking-tight ${kpi.color}`}>{kpi.value}</p>
                  <p className="text-[11px] text-[#555] mt-1">{kpi.sub}</p>
                </div>
              )
            })}
          </div>

          {/* Secondary metrics (expandable) */}
          {kpiExpanded && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
              {KPIs.slice(4).map((kpi) => {
                const Icon = kpi.icon
                return (
                  <div key={kpi.label} className={`rounded-xl border p-4 ${kpi.bg} ${kpi.border}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={14} className={kpi.color} />
                      <span className="text-xs text-[#666]">{kpi.label}</span>
                    </div>
                    <p className={`text-xl font-bold tracking-tight ${kpi.color}`}>{kpi.value}</p>
                    <p className="text-[11px] text-[#555] mt-1">{kpi.sub}</p>
                  </div>
                )
              })}
            </div>
          )}

          {/* Capacity warning */}
          <div className={`rounded-xl border p-5 transition-all duration-300 ${
            overCapacity ? 'bg-[#f04040]/8 border-[#f04040]/30' : 'bg-[#16161a] border-white/7'
          }`}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                {overCapacity
                  ? <AlertTriangle size={17} className="text-[#f04040] mt-0.5 shrink-0" />
                  : <CheckCircle2 size={17} className="text-[#3ecf8e] mt-0.5 shrink-0" />
                }
                <div>
                  <p className={`text-sm font-semibold mb-1 ${overCapacity ? 'text-[#f04040]' : 'text-[#3ecf8e]'}`}>
                    {overCapacity ? 'Capacity Breach — Action Required' : 'Capacity Within Guardrails'}
                  </p>
                  <p className="text-xs text-[#777] leading-relaxed max-w-lg">
                    {overCapacity
                      ? '"Extra Mile" means data-proven ROI — not unbilled over-servicing. Unbilled hours have exceeded the 42-hour monthly cap. Review workload distribution and scope immediately.'
                      : 'Unbilled hours are within the 42-hour monthly cap. Maintain discipline: scope creep erodes margin and dilutes strategic focus. Every hour must justify its value.'}
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className={`text-3xl font-bold ${overCapacity ? 'text-[#f04040]' : 'text-[#3ecf8e]'}`}>
                  {unbilledHours}<span className="text-sm font-normal text-[#555] ml-1">/ 42 hrs</span>
                </p>
                <input
                  type="range" min={0} max={60} value={unbilledHours}
                  onChange={e => setUnbilledHours(Number(e.target.value))}
                  className="w-32 mt-2"
                  style={{ accentColor: overCapacity ? '#f04040' : '#3ecf8e' }}
                  onClick={e => e.stopPropagation()}
                />
                <p className="text-[10px] text-[#444] mt-0.5">Demo slider</p>
              </div>
            </div>
            <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min((unbilledHours / 42) * 100, 100)}%`,
                  background: overCapacity ? '#f04040' : '#3ecf8e'
                }}
              />
            </div>
          </div>
        </section>

        {/* ── SECTION 2: SECTOR FILTERS ── */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <Shield size={15} className="text-[#4f7ef8]" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555]">Sector Reality Filters</h2>
          </div>

          <div className="flex gap-2 flex-wrap mb-4">
            {SECTORS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSector(activeSector === id ? null : id)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150"
                style={{
                  background: activeSector === id ? 'rgba(79,126,248,0.12)' : 'rgba(255,255,255,0.03)',
                  borderColor: activeSector === id ? 'rgba(79,126,248,0.4)' : 'rgba(255,255,255,0.08)',
                  color: activeSector === id ? '#4f7ef8' : '#888',
                }}
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>

          {sector ? (
            <div className={`rounded-xl border p-6 ${sector.accentBg} ${sector.accentBorder}`}>
              <div className="flex items-center justify-between mb-5">
                <h3 className={`text-sm font-bold ${sector.color}`}>{sector.title}</h3>
                <button onClick={() => setActiveSector(null)} className="text-xs text-[#555] hover:text-[#888]">Dismiss ×</button>
              </div>

              {sector.credential && (
                <div className="mb-4 flex items-start gap-2.5 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <Award size={13} className={`${sector.color} mt-0.5 shrink-0`} />
                  <div>
                    <p className={`text-xs font-semibold ${sector.color}`}>{sector.credential} — Key Credential</p>
                    <p className="text-xs text-[#777] mt-0.5">{sector.credentialNote}</p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-2.5 mb-4">
                {sector.points.map((p) => (
                  <div key={p.label} className="rounded-lg p-3.5" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <ArrowRight size={11} className={sector.color} />
                      <span className={`text-xs font-semibold ${sector.color}`}>{p.label}</span>
                    </div>
                    <p className="text-xs text-[#777] leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-2.5">
                <div className="flex items-start gap-2 p-3 rounded-lg" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Users size={12} className="text-[#555] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-[#f0f0f0] mb-0.5">Demographic Reality</p>
                    <p className="text-xs text-[#777] leading-relaxed">{sector.demographic}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Radio size={12} className="text-[#555] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-[#f0f0f0] mb-0.5">June/July Content Alignment</p>
                    <p className="text-xs text-[#777] leading-relaxed">{sector.contentFocus}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-white/7 p-5 text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <p className="text-xs text-[#555]">Select a sector above to view its specific guardrails, demographic targeting strategy, and June/July content alignment.</p>
            </div>
          )}
        </section>

        {/* ── SECTION 3: 30/60/90 TASK BOARD ── */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <Flag size={15} className="text-[#a78bfa]" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555]">30 / 60 / 90 Agile Task Board</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* June */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <Calendar size={13} className="text-[#3ecf8e]" />
                    <h3 className="text-sm font-bold text-[#f0f0f0]">June 2026</h3>
                  </div>
                  <p className="text-xs text-[#555] ml-5">Day 1–30 · Foundations & Asset Audits</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full shrink-0 mt-0.5" style={{ background: 'rgba(62,207,142,0.1)', color: '#3ecf8e', border: '1px solid rgba(62,207,142,0.2)' }}>
                  {TASKS.june.length} tasks · 35 hrs
                </span>
              </div>
              <div className="space-y-2.5">
                {TASKS.june.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    expanded={expandedTask === task.id}
                    onToggle={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
                  />
                ))}
              </div>
              <div className="mt-3 p-3 rounded-lg" style={{ background: 'rgba(79,126,248,0.07)', border: '1px solid rgba(79,126,248,0.18)' }}>
                <div className="flex items-center gap-2">
                  <Info size={12} className="text-[#4f7ef8] shrink-0" />
                  <p className="text-xs text-[#777]">
                    <span className="text-[#4f7ef8] font-medium">Master strategy sign-off:</span> James + Amanda to finalise by first week of July ahead of team Offsite Meeting.
                  </p>
                </div>
              </div>
            </div>

            {/* July */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <Calendar size={13} className="text-[#4f7ef8]" />
                    <h3 className="text-sm font-bold text-[#f0f0f0]">July 2026</h3>
                  </div>
                  <p className="text-xs text-[#555] ml-5">Day 31–60 · The Active Publishing House</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full shrink-0 mt-0.5" style={{ background: 'rgba(79,126,248,0.1)', color: '#4f7ef8', border: '1px solid rgba(79,126,248,0.2)' }}>
                  {TASKS.july.length} tasks
                </span>
              </div>
              <div className="space-y-2.5">
                {TASKS.july.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    expanded={expandedTask === task.id}
                    onToggle={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
                  />
                ))}
              </div>
              <div className="mt-3 p-3 rounded-lg" style={{ background: 'rgba(240,64,64,0.07)', border: '1px solid rgba(240,64,64,0.2)' }}>
                <div className="flex items-start gap-2">
                  <AlertCircle size={12} className="text-[#f04040] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#777] leading-relaxed">
                    <span className="text-[#f04040] font-medium">Hard gate on Paid Media:</span> No paid spend to be activated until landing pages, form paths, CTAs, and HubSpot workflows are verified end-to-end. Matt & Aiden on standby.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: CHANNEL MIX ── */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <Radio size={15} className="text-[#4f7ef8]" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555]">Marketing Channel Mix · 42hr Budget</h2>
          </div>
          <div className="rounded-xl border border-white/7 p-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="space-y-3">
              {CHANNELS.map(ch => (
                <div key={ch.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-[#d0d0d0]">{ch.label}</span>
                      <span className="text-[10px] text-[#555]">— {ch.note}</span>
                    </div>
                    <span className="text-xs font-semibold text-[#888] shrink-0 ml-4">{ch.hours}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div className={`h-full rounded-full ${ch.color}`} style={{ width: `${ch.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: TEAM WORKLOAD MATRIX ── */}
        <section>
          <div className="flex items-center gap-2 mb-1.5">
            <Users size={15} className="text-[#f5a623]" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555]">Campaign Efficiency · Team Workload Matrix</h2>
          </div>
          <p className="text-xs text-[#555] mb-5 ml-5">
            Shift model: permanent teams → campaign-by-campaign agile deployment. Capacity flags are binding.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
            {TEAM.map((member) => {
              const Icon = member.icon
              return (
                <div key={member.name} className={`rounded-xl border p-5 ${member.cardBg} ${member.cardBorder}`}>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <Icon size={15} className={member.iconColor} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#f0f0f0]">{member.name}</p>
                        <p className="text-xs text-[#555]">{member.role}</p>
                      </div>
                    </div>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${member.flagColor}`} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {member.flag}
                    </span>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] text-[#555]">Capacity Allocation</span>
                      <span className={`text-xs font-bold ${member.flagColor}`}>{member.allocation}%</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <div className={`h-full rounded-full ${member.barColor}`} style={{ width: `${member.allocation}%` }} />
                    </div>
                  </div>

                  <p className="text-xs text-[#777] leading-relaxed mb-3">{member.directive}</p>

                  {member.deadline && (
                    <p className={`text-xs font-semibold mb-2 ${member.deadlineColor}`}>{member.deadline}</p>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {member.tasks.map(t => (
                      <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-md text-[#555]" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── SECTION 6: STRATEGIC PILLARS ── */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <BookOpen size={15} className="text-[#3ecf8e]" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555]">Four Strategic Pillars · 2026</h2>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {[
              { n: '01', title: 'Productive & Profitable Efficiency', lead: 'James Alderman + Andy', color: 'text-[#3ecf8e]', border: 'border-[#3ecf8e]/20', bg: 'bg-[#3ecf8e]/6' },
              { n: '02', title: 'Retention & Growth of Recurring Revenue', lead: 'James Alderman + Amanda', color: 'text-[#4f7ef8]', border: 'border-[#4f7ef8]/20', bg: 'bg-[#4f7ef8]/6' },
              { n: '03', title: 'Sector Positioning & Credibility', lead: 'Amanda + Sarah', color: 'text-[#a78bfa]', border: 'border-[#a78bfa]/20', bg: 'bg-[#a78bfa]/6' },
              { n: '04', title: 'Culture & Skills Development', lead: 'Katie + Amanda', color: 'text-[#f5a623]', border: 'border-[#f5a623]/20', bg: 'bg-[#f5a623]/6' },
            ].map(p => (
              <div key={p.n} className={`rounded-xl border p-4 ${p.bg} ${p.border}`}>
                <p className={`text-2xl font-bold opacity-30 mb-2 ${p.color}`}>{p.n}</p>
                <p className={`text-xs font-semibold leading-snug mb-2 ${p.color}`}>{p.title}</p>
                <p className="text-[11px] text-[#555]">Lead: {p.lead}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-white/7 pt-6 pb-4 flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-[#444]">EMD Account Command Centre · Internal use only · Not for external distribution</p>
          <p className="text-xs text-[#444]">Extra Mile Digital © 2026 · B2B Transformation Programme</p>
        </footer>

      </main>
      )}

    </div>
  )
}
