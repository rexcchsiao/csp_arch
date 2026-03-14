// Competitive Landscape Analysis - Foxconn vs. NVIDIA Base Command Manager / Mission Control
// For strengthening the argument: "Where does Foxconn software fit in the AI infrastructure ecosystem?"

export const competitiveLandscape = {
  // NVIDIA's offerings (the 800-pound gorilla)
  nvidia: {
    baseCommandManager: {
      name: 'NVIDIA Base Command Manager',
      url: 'https://www.nvidia.com/en-us/data-center/base-command-manager/',
      positioning: 'Cluster management software for AI and HPC',
      keyFeatures: [
        'Automated provisioning for clusters from 2 to hundreds of thousands of nodes',
        'Support for NVIDIA Blackwell and Rubin architectures',
        'Kubernetes orchestration integration',
        'Hybrid-cloud and multi-cloud deployment',
        'Free tier available with optional enterprise support',
      ],
      target: 'Enterprises building AI/HPC clusters from scratch',
      limitation: 'NVIDIA-only ecosystem lock-in; requires NVIDIA GPUs and infrastructure',
    },
    missionControl: {
      name: 'NVIDIA Mission Control',
      url: 'https://www.nvidia.com/en-us/data-center/mission-control/',
      positioning: 'AI Factory operations platform - "world-class operations team delivered as software"',
      keyFeatures: [
        'Full-stack AI factory operations (developer workloads to facilities)',
        'Automated provisioning and workload orchestration',
        'Energy-optimized power profiles',
        'Autonomous job recovery',
        'Proactive monitoring with 10x faster time to recovery',
        'Building management integration (cooling, power)',
      ],
      target: 'Large enterprises running AI factories at scale',
      limitation: 'Designed for NVIDIA DGX Cloud and NVIDIA-certified infrastructure; vendor lock-in',
    },
  },

  // Where Foxconn fits - the strategic gap
  foxconnOpportunity: {
    headline: 'Foxconn Software: The Neutral Infrastructure Layer',
    coreInsight: 'NVIDIA\'s tools optimize for NVIDIA hardware. Foxconn\'s software optimizes for customer choice.',
    
    differentiation: [
      {
        area: 'Multi-Vendor GPU Support',
        nvidia: 'NVIDIA-only (CUDA ecosystem lock-in)',
        foxconn: 'NVIDIA + AMD + future architectures (ROCm + CUDA)',
        whyItMatters: 'Customers avoid single-vendor dependency; can mix GPU types based on workload/cost',
      },
      {
        area: 'Hardware Agnosticism',
        nvidia: 'Optimized for DGX/HGX reference architectures',
        foxconn: 'Supports heterogeneous deployments (Intel/AMD CPUs, mixed GPU generations)',
        whyItMatters: 'Brownfield integration - customers can upgrade incrementally without rip-and-replace',
      },
      {
        area: 'L9-L10 Firmware Integration',
        nvidia: 'Assumes standardized firmware stack',
        foxconn: 'Custom BMC/BIOS per customer requirement (OEM flexibility)',
        whyItMatters: 'CSP customers with existing datacenter standards need custom firmware integration',
      },
      {
        area: 'Service & Support Model',
        nvidia: 'Software-only (free tier) or enterprise support contract',
        foxconn: 'Full-stack hardware + software + on-site support (single vendor accountability)',
        whyItMatters: 'One throat to choke - no finger-pointing between hardware and software vendors',
      },
      {
        area: 'Private AI / RAG Appliance',
        nvidia: 'Requires separate software stack (NVIDIA NIM, third-party RAG tools)',
        foxconn: 'Pre-integrated RAG appliance option for SMB/enterprise',
        whyItMatters: 'Turnkey solution for customers who want AI without building software stack',
      },
    ],

    strategicPositioning: `
Foxconn doesn't compete with NVIDIA Base Command Manager or Mission Control.
We complement them by providing:

1. **Neutral Infrastructure Layer**: For customers who don't want NVIDIA lock-in
2. **Custom Integration**: L9-L10 firmware tailored to specific customer requirements
3. **Full-Stack Accountability**: Hardware + software + support from one vendor
4. **Private AI Acceleration**: Pre-integrated RAG appliances for SMB/enterprise market

NVIDIA's tools are excellent for NVIDIA-centric deployments.
Foxconn's value is enabling customer choice and reducing vendor dependency.
    `.trim(),
  },

  // Pain points that Foxconn software addresses (that NVIDIA doesn't)
  unsolvedPainPoints: [
    {
      problem: 'Multi-GPU Vendor Strategy',
      description: 'CSPs want to avoid 100% dependency on NVIDIA due to supply chain risk and pricing power',
      foxconnSolution: 'Software stack supports both NVIDIA and AMD GPUs with unified management layer',
      evidence: 'K8s Device Plugin abstraction - upper layers don\'t care which GPU brand is underneath',
    },
    {
      problem: 'Legacy Datacenter Integration',
      description: 'Existing datacenters have non-NVIDIA infrastructure (power, cooling, networking)',
      foxconnSolution: 'Custom BMC integration to match existing DC management tools (not force NVIDIA stack)',
      evidence: 'OpenBMC architecture allows integration with customer\'s existing monitoring systems',
    },
    {
      problem: 'SMB/Enterprise AI Adoption Gap',
      description: 'Most enterprises can\'t afford NVIDIA DGX systems or don\'t have AI expertise',
      foxconnSolution: 'RAG Appliance - pre-integrated hardware + software for private AI deployment',
      evidence: 'Turnkey solution: import documents, set permissions, start querying - no AI PhD required',
    },
    {
      problem: 'Remote Operations for Distributed Deployments',
      description: 'CSPs have servers in multiple locations; can\'t send engineers to every site',
      foxconnSolution: 'Remote Ops toolchain: monitoring, diagnostics, predictive maintenance, remote repair',
      evidence: '70% reduction in on-site visits; centralized management of global deployments',
    },
  ],

  // Messaging for leadership
  executiveSummary: {
    thesis: 'Software is the differentiator that turns commodity hardware into premium solutions.',
    
    proofPoints: [
      'NVIDIA charges premium prices because of software (CUDA moat), not hardware margins',
      'Dell AI Factory and HPE Private Cloud AI are competing on software integration, not server specs',
      'Hyperscalers (AWS, Azure, GCP) all build custom software layers to abstract underlying hardware',
      'Foxconn\'s L9-L12 software stack is our "CUDA moment" - the layer that creates lock-in and margin',
    ],

    callToAction: 'Invest in software not as a cost center, but as the primary value driver that justifies premium pricing and customer loyalty.',
  },
};

export default competitiveLandscape;
