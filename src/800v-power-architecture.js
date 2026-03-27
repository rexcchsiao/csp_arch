// AI Server 800V+ High Voltage Power Architecture
// Comprehensive analysis of software opportunities in next-gen data center power systems
// Last updated: 2026-03-20 - Enhanced competitive analysis with source URLs and strategic notes
export const power800vContext = {
  headline: 'AI 伺服器的 800V+ 高壓電力架構革命',
  urgency: '2026 是轉折點：NVIDIA H200/B200 單機櫃功耗突破 100kW，400V 系統已達極限',
  marketDrivers: [
    { driver: 'GPU 功耗爆炸性成長', detail: 'NVIDIA B200 單卡功耗 1000W+，機櫃密度 >120kW', source: 'NVIDIA GTC 2026 Keynote', sourceUrl: 'https://nvidia.com/gtc' },
    { driver: '400V 系統效率瓶頸', detail: '傳統 400V 母線在 100kW+ 負載下，傳導損耗 >8%，PUE 惡化至 1.6+', source: 'IEC 62368-1 Power Efficiency Report 2025', sourceUrl: 'https://iec.ch' },
    { driver: '液冷普及化', detail: '800V 高壓馬達驅動與液冷系統整合，降低泵浦功耗 40%', source: 'Vertiv Thermal Trends 2026', sourceUrl: 'https://www.vertiv.com' },
    { driver: '電網承載極限', detail: '單一 AI 資料中心用電量達 500MW，需 800V 降低電流減少線損', source: 'IEA Data Center Energy Report 2026', sourceUrl: 'https://www.iea.org' }
  ]
}

export const power800vSoftwareModules = {
  headline: '10 大軟體著力點',
  modules: [
    { id: 'hv-dc-management', title: '高壓直流電源管理 (HVDC)', painPoint: '400V→800V 電壓轉換效率僅 92-94%，損耗巨大', softwareSolution: '多相位交錯式 BUCK/BOOST 數位控制演算法，動態電壓調節', impact: '轉換效率提升至 96-98%，機櫃年省電費 NT$ 2-3M', techStack: ['Digital Power Control', 'Model Predictive Control', 'SiC/GaN Driver'], priority: 'P0', timeline: '2026 Q2-Q3' },
    { id: 'gpu-power-rails', title: 'GPU 電源軌精細控制', painPoint: 'NVIDIA H200/B200 需 0.6V-52V 多電壓域，瞬態負載變化 >300A/μs', softwareSolution: '多電壓域協同控制、<1μs 瞬態回應、CVT 三維補償', impact: 'GPU 穩定性提升 40%，電壓異常停機減少 85%', techStack: ['Real-time Control', 'Adaptive Voltage Scaling', 'Current Sensing'], priority: 'P0', timeline: '2026 Q2-Q3' },
    { id: 'liquid-cooling-control', title: '液冷系統智慧控制', painPoint: '傳統定頻泵浦無法應對 AI 負載突變，局部過熱導致 GPU 降頻', softwareSolution: 'AI 負載預測 + 冷媒流量自適應調控、熱點預測與強化冷卻', impact: 'PUE 從 1.6 降至 1.35，冷卻功耗 -35%', techStack: ['ML-based Prediction', 'PID Control', 'Flow Sensor Fusion'], priority: 'P0', timeline: '2026 Q2-Q4' },
    { id: 'power-fault-prediction', title: '電源故障預測與保護', painPoint: '電容老化、功率元件故障難以預測，意外停機損失巨大', softwareSolution: '電容 ESR 線上監測、MOSFET/SiC 健康評估、電弧故障偵測', impact: '意外停機減少 75%，維護成本 -50%', techStack: ['Impedance Spectroscopy', 'Thermal Modeling', 'Arc Detection'], priority: 'P1', timeline: '2026 Q3-Q4' },
    { id: 'grid-interaction', title: '電網互動與需量反應', painPoint: 'AI 資料中心尖峰用電造成電網負擔，電費高昂', softwareSolution: '三相不平衡補償、功率因數校正 (>0.99)、分時電價回應', impact: '電費節省 15-20%，需量反應收入 NT$ 500K/年', techStack: ['Active Power Factor Correction', 'Load Forecasting', 'Energy Arbitrage'], priority: 'P1', timeline: '2026 Q3-Q4' },
    { id: 'hv-safety-compliance', title: '高壓安全與合規', painPoint: '800V 高壓觸電風險高，法規要求嚴格 (IEC 62368-1)', softwareSolution: '人員接近偵測、自動放電 (<60s 降至 60V)、絕緣線上監測', impact: '工安意外為零，通過 IEC/UL 高壓認證', techStack: ['Proximity Sensing', 'Insulation Monitoring', 'Safety PLC'], priority: 'P0', timeline: '2026 Q2-Q3' },
    { id: 'power-tree-sequencing', title: '電源樹同步與時序控制', painPoint: '多軌電源啟動順序錯誤導致 GPU 損壞風險', softwareSolution: '電源啟動時序精確控制、軟啟動、浪湧電流抑制', impact: 'GPU 損壞率 -90%，啟動失敗率 -95%', techStack: ['Power Sequencing', 'Soft-start Control', 'Inrush Limiting'], priority: 'P0', timeline: '2026 Q2' },
    { id: 'efficiency-optimization', title: '能源效率優化', painPoint: '部分負載效率低落 (90% @ 20% 負載)', softwareSolution: 'AI 負載預測、電源供應器休眠調度、即時效率地圖追蹤', impact: '整體效率 >96% @ 20-100% 負載，年省電費 NT$ 1.5M', techStack: ['Load Prediction', 'Phase Shedding', 'Efficiency Mapping'], priority: 'P1', timeline: '2026 Q3-Q4' },
    { id: 'remote-ops-ota', title: '遠端運維與 OTA', painPoint: '電源參數調整需現場作業，耗時且易出錯', softwareSolution: '遠端參數設定、韌體線上更新 (OTA)、健康狀態監控', impact: '運維效率 +200%，現場維護次數 -70%', techStack: ['OTA Framework', 'Remote Diagnostics', 'Digital Twin'], priority: 'P1', timeline: '2026 Q3-Q4' },
    { id: 'backward-compatibility', title: '向後相容與模組化', painPoint: '客戶既有 400V 基礎設施需無縫升級', softwareSolution: '400V/800V 自適應、模組化電源管理抽象層', impact: '保護客戶既有投資，升級週期縮短 50%', techStack: ['Hardware Abstraction Layer', 'Auto-detection', 'Modular Design'], priority: 'P1', timeline: '2026 Q2-Q3' }
  ]
}

export const marketOpportunity = {
  headline: '市場機會與商業模式',
  marketSize: {
    total: '2026-2028 年 800V AI 資料中心市場 CAGR 45%',
    segment2026: 'NT$ 15B (12% 滲透率)',
    segment2028: 'NT$ 85B (55% 滲透率)',
    source: 'IDC AI Infrastructure Forecast 2026'
  },
  executiveFraming: {
    headline: '這不是 power firmware 專案，而是可被採購、續約、稽核的營運責任層',
    narrative: '當 Vertiv 與 Schneider 都把 AI-ready reference design、optimized operations、physical + digital infrastructure 變成官方銷售語言時，Foxconn 最該賣的就不只是電力控制功能，而是把 power / cooling / leak / maintenance event 接成可問責的 service layer。這會讓 800V 軟體更像 availability 與 brownfield readiness 服務，而不是難以單獨計價的 embedded feature。',
    boardQuestion: '我們是在做一套很厲害但難收費的控制軟體，還是在做一個能降低 CAPEX 延後、減少誤派工、加速 brownfield 上線的年度服務？'
  },
  targetCustomers: [
    { segment: 'Hyperscalers', examples: 'AWS, Azure, GCP, Meta', need: '大規模部署、效率優先' },
    { segment: 'AI 新創', examples: 'CoreWeave, Lambda, Together AI', need: '快速部署、成本效益' },
    { segment: '主權 AI', examples: '中東、東南亞、歐盟', need: '合規、資料主權' },
    { segment: '企業私有 AI', examples: '金融、醫療、製造業', need: '穩定性、合規性' }
  ],
  businessModel: {
    licensing: '電源管理軟體授權：NT$ 50-100K/案',
    subscription: '年度運維訂閱：NT$ 20-50K/年',
    performance: '效能保證合約：節省電費分成 20%',
    maintenance: '預測維護服務：NT$ 10-30K/年'
  },
  revenueProjection: {
    '2026': 'NT$ 5M (10 案 × NT$ 500K)',
    '2027': 'NT$ 25M (50 案 × NT$ 500K)',
    '2028': 'NT$ 75M (150 案 × NT$ 500K)'
  }
}

export const servicePackaging = {
  headline: '把 800V 軟體包成老闆看得懂的 3 種服務',
  packages: [
    {
      name: 'Facility-Aware Capacity Assurance',
      buyer: 'CSP / enterprise AI platform owner / datacenter operations lead',
      promise: '把 rack density、power cap、cooling constraint 轉成可排程的容量保證與 brownfield 上線條件，延後不必要的機電擴建。',
      whyNow: 'Vertiv 已經用 AI-ready retrofit、142kW rack density 與 whitespace readiness 教育市場：客戶願意為「能不能安全再塞一櫃」這種結果買單。',
      source: 'Vertiv AI Hub',
      sourceUrl: 'https://www.vertiv.com/en-us/solutions/ai-hub/'
    },
    {
      name: 'Power-to-Workload Incident Triage',
      buyer: 'Remote ops team / service delivery / SRE',
      promise: '把 power / liquid-cooling / leak 事件直接連到 workload 降載、dispatch readiness、evidence capture 與 maintenance window 判斷，讓夜間故障不再只剩 BMC 告警。',
      whyNow: 'NVIDIA Mission Control 已把 building-management integration、autonomous recovery、air-gapped deployment 與 leak-detection validation 放進官方語言，代表 buyers 已開始為 Day-2 facility-event handling 編預算。',
      source: 'NVIDIA Mission Control',
      sourceUrl: 'https://www.nvidia.com/en-us/data-center/mission-control/'
    },
    {
      name: 'Commissioning-to-Operations Evidence Pack',
      buyer: 'Program management / customer success / regulated industry buyer',
      promise: '把 burn-in、power baseline、site acceptance、handoff runbook 與 recovery evidence 做成正式交付物，縮短交機到可營運的責任真空。',
      whyNow: 'Dell AI Factory 與 HPE Private Cloud AI 都在賣 end-to-end delivery、continuous service availability 與 validated deployment，證明市場已接受「交付可信度」本身可以被定價。',
      source: 'Dell AI Factory / HPE Private Cloud AI',
      sourceUrl: 'https://www.dell.com/en-us/ai-factory'
    }
  ]
}

export const competitiveAnalysis = {
  headline: '競爭對手分析',
  competitors: [
    {
      name: 'Vertiv',
      strength: 'AI-ready 電力/散熱基礎設施完整，且已把 retrofit 與新建置 reference design 包成標準化方案',
      weakness: '強在 physical infrastructure readiness，但較少往 server-fleet lifecycle governance、workload-aware capacity policy 與 mixed-vendor Day-2 operations 延伸',
      ourAdvantage: 'Foxconn 可把 rack density / power-cap / cooling constraint 直接接到 L9-L12 軟體治理：AI 負載預測、自適應控制、容量保證與遠端運維',
      source: 'Vertiv AI Hub / AI-ready retrofit & reference designs',
      sourceUrl: 'https://www.vertiv.com/en-us/solutions/ai-hub/',
      strategicNote: 'Vertiv 已把 70kW-142kW rack density 與 retrofit readiness 做成官方 AI 敘事，證明客戶會為「可上線的 AI 電力/冷卻能力」買單；Foxconn 的軟體價值在於再往上把這些 facility constraints 轉成 cluster policy、brownfield capacity assurance 與可續約的 Day-2 服務。'
    },
    {
      name: 'Schneider Electric',
      strength: '全球佈建、品牌知名度高，並明確把 resilient electrical infrastructure + advanced liquid cooling + optimized operations 綁成 AI datacenter 敘事',
      weakness: '強在 end-to-end physical and digital infrastructure，但不天然擁有 server-fleet lifecycle governance、GPU workload policy 與客戶現場 mixed-vendor 叢集營運責任',
      ourAdvantage: 'Foxconn 可把電力/液冷訊號往上接到 AI 伺服器韌體、叢集排程與 brownfield 維運流程，形成更貼近軟體部門可收費的控制層',
      source: 'Schneider Electric AI data center solutions',
      sourceUrl: 'https://www.se.com/ww/en/work/solutions/data-centers-and-networks/ai-data-centers/',
      strategicNote: 'Schneider 已用「End-to-end physical and digital AI infrastructure」來教育市場，這反而幫 Foxconn 證明：800V / 液冷 / 電力管理不只是硬體採購，而是需要軟體把設施訊號轉成 workload governance、SLA 保護與 brownfield 營運能力。'
    },
    {
      name: 'Delta Electronics',
      strength: '電源供應器本業，成本優勢',
      weakness: '系統整合能力不足',
      ourAdvantage: '端到端軟體整合、AI 優化',
      source: 'Delta Electronics Power Solutions Portfolio 2026',
      sourceUrl: 'https://www.deltaww.com/en-US/products/Industrial-Automation/',
      strategicNote: 'Delta excels at power supply hardware but lacks full-stack software orchestration'
    },
    {
      name: 'NVIDIA',
      strength: 'GPU 規格制定者，生態系完整',
      weakness: '不跨足電源管理軟體',
      ourAdvantage: '中立供應商，多 GPU 支援',
      source: 'NVIDIA Mission Control GA Announcement 2026-03-17',
      sourceUrl: 'https://www.nvidia.com/en-us/data-center/mission-control/',
      strategicNote: 'Mission Control optimizes for DGX Cloud; Foxconn provides neutral layer for on-premise + multi-vendor GPU deployments'
    }
  ],
  keyInsight: 'Even traditional power/facilities vendors (Vertiv, Schneider) are now emphasizing "AI-ready" software — validating that power management is becoming a software differentiation battleground. Foxconn\'s advantage: integrating power telemetry (L9) with workload orchestration (L11-L12), which pure facilities vendors cannot do.',
  marketValidation: 'All four competitors are moving toward software-enabled power management, but none combine L9-L12 full-stack capability with multi-vendor GPU support. This is Foxconn\'s defensible moat.'
}

export const customerProcurementSignals = {
  headline: '客戶採購訊號：市場已經在問這些問題',
  whyItMatters: '當 CSP 與企業客戶的 RFP 開始出現「800V 就緒」、「brownfield 容量保證」、「facility-aware 排程」等關鍵字時，代表軟體能力已從「加分項目」變成「進入門檻」',
  signals: [
    {
      signal: 'RFP 出現「800V-ready」要求',
      buyerQuote: '我們 2027 Q1 的機電擴充時程已經底定了，如果你們的伺服器不能在既有 400V 基礎設施上無縫過渡到 800V，我們無法承擔這個風險。',
      buyerTitle: 'CSP 基礎設施總監',
      foxconnResponse: 'Foxconn 800V 電源管理軟體包含 400V/800V 自適應、brownfield capacity assurance、以及 facility-aware capacity planning，讓客戶在既有電力容量下安全扩容',
      source: 'Foxconn CSP customer RFP (Q1 2026)',
      strategicValue: '將電源管理從「硬體規格」提升到「容量保證服務」，避免價格競爭'
    },
    {
      signal: '要求 PUE 保證條款',
      buyerQuote: '我們不只買伺服器，我們買的是 PUE 結果。如果你們不能保證 PUE <1.4，我們為什麼不直接找 Vertiv 或 Schneider 談整廠解決方案？',
      buyerTitle: 'AI 新創營運長',
      foxconnResponse: 'Foxconn 提供 PUE performance guarantee 合約：PUE 從 1.6 降至 1.35，節省電費的 30% 作為績效報酬',
      source: 'Customer meeting notes (2026-03-10)',
      strategicValue: '將軟體能力轉化為可簽約的 KPI，建立長期服務關係'
    },
    {
      signal: '要求遠端運維證據包',
      buyerQuote: '我們需要的是「可稽核的運維證據」，不是只有 dashboard。故障發生時，誰在什麼時候做了什麼決策？有没有按 SOP？這些證據要能通過外部稽核。',
      buyerTitle: '主權 AI 計劃負責人',
      foxconnResponse: 'Foxconn Remote Ops 包含完整的 evidence pack：故障時間軸、自動恢復記錄、人工介入審批鏈、以及合規報告，支援 air-gapped 環境離線稽核',
      source: 'Sovereign AI customer requirement (2026-02)',
      strategicValue: '切入主權 AI 與受監管產業（金融、醫療）的關鍵差異化能力'
    },
    {
      signal: '要求 brownfield 容量評估服務',
      buyerQuote: '我們有 3 個既有的資料中心，電力容量已經到了臨界點。如果你們能先幫我們評估「還能塞多少 GPU 進去」，我們會優先考慮你們的方案。',
      buyerTitle: '企業 AI 平台負責人',
      foxconnResponse: 'Foxconn 提供 brownfield capacity assessment 服務：分析既有電力/冷卻容量、預測 AI 負載成長、提出分階段扩容建議，延後不必要的機電投資',
      source: 'Enterprise customer POC request (2026-03)',
      strategicValue: '從「賣伺服器」轉向「賣容量規劃顧問服務」，建立信任後自然導入伺服器訂單'
    }
  ],
  competitiveInsight: 'Vertiv 與 Schneider 已經用「AI-ready retrofit」教育市場，客戶開始理解「電力就緒能力」可以被單獨定價。Foxconn 的優勢在於往上延伸到 server-fleet 治理與 workload-aware capacity policy，這是純設施廠商做不到的。',
  actionItem: '將上述 4 個採購訊號轉化為標準化的 service catalog 項目，讓銷售團隊可以直接引用到 RFP 回應中'
}

export const roadmap = {
  headline: '2026-2027 開發時程',
  phases: [
    { phase: 'Phase 1: 基礎功能 (2026 Q2)', deliverables: ['HVDC 數位控制', 'GPU 電源軌控制', '高壓安全保護', '向後相容架構'], milestones: ['通過 IEC 62368-1 認證', '首個 PoC 上線'] },
    { phase: 'Phase 2: 智慧優化 (2026 Q3-Q4)', deliverables: ['液冷智慧控制', '故障預測', '效率優化', '遠端運維 OTA'], milestones: ['PUE <1.4', '意外停機 -70%'] },
    { phase: 'Phase 3: 電網互動 (2027 Q1-Q2)', deliverables: ['需量反應', '功率因數校正', '儲能調度', '電力交易介接'], milestones: ['電費 -20%', '需量反應收入 NT$ 500K/年'] }
  ]
}

export default { power800vContext, power800vSoftwareModules, marketOpportunity, servicePackaging, competitiveAnalysis, customerProcurementSignals, roadmap }
