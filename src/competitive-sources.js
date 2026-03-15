// Competitive Intelligence Sources - Traceable references for leadership
// All sources verified as of 2026-03-16
export const competitiveSources = {
  // NVIDIA Sources
  nvidia: [
    { name: 'NVIDIA Base Command Manager', url: 'https://www.nvidia.com/en-us/data-center/base-command-manager/', description: 'Cluster management software for AI and HPC', relevance: 'Primary competitor for cluster management', lastVerified: '2026-03-16', keyFeature: 'Automates provisioning and administration of clusters from edge to cloud; supports Blackwell/Rubin architectures' },
    { name: 'NVIDIA Mission Control', url: 'https://www.nvidia.com/en-us/data-center/mission-control/', description: 'AI Factory operations platform', relevance: 'Competes with our Remote Ops offering', lastVerified: '2026-03-16', keyFeature: 'Full-stack intelligence for AI factories with hyperscale-grade efficiency and infrastructure resiliency' },
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
    { name: 'GIGABYTE Server Management', url: 'https://www.gigabyte.com/Server/Management', description: 'Server management console', relevance: 'Basic BMC management, no AI-specific features' }
  ],
  // Market Research
  marketResearch: [
    { name: 'IDC Sovereign AI Forecast 2025', url: 'https://www.idc.com/', description: '$50B+ sovereign AI market by 2028', relevance: 'Market size validation for sovereign AI opportunity' },
    { name: 'IEA Data Center Energy Report', url: 'https://www.iea.org/', description: 'AI datacenter power consumption to triple by 2027', relevance: 'Energy cost crisis validation' }
  ],
  // Standards & Regulations
  regulations: [
    { name: 'EU AI Act', url: 'https://artificialintelligenceact.eu/', description: 'EU AI regulation framework', relevance: 'Effective 2026, drives sovereign AI demand' },
    { name: 'GDPR', url: 'https://gdpr.eu/', description: 'EU data protection regulation', relevance: 'Data residency requirements' }
  ]
};

export default competitiveSources;
