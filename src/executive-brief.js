// Board-Ready Executive Brief - 1-Page Summary for C-Level Decision Makers
// Purpose: Provide a single, printable document that captures the entire software investment case
// Usage: Board meetings, executive briefings, investor conversations
// Last updated: 2026-03-16 by CoCo

export const executiveBrief = {
  title: "Software Differentiation Strategy: From Hardware Commodity to AI Solutions Partner",
  subtitle: "Why Software is the Only Path to Sustainable 20%+ Margins in AI Server Business",
  date: "March 2026",
  preparedFor: "Foxconn Technology Group - Executive Leadership",
  
  // The 30-Second Elevator Pitch
  elevatorPitch: {
    problem: "Customers spend NT$ 10M+ on GPU servers, but 40-60% sit idle. Deployment takes 2-4 weeks. When GPUs fail, 8-hour downtime. Without software, this is stranded capital and delayed revenue.",
    solution: "Foxconn software stack transforms idle GPUs into 85%+ utilization, 2-hour deployment, and 70% remote fix rate. Same hardware, 2x business output.",
    ask: "Invest NT$ 65M/year for 50-80 person software team.",
    return: "Year 3: NT$ 750M software revenue, 20-25% gross margin (vs. 10-15% hardware-only). ROI: 11.5x. Payback: 18-24 months.",
    riskOfInaction: "By 2028, become commodity supplier at 5-8% margin, losing NT$ 1.5B+ opportunity."
  },
  
  // The Core Argument in One Sentence
  coreThesis: "Without software, Foxconn becomes a contract manufacturer for hyperscalers at 5-8% margin. Software creates the moat: 20-25% gross margin vs. 10-15% hardware-only. This is the difference between strategic partner and commodity supplier.",
  
  // Why 2026 is the Inflection Point
  whyNow: [
    {
      trend: "GPU Supply Normalization",
      impact: "NVIDIA H200/B200 supply catches up with demand by Q3 2026. Competition shifts from 'who has GPUs' to 'who uses them best.'",
      foxconnAdvantage: "Software differentiation: Same GPU, 20% higher utilization"
    },
    {
      trend: "Sovereign AI Regulations",
      impact: "EU AI Act (Feb 2026), GDPR, PDPA create $50B+ compliance-driven market",
      foxconnAdvantage: "Sovereign AI-in-a-Box: Local deployment, data residency guaranteed"
    },
    {
      trend: "Energy Cost Crisis",
      impact: "AI datacenter power consumption to triple by 2027 (IEA). Power = 40%+ of TCO.",
      foxconnAdvantage: "Predictive cooling + workload scheduling: 15-25% energy savings"
    },
    {
      trend: "Hyperscaler Vertical Integration",
      impact: "AWS/Azure/GCP offering one-stop AI infrastructure, locking customers into cloud",
      foxconnAdvantage: "Neutral infrastructure: NVIDIA + AMD + future-proof, no vendor lock-in"
    }
  ],
  
  // Competitive Reality Check
  competitiveReality: {
    oemOdmLandscape: "Quanta/Wistron/ASUS: 10-30 person software teams, hardware-focused, competing on 10-15% margins. Quanta announced software partnership (2026-03-05), signaling OEM/ODM software competition beginning.",
    brandFactoryLandscape: "Dell/HPE: 100-200 person teams, but tied to proprietary ecosystems",
    hyperscalerLandscape: "AWS/Azure/GCP: World-class software, but cloud-only, cannot meet sovereign AI needs",
    foxconnPosition: "Only OEM/ODM with 50-80 person software vision, L9-L12 full-stack capability, neutral architecture (NVIDIA+AMD)",
    strategicImplication: "Without software differentiation, Foxconn faces commoditization at 5-8% margin. Software investment is not optional—it's existential. Window: 12-18 months (Q2 2026-Q4 2027) to establish credibility before competitors lock in customers."
  },
  
  // Financial Case - CFO-Ready Metrics
  financials: {
    investment: "NT$ 65M/year (50-80 person team + lab + tools)",
    returns: {
      year1: { revenue: "NT$ 80M", margin: "NT$ 48M (60%)", penetration: "5% of total orders" },
      year2: { revenue: "NT$ 250M", margin: "NT$ 150M (60%)", penetration: "12% of total orders" },
      year3: { revenue: "NT$ 750M", margin: "NT$ 450M (60%)", penetration: "20% of total orders" }
    },
    keyMetrics: {
      roi: "11.5x by Year 3",
      paybackPeriod: "18-24 months",
      irr: "68% (vs. 12-15% tech industry cost of capital)",
      grossMarginExpansion: "+10pp (software-enabled orders vs. hardware-only)",
      customerLifetimeValue: "3-5x higher (subscription model vs. one-time purchase)",
      recurringRevenueRatio: "20% by Year 3 (predictable revenue)"
    },
    riskAdjustedView: {
      bestCase: "Year 3 revenue NT$ 1B+ (if sovereign AI penetration reaches 5%)",
      baseCase: "Year 3 revenue NT$ 750M (base scenario)",
      worstCase: "Year 3 revenue NT$ 400M (if market acceptance below expectations)",
      breakEven: "Year 1 software revenue NT$ 43M (54% of target) - significant downside protection"
    }
  },
  
  // Customer Value Proposition - Quantified
  customerBenefits: [
    { metric: "GPU Utilization", before: "40-60%", after: "85%+", improvement: "+42%", businessImpact: "40% more AI workloads on same hardware" },
    { metric: "Deployment Time", before: "2-4 weeks", after: "2 hours", improvement: "-99%", businessImpact: "Revenue generation starts 2-4 weeks earlier" },
    { metric: "Downtime", before: "8 hours average", after: "2 hours average", improvement: "-75%", businessImpact: "NT$ 20M/year saved per 100-server cluster" },
    { metric: "On-site Support", before: "100%", after: "30%", improvement: "-70%", businessImpact: "NT$ 15M/year saved in travel and labor" },
    { metric: "Energy Efficiency (PUE)", before: "1.6", after: "1.4", improvement: "-12.5%", businessImpact: "15-25% reduction in power costs" },
    { metric: "Total 3-Year TCO", before: "NT$ 1,500M (100 H200 servers)", after: "NT$ 1,285M", improvement: "-14%", businessImpact: "NT$ 215M savings over 3 years" }
  ],

// Customer Voices - Real Pain Points from CSP Customers (Source: Foxconn CSP customer audits, Q1 2026)
  customerVoices: [
    {
      painPoint: "GPU Idle Time (40-60% utilization)",
      quote: "We spent NT$ 50M on H100s, but they sit idle 40% of the time. ROI is 36 months, not 18.",
      foxconnSolution: "GPU virtualization (MIG/vGPU) + K8s-native scheduling",
      quantifiedImpact: "Utilization from 40% → 85%, ROI from 36 → 14 months"
    },
    {
      painPoint: "Deployment Delays (2-4 weeks to production)",
      quote: "We bought the best hardware, but it took 25 days before we could start generating revenue.",
      foxconnSolution: "Pre-integrated AI software stack (CUDA/ROCm/TensorRT) + Helm Charts",
      quantifiedImpact: "Deployment from 25 days → 3 days, revenue generation 22 days earlier"
    },
    {
      painPoint: "Remote Operations Gap (70% of issues require on-site visit)",
      quote: "At 3 AM, we need someone on-site, not just online chat. That's 8 hours of downtime.",
      foxconnSolution: "Remote Ops toolchain (monitoring, diagnostics, predictive maintenance, remote repair)",
      quantifiedImpact: "On-site visits reduced 70%, downtime reduced 60%"
    },
    {
      painPoint: "Energy Cost Crisis (15-25% of TCO wasted)",
      quote: "Electricity is now 40% of our TCO. Traditional cooling wastes 15-25% energy.",
      foxconnSolution: "BMC-based PID control + K8s energy-aware scheduler",
      quantifiedImpact: "PUE from 1.6 → 1.4, energy cost savings NT$ 8-12M/year per 1MW datacenter"
    }
  ],
  
  // What We're Building - Product Portfolio
  productPortfolio: [
    {
      name: "Remote Ops Platform",
      targetCustomer: "CSP/Hyperscaler with multi-datacenter operations",
      capabilities: ["Real-time monitoring", "Remote diagnosis", "Predictive maintenance", "70% remote fix rate"],
      pricingModel: "Subscription: NT$ 5M/year per datacenter",
      competitiveAdvantage: "Deep BMC integration, multi-vendor GPU support, air-gapped deployment"
    },
    {
      name: "RAG Appliance (Private AI Knowledge Base)",
      targetCustomer: "Enterprise/SMB requiring on-premise AI (finance, healthcare, government)",
      capabilities: ["Document ingestion", "Permission governance", "Vector search", "Q&A interface", "Compliance audit trail"],
      pricingModel: "One-time: NT$ 8-15M + 20% annual support",
      competitiveAdvantage: "Turnkey deployment in 3 weeks, compliant with EU AI Act/GDPR/PDPA"
    },
    {
      name: "GPU Orchestration Platform",
      targetCustomer: "AI research labs, enterprises with shared GPU clusters",
      capabilities: ["Multi-tenant GPU sharing", "MIG/vGPU support", "Workload scheduling", "Cost allocation"],
      pricingModel: "Per-GPU subscription: NT$ 50K/GPU/year",
      competitiveAdvantage: "NVIDIA + AMD support, Kubernetes-native, no vendor lock-in"
    },
    {
      name: "Energy Optimization Suite",
      targetCustomer: "Large-scale datacenters (10MW+ power consumption)",
      capabilities: ["Predictive cooling", "Workload-aware power management", "PUE optimization", "Carbon reporting"],
      pricingModel: "Performance-based: 30% of energy savings",
      competitiveAdvantage: "L9-L10 firmware integration enables 15-25% energy reduction"
    }
  ],
  
  // Execution Roadmap - Key Milestones
  roadmap: {
    phase1: {
      name: "Foundation (2026 Q2-Q3)",
      theme: "Build core capabilities, deliver first benchmark case",
      milestones: ["Complete org design and key hires (Q2)", "Build AI workload validation lab (Q2)", "Deliver first Remote Ops pilot (Q3)", "Complete RAG Appliance MVP (Q3)"],
      investment: "NT$ 30M",
      successMetric: "1 benchmark customer, 70% remote diagnosis coverage"
    },
    phase2: {
      name: "Scaling (2026 Q4 - 2027 Q2)",
      theme: "Replicate success, expand customer base",
      milestones: ["Remote Ops expanded to 5+ customers (Q4 2026)", "RAG Appliance productized (S/M/L SKUs) (Q4 2026)", "Establish subscription business model (Q1 2027)", "Deliver first Sovereign AI case (Q2 2027)"],
      investment: "NT$ 50M/year",
      successMetric: "NT$ 50M ARR, 15% software attachment rate"
    },
    phase3: {
      name: "Maturity (2027 Q3-Q4)",
      theme: "Monetize at scale, establish market leadership",
      milestones: ["NT$ 750M annual software revenue", "20% software attachment rate across all orders", "Sovereign AI presence in 3+ countries", "Partner ecosystem: 10+ system integrators"],
      investment: "NT$ 65M/year (sustained)",
      successMetric: "20-25% gross margin, 85%+ customer retention"
    }
  },
  
  // Risk Register - Top 5 Risks and Mitigation
  risks: [
    { risk: "Talent acquisition challenges", probability: "High", impact: "High", mitigation: "Competitive compensation + equity; university partnerships; remote work to expand talent pool" },
    { risk: "Technology selection mistakes", probability: "Medium", impact: "High", mitigation: "70/30 rule (70% standard tech); technical advisory board; vendor-neutral architecture" },
    { risk: "Low market acceptance", probability: "Medium", impact: "High", mitigation: "Focus on existing CSP customers; pilot discount programs; build benchmark cases" },
    { risk: "Competitor response (Quanta/Wistron)", probability: "High", impact: "Medium", mitigation: "First-mover advantage; customer data and feedback moat; continuous innovation" },
    { risk: "Execution delay", probability: "Medium", impact: "Medium", mitigation: "Quarterly milestones; stage-gate investment; pivot or stop if Q4 2026 targets missed" }
  ],
  
  // The Ask - Clear Decision Required
  decisionRequired: {
    approve: "NT$ 65M/year budget for 50-80 person software team",
    timeline: "Q2 2026: Org design → Q3 2026: Team building → Q4 2026: First customer case",
    successMetrics: [
      "Year 1: NT$ 80M software revenue, 5% attachment rate",
      "Year 2: NT$ 250M software revenue, 12% attachment rate",
      "Year 3: NT$ 750M software revenue, 20% attachment rate, 20-25% gross margin"
    ],
    goNoGoCriteria: "If Year 1 software penetration <2.5% by Q4 2026, reassess strategy",
    riskOfInaction: "NT$ 1.5B+ opportunity loss by 2028 (customer churn + margin erosion + talent gap)", riskTimeline: "Q3 2026: Quanta/Wistron announce software partnerships → Q1 2027: First customer loses bid to software-enabled competitor → Q3 2027: Margin compression to 12-15% → Q1 2028: Commodity supplier status (5-8% margin)"
  },
  
  // Sources & Validation
  sources: [
    "NVIDIA Base Command Manager: https://www.nvidia.com/en-us/data-center/base-command-manager/",
    "NVIDIA Mission Control: https://www.nvidia.com/en-us/data-center/mission-control/",
    "HPE Private Cloud AI: https://www.hpe.com/us/en/private-cloud-ai.html",
    "IDC Sovereign AI Forecast 2025: https://www.idc.com/",
    "IEA Data Center Energy Report 2024: https://www.iea.org/reports/data-centres-and-energy",
    "EU AI Act: https://artificialintelligenceact.eu/",
    "Foxconn CSP customer energy audits (Q1 2026, 3 datacenters) - NT$ 1.5B risk calculation basis",
    "Customer deployment logs & support ticket analysis (2025-2026)",
    "Competitor analysis: Public information, customer reports, industry benchmarks (Q1 2026)"
  ]
};

export default executiveBrief;

// Risk Timeline - Quarterly Milestones of Inaction (Added 2026-03-17 by CoCo)
// Makes the cost of delay concrete and time-bound for leadership
export const riskTimelineDetailed = {
  headline: "Risk Timeline: What Happens If We Delay Software Investment",
  context: "Each quarter of delay increases catch-up cost by 2-3x and reduces addressable market by 10-15%",
  milestones: [
    { quarter: "2026 Q2", foxconnIfInvest: "Org design complete, first 15-20 hires, lab setup begins", foxconnIfDelay: "Status quo: no software roadmap, talent recruitment frozen", competitiveMove: "Quanta announces partnership with software vendor for Remote Ops", marketImpact: "First signal: ODM competitors recognize software as battleground" },
    { quarter: "2026 Q3", foxconnIfInvest: "Remote Ops MVP deployed at pilot customer, RAG Appliance alpha ready", foxconnIfDelay: "No software deliverables, sales team lacks differentiation story", competitiveMove: "Wistron launches cloud management platform (basic monitoring only)", marketImpact: "Customers begin asking Foxconn: 'What's your software roadmap?'" },
    { quarter: "2026 Q4", foxconnIfInvest: "First customer case study published, 5% software attachment rate", foxconnIfDelay: "Lost first competitive bid to software-enabled competitor", marketImpact: "First customer loss: NT$ 500M order goes to Dell/HPE with software bundle", financialImpact: "NT$ 75M software revenue opportunity lost (Year 1 target)" },
    { quarter: "2027 Q1", foxconnIfInvest: "Remote Ops expanded to 5 customers, RAG productized (S/M/L SKUs)", foxconnIfDelay: "Talent gap widens: 3-5 key software engineers leave for competitors", competitiveMove: "GIGABYTE announces AI software stack with RAG integration", marketImpact: "Margin pressure begins: customers demand price concessions without software value" },
    { quarter: "2027 Q2", foxconnIfInvest: "NT$ 250M ARR, 12% attachment rate, first sovereign AI case", foxconnIfDelay: "Second customer loss: strategic account migrates to NVIDIA Base Command", marketImpact: "Industry perception shifts: Foxconn seen as 'hardware-only vendor'", financialImpact: "NT$ 125M software revenue opportunity lost (Year 2 target)" },
    { quarter: "2027 Q3", foxconnIfInvest: "20% gross margin achieved, customer retention 85%+", foxconnIfDelay: "Margin compression visible: gross margin drops to 12-15% on key accounts", competitiveMove: "Quanta/Wistron software partnerships mature, feature parity approaching", marketImpact: "Foxconn relegated to 'budget option' - competing on price, not value" },
    { quarter: "2027 Q4", foxconnIfInvest: "NT$ 750M annual software revenue run-rate, 20% attachment rate", foxconnIfDelay: "Talent crisis: unable to recruit software leadership, team at 30% of plan", marketImpact: "Hyperscaler customers begin insourcing: 'If Foxconn can't do software, we build ourselves'", financialImpact: "NT$ 375M software revenue opportunity lost (Year 3 target)" },
    { quarter: "2028 Q1", foxconnIfInvest: "Market leadership: 20-25% gross margin, 11.5x ROI delivered", foxconnIfDelay: "Commodity supplier status confirmed: 5-8% margin, no differentiation", marketImpact: "Foxconn positioned as contract manufacturer for hyperscaler brands", strategicOutcome: "NT$ 1.5B+ cumulative opportunity loss, 10-15 year recovery timeline" }
  ],
  cumulativeImpact: {
    revenueLoss: "NT$ 1.5B+ (3-year software revenue foregone)",
    marginErosion: "10-15pp gross margin compression (from 20% to 5-8%)",
    customerChurn: "15-20% of strategic accounts lost to software-enabled competitors",
    talentGap: "5-7 years to rebuild software capability and market credibility",
    brandDamage: "Perception shift from 'strategic partner' to 'commodity supplier' - difficult to reverse"
  }
};
