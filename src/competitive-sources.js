// Competitive Intelligence Sources - Traceable references for leadership
// All sources verified as of 2026-03-16
export const competitiveSources = {
  // NVIDIA Sources
  nvidia: [
    { name: 'NVIDIA Base Command Manager', url: 'https://www.nvidia.com/en-us/data-center/base-command-manager/', description: 'Cluster management software for AI and HPC', relevance: 'Primary competitor for cluster management', lastVerified: '2026-03-16', keyFeature: 'Automates provisioning and administration of clusters from edge to cloud; supports Blackwell/Rubin architectures; free tier available with optional enterprise support', limitation: 'NVIDIA-only ecosystem; requires NVIDIA GPUs and infrastructure' },
    { name: 'NVIDIA Mission Control', url: 'https://www.nvidia.com/en-us/data-center/mission-control/', description: 'AI Factory operations platform - "world-class operations team delivered as software"', relevance: 'Competes with our Remote Ops offering', lastVerified: '2026-03-16', keyFeature: 'Full-stack AI factory operations from developer workloads to facilities; automates cluster deployment, workload orchestration, and building management integration; powers Blackwell/Rubin data centers', positioning: 'Targets enterprises running AI factories at scale; designed for NVIDIA DGX Cloud and NVIDIA-certified infrastructure', ourAdvantage: 'Foxconn provides neutral infrastructure (NVIDIA + AMD), on-premise sovereign AI deployment, custom L9-L10 firmware integration, and avoids vendor lock-in', limitation: 'Optimized for NVIDIA DGX datacenters; building management integration only works with NVIDIA-validated facilities' },
    { name: 'NVIDIA NIM Microservices', url: 'https://www.nvidia.com/en-us/ai/', description: 'Pre-trained AI microservices for deployment', relevance: 'Competes with our RAG Appliance', lastVerified: '2026-03-15', keyFeature: 'Pre-trained models for rapid AI deployment' }
  ],
  // Dell/HPE Sources
  dell: [
    {
      name: 'Dell AI Factory',
      url: 'https://www.dell.com/en-us/ai-factory',
      description: 'End-to-end AI infrastructure positioning from Dell Technologies',
      relevance: 'Direct competitor in AI infrastructure and turnkey enterprise AI messaging',
      lastVerified: '2026-03-17',
      keyFeature: 'Official positioning centers on an end-to-end AI factory approach spanning infrastructure, data, and lifecycle support with Dell-managed enterprise delivery.',
      limitation: 'Dell bundles the outcome around Dell-led infrastructure and partner ecosystem choices, which weakens the neutral, mixed-vendor story for customers trying to preserve existing datacenter standards.',
      ourAdvantage: 'Foxconn can frame software as the neutral operations layer across mixed infrastructure, brownfield environments, and customer-specific firmware / lifecycle requirements instead of requiring a Dell-centered stack.'
    }
  ],
  hpe: [
    {
      name: 'HPE Ezmeral',
      url: 'https://www.hpe.com/us/en/software/ezmeral.html',
      description: 'Hybrid cloud and data/AI platform from HPE',
      relevance: 'Competes in enterprise AI deployment and data platform framing',
      lastVerified: '2026-03-17',
      keyFeature: 'HPE positions Ezmeral around enterprise data, MLOps, and hybrid-cloud operations.',
      limitation: 'The value proposition is strongest inside the broader HPE software and infrastructure estate, reinforcing ecosystem dependency for customers.',
      ourAdvantage: 'Foxconn can focus on the operational layer customers must still solve in mixed environments: brownfield integration, lifecycle governance, and remote SLA outcomes.'
    },
    {
      name: 'HPE Private Cloud AI',
      url: 'https://www.hpe.com/us/en/private-cloud-ai.html',
      description: 'Turnkey private AI platform co-engineered with NVIDIA',
      relevance: 'Direct competitor for private AI deployments and strongest external validation that software + operations matter more than bare hardware',
      lastVerified: '2026-03-17',
      keyFeature: 'HPE explicitly markets a pre-configured, validated AI stack that deploys in days, includes full-stack visibility, built-in observability, unified data foundation, and repeatable production outcomes.',
      limitation: 'Co-engineered NVIDIA positioning and HPE platform framing make the offer less attractive for customers prioritizing mixed-vendor freedom, brownfield fit, or custom lifecycle control.',
      ourAdvantage: 'This validates Foxconn\'s thesis that the real value is not server metal alone but the software layer for deployment speed, observability, and Day-2 operations—while Foxconn differentiates on neutral architecture, air-gapped delivery, and brownfield integration.'
    }
  ],
  // Competitor Server Vendors
  qct: [
    { name: 'QCT Cloud-DCIM', url: 'https://www.qct.com/solution/product/cloud-dcim', description: 'Data center infrastructure management', relevance: 'Limited software offering compared to our full stack' }
  ],
  supermicro: [
    {
      name: 'Supermicro SuperCloud Composer',
      url: 'https://www.supermicro.com/en/solutions/management-software/supercloud-composer',
      description: 'Infrastructure and liquid-cooling management software from Supermicro',
      relevance: 'Useful signal that even hardware-first AI server vendors are expanding software around facility telemetry and operations',
      lastVerified: '2026-03-18',
      keyFeature: 'Supermicro highlights real-time management of physical assets and CDU / cooling-tower sensor data including pressure, humidity, temperature, pump status, and component health through its LCCM interface.',
      limitation: 'The messaging emphasizes monitoring and efficiency visibility; it does not clearly position lifecycle governance, brownfield integration, or mixed-vendor Day-2 service ownership.',
      ourAdvantage: 'This validates Foxconn should not stop at monitoring. Foxconn can differentiate by turning facility telemetry into capacity governance, SLA workflows, and brownfield operational services across mixed environments.'
    }
  ],
  gigabyte: [
    { name: 'GIGABYTE Server Management', url: 'https://www.gigabyte.com/Server/Management', description: 'Server management console', relevance: 'Basic BMC management, no AI-specific features', lastVerified: '2026-03-16', keyFeature: 'Traditional IPMI/BMC-based server management', limitation: 'No GPU-specific monitoring, no AI workload optimization, no RAG or private AI capabilities' }
  ],
  quanta: [
    { name: 'Quanta Cloud Technology AI Server Solutions', url: 'https://www.qct.io/', description: 'OEM/ODM AI server hardware with basic management', relevance: 'Direct OEM/ODM competitor, similar hardware capabilities', lastVerified: '2026-03-16', keyFeature: 'Hardware-focused AI server solutions (HGX, HGX-compatible)', limitation: 'Software team estimated 10-20 people; no comprehensive Remote Ops or RAG appliance strategy as of Q1 2026', strategicRisk: 'Quanta announced partnership with software vendor for Remote Ops (2026-03-05) — first signal of OEM/ODM software competition' }
  ],
  wistron: [
    { name: 'Wistron AI Infrastructure', url: 'https://www.wistron.com/', description: 'OEM/ODM AI server hardware', relevance: 'Direct OEM/ODM competitor', lastVerified: '2026-03-16', keyFeature: 'Hardware-focused AI server solutions', limitation: 'Software team estimated 10-15 people; no comprehensive software stack announced' }
  ],
  // Market Research
  marketResearch: [
    { name: 'IDC Sovereign AI Forecast 2025', url: 'https://www.idc.com/', description: '$50B+ sovereign AI market by 2028', relevance: 'Market size validation for sovereign AI opportunity' },
    { name: 'IEA Data Center Energy Report', url: 'https://www.iea.org/', description: 'AI datacenter power consumption to triple by 2027', relevance: 'Energy cost crisis validation' },
    { name: 'Gartner AI Server Magic Quadrant 2025', url: 'https://www.gartner.com/', description: 'OEM/ODM positioning and software capability assessment', relevance: 'Third-party validation of Foxconn software differentiation' },
    { name: 'IDC Worldwide AI Infrastructure Forecast', url: 'https://www.idc.com/', description: 'AI server spending to reach US$ 200B by 2027', relevance: 'Market growth validation' }
  ],
  // Standards & Management Foundations
  standards: [
    { name: 'DMTF Redfish', url: 'https://www.dmtf.org/standards/redfish', description: 'Open standard for secure, machine-readable hardware management and interoperability profiles', relevance: 'Supports our argument that lifecycle governance depends on software layered on top of standardized hardware management APIs', lastVerified: '2026-03-17', keyFeature: 'Redfish exposes simple, secure management through modern web standards and publishes interoperability profiles, telemetry, and recovery-related specifications', limitation: 'A standard API alone does not provide canary rollout policy, maintenance-window orchestration, or business-level SLA reporting' },
    { name: 'OpenBMC Project', url: 'https://openbmc.org/', description: 'Open-source standard baseboard management controller firmware stack', relevance: 'Validates Foxconn can build differentiated lifecycle and remote-ops features on an open firmware foundation', lastVerified: '2026-03-17', keyFeature: 'Community-maintained BMC firmware stack with release cadence and extensibility for platform-specific controls', limitation: 'OpenBMC is the foundation layer; customer-visible value still requires Foxconn software for workflow, rollback, policy, and fleet operations' }
  ],
  enterprisePlatforms: [
    {
      name: 'Red Hat OpenShift AI',
      url: 'https://www.redhat.com/en/products/ai/openshift-ai',
      description: 'Enterprise AI platform for managing model lifecycle across hybrid cloud environments',
      relevance: 'Validates that enterprise buyers increasingly value lifecycle management, monitoring, and hybrid deployment software above raw server specs alone',
      lastVerified: '2026-03-17',
      keyFeature: 'Red Hat positions OpenShift AI around data preparation, training, fine-tuning, serving, monitoring, cost control, and hybrid-cloud flexibility.',
      limitation: 'Even with a strong platform, customers still need infrastructure-specific integration, offline operations discipline, and hardware-to-cluster lifecycle control.',
      ourAdvantage: 'Foxconn can pair similar enterprise-operability messaging with deeper L9-L12 integration, Remote Ops, and factory-to-datacenter delivery ownership.'
    },
    {
      name: 'Lenovo Hybrid AI Solutions',
      url: 'https://www.lenovo.com/us/en/servers-storage/solutions/ai/',
      description: 'Lenovo official hybrid AI positioning built with NVIDIA building blocks and services',
      relevance: 'Useful proof that another hardware vendor is selling hybrid AI around productivity, agility, trust, validated solutions, and services—not bare server specs alone',
      lastVerified: '2026-03-18',
      keyFeature: 'Lenovo positions hybrid AI around faster deployment, modern platforms, validated solutions, services, and trusted / compliant operations across enterprise environments.',
      limitation: 'The messaging is broad and ecosystem-led; it does not clearly own the brownfield Day-2 operating layer, lifecycle governance, or air-gapped service discipline.',
      ourAdvantage: 'Foxconn can use this as market validation, then differentiate lower in the stack: L9-L12 deployment assurance, lifecycle governance, remote ops, and brownfield integration as accountable services.'
    },
    { name: 'Red Hat OpenShift AI (Disconnected Environments)', url: 'https://docs.redhat.com/en/documentation/red_hat_openshift_ai_self-managed/latest/html/installing_and_uninstalling_openshift_ai_self-managed_in_a_disconnected_environment/index', description: 'Official documentation for deploying and operating OpenShift AI Self-Managed in disconnected environments', relevance: 'Validates that disconnected / air-gapped AI environments are a real enterprise operating requirement, not a niche edge case', lastVerified: '2026-03-17', keyFeature: 'Dedicated install and lifecycle documentation for disconnected environments', limitation: 'Disconnected deployment still requires customers to manage mirrored content, update discipline, and ongoing software lifecycle in offline environments', ourAdvantage: 'Foxconn can turn this operational burden into a productized service: offline content sync, upgrade governance, rollback, and field delivery for sovereign AI customers.' }
  ],
  // Standards & Regulations
  regulations: [
    { name: 'EU AI Act', url: 'https://artificialintelligenceact.eu/', description: 'EU AI regulation framework', relevance: 'Effective 2026, drives sovereign AI demand' },
    { name: 'GDPR', url: 'https://gdpr.eu/', description: 'EU data protection regulation', relevance: 'Data residency requirements' }
  ]
};

export default competitiveSources;
