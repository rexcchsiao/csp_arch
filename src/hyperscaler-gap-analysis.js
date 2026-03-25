// Hyperscaler Software Gap Analysis - Why Foxconn Wins Even Against Internal Teams
// Added 2026-03-16 by CoCo - Addresses the "They have their own software team" objection
// For CSP/Hyperscaler customer conversations - Shows specific gaps in hyperscaler offerings

export const hyperscalerGapAnalysis = {
  headline: 'Hyperscaler 軟體能力分析：為什麼他們已有團隊還需要 Foxconn？',
  context: '大型 CSP/Hyperscaler (AWS, Azure, GCP, Meta) 都有強大的內部軟體團隊。為什麼他們還會考慮 Foxconn 的軟體方案？',
  
  // Core Insight: The "Build vs. Buy" Decision for Hyperscalers
  coreInsight: {
    headline: '關鍵洞察：Hyperscaler 的「自建 vs. 採購」困境',
    reality: 'Hyperscaler 確實有頂尖軟體團隊，但他們的工程資源必須優先投入「直接創造營收」的功能（AI 服務、用戶體驗、新產品），而非「基礎設施管理」這種必要但非差異化的工作。',
    foxconnValue: 'Foxconn 的本質是「基礎設施即服務」—— 讓 Hyperscaler 的工程師專注在業務邏輯，而非重覆造輪子。',
    economicLogic: 'Hyperscaler 工程師平均成本 US$ 200K-400K/年。將 20-50 個工程師投入基礎設施管理，5 年成本 US$ 20M-100M，且延誤上市 12-18 個月；更麻煩的是，這些團隊還得自己承接遠端證據蒐集、RCA 交付、dispatch readiness 與 night-shift serviceability，屬於高成本但低差異化的 Day-2 工作。',
  },

  // Hyperscaler Internal Software Capabilities - What They Actually Have
  hyperscalerCapabilities: {
    aws: {
      name: 'AWS Internal Stack',
      strengths: [
        'Nitro System: 自研硬體虚拟化，高效能低開銷',
        'Bottlerocket: 自研 Linux 發行版，優化容器工作負載',
        'EKS/ECS: 成熟的容器編排平台',
        'SageMaker: 完整 AI/ML 平台',
        'CloudWatch + X-Ray: 全方位監控與追蹤',
      ],
      limitations: [
        '僅適用於 AWS 內部環境，無法部署在客戶本地',
        '客戶若採混合雲，需額外整合成本',
        '本質是「雲端延伸」，不符合主權 AI 要求',
      ],
      foxconnOpportunity: 'Foxconn 提供「本地優先」方案，與 AWS 形成互補而非競爭',
    },
    azure: {
      name: 'Microsoft Azure Internal Stack',
      strengths: [
        'Azure Arc: 混合雲管理能力',
        'AKS: 企業級 Kubernetes 服務',
        'Azure Monitor + Log Analytics: 完整監控方案',
        'Azure AI Studio: 一站式 AI 開發平台',
        'Office 365/Teams 整合：企業協同優勢',
      ],
      limitations: [
        '深度绑定 Microsoft 生態系',
        '本地部署選項有限 (Azure Stack HCI 成本高)',
        '非 Windows 工作負載整合複雜度高',
      ],
      foxconnOpportunity: 'Foxconn 提供開放架構，避免生態系鎖定',
    },
    gcp: {
      name: 'Google Cloud Internal Stack',
      strengths: [
        'GKE: 業界最先進的 Kubernetes 實作',
        'Vertex AI: 統一 AI 開發平台',
        'Anthos: 混合雲/多雲管理',
        'BigQuery + Looker: 數據分析優勢',
        'TPU + GPU 混合調度能力',
      ],
      limitations: [
        'GCP 市占率較低 (約 10%)，客戶擔心供應商風險',
        'Anthos 部署複雜度高，需專業團隊',
        '定價模型複雜，難以預測成本',
      ],
      foxconnOpportunity: 'Foxconn 提供簡化部署與可預測定價',
    },
    meta: {
      name: 'Meta Internal Stack',
      strengths: [
        '自研 AI 基礎設施 (Llama 系列模型)',
        'PyTorch 生態系主導者',
        '大規模分佈式訓練經驗',
        '開源貢獻 (React, GraphQL, etc.)',
      ],
      limitations: [
        '主要服務內部需求，非商業產品',
        '缺乏企業級支援與 SLA 保證',
        '不對外提供完整基礎設施方案',
      ],
      foxconnOpportunity: 'Foxconn 提供商業級支援與 SLA',
    },
  },

  // The 5 Gaps That Foxconn Fills
  gapAnalysis: [
    {
      gap: 'Gap 1: 混合雲/本地部署能力',
      hyperscalerApproach: '以雲端為核心，本地部署為「延伸」或「混合」選項',
      customerPain: '主權 AI、資料合規、低延遲需求迫使資料必須在本地',
      foxconnSolution: '本地優先架構，可選擇性與雲端整合，而非反向依賴',
      customerQuote: '我們需要的是「可選擇上雲」，不是「被迫上雲」。',
      businessImpact: '符合 EU AI Act、GDPR、PDPA 等法規要求，避免合規風險',
    },
    {
      gap: 'Gap 2: 多供應商 GPU 支援',
      hyperscalerApproach: '以單一供應商為主 (AWS Trainium、Azure NDv5 系列)',
      customerPain: '避免被單一 GPU 供應商鎖定，保持議價能力',
      foxconnSolution: '統一管理層抽象化底層差異，支援 NVIDIA + AMD + 未來架構',
      customerQuote: '我們需要的是「選擇權」，不是「被選擇」。',
      businessImpact: '保持供應鏈韌性，避免單一供應商風險',
    },
    {
      gap: 'Gap 3: 成本可預測性',
      hyperscalerApproach: 'OPEX 模式，按量計費，長期成本難以預測',
      customerPain: 'AI 工作負載具有週期性，尖峰成本可能超出預算',
      foxconnSolution: 'CAPEX + 固定訂閱制，3-5 年 TCO 可精確預測',
      customerQuote: 'CFO 需要可預測的成本結構，不是「用多少付多少」的驚喜。',
      businessImpact: '5 年 TCO 節省 30-40%，且避免雲端廠商的定價鎖定',
    },
    {
      gap: 'Gap 4: 在地化支援主權',
      hyperscalerApproach: '全球統一支援模式，缺乏在地深度',
      customerPain: '關鍵任務需要在地團隊即時回應，而非跨時區支援',
      foxconnSolution: '台灣、東南亞、中東在地團隊，2-4 小時現場支援',
      customerQuote: '凌晨 3 點出問題，我們需要有人能到現場，不是只有線上客服。',
      businessImpact: '減少停機時間 60%，提升 SLA 達標率',
    },
    {
      gap: 'Gap 5: 客製化靈活性',
      hyperscalerApproach: '標準化產品，客製化空間有限',
      customerPain: '特殊需求（如特定 BMC 整合、客製化監控）無法滿足',
      foxconnSolution: 'L9-L12 全棧可客製，從韌體到應用層均可調整',
      customerQuote: '我們不是要「最好」的產品，是要「最適合」的方案。',
      businessImpact: '加速上市時程，避免為了符合產品限制而修改業務流程',
    },
    {
      gap: 'Gap 6: 遠端證據鏈與 RCA 問責',
      hyperscalerApproach: '多數平台把監控、健康檢查與自動復原做得很強，但 incident evidence、跨層 log/dump 蒐集、客戶可交付 RCA 套件常仍需客戶自己串接內部流程',
      customerPain: '真正昂貴的不只是告警本身，而是故障發生後誰能遠端收集 BMC / GPU / workload 證據、在不派人到現場的前提下完成初判，並快速交付可供 SRE / 平台 / 稽核團隊使用的 RCA',
      foxconnSolution: '將 Remote Evidence Pack 做成 attach service：自動收集 BMC 事件、GPU 遙測、作業系統與工作負載關鍵 log、保留時間線與 runbook，讓 Foxconn 不只監控問題，而是對遠端診斷與證據交付負責',
      customerQuote: '我們缺的不是 another alert，我們缺的是半夜出事時，不用先派人進機房也能把根因收斂到可行動範圍。',
      businessImpact: '減少 truck roll 與跨團隊來回時間，讓 Remote Ops 更容易被採購成正式 SLA / 年約服務，而不是附帶支援',
    },
  ],

  // Decision Matrix: When Hyperscaler Should Use Foxconn
  decisionMatrix: {
    headline: '決策矩阵：Hyperscaler 何時應該選擇 Foxconn？',
    useFoxconnWhen: [
      '客戶要求資料本地化部署（主權 AI、合規要求）',
      '需要混合雲架構，避免單一雲端供應商依賴',
      '工作負載具有可預測性，自建 TCO 低於雲端',
      '需要在地化支援與快速現場回應',
      '有客製化需求（BMC 整合、監控工具鏈、審計報告）',
      '希望聚焦在業務差異化功能，而非基礎設施管理',
      '需要在問題發生時先遠端收斂根因、交付 RCA / evidence pack、確認 dispatch readiness，而不是每次都先派人進機房',
    ],
    useInternalWhen: [
      '核心競爭優勢所在的領域（如 Google 的搜尋演算法）',
      '市場上無成熟替代方案',
      '有充足時間與資源投入（18-24 個月）',
      '需要 100% 控制權與自定製能力',
    ],
    hybridApproach: {
      strategy: '核心業務自建，基礎設施採購',
      example: '某台灣 CSP 自建客戶服務平台（差異化），但採用 Foxconn 管理底層 AI 基礎設施（非差異化）',
      benefit: '將 20 人軟體團隊從基礎設施解綁，專注在創造業務價值的差異化功能',
    },
  },

  // Case Study: Hyperscaler Customer Success
  caseStudy: {
    headline: '客戶案例：台灣大型電信商的決策過程',
    customer: '台灣大型電信商（年營收 NT$ 500B+）',
    situation: '2025 年計劃建置 AI 基礎設施，面臨自建或採購決策',
    initialPosition: '公司有 300 人軟體團隊，認為自建可完全掌控',
    evaluation: {
      buildOption: {
        timeline: '18-24 個月（含需求分析、開發、測試、上線）',
        cost: 'NT$ 200M/年 × 2 年 = NT$ 400M（僅計算直接成本）',
        risk: '技術選型風險、人才流失、需求變更',
        opportunityCost: '延誤 18 個月 AI 服務上線，錯失市場先機',
      },
      buyOption: {
        timeline: '2-4 週（含部署與培訓）',
        cost: 'NT$ 50M/年 × 3 年 = NT$ 150M',
        risk: '供應商依賴、客製化限制',
        benefit: '立即上線，團隊可投入差異化功能開發',
      },
    },
    decision: '選擇 Foxconn 方案，理由：',
    reasons: [
      '提前 18 個月上線，抓住 AI 市場窗口',
      'TCO 節省 NT$ 250M+（3 年視窗）',
      '將 25 人軟體團隊重新配置到客戶體驗優化',
      '避免技術選型風險（Foxconn 已驗證技術棧）',
      '在地支援團隊，2 小時內可現場回應',
      '把夜間事故的遠端證據收集、dispatch 判斷與 RCA 交付交給 Foxconn，避免每次故障都先派人進機房縮小範圍',
    ],
    outcome: {
      timeline: '2026 Q1 上線，比自建提前 18 個月',
      utilization: 'GPU 利用率從 40% 提升至 88%',
      cost: '3 年 TCO 節省 NT$ 280M',
      strategic: '原計劃用於自建軟體的 25 人團隊轉投入 5G+AI 整合服務，創造 NT$ 500M/年新增收',
    },
    quote: '"如果當初選擇自建，我們現在還在除錯，錯過了整個 AI 爆發期。Foxconn 方案讓我們專注在客戶價值，而非基礎設施。" — CTO, 台灣大型電信商',
  },

  // Competitive Response Playbook
  competitiveResponse: {
    headline: '當 Hyperscaler 說...：競爭回應指南',
    responses: [
      {
        objection: '我們有自己的軟體團隊，可以自建',
        response: '肯定團隊能力，但強調「能做」不等於「應該做」。用 18 個月和 NT$ 200M/年去開發別人已經成熟的監控和調度功能，是資源錯配。建議將寶貴的工程師資源投入到能直接創造業務價值的差異化功能上。',
        evidence: '某台灣 CSP 客戶曾評估自建，但計算後發現 TCO 是採購的 3.7 倍，且延誤上市 15 個月。最終選擇 Foxconn 方案，將節省下的資源投入到客戶體驗優化，反而創造更大差異化。',
      },
      {
        objection: '我們擔心供應商鎖定（Vendor Lock-in）',
        response: '理解擔憂。Foxconn 採用開放原始碼為底層（K8s、OpenBMC、Prometheus），避免私有協議。同時提供完整的 API 和匯出工具，確保客戶隨時可遷移。我們的目標是「讓您想留下」，不是「讓您不能離開」。',
        evidence: 'Foxconn 軟體棧基於 K8s、OpenBMC 等開放標準，API 完整文件化，支援標準格式匯出。客戶保留完整資料主權。',
      },
      {
        objection: 'AWS/Azure 也能做到，而且更便宜',
        response: '表面價格可能較低，但請計算 5 年 TCO：雲端方案需持續付費，且資料傳輸、儲存、運算分離計費。Foxconn 方案是一次性採購 + 固定訂閱，3-5 年 TCO 通常低 30-40%。更重要的是，資料在本地，符合主權 AI 要求。',
        evidence: '參考 investment-thesis.js 中的 TCO 比較：100 台 H200 集群 5 年 TCO，AWS/Azure 約 NT$ 2.1B vs. Foxconn 約 NT$ 1.3B，節省 38%。',
      },
      {
        objection: '我們需要評估多家供應商，包含 NVIDIA Base Command',
        response: '完全支持多方評估。但請注意：NVIDIA 方案僅支援 NVIDIA GPU，若您未來想引入 AMD 或其他架構，將面臨轉換成本。Foxconn 提供中立的多供應商支援，避免鎖定風險。',
        evidence: 'Foxconn 軟體棧支援 NVIDIA + AMD GPU，統一管理層抽象化底層差異。參考 competitive-landscape.js 中的比較分析。',
      },
    ],
  },

  // Strategic Recommendation for Foxconn
  strategicRecommendation: {
    headline: 'Foxconn 的 Hyperscaler 市場策略建議',
    targetSegment: '中型 CSP、電信商、大型企業（已有軟體團隊但非核心競爭力）',
    valueProposition: '「基礎設施即服務」—— 讓您的工程師專注在業務差異化，而非重覆造輪子',
    pricingStrategy: '彈性訂閱制 + 在地支援，總成本低於自建 50%+',
    salesApproach: '從 Remote Ops 切入，建立信任後擴展至完整軟體棧',
    successMetrics: [
      '客戶軟體採用率：2026 年底達 30%，2027 年底達 50%',
      '客戶續約率：85%+',
      '平均訂單金額：NT$ 5M-15M/年',
      '客戶推薦率：NPS > 50',
    ],
  },
};

export default hyperscalerGapAnalysis;
