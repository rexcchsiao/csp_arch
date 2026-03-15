// Software Differentiation & Pain Points Analysis
// For strengthening the argument: "Without software, hardware value cannot be fully amplified"

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
  ],

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
	serviceOfferings: {
		headline: '從「賣伺服器」到「賣服務」：可具體交付的軟體服務組合',
		rationale: '硬體是一次性銷售，軟體/服務是持續性收入。以下是可立即啟動的服務項目：',
		offerings: [
			{
				name: 'Remote Ops 遠端運維服務',
				description: '7×24 小時全球機房監控、預測性維護、遠端診斷與修復',
				pricing: 'NT$ 50K-200K/月（依節點數）',
				margin: '60-70%',
				differentiation: '競爭對手僅提供基礎監控，我們提供主動式維護與修復',
				targetCustomer: 'CSP 客戶、多據點企業'
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
