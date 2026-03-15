// Customer Segmentation & Prioritization - Which customers to target first
// Added 2026-03-15 by CoCo - Helps leadership understand which battles to fight first
export const customerSegmentation = {
  headline: '客戶分級與優先順序：從哪個市場切入最有效？',
  rationale: '資源有限，必須聚焦在高價值、高成功率、高示範效應的客戶群。以下是分級標準與優先順序：',
  
  segments: [
    {
      tier: 'Tier 1: 標竿 CSP 客戶 (優先級：最高)',
      profile: '已有 100+ 台 AI 伺服器規模，多據點部署，痛點明確',
      examples: '台灣大型電信商、雲端服務提供商、AI 新創獨角獸',
      painPoints: [
        '多據點運維人力成本高（需派人到 2-3 個機房）',
        'GPU 利用率低（<50%），投資回報週期長',
        '故障修復時間長（平均 4-8 小時），影響 SLA',
      ],
      whyTheyNeedUs: 'Remote Ops 可直接解決 70% 現場運維需求，GPU 調度提升利用率至 85%+',
      decisionCriteria: '能否減少運維人力？能否提升 GPU 利用率？',
      salesCycle: '2-3 個月（痛點明確，決策鏈短）',
      dealSize: 'NT$ 5M-15M/年（Remote Ops + GPU 調度）',
      successMetrics: '運維人力減少 70%、GPU 利用率提升至 85%+、故障修復時間<2 小時',
      strategicValue: '建立標竿案例，可對外宣傳，吸引同類客戶',
      priority: 'P0 - 立即投入',
    },
    {
      tier: 'Tier 2: 主權 AI / 政府合規客戶 (優先級：高)',
      profile: '政府、國營事業、金融機構，資料不能出境外',
      examples: '政府機關、公股銀行、醫院、研究機構',
      painPoints: [
        '資料不能上雲但需要 AI 能力',
        '需符合個資法、金管會、ISO 等合規要求',
        '缺乏 AI 技術能力，無法自建',
      ],
      whyTheyNeedUs: 'RAG 一體機提供「交鑰匙」方案，資料不出機房，合規零風險',
      decisionCriteria: '能否保證資料在地化？能否通過合規審查？',
      salesCycle: '4-6 個月（需招標流程、合規審查）',
      dealSize: 'NT$ 10M-30M/案（RAG 一體機 + 部署服務）',
      successMetrics: '通過合規審查、資料 100% 本地化、3 天內完成部署',
      strategicValue: '主權 AI 是 2026-2028 年成長最快的市場（$50B+），建立政績案例',
      priority: 'P0 - 立即投入',
    },
    {
      tier: 'Tier 3: 中型企業 AI 轉型 (優先級：中)',
      profile: '傳產龍頭、製造業、零售業，想導入 AI 但無從下手',
      examples: '電子代工、工具機、紡織、食品大廠',
      painPoints: [
        '想用 AI 但不知道從何開始',
        '擔心資料外洩，不敢用公有雲 AI',
        '缺乏 AI 人才，無法自建團隊',
      ],
      whyTheyNeedUs: 'RAG 一體機提供「AI 就緒」方案，無需懂 AI 即可使用',
      decisionCriteria: '能否快速見效（<1 週）？能否與既有系統整合？',
      salesCycle: '1-2 個月（決策鏈短，但預算有限）',
      dealSize: 'NT$ 2M-8M/案（RAG 一體機標準版）',
      successMetrics: '1 週內上線、員工採用率>60%、查詢準確率>85%',
      strategicValue: '量大，可規模化複製，但需降低交付成本',
      priority: 'P1 - Q3 後啟動',
    },
    {
      tier: 'Tier 4: Hyperscaler / 大型 CSP (優先級：選擇性投入)',
      profile: '跨國雲服務商、大型電信，已有強大軟體團隊',
      examples: 'AWS、Azure、GCP、Meta 等級客戶',
      painPoints: [
        '自建軟體時程長（12-18 個月）',
        '希望聚焦核心差異化功能',
        '多供應商環境需要中立管理平台',
      ],
      whyTheyNeedUs: '加速上市時程（2-4 週 vs. 12-18 個月），聚焦核心業務',
      decisionCriteria: '能否加速上市？能否降低 TCO？',
      salesCycle: '6-12 個月（評估週期長，需高層對高層）',
      dealSize: 'NT$ 50M-200M/年（大規模部署）',
      successMetrics: '上市時程加速 10-14 個月、TCO 降低 10-30%',
      strategicValue: '金額大、影響力大，但難度高、週期長',
      priority: 'P1 - 選擇性投入，需高層支持',
    },
  ],
  
  prioritizationMatrix: {
    headline: '優先順序決策矩阵',
    criteria: [
      { 
        criterion: '痛點明確度', 
        tier1: '極高', 
        tier2: '高', 
        tier3: '中', 
        tier4: '中' 
      },
      { 
        criterion: '決策週期', 
        tier1: '2-3 個月', 
        tier2: '4-6 個月', 
        tier3: '1-2 個月', 
        tier4: '6-12 個月' 
      },
      { 
        criterion: '成交金額', 
        tier1: 'NT$ 5M-15M', 
        tier2: 'NT$ 10M-30M', 
        tier3: 'NT$ 2M-8M', 
        tier4: 'NT$ 50M-200M' 
      },
      { 
        criterion: '示範效應', 
        tier1: '高（同行引用）', 
        tier2: '極高（政府背書）', 
        tier3: '中（量大）', 
        tier4: '極高（國際大廠）' 
      },
      { 
        criterion: '交付難度', 
        tier1: '中', 
        tier2: '高（合規要求）', 
        tier3: '低（標準化）', 
        tier4: '極高（客製化）' 
      },
    ],
    recommendation: '聚焦 Tier 1 + Tier 2，建立標竿案例後，Q3 啟動 Tier 3 規模化，Tier 4 視資源選擇性投入',
  },
};

export default customerSegmentation;
