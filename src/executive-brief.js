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
    problem: "Customers spend NT$ 10M+ on GPU servers, but 40-60% sit idle. Deployment takes 2-4 weeks. When GPUs fail, 8-hour downtime costs NT$ 2-5M per incident in lost revenue (based on NT$ 6-12M/month AI workload value). Without software, this is stranded capital + delayed revenue.",
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
    strategicImplication: "Without software differentiation, Foxconn faces commoditization at 5-8% margin. Software investment is not optional—it's existential. Window: 12-18 months (Q2 2026-Q4 2027) to establish credibility before competitors lock in customers.",
    ecosystemAdvantage: "Foxconn leverages partner ecosystem (Red Hat, Canonical, NVIDIA Partner Network) to accelerate delivery vs. building everything from scratch. Competitors like Quanta/Wistron lack these partnerships."
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
      quantifiedImpact: "On-site visits reduced 70%, downtime reduced 60%, saving NT$ 1.2-3M per incident (based on NT$ 2-5M/8hr downtime cost)"
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
    // First 30 Days - Immediate Actions if Approved Today (Added 2026-03-18 by CoCo)
    first30Days: [
      "Week 1: Appoint software product lead, finalize org design (50-80 FTE target)",
      "Week 2: Begin recruitment for L9-L10 firmware team (5-8 hires), initiate Red Hat/Canonical partnership discussions",
      "Week 3: Setup AI workload lab (H100/H200 test environment), define Remote Ops MVP scope with pilot customer",
      "Week 4: Complete hiring plan for Q3 (L11-L12 team 10-15 FTE), finalize RAG appliance architecture (vector DB + permission governance)"
    ],
    thirtyDayDeliverables: "Org chart filled, lab operational, pilot customer identified, partnership LOIs signed",
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
,
  // Partner Ecosystem - Execution Accelerator (Added 2026-03-17 by CoCo)
  // Addresses "Can Foxconn execute?" concern by showing we leverage existing ecosystems
  partnerEcosystem: {
    headline: "Strategic Partnerships: Accelerate Time-to-Market by 6-12 Months",
    coreInsight: "Foxconn doesn't build everything from scratch. We integrate best-in-class partners to deliver faster than competitors.",
    keyPartnerships: [
      {
        partner: "Red Hat / IBM",
        capability: "OpenShift AI, RHEL AI stack, Enterprise support",
        foxconnValue: "Pre-integrated OpenShift AI + Foxconn Remote Ops = 3-week deployment vs. 12-week custom build",
        status: "Existing Foxconn partnership (server hardware)"
      },
      {
        partner: "Canonical (Ubuntu)",
        capability: "MAAS, Juju, Ubuntu Pro, Charmed Kubernetes",
        foxconnValue: "Leverage Ubuntu's AI/ML stack + Foxconn firmware integration = turnkey solution",
        status: "Existing partnership (Ubuntu on Foxconn servers)"
      },
      {
        partner: "NVIDIA Partner Network",
        capability: "Base Command Manager, NIM, DGX Cloud integration",
        foxconnValue: "NVIDIA-certified integration + Foxconn hardware optimization = best-in-class performance",
        status: "Target: Q3 2026 certification"
      },
      {
        partner: "Vector DB Providers (Pinecone, Weaviate, Milvus)",
        capability: "RAG infrastructure, vector search, embedding models",
        foxconnValue: "Pre-integrated RAG stack = 3-week deployment vs. 3-month custom integration",
        status: "Evaluation phase (Q2 2026)"
      },
      {
        partner: "System Integrators (Regional)",
        capability: "Local deployment, customer support, compliance certification",
        foxconnValue: "Extend reach to Tier 2/3 markets without building 100-person services team",
        status: "Target: 3-5 SI partners by Q4 2026"
      }
    ],
    competitiveAdvantage: "Competitors like Quanta/Wistron lack these partnerships. Foxconn's hardware scale provides leverage for favorable terms.",
    executionImpact: "Partnerships reduce Year 1 recruitment target from 50 to 30 FTE (40% reduction), lowering execution risk."
  }};

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

// Investment Decision Card - Printable one-pager for CFO/CEO quick decisions (Added 2026-03-17 by CoCo)
// Purpose: Distills entire investment case into 30-second read for time-constrained executives
export const investmentDecisionCard = {
  headline: "Software Investment Decision Card",
  subtitle: "NT$ 65M/year investment → NT$ 750M/year return (Year 3)",
  theAsk: {
    what: "Build 50-80 person software team (L9-L12 full-stack)",
    budget: "NT$ 65M/year",
    timeline: "Q2 2026: Org design → Q3: Team build → Q4: First case"
  },
  whyNow: [
    "GPU supply normalizing → competition shifts to utilization efficiency",
    "Sovereign AI regulations → $50B+ compliance market opening",
    "Energy crisis → Power = 40% of TCO, Foxconn saves 15-25%",
    "Window closing → 12-18 months before competitors lock in customers"
  ],
  quantifiedBenefits: {
    customerValue: [
      "GPU utilization: 40% → 85% (+42%)",
      "Deployment: 2-4 weeks → 2 hours (-99%)",
      "Downtime: 8 hours → 2 hours (-75%)",
      "Energy cost: -15-25% (PUE 1.6 → 1.4)"
    ],
    foxconnValue: [
      "Gross margin: 10-15% → 20-25% (+10pp)",
      "Revenue: NT$ 750M/year (Year 3)",
      "Customer retention: 60% → 85%+",
      "Valuation multiple: 8-12x → 20-30x P/E"
    ]
  },
  financials: {
    investment: "NT$ 65M/year",
    year1Return: "NT$ 80M revenue, 5% attachment",
    year2Return: "NT$ 250M revenue, 12% attachment",
    year3Return: "NT$ 750M revenue, 20% attachment, 11.5x ROI",
    payback: "18-24 months",
    irr: "68%"
  },
  riskOfInaction: {
    financial: "NT$ 1.5B+ opportunity loss by 2028",
    strategic: "Commodity supplier status (5-8% margin)",
    timeline: "Q4 2027: Margin compression visible → Q1 2028: Commodity status confirmed",
    customerLoss: "15-20% strategic accounts lost to software-enabled competitors"
  },
  competitiveContext: {
    odm: "Quanta/Wistron: 10-30 person teams, hardware-focused, 10-15% margin",
    foxconn: "50-80 person vision, L9-L12 full-stack, 20-25% margin",
    moat: "Neutral (NVIDIA+AMD) + Sovereign AI + Remote Ops = 40% of market hyperscalers cannot serve"
  },
  decision: {
    approve: "NT$ 65M/year budget, 50-80 FTE software team",
    successMetrics: "Year 1: 5% attachment, Year 2: 12%, Year 3: 20% attachment, 20-25% GM",
    goNoGo: "If Year 1 <2.5% attachment by Q4 2026, reassess strategy",
    riskMitigation: "Stage-gate funding, pilot customers before scale, pivot if targets missed"
  },
  oneLiner: "Software is the difference between strategic partner (20-25% margin) and commodity supplier (5-8% margin). NT$ 65M investment → NT$ 750M return, 11.5x ROI."
};

// Investment Thesis in 5 Points - Ultra-condensed for CEO/CFO quick decisions (Added 2026-03-17 by CoCo)
// Purpose: Distills entire 800+ line brief into 5 memorable points that fit on a business card
export const investmentThesisIn5Points = {
  headline: "Software Investment Thesis: 5 Points Every Leader Should Remember",
  
  point1: {
    title: "The Problem: Stranded Capital",
    content: "Customers spend NT$ 10M+ on GPUs but 40-60% sit idle. Deployment takes 2-4 weeks. No software = delayed revenue.",
    memoryHook: "40-60% GPU idle = NT$ 5M+ stranded per NT$ 10M investment"
  },
  
  point2: {
    title: "The Solution: Software Amplifier",
    content: "Foxconn software transforms idle GPUs into 85%+ utilization, 2-hour deployment, 70% remote fix rate.",
    memoryHook: "Same hardware, 2x output: 85% utilization, 2-hour deployment"
  },
  
  point3: {
    title: "The Market: $50B+ Sovereign AI Opening",
    content: "EU AI Act, GDPR, data residency laws create NT$ 50B+ market for local AI deployment. Foxconn's neutral architecture (NVIDIA+AMD) + air-gap capability = 40% of market hyperscalers cannot serve.",
    memoryHook: "NT$ 50B sovereign AI market — only Foxconn can serve air-gap customers"
  },
  
  point4: {
    title: "The Financial: 11.5x ROI, 18-Month Payback",
    content: "NT$ 65M/year investment → NT$ 750M software revenue (Year 3), 20-25% gross margin (vs. 10-15% hardware-only). Risk of inaction: NT$ 1.5B+ opportunity loss by 2028.",
    memoryHook: "NT$ 65M in → NT$ 750M out (11.5x). Wait until 2028 = lose NT$ 1.5B"
  },
  
  point5: {
    title: "The Window: 12-18 Months to Establish Leadership",
    content: "Q2 2026-Q4 2027: Compete on software differentiation. After Q4 2027: Competitors lock in customers, Foxconn relegated to commodity supplier (5-8% margin).",
    memoryHook: "12-18 months to lead. After that: 5-8% margin commodity trap."
  },
  
  // The One-Sentence Version (for elevator conversations)
  oneSentenceVersion: "Foxconn software turns idle GPUs into 85%+ utilization, captures NT$ 50B sovereign AI market, delivers 11.5x ROI — but only if we act in next 12-18 months before competitors lock in customers.",
  
  // The Three-Word Version (for quick alignment)
  threeWordVersion: "Utilization. Sovereignty. Timing.",
  
  // Why These 5 Points Matter
  context: "Leadership decisions hinge on 5 questions: (1) What's broken? (2) How do we fix it? (3) How big is the prize? (4) What's the return? (5) What happens if we wait? These 5 points answer each question with data, not slogans."

};

// Ideal Pilot Customer Profile - Who Should Be Our First Benchmark? (Added 2026-03-19 by CoCo)
// Purpose: Make the "first customer" concrete for leadership - not just "a CSP" but a specific profile
export const idealPilotCustomer = {
  headline: "Ideal First Customer Profile: Who We Target for Q3 2026 Pilot",
  criteria: [
    {
      criterion: "Existing Foxconn Hardware Customer",
      rationale: "Already trust Foxconn hardware quality; software is an upsell, not a green-field sale",
      example: "Tier-2 CSP with 500-2000 GPU deployment, already using Foxconn H200 servers"
    },
    {
      criterion: "Pain Point: High GPU Idle Time (>40%)",
      rationale: "Clear ROI story: utilization improvement from 40% → 85% pays for software in 6-9 months",
      example: "AI research lab or enterprise AI platform with bursty workload patterns"
    },
    {
      criterion: "Multi-Site Operations (2+ datacenters)",
      rationale: "Remote Ops value proposition only makes sense if they have distributed infrastructure",
      example: "CSP with servers in Taipei + Kaohsiung, or Taiwan + Singapore"
    },
    {
      criterion: "Compliance Constraints (Sovereign AI Candidate)",
      rationale: "Cannot use hyperscaler cloud due to data residency; must deploy on-premise",
      example: "Financial services, healthcare, government-adjacent workload"
    },
    {
      criterion: "Decision Maker Pain: Recruitment + Retention",
      rationale: "CTO/CIO struggling to recruit AI infrastructure team; Foxconn software = force multiplier",
      example: "Traditional enterprise transitioning to AI, lacks in-house K8s/BMC expertise"
    }
  ],
  disqualifiers: [
    "Hyperscale customers (10,000+ GPUs) - too complex for first pilot",
    "Pure cloud-native companies (already using AWS/Azure exclusively)",
    "Customers demanding 100% custom development (not productizable)"
  ],
  valueProposition: "For this customer, Foxconn Remote Ops + RAG Appliance delivers: (1) 40% → 85% GPU utilization improvement, (2) 2-week → 2-hour deployment, (3) 70% reduction in on-site visits, (4) Compliance with data residency requirements. Total value: NT$ 20-50M/year in operational savings + revenue acceleration.",
  pricing: "Pilot pricing: NT$ 5-10M first year (discounted from NT$ 15M list) in exchange for case study rights and quarterly feedback sessions."
};

// Board Decision Card - What Leadership Needs to Approve Today (Added 2026-03-19 by CoCo)
export const boardDecisionCard = {
  headline: '今日董事會決策事項',
  context: '本簡報旨在爭取管理層對軟件部門投資的正式批准，以便 Q2 啟動組織設計、Q3 開始交付價值',
  decisionRequired: [
    {
      item: '批准 NT$ 65M/年 軟件團隊預算',
      rationale: '50-80 人團隊（L9-L12）、實驗室設備、開發工具',
      timeline: '2026 Q2-Q4 分階段投入',
      successMetric: 'Year 3: NT$ 750M 軟件營收，20-25% 毛利率'
    },
    {
      item: '授權軟件產品線組織設計',
      rationale: '從「免費附加功能」轉型為「獨立營收產品線」，需獨立 P&L 與定價權',
      timeline: '2026 Q2 完成組織設計',
      successMetric: '50-80 FTE 團隊編制確認，關鍵職位（Firmware Lead、Orchestration Lead）開始招募'
    },
    {
      item: '批准首波 90 天執行計畫',
      rationale: '快速建立客戶案例與市場驗證',
      timeline: '2026 Q2 前 90 天',
      successMetric: 'Remote Ops 與 RAG 各 1 個客戶上線，NT$ 5-10M 首張訂單'
    },
    {
      item: '確認軟件銷售激勵機制',
      rationale: '目前銷售團隊僅以硬件銷量為 KPI，需加入軟件加值誘因',
      timeline: '2026 Q3 前完成制度調整',
      successMetric: '軟件 attach rate 達 5%（Year 1）、20%（Year 3）'
    }
  ],
  ifApproved: 'Q2 完成組織設計 → Q3 首批 15-20 人到職 → Q4 首個客戶案例發布 → 2027 年規模化複製',
  ifDelayed: 'Q3 競爭對手（廣達/緯穎）率先建立軟件口碑 → Q1 2027 首案流失 → Q3 2027 毛利壓縮至 12-15% → 2028 商品化陷阱（5-8% 毛利）',
  riskOfNoDecision: '維持現狀 = 選擇落後。2026-2027 是 12-18 個月機會窗，若不行動，2028 年前將喪失 NT$ 1.5B+ 軟件加值營收，且淪為純硬件供應商',
  nextMeeting: '建議於 2026 Q2 董事會正式列案審議，並指定專案負責人（建議由 CTO 或新事業部主管領軍）',
};

// Board-Ready Software Department Scorecard (Added 2026-03-19 by CoCo)
// Purpose: Turn the software department argument from narrative into an operational review framework
// Usage: Quarterly leadership reviews, board updates, go/no-go decisions
export const softwareDepartmentScorecard = {
  headline: 'Software Department Scorecard: Quarterly Review Framework',
  context: 'This scorecard enables leadership to govern the software department investment with clear KPIs, thresholds, and recommended actions. Review quarterly.',
  kpis: [
    {
      metric: 'Software Attach Rate',
      definition: '% of total hardware orders that include software (Remote Ops, RAG, Orchestration)',
      current: '0% (Q2 2026 baseline)',
      target: { year1: '5%', year2: '12%', year3: '20%' },
      threshold: 'If <2.5% by Q4 2026, trigger strategy review',
      status: '🔴 Not yet started',
      recommendedAction: 'If below target: (1) Review sales incentive structure, (2) Identify pilot customers, (3) Adjust pricing/packaging'
    },
    {
      metric: 'Handoff Time (Hardware to Software)',
      definition: 'Time from hardware delivery to software deployment completion',
      current: '2-4 weeks (manual integration)',
      target: { year1: '3 days', year2: '1 day', year3: '2 hours' },
      threshold: 'If >1 week by Q4 2026, escalate automation investment',
      status: '🔴 2-4 weeks',
      recommendedAction: 'If above target: (1) Invest in pre-integration automation, (2) Standardize Helm charts, (3) Reduce manual steps'
    },
    {
      metric: 'Remote Resolution Coverage',
      definition: '% of customer issues resolved remotely without on-site visit',
      current: '30% (baseline)',
      target: { year1: '50%', year2: '65%', year3: '70%' },
      threshold: 'If <40% by Q2 2027, review Remote Ops tooling',
      status: '🔴 30%',
      recommendedAction: 'If below target: (1) Enhance predictive maintenance accuracy, (2) Expand remote diagnostic capabilities, (3) Improve runbook automation'
    },
    {
      metric: 'Lifecycle Governance Adoption',
      definition: '% of customers using Lifecycle Control Tower for upgrades/rollback',
      current: '0% (Q2 2026 baseline)',
      target: { year1: '30%', year2: '50%', year3: '70%' },
      threshold: 'If <20% by Q2 2027, review UX and onboarding',
      status: '🔴 Not yet launched',
      recommendedAction: 'If below target: (1) Simplify upgrade workflows, (2) Provide rollback guarantees, (3) Offer managed upgrade service'
    },
    {
      metric: 'Software Gross Margin',
      definition: 'Software revenue gross margin (target: 60%+ at scale)',
      current: 'N/A (pre-revenue)',
      target: { year1: '60%', year2: '60%', year3: '60%' },
      threshold: 'If <50% by Year 2, review cost structure',
      status: '🔴 Pre-revenue',
      recommendedAction: 'If below target: (1) Increase automation, (2) Reduce custom development, (3) Scale via partners'
    },
    {
      metric: 'Customer Retention Rate',
      definition: '% of software customers renewing subscription after Year 1',
      current: 'N/A (no renewals yet)',
      target: { year1: 'N/A', year2: '75%', year3: '85%' },
      threshold: 'If <70% by Year 3, investigate churn causes',
      status: '🔴 No data',
      recommendedAction: 'If below target: (1) Conduct exit interviews, (2) Improve onboarding, (3) Enhance customer success program'
    }
  ],
  managementActions: {
    green: 'KPI on track - continue current strategy, document learnings for scaling',
    yellow: 'KPI at risk - initiate corrective action plan within 30 days, escalate to steering committee',
    red: 'KPI off track - trigger go/no-go review, consider pivot or stop decision'
  },
  escalationMatrix: {
    level1: { trigger: '1 KPI red for 1 quarter', action: 'Department head presents recovery plan to CTO', timeline: 'Within 30 days' },
    level2: { trigger: '2+ KPIs red for 2 consecutive quarters', action: 'Steering committee review, consider strategy pivot', timeline: 'Within 60 days' },
    level3: { trigger: 'Software attach rate <2.5% by Q4 2026', action: 'Executive review: continue, pivot, or stop', timeline: 'Board-level decision required' }
  },
  quarterlyReviewTemplate: {
    reviewDate: 'YYYY-MM-DD',
    quarter: 'Q# 202X',
    kpiStatus: { attachRate: '🔴/🟡/🟢', handoffTime: '🔴/🟡/🟢', remoteResolution: '🔴/🟡/🟢', lifecycleGovernance: '🔴/🟡/🟢', grossMargin: '🔴/🟡/🟢', retention: '🔴/🟡/🟢' },
    overallStatus: '🔴/🟡/🟢',
    keyDecisions: ['Decision 1', 'Decision 2'],
    actionsForNextQuarter: ['Action 1', 'Action 2'],
    escalationRequired: 'Yes/No - If yes, specify level and timeline'
  },
  successDefinition: {
    year1: 'Establish credibility: 1-2 benchmark customers, Remote Ops MVP delivered, RAG Appliance POC complete',
    year2: 'Demonstrate repeatability: 5+ customers, NT$ 250M ARR, 12% attach rate, 60% gross margin',
    year3: 'Achieve scale: NT$ 750M ARR, 20% attach rate, 85%+ retention, 20-25% gross margin'
  },
  goNoGoCriteria: {
    continue: 'On track to hit Year 1 targets (5% attach, 1 customer case, NT$ 80M revenue)',
    pivot: 'Missed attach rate but customer feedback strong - consider different segment or pricing',
    stop: 'Year 1 attach rate <2.5% AND no clear path to differentiation AND customer feedback negative'
  }
};

