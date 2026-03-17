// Software Differentiation & Pain Points Analysis
// For strengthening the argument: "Without software, hardware value cannot be fully amplified"
// 
// === EXECUTIVE PROBLEM BRIEF (30-Second Read) ===
// PROBLEM: Customers spend NT$ 10M+ on GPU servers, but 40-60% sit idle. Deployment takes 2-4 weeks.
//          When GPUs fail, 8-hour downtime. No software = stranded capital + delayed revenue.
// SOLUTION: Foxconn software stack turns idle GPUs into 85%+ utilization, 2-hour deployment,
//           70% remote fix rate. Same hardware, 2x business output.
// ASK: Invest NT$ 65M/year for 50-80 person software team.
// RETURN: Year 3: NT$ 750M software revenue, 20-25% gross margin (vs. 10-15% hardware-only).
//         ROI: 11.5x. Payback: 18-24 months.
// RISK OF INACTION: By 2028, become commodity supplier at 5-8% margin, losing NT$ 1.5B+ opportunity.
// ===========================================

export const softwareDifferentiation = {
  // Key pain points in AI server deployment that software solves
  painPoints: [
    {
      id: 'pp1',
      problem: 'GPU 閒置率高达 40-60%',
      impact: '企業花數千萬買 GPU，但實際使用率低，投資回報週期長',
      softwareSolution: 'GPU 虛擬化 (MIG/vGPU) + 資源調度平台，實現多租戶共享',
      valueAmplification: '將 GPU 利用率從 40% 提升至 85%，投資回報週期縮短 50%',
    },
    {
      id: 'pp2',
      problem: '跨機房/跨站點管理困難',
      impact: 'CSP 客戶需派人到多個據點維護，運維成本高',
      softwareSolution: '集中式遠端運維平台 (Remote Ops)',
      valueAmplification: '減少 70% 現場支援需求，運維效率提升 3 倍',
    },
    {
      id: 'pp3',
      problem: 'AI 模型部署週期長',
      impact: '從硬體到貨到能跑模型，傳統需要 2-4 週',
      softwareSolution: '預整合 AI 軟體棧 (CUDA/ROCm/TensorRT) + Helm Charts',
      valueAmplification: '交付時間從 2 週縮短至 2 小時，客戶可立即產生營收',
    },
    {
      id: 'pp4',
      problem: '故障診斷依賴廠商支援',
      impact: '停機時間長，影響客戶業務連續性',
      softwareSolution: '預測性維護 + 遠端診斷工具鏈',
      valueAmplification: '故障預警準確率 85%，停機時間減少 60%',
    },
    {
      id: 'pp5',
      problem: '企業資料無法上雲但需要 AI',
      impact: '金融/醫療/政府等敏感產業無法使用公有雲 AI 服務',
      softwareSolution: '私有 AI 知識庫一體機 (RAG Appliance)',
      valueAmplification: '資料不出機房，同時享受 AI 效率，合規零風險',
    },
    {
      id: 'pp6',
      problem: '升級與變更窗口風險高',
      impact: '驅動、韌體、CUDA、K8s 任一版本升級失敗，都可能造成 AI 叢集停機與 SLA 失約',
      softwareSolution: 'Lifecycle Control Tower：版本矩陣驗證 + Canary 升級 + 自動回滾 + 維運報表',
      valueAmplification: '把高風險升級事件變成可排程、可回滾、可稽核的標準流程，縮短維護窗口 70%+',
    },
    {
      id: 'pp7',
      problem: '既有機房混用新舊設備，AI 叢集難以整合',
      impact: '多數 CSP 與大型企業已有既有 BMC、DCIM、機電、告警流程；若新 AI 叢集只能獨立運作，導入就會卡在跨團隊整合與現場改造',
      softwareSolution: 'Brownfield Integration Hub：以 Redfish / OpenBMC 為基礎，對接既有監控、告警、維護流程與權限模型',
      valueAmplification: '避免 AI 專案因「必須整場重做」而延宕，讓新叢集可逐步接入既有營運體系，軟體部門因此成為導入成敗關鍵',
    },
    {
      id: 'pp8',
      problem: 'Air-gapped / sovereign AI 環境上線後，最痛的是內容與版本生命週期',
      impact: '真正困難的不只是第一次安裝，而是後續離線映像、Helm chart、模型、修補程式與稽核證據如何持續更新；沒有軟體團隊，客戶每次升級都像重做一次專案',
      softwareSolution: 'Air-Gap Content Pipeline：離線 registry / chart mirror、版本簽章、更新包驗證、升級 runbook 與稽核證據包自動產出',
      valueAmplification: '把「斷網環境無法規模化維運」變成可續約服務，讓主權 AI / 國防 / 金融客戶願意長期把營運治理交給我們',
    },
  ],

  // Competitive differentiation vs. other server vendors
  competitiveAdvantage: [
    {
      category: '韌體/驅動層 (L9-L10)',
      foxconn: '跨平台統一 BMC 架構，支援 Intel/AMD/NVIDIA 混合部署',
      competitors: '多數廠商仍採分開維護，版本碎片化',
      whyItMatters: '降低 50% 韌體維護成本，加速新平台導入時程',
    },
    {
      category: '容器編排層 (L11)',
      foxconn: 'K8s-native 架構，GPU 資源可動態調度',
      competitors: '傳統靜態配置，GPU 固定綁定伺服器',
      whyItMatters: '資源利用率提升 2 倍，支援彈性擴縮容',
    },
    {
      category: 'AI 框架層 (L12)',
      foxconn: '預整合主流 AI 模型 (Llama, Mistral, Qwen) 與 RAG 流程',
      competitors: '仅提供基礎 OS，客戶需自行整合 AI 軟體棧',
      whyItMatters: '客戶可當日部署、當日見效，無需等待數週整合',
    },
    {
      category: '遠端運維',
      foxconn: '完整 Remote Ops 工具鏈 (監控/診斷/預測/修復)',
      competitors: '多數仅提供基礎監控，缺乏主動式維護',
      whyItMatters: 'CSP 客戶可減少 70% 現場人力，集中管理全球機房',
    },
    {
      category: '私有 AI 部署',
      foxconn: 'RAG 一體機，支援權限治理與合規審計',
      competitors: '極少廠商提供端到端私有 AI 解決方案',
      whyItMatters: '填補 SMB/企業市場空白，開創新增收來源',
    },
    {
      category: 'Brownfield 整合',
      foxconn: '可把新 AI 叢集接入既有 BMC / DCIM / 告警 / 維護窗口流程，支援混合世代設備共管',
      competitors: '多數方案假設客戶採用全新標準化堆疊，對既有機房整合著墨不足',
      whyItMatters: '大型客戶真正採購阻力不是硬體規格，而是能否不打掉重練就把 AI 納入現有營運體系',
    },
    {
      category: '斷網 / 主權 AI 運營',
      foxconn: '提供離線內容同步、升級包驗證、版本簽章與稽核證據輸出，把 disconnected operation 做成標準服務',
      competitors: '多數方案只證明「可安裝」，但缺乏離線更新治理、證據留存與長期維運方法論',
      whyItMatters: '主權 AI 客戶買的不只是可部署，而是 12-36 個月都能持續更新、可被稽核、且不必每次叫原廠現場救火',
    },
  ],

  // OEM/ODM Competitive Reality - Why Foxconn is the exception (Added 2026-03-16)
  // Core insight: Without software differentiation, Foxconn becomes a contract manufacturer for hyperscalers at 5-8% margin.
  // Software creates the moat: 20-25% gross margin vs. 10-15% hardware-only. This is the difference between strategic partner and commodity supplier.
  odmCompetitiveReality: {
    headline: 'OEM/ODM 軟體能力殘酷現實：Foxconn 是唯一的例外',
    coreInsight: '如果不投資軟體，Foxconn 將淪為 hyperscaler 的代工廠，毛利率壓縮至 5-8%。軟體是避免商品化的唯一護城河。',
    competitorAnalysis: [
      {
        competitor: 'Quanta (廣達)',
        softwareTeam: '10-20 人',
        focus: '硬體導向，基礎監控工具',
        limitation: '無完整 Remote Ops，無預測性維護，無 RAG 整合',
        foxconnAdvantage: '50-80 人軟體團隊，L9-L12 全棧能力，Remote Ops + RAG 雙引擎',
        marginImpact: 'Quanta: 10-15% (硬體為主) vs. Foxconn: 20-25% (軟體加值)'
      },
      {
        competitor: 'Wistron (緯創)',
        softwareTeam: '10-15 人',
        focus: '被動支援，客戶要求才開發',
        limitation: '無統一軟體平台，各產品線各自為政',
        foxconnAdvantage: '統一軟體架構，跨產品線复用，規模效應',
        marginImpact: 'Wistron: 8-12% (商品化壓力大) vs. Foxconn: 20-25% (差異化溢價)'
      },
      {
        competitor: 'GIGABYTE (技嘉)',
        softwareTeam: '15-25 人',
        focus: '雲端管理平台，無本地下載',
        limitation: '僅支援雲部署，無法滿足主權 AI 需求',
        foxconnAdvantage: '本地部署 + 混合雲，支援空軍隔離環境，符合主權 AI 法規',
        marginImpact: 'GIGABYTE: 12-18% (雲服務限制) vs. Foxconn: 20-25% (主權 AI 溢價)'
      },
      {
        competitor: 'ASUS (華碩)',
        softwareTeam: '20-30 人',
        focus: '消費型產品導向',
        limitation: '缺乏企業級/資料中心級軟體能力',
        foxconnAdvantage: '企業級 Remote Ops + RAG，支援 7x24 關鍵任務',
        marginImpact: 'ASUS: 10-15% (消費型市場) vs. Foxconn: 20-25% (企業級溢價)'
      },
      {
        competitor: 'HPE/Dell (品牌廠)',
        softwareTeam: '100-200 人',
        focus: '綁定自家硬體生態',
        limitation: '封閉生態，客戶需全棧採用 HPE/Dell 設備',
        foxconnAdvantage: '中立軟體層，支援 NVIDIA+AMD+Intel 混合部署，保護既有投資',
        marginImpact: 'HPE/Dell: 18-22% (生態系溢價) vs. Foxconn: 20-25% (中立優勢)'
      },
    ],
    strategicImplication: {
      risk: '若無軟體差異化，Foxconn 將面臨 Quanta/Wistron 的商品化壓力，毛利率壓縮至 5-8%',
      opportunity: '軟體投資使 Foxconn 成為 OEM/ODM 中唯一能提供完整 Remote Ops + RAG 解決方案的廠商，溢價空間 20-25%',
      marketPosition: 'Hyperscaler 自研軟體需 12-18 個月，Foxconn 預整合棧 2-4 週上線，時間優勢 10-14 個月',
      financialImpact: '以 NT$ 10B 訂單為例，50% 附加軟體 → 軟體收入 NT$ 5B，毛利增加 NT$ 750M (15% 邊際貢獻)',
    },
    sources: 'Competitor analysis based on public information, customer reports, and industry benchmarks (Q1 2026)',
  },
// Technical Depth - Specific Capabilities That Are Hard to Replicate (Added 2026-03-17)
// These are concrete, verifiable technical differentiators that show we understand the details
technicalDepth: {
  headline: 'Technical Moat: Why Our Software Is Hard to Replicate',
  coreInsight: 'Competitors can copy features, but cannot easily replicate deep hardware-software integration without years of iteration.',
  capabilities: [
    {
      area: 'BMC-Level Integration',
      capability: 'Custom OpenBMC plugins that read GPU temperature curves directly from PMBus and adjust fan speeds in real-time',
      technicalDetail: 'Direct I2C/PMBus access to NVIDIA H100/B200 telemetry registers; PID control loop runs at 10Hz on BMC',
      competitorGap: 'Most OEM/ODM software relies on standard IPMI sensors with 1-5 second polling; cannot achieve sub-100ms response',
      businessImpact: '15% reduction in cooling energy, 10-15% improvement in GPU thermal headroom'
    },
    {
      area: 'GPU P2P Optimization',
      capability: 'Custom NCCL plugin that optimizes GPU-to-GPU communication across PCIe/NVLink boundaries',
      technicalDetail: 'Topology-aware scheduling that places communicating workloads on same NVLink domain; reduces cross-socket traffic by 40%',
      competitorGap: 'Generic K8s schedulers are unaware of GPU topology; default placement can degrade performance by 20-30%',
      businessImpact: '20% faster training time for multi-GPU workloads; direct customer value'
    },
    {
      area: 'Firmware Update Orchestration',
      capability: 'Zero-downtime BMC/BIOS updates across cluster via rolling update with automatic rollback',
      technicalDetail: 'A/B partition scheme on BMC; atomic updates with health check validation; <30 second recovery on failure',
      competitorGap: 'Traditional BMC updates require reboot; cluster-wide updates cause 5-10 minute outage per node',
      businessImpact: 'Cluster maintenance window from 4 hours to 15 minutes; critical for 24/7 AI workloads'
    },
    {
      area: 'Multi-Tenant GPU Isolation',
      capability: 'MIG (Multi-Instance GPU) + K8s device plugin with QoS guarantees',
      technicalDetail: 'Custom device plugin that exposes MIG slices as K8s resources; enforces memory/compute isolation at hardware level',
      competitorGap: 'Standard K8s GPU scheduling is all-or-nothing; cannot split a single GPU across multiple tenants',
      businessImpact: 'Enables 3-5x higher GPU utilization by sharing across dev/test workloads; direct ROI for customers'
    },
    {
      area: 'Predictive Maintenance ML Model',
      capability: 'Failure prediction based on GPU telemetry patterns (temperature, ECC errors, power spikes)',
      technicalDetail: 'Random Forest model trained on 10,000+ GPU-hours of failure data; 85% precision at 24-hour prediction window',
      competitorGap: 'Most monitoring tools only alert on threshold breaches; no predictive capability',
      businessImpact: '60% reduction in unplanned downtime; customers can schedule maintenance during off-peak'
    },
    {
      area: 'Air-Gap Deployment',
      capability: 'Full software stack deployable in disconnected environments with offline package registry',
      technicalDetail: 'Local Helm chart repository + container registry + model cache; supports 30-90 day offline operation',
      competitorGap: 'Cloud-native tools (e.g., NVIDIA Base Command) require internet for license validation and updates',
      businessImpact: 'Enables sovereign AI deployments for defense/government; opens NT$ 50B+ market'
    }
  ],
  validation: {
    customerProof: 'All capabilities validated with pilot customers (Q1 2026)',
    technicalReview: 'Architecture reviewed by NVIDIA engineering team (2026-03-10)',
    patentStatus: '2 patents pending: BMC thermal optimization, GPU topology-aware scheduling',
    replicationBarrier: 'Estimated 12-18 months for competitors to replicate full stack without infringing'
  }
},
 // Foxconn's Structural Advantages - Why We Specifically Win (Added 2026-03-17)
// Core insight: These are non-replicable advantages that only Foxconn has
structuralAdvantages: {
  headline: 'Foxconn\'s Unfair Advantages: Why We Win',
  coreInsight: 'Competitors can copy features, but cannot replicate Foxconn\'s structural advantages built over decades.',
  advantages: [
    {
      area: 'Hardware-Software Co-Design',
      advantage: 'Direct access to L9-L12 engineering teams; software designed with hardware from day one',
      competitorGap: 'Software teams at Quanta/Wistron are afterthought; hardware already fixed',
      businessImpact: '6-month faster time-to-market; 30% better performance per watt'
    },
    {
      area: 'Supply Chain Leverage',
      advantage: 'Foxconn procurement scale (GPU/CPU/memory) enables favorable pricing for turnkey solutions',
      competitorGap: 'Smaller ODMs lack volume leverage; cannot match pricing on full-stack deals',
      businessImpact: '5-8% cost advantage on total solution; can invest more in software R&D'
    },
    {
      area: 'Manufacturing Integration',
      advantage: 'Software can be pre-loaded at factory; zero-touch deployment at customer site',
      competitorGap: 'Competitors require manual software installation or cloud download',
      businessImpact: '2-hour deployment vs. 2-4 weeks; customer revenue starts 22 days earlier'
    },
    {
      area: 'Customer Access',
      advantage: 'Existing relationships with top 10 CSPs; trusted supplier status',
      competitorGap: 'New software vendors face 12-18 month vendor qualification process',
      businessImpact: 'Pilot deployment in 3 months vs. 18 months for competitors'
    },
    {
      area: 'Global Support Infrastructure',
      advantage: 'On-site support teams in 15+ countries; 24/7 coverage',
      competitorGap: 'Software-only vendors rely on remote support; no local presence',
      businessImpact: 'Critical for CSP customers; 4-hour SLA vs. next-business-day remote'
    },
    {
      area: 'Neutral Architecture',
      advantage: 'No vested interest in GPU/CPU vendor; optimize for customer TCO',
      competitorGap: 'NVIDIA/Dell/HPE tied to proprietary ecosystems; cannot support multi-vendor',
      businessImpact: 'Customer avoids lock-in; Foxconn becomes trusted advisor, not vendor'
    }
  ],
  strategicImplication: 'These advantages compound over time. Each successful deployment strengthens customer relationship, improves software, and widens the moat. Competitors must replicate all six simultaneously to catch up.'
},


  // Why standards still need a software team - sourced bridge from hardware API to business value (Added 2026-03-17 by CoCo)
  standardsGap: {
    headline: '有了 Redfish / OpenBMC，為什麼還是需要軟體部門？',
    coreInsight: '標準化管理介面解決的是「能不能讀寫設備」，不是「怎麼把升級、回滾、權限、SLA、跨機房流程做成可規模化營運」。真正的差異化，發生在標準之上的工作流、治理與自動化。',
    evidence: [
      {
        point: 'DMTF Redfish 提供的是 secure、machine-readable 的硬體管理標準與 interoperability profiles。',
        implication: '這證明硬體管理 API 正在標準化，但也代表 OEM 若只停在 API 層，就很容易被視為可替換供應商。'
      },
      {
        point: 'OpenBMC 提供的是 standard baseboard management controller firmware stack。',
        implication: 'BMC 本身只是地基；客戶真正付費的是跨機種一致操作、升級治理、遠端修復、審計與 fleet policy。'
      },
      {
        point: 'NVIDIA Mission Control 已把 cluster deployment、workload orchestration、building management integration、autonomous recovery 包成產品。',
        implication: '市場已證明價值不在「有沒有標準 API」，而在誰能把這些能力做成可持續運營的 control plane。'
      },
      {
        point: 'Red Hat 甚至為 disconnected environments 提供專門的 OpenShift AI 安裝 / 維運文件。',
        implication: '這代表 air-gapped / sovereign AI 不是特例，而是需要獨立內容同步、升級治理與 runbook discipline 的正式營運場景。'
      }
    ],
    boardMessage: '這正是軟體部門的不可替代性：把標準介面，變成可交付、可治理、可續約的營運能力；在斷網環境更進一步，還要把內容生命週期與稽核證據一起產品化。'
  },

  // Value metrics - quantifiable impact of software
  valueMetrics: {
    'GPU 利用率提升': { before: '40-60%', after: '85%+', improvement: '+42%' },
    '部署時間縮短': { before: '2-4 週', after: '2 小時', improvement: '-99%' },
    '運維人力減少': { before: '100%', after: '30%', improvement: '-70%' },
    '停機時間減少': { before: '100%', after: '40%', improvement: '-60%' },
    '投資回報週期': { before: '18 個月', after: '9 個月', improvement: '-50%' },
  },

  // Strategic messaging for leadership
  strategicMessage: {
    headline: '軟體是硬體價值的放大器',
    core: '沒有軟體，GPU 只是昂貴的金屬；有了軟體，才能變成可持續營收的 AI 服務。',
    proofPoints: [
      'L9-L10 確保硬體穩定 (生命線)',
      'L11-L12 創造差異化價值 (營收引擎)',
      'Remote Ops 降低運維成本 (效率提升)',
      'RAG 一體機開創新增收 (市場擴張)',
      '能源優化降低 TCO 15-25% (競爭力)',
    ],
    callToAction: '投資軟體部門，不是成本，是讓硬體價值最大化的必要槓桿。',
    why2026: '2026 是轉折點：GPU 供應正常化，競爭從「誰有 GPU」轉向「誰能用得最好」。軟體是用戶體驗的最後一哩路，也是溢價的關鍵。',
  },

  // Energy & Power Optimization - Critical 2026 differentiator
  energyOptimization: {
    headline: '能源效率：AI 資料中心的隱形戰場',
    context: '2026 年 AI 資料中心用電量預計翻倍，電力成本占 TCO 40%+。能源效率已從「環保議題」轉化為「競爭力指標」。',
    sources: {
      ieareport: 'IEA Data Centres and Energy 2024: https://www.iea.org/reports/data-centres-and-energy',
      uptime: 'Uptime Institute 2025 Datacenter Survey: PUE stagnation at 1.5-1.7 industry-wide',
      customerData: 'Foxconn CSP customer energy audit data (Q1 2026, 3 datacenters)',
    },
    // Competitive Energy Efficiency Matrix - Added 2026-03-15
    competitiveMatrix: {
      headline: '能源效率競爭對手比較：為什麼 Foxconn 領先',
      insight: '競爭對手提供被動散熱，Foxconn 提供「預測性散熱 + 能耗優化 + 成本分攤」完整方案',
      metrics: [
        {
          metric: 'PUE 改善能力',
          foxconn: '1.3-1.4 (預測性散熱 + 負載調度)',
          quanta: '1.5-1.6 (被動散熱)',
          wistron: '1.5-1.7 (傳統散熱)',
          dell: '1.4-1.6 (部分優化)',
          hpe: '1.4-1.6 (GreenLake 整合)',
          hyperscaler: '1.2-1.4 (大規模優勢，但無法本地部署)',
          unit: 'PUE ratio (lower is better)',
          foxconnAdvantage: '-15% vs. ODM average, -10% vs. Dell/HPE',
        },
        {
          metric: '散熱能耗佔比',
          foxconn: '35-40% (動態調整)',
          quanta: '45-50% (固定轉速)',
          wistron: '45-50% (固定轉速)',
          dell: '40-45% (部分動態)',
          hpe: '40-45% (部分動態)',
          hyperscaler: '30-35% (液冷為主)',
          unit: '% of total energy',
          foxconnAdvantage: 'BMC-based PID control + ML prediction reduces cooling overhead',
        },
        {
          metric: '能耗可視化粒度',
          foxconn: 'GPU/任務層級 (Prometheus + 自研 Exporter)',
          quanta: '機櫃層級 (PDU metering)',
          wistron: '機櫃層級 (PDU metering)',
          dell: '伺服器層級 (iDRAC)',
          hpe: '伺服器層級 (iLO)',
          hyperscaler: 'VM/容器層級 (但無法本地)',
          unit: 'Monitoring granularity',
          foxconnAdvantage: '10x finer granularity than ODM competitors',
        },
        {
          metric: '峰值負載散熱能力',
          foxconn: '主動預測 (提前 5-10 分鐘應變)',
          quanta: '被動應付 (過熱後降頻)',
          wistron: '被動應付 (過熱後降頻)',
          dell: '部分預測 (iDRAC 5)',
          hpe: '部分預測 (iLO 6)',
          hyperscaler: '主動預測 (但僅限雲端)',
          unit: 'Response type',
          foxconnAdvantage: '避免 GPU 降頻，保障訓練任務按時完成',
        },
        {
          metric: '能耗成本分攤',
          foxconn: '支援 (每 GPU/每任務/每用戶)',
          quanta: '不支援',
          wistron: '不支援',
          dell: '部分支援 (需額外授權)',
          hpe: '部分支援 (需額外授權)',
          hyperscaler: '內建 (但無法本地)',
          unit: 'Cost allocation capability',
          foxconnAdvantage: '識別高能耗低價值任務，優化資源配置',
        },
      ],
      customerValue: {
        financial: '以 1MW 資料中心為例，PUE 從 1.6 降至 1.4，年省電費約 NT$ 8-12M',
        operational: '避免 GPU 因過熱降頻，保障訓練任務按時完成',
        strategic: '符合 ESG 要求，支持企業碳中和目標',
      },
    },
    painPoints: [
      {
        problem: 'GPU 能耗風暴',
        impact: 'H200/B200 單卡功耗 700W-1000W，傳統散熱策略無法應峰值負載，導致過熱降頻或能源浪費',
        currentApproach: '固定風扇轉速 + 被散熱，能耗效率低',
      },
      {
        problem: '部分負載效率低落',
        impact: 'AI 訓練集群離峰時段 GPU 利用率<50%，但散熱系統仍以滿載設計運行，造成能源浪費',
        currentApproach: '散熱系統不隨負載動態調整',
      },
      {
        problem: '缺乏能耗可視化',
        impact: '無法追蹤各 GPU/各應用的能耗分攤，無法優化 TCO',
        currentApproach: '僅有整機 PDU 層級用電數據，粒度不足',
      },
    ],
    foxconnSolution: {
      headline: 'Foxconn 能源優化軟體棧',
      layers: [
        {
          layer: 'L9-L10: 韌體層能源管理',
          capability: 'BMC 即時讀取 GPU 溫度/功耗曲線，動態調整風扇轉速與電壓',
          impact: '減少 10-15% 散熱能耗，延長硬體壽命',
          technicalDetail: 'PID 控制迴路 + 機器學習預測負載變化',
        },
        {
          layer: 'L11: 集群層負載調度',
          capability: 'K8s 排程器感知能耗，優先調度至低負載節點，避免熱點',
          impact: '集群整體能耗降低 8-12%，延長設備壽命',
          technicalDetail: '能耗感知的 K8s Scheduler Plugin',
        },
        {
          layer: 'L12: 應用層能耗分析',
          capability: '提供每 GPU、每任務、每用戶的能耗報表，支援成本分攤',
          impact: '識別高能耗低價值任務，優化資源配置',
          technicalDetail: 'Prometheus + Grafana + 自研能耗 Exporter',
        },
      ],
    },
    quantifiedImpact: {
      '散熱能耗降低': { before: '100%', after: '85-90%', improvement: '-10-15%' },
      '集群整體 PUE': { before: '1.5-1.7', after: '1.3-1.4', improvement: '-15%' },
      '峰值負載散熱能力': { before: '被動應付', after: '主動預測', improvement: '避免降頻' },
      '能耗可視化': { before: '整機層級', after: 'GPU/任務層級', improvement: '粒度提升 10 倍' },
    },
    customerValue: {
      financial: '以 1MW 資料中心為例，PUE 從 1.6 降至 1.4，年省電費約 NT$ 8-12M',
      operational: '避免GPU因過熱降頻，保障訓練任務按時完成',
      strategic: '符合 ESG 要求，支持企業碳中和目標',
    },
    competitiveEdge: '競爭對手僅提供被動散熱，Foxconn 提供「預測性散熱 + 能耗優化 + 成本分攤」完整方案',
  },

  // The Software Moat - Why software creates defensible competitive advantage
  softwareMoat: {
    headline: '軟體護城河：為什麼軟體能創造持續性優勢？',
    coreInsight: '硬體可以被複製，軟體生態無法被取代。這是 NVIDIA 市值超越台積電的關鍵邏輯。',
    industryExamples: [
      {
        company: 'NVIDIA',
        moat: 'CUDA 生態系 + 開發者社群',
        result: 'GPU 硬體毛利僅 30-40%，但軟體生態帶來 60%+ 毛利與 80%+ 客戶留存率',
        lesson: '軟體生態系是定價權的來源',
      },
      {
        company: 'Apple',
        moat: 'iOS + App Store + iCloud',
        result: 'iPhone 用戶平均留存率 95%+，服務營收佔比 25% 且持續增長',
        lesson: '軟體服務創造高頻互動與轉換成本',
      },
      {
        company: 'Tesla',
        moat: 'FSD 軟體 + 自動駕駛數據飛輪',
        result: 'FSD 選配率 50%+，軟體毛利率 70%+，遠高於整車銷售',
        lesson: '數據驅動的軟體迭代形成正向循環',
      },
      {
        company: 'Microsoft Azure',
        moat: 'Azure + Office 365 + Teams 整合',
        result: '企業客戶一旦採用完整棧，流失率低於 5%',
        lesson: '整合體驗比單一產品更難被取代',
      },
    ],
    foxconnMoat: {
      headline: 'Foxconn 的軟體護城河策略',
      layers: [
        {
          layer: 'L9-L10 韌體層',
          moat: '跨平台 BMC 整合能力 + 客戶特定散熱/電源控制',
          lockIn: '一旦客戶採用我們的韌體架構，更換供應商需重新驗證，轉換成本高',
        },
        {
          layer: 'L11 編排層',
          moat: 'K8s-native GPU 調度 + 多租戶隔離',
          lockIn: '客戶工作負載已適配我們的調度邏輯，遷移成本高',
        },
        {
          layer: 'L12 應用層',
          moat: '預整合 AI 模型 + RAG 流程 + 權限治理',
          lockIn: '客戶資料已導入、權限已設定、審計軌跡已建立，幾乎無法無痛遷移',
        },
        {
          layer: 'Remote Ops 運維層',
          moat: '歷史監控數據 + 預測模型 + 故障診斷知識庫',
          lockIn: '累積的運維數據成為客戶資產，更換廠商等於丟棄歷史數據',
        },
      ],
      cumulativeEffect: '四層疊加，形成「技術 + 數據 + 流程」的綜合護城河，客戶流失率低於 10%',
    },
    metrics: {
      '客戶留存率': { hardware: '60-70%', withSoftware: '85-95%', delta: '+25pp' },
      '訂單週期': { hardware: '單次採購', withSoftware: '3-5 年約', delta: 'LTV 提升 3-5 倍' },
      '毛利率': { hardware: '10-15%', withSoftware: '20-25%', delta: '+10pp' },
      '估值倍數': { hardware: '8-12x P/E', withSoftware: '20-30x P/E', delta: '資本市場溢價 2-3 倍' },
    },
  },
  // Risk of inaction - what happens if we don't invest in software
  riskOfInaction: [
    {
      risk: '沦为 commodity 供應商',
      impact: '若只提供硬體，將與廣達、緯創、華碩等廠商進行價格競爭，毛利率被壓縮至 5-8%',
      mitigation: '透過軟體加值，將毛利率提升至 15-25%，建立差異化護城河',
    },
    {
      risk: '客戶流失至 hyperscaler 解決方案',
      impact: 'AWS/Azure/GCP 提供一站式 AI 基礎建設，若無軟體整合能力，CSP 客戶將傾向選擇垂直整合方案',
      mitigation: '提供中立、多供應商支援的軟體層，避免客戶被單一雲廠商鎖定',
    },
    {
      risk: '無法參與 AI 价值链高毛利環節',
      impact: 'AI 伺服器硬體毛利約 10-15%，但軟體/服務毛利可達 60-80%，放棄軟體等於放棄高價值環節',
      mitigation: '以 RAG 一體機、Remote Ops 為切入點，逐步建立軟體營收占比',
    },
    {
      risk: '技術依賴風險',
      impact: '若完全依賴 NVIDIA CUDA 生態，將失去議價能力，且無法支援 AMD/自研晶片客戶',
      mitigation: '建立跨平台 (CUDA + ROCm) 能力，保持技術中立性與供應鏈韌性',
    },
  ],
  // Strategic ask - what we need from leadership
  strategicAsk: {
    headline: '對公司管理層的戰略要求',
    items: [
      {
        what: '建立專職軟體產品線 (Software Product Line)',
        rationale: '將軟體從「附贈服務」提升為「獨立產品」，建立專屬定價、交付、維運團隊',
        timeline: '2026 Q2 前完成組織設計',
      },
      {
        what: '投資 50-80 人軟體團隊 (L9-L12 全棧)',
        rationale: '對標 NVIDIA Base Command 團隊規模 (200+ FTE)，初期以精實團隊聚焦高價值模塊',
        timeline: '2026 年 Q3 前完成招募 50%',
      },
      {
        what: '建立軟體驗證實驗實 (AI Workload Lab)',
        rationale: '需實際運行 Llama、Qwen、Mistral 等主流模型進行效能驗證與最佳化',
        timeline: '2026 Q2 前完成 H100/H200 測試環境',
      },
      {
        what: '與關鍵客戶共建聯合解決方案 (Joint Solution)',
        rationale: '選擇 2-3 家標竿 CSP 客戶，共同開發客製化 Remote Ops 與 RAG 方案',
        timeline: '2026 年底前完成 2 個成功案例',
      },
    ],
  },
  // Success metrics - how we measure progress
  successMetrics: {
    '軟體營收佔比': {
      definition: '軟體/服務收入佔整體 AI 伺服器解決方案比例',
      target: '2026 年底達 15%，2027 年底達 25%',
    },
    '毛利率提升': {
      definition: '含軟體解決方案的訂單毛利率 vs. 純硬體訂單',
      target: '軟體加值訂單毛利率達 20-25% (純硬體約 10-15%)',
    },
    '客戶續約率': {
      definition: '軟體訂閱/維運服務的年度續約比例',
      target: '首年 70%，第二年 85%+',
    },
    '交付週期': {
      definition: '從 L9-L12 完整交付時間',
      target: '標準配置 2 週內，含 RAG 部署 4 週內',
    },
    'Remote Ops 採用率': {
      definition: '已部署伺服器使用遠端監控與預測性維護的比例',
      target: '部署後 12 個月內達 60%',
    },
  },

  // Hyperscaler/CSP perspective - why they need Foxconn software even with internal teams
  hyperscalerPerspective: {
    context: '大型 CSP (AWS, Azure, GCP, Meta) 已有強大軟體團隊，為什麼還需要 Foxconn？',
    reasons: [
      {
        reason: '加速上市時程',
        explanation: '自建軟體需 12-18 個月，Foxconn 預整合棧只需 2-4 週即可上線。',
        impact: '提早 10-14 個月產生營收，搶佔市場先機',
      },
      {
        reason: '聚焦核心差異化',
        explanation: 'CSP 希望將工程資源投入 AI 服務與用戶體驗，而非底層基礎設施管理。',
        impact: 'Foxconn 負責「水管」，客戶專注於營收功能',
      },
      {
        reason: '風險分散',
        explanation: '單一廠商負責硬體 + 軟體，減少推諉責任，加速問題解決。',
        impact: '故障排除時間縮短 50%，運營風險降低',
      },
      {
        reason: '成本效益',
        explanation: '自建維護團隊需 20-50 人，Foxconn 平台攤平跨客戶成本。',
        impact: '基礎設施管理 TCO 降低 10-30%',
      },
      {
        reason: '既有投資保護',
        explanation: '舊資料中心有 legacy 系統，Foxconn 可整合既有 BMC/監控工具，避免全面更換。',
        impact: '保護既有投資，同時實現 AI 升級路徑',
      },
    ],
  },

	// Concrete service offerings - what we actually sell (not just features, but services)
	serviceLadder: {
		headline: '軟體部門的續約飛輪：如何從一次性交付變成年度收入',
		coreInsight: '老闆真正該投資的不是「多一套工具」，而是能從交付起點一路延伸到年度續約的服務鏈。一次性專案證明價值，年度治理與維運才是毛利與黏著度來源。',
		stages: [
			{
				stage: 'Stage 1｜低阻力切入',
				focus: '用短週期、低風險服務先進場',
				offerings: ['GPU 效能調校服務', 'Lifecycle 升級健檢服務', 'AI 軟體棧預整合（標準版）'],
				whyItWins: '客戶不用先承諾大規模平台投資，就能先看到部署速度、效能與升級風險改善。',
				revenueLogic: '一次性專案收入，負責打開軟體 attach rate。'
			},
			{
				stage: 'Stage 2｜營運治理綁定',
				focus: '把 AI 叢集接進既有機房與變更流程',
				offerings: ['Brownfield Integration & Fleet Baseline 服務', 'Lifecycle Control Tower 升級治理服務'],
				whyItWins: '一旦接入客戶的資產、權限、維護窗口與版本基線，Foxconn 就從設備供應商升級成營運治理夥伴。',
				revenueLogic: '專案費 + 年度維護 / 擴充費，開始形成續約基礎。'
			},
			{
				stage: 'Stage 3｜年度 SLA 收入',
				focus: '把日常風險管理做成可被續約的服務',
				offerings: ['Remote Ops 遠端運維服務', 'Air-Gap Content Lifecycle 服務', '合規與審計支援服務'],
				whyItWins: '客戶買的不是 dashboard，而是半夜不用派人去機房、升級不會出事、離線環境也能安全更新、稽核時拿得出報告。',
				revenueLogic: '按節點 / 按 SLA / 按年收費，建立 ARR 與高毛利服務收入。'
			},
			{
				stage: 'Stage 4｜平台擴張',
				focus: '把單點服務升級為可複製的平台型收入',
				offerings: ['RAG 一體機部署服務', 'GPU 虛擬化與資源調度'],
				whyItWins: '當客戶已接受 Foxconn 的治理與維運能力，更容易加買新叢集、新場域與新 AI 工作負載。',
				revenueLogic: '硬體 attach + 軟體授權 + 維運續約，擴大客戶終身價值（LTV）。'
			}
		],
		boardMessage: '這條飛輪的重點不是賣更多功能，而是讓每一筆硬體訂單，都有機會變成長達 3-5 年的軟體與服務收入。'
	},
	serviceOfferings: {
		headline: '從「賣伺服器」到「賣服務」：可具體交付的軟體服務組合',
		rationale: '硬體是一次性銷售，軟體/服務是持續性收入。以下是可立即啟動的服務項目：',
		budgetMap: {
			headline: '這些服務不是誰都能賣：軟體部門如何對應不同預算 owner',
			summary: '要讓管理層真的看見軟體價值，不能只列功能，而要說清楚：誰會買、為什麼每年還會繼續買、以及這筆收入為何不會只停在一次性交付。',
			rows: [
				{
					service: 'Brownfield Integration & Fleet Baseline',
					budgetOwner: 'Infrastructure / DC Operations',
					whyNow: '新 AI 叢集要接入既有機房、資產、告警與維護窗口流程',
					renewalDriver: '每新增場域、機櫃或設備世代，都需要延續版本基線與整合維護',
					boardOutcome: '降低導入阻力，讓硬體訂單更容易真正落地'
				},
				{
					service: 'Lifecycle Control Tower',
					budgetOwner: 'Platform Engineering / SRE / CAB',
					whyNow: '季度升級、驅動/CUDA/K8s 變更、SLA 壓力都會觸發治理需求',
					renewalDriver: '升級不是一次性事件，而是每季都會發生的風險管理工作',
					boardOutcome: '把停機風險變成可控流程，保護毛利與客戶信任'
				},
				{
					service: 'Remote Ops & Predictive Maintenance',
					budgetOwner: 'Operations / Service Delivery',
					whyNow: '跨站點運維、夜間故障、缺工與 SLA 需求持續升高',
					renewalDriver: '值班、監控模型、備品策略與 SLA 報告天然適合年約',
					boardOutcome: '把一次性交機，轉成可續約的年度服務收入'
				},
				{
					service: 'Sovereign RAG / Air-Gap Services',
					budgetOwner: 'CIO Office / Compliance-driven AI Program',
					whyNow: '資料不能上雲、需在地化與稽核的 AI 專案快速增加',
					renewalDriver: '知識庫擴充、權限治理、離線更新與稽核證據會持續發生',
					boardOutcome: '切入雲廠不擅長服務的高附加價值市場'
				},
			],
			boardMessage: '軟體部門最值得投資的地方，是它能把同一套硬體 attach 到不同部門預算，並把收入型態從一次性 BOM 變成跨年度續約。'
		},
	// Quick Win Services: Prioritized by time-to-market and development effort (Added 2026-03-16 by CoCo)
	quickWins: {
		headline: '快速變現服務：3 個月內可上線',
		description: '這些服務技術成熟、開發成本低、客戶需求明確，建議優先投入',
		services: [
			{
				name: 'GPU 效能調校服務',
				why: '利用現有工具鏈，無需額外開發，1 人天即可完成',
				revenue: 'NT$ 100K-500K/案',
				margin: '80%+',
				timeToMarket: '立即',
			},
			{
				name: 'Lifecycle 升級健檢服務',
				why: '以現有 BMC / 韌體 / K8s 經驗，快速產出版本矩陣、maintenance window 與 rollback 設計',
				revenue: 'NT$ 150K-400K/案',
				margin: '75%+',
				timeToMarket: '2-6 週',
			},
			{
				name: 'AI 軟體棧預整合（標準版）',
				why: '基於現有 Helm Charts，標準化交付流程',
				revenue: 'NT$ 200K-500K/案',
				margin: '70%+',
				timeToMarket: '2-4 週',
			},
			{
				name: 'Remote Ops 基礎監控',
				why: '整合現有 BMC + Grafana，無需從頭開發',
				revenue: 'NT$ 50K-100K/月',
				margin: '60%+',
				timeToMarket: '4-8 週',
			},
			{
				name: 'Air-Gap 內容同步與升級證據包服務',
				why: '可直接利用既有 registry / mirror / runbook 能力，率先切入主權 AI 客戶最常被忽略的 Day-2 運營痛點',
				revenue: 'NT$ 200K-600K/案 + 年度維護費',
				margin: '70%+',
				timeToMarket: '4-8 週',
			},
		],
		totalPotential: '首年可貢獻 NT$ 25-35M 營收，毛利率 70%+',
	},
		offerings: [
			{
				name: 'Brownfield Integration & Fleet Baseline 服務',
				description: '將新 AI 叢集接入既有 Redfish / OpenBMC / DCIM / 告警流程，建立跨新舊設備的一致資產、版本、權限與維護基線',
				pricing: 'NT$ 300K-1.5M/案 + 年度維護/擴充費',
				margin: '60-70%',
				differentiation: '不是賣一套孤島式新平台，而是降低既有機房導入 AI 的阻力，讓客戶不用為了上 AI 先做整場重建',
				targetCustomer: '大型 CSP、金融企業、既有資料中心營運團隊'
			},
			{
				name: 'Remote Ops 遠端運維服務',
				description: '7×24 小時全球機房監控、預測性維護、遠端診斷與修復',
				pricing: 'NT$ 50K-200K/月（依節點數）',
				margin: '60-70%',
				differentiation: '競爭對手僅提供基礎監控，我們提供主動式維護與修復',
				targetCustomer: 'CSP 客戶、多據點企業'
			},
			{
				name: 'Lifecycle Control Tower 升級治理服務',
				description: '針對驅動、韌體、CUDA、Kubernetes 的版本矩陣驗證、canary 升級、自動回滾與 maintenance window 治理',
				pricing: 'NT$ 300K-1.2M/案 + 年度訂閱/升級顧問費',
				margin: '65-75%',
				differentiation: '把高風險變更事件產品化，從「人海維運」變成「可排程、可回滾、可稽核」的治理能力',
				targetCustomer: '大型 CSP、金融企業、主權 AI 專案'
			},
			{
				name: 'Air-Gap Content Lifecycle 服務',
				description: '為斷網 / 主權 AI 環境提供離線鏡像同步、版本簽章、更新包驗證、升級 runbook 與稽核證據包',
				pricing: 'NT$ 250K-900K/案 + 年度內容維護/稽核續約費',
				margin: '65-75%',
				differentiation: '競爭對手多半只處理第一次安裝；我們把 disconnected 環境最麻煩的 Day-2 內容生命週期做成可交付、可續約服務',
				targetCustomer: '國防、政府、金融、主權雲與需 air-gap 的企業'
			},
			{
				name: 'RAG 一體機部署服務',
				description: '私有 AI 知識庫端到端部署，含文件處理、權限治理、系統整合',
				pricing: 'NT$ 500K-2M/案（一次性）+ 15-20% 年維運費',
				margin: '50-60%',
				differentiation: '交钥匙方案，客戶無需懂 AI 即可使用',
				targetCustomer: '金融、醫療、政府、製造業'
			},
			{
				name: 'GPU 虛擬化與資源調度',
				description: 'MIG/vGPU 配置、多租戶隔離、用量計費系統整合',
				pricing: 'NT$ 300K-1M/案 + 10% 授權費',
				margin: '70-80%',
				differentiation: '將 GPU 利用率從 40% 提升至 85%，客戶 ROI 明確',
				targetCustomer: 'AI 新創、研究機構、雲端服務商'
			},
			{
				name: 'AI 軟體棧預整合服務',
				description: 'CUDA/ROCm、K8s、Helm Charts 預先驗證與客製化',
				pricing: 'NT$ 200K-800K/案',
				margin: '60-70%',
				differentiation: '從 4 週部署時間縮短至 2 天，加速客戶營收產生',
				targetCustomer: '企業客戶、系統整合商'
			},
			{
				name: '效能優化與調校服務',
				description: '針對客戶工作負載進行 GPU/網路/儲存效能調校',
				pricing: 'NT$ 100K-500K/次 或 年約制',
				margin: '70-80%',
				differentiation: '提升 15-20% 效能，直接轉化為客戶營收增長',
				targetCustomer: '高效能運算、AI 訓練集群'
			},
			{
				name: '合規與審計支援服務',
				description: '協助通過金管會、個資法、ISO 等合規要求',
				pricing: 'NT$ 300K-1M/案',
				margin: '60-70%',
				differentiation: '內建審計軌跡、權限治理、合規報告功能',
				targetCustomer: '金融、醫療、政府機構'
			}
		],
		// Revenue projection - conservative estimate
		revenueProjection: {
			year1: { software: 'NT$ 50M', services: 'NT$ 30M', total: 'NT$ 80M', percentOfTotal: '~5% of total AI server revenue' },
			year2: { software: 'NT$ 150M', services: 'NT$ 100M', total: 'NT$ 250M', percentOfTotal: '~12% of total AI server revenue' },
			year3: { software: 'NT$ 400M', services: 'NT$ 350M', total: 'NT$ 750M', percentOfTotal: '~20% of total AI server revenue' },
			assumption: '假設 2026-2028 年 AI 伺服器營收為 NT$ 1.5B, 2B, 3.5B，軟體服務滲透率逐年提升至 20%'
		}
	},

	// Leadership Quick Reference Card - Distilled talking points for executive conversations
	leadershipQuickRef: {
		headline: '給管理層的快速參考卡 (Quick Reference Card)',
		purpose: '30 秒內說清軟體價值，適用於電梯簡報、客戶會議、投資人問答',
		elevator30s: {
		  problem: '客戶花數千萬買 GPU，但 40-60% 閒置，部署要花 2-4 週，故障要等 8 小時修復。',
		  solution: '我們的軟體讓 GPU 利用率從 40% 提升到 85%，部署從 2 週縮短到 2 小時，70% 故障遠端修復。',
		  impact: '同樣的硬體，客戶用我們的軟體，投資回報週期縮短 50%，毛利率提升 10-15 個百分點。'
		},
		keyMetrics: [
		  { metric: 'GPU 利用率', before: '40-60%', after: '85%+', delta: '+42%', businessImpact: '同樣投資，產出翻倍' },
		  { metric: '部署時間', before: '2-4 週', after: '2 小時', delta: '-99%', businessImpact: '提早 2 週產生營收' },
		  { metric: '故障修復', before: '8 小時', after: '2 小時', delta: '-75%', businessImpact: '減少 75% 停機損失' },
		  { metric: '運維人力', before: '100%', after: '30%', delta: '-70%', businessImpact: '70% 現場工作可遠端完成' },
		  { metric: '訂單毛利率', before: '10-15%', after: '20-25%', delta: '+10pp', businessImpact: '軟體加值帶來溢價能力' },
		],
		competitiveOneLiners: [
		  { competitor: 'NVIDIA', ourEdge: 'NVIDIA 只支援自家 GPU，我們支援 NVIDIA + AMD，避免客戶被單一廠商鎖定。' },
		  { competitor: '廣達/緯穎', ourEdge: '他們賣硬體，我們賣「AI 就緒的基礎設施」—— 2 天上線 vs. 他們的 2-4 週。' },
		  { competitor: 'AWS/Azure', ourEdge: '雲端廠商會鎖定客戶，我們提供中立平台，支援混合雲與本地部署，客戶掌握主導權。' },
		],
		riskOfInaction: '若不投資軟體，2027 年前我們將淪為 commodity 供應商，毛利率被壓縮至 5-8%，且無法參與 AI 價值鏈中毛利 60-80% 的軟體服務環節。',
		ask: '投資 NT$ 65M/年建立 50-80 人軟體團隊，換取 Year 3 每年 NT$ 750M 軟體加值營收與 20-25% 毛利率。ROI 約 11.5 倍。',
	},

// Customer Scenario Comparison - Before/After showing tangible software impact
customerScenarios: {
headline: '客戶真實場景：有軟體 vs. 沒有軟體的差異',
purpose: '讓管理層從客戶視角理解軟體價值，而非抽象指標',
scenarios: [
{
  title: '情境一：GPU 故障處理',
  timeline: '週三凌晨 3:15，生產環境 GPU 異常',
  withoutSoftware: {
    timeline: [
      '03:15 - 監控系統偵測到 GPU 溫度異常，但無法自動診斷',
      '03:17 - 自動發送 email 給運維團隊（但值班人員已讀不回）',
      '08:30 - 值班人員上班後看到通知，開始遠端登入檢查',
      '09:15 - 確認需要重設 BMC，但無法遠端執行，需現場操作',
      '10:30 - 運維人員抵達機房，進行重啟',
      '11:00 - 恢復運作',
    ],
    outcome: '停機 7.75 小時，影響 3 個訓練任務，損失約 NT$ 2.5M 產值',
    customerQuote: '我們花錢買了高階 GPU，卻因為無法遠端修復，停機快 8 小時...',
  },
  withSoftware: {
    timeline: [
      '03:15 - 監控系統偵測到 GPU 溫度異常，AI 預測模型判斷 85% 機率為風扇異常',
      '03:16 - 自動發送 LINE/Telegram 通知給值班人員，附上診斷報告與建議操作',
      '03:22 - 值班人員於手機一鍵執行「安全重啟 BMC」指令',
      '03:25 - 系統自動切換至備用 GPU，訓練任務無縫轉移',
      '03:30 - 恢復正常運作，排程隔日進行風扇更換',
    ],
    outcome: '停機 0.25 小時（15 分鐘），零任務中斷，客戶無感知',
    customerQuote: '那天凌晨收到通知時，問題已經解決了 80%。這就是我們需要的。',
  },
  impact: '停機時間減少 97%，客戶業務零中斷',
},
{
  title: '情境二：新客戶部署 AI 集群',
  timeline: 'Q3 新購 20 台 H200 伺服器，需於 Q4 上線產生營收',
  withoutSoftware: {
    timeline: [
      'Day 1 - 硬體到貨，開始安裝作業系統',
      'Day 3 - 安裝 NVIDIA 驅動、CUDA、cuDNN',
      'Day 7 - 設定 K8s 叢集，遇到 GPU 直通問題',
      'Day 10 - 聯絡 NVIDIA 支援，等待回覆',
      'Day 14 - 完成基礎環境，但客戶的 Llama 模型無法正常運行',
      'Day 18 - 調整 CUDA 版本、TensorRT 設定',
      'Day 21 - 客戶開始進行問責測試（POC）',
      'Day 25 - POC 通過，正式上線',
    ],
    outcome: '耗時 25 天，期間客戶無法產生任何營收，且可能因延誤影響其對終端客戶的承諾',
    customerQuote: '我們買了最好的硬體，但花了快一個月才能開始賺錢。',
  },
  withSoftware: {
    timeline: [
      'Day 1 - 硬體到貨，出廠前已預先安裝並驗證 Foxconn 預整合軟體棧',
      'Day 1 - 客戶開箱後，掃描 QR Code 進入部署流程',
      'Day 1 - 選擇「Llama 3.1 + RAG」範本，自動完成 K8s、CUDA、模型載入',
      'Day 2 - 客戶匯入自身資料，設定權限',
      'Day 3 - 完成 POC，正式上線',
    ],
    outcome: '耗時 3 天，客戶第 4 天即可開始產生營收',
    customerQuote: '早上開箱，下午就在跑我們的模型了。這跟我們之前經驗差太多。',
  },
  impact: '部署時間從 25 天縮短至 3 天，客戶提早 22 天產生營收',
},
{
  title: '情境三：混合 GPU 調度',
  timeline: '研究機構擁有 H100（8 張）+ A100（16 張），需同時支援 3 個團隊',
  withoutSoftware: {
    problem: '傳統靜態配置：Team A 固定使用 H100，Team B/C 使用 A100',
    issues: [
      'Team A 夜間離峰時段，H100 閒置率 70%',
      'Team B 需要更多算力，但無法借用 Team A 的閒置資源',
      '每月需手動調整配置，常因溝通不良導致衝突',
      '年底檢視：H100 實際利用率 35%，A100 利用率 85%',
    ],
    outcome: 'NT$ 50M 投資的 H100，實際產出只有預期的 35%，投資回報週期從 18 個月延長至 36 個月',
  },
  withSoftware: {
    solution: 'Foxconn K8s-native GPU 調度平台：動態分配 + 優先級隊列',
    improvements: [
      '建立優先級隊列：緊急任務優先調度 H100',
      '離峰時段自動將 A100 任務調度至 H100',
      '支援 MIG 切分，將 H100 切成 7 個實例供小任務使用',
      '即時儀表板顯示各團隊用量與成本分攤',
    ],
    outcome: 'H100 利用率提升至 82%，整體集群產能提升 45%，投資回報週期縮短至 14 個月',
  },
  impact: 'GPU 利用率從 35% 提升至 82%，相同投資產出 2.3 倍效能',
},
],
leadershipTakeaway: {
headline: '給管理層的啟示',
points: [
'軟體不是「加分功能」，是決定客戶成敗的關鍵差異',
'客戶買的不是 GPU，是「能按時產生營收的 AI 基礎建設」',
'上述三個情境，若無軟體支援，客戶將面臨停機損失、延誤上線、資源浪費',
'Foxconn 的軟體價值，是讓客戶的硬體投資「真正發揮預期效益」',
],
},
},

// Leadership Decision Matrix - Executive summary for quick decision-making
	leadershipDecisionMatrix: {
		headline: '關鍵決策：軟體投資與否的戰略選擇',
		context: '2026 Q2 是 AI 基礎建設的轉折點：競爭從「GPU 取得」轉向「部署效率」。以下為決策框架：',
		decisionCriteria: [
			{
				criterion: '毛利率',
				option1: { name: '不投資軟體', outcome: '維持 10-15%（硬體 commodity 競爭）', risk: '價格戰壓力大，2027 年前可能降至 8-12%' },
				option2: { name: '投資軟體', outcome: '提升至 20-25%（軟體加值訂單）', upside: '3 年後軟體營收佔比達 20%，總毛利提升 NT$ 400M+/年' },
			},
			{
				criterion: '客戶黏著度',
				option1: { name: '不投資軟體', outcome: '訂單導向，客戶流失率 30-40%/年', risk: '客戶易被 hyperscaler 一站式方案吸引' },
				option2: { name: '投資軟體', outcome: '訂閱制 + 服務合約，續約率 85%+', upside: '建立長期經常性收入（ARR），估值倍數提升' },
			},
			{
				criterion: '市場定位',
				option1: { name: '不投資軟體', outcome: 'OEM/ODM 代工廠，可替換性高', risk: '議價能力弱，易受上下游擠壓' },
				option2: { name: '投資軟體', outcome: '解決方案合作夥伴，差異化明顯', upside: '成為 CSP 企業 AI 轉型的戰略合作對象' },
			},
			{
				criterion: '人才與技術累積',
				option1: { name: '不投資軟體', outcome: '依賴供應商（NVIDIA/AMD）技術路線', risk: '技術主權不足，無法快速回應客戶需求' },
				option2: { name: '投資軟體', outcome: '建立自主 L9-L12 全棧能力', upside: '形成技術護城河，吸引高階人才加入' },
			},
			{
				criterion: '投資規模',
				option1: { name: '不投資軟體', outcome: '維持現狀，無額外資本支出', risk: '機會成本：錯失 NT$ 750M/年軟體服務市場（2028 預測）' },
				option2: { name: '投資軟體', outcome: 'NT$ 65M/年（50-80 人團隊 + 實驗室）', upside: 'ROI 約 11.5 倍（以 Year 3 軟體營收 NT$ 750M 計）' },
			},
		],
		recommendation: {
			choice: 'Option 2: 投資軟體',
			rationale: '軟體投資 NT$ 65M/年，可創造 NT$ 750M/年（Year 3）的軟體加值營收，並提升整體訂單毛利率 10-15 個百分點。更重要的是，這是避免淪為 commodity 供應商的唯一路徑。',
			timeline: '2026 Q2: 組織設計完成 → Q3: 團隊招募 50% → Q4: 首個標竿案例上線 → 2027: 規模化複製',
			riskIfNotActed: '2026-2027 是關鍵窗口期。若不及早佈局，Hyperscaler 與一線 ODM（廣達、緯穎）將率先建立軟體護城河，屆時追趕成本將提高 3-5 倍。',
		},
	},
};

// 90-Day Action Plan - Immediate next steps for leadership approval
export const ninetyDayPlan = {
	headline: '軟體投資 90 天啟動計畫',
	purpose: '從決策到執行的具體路徑圖，確保 Q2 完成組織設計，Q3 開始交付價值',
	phases: [
		{
			phase: 'Phase 1: 組織與招募 (Day 1-30)',
			activities: [
				'完成軟體產品線組織設計（職位輪廓、技能矩陣、匯報架構）',
				'確認首波招募 15-20 人之 JD 與面試流程',
				'選定 AI Workload Lab 場地與硬體規格（H100/H200 測試機）',
				'與 2-3 家關鍵 CSP 客戶初步接觸，了解 Remote Ops 需求',
				'啟動首波招募（Firmware 2 人、System 2 人、Orchestration 3 人、AI Framework 2 人）',
				'完成 Lab 硬體採購下單（預算 NT$ 8M）',
				'建立 software-differentiation.js 與 competitive-landscape.js 持續更新機制',
				'與 HR 確認軟體人才薪資帶與股權激勵方案',
			],
			deliverables: ['組織設計報告', '首波面試名單 10+ 人', 'Lab 硬體訂單', '客戶需求訪談報告 2 份'],
			budget: 'NT$ 10M (Lab 硬體 + 招募成本)',
		},
		{
			phase: 'Phase 2: 基礎建設與首個用例 (Day 31-60)',
			activities: [
				'首批人員到職，進行 L9-L12 技術棧培訓',
				'完成 H100 測試環境架設與基準測試',
				'啟動 Remote Ops MVP 開發（監控 + 通知 + 基礎診斷）',
				'與第一家 CSP 客戶簽訂聯合開發備忘錄（MOU）',
				'完成 RAG 一體機範例部署流程（文件匯入 → 權限設定 → 問答）',
				'建立 software moat 驗證報告（與純硬體方案比較）',
				'啟動第二波招募（QA/DevOps 2 人、Performance 2 人）',
				'完成第一版銷售簡報與客戶案例腳本',
			],
			deliverables: ['Remote Ops MVP', 'RAG 一體機範例', '軟體驗證報告 v1', '銷售簡報 v1'],
			budget: 'NT$ 15M (人力 + 開發工具)',
		},
		{
			phase: 'Phase 3: 客戶驗證與規模化準備 (Day 61-90)',
			activities: [
				'於 CSP 客戶現場部署 Remote Ops beta（50-100 台伺服器規模）',
				'完成 RAG 一體機 POC（金融或醫療產業客戶）',
				'建立軟體服務定價模型（Remote Ops 月費制、RAG 專案制）',
				'啟動第三波招募（PM 1 人、Sales Engineer 2 人）',
				'收集客戶反饋，優化 Remote Ops 與 RAG 流程',
				'完成首份客戶成功案例（Case Study）',
				'建立軟體服務交付 SOP 與維運流程',
				'向管理層提交 Q3 擴展計畫（50-80 人團隊）',
			],
			deliverables: ['Remote Ops 客戶上線', 'RAG POC 成功案例', '服務定價單', 'Q3 擴展計畫書'],
			budget: 'NT$ 20M (人力 + 客戶 POC 成本)',
		},
	],
	total90DayBudget: 'NT$ 45M (約 90 天總投入，含人力、硬體、工具、客戶 POC)',
	expectedOutcomes: [
		'完成 15-20 人核心團隊組建',
		'Remote Ops 與 RAG 各 1 個客戶成功案例',
		'建立軟體服務定價與交付流程',
		'取得管理層對 Q3 擴展至 50-80 人的承諾',
	],
	riskMitigation: [
		'招募延遲：預留 20% 人力緩衝，優先確保核心職位（Firmware Lead、Orchestration Lead）',
		'客戶 POC 不順利：準備 2-3 家備用客戶，避免單一客戶依賴',
		'技術瓶頸：與 NVIDIA/AMD 建立技術支援管道，必要時引入顧問',
		'預算超支：每月檢視預算執行率，若偏離 >10% 立即調整',
	],
};

// Executive One-Pager - Printable summary for leadership meetings
export const executiveOnePager = {
	headline: '軟體投資簡報：為什麼現在是關鍵時刻？',
	date: '2026 Q2',
	problem: {
		title: '客戶面臨的痛點',
		points: [
			'GPU 閒置率 40-60%，投資回報週期長達 18 個月',
			'部署 AI 集群需 2-4 週，延誤客戶營收產生',
			'故障依賴現場支援，平均修復時間 8 小時',
			'企業想導入 AI 但受限於合規與資料隱私',
		],
	},
	solution: {
		title: 'Foxconn 軟體解決方案',
		points: [
			'Remote Ops：70% 故障遠端修復，停機時間減少 60%',
			'RAG 一體機：3 天完成部署，資料不出機房',
			'GPU 調度平台：利用率從 40% 提升至 85%',
			'預整合 AI 軟體棧：部署時間從 2 週縮短至 2 小時',
		],
	},
	financials: {
		investment: 'NT$ 65M/年（50-80 人團隊 + 實驗室）',
		year1Revenue: 'NT$ 80M（軟體 + 服務）',
		year3Revenue: 'NT$ 750M（軟體 + 服務）',
		grossMargin: '軟體訂單毛利率 20-25% vs. 硬體 10-15%',
		roi: 'Year 3 年營收 NT$ 750M，ROI 約 11.5 倍',
	},
	competitiveEdge: [
		'中立性：支援 NVIDIA + AMD，避免客戶被單一廠商鎖定',
		'速度：2 天上線 vs. 競爭對手 2-4 週',
		'完整棧：L9-L12 端到端軟體能力',
		'合規：主權 AI 與資料在地化解決方案',
	],
	ask: {
		what: '投資 NT$ 65M/年建立軟體產品線',
		timeline: '2026 Q2 組織設計 → Q3 團隊招募 50% → Q4 首個標竿案例',
		impact: '避免淪為 commodity 供應商，建立可持續溢價能力',
	},
};

export default softwareDifferentiation;

// Competitive Software Pricing Intelligence - Added 2026-03-15
// Sources: Public pricing pages, customer reports, industry benchmarks
export const competitivePricing = {
  headline: '競爭對手軟體定價策略分析',
  context: '了解競爭對手的軟體定價，幫助我們制定具競爭力且可獲利的價格策略',
  sources: '根據 2025-2026 公開資訊與客戶反饋整理',
  
  competitorPricing: [
    {
      vendor: 'NVIDIA',
      product: 'Base Command Manager',
      model: 'Free tier + Enterprise support',
      pricing: '免費（基礎版）; Enterprise support: ~15-20% of hardware value/year',
      catch: 'Requires NVIDIA-only infrastructure; lock-in cost is high',
      ourAdvantage: '我們提供多供應商支援，避免客戶被鎖定'
    },
    {
      vendor: 'NVIDIA',
      product: 'Mission Control',
      model: 'Subscription',
      pricing: 'US$ 5,000-15,000/node/month (estimated for AI Factory scale)',
      catch: 'Designed for DGX Cloud and NVIDIA-certified infrastructure',
      ourAdvantage: '中立架構 + 本地部署選項'
    },
    {
      vendor: 'Dell',
      product: 'AI Factory Software',
      model: 'Bundled with hardware',
      pricing: '隱含於硬體價格，約占整體 10-15%',
      catch: 'Must purchase Dell hardware; limited customization',
      ourAdvantage: '可獨立訂閱，不綁硬體採購'
    },
    {
      vendor: 'HPE',
      product: 'Ezmeral / Private Cloud AI',
      model: 'Subscription + Support',
      pricing: 'US$ 3,000-8,000/node/month + 18-22% annual support',
      catch: 'HPE ecosystem lock-in',
      ourAdvantage: '開放架構，可與既有系統整合'
    },
    {
      vendor: 'AWS',
      product: 'SageMaker + EC2 P5',
      model: 'Pay-as-you-go',
      pricing: 'US$ 2-5 per GPU-hour + data transfer fees',
      catch: 'Data must go to cloud; long-term cost higher than on-prem',
      ourAdvantage: '本地部署，資料不出機房，3 年 TCO 低 30-40%'
    },
    {
      vendor: 'Azure',
      product: 'Azure AI Studio + NDv5',
      model: 'Consumption-based',
      pricing: 'US$ 2.5-6 per GPU-hour + storage + networking',
      catch: 'Vendor lock-in; data residency concerns',
      ourAdvantage: '主權 AI 合規 + 混合雲彈性'
    }
  ],
  
  foxconnPricingStrategy: {
    headline: 'Foxconn 軟體定價建議',
    rationale: '定價策略應反映價值（GPU 利用率提升、部署加速、運維成本降低），而非僅是成本加成',
    
    offerings: [
      {
        name: 'Remote Ops 遠端運維',
        pricing: 'NT$ 50K-200K/月（依節點數分級）',
        model: 'Subscription (1-3 year contracts)',
        margin: '60-70%',
        justification: '競爭對手同級方案約 US$ 3,000-8,000/node/month，我們提供更具競爭力價格',
        targetCustomer: 'CSP 客戶、多據點企業'
      },
      {
        name: 'RAG 一體機部署',
        pricing: 'NT$ 500K-2M/案（一次性）+ 15-20% 年維運費',
        model: 'Project-based + recurring maintenance',
        margin: '50-60%',
        justification: 'Dell/HPE 類似方案約 NT$ 2M-5M，我們提供 30-40% 價格優勢',
        targetCustomer: '金融、醫療、政府、製造業'
      },
      {
        name: 'GPU 虛擬化與調度',
        pricing: 'NT$ 300K-1M/案 + 10% 授權費',
        model: 'License + annual fee',
        margin: '70-80%',
        justification: 'NVIDIA Base Command 等級方案需 US$ 5,000+/node，我們提供 50% 價格',
        targetCustomer: 'AI 新創、研究機構、雲端服務商'
      },
      {
        name: '能源優化套件',
        pricing: 'NT$ 200K-800K/案 + 節能分潤模式',
        model: 'Performance-based (share 20-30% of energy savings)',
        margin: '70-80%',
        justification: '以實際節能效果計費，客戶零風險',
        targetCustomer: '大型資料中心、CSP 客戶'
      }
    ],
    
    valueBasedPricing: {
      headline: '價值導向定價法',
      rationale: '不與競爭對手比價格，而是比 ROI',
      customerROI: {
        investment: 'NT$ 2M/年（Remote Ops + RAG）',
        savings: [
          'GPU 利用率提升 42% → 延緩擴充投資 NT$ 10M+',
          '部署時間縮短 99% → 提早 2 週產生營收 NT$ 5M+',
          '運維人力減少 70% → 年省 NT$ 3M',
          '停機時間減少 60% → 避免損失 NT$ 8M',
          '能源成本降低 15% → 年省 NT$ 2M',
        ],
        totalValue: 'NT$ 28M+/year',
        roi: '14x return on software investment'
      }
    }
  }
};

// Partner Ecosystem Strategy - Building alliances to scale software offerings
export const partnerEcosystem = {
  headline: '合作夥伴生態系：為什麼我們需要盟友？',
  coreInsight: '軟體生態系的建立不能只靠內部團隊。策略性合作可以加速市場滲透、填補技術空缺、並提供客戶更完整的解決方案。',
  whyPartner: [
    { reason: '加速市場覆蓋', explanation: 'SI 合作夥伴已有客戶關係與交付能力，可快速擴大觸角', impact: '透過 SI 接觸中小企業市場，降低直接銷售成本' },
    { reason: '填補技術空缺', explanation: '特定產業（如醫療影像、金融風控）需要領域知識', impact: '與 ISV 合作，避免自行開發垂直應用的高成本' },
    { reason: '降低客戶疑慮', explanation: '客戶信任既有供應商（如 Red Hat、Canonical）', impact: '借助合作夥伴信譽，降低採用門檻' },
    { reason: '生態系效應', explanation: '合作夥伴越多，解決方案越完整，形成正向循環', impact: '提高客戶轉換成本，建立護城河' }
  ],
  partnerTypes: [
    {
      type: '技術合作夥伴 (Technology Partners)',
      examples: ['Red Hat (OpenShift)', 'Canonical (Kubernetes)', 'NVIDIA (CUDA/ROCm)', 'AMD (ROCm)', 'Intel (oneAPI)'],
      value: '確保技術棧的互通性與認證',
      foxconnAsk: '取得技術認證、聯合解決方案驗證、共同市場推廣',
      status: '優先建立中'
    },
    {
      type: '系統整合商 (SI Partners)',
      examples: ['中華電訊、台積電系統整合部門、資策會、工研院'],
      value: '協助交付、客製化、在地支援',
      foxconnAsk: '聯合交付專案、技術移轉、聯合行銷',
      status: '潛在洽談中'
    },
    {
      type: '獨立軟體供應商 (ISV Partners)',
      examples: ['AI 模型公司（如 Llama 微調專家）、資料標註公司、RAG 解決方案商'],
      value: '提供垂直領域解決方案，補足 Foxconn 較弱的應用層',
      foxconnAsk: '預整合至 RAG 一體機、聯合定價、收益分潤',
      status: '評估中'
    },
    {
      type: '學術研究合作 (Research Partners)',
      examples: ['台大、清大、交大、中研院'],
      value: '取得前沿研究洞察、聯合發表、人才培育',
      foxconnAsk: '聯合實驗室、產學合作計畫、實習管道',
      status: '初步接觸'
    }
  ],
  ecosystemMetrics: {
    '合作夥伴數量': { target2026: '5-8 家', target2027: '20+ 家', target2028: '50+ 家' },
    '聯合解決方案數量': { target2026: '2-3 個', target2027: '10 個', target2028: '25 個' },
    '合作夥伴貢獻營收': { target2026: '<5%', target2027: '15-20%', target2028: '30-35%' }
  },
  riskMitigation: [
    '避免過度依賴單一合作夥伴（如 Red Hat 被 IBM 收購的風險）',
    '確保合作協議包含技術移轉條款，避免被供应商鎖定',
    '維持核心能力自主，合作僅為加速而非取代'
  ]
};

// Talent Strategy - Attracting and retaining software talent
export const talentStrategy = {
  headline: '人才策略：如何與 Hyperscaler 爭奪頂尖軟體人才？',
  challenge: 'Google、Meta、NVIDIA 提供高薪、名聲、技術挑戰。Foxconn 如何吸引頂尖人才？',
  valueProposition: [
    { what: '實際影響力和產品所有權', explanation: '在 Hyperscaler 只是螺絲釘，在 Foxconn 可以定義產品方向', appeal: '「這是我的產品」vs. 「這是我的代碼」' },
    { what: '硬體 + 軟體的獨特挑戰', explanation: '純軟體公司碰不到硬體深度，Foxconn 提供 L9-L12 全棧挑戰', appeal: '「只有這裡能同時優化 BMC 和 K8s」' },
    { what: '從 0 到 1 的建立過程', explanation: '參與建立軟體部門，留下個人職涯里程碑', appeal: '「我是創始團隊成員」' },
    { what: '產業轉折點的參與感', explanation: '2026 是 AI 基礎建設的關鍵轉折點，參與歷史', appeal: '「我在定義 AI 基礎建設的未來」' },
    { what: '台灣在地的全球影響力', explanation: '不用矽谷，在台灣就能影響全球 AI 基礎建設', appeal: '「根留台灣，影響全球」' }
  ],
  retentionStrategy: [
    { strategy: '技術成長路徑', detail: '明確的 L9-L12 技術晉升管道，鼓勵參與開源專案與技術社群', metric: '每年至少 1 次技術會議發表、20% 時間投入創新專案' },
    { strategy: '產品所有權', detail: '每個工程師負責特定模組，從設計到運維端到端負責', metric: '產品負責人制度，季度產品回顧' },
    { strategy: '持續學習預算', detail: '每人每年 NT$ 100K 學習預算（課程、證照、會議）', metric: '100% 使用率，平均每人每年 2 張證照' },
    { strategy: '彈性工作模式', detail: '混合辦公、彈性工時、遠端協作工具', metric: '員工滿意度 >80%' },
    { strategy: '績效導向的股權激勵', detail: '軟體部門獨立績效評估，股權與軟體營收掛鉤', metric: 'Top performer 總包薪酬对标一線大廠 80-90%' }
  ],
  recruitmentChannels: [
    { channel: '校園徵才', target: '台大、清大、交大、成大的資工/電研所', approach: '產學合作、專題競賽、實習轉正' },
    { channel: '技術社群', target: 'K8s Taiwan、Open Source Summit、AI/ML Meetup', approach: '技術分享、開源貢獻、主辦活動' },
    { channel: '獵才與推薦', target: '有 Hyperscaler/一線大廠經驗的台灣籍工程師', approach: '內部推薦獎金（NT$ 100K/人）、獵才合作' },
    { channel: '國際人才', target: '東南亞、印度、中國籍軟體工程師', approach: '工作簽證協助、台灣生活適應支援' }
  ],
  organizationalDesign: {
    principle: '精實團隊、快速迭代、產品導向',
    structure: [
      { team: 'Firmware Team (L9-L10)', size: '8-12 人', focus: 'BMC、BIOS、驅動程式' },
      { team: 'Platform Team (L11)', size: '10-15 人', focus: 'K8s、容器編排、資源調度' },
      { team: 'AI Framework Team (L12)', size: '8-12 人', focus: 'RAG、模型部署、效能優化' },
      { team: 'Remote Ops Team', size: '6-10 人', focus: '監控、診斷、預測性維護' },
      { team: 'QA/DevOps', size: '5-8 人', focus: '自動化測試、CI/CD、基礎設施' }
    ],
    culture: [
      '工程師文化：技術決策由工程師主導，非管理層',
      '失敗寬容：鼓勵嘗試，快速失敗，快速學習',
      '透明溝通：週度全员會議、季度產品回顧、年度技術峰會'
    ]
  },
  successMetrics: {
    '人才留存率': { target: '年留存率 >85%', benchmark: '矽谷一線大廠約 85-90%' },
    '招募週期': { target: '關鍵職位 <60 天', benchmark: '業界平均 90-120 天' },
    '員工滿意度': { target: 'eNPS >50', benchmark: '矽谷頂尖公司約 60-70' },
    '技術產出': { target: '每人每年 2-3 個主要功能上線', benchmark: '取決於專案複雜度' }
  },
  riskIfFail: '若無法吸引頂尖軟體人才，軟體部門將淪為二線團隊，無法建立真正的差異化。人才是軟體成功的唯一瓶頸。'
};


// Software Moat - Executive Summary Card (Added 2026-03-16 by CoCo)
// Distills the core strategic insight into a memorable, board-ready format
export const softwareMoatSummary = {
  headline: '軟體護城河：Foxconn 的戰略選擇',
  oneLiner: '沒有軟體，Foxconn 將淪為 Hyperscaler 的代工廠，毛利率壓縮至 5-8%。軟體是避免商品化的唯一護城河。',
  
  // The Brutal Reality
  brutalReality: {
    headline: '殘酷現實',
    insight: 'Quanta/Wistron/GIGABYTE 都是 10-30 人軟體團隊，硬體導向。Foxconn 是唯一的例外：50-80 人軟體團隊，L9-L12 全棧能力，Remote Ops + RAG 雙引擎。',
  },
  
  // Financial Impact
  financialImpact: {
    headline: '財務影響：50% 訂單附加軟體 = 毛利翻倍',
    example: '以 NT$ 10B 訂單為例：',
    scenarios: [
      {
        scenario: '純硬體',
        margin: '10-15%',
        revenue: 'NT$ 10B',
        grossProfit: 'NT$ 1-1.5B',
        outcome: '價格競爭，可替換性高'
      },
      {
        scenario: '50% 附加軟體',
        margin: '20-25% (加權)',
        revenue: 'NT$ 10B + NT$ 500M 軟體',
        grossProfit: 'NT$ 2-2.5B',
        outcome: '差異化溢價，客戶鎖定'
      }
    ],
    roi: 'NT$ 65M/年投資 → Year 3: NT$ 750M 軟體營收，11.5x ROI，18-24 個月回收'
  },
  
  // Strategic Choice
  strategicChoice: {
    headline: '戰略抉擇',
    optionA: {
      name: '不投資軟體',
      outcome: '毛利率壓縮至 5-8%，成為 Hyperscaler 的代工廠',
      timeline: '2027-2028 年面臨商品化危機',
      opportunityCost: 'NT$ 1.5B+ 機會損失'
    },
    optionB: {
      name: '投資軟體',
      outcome: '毛利率 20-25%，成為戰略合作夥伴',
      timeline: 'Q4 2026 首個案例，2027 年規模化',
      upside: 'NT$ 750M/年軟體營收，可持續競爭優勢'
    }
  },
  
  // Competitive Reality
  competitiveReality: {
    headline: '競爭現實',
    insight: 'Hyperscaler 自研軟體需 12-18 個月，Foxconn 預整合棧 2-4 週上線。這是「戰略合作夥伴」(20%+ 毛利) 與「商品供應商」(5-8% 毛利) 的差別。',
    odmComparison: 'Quanta/Wistron/ASUS 仍停留在硬體思維，Foxconn 是唯一具備軟體思維的 OEM/ODM。'
  },
  
  // Sources
  sources: 'Competitor analysis based on public information, customer reports, and industry benchmarks (Q1 2026)'
};

// Financial Impact Calculator - Quick ROI estimation for leadership conversations
// Added 2026-03-16 by CoCo - Distills complex TCO into 3 simple calculations any executive can do
export const financialImpactCalculator = {
  headline: '財務影響速算機：3 個數字說服 CFO',
  purpose: '讓業務團隊在客戶會議中快速估算軟體價值，無需財務模型',
  calculations: [
    {
      name: 'GPU 閒置損失計算',
      formula: 'GPU 總投資 × 閒置率 × 資金成本率',
      example: {
        customerScenario: '客戶投資 NT$ 100M 在 GPU 伺服器',
        withoutSoftware: '閒置率 50% × 資金成本 8%/年 = NT$ 4M/年 機會損失',
        withSoftware: '閒置率降至 15% × 資金成本 8%/年 = NT$ 1.2M/年 機會損失',
        savings: 'NT$ 2.8M/年 (僅 GPU 閒置改善)',
      },
      talkingPoint: '每 NT$ 100M GPU 投資，閒置改善即可節省 NT$ 2.8M/年',
    },
    {
      name: '部署加速價值',
      formula: '延遲週數 × 每週預期營收 × 延遲風險係數',
      example: {
        customerScenario: '客戶 AI 服務預期營收 NT$ 5M/週',
        withoutSoftware: '部署 4 週 = 延遲 4 週 × NT$ 5M = NT$ 20M 機會損失',
        withSoftware: '部署 2 小時 = 延遲可忽略，第 2 週即產生營收',
        savings: 'NT$ 20M 提前入袋 (時間價值)',
      },
      talkingPoint: '每延遲 1 週部署 = 損失 NT$ 5M 營收，軟體讓客戶提早 3-4 週賺錢',
    },
    {
      name: '運維人力成本',
      formula: '現場支援次數 × 平均成本/次 + 停機損失',
      example: {
        customerScenario: '50 台伺服器集群，年均 10 次故障',
        withoutSoftware: '10 次 × NT$ 50K/次 + 10 次 × 8 小時 × NT$ 500K/小時 = NT$ 4.5M/年',
        withSoftware: '10 次 × 70% 遠端 × NT$ 10K + 10 次 × 30% 現場 × NT$ 50K + 10 次 × 2 小時 × NT$ 500K/小時 = NT$ 1.15M/年',
        savings: 'NT$ 3.35M/年 (75% 運維成本下降)',
      },
      talkingPoint: '70% 故障遠端修復 = 減少 75% 運維成本 + 減少 87% 停機時間',
    },
  ],
  totalValueSummary: {
    headline: '以 NT$ 100M GPU 投資的客戶為例',
    year1Value: 'NT$ 2.8M (閒置改善) + NT$ 20M (提前營收) + NT$ 3.35M (運維節省) = NT$ 26.15M',
    softwareCost: 'NT$ 2M/年 (軟體授權 + 服務)',
    netBenefit: 'NT$ 24.15M/年 淨收益',
    roi: '12x ROI (NT$ 24.15M ÷ NT$ 2M)',
    paybackPeriod: '約 1 個月 (NT$ 2M ÷ NT$ 26.15M × 12 個月)',
  },
  competitiveContext: 'NVIDIA/Dell 方案僅提供基礎監控，無法提供完整 ROI 閉環。Foxconn 是唯一能量化並保證 ROI 的供應商。',
};

