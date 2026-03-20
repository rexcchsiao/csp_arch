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

export const competitiveAnalysis = {
  headline: '競爭對手分析',
  competitors: [
    {
      name: 'Vertiv',
      strength: '傳統電源大廠，硬體完整',
      weakness: '軟體能力弱，缺乏 AI 整合',
      ourAdvantage: 'AI 負載預測、自適應控制、遠端運維',
      source: 'Vertiv Thermal Trends 2026',
      sourceUrl: 'https://www.vertiv.com/global-cooling-trends/',
      strategicNote: 'Vertiv focused on facilities-level DCIM; lacks L9-L12 server-integrated power management'
    },
    {
      name: 'Schneider Electric',
      strength: '全球佈建、品牌知名度高',
      weakness: '解決方案制式化，缺乏客製化',
      ourAdvantage: '彈性軟體架構、快速迭代、貼身服務',
      source: 'Schneider Electric AI Data Center Solutions 2026',
      sourceUrl: 'https://www.se.com/ww/en/work/solutions/industrial-automation/artificial-intelligence.jsp',
      strategicNote: 'Schneider offers EcoStruxure but requires third-party integration for AI workload optimization'
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

export const roadmap = {
  headline: '2026-2027 開發時程',
  phases: [
    { phase: 'Phase 1: 基礎功能 (2026 Q2)', deliverables: ['HVDC 數位控制', 'GPU 電源軌控制', '高壓安全保護', '向後相容架構'], milestones: ['通過 IEC 62368-1 認證', '首個 PoC 上線'] },
    { phase: 'Phase 2: 智慧優化 (2026 Q3-Q4)', deliverables: ['液冷智慧控制', '故障預測', '效率優化', '遠端運維 OTA'], milestones: ['PUE <1.4', '意外停機 -70%'] },
    { phase: 'Phase 3: 電網互動 (2027 Q1-Q2)', deliverables: ['需量反應', '功率因數校正', '儲能調度', '電力交易介接'], milestones: ['電費 -20%', '需量反應收入 NT$ 500K/年'] }
  ]
}

export default { power800vContext, power800vSoftwareModules, marketOpportunity, competitiveAnalysis, roadmap }
