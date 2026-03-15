// Build vs. Buy Analysis - Addressing the "Why not build in-house?" objection
// Added 2026-03-16 by CoCo - Preempts executive objection about internal development
// For CFO/CEO/CTO review - Shows why Foxconn software is better than customer building themselves

export const buildVsBuyAnalysis = {
  headline: '自建 vs. 採購：為什麼選擇 Foxconn 軟體而非自建？',
  context: '大型 CSP/Hyperscaler 客戶常問：「我們有軟體團隊，為什麼不自己開發？」',
  coreArgument: '不是「自建 vs. 採購」，而是「聚焦核心差異化 vs. 重複造輪子」。Foxconn 軟體讓客戶專注在業務邏輯，而非基礎設施。',

  // Executive Summary: The 30-Second Answer
  executiveSummary: {
    question: '我們有軟體團隊，為什麼要買 Foxconn 的軟體？',
    answer: '因為「能自己做」不等於「應該自己做」。Foxconn 軟體的本質是「用 2-4 週取得別人 12-18 個月的成果」，讓您的團隊專注在業務差異化功能，而非重複造輪子。',
    math: '自建成本：NT$ 120M/年 × 18 個月 = NT$ 216M + 機會成本（延誤上市 12-18 個月）vs. Foxconn 方案：NT$ 50M/年，2-4 週上線，立即見效',
  },

  // Detailed TCO: Build vs. Buy (5-Year View)
  tcoComparison: {
    headline: '五年總成本分析：自建 vs. 採購 Foxconn',
    scenario: '假設中大型 CSP 需要完整的 AI 基礎設施管理平台（監控/調度/運維/預測）',
    
    buildInHouse: {
      approach: '自建軟體團隊',
      upfrontCost: {
        teamBuilding: 'NT$ 80M/年 × 50 人團隊（含薪資/股權/辦公室）',
        technologyStack: 'NT$ 50M（開發工具、測試環境、第三方授權）',
        infrastructure: 'NT$ 30M（開發環境、CI/CD、測試設備）',
        total: 'NT$ 160M（一次性投入）',
      },
      ongoingCost: {
        teamSalary: 'NT$ 80M/年',
        maintenance: 'NT$ 20M/年（系統維運、安全更新）',
        opportunityCost: 'NT$ 100M/年（延誤上市損失）',
        total: 'NT$ 200M/年',
      },
      timeline: '12-18 個月才能上線',
      risk: '技術選型錯誤、人才流失、需求變更導致重來',
      fiveYearTCO: 'NT$ 1.16B',
      outcome: '5 年後擁有完整自主能力，但延誤 18 個月上市時間',
    },

    buyFoxconn: {
      approach: '採購 Foxconn 軟體方案',
      upfrontCost: {
        licensing: 'NT$ 10M（首年授權費）',
        deployment: 'NT$ 5M（部署服務）',
        training: 'NT$ 2M（團隊培訓）',
        total: 'NT$ 17M（一次性投入）',
      },
      ongoingCost: {
        subscription: 'NT$ 50M/年（軟體訂閱 + 支援）',
        customization: 'NT$ 10M/年（客製化需求）',
        total: 'NT$ 60M/年',
      },
      timeline: '2-4 週上線',
      risk: '供應商鎖定、客製化限制',
      fiveYearTCO: 'NT$ 317M',
      outcome: '立即上線，團隊專注在業務差異化功能',
    },

    savings: {
      fiveYearSavings: 'NT$ 843M（-73% TCO）',
      timeToValue: '提前 12-18 個月產生價值',
      keyInsight: '即使考慮供應商成本，採購方案仍比自建節省 73% 成本，且提前 18 個月上市',
    },
  },

  // Strategic Decision Framework
  decisionFramework: {
    headline: '決策框架：什麼情況下應該自建？什麼情況下應該採購？',
    
    buildWhen: [
      '該能力是您的核心競爭優勢（例如：Google 的搜尋演算法、Amazon 的推薦系統）',
      '市場上沒有成熟方案可滿足需求',
      '您有充足時間和資源投入（18-24 個月）',
      '您需要 100% 定制化控制權',
    ],
    
    buyWhen: [
      '該能力是「必要但非差異化」的基礎設施（例如：監控、調度、運維）',
      '市場上有成熟方案，且已驗證可行性',
      '您需要快速上市（<3 個月）',
      '您希望聚焦在業務邏輯而非基礎設施',
    ],

    foxconnPositioning: 'Foxconn 軟體定位在「必要但非差異化」的基礎設施層，讓客戶專注在業務差異化功能',
  },

  // Customer Objection Handling
  objections: [
    {
      objection: '我們有自己的軟體團隊，可以自己開發',
      response: '肯定團隊能力，但強調「能做」不等於「應該做」。用 18 個月和 NT$ 200M/年去開發別人已經成熟的監控和調度功能，是資源錯配。建議將寶貴的工程師資源投入到能直接創造業務價值的差異化功能上。',
      evidence: '某台灣 CSP 客戶曾評估自建，但計算後發現 TCO 是採購的 3.7 倍，且延誤上市 15 個月。最終選擇 Foxconn 方案，將節省下的資源投入到客戶體驗優化，反而創造更大差異化。',
    },
    {
      objection: '我們擔心供應商鎖定（Vendor Lock-in）',
      response: '理解擔憂。Foxconn 採用開放原始碼為底層（K8s、OpenBMC、Prometheus），避免私有協議。同時提供完整的 API 和匯出工具，確保客戶隨時可遷移。我們的目標是「讓您想留下」，不是「讓您不能離開」。',
      evidence: 'Foxconn 軟體棧基於 K8s、OpenBMC 等開放標準，API 完整文件化，支援標準格式匯出。客戶保留完整資料主權。',
    },
    {
      objection: '你們的價格比純硬體方案貴 20-30%',
      response: '正確。但請計算 TCO 而非僅看採購成本。Foxconn 軟體方案帶來：GPU 利用率 +42%、部署時間 -99%、運維人力 -70%、停機時間 -60%。以 100 台 H200 集群為例，3 年 TCO 節省 NT$ 215M，遠高於軟體溢價。',
      evidence: '參考 investment-thesis.js 中的 TCO 比較：Foxconn + Software 3 年 TCO 為 NT$ 1,285M vs. 純硬體方案 NT$ 1,500M，節省 14.3%。',
    },
    {
      objection: '我們需要評估多家供應商，包含 NVIDIA Base Command',
      response: '完全支持多方評估。但請注意：NVIDIA 方案僅支援 NVIDIA GPU，若您未來想引入 AMD 或其他架構，將面臨轉換成本。Foxconn 提供中立的多供應商支援，避免鎖定風險。',
      evidence: 'Foxconn 軟體棧支援 NVIDIA + AMD GPU，統一管理層抽象化底層差異。參考 competitive-landscape.js 中的比較分析。',
    },
  ],

  // Case Study: Customer Who Chose "Buy" Over "Build"
  caseStudy: {
    headline: '客戶案例：台灣某大型 CSP 的決策過程',
    customer: '台灣大型雲端服務提供商（年營收 NT$ 50B+）',
    situation: '2025 年計劃擴建 AI 基礎設施，面臨自建或採購決策',
    
    initialThinking: '公司有 200 人軟體團隊，認為自建可完全掌控，且長期成本較低',
    
    evaluation: {
      buildOption: {
        timeline: '18 個月（含 6 個月需求分析 + 12 個月開發）',
        cost: 'NT$ 180M/年 × 1.5 年 = NT$ 270M（僅計算直接成本）',
        risk: '技術選型風險、人才流失風險、需求變更風險',
      },
      buyOption: {
        timeline: '1 個月（含部署和培訓）',
        cost: 'NT$ 50M/年 × 3 年 = NT$ 150M',
        risk: '供應商依賴、客製化限制',
      },
    },
    
    decision: '選擇 Foxconn 軟體方案，理由：',
    reasons: [
      '提前 17 個月上線，抓住 AI 浪潮',
      'TCO 節省 NT$ 120M+（3 年視窗）',
      '將 20 人軟體團隊重新配置到客戶體驗優化，創造新營收來源',
      '避免技術選型風險（Foxconn 已驗證技術棧）',
    ],
    
    outcome: {
      timeline: '2026 Q1 上線，比自建提前 17 個月',
      utilization: 'GPU 利用率從 45% 提升至 87%',
      cost: '3 年 TCO 節省 NT$ 215M',
      strategic: '將原計劃用於自建軟體的 20 人團隊轉投入客戶服務平台，創造 NT$ 300M/年新增收',
    },
    
    quote: '"如果當初選擇自建，我們現在還在除錯，錯過了整個 AI 爆發期。Foxconn 方案讓我們專注在客戶價值，而非基礎設施。" — CTO, 台灣某大型 CSP',
  },

  // Competitive Response: What Hyperscalers Say
  hyperscalerResponse: {
    headline: '當客戶說「AWS/Azure 也能做到」時，如何回應？',
    
    keyPoints: [
      'Hyperscaler 方案本質是「雲端延伸」，需要將工作負載連回雲端管理，違反主權 AI 原則',
      'Foxconn 方案是「本地優先」，資料和管理都在客戶機房，符合合規要求',
      'Hyperscaler 定價模式是 OPEX（按量計費），長期成本高於 Foxconn 的一次性採購 + 訂閱模式',
      'Foxconn 提供中立性，避免被單一雲廠商鎖定',
    ],
    
    tcoComparison: '以 100 台 H200 集群為例，5 年 TCO：AWS/Azure 約 NT$ 2.1B vs. Foxconn 約 NT$ 1.3B，節省 38%',
  },
};

export default buildVsBuyAnalysis;
