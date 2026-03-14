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
    ],
    callToAction: '投資軟體部門，不是成本，是讓硬體價值最大化的必要槓桿。',
    why2026: '2026 是轉折點：GPU 供應正常化，競爭從「誰有 GPU」轉向「誰能用得最好」。軟體是用戶體驗的最後一哩路，也是溢價的關鍵。',
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

export default softwareDifferentiation;
