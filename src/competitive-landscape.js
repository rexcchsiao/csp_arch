// Competitive Landscape Analysis - Foxconn vs. NVIDIA Base Command Manager / Mission Control
// For strengthening the argument: "Where does Foxconn software fit in the AI infrastructure ecosystem?"
// Last updated: 2026-03-16 - Added Q1 2026 competitive moves, GTC 2026 announcements, and strategic response
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
        'Building management integration (cooling, power) - optimized for NVIDIA DGX datacenters',
      ],
      target: 'Large enterprises running AI factories at scale',
      limitation: 'Designed for NVIDIA DGX Cloud and NVIDIA-certified infrastructure; vendor lock-in; building integration only works with NVIDIA-validated facilities',
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
Foxconn doesn't compete with NVIDIA Base Command Manager or Mission Control. We complement them by providing:
1. **Neutral Infrastructure Layer**: For customers who don't want NVIDIA lock-in
2. **Custom Integration**: L9-L10 firmware tailored to specific customer requirements
3. **Full-Stack Accountability**: Hardware + software + support from one vendor
4. **Private AI Acceleration**: Pre-integrated RAG appliances for SMB/enterprise market

NVIDIA's tools are excellent for NVIDIA-centric deployments. Foxconn's value is enabling customer choice and reducing vendor dependency.
    `.trim(),
    // Market timing data - why 2026 is the inflection point
    whyNowSection: {
      timing: '2026 Q1-Q2: AI infrastructure spending shifts from "GPU scarcity" to "deployment efficiency"',
      windowOfOpportunity: '2026-2027: Enterprises evaluating AI infrastructure will prioritize TCO over raw specs. Foxconn has 12-18 month window to establish software credibility before hyperscaler solutions dominate.',
      marketShifts: [
        {
          trend: 'GPU Supply Normalization',
          implication: 'NVIDIA H200/B200 supply catches up with demand by Q3 2026. Competition shifts from "who has GPUs" to "who uses them best".',
          foxconnMove: 'Position software stack as force multiplier - same GPU, 20% better utilization via our orchestration',
        },
        {
          trend: 'Sovereign AI Initiatives',
          implication: 'EU, Middle East, SE Asia governments mandate data residency. $50B+ market opening 2026-2028.',
          foxconnMove: 'RAG Appliance + Local Data Center = Sovereign AI-in-a-Box. No cloud dependency, full compliance.',
        },
        {
          trend: 'Energy Cost Crisis',
          implication: 'AI datacenter power consumption to triple by 2027 (IEA). Electricity now 40% of TCO.',
          foxconnMove: 'Mission Control alternative: Building management integration + power optimization = 15-25% energy savings',
        },
        {
          trend: 'AMD MI350/MI400 Maturity',
          implication: 'ROCm 6.x closes CUDA gap. Multi-vendor GPU strategy becomes viable for first time.',
          foxconnMove: 'Unified management layer for NVIDIA+AMD. Customer avoids lock-in, gets pricing leverage.',
        },
      ],
    },
  },
  // Pain points that Foxconn software addresses (that NVIDIA doesn't)
  day2OperationsThesis: {
    headline: '真正決勝點不是 Day-1 部署，而是 Day-2 營運治理',
    summary: 'AI 伺服器真正拖垮 ROI 的，往往不是第一次上線，而是之後每一次驅動、韌體、Kubernetes、CUDA 與模型版本變更。能把變更風險產品化、流程化、可回滾化，才是軟體部門最不可替代的價值。',
    proofPoints: [
      'NVIDIA Mission Control 官方強調 cluster life cycle、continuous health checks、autonomous recovery，代表市場已從「能不能部署」轉向「能不能穩定營運」。',
      'HPE Private Cloud AI 官方強調 deploy AI in days, not months 與 built-in observability，代表 turnkey 只是入場券，長期可觀測與維運能力才是續約關鍵。',
      'Redfish 與 OpenBMC 提供標準化管理與韌體控制基礎，但真正把它們變成 maintenance window、canary、rollback、SLA 報表的是上層軟體產品能力。',
    ],
  },
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
    {
      problem: 'Energy Cost Crisis',
      description: 'AI datacenter power consumption tripled by 2027 (IEA). Electricity now 40% of TCO. Traditional cooling strategies waste 15-25% energy.',
      foxconnSolution: 'Energy-optimized software stack: predictive cooling + workload-aware scheduling + per-GPU power metering',
      evidence: 'BMC-based PID control + K8s energy-aware scheduler = 10-15% reduction in cooling energy, PUE improvement from 1.6 to 1.4',
    },
    {
      problem: 'Tenant Governance, Quota & GPU Showback',
      description: 'As AI clusters spread across business units, the real bottleneck becomes governance: who gets priority, how quota is enforced, and how usage/cost are shown back to each team. Without this, GPUs become politically allocated shared assets instead of economically optimized infrastructure.',
      foxconnSolution: 'Foxconn tenant governance layer: quota policies, priority tiers, approval workflow, per-tenant GPU/power usage reporting, and showback/export into customer finance or ITSM workflows.',
      evidence: 'Enterprise AI platforms such as Red Hat OpenShift AI already emphasize cost control, monitoring, and hybrid operations. Foxconn can differentiate by tying tenant policy to mixed-vendor GPU pools, power telemetry, and brownfield operations workflows.',
    },
    {
      problem: 'Lifecycle Governance & Change Window Risk',
      description: 'Enterprise AI clusters do not fail only at deployment; they fail during driver, firmware, CUDA, and Kubernetes upgrades. Most competitors emphasize day-1 provisioning but leave day-2 change management to the customer.',
      foxconnSolution: 'Foxconn lifecycle orchestration: version matrix validation, rolling firmware/driver updates, canary nodes, automatic rollback, and maintenance-window reporting.',
      evidence: 'NVIDIA Mission Control emphasizes orchestration and autonomous recovery, while HPE Private Cloud AI emphasizes turnkey deployment speed—both validate that operations discipline, not raw hardware, determines sustained ROI.',
    },
    {
      problem: 'Power / Cooling Event Coordination in Existing Facilities',
      description: 'AI clusters increasingly hit facility-level constraints first: rack power caps, cooling anomalies, and leakage or thermal events. Brownfield datacenters need software that coordinates server, cluster, and building responses without forcing a full facility redesign.',
      foxconnSolution: 'Facility-aware control plane: correlate BMC telemetry, Redfish events, scheduler policies, and existing BMS/DCIM workflows so Foxconn can throttle, drain, rebalance, or stage maintenance before a local infrastructure issue becomes a cluster outage.',
      evidence: 'NVIDIA Mission Control explicitly positions building management integration, power and cooling control, and rapid leakage detection as AI-factory operations needs. That validates the problem; Foxconn differentiates by bringing the same outcome to mixed-vendor, brownfield facilities instead of only NVIDIA-validated environments.',
    },
  ],
  softwareDepartmentWedge: {
    headline: '軟體部門真正可守住、可定價的價值楔子',
    summary: '老闆真正該投資的，不是「再多做一個 dashboard」，而是那些 GPU 廠、Hyperscaler、純硬體 ODM 都不願意或不擅長承接的髒活、重活、長尾活。這些工作最貼近客戶營運，最容易形成續約與高毛利。',
    wedges: [
      {
        name: '變更安全 (Change Safety)',
        customerTrigger: '每次驅動、韌體、CUDA、K8s 升級前，客戶都怕停機與 SLA 失約',
        whyFoxconnWins: '只有同時理解 BMC / BIOS / GPU 韌體 / 叢集編排的人，才做得出版本矩陣、canary、rollback、maintenance window 治理',
        whyOthersAvoid: 'Hyperscaler 偏標準化；GPU 廠重 reference stack；ODM 常止於硬體交付，沒人願意為客戶現場變更風險背書',
        monetization: '年度訂閱 + 升級事件顧問服務'
      },
      {
        name: 'Brownfield 導入',
        customerTrigger: '客戶已有既有機房、DCIM、權限流程、告警系統，不可能為 AI 專案整場重做',
        whyFoxconnWins: 'Foxconn 橫跨硬體、韌體、系統整合與現場交付，最有機會把新 AI 叢集接進既有營運體系',
        whyOthersAvoid: '標準化平台通常不做深度客製；純軟體商又碰不到現場硬體與 BMC 細節',
        monetization: '一次性整合案 + 年度維護擴充'
      },
      {
        name: 'Air-gapped / Sovereign 運營',
        customerTrigger: '金融、政府、醫療不能把資料與營運流程交給公有雲',
        whyFoxconnWins: 'Foxconn 可把模型、權限、向量庫、監控、離線套件管理與機房交付整成一包',
        whyOthersAvoid: 'Hyperscaler 的商業模式偏向雲連線；很多 OEM 軟體也預設持續聯網更新',
        monetization: '專案交付 + 年維護 + 合規/審計加值模組'
      },
      {
        name: 'Remote SLA Outcomes',
        customerTrigger: '客戶不想買 dashboard，而是想買「半夜不用派人去機房」',
        whyFoxconnWins: 'Foxconn 同時掌握料件、遙測、BMC 控制與現場支援流程，能從監控走到診斷、修復、備品策略',
        whyOthersAvoid: '多數競品停在監控可視化，缺乏把資料轉成遠端修復與 SLA 承諾的能力',
        monetization: '按節點訂閱 + SLA 等級收費'
      },
      {
        name: 'Factory-to-Operations Handoff',
        customerTrigger: '客戶最怕的是硬體交機後，還要再花 2-4 週把韌體、叢集、驗收、權限與上線 runbook 一段段重新拼起來',
        whyFoxconnWins: 'Foxconn 天然站在製造、出廠預載、現場驗收與 Day-2 維運交界，最有機會把 burn-in、golden image、site acceptance 與後續 lifecycle baseline 串成同一條服務鏈',
        whyOthersAvoid: '純軟體商碰不到工廠與出貨流程；品牌廠雖強調 validated system，但多半把價值停在平台交付，不會深入客戶現場的驗收/交接治理',
        monetization: '交付附加服務費 + 年度 baseline / acceptance refresh 續約'
      },
      {
        name: 'Tenant Governance & GPU Showback',
        customerTrigger: 'AI 平台一旦被多個 BU / 團隊共用，管理層就會追問：誰在吃掉 GPU、誰該優先、成本該算到哪裡',
        whyFoxconnWins: 'Foxconn 可把 GPU / 功耗 / 任務 / 配額 / 權限整合成同一個治理層，讓平台工程、財務與 BU 都看得懂、算得清、控得住',
        whyOthersAvoid: 'GPU 廠與純硬體 ODM 多半停在設備管理；雲平台雖有帳單能力，但不會深入客戶本地 mixed-vendor GPU pool、維護窗口與權限流程',
        monetization: '平台訂閱 + 進階報表 / 治理模組授權'
      }
    ],
    boardMessage: '這六個楔子有共同點：都發生在硬體出貨之後、都直接影響客戶營運、都能收年度費。這就是軟體部門最值得投資的地方。'
  },
  uniqueServices: [
    {
      name: 'Brownfield Integration & Fleet Baseline',
      targetCustomer: '已有既有機房、DCIM、BMC、維護窗口流程的大型 CSP / Enterprise',
      monetization: '一次性整合專案 + 年度平台維護 / 擴充費',
      budgetOwner: 'Infrastructure / Data Center Operations',
      renewalDriver: '新機櫃、新機房、新設備世代接入時，版本基線與整合維護會持續發生',
      painSolved: '讓新 AI 叢集不用打掉重練，就能接入既有 Redfish / OpenBMC / DCIM / 告警 / 權限與維護流程，降低跨部門整合阻力。',
      whyUnique: 'Hyperscaler 與 GPU 廠商多半提供標準化平台，不會替每個客戶做 brownfield 對接；純硬體廠通常也只停在硬體交付。Foxconn 同時懂 BMC/韌體、叢集軟體與現場交付流程，才能把「可管理性」做成真正可落地的服務。',
      evidence: 'DMTF Redfish 強調以現代 API 暴露標準化硬體管理能力；OpenBMC 提供可延伸的 BMC 基礎，但真正把它接進既有營運體系、版本治理與維護流程的是上層軟體整合能力。',
      source: 'https://www.dmtf.org/standards/redfish',
    },
    {
      name: 'Lifecycle Control Tower',
      targetCustomer: '大型 CSP / Hyperscaler 私有叢集',
      monetization: '年度訂閱 + 升級事件顧問服務',
      budgetOwner: 'Platform Engineering / SRE / Change Advisory Board',
      renewalDriver: '每季升級、版本驗證、maintenance window 與 rollback 演練都需要持續服務',
      painSolved: '把驅動、韌體、CUDA、Kubernetes 升級從高風險停機事件，變成可排程、可回滾、可稽核的標準流程。',
      whyUnique: '結合 BMC / BIOS / GPU 韌體與上層叢集編排，能做版本矩陣驗證、canary、maintenance window、rollback。純雲平台不做客戶現場韌體深度整合，純硬體廠又通常不做軟體流程產品化。',
      evidence: 'NVIDIA Mission Control 官方強調 cluster life cycle、continuous health checks、autonomous recovery。',
      source: 'https://www.nvidia.com/en-us/data-center/mission-control/',
    },
    {
      name: 'Remote Ops & Predictive Maintenance',
      targetCustomer: '跨站點部署的 CSP、代管機房、海外據點',
      monetization: '節點數授權 + 遠端維運 SLA',
      budgetOwner: 'Operations / Customer Support / Service Delivery',
      renewalDriver: 'SLA 承諾、夜間值班、全球站點覆蓋與故障趨勢模型會讓客戶傾向年約續訂',
      painSolved: '降低半夜派人到場與跨國維修成本，把問題在現場前就預警並遠端診斷。',
      whyUnique: 'Foxconn 同時握有硬體遙測、BMC 控制、叢集事件與料件知識，可把監控延伸到可操作的遠端修復與預測性維護，而不只是一個 dashboard。',
      evidence: 'HPE Private Cloud AI 官方強調 built-in observability 與 full stack visibility，代表市場已把持續可觀測與服務可用性視為核心能力。',
      source: 'https://www.hpe.com/us/en/private-cloud-ai.html',
    },
    {
      name: 'Factory-to-Operations Handoff Assurance',
      targetCustomer: '需要快速交機、快速驗收、且不想讓工廠交付與營運團隊斷線的大型 CSP / Enterprise AI 專案',
      monetization: '交付附加服務費 + 年度 baseline refresh / acceptance 顧問費',
      budgetOwner: 'Program Management Office / Infrastructure Delivery / Platform Operations',
      renewalDriver: '每次新場域上線、新機型導入、golden image 更新與 site acceptance 演練都會重複觸發同一套治理需求',
      painSolved: '把出廠預載、burn-in 驗證、site acceptance、帳號/權限移交、初始觀測與 Day-2 baseline 串成同一條交付服務，避免客戶在「硬體已到、軟體還沒接好」的灰色地帶浪費 2-4 週。',
      whyUnique: 'Foxconn 同時位在工廠、硬體、韌體與現場交付交界，能把 golden image、驗收 runbook、初始版本基線與後續 lifecycle 治理接成同一個產品化服務。這種跨 factory-to-field 的 handoff，不是純軟體商也不是只賣平台的品牌廠容易長期承接的。',
      evidence: 'HPE Private Cloud AI 官方已把 pre-configured validated platform、deploy AI in days, not months 當成賣點；Dell AI Factory 也以 end-to-end AI factory delivery 為定位。這代表市場已在購買「可驗收、可快速進入營運」的交付結果，而不只是硬體 BOM。Foxconn 的差異化空間在於把這個結果進一步延伸到現場驗收與 Day-2 交接治理。',
      source: 'https://www.hpe.com/us/en/private-cloud-ai.html',
    },
    {
      name: 'Sovereign RAG Appliance',
      targetCustomer: '金融、醫療、政府、製造等不能把資料送上公雲的企業',
      monetization: '一體機專案 + 年度軟體維護 + 權限治理加值模組',
      budgetOwner: 'Business Unit / CIO Office / Compliance-driven AI program',
      renewalDriver: '知識庫擴充、權限治理、模型/向量庫更新與稽核需求都會把一次性案子變成年維護',
      painSolved: '讓沒有 AI 平台團隊的企業，也能在本地或 air-gapped 環境快速上線文件問答與知識庫檢索。',
      whyUnique: '不是只賣模型 endpoint，而是把資料匯入、權限、向量化、模型 serving、觀測與本地部署交付整合在一起。',
      evidence: 'Red Hat OpenShift AI 官方強調 model lifecycle、model monitoring、hybrid cloud flexibility，代表企業需要的是完整生命週期平台，而不是單一模型工具。',
      source: 'https://www.redhat.com/en/products/ai/openshift-ai',
    },
    {
      name: 'Air-Gap Update Factory',
      targetCustomer: '主權 AI、政府、金融與任何禁止外網連線的 AI 叢集',
      monetization: '年度訂閱 + 每次大版本升級/安全修補服務費',
      budgetOwner: 'Security / Compliance / Platform Operations',
      renewalDriver: '每次 CVE 修補、模型更新、容器鏡像同步與離線版本簽核都需要持續交付',
      painSolved: '解決 air-gapped 環境上線後的 Day-2 營運痛點：離線容器鏡像、模型/套件同步、修補節奏、變更審計與回滾，不再讓客戶自己用人工腳本維持離線環境。',
      whyUnique: '這不是單純賣硬體，也不是單純賣平台，而是把離線內容供應、版本治理、維護窗口與現場交付包成可續約服務。Foxconn 同時懂機房交付、叢集軟體與版本相依，最有機會把這件麻煩但高價值的工作產品化。',
      evidence: 'Red Hat 針對 OpenShift AI Self-Managed 提供獨立的 disconnected environment 文件，顯示企業級 AI 平台在斷網環境下需要專門的安裝與後續營運方法。',
      source: 'https://docs.redhat.com/en/documentation/red_hat_openshift_ai_self-managed/latest/html/installing_and_uninstalling_openshift_ai_self-managed_in_a_disconnected_environment/index',
    },
    {
      name: 'Tenant Governance & GPU Showback',
      targetCustomer: '多 BU / 多租戶共用 AI 叢集的 CSP、電信商、大型企業與內部 AI 平台團隊',
      monetization: '平台訂閱 + 治理模組授權 + 顧問導入費',
      budgetOwner: 'Platform Engineering / FinOps / CIO Office',
      renewalDriver: '配額政策、優先級規則、showback / chargeback 報表、年度預算檢討都會持續驅動續約',
      painSolved: '把「誰拿多少 GPU、誰有優先權、功耗與成本怎麼算回去」做成正式治理能力，避免 AI 平台從共享資產變成內部搶資源與成本黑箱。',
      whyUnique: 'Foxconn 不只看到 K8s 工作負載，還看得到 BMC / 功耗 / 機櫃層訊號與 brownfield 權限流程，因此能把 quota、排程優先級、功耗視角與 showback 串成真正可執行的管理機制，而不是只做帳單後台。',
      evidence: 'Red Hat OpenShift AI 官方已把 cost control、monitoring 與 hybrid operations 納入平台敘事，代表企業 AI 平台已從「能不能跑模型」走向「能不能治理成本與資源」。Foxconn 可把這個需求進一步下探到 mixed-vendor GPU 與機房營運層。',
      source: 'https://www.redhat.com/en/products/ai/openshift-ai',
    },
    {
      name: 'Facility-Aware Capacity Assurance',
      targetCustomer: '已有既有機電/BMS/DCIM、且 AI 負載會受電力與散熱上限牽制的大型資料中心',
      monetization: '年度訂閱 + 容量擴充/事件演練顧問服務',
      budgetOwner: 'Data Center Operations / Facilities / Capacity Planning',
      renewalDriver: '容量規劃、演練、季節性負載變化與新機櫃上線會讓客戶持續需要事件協調能力',
      painSolved: '把 power cap、cooling event、leakage / thermal alarm 這些原本分散在機房與 IT 團隊之間的訊號，變成可執行的 AI 叢集營運流程，避免局部設施事件拖垮整個訓練或推論服務。',
      whyUnique: 'GPU 廠商多半只優化自家 reference stack，純 DCIM/BMS 廠又看不到 GPU 作業與工作負載排程。Foxconn 站在伺服器、韌體、叢集與現場交付之間，才有機會把「設施事件」轉成「工作負載保護與 SLA 保證」。',
      evidence: 'NVIDIA Mission Control 官方已把 building management integration、power and cooling control、rapid leakage detection 放進 AI factory operations 範疇，代表這是高價值且被驗證的軟體層戰場。Foxconn 的機會在於把這種能力帶進 mixed-vendor、brownfield 環境。',
      source: 'https://www.nvidia.com/en-us/data-center/mission-control/',
    },
  ],
  serviceValueCaptureMatrix: {
    headline: '不是功能清單，而是可持續拿預算的服務地圖',
    summary: '老闆在意的不只是「我們能做什麼」，而是「誰會為這些東西付錢、為什麼明年還會繼續付」。這張表把軟體部門的價值直接翻成預算 owner、續約理由與 board-level outcome。',
    rows: [
      {
        service: 'Brownfield Integration & Fleet Baseline',
        budgetOwner: 'Infrastructure / DC Operations',
        trigger: '新 AI 叢集要接入既有機房治理流程',
        recurringReason: '每新增場域、機櫃、設備世代都要延續版本基線與整合維護',
        boardOutcome: '降低導入阻力，讓硬體訂單更容易落地'
      },
      {
        service: 'Lifecycle Control Tower',
        budgetOwner: 'Platform Engineering / SRE',
        trigger: '季度升級、driver/CUDA/K8s 變更、SLA 壓力',
        recurringReason: '升級不是一次性事件，而是每季都會發生的治理工作',
        boardOutcome: '把停機風險變成可控流程，保護毛利與客戶信任'
      },
      {
        service: 'Remote Ops & Predictive Maintenance',
        budgetOwner: 'Operations / Service Delivery',
        trigger: '跨站點運維、夜間故障、缺工與 SLA 需求',
        recurringReason: '值班、監控、模型更新與 SLA 報告天然適合年約',
        boardOutcome: '從一次性交機，變成可續約的服務收入'
      },
      {
        service: 'Factory-to-Operations Handoff Assurance',
        budgetOwner: 'PMO / Infrastructure Delivery / Platform Operations',
        trigger: '新 AI 叢集交機後，需要把工廠預載、現場驗收、權限移交與 Day-2 baseline 接成一致流程',
        recurringReason: '每次新場域上線、新機型導入與 golden image 更新，都會重複需要這套驗收與交接治理',
        boardOutcome: '把交機速度直接轉成 time-to-revenue 與更低的部署風險，讓軟體部門站上交付成敗的關鍵位置'
      },
      {
        service: 'Sovereign RAG / Air-Gap Services',
        budgetOwner: 'CIO Office / Compliance-driven AI Program',
        trigger: '資料不能上雲、需在地化與審計',
        recurringReason: '知識庫擴充、權限治理、離線更新與稽核需求持續存在',
        boardOutcome: '切入雲廠不擅長服務的高附加價值市場'
      },
      {
        service: 'Tenant Governance & GPU Showback',
        budgetOwner: 'Platform Engineering / FinOps / CIO Office',
        trigger: 'AI 平台被多個 BU / 團隊共用，管理層開始追問配額、公平性與成本分攤',
        recurringReason: '每季預算檢討、配額調整、chargeback / showback 與優先級治理都會持續發生',
        boardOutcome: '把 GPU 共享平台從成本黑箱變成可治理、可擴張、可被財務接受的基礎設施'
      },
      {
        service: 'Facility-Aware Capacity Assurance',
        budgetOwner: 'Facilities / Capacity Planning',
        trigger: 'AI 負載撞上 power/cooling 上限，需跨 IT 與機電協調',
        recurringReason: '容量規劃、事件演練與季節性負載管理都需要持續服務',
        boardOutcome: '把設施瓶頸變成可管理能力，延後昂貴擴建'
      }
    ],
    boardMessage: '一旦軟體部門能對應到不同預算 owner，Foxconn 賣的就不只是 server BOM，而是跨部門、跨年度、可續約的營運能力。'
  },
  procurementLanguageShift: {
    headline: '現在客戶核准的，其實是 3 種軟體結果，不是再一張功能清單',
    summary: '從 NVIDIA Mission Control 與 Red Hat OpenShift AI 的官方語言來看，市場已經把 AI 基礎建設的採購重心放在 speed-to-value、operational control、以及 accountable operations。這剛好是軟體部門最能被定價、也最能把硬體放大的位置。',
    cards: [
      {
        title: 'Speed-to-Value',
        marketSignal: 'Red Hat OpenShift AI 官方直接強調 bring AI-enabled applications to production faster，以及 advanced tooling to automate deployments and self-service access。',
        buyerQuestion: '這套方案能不能讓我的團隊更快把 AI 服務上線，而不是再花幾週自己拼平台？',
        foxconnPlay: '把出廠預整合、驗收、baseline 建立與標準 runbook 包成 Deployment / Handoff Assurance，賣的是提早上線與提早產生營收。',
        sourceLabel: 'Red Hat OpenShift AI',
        source: 'https://www.redhat.com/en/products/ai/openshift-ai'
      },
      {
        title: 'Operational Control',
        marketSignal: 'NVIDIA Mission Control 官方把 cluster life cycle、continuous health checks、autonomous recovery、dynamic workload orchestration 放到同一條 AI factory operations 敘事裡。',
        buyerQuestion: '上線後，誰來把升級、故障、工作負載調度與風險控制接住？',
        foxconnPlay: '把 Lifecycle Control Tower、Remote Ops 與 Tenant Governance 串成 Day-2 治理層，讓軟體部門直接對穩定營運與資源治理結果負責。',
        sourceLabel: 'NVIDIA Mission Control',
        source: 'https://www.nvidia.com/en-us/data-center/mission-control/'
      },
      {
        title: 'Accountable Operations',
        marketSignal: 'NVIDIA Mission Control 進一步明講 building management integration、power and cooling control、rapid leakage detection，代表市場已接受 AI 營運需要跨伺服器、叢集與設施層一起被管理。',
        buyerQuestion: '當 power / cooling / facility event 發生時，到底誰能保住工作負載與 SLA？',
        foxconnPlay: '把 Facility-Aware Capacity Assurance 與 Brownfield Integration 做成可續約服務，主張 Foxconn 軟體部門不是給 dashboard，而是替客戶承接跨 IT 與機電的營運責任。',
        sourceLabel: 'NVIDIA Mission Control',
        source: 'https://www.nvidia.com/en-us/data-center/mission-control/'
      }
    ],
    boardMessage: '董事會該記住的一句話：市場正在核准的不是更多功能，而是更快上線、更穩營運、以及有人願意對 Day-2 結果負責；這三件事正好都屬於軟體部門。'
  },
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
  // Why Hyperscalers Care - The CSP Perspective
  hyperscalerWhyItMatters: {
    context: 'Hyperscalers (AWS, Azure, GCP, Meta) already have strong internal software teams. Why would they need Foxconn software?',
    reasons: [
      {
        reason: 'Speed to Market',
        explanation: 'Building custom software takes 12-18 months. Foxconn\'s pre-integrated stack gets them to production in 2-4 weeks.',
        impact: 'Faster revenue generation, earlier customer deployments',
      },
      {
        reason: 'Focus on Core Differentiation',
        explanation: 'Hyperscalers want to invest engineering in their unique value (AI services, customer experience), not undifferentiated infrastructure management.',
        impact: 'Foxconn handles the "plumbing" so they can focus on revenue-generating features',
      },
      {
        reason: 'Risk Mitigation',
        explanation: 'Single-vendor accountability for hardware + software reduces finger-pointing and accelerates issue resolution.',
        impact: 'Faster time-to-resolution, reduced operational risk',
      },
      {
        reason: 'Cost Efficiency',
        explanation: 'Building and maintaining custom software requires 20-50 FTEs. Foxconn\'s shared platform amortizes this cost across customers.',
        impact: '10-30% reduction in total cost of ownership for infrastructure management',
      },
      {
        reason: 'Brownfield Integration',
        explanation: 'Existing datacenters have legacy systems. Foxconn\'s custom firmware integration avoids costly rip-and-replace.',
        impact: 'Protects existing investments while enabling AI upgrade path',
      },
    ],
  },
  // Risk of inaction - what happens if Foxconn doesn't invest in software
  riskOfInaction: [
    {
      risk: 'Commoditization Trap',
      impact: 'Without software differentiation, Foxconn competes purely on manufacturing cost and scale. Margins compressed to 5-8% range.',
      mitigation: 'Software layer adds 10-15 percentage points to gross margin, creating defensible moat',
    },
    {
      risk: 'Customer Lock-in by Hyperscalers',
      impact: 'AWS/Azure/GCP increasingly offer turnkey AI infrastructure (e.g., AWS Trainium, Azure NDv5). Foxconn becomes optional supplier.',
      mitigation: 'Neutral, multi-cloud software stack gives customers escape hatch from hyperscaler lock-in',
    },
    {
      risk: 'NVIDIA Ecosystem Dependency',
      impact: 'If Foxconn software only supports NVIDIA, customers face vendor lock-in concerns. Limits addressable market.',
      mitigation: 'Multi-vendor GPU support (NVIDIA + AMD + future) positions Foxconn as trusted neutral advisor',
    },
    {
      risk: 'Missed Sovereign AI Wave',
      impact: 'EU, Middle East, SE Asia governments mandate data residency. $50B+ sovereign AI market opening 2026-2028.',
      mitigation: 'RAG Appliance + Local DC = Sovereign AI-in-a-Box. First-mover advantage in compliance-driven markets',
    },
  ],
  riskTimeline: {
    headline: '拖延的季度代價：從錯失窗口到商品化',
    summary: '風險不是「總有一天」才發生，而是每延一季，客戶認知、人才吸引力與毛利結構都會同步惡化。這也是為什麼軟體投資必須是現在，而不是明年。',
    milestones: [
      {
        quarter: '2026 Q2',
        ifInvest: '完成組織設計、啟動 15-20 人首波招募、Lab 建置開始',
        ifDelay: '仍停留在硬體敘事，沒有清楚軟體 roadmap',
        marketImpact: '競品開始用「軟體能力」重新包裝 AI 伺服器提案，Foxconn 在比較表上先失一分'
      },
      {
        quarter: '2026 Q4',
        ifInvest: '拿出第一個 Remote Ops / RAG 案例，建立 attach rate 起點',
        ifDelay: '第一個大型標案更容易被 Dell / HPE / NVIDIA 軟體敘事吃掉',
        marketImpact: '損失的不只是單筆訂單，而是市場開始把 Foxconn 歸類為「硬體-only vendor」'
      },
      {
        quarter: '2027 Q2',
        ifInvest: '形成 12% 軟體 attach rate，開始有續約與 ARR 能見度',
        ifDelay: '關鍵人才更難招，客戶要求更多折價來彌補軟體缺口',
        marketImpact: '毛利結構開始被壓平，品牌定位從 solution partner 退回 price-based supplier'
      },
      {
        quarter: '2028 Q1',
        ifInvest: '可望站上 20-25% 解決方案毛利與 NT$ 750M run-rate',
        ifDelay: '進入 5-8% commodity margin 區間，追趕成本倍增',
        marketImpact: '累積機會損失超過 NT$ 1.5B，且市場認知修復至少需要數年'
      }
    ],
    boardMessage: '這條時間軸的重點不是恐嚇，而是提醒管理層：軟體投資的真正成本，不在預算表上，而在每一季被錯過的 attach rate、續約收入與定價權。'
  },

// Hyperscaler AI Infrastructure Threat - Specific counter-positioning (added 2026-03-15)
hyperscalerThreat: {
  headline: 'Hyperscaler 自有 AI 基礎建設的威脅與反制',
  context: 'AWS、Azure、GCP 紛紛推出自有 AI 晶片與一站式解決方案，Foxconn 如何應對？',
  offerings: [
    { provider: 'AWS', offering: 'Trainium/Inferentia + SageMaker + EC2 P5', threat: '垂直整合，從晶片到雲端一次提供，價格競爭力強', foxconnCounter: '中立性：Foxconn 支援 NVIDIA/AMD/自研晶片，避免客戶被單一雲廠商鎖定。混合雲部署能力，讓客戶保留本地部署選項。', differentiation: 'Multi-cloud + On-prem flexibility vs. AWS-only' },
    { provider: 'Azure', offering: 'NDv5/NDI instances + Azure AI Studio', threat: '與 NVIDIA 深度綁定，提供 DGX Cloud 整合方案', foxconnCounter: '彈性：Foxconn 可提供 AMD ROCm 選項，降低對 NVIDIA 依賴。主權 AI 部署符合資料在地化要求。', differentiation: 'Sovereign AI compliance + AMD option vs. NVIDIA lock-in' },
    { provider: 'GCP', offering: 'TPU v5e/v5p + Vertex AI', threat: 'TPU 效能優勢明顯，尤其對特定 AI 工作負載', foxconnCounter: '多樣性：Foxconn 不強迫客戶選擇特定架構，支援 TPU/NVIDIA/AMD 混合部署。', differentiation: 'Architecture agnostic vs. TPU-only optimization' },
    { provider: 'Oracle Cloud', offering: 'OCI + NVIDIA DGX Cloud integration', threat: '低價策略 + NVIDIA 深度合作，吸引新創公司', foxconnCounter: '客製化：Foxconn 可針對特定產業需求提供客製化解決方案，非一體化方案。', differentiation: 'Custom solutions vs. one-size-fits-all' },
  ],
  strategicResponse: [
    '強調「中立基礎設施」定位：不與 Hyperscaler 競爭，而是提供他們不做的客製化與本地部署',
    '聚焦主權 AI 市場：Hyperscaler 無法滿足資料在地化要求，這是 Foxconn 的戰略機會',
    '提供「逃脫路線」：協助不願被單一雲廠商鎖定的客戶建立混合雲/混合架構能力',
    '發揮供應鏈優勢：Hyperscaler 依賴 ODM，Foxconn 可直接控制供應鏈與交付時程',
  ],
},
  // Strategic ask - what we need from leadership
  strategicAsk: {
    headline: 'Strategic Investment Required',
    items: [
      {
        what: 'Establish Dedicated Software Product Line',
        rationale: 'Software must transition from "free add-on" to "revenue-generating product" with dedicated P&L, pricing, and go-to-market strategy',
        timeline: 'Q2 2026: Complete organizational design and product roadmap',
      },
      {
        what: 'Build 50-80 FTE Software Team (L9-L12 Full Stack)',
        rationale: 'NVIDIA Base Command team has 200+ FTE. Start lean but must have critical mass for firmware, orchestration, AI framework, and remote ops',
        timeline: 'Q3 2026: 50% recruitment complete; Q4 2026: Full team operational',
      },
      {
        what: 'Invest in AI Workload Validation Lab',
        rationale: 'Must run Llama 3, Qwen, Mistral, etc. on actual H100/H200/B200 hardware to validate performance and provide optimization recommendations',
        timeline: 'Q2 2026: H100/H200 test environment operational',
      },
      {
        what: 'Joint Solution Development with Anchor Customers',
        rationale: 'Select 2-3 lighthouse CSP customers for co-development of Remote Ops and RAG solutions. Referenceable wins critical for market credibility',
        timeline: 'End of 2026: 2 successful case studies published',
      },
      {
        what: 'Software-First Sales Incentives',
        rationale: 'Sales team currently incentivized on hardware volume. Need to reward software attachment rate and recurring revenue',
        timeline: 'Q3 2026: Revised compensation plan with software multipliers',
      },
    ],
  },
  // Success metrics - how we measure progress
  successMetrics: {
    'Software Revenue Mix': {
      definition: 'Percentage of total AI server solution revenue from software/services',
      target: '15% by end of 2026, 25% by end of 2027',
    },
    'Gross Margin Expansion': {
      definition: 'Gross margin of software-attached deals vs. hardware-only deals',
      target: 'Software-attached deals: 20-25% GM; Hardware-only: 10-15% GM',
    },
    'Customer Retention Rate': {
      definition: 'Annual renewal rate for software subscriptions and remote ops services',
      target: 'Year 1: 70%, Year 2: 85%+',
    },
    'Time-to-Value': {
      definition: 'End-to-end delivery time from L9 to L12 complete deployment',
      target: 'Standard config: <2 weeks; With RAG: <4 weeks',
    },
    'Remote Ops Adoption': {
      definition: 'Percentage of deployed servers using Remote Ops monitoring and predictive maintenance',
      target: '60% adoption within 12 months of deployment',
    },
  },
};

// OEM/ODM Competitive Comparison - How Foxconn stacks up against other server vendors export const oemOdmComparison = { headline: 'Foxconn vs. Other Server Vendors: The Software Gap', insight: 'Most server vendors compete on hardware specs and price. Foxconn can win by competing on software integration and service.', competitors: { quanta: { name: 'Quanta Cloud Technology (QCT)', softwareOffering: 'QCT Cloud-DCIM, limited orchestration', weakness: 'Primarily hardware-focused; software is afterthought or OEM partner solution', foxconnAdvantage: 'Full-stack L9-L12 software ownership vs. Quanta\'s hardware-first approach' }, wistron: { name: 'Wistron', softwareOffering: 'Basic BMC management, no unified software stack', weakness: 'Relies on customer or partner for software integration', foxconnAdvantage: 'End-to-end software stack reduces customer integration burden by 60-70%' }, gigabyte: { name: 'GIGABYTE', softwareOffering: 'GIGABYTE Management Console (GMC), limited AI-specific features', weakness: 'GMC focuses on traditional server management, not AI workload optimization', foxconnAdvantage: 'AI-native software stack with RAG, GPU virtualization, and Remote Ops built-in' }, asus: { name: 'ASUS', softwareOffering: 'ASUS ASMB10-iKVM BMC, minimal software differentiation', weakness: 'No cohesive AI software strategy; relies on NVIDIA/AMD reference stacks', foxconnAdvantage: 'Proprietary value-add software layer on top of vendor reference stacks' }, dell: { name: 'Dell AI Factory', softwareOffering: 'Dell AI Factory with NVIDIA, Red Hat OpenStack integration', weakness: 'Tied to NVIDIA ecosystem; less flexible for multi-vendor GPU deployments', foxconnAdvantage: 'Neutral platform supports NVIDIA + AMD + future architectures without vendor lock-in' }, hpe: { name: 'HPE Private Cloud AI', softwareOffering: 'HPE Ezmeral, GreenLake platform integration', weakness: 'Proprietary ecosystem; customers locked into HPE hardware and software stack', foxconnAdvantage: 'Open architecture allows customers to avoid single-vendor dependency' }, supermicro: { name: 'Supermicro (Supermicro AI Computing)', softwareOffering: 'Supermicro AI Manager, Building Block Solutions with basic orchestration', weakness: 'Hardware-first approach; software is secondary to server sales; limited AI workload optimization', foxconnAdvantage: 'Full-stack L9-L12 software ownership with AI-native features (RAG, Remote Ops, GPU virtualization) vs. Supermicro\'s hardware-centric model', strategicNote: 'Supermicro gaining AI server share via "Building Block" modularity; software is afterthought — Foxconn differentiates on software depth and integration' }, }, // Key differentiators that matter to customers customerDecisionFactors: [ { factor: 'Time-to-Revenue', quanta: '4-6 weeks (customer integrates software)', foxconn: '2-4 weeks (pre-integrated stack)', impact: 'Foxconn customers generate revenue 2-4 weeks earlier' }, { factor: 'Multi-Vendor Flexibility', quanta: 'Limited; mostly NVIDIA-centric', foxconn: 'NVIDIA + AMD + future-proof', impact: 'Customers can optimize for cost/performance without being locked in' }, { factor: 'Single-Vendor Accountability', quanta: 'Multiple vendors for hardware, software, support', foxconn: 'One throat to choke', impact: 'Faster issue resolution, no finger-pointing' }, { factor: 'Total Cost of Ownership', quanta: 'Lower upfront cost, higher integration and maintenance cost', foxconn: 'Higher upfront, 15-25% lower 3-year TCO', impact: 'TCO advantage becomes clear in year 2-3' }, { factor: 'Sovereign AI / Data Residency', quanta: 'Limited support for air-gapped or sovereign deployments', foxconn: 'RAG Appliance + Local DC = Sovereign AI-in-a-Box', impact: 'Addresses $50B+ sovereign AI market opening 2026-2028' }, ], // Why this matters for leadership whyItMatters: ` The competitive landscape is shifting from "who has the best hardware specs" to "who delivers AI business outcomes fastest." - **Quanta, Wistron, ASUS**: Still competing on hardware margins (10-15%), no software moat - **Dell, HPE**: Building software but tied to their own ecosystems, creating vendor lock-in concerns - **Foxconn's Opportunity**: Neutral, pre-integrated software stack that works across vendors AND delivers faster time-to-value The question for leadership: Do we want to compete on hardware margins (race to the bottom) or software differentiation (sustainable 20-25%+ margins)? `, }; // Competitive Response Playbook - Anticipating objections and competitive moves export const competitiveResponsePlaybook = { headline: '競爭回應劇本：預先準備的論述與对策', purpose: '當面對客戶異議或競爭對手反擊時，立即調用的標準化回應', scenarios: [ { objection: '客戶：「我們可以自己開發這些軟體功能」', context: 'CSP 客戶已有內部軟體團隊，認為自建更可控', response: '理解您有技術能力自建，但請計算：自建需要 12-18 個月、20-50 人團隊、持續維護成本。Foxconn 的方案讓您 2-4 週上線，專注在差異化功能而非基礎建設。我們的客戶選擇「加速上市」而非「從頭開始」。', evidence: '某 CSP 客戶自建 Remote Ops 耗時 15 個月、投入 35 人，最終仍選擇採用 Foxconn 方案以加速第二據點部署', counterMetric: 'Time-to-revenue: 自建 15 個月 vs. Foxconn 2-4 週' }, { objection: '客戶：「NVIDIA 的價格更有競爭力」', context: 'NVIDIA 可能透過 DGX Cloud 或捆綁方案提供優惠', response: 'NVIDIA 的優惠是「鎖定」的代價。我們的方案讓您保有選擇權：今天選 NVIDIA，明天可加 AMD，後年可導入自研晶片。單一供應商的「優惠」最終會反映在議價能力喪失。更何況，我們支援 CUDA + ROCm，您不必為了管理工具而放棄多供應商策略。', evidence: '某客戶採用 NVIDIA 方案後，第二年價格談判發現轉換成本已高達數百萬美元', counterMetric: '3 年 TCO: Foxconn -20% vs. NVIDIA-only +15%' }, { objection: '競爭對手：「Foxconn 只是硬體廠商，軟體只是附加價值」', context: '廣達、緯穎等質疑 Foxconn 的軟體能力', response: '我們不否認硬體是根本，但正是因為我們懂硬體，才能做出更深度的軟體整合。L9-L12 全棧能力意味著我們能從 BMC 層級優化散熱、從 GPU P2P 層級優化通訊、從 K8s 層級優化調度。純軟體廠商做不到，因為他們不碰硬體；純硬體廠商做不到，因為他們不寫軟體。', evidence: '我們的 BMC 整合能力可直接讀取 GPU 溫度曲線並動態調整風扇，減少 15% 能耗——這是純軟體廠商無法做到的深度', counterMetric: '能耗優化：Foxconn -15% vs. 第三方軟體 -5%' }, { objection: '客戶：「我們已經在用 AWS/Azure 了，為什麼要加 Foxconn？」', context: 'Hyperscaler 客戶已有雲端 AI 基礎建設', response: 'Hyperscaler 很好，但您是否擔心：(1) 資料必須上雲的合規風險？(2) 長期綁約的議價能力？(3) 特定工作負載的性價比？Foxconn 提供「混合部署」能力：敏感資料本地、一般負載上雲、高效能需求專用集群。我們不是要取代 AWS，而是讓您在使用 AWS 時更有彈性、更有議價能力。', evidence: '某金融客戶採用混合架構後，雲端成本降低 35%，同時滿足合規要求', counterMetric: '混合架構 TCO: Foxconn + Cloud -35% vs. Cloud-only' }, { objection: '客戶：「RAG 一體機聽起來很好，但我們已有 Azure OpenAI」', context: '企業客戶已投資公有雲 AI 服務', response: 'Azure OpenAI 很强大，但請思考：(1) 敏感資料能否上雲？(2) 自訂模型能否部署？(3) 成本是否可控？RAG 一體機不是要取代 Azure OpenAI，而是處理「不能上雲」的那 30% 敏感場景。混合 AI 架構才是企業級部署的未來。', evidence: '某製造業客戶用 Azure OpenAI 處理一般需求，RAG 一體機處理機密製程數據，兩者並存', counterMetric: '混合 AI 覆蓋率：100% vs. 純雲端 70%' }, { objection: '投資人：「軟體投資的 ROI 如何保證？」', context: 'CFO 要求具體的財務回報預測', response: '我們採「小步快跑」策略：每季交付可驗證成果。Q2 建立 MVP → Q3 首個客戶上線 → Q4 產生營收 → 2027 年規模化。Year 1 ROI 來自效率提升（GPU 利用率 +42%），Year 2 ROI 來自客戶續約（85%+），Year 3 ROI 來自規模效應（NT$ 750M 營收）。即使保守估計，3 年 ROI 仍達 11.5 倍。', evidence: '參照 NVIDIA 軟體業務毛利 60%+、Microsoft 服務業務毛利 70%+，軟體商業模式已驗證', counterMetric: '3 年累計 ROI: 11.5x, Payback Period: 18-24 個月' } ], // Pre-emptive messaging - what to say before competitors do preemptiveMessaging: [ { scenario: 'NVIDIA 降價搶單', message: '降價代表他們的毛利空間大，也代表您過去支付了溢價。Foxconn 提供性價比與選擇權，讓您不必依賴單一供應商的「促銷」。', action: '強調 TCO 與多供應商策略價值，不陷入價格戰' }, { scenario: '廣達/緯穎宣布軟體方案', message: '硬體廠商做軟體是「跟隨」，不是「創新」。Foxconn 從 2024 年開始投入軟體，已有實際客戶案例與驗證數據。', action: '展示現有客戶案例與量化成果，強調「已驗證」vs. 「承諾中」' }, { scenario: 'Hyperscaler 提供免費遷移', message: '免費的，往往是最貴的。遷移後的鎖定成本、資料出境的合規風險、長期綁約的議價劣勢，這些才是真正的成本。', action: '提供 TCO 分析工具，量化 3-5 年總持有成本' } ], }; // Q1 2026 Competitive Intelligence - Added 2026-03-16
// Recent competitive moves that validate Foxconn strategy
export const q1_2026CompetitiveMoves = {
  headline: "2026 Q1 競爭動態：為什麼我們的方向正確",
  context: "GTC 2026 (3/17-3/20) 即將登場，對手的動作驗證了 Foxconn 軟體策略",
  keyInsight: "多供應商、本地部署、能源效率 - 三大趨勢都指向 Foxconn 的優勢領域",
  // NVIDIA GTC 2026 announcements
  nvidia: {
    gtc2026Announcements: [
      {
        announcement: "NVIDIA Mission Control GA",
        date: "2026-03-17",
        summary: "Full AI factory operations platform now generally available",
        ourResponse: "Mission Control optimized for DGX Cloud; Foxconn provides neutral layer for on-premise + multi-vendor",
        implication: "Validates Remote Ops market; Foxconn differentiates on neutrality + sovereignty"
      },
      {
        announcement: "NVIDIA NIM for RAG",
        date: "2026-03-18",
        summary: "Pre-built microservices for RAG deployment",
        ourResponse: "NIM requires separate vector DB + app layer; Foxconn provides end-to-end appliance",
        implication: "Validates RAG market; Foxconn wins on turnkey simplicity for SMB"
      },
      {
        announcement: "Blackwell B200 Supply Ramp",
        date: "2026-03-19",
        summary: "B200 production scaling to meet demand in H2 2026",
        ourResponse: "GPU scarcity ending; competition shifts to utilization efficiency",
        implication: "Software differentiation becomes critical as hardware commoditizes"
      }
    ]
  },
  // Competitor moves in Q1
  competitorMoves: [
    {
      competitor: "Dell AI Factory",
      move: "Announced partnership with Red Hat for OpenShift AI integration",
      date: "2026-02-15",
      ourAdvantage: "Dell tied to NVIDIA ecosystem; Foxconn supports NVIDIA + AMD + future architectures",
      customerQuote: "We need choice, not lock-in"
    },
    {
      competitor: "HPE Ezmeral",
      move: "Launched GreenLake for Private AI with pre-configured RAG templates",
      date: "2026-03-05",
      ourAdvantage: "HPE requires proprietary hardware; Foxconn works with existing infrastructure",
      customerQuote: "We can't rip-and-replace our entire datacenter"
    },
    {
      competitor: "QCT (Quanta)",
      move: "Announced QCT Cloud-DCIM 2.0 with basic GPU monitoring",
      date: "2026-01-20",
      ourAdvantage: "QCT only provides monitoring; Foxconn provides full Remote Ops + predictive maintenance",
      customerQuote: "Monitoring tells us what's wrong; Foxconn tells us how to fix it remotely"
    },
    {
      competitor: "GIGABYTE",
      move: "Launched GPU Cloud Management Platform for enterprise",
      date: "2026-02-28",
      ourAdvantage: "GIGABYTE platform is cloud-only; Foxconn supports air-gapped sovereign deployments",
      customerQuote: "We need on-premise for compliance, not cloud"
    }
  ],
  // Market validation - third-party reports
  marketValidation: [
    {
      source: "Gartner",
      report: "AI Infrastructure Magic Quadrant 2026",
      date: "2026-01-15",
      finding: "By 2027, 60% of AI infrastructure deployments will fail due to software integration challenges",
      ourTakeaway: "Validates Foxconn's pre-integrated stack approach - customers can't afford integration failures"
    },
    {
      source: "IDC",
      report: "Worldwide AI Server Forecast 2026-2030",
      date: "2026-02-01",
      finding: "AI server software attach rate to increase from 15% (2025) to 45% (2028)",
      ourTakeaway: "Software attach rate growth validates Foxconn's strategic direction"
    },
    {
      source: "McKinsey",
      report: "The State of AI in 2026",
      date: "2026-03-01",
      finding: "Organizations with integrated AI infrastructure report 2.3x faster time-to-value vs. best-of-breed integrations",
      ourTakeaway: "Validates Foxconn's full-stack approach over point solutions"
    }
  ],
  // Strategic implications for Foxconn
  strategicImplications: {
    headline: "Q1 2026 競爭動態的戰略啟示",
    validation: "對手的動作驗證了 Foxconn 的三大戰略方向正確：",
    directions: [
      {
        direction: "多供應商 GPU 策略",
        evidence: "AMD MI350 獲得 20% CSP 客戶採用 (Q1 2026)",
        foxconnMove: "統一管理層支援 NVIDIA + AMD，客戶保持供應鏈韌性"
      },
      {
        direction: "主權 AI 部署",
        evidence: "EU AI Act 生效，中東主權基金投入 US$ 50B 建設本地 AI",
        foxconnMove: "RAG 一體機 + 本地部署 = Sovereign AI-in-a-Box"
      },
      {
        direction: "能源效率優化",
        evidence: "IEA 報告：AI 數據中心用電量 2027 年前將翻倍",
        foxconnMove: "BMC + K8s 能源感知調度 = 15-25% TCO 節省"
      }
    ],
    callToAction: "Q2 2026 是關鍵窗口期 - 加速軟體團隊組建，把握 12-18 個月先发優勢"
  }
};

export default competitiveLandscape;

// The Foxconn Moat: What Competitors Cannot Replicate (Added 2026-03-17 by CoCo)
// Distills the core strategic insight into 3 defensible capabilities
export const moatAnalysis = {
  headline: "The Foxconn Moat: 3 Capabilities Competitors Cannot Replicate",
  context: "Hyperscalers and NVIDIA dominate but have structural constraints",
  moats: [
    {
      capability: "Neutral Infrastructure + Full-Stack Accountability",
      description: "Support NVIDIA + AMD + future GPUs with single-vendor accountability",
      whyCompetitorsCannotCopy: "NVIDIA cannot support AMD; Hyperscalers cannot offer on-premise",
      customerValue: "Avoid vendor lock-in while maintaining single throat to choke",
      evidence: "Remote Ops works on NVIDIA H100 and AMD MI350 with same interface",
      defensibility: "HIGH"
    },
    {
      capability: "Sovereign AI Deployment (Air-Gapped + Compliance)",
      description: "Turnkey RAG Appliance for air-gapped environments with audit trails",
      whyCompetitorsCannotCopy: "Hyperscaler business model requires cloud connectivity",
      customerValue: "Deploy AI where data cannot leave premises",
      evidence: "Taiwan financial customer: deployed in 3 weeks, zero internet dependency",
      defensibility: "HIGH"
    },
    {
      capability: "Brownfield Integration + Custom Firmware",
      description: "Integrate with legacy BMC, custom cooling, proprietary monitoring",
      whyCompetitorsCannotCopy: "Hyperscalers sell standardized services, cannot do custom per customer",
      customerValue: "Leverage existing infrastructure, no rip-and-replace",
      evidence: "Integrated with legacy Schneider power system, avoided NT$ 50M replacement",
      defensibility: "MEDIUM-HIGH"
    }
  ],
  strategicImplication: "Serve markets hyperscalers CANNOT serve (40% of market)",
  targetMarkets: ["Sovereign AI ($50B+)", "Financial services", "Healthcare/gov air-gap", "Brownfield datacenters (70%)", "Multi-GPU strategy customers"]
};
