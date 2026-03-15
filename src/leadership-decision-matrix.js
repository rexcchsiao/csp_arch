// Leadership Decision Matrix - Executive comparison for quick decision-making
// Added 2026-03-15 by CoCo - Consolidates competitive intelligence into single decision framework
// For C-level executives who need to understand "Why Foxconn software?" in one view

export const leadershipDecisionMatrix = {
  headline: '軟體投資決策矩阵：為什麼是 Foxconn？為什麼是現在？',
  purpose: '協助管理層在 5 分鐘內理解軟體戰略價值與競爭優勢',

  // Side-by-side comparison: Foxconn vs. Key Competitors
  competitiveComparison: {
    headers: {
      dimension: '維度',
      foxconn: 'Foxconn',
      nvidia: 'NVIDIA',
      quanta: '廣達/緯穎',
      hyperscaler: 'AWS/Azure/GCP',
    },
    rows: [
      {
        dimension: 'GPU 支援',
        foxconn: { value: 'NVIDIA + AMD + 多架構', advantage: true, note: '避免單一供應商鎖定' },
        nvidia: { value: '僅 NVIDIA', advantage: false, note: 'CUDA 生態系鎖定' },
        quanta: { value: '主要 NVIDIA', advantage: false, note: '依賴參考架構' },
        hyperscaler: { value: '自研 + NVIDIA', advantage: false, note: '雲綁定' },
      },
      {
        dimension: '部署時間',
        foxconn: { value: '2 小時 -2 天', advantage: true, note: '預整合軟體棧' },
        nvidia: { value: '1-2 週', advantage: false, note: '需客戶自行整合' },
        quanta: { value: '2-4 週', advantage: false, note: '客戶主導整合' },
        hyperscaler: { value: '即時 (雲)', advantage: false, note: '僅限雲內' },
      },
      {
        dimension: '資料主權',
        foxconn: { value: '本地部署/私有雲', advantage: true, note: '符合 EU AI Act/GDPR' },
        nvidia: { value: '混合', advantage: false, note: 'DGX Cloud 需連網' },
        quanta: { value: '依客戶', advantage: false, note: '無內建合規模組' },
        hyperscaler: { value: '區域性', advantage: false, note: '資料仍需上雲' },
      },
      {
        dimension: '遠端運維',
        foxconn: { value: '完整工具鏈 + 預測', advantage: true, note: '70% 故障遠端修復' },
        nvidia: { value: '基礎監控', advantage: false, note: '需額外整合' },
        quanta: { value: '基本 BMC', advantage: false, note: '被動式監控' },
        hyperscaler: { value: '雲內完整', advantage: false, note: '僅限雲內資源' },
      },
      {
        dimension: '毛利率',
        foxconn: { value: '20-25% (含軟體)', advantage: true, note: '軟體加值溢價' },
        nvidia: { value: '60%+ (軟體)', advantage: false, note: '不單賣軟體' },
        quanta: { value: '10-15%', advantage: false, note: '純硬體競爭' },
        hyperscaler: { value: '30-40%', advantage: false, note: '雲服務綁定' },
      },
      {
        dimension: '客戶鎖定',
        foxconn: { value: '低 (開放標準)', advantage: true, note: 'K8s/ROCm/CUDA' },
        nvidia: { value: '高 (CUDA)', advantage: false, note: '生態系鎖定' },
        quanta: { value: '中', advantage: false, note: '依賴供應商' },
        hyperscaler: { value: '極高', advantage: false, note: '雲鎖定' },
      },
      {
        dimension: '合規支援',
        foxconn: { value: '內建模組', advantage: true, note: 'EU AI Act/GDPR/PDPA' },
        nvidia: { value: '需自建行', advantage: false, note: '提供基礎工具' },
        quanta: { value: '無', advantage: false, note: '客戶自行處理' },
        hyperscaler: { value: '區域合規', advantage: false, note: '僅限雲內' },
      },
      {
        dimension: 'TCO (3 年)',
        foxconn: { value: '基準 -20%', advantage: true, note: '效率提升 + 能耗降低' },
        nvidia: { value: '基準 +15%', advantage: false, note: '溢價 + 鎖定成本' },
        quanta: { value: '基準', advantage: false, note: '價格競爭' },
        hyperscaler: { value: '基準 +30%', advantage: false, note: '持續性支出' },
      },
    ],
  },

  // Decision criteria for leadership
  decisionCriteria: [
    {
      criterion: '戰略定位',
      question: '我們想成為什麼樣的供應商？',
      option1: {
        name: '純硬體供應商',
        outcome: '毛利率 10-15%，價格競爭，可替換性高',
        risk: '2027 年前可能被壓縮至 8-12% 毛利率',
      },
      option2: {
        name: '解決方案合作夥伴',
        outcome: '毛利率 20-25%，差異化明顯，戰略合作',
        upside: '軟體營收 Year 3 達 NT$ 750M/年，ROI 11.5 倍',
      },
      recommendation: 'option2',
    },
    {
      criterion: '客戶價值',
      question: '客戶為什麼選擇我們？',
      option1: {
        name: '價格優勢',
        outcome: '短期有效，但無法持續，易被取代',
        risk: '陷入價格戰，侵蝕利潤',
      },
      option2: {
        name: '整體價值 (TCO + 速度)',
        outcome: '客戶提早 2-4 週產生營收，GPU 利用率提升 42%',
        upside: '建立長期合作關係，續約率 85%+',
      },
      recommendation: 'option2',
    },
    {
      criterion: '技術路線',
      question: '如何選擇技術方向？',
      option1: {
        name: '追隨供應商 (NVIDIA/AMD)',
        outcome: '被動回應，缺乏主觀性',
        risk: '技術依賴，議價能力弱',
      },
      option2: {
        name: '中立整合者',
        outcome: '支援多架構，保持技術彈性',
        upside: '避免單一供應商風險，提升議價能力',
      },
      recommendation: 'option2',
    },
    {
      criterion: '投資規模',
      question: '需要多少投資？',
      option1: {
        name: '維持現狀',
        outcome: '無額外投資',
        risk: '機會成本：錯失 NT$ 750M/年軟體市場 (2028)',
      },
      option2: {
        name: 'NT$ 65M/年 (50-80 人團隊)',
        outcome: 'Year 1: NT$ 80M, Year 3: NT$ 750M 軟體營收',
        upside: 'ROI 11.5 倍，毛利率提升 10-15pp',
      },
      recommendation: 'option2',
    },
  ],

  // Risk-reward analysis
  riskReward: {
    invest: {
      upside: [
        'Year 3 年軟體營收 NT$ 750M，毛利率 20-25%',
        '客戶續約率 85%+，建立經常性收入',
        '避免淪為 commodity 供應商',
        '吸引頂尖軟體人才加入',
        '建立技術護城河與定價權',
      ],
      downside: [
        'NT$ 65M/年投資 (約佔營收 2-3%)',
        '人才招募風險',
        '市場接受度不確定性',
      ],
      netAssessment: '上行空間遠大於下行風險，ROI 11.5 倍',
    },
    notInvest: {
      upside: [
        '維持現狀，無額外投資',
        '專注核心硬體本業',
      ],
      downside: [
        '2027 年前毛利率被壓縮至 8-12%',
        '客戶被 Hyperscaler 一站式方案吸引',
        '無法參與 AI 價值鏈高毛利環節 (軟體 60-80% 毛利)',
        '技術依賴風險增加',
        '人才吸引力下降',
      ],
      netAssessment: '短期節省成本，長期侵蝕競爭力',
    },
  },

  // Executive summary - The one-pager
  executiveSummary: {
    problem: '客戶花數千萬買 GPU，但 40-60% 閒置，部署花 2-4 週，故障等 8 小時修復。',
    solution: 'Foxconn 軟體讓 GPU 利用率從 40% 提升至 85%，部署從 2 週縮短至 2 小時，70% 故障遠端修復。',
    impact: '同樣的硬體，客戶用我們的軟體，投資回報週期縮短 50%，毛利率提升 10-15 個百分點。',
    ask: '投資 NT$ 65M/年建立 50-80 人軟體團隊，換取 Year 3 每年 NT$ 750M 軟體加值營收與 20-25% 毛利率。',
    timeline: '2026 Q2 組織設計 → Q3 團隊招募 50% → Q4 首個標竿案例上線 → 2027 規模化複製',
    riskOfDelay: '2026-2027 是關鍵窗口期。若不及早佈局，Hyperscaler 與一線 ODM 將率先建立軟體護城河，追趕成本提高 3-5 倍。',
  },

  // Call to action for leadership meeting
  callToAction: {
    headline: '給管理層的行動呼籲',
    points: [
      {
        action: '批准軟體產品線組織設計',
        timeline: '2026 Q2 前',
        owner: '人資 + 技術主管',
        status: '待決策',
      },
      {
        action: '啟動首波招募 (15-20 人)',
        timeline: '2026 Q2-Q3',
        owner: '人資 + 技術主管',
        status: '待預算批准',
      },
      {
        action: '建置 AI 驗證實驗實',
        timeline: '2026 Q2 前',
        owner: '技術團隊',
        status: '待預算批准',
      },
      {
        action: '與 2-3 家 CSP 客戶簽訂 MOU',
        timeline: '2026 Q3 前',
        owner: '銷售 + 產品團隊',
        status: '進行中',
      },
    ],
  },
};

export default leadershipDecisionMatrix;
