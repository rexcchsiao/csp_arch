// Investment Thesis - Why Software Investment is "Must-Do" not "Nice-to-Do"
// Added 2026-03-15 by CoCo - Strengthens financial and strategic argument for software department
// For CFO/CEO review - One-page summary of the software investment case

export const investmentThesis = {
  headline: '軟體投資論：為什麼這是「必要之舉」而非「可選方案」',
  context: '2026 Q2 是 AI 基礎建設的轉折點：GPU 供應正常化，競爭從「誰有 GPU」轉向「誰能用得最好」。',
  coreArgument: '軟體不是成本中心，是讓硬體溢價 15-20% 的必要槓桿。沒有軟體，硬體只是商品；有了軟體，才能建立持續性競爭優勢。',
  
  financialLogic: {
    problem: '純硬體訂單毛利率 10-15%，且面臨價格戰壓力，2027 年前可能降至 8-12%',
    solution: '軟體加值訂單毛利率 20-25%，且客戶續約率 85%+，形成經常性收入',
    math: '以年營收 NT$ 3.5B 計，10pp 毛利率提升 = NT$ 350M/年額外毛利，遠超軟體團隊 NT$ 65M/年成本',
    conclusion: '每投資 NT$ 1 在軟體，換取 NT$ 5-6 的毛利增長，ROI 約 500-600%',
  },
  
  strategicLogic: {
    customerLockIn: '軟體建立轉換成本：客戶已導入資料、設定權限、建立審計軌跡，更換供應商等於丟棄沉沒成本',
    pricingPower: '軟體加值讓報價從「硬體規格比較」轉向「整體 TCO 比較」，避免價格戰',
    talentAttraction: '頂尖軟體人才不願做 commodity 開發，需要技術挑戰與產品所有權',
    ecosystemBuilding: '軟體平台吸引合作夥伴（ISV、SI、顧問），形成生態系效應',
  },
  
  riskMitigation: {
    technical: '採 70/30 法則：70% 投入通用層（K8s/Linux），30% 深入平台專項，降低單一廠商依賴',
    market: '聚焦既有 CSP 客戶，降低市場開發風險，從現有客戶需求出發',
    execution: '分階段投入：Q2 組織設計 → Q3 團隊組建 → Q4 首案上線 → 2027 規模化',
    competitive: '先發優勢：2026-2027 是窗口期，落後者追趕成本提高 3-5 倍',
  },
  
  roiBreakdown: {
    investment: 'NT$ 65M/年（50-80 人團隊 + 實驗室 + 合規認證）',
    year1Return: 'NT$ 80M（5% of revenue, 建立標竿案例）',
    year2Return: 'NT$ 250M（12% of revenue, 規模化複製）',
    year3Return: 'NT$ 750M（20% of revenue, 成熟變現）',
    cumulative3Year: 'NT$ 1.08B total software revenue',
    netGain: 'NT$ 885M net gain over 3 years vs. investment of NT$ 195M',
    roiMultiple: '11.5x ROI by Year 3',
    strategicValue: '避免淪為 commodity 供應商，保住 10-15pp 毛利率溢價，對應每年 NT$ 150M-300M 毛利保護',
    paybackPeriod: '18-24 months to break-even',
  },
  
  decisionCriteria: '若認同「AI 基礎建設競爭將從硬體轉向軟體」，則應立即投資；若認為「硬體規格仍是唯一差異化」，則可延遲但需承擔商品化風險',
  finalAsk: '批准 NT$ 65M/年預算，組建 50-80 人軟體團隊，2026 Q2 啟動，2027 Q4 前達成 NT$ 750M/年軟體加值營收',
};

export default investmentThesis;
