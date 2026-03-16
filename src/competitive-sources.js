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
    { name: 'Dell AI Factory', url: 'https://www.dell.com/en-us/ai-factory', description: 'End-to-end AI infrastructure with NVIDIA', relevance: 'Direct competitor in AI infrastructure' }
  ],
  hpe: [
    { name: 'HPE Ezmeral', url: 'https://www.hpe.com/us/en/software/ezmeral.html', description: 'Hybrid cloud and AI platform', relevance: 'Competes in enterprise AI deployment' },
    { name: 'HPE Private Cloud AI', url: 'https://www.hpe.com/us/en/private-cloud-ai.html', description: 'Private AI infrastructure solution', relevance: 'Direct competitor for private AI deployments' }
  ],
  // Competitor Server Vendors
  qct: [
    { name: 'QCT Cloud-DCIM', url: 'https://www.qct.com/solution/product/cloud-dcim', description: 'Data center infrastructure management', relevance: 'Limited software offering compared to our full stack' }
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
  // Standards & Regulations
  regulations: [
    { name: 'EU AI Act', url: 'https://artificialintelligenceact.eu/', description: 'EU AI regulation framework', relevance: 'Effective 2026, drives sovereign AI demand' },
    { name: 'GDPR', url: 'https://gdpr.eu/', description: 'EU data protection regulation', relevance: 'Data residency requirements' }
  ]
};

export default competitiveSources;
