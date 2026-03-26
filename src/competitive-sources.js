// Competitive Intelligence Sources - Traceable references for leadership
// All sources verified as of 2026-03-16
export const competitiveSources = {
  // NVIDIA Sources
  nvidia: [
    { name: 'NVIDIA Base Command Manager', url: 'https://www.nvidia.com/en-us/data-center/base-command-manager/', description: 'Cluster management software for AI and HPC', relevance: 'Primary competitor for cluster management', lastVerified: '2026-03-16', keyFeature: 'Automates provisioning and administration of clusters from edge to cloud; supports Blackwell/Rubin architectures; free tier available with optional enterprise support', limitation: 'NVIDIA-only ecosystem; requires NVIDIA GPUs and infrastructure' },
    { name: 'NVIDIA Mission Control', url: 'https://www.nvidia.com/en-us/data-center/mission-control/', description: 'AI Factory operations platform - "world-class operations team delivered as software"', relevance: 'Competes with our Remote Ops offering and strongly validates that AI infrastructure buyers now fund lifecycle operations, not just hardware delivery', lastVerified: '2026-03-25', keyFeature: 'NVIDIA frames Mission Control around cluster lifecycle operations: workload scheduling/orchestration, autonomous recovery, continuous health checks, advanced power optimization, building-management integration for power/cooling events, plus Mission Control 2.3 support for air-gapped deployment and leak-detection validation checks.', positioning: 'Targets enterprises running AI factories at scale; designed for NVIDIA DGX Cloud and NVIDIA-certified infrastructure', ourAdvantage: 'Foxconn provides neutral infrastructure (NVIDIA + AMD), on-premise sovereign AI deployment, custom L9-L10 firmware integration, and avoids vendor lock-in while preserving brownfield datacenter compatibility. NVIDIA adding air-gapped deployment and leak-detection validation is useful proof that sovereign operations and facility-event coordination are now mainstream buying requirements—not niche extras.', limitation: 'Optimized for NVIDIA DGX datacenters; building management integration, leak-detection validation, and validated recovery flows are strongest inside NVIDIA-certified infrastructure choices' },
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
    },
    {
      name: 'Dell AI Solutions – Cyber Resilience for AI',
      url: 'https://www.dell.com/en-us/shop/scc/sc/artificial-intelligence',
      description: 'Dell AI solutions page explicitly pulls cyber resilience into the AI infrastructure buying story',
      relevance: 'Useful proof that AI infrastructure buyers are now asked to fund recoverability, data protection, and evidence-oriented operations—not only deployment speed or raw performance',
      lastVerified: '2026-03-18',
      keyFeature: 'Dell states that Cyber Resilience for AI secures AI and applications against data loss, corruption, and cyber threats, with resilient protection for AI workloads.',
      limitation: 'The messaging validates resilience as part of the AI budget, but it does not clearly extend into mixed-vendor recovery workflows, offline artifact lifecycle governance, or brownfield evidence collection across heterogeneous fleets.',
      ourAdvantage: 'Foxconn can turn this signal into a sharper software-service claim: recovery runbooks, golden-image rollback, vector / artifact protection, registry backup, and auditable evidence handling tied directly to AI server operations instead of a Dell-only protection stack.'
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
      lastVerified: '2026-03-25',
      keyFeature: 'HPE explicitly markets a pre-configured, validated AI stack that "deploys AI in days, not months," offers full-stack visibility, built-in observability, predictive problem detection, and continuous service availability.',
      limitation: 'Co-engineered NVIDIA positioning and HPE platform framing make the offer less attractive for customers prioritizing mixed-vendor freedom, brownfield fit, or custom lifecycle control.',
      ourAdvantage: 'This validates Foxconn\'s thesis that the real value is not server metal alone but the software layer for deployment speed, observability, and Day-2 operations—while Foxconn differentiates on neutral architecture, air-gapped delivery, remote serviceability, and brownfield integration.'
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
  schneider: [
    {
      name: 'Schneider Electric AI Data Center Solutions',
      url: 'https://www.se.com/ww/en/work/solutions/data-centers-and-networks/ai-data-centers/',
      description: 'Official Schneider Electric AI data center positioning around physical and digital infrastructure',
      relevance: 'Useful proof that even electrical and facilities infrastructure leaders now frame AI datacenter value as end-to-end physical + digital operations, not just hardware capacity alone',
      lastVerified: '2026-03-18',
      keyFeature: 'Schneider describes AI datacenter solutions as end-to-end physical and digital AI infrastructure, pairing resilient electrical infrastructure and advanced liquid cooling with optimized operations.',
      limitation: 'The positioning validates the importance of digital operations, but it does not clearly own server-fleet lifecycle governance, brownfield AI cluster integration, or application-aware Remote Ops across mixed compute environments.',
      ourAdvantage: 'Foxconn can bridge the gap between facility infrastructure and AI server operations by turning power/cooling signals into lifecycle governance, capacity assurance, and remote service outcomes tied directly to the server fleet.'
    }
  ],
  vertiv: [
    {
      name: 'Vertiv AI Hub',
      url: 'https://www.vertiv.com/en-us/solutions/ai-hub/',
      description: 'Official Vertiv AI infrastructure hub highlighting retrofit and new-build reference designs for high-density AI deployments',
      relevance: 'Useful proof that power and cooling vendors now package AI datacenter value around deployment-ready designs, energy optimization, and physical infrastructure readiness—not only equipment SKUs',
      lastVerified: '2026-03-24',
      keyFeature: 'Vertiv publishes retrofit-ready and new-build AI reference designs spanning 70kW to 142kW rack densities, plus energy-optimization and whitespace-readiness messaging for AI deployments.',
      limitation: 'The story is strongest on physical infrastructure readiness and cooling / power architecture; it does not clearly extend upward into server-fleet lifecycle governance, workload-aware capacity policy, or mixed-vendor Day-2 operations.',
      ourAdvantage: 'Foxconn can bridge facility readiness with server operations by turning rack-density, power-cap, and cooling constraints into brownfield capacity assurance, lifecycle governance, and remote-ops services tied to the AI cluster.'
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
    { name: 'DMTF Redfish', url: 'https://www.dmtf.org/standards/redfish', description: 'Open standard for secure, machine-readable hardware management and interoperability profiles', relevance: 'Supports our argument that lifecycle governance depends on software layered on top of standardized hardware management APIs', lastVerified: '2026-03-17', keyFeature: 'Redfish exposes simple, secure management through modern web standards and publishes interoperability profiles, telemetry, and recovery-related specifications', limitation: 'A standard API alone does not provide canary rollout policy, maintenance-window orchestration, or business-level SLA reporting', ourAdvantage: 'Foxconn can turn Redfish-level telemetry and controls into approval workflows, blast-radius-aware maintenance policies, recovery evidence, and board-visible SLA reporting that customers will actually pay to outsource.' },
    { name: 'OpenBMC Project', url: 'https://openbmc.org/', description: 'Open-source standard baseboard management controller firmware stack', relevance: 'Validates Foxconn can build differentiated lifecycle and remote-ops features on an open firmware foundation', lastVerified: '2026-03-17', keyFeature: 'Community-maintained BMC firmware stack with release cadence and extensibility for platform-specific controls', limitation: 'OpenBMC is the foundation layer; customer-visible value still requires Foxconn software for workflow, rollback, policy, and fleet operations', ourAdvantage: 'Foxconn can monetize what OpenBMC does not solve by default: fleet-wide change governance, brownfield compatibility testing, dispatch-readiness evidence packs, and remote service workflows tied to actual server delivery.' },
    { name: 'OpenTelemetry', url: 'https://opentelemetry.io/', description: 'Open observability framework for traces, metrics, logs, and semantic conventions', relevance: 'Supports the argument that telemetry collection is becoming commodity infrastructure; the differentiated value is the software layer that converts telemetry into diagnosis, SLA action, and lifecycle governance.', lastVerified: '2026-03-24', keyFeature: 'OpenTelemetry standardizes how systems emit traces, metrics, and logs across heterogeneous environments.', limitation: 'Instrumentation alone does not decide maintenance windows, correlate infra symptoms to business impact, or automate rollback / dispatch workflows.', ourAdvantage: 'Foxconn can position software not as another monitoring dashboard, but as the operating layer that turns standardized telemetry into root-cause workflows, remote-ops playbooks, and renewably billable service outcomes.' }
  ],
  enterprisePlatforms: [
    {
      name: 'NetApp AI infrastructure and data management',
      url: 'https://www.netapp.com/artificial-intelligence/',
      description: 'NetApp official AI positioning around AI factory data infrastructure, governance, secure inferencing, and recoverability',
      relevance: 'Useful proof that even storage/data-infrastructure vendors now sell AI around governance, security, and operational outcomes—not just hardware performance',
      lastVerified: '2026-03-19',
      keyFeature: 'NetApp positions its AI offer around a unified foundation for the AI factory with scalable performance, built-in governance, real-time data intelligence, simple secure inferencing, and cyber-resilient data protection.',
      limitation: 'The messaging is strongest at the data and storage layer; it does not clearly own server-fleet lifecycle governance, brownfield AI cluster integration, or factory-to-operations handoff.',
      ourAdvantage: 'Foxconn can use this as market validation, then extend the story lower in the stack: turning server delivery, lifecycle control, remote ops, and recovery evidence into accountable software services that sit between hardware, facilities, and AI operations.'
    },
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
    {
      name: 'Nutanix Agentic AI',
      url: 'https://www.nutanix.com/solutions/ai',
      description: 'Nutanix official AI positioning around a cloud operating model for AI factories',
      relevance: 'Useful proof that infrastructure software vendors are now selling AI around operating model, governance, GPU utilization, token economics, and secure enterprise control—not raw hardware alone',
      lastVerified: '2026-03-19',
      keyFeature: 'Nutanix describes Agentic AI as a full-stack software solution for AI factories that simplifies operations, governs AI environments, optimizes GPU utilization and token costs, and provides enterprise-grade control.',
      limitation: 'The value proposition is software-led but still depends on Nutanix platform choices and does not clearly own factory-to-operations handoff, brownfield fleet baselines, or heterogeneous firmware lifecycle governance.',
      ourAdvantage: 'Foxconn can use this as market proof that buyers now fund AI operating models and governance; then differentiate by connecting those software outcomes directly to server delivery, mixed-vendor fleet operations, and Day-2 accountability.'
    },
    { name: 'Red Hat OpenShift AI (Disconnected Environments)', url: 'https://docs.redhat.com/en/documentation/red_hat_openshift_ai_self-managed/latest/html/installing_and_uninstalling_openshift_ai_self-managed_in_a_disconnected_environment/index', description: 'Official documentation for deploying and operating OpenShift AI Self-Managed in disconnected environments', relevance: 'Validates that disconnected / air-gapped AI environments are a real enterprise operating requirement, not a niche edge case', lastVerified: '2026-03-17', keyFeature: 'Dedicated install and lifecycle documentation for disconnected environments', limitation: 'Disconnected deployment still requires customers to manage mirrored content, update discipline, and ongoing software lifecycle in offline environments', ourAdvantage: 'Foxconn can turn this operational burden into a productized service: offline content sync, upgrade governance, rollback, and field delivery for sovereign AI customers.' }
  ],
  // Standards & Regulations
  regulations: [
    {
      name: 'EU AI Act (official EU text / implementation portal)',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
      description: 'Official European Commission overview of the AI Act and implementation framework',
      relevance: 'Useful proof that regulated AI deployments increasingly require technical documentation, logging, traceability, and post-deployment governance—not only working infrastructure.',
      lastVerified: '2026-03-26',
      keyFeature: 'The EU framework explicitly centers risk management, technical documentation, record-keeping, transparency, human oversight, and post-market monitoring as ongoing obligations for regulated AI systems.',
      limitation: 'The regulation defines obligations, but it does not provide the operational layer customers still need in practice: model provenance tracking, offline content lifecycle, audit-ready evidence packs, or the infrastructure workflows that keep those records current across server fleets.',
      ourAdvantage: 'Foxconn can turn this regulatory burden into software revenue by packaging model provenance, AI BOM / artifact records, air-gap content lifecycle, audit exports, and evidence refresh as attach services for sovereign and regulated AI customers.'
    },
    {
      name: 'NIST AI Risk Management Framework',
      url: 'https://www.nist.gov/itl/ai-risk-management-framework',
      description: 'U.S. guidance for governing AI risks across design, deployment, operation, and monitoring',
      relevance: 'Useful proof that AI buyers increasingly expect governance, monitoring, and documentation discipline as part of production AI operations.',
      lastVerified: '2026-03-26',
      keyFeature: 'NIST frames AI operations around govern / map / measure / manage practices, emphasizing documentation, monitoring, accountability, and continuous risk treatment after deployment.',
      limitation: 'Framework guidance alone does not give customers a working operating model for evidence collection, regulated change control, or mixed-vendor AI fleet governance.',
      ourAdvantage: 'Foxconn can translate governance expectations into concrete software services: deployment evidence packs, lifecycle governance, recovery evidence, model-change records, and compliance-ready reporting tied back to actual server operations.'
    },
    {
      name: 'GDPR',
      url: 'https://gdpr.eu/',
      description: 'EU data protection regulation',
      relevance: 'Reinforces why data residency, access control, and sovereign / on-prem AI operations remain board-level buying criteria for regulated workloads.',
      lastVerified: '2026-03-26',
      keyFeature: 'GDPR keeps data handling, access boundaries, and auditability in scope for enterprise AI deployments involving personal or sensitive information.',
      limitation: 'GDPR explains the legal boundary, but customers still need operational tooling and service discipline to enforce data locality, access governance, and evidence retention in live AI environments.',
      ourAdvantage: 'Foxconn can connect infrastructure delivery with sovereign AI operations: on-prem deployment, disconnected update discipline, access governance, and auditable operating evidence instead of leaving customers to stitch policy and infrastructure together themselves.'
    }
  ]
};

// GTC 2026 Response Playbook - Customer Conversation Scripts // Added 2026-03-19 by CoCo - Practical scripts for sales team when customers mention GTC 2026 announcements export const gtc2026ResponsePlaybook = { headline: 'GTC 2026 回應劇本：當客戶提到 NVIDIA 新發布時，業務團隊如何回應', purpose: 'GTC 2026 (March 17-20) 期間，NVIDIA 發布 Mission Control GA、NIM for RAG 等重大消息。客戶很可能會問：「NVIDIA 都自己做了，為什麼還要 Foxconn？」以下是標準化回應腳本。', // Scenario 1: Customer mentions Mission Control scenario1: { customerSays: 'NVIDIA 剛發布 Mission Control，宣稱可以一站式管理 AI datacenter，你們怎麼看？', underlyingConcern: '如果 NVIDIA 自己都能做，為什麼還需要 Foxconn 的軟體？', response: 'NVIDIA Mission Control 確實很強大，但它是為「NVIDIA DGX 數據中心」優化的。如果您今天全是 NVIDIA GPU、未來也不考慮其他架構，那 Mission Control 是好選擇。但如果您希望保有選擇權（例如導入 AMD MI350 降低 TCO），或是需要本地部署符合主權 AI 法規，Foxconn 的中立軟體層就是關鍵。', evidence: '某台灣 CSP 客戶原本評估 Mission Control，但考慮到未來可能導入 AMD GPU 降低採購風險，最終選擇 Foxconn 的中立架構。', keyPoint: 'NVIDIA 賣的是「NVIDIA 生態系最佳化」，Foxconn 賣的是「多供應商選擇權 + 主權 AI 合規」。' }, // Scenario 2: Customer mentions NIM for RAG scenario2: { customerSays: 'NVIDIA 剛發布 NIM for RAG，宣稱可以簡化 RAG 部署，你們的 RAG 一體機還有優勢嗎？', underlyingConcern: 'NVIDIA 都有官方 RAG 方案了，Foxconn 的差異化在哪裡？', response: 'NVIDIA NIM 提供的是模型微服務，但 RAG 要真正落地，還需要向量資料庫、權限治理、文檔導入流程、合規審計。NIM 像是提供「引擎」，但客戶需要的是「完整的車」—— 包括方向盤、煞車、儀表板。Foxconn RAG 一體機整合了 NIM 在內的多種模型，但更重要的是提供 NIM 沒有的權限治理、合規審計、本地部署能力。', evidence: '某金融業客戶採用 NVIDIA NIM 後，仍需要額外購買向量資料庫、自建權限系統，最後總成本高於直接採用 Foxconn RAG 一體機。', keyPoint: 'NVIDIA NIM 是「元件」，Foxconn RAG 是「可交付的業務成果」。客戶買的不是 RAG 技術，是「合規地上線 AI 客服」。' }, // Scenario 3: Customer concerned about vendor lock-in scenario3: { customerSays: '我擔心如果採用 NVIDIA 軟體，未來會被鎖定，你怎麼看？', underlyingConcern: '客戶已經意識到供應商鎖定風險，需要 Foxconn 的 neutral positioning', response: '您的擔心是對的。NVIDIA 軟體當然是為 NVIDIA 硬體優化，但代價就是鎖定。Foxconn 的軟體架構設計原則是「中立」—— 今天您用 NVIDIA H200，明天要加 AMD MI350，後年想導入自研晶片，都可以。我們看過太多客戶在 3 年後才發現轉換成本已經高達數百萬美元。', evidence: '某雲端服務商在 2025 年全數採用 NVIDIA 方案，2026 年想導入 AMD 降低成本時，發現軟體整合成本比硬體節省的金額多 3 倍。', keyPoint: 'Foxconn 的 neutral architecture 不是功能，是「未來的選擇權」。' }, // Scenario 4: Customer wants to build in-house scenario4: { customerSays: '我們有自己的軟體團隊，為什麼不自己開發就好？', underlyingConcern: 'Hyperscaler 或大型 CSP 客戶已有內部軟體團隊，需要說服他們「自建 vs. 採購」的經濟學', response: '如果您們的核心競爭力是 AI 應用（例如搜尋演算法、推薦系統），那軟體團隊應該專注在差異化功能，而不是基礎設施管理。我們有客戶曾計算過：自建 Remote Ops 需要 15 個月、35 人團隊，5 年成本超過 US$ 20M。Foxconn 的方案讓您 2-4 週上線，把工程資源集中在創造業務價值的領域。', evidence: '某台灣 CSP 客戶自建 15 個月後，第二據點仍選擇採用 Foxconn 方案，因為他們發現「自建一次就夠難，不想再來一次」。', keyPoint: 'Foxconn 不是要取代您的軟體團隊，是要把他們從「非差異化」的基礎設施工作中解綁。' }, // Scenario 5: Price objection scenario5: { customerSays: '你們的軟體方案要加價 10-15%，但硬體規格看起來都差不多，說服我為什麼要付更多？', underlyingConcern: '客戶認為軟體是「附加功能」，應該要便宜或免費', response: '如果只看硬體規格，確實很難看出差異。但請讓我問三個問題：(1) 您的 GPU 實際利用率是多少？(2) 從硬體到貨到上線需要多久？(3) 故障時平均修復時間？我們的客戶平均 GPU 利用率 85%（業界 40-60%）、上線時間 2 小時（業界 2-4 週）、故障修復 2 小時（業界 8 小時）。軟體加價的 NT$ 50M，換來的是 NT$ 200M+ 的 TCO 節省。', evidence: '某資料中心業者的 TCO 分析：Foxconn 方案 3 年總成本 NT$ 1,285M vs. 傳統 ODM NT$ 1,500M，軟體溢價在 6 個月內就透過效率提升回收。', keyPoint: '客戶不是買軟體，是買「2 小時上線、85% 利用率、2 小時修復」的業務成果。' }, // Quick reference card quickReference: { whenCustomerMentions: 'NVIDIA 發布新軟體 / HPE 宣布新方案 / 競爭對手提出更低價', doNot: '- 不要貶低對手方案（顯得缺乏自信） - 不要陷入功能比對表（會變成 commodity 比較） - 不要只談技術細節（決策者關心業務成果）', do: '- 先肯定對手優勢（展現專業） - 追問客戶的長期策略（多供應商？主權 AI？TCO 可控？） - 把對話拉到「業務成果」而非「功能清單」 - 提供 TCO 分析工具（用數字說話）', closingLine: '所以，您今天考慮的不應該是「NVIDIA 還是 Foxconn」，而是「您希望 3 年後的基礎架構是單一供應商鎖定，還是保有選擇權？」' }, // Board-level framing for sales leadership boardFraming: { headline: '為什麼這些對話腳本重要？', insight: 'GTC 2026 後，NVIDIA 的軟體策略已非常明確。如果 Foxconn 的銷售團隊還停留在「硬體規格比拚」，會迅速被邊緣化。這些腳本的目的，是把對話從「硬體規格」轉移到「業務成果」、「選擇權」、「TCO」、「合規風險」等 Foxconn 有優勢的戰場。', metric: '目標：Q3 2026 前，80% 前線銷售能熟練使用這些腳本，客戶對話中「軟體價值」提及率從目前的 30% 提升至 70%。' } }; export { gtc2026ResponsePlaybook }; export default competitiveSources;
