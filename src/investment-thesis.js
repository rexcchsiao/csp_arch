// Investment Thesis - Why Software Investment is "Must-Do" not "Nice-to-Do"
// Added 2026-03-15 by CoCo - Strengthens financial and strategic argument for software department
// For CFO/CEO review - One-page summary of the software investment case

export const investmentThesis = {
  headline: '軟體投資論：為什麼這是「必要之舉」而非「可選方案」',
  context: '2026 Q2 是 AI 基礎建設的轉折點：GPU 供應正常化，競爭從「誰有 GPU」轉向「誰能用得最好」。',
  coreArgument: '軟體不是成本中心，是讓硬體溢價 15-20% 的必要槓桿。沒有軟體，硬體只是商品；有了軟體，才能建立持續性競爭優勢。',
  
  // TCO Comparison: 3-Year Total Cost of Ownership (Added 2026-03-15)
  tcoComparison: {
    headline: '三年總持有成本 (TCO) 比較：100 台 H200 集群',
    scenario: '假設客戶採購 100 台 H200 伺服器，為期 3 年的總體成本分析',
    foxconnWithSoftware: {
      provider: 'Foxconn + Software Stack',
      hardwareCost: 'NT$ 800M (一次性)',
      softwareCost: 'NT$ 50M/年 (Remote Ops + RAG + 維運)',
      operationalCost: 'NT$ 120M/年 (電力 + 維運人力)',
      energySavings: '-NT$ 15M/年 (能源優化節省 15%)',
      downtimeReduction: '-NT$ 20M/年 (停機損失減少 60%)',
      total3Year: 'NT$ 1,285M',
      gpuUtilization: '85%+',
      deploymentTime: '2 小時',
      supportModel: '70% 遠端修復',
    },
    competitorHardwareOnly: {
      provider: '傳統 ODM (純硬體)',
      hardwareCost: 'NT$ 750M (一次性，較低單價)',
      softwareCost: 'NT$ 0 (無軟體加值)',
      operationalCost: 'NT$ 150M/年 (較高維運成本)',
      energySavings: 'NT$ 0 (無優化)',
      downtimeReduction: 'NT$ 0 (停機損失全額承擔)',
      total3Year: 'NT$ 1,500M',
      gpuUtilization: '40-60%',
      deploymentTime: '2-4 週',
      supportModel: '需現場支援',
    },
    hyperscalerCloud: {
      provider: 'AWS/Azure (雲端替代方案)',
      hardwareCost: 'NT$ 0 (OPEX 模式)',
      softwareCost: 'NT$ 200M/年 (雲端服務費)',
      operationalCost: 'NT$ 300M/年 (雲端使用費)',
      energySavings: 'NT$ 0 (已含)',
      downtimeReduction: 'NT$ 0 (由雲廠商承擔)',
      total3Year: 'NT$ 2,100M',
      gpuUtilization: '取決於工作負載',
      deploymentTime: '1-2 週',
      supportModel: '雲端託管',
    },
    savings: {
      vsCompetitor: '3 年節省 NT$ 215M (+14.3% TCO 優勢)',
      vsHyperscaler: '3 年節省 NT$ 815M (+63% TCO 優勢)',
      keyInsight: 'Foxconn 硬體單價可能較高，但軟體加值帶來整體 TCO 優勢，且避免雲端鎖定風險',
    },
  },
  
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
  // Cost of Inaction - Concrete 3-year financial scenario (added 2026-03-15)
  costOfInaction: {
    headline: '不投資的代價：三年財務影響分析',
    context: '若選擇不投資軟體，維持現狀的隱含成本與機會損失',
    scenario: {
      year1: {
        year: '2026',
        revenueImpact: 'NT$ 0M（無軟體加值，純硬體定價）',
        marginImpact: '毛利率 10-12%（價格戰壓力）',
        opportunityCost: 'NT$ 15M（錯失 Remote Ops 與 RAG 早期採用者）',
        customerLoss: '2-3 家 CSP 客戶轉單至提供軟體加值的競爭對手',
        talentImpact: '軟體人才流失至新創與 Hyperscaler',
      },
      year2: {
        year: '2027',
        revenueImpact: 'NT$ -50M（營收增長放緩，市場份額下降）',
        marginImpact: '毛利率 8-10%（商品化壓力加劇）',
        opportunityCost: 'NT$ 100M（主權 AI 市場被廣達/緯穎搶佔）',
        customerLoss: '5-8 家企業客戶選擇 Hyperscaler 一站式方案',
        talentImpact: '關鍵技術崗位空缺率 20-30%',
      },
      year3: {
        year: '2028',
        revenueImpact: 'NT$ -200M（營收絕對值下降）',
        marginImpact: '毛利率 5-8%（淪為 commodity 供應商）',
        opportunityCost: 'NT$ 500M+（錯失 NT$ 750M 軟體營收與生態系）',
        customerLoss: '10-15 家標竿客戶流失，包含 2-3 家 CSP 大客戶',
        talentImpact: '軟體團隊解散或整併，技術能力斷層',
      },
      cumulative3Year: {
        totalOpportunityCost: 'NT$ 615M+（直接營收損失）',
        marginErosion: 'NT$ 300M-400M（10pp 毛利率差異 × NT$ 3.5B 年營收）',
        customerChurn: 'NT$ 500M+（客戶流失造成的長期營收損失）',
        talentRebuild: 'NT$ 50M+（重新招募與培訓成本）',
        totalImpact: 'NT$ 1.5B+（3 年累計影響）',
        summary: '不投資軟體的 3 年累計影響約 NT$ 1.5B+，相當於軟體投資成本（NT$ 195M）的 7.7 倍',
      },
    },
    keyInsight: '不投資軟體不是「節省成本」，而是「放棄未來」。NT$ 65M/年的軟體投資，換取的是 NT$ 750M/年的軟體加值營收與 NT$ 1.5B+ 的損失避免。',
    cfoMessage: '從 CFO 角度：軟體投資 NT$ 195M（3 年），避免 NT$ 1.5B+ 的損失，ROI 約 770%。這不是成本，是風險對沖與價值保護。',
  },
};

export default investmentThesis;
