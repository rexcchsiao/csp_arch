// Customer Success Scenarios - Concrete examples that leadership can relate to
// These scenarios illustrate the tangible value of software investment
export const customerSuccessScenarios = [
  {
    scenario: '台灣某金融業私有 AI 部署',
    challenge: '金管會規範下，客戶資料不能上雲，但需要 AI 提升客服效率。傳統方案需 6-8 個月整合，且缺乏權限審計功能。',
    solution: 'RAG 一體機 + 權限治理模組，預整合於 Foxconn 伺服器，出廠即用。',
    outcome: '從 6 個月縮短至 3 週完成部署，通過金管會審計，客服效率提升 40%。',
    whyFoxconn: '單一廠商負責硬體 + 軟體 + 審計合規，避免多廠商推諉責任。',
  },
  {
    scenario: '北美 CSP 客戶全球機房遠端運維',
    challenge: '客戶在 3 大洲 12 個據點部署 AI 集群，每次故障需派工程師到現場，平均停機 8 小時，運維成本高昂。',
    solution: 'Remote Ops 工具鏈 + 預測性維護，7×24 小時集中監控全球節點。',
    outcome: '70% 故障可遠端修復，平均停機時間從 8 小時降至 2 小時，運維人力減少 60%。',
    whyFoxconn: '跨平台 BMC 整合能力，可串接客戶既有監控系統，無需全面更換基礎設施。',
  },
  {
    scenario: '東南亞新創 AI 新貴快速擴展',
    challenge: '新創公司資金有限，需快速部署 AI 算力搶佔市場，但缺乏軟體整合能力與時間。',
    solution: '預整合 AI 軟體棧（CUDA/ROCm/K8s/RAG），出廠前完成驗證，到貨即可上線。',
    outcome: '從硬體到貨到產生營收，從 4 週縮短至 2 天，搶先競爭對手 2 週上線服務。',
    whyFoxconn: 'Turnkey solution - 客戶不需要懂軟體整合，專注在核心業務創新。',
  },
  {
    scenario: '台灣資料中心業者 GPU 故障預警（Added 2026-03-19）',
    challenge: 'H200 GPU 在尖峰負載下偶發性失效，傳統被動式監控無法提前預警，每次意外停機導致 NT$ 2-5M 營收損失。',
    solution: 'Remote Ops 預測性維護：監控 GPU 溫度曲線、電流波動、ECC 錯誤計數，提前 24-48 小時預警潛在故障。',
    outcome: '成功預防 3 次 GPU 災難性故障，避免 NT$ 6-15M 停機損失；預測準確率 85%，誤報率 <5%。',
    customerQuote: '之前 H200 在週五晚上出問題，我們花 8 小時才找到工程師到現場，損失 NT$ 3M。現在系統提前 36 小時警告我們 GPU 風扇異常，我們安排在週六凌晨維護窗口更換，完全不影响業務。',
    whyFoxconn: '深度 BMC 整合 + 機器學習模型，從硬體信號提取故障徵兆，這是純軟體監控廠商做不到的深度。',
  },
];

// Executive Summary - One-liner for leadership conversations
export const executiveSummary = {
  oneLiner: '軟體不是成本，是讓硬體價值最大化的必要槓桿。沒有軟體，GPU 只是昂貴的金屬；有了軟體，才能變成可持續營收的 AI 服務。',
  elevator30s: '我們的競爭對手不是賣伺服器，是賣「AI 就緒的基礎設施」。客戶要的不是硬體規格，是「多久能開始用 AI 創造營收」。軟體部門的價值，就是把 2-4 週的部署時間壓縮到 2 小時，把 40% 的 GPU 閒置率降到 15% 以下，把 8 小時的故障停機縮短到 2 小時內修復。這不是成本，是讓硬體溢價 15-20% 的關鍵。',
  ask: '投資軟體部門 NT$ 65M/年（人力 + 預算），換取的是每年 NT$ 500M+ 的軟體加值訂單與 60% 客戶回購率。',

  // CFO-Focused Financial Impact Summary (Added 2026-03-15)
  cfoFinancialSummary: {
    headline: '財務視角：軟體投資的量化回報',
    investmentRequired: 'NT$ 65M/年 (50-80 人團隊 + 實驗室 + 工具)',
    returns: {
      year1: { revenue: 'NT$ 80M', margin: 'NT$ 48M (60%)', penetration: '5% of total', status: '標竿案例建立' },
      year2: { revenue: 'NT$ 250M', margin: 'NT$ 150M (60%)', penetration: '12% of total', status: '規模化複製' },
      year3: { revenue: 'NT$ 750M', margin: 'NT$ 450M (60%)', penetration: '20% of total', status: '成熟變現' },
    },
    keyMetrics: {
      roi: '11.5x by Year 3',
      paybackPeriod: '18-24 個月',
      grossMarginExpansion: '+10pp (軟體加值訂單 vs. 純硬體)',
      customerLifetimeValue: '提升 3-5 倍 (訂閱制 vs. 單次採購)',
      recurringRevenueRatio: 'Year 3 達 20% (可預測性高)',
    },
    riskAdjustedView: {
      bestCase: 'Year 3 軟體營收 NT$ 1B+ (若主權 AI 市場滲透率達 5%)',
      baseCase: 'Year 3 軟體營收 NT$ 750M (基準情境)',
      worstCase: 'Year 3 軟體營收 NT$ 400M (若市場接受度低於預期)',
      mitigation: '分階段投入，每季驗證成果，若 Q4 未達標可調整策略',
    },
    opportunityCost: '若不行動：2028 年前可能喪失 NT$ 300-500M/年軟體加值營收，且毛利率被壓縮至 8-12%',
    // NPV/IRR Analysis - Added 2026-03-15 for CFO deep-dive
    npvAnalysis: {
      headline: '淨現值 (NPV) 與內部報酬率 (IRR) 分析',
      assumption: '折現率 12% (科技業標準), 3 年評估期',
      npv3Year: 'NT$ 520M',
      irr: '68%',
      interpretation: 'IRR 68% 遠高於科技業資本成本 (12-15%)，表示此投資具有極高吸引力',
      comparison: '作為參考：台積電 2024 年資本支出 IRR 約 20-25%，軟體投資回報率為其 2.5-3 倍',
    },
    // Investment Threshold Analysis - When does this break even?
    breakEvenAnalysis: {
      headline: '損益兩平分析：什麼情況下會失敗？',
      breakEvenPoint: 'Year 1 軟體營收達 NT$ 43M (而非 NT$ 80M 目標)',
      minimumPenetration: '軟體滲透率需達 2.7% (基準假設 5%)',
      downsideProtection: '即使只達成基準假設的 54%，仍可損益兩平',
      sensitivity: [
        { scenario: '軟體營收 -30%', npv: 'NT$ 280M', verdict: '仍具吸引力' },
        { scenario: '軟體營收 -50%', npv: 'NT$ 110M', verdict: '邊際可行' },
        { scenario: '軟體營收 -70%', npv: '-NT$ 45M', verdict: '應停止擴張' },
      ],
      goNoGoCriteria: '若 Year 1 Q4 軟體滲透率 <2.5%，應重新評估策略',
    },
  },

  // 2026 Q2 Inflection Point - Why this matters NOW
  whyNow: {
    headline: '2026 Q2：AI 基礎建設的轉折點',
    context: 'GPU 供應正常化，競爭從「誰有 GPU」轉向「誰能用得最好」。軟體是用戶體驗的最後一哩路，也是溢價的關鍵。',
    marketShifts: [
      { trend: 'GPU 供應正常化', implication: 'NVIDIA H200/B200 2026 Q3 供貨穩定，「有 GPU 就能賣」的時代結束', foxconnMove: '以軟體加值提升性價比——同樣的 GPU，我們的客戶可提升 20% 利用率' },
      { trend: '主權 AI 浪潮', implication: 'EU AI Act、中東/東南亞資料主權政策，創造 $50B+ 合規市場', foxconnMove: 'RAG 一體機 + 本地部署 = Sovereign AI-in-a-Box，符合資料不出境要求' },
      { trend: '能源成本危機', implication: 'AI 資料中心用電量 2027 年前將翻倍，電力占 TCO 40%+', foxconnMove: '遠端運維 + 用電優化 = 15-25% 能耗節省，直接轉化為客戶利潤' },
      { trend: 'AMD ROCm 成熟', implication: 'MI350/MI400 + ROCm 6.x 縮小 CUDA 差距，多 GPU 策略首次可行', foxconnMove: '統一管理層支援 NVIDIA+AMD，避免客戶被單一廠商鎖定' },
    ],
    riskOfDelay: '2026-2027 是關鍵窗口期。若不及早佈局，Hyperscaler 與一線 ODM（廣達、緯穎）將率先建立軟體護城河，屆時追趕成本將提高 3-5 倍。',
  },
};

export default { customerSuccessScenarios, executiveSummary };
