// Customer Success Scenarios - Concrete examples that leadership can relate to
// These scenarios illustrate the tangible value of software investment

// Day-in-the-Life Comparison: 3 AM GPU Failure (Added 2026-03-27)
// This visceral scenario shows board members exactly what they're buying
export const dayInTheLifeComparison = {
  headline: '凌晨 3 點的 GPU 故障：有 Foxconn 軟體 vs. 沒有軟體的差別',
  subtitle: '同樣是硬體故障，軟體決定了這是「小插曲」還是「災難」',
  scenario: {
    time: '週五 凌晨 03:17',
    location: '台灣某資料中心，100 台 H200 集群',
    trigger: 'GPU #47 溫度異常飆升至 92°C，ECC 錯誤計數暴增'
  },
  withoutFoxconn: {
    title: '沒有 Foxconn Remote Ops：8 小時的災難',
    timeline: [
      { time: '03:17', event: 'GPU 過熱，系統崩潰', actor: '硬體', impact: '10% 工作負載中斷' },
      { time: '03:17', event: '基礎監控發出 alert', actor: '系統', impact: '但無人值守，alert 被忽略' },
      { time: '06:00', event: '早班工程師發現異常', actor: '運維團隊', impact: '已延誤 2.7 小時' },
      { time: '06:15', event: '遠端登入檢查，無法確定原因', actor: '工程師 A', impact: '缺乏深度診斷工具' },
      { time: '06:45', event: '升級為嚴重事件，通知主管', actor: '工程師 A', impact: '影響範圍擴大到 15% 工作負載' },
      { time: '07:30', event: '決定派工程師到現場', actor: '運維主管', impact: '工程師從家中出發，需 1.5 小時車程' },
      { time: '09:00', event: '工程師抵達現場', actor: '工程師 B', impact: '已停機 5.7 小時' },
      { time: '09:30', event: '更換 GPU，重新啟動集群', actor: '工程師 B', impact: '總停機時間：6.2 小時' },
      { time: '10:00', event: '恢復正常運作', actor: '系統', impact: '損失：NT$ 3-5M 營收 + 客戶信任' }
    ],
    outcome: {
      downtime: '6.2 小時',
      revenueLoss: 'NT$ 3-5M',
      customerImpact: 'SLA violation, 客戶投訴',
      teamImpact: '緊急加班，士氣低落',
      rootCause: '事後諸葛：風扇異常 3 天前就有徵兆，但沒有預警'
    }
  },
  withFoxconn: {
    title: '有 Foxconn Remote Ops：2 小時的主動處置',
    timeline: [
      { time: '前一天 14:00', event: '預測性維護系統偵測到 GPU #47 風扇轉速異常', actor: 'Foxconn Remote Ops', impact: '發出預警通知' },
      { time: '前一天 14:15', event: '系統自動生成維修工單，建議 48 小時內更換', actor: 'Foxconn Remote Ops', impact: '運維團隊排入維護窗口' },
      { time: '前一天 16:00', event: '運維主管確認維修計劃', actor: '客戶', impact: '安排在次日凌晨 2:00-4:00 維護窗口' },
      { time: '週五 02:00', event: '系統自動進入維護模式，遷移 workloads', actor: 'Foxconn Remote Ops', impact: '業務零中斷' },
      { time: '02:15', event: '遠端診斷確認需更換風扇模組', actor: 'Foxconn Remote Ops', impact: '準備備品' },
      { time: '02:30', event: '現場工程師更換風扇（或遠端指導客戶人員）', actor: '客戶 + Foxconn', impact: '30 分鐘完成' },
      { time: '03:00', event: '系統驗證正常，恢復全負載運作', actor: 'Foxconn Remote Ops', impact: '業務零中斷' },
      { time: '03:15', event: '自動生成維修報告與證據包', actor: 'Foxconn Remote Ops', impact: '合規存證完成' }
    ],
    outcome: {
      downtime: '0 分鐘（計劃性維護）',
      revenueLoss: 'NT$ 0',
      customerImpact: 'SLA 達標，客戶滿意度提升',
      teamImpact: '計劃內工作，團隊士氣穩定',
      rootCause: '提前 36 小時預警，從容處置'
    }
  },
  boardMessage: '這就是軟體的價值：把「6 小時災難」變成「30 分鐘計劃維護」。客戶願意為此付費，不是因為功能清單，是因為他們買的是「不用在凌晨 3 點接緊急電話」的安心。',
  financialImpact: {
    withoutSoftware: 'NT$ 3-5M / 次 × 12 次/年 = NT$ 36-60M/年 損失',
    withSoftware: 'NT$ 5M/年 Remote Ops 訂閱費',
    roi: '每投入 NT$ 1，避免 NT$ 7-12 損失 + 客戶流失風險',
    intangible: '客戶信任、團隊士氣、品牌聲譽'
  }
};

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

// Customer Adoption Pathway - Typical Journey from Evaluation to Scale // Added 2026-03-20 by CoCo - Reduces perceived risk by making the path concrete export const customerAdoptionPathway = { headline: 'Customer Adoption Pathway: From Evaluation to Scale', purpose: '典型客戶從評估到規模化部署的完整路徑，幫助潛在客戶了解每一步的時間、投入與產出', stages: [ { stage: 1, name: '評估期 (Evaluation)', duration: '2-4 週', description: '技術驗證與商業論證', activities: ['初步技術交流：了解客戶痛點（GPU 利用率低、部署延遲、運維成本高）', 'TCO 分析：量化當前痛點的財務影響（例如：NT$ 2-5M/次停機損失）', 'Remote Ops 演示：展示監控、診斷、預測性維護功能', 'RAG 一體機 POC：導入客戶真實資料，驗證權限治理與問答準確性', '參考客戶拜訪：安排與已部署客戶交流（簽署 NDA 後）'], deliverables: 'TCO 分析報告、POC 驗證報告、初步報價單', decisionMakers: 'CTO、IT 基礎設施負責人、財務長', successCriteria: '技術可行性確認、TCO 改善 20%+、高層支持', riskMitigation: '提供 POC 環境（可遠端或 on-premise）、不滿意無條件終止' }, { stage: 2, name: '導入期 (Pilot Deployment)', duration: '4-8 週', description: '小規模試點，驗證實際效益', activities: ['環境準備：安裝 Remote Ops 平台、整合既有監控系統（Prometheus/Grafana 等）', '資料接入：接入 10-20 台伺服器進行試點、設定告警閾值與通知流程', '人員培訓：維運團隊教育訓練（遠端診斷、故障排除、報表解讀）', 'RAG 部署：若採購 RAG 一體機，進行文件導入、權限設定、向量索引建立', '上線驗證：確認所有功能正常、效能基準測試、驗收測試'], deliverables: '上線報告、效能基準報告、運維 SOP 文件、驗收確認單', decisionMakers: '運維總監、資訊長、採購主管', successCriteria: 'GPU 利用率提升 20%+、部署時間縮短 50%+、遠端診斷覆盖率 70%+', riskMitigation: '並行運行（新舊系統並存 2-4 週）、快速回滾機制、7×24 小時技術支援' }, { stage: 3, name: '擴展期 (Scale-Up)', duration: '8-16 週', description: '從試點擴展到全面部署', activities: ['規模擴展：從 10-20 台擴展到 100-500 台伺服器', '多據點部署：若為跨國企業，擴展到其他資料中心', '深度整合：與既有 ITSM 系統（ServiceNow、Jira）串接', '自動化運維：建立自動化腳本、排程維護、自動升級流程', '進階功能啟用：預測性維護、能源優化、合規審計報告'], deliverables: '擴展部署報告、自動化腳本庫、整合驗證報告、季度營運報告', decisionMakers: '營運長、財務長、合長', successCriteria: '遠端修復率 70%+、停機時間減少 60%+、能源成本降低 15%+', riskMitigation: '分階段擴展（每批 50-100 台）、每週營運檢討、即時異常回報' }, { stage: 4, name: '成熟期 (Maturity)', duration: '持續運營', description: '優化與持續價值創造', activities: ['季度營運審查：檢視 KPI 達成率、識別改進機會', '軟體更新：定期功能升級、安全補丁、效能優化', '最佳實踐分享：跨據點經驗交流、案例庫建立', '擴展應用：導入新場景（如 AI 客服、預測性維護擴展到其他設備）', '續約與擴展：討論合約續約、增加模組或伺服器規模'], deliverables: '季度營運報告、年度 TCO 節省報告、續約提案', decisionMakers: '董事會、策略規劃委員會', successCriteria: '年度 TCO 節省 20%+、客戶滿意度 90%+、續約率 85%+', riskMitigation: '長期支援合約、定期高層對談、持續創新功能' } ], // Typical Timeline Summary timelineSummary: { totalDuration: '4-6 個月達到全面部署', keyMilestones: [ '第 1 個月：完成 POC 與 TCO 分析', '第 2 個月：完成試點部署（10-20 台）', '第 3-4 個月：擴展到 100-500 台', '第 5-6 個月：全面運營、季度審查' ], accelerationOptions: [ '快速通關方案：若客戶已有 K8s 基礎建設，可跳過部分前置作業，縮短 30-50% 時間', '標準化配置：採用預設配置模板，減少客製化時間', '平行作業：硬體交付與軟體配置並行進行' ] }, // Risk Reduction Mechanisms riskReduction: { headline: '降低採用風險的機制', mechanisms: [ { mechanism: '分階段付款', description: '依部署進度付款（簽約 30%、上線 40%、驗收 30%），降低客戶現金流壓力' }, { mechanism: '效能保證條款', description: '若未達成約定的 KPI 改善目標（如 GPU 利用率提升 20%），提供費用減免或延長支援' }, { mechanism: '無條件終止條款', description: 'POC 階段若不滿意，可無條件終止，已支付費用可抵扣未來採購' }, { mechanism: '參考客戶擔保', description: '安排與同行業已部署客戶交流，真實案例背書' }, { mechanism: '技術轉移承諾', description: '提供完整文件與培訓，確保客戶團隊能獨立運營，避免供應商鎖定疑慮' } ] }, // Comparison: Foxconn vs. Traditional Approach comparison: { headline: 'Foxconn 軟體導入 vs. 傳統自建', foxconn: { deploymentTime: '2-4 週（預整合方案）', timeToValue: '2 天開始產生營收', upfrontInvestment: 'NT$ 5-10M（試點方案）', teamRequired: '2-3 人（維運團隊）', risk: '低（分階段驗證、可回滾）' }, traditionalBuild: { deploymentTime: '6-12 個月（自建軟體團隊）', timeToValue: '12-18 個月', upfrontInvestment: 'NT$ 50-100M（30-50 人團隊）', teamRequired: '30-50 人（需自行招募）', risk: '高（技術不確定性、人才難尋）' }, advantage: 'Foxconn 方案在時間、成本、風險三個維度均有 5-10 倍優勢' } }; // Customer Testimonial Template - Board-Ready Quote Generator (Added 2026-03-22 by CoCo) // Purpose: Enable leadership to quickly generate credible, quantified customer testimonials for board presentations // Usage: Fill in the bracketed values with actual customer data; use in executive summaries and investor decks export const customerTestimonialTemplate = { headline: '客戶證詞模板：快速生成董事會等級說服力', context: '董事會與投資人最常問：「誰實際用過？成果如何？」此模板提供標準化格式，確保每個案例都有量化數據、可驗證成果、與具體引用。', template: { customerProfile: { industry: '[產業別：金融業 / 雲端服務提供商 / 製造業 / 醫療]', companySize: '[公司規模：500-2000 名員工 / 年營收 NT$ 10B+ / 資料中心規模 10MW+]', deployment: '[部署規模：500 GPU / 12 個資料中心 / 跨 3 大洲]', challenge: '[痛點描述：例如「GPU 閒置率 40-60%，ROI 達 36 個月無法達成董事會要求」]', decisionCriteria: '為什麼選擇 Foxconn 軟體：[關鍵決策因素：例如「單一廠商問責、2 小時上線、主權 AI 合規」]', }, quantifiedOutcomes: { metric1: { name: 'GPU 利用率', before: '40-60%', after: '85%+', improvement: '+42%', businessImpact: '同样 100 台伺服器，產出提升 42%，延後 NT$ 50M 擴充預算' }, metric2: { name: '部署時間', before: '2-4 週', after: '2 小時', improvement: '-99%', businessImpact: '提前 22 天產生營收，以 AI 服務月營收 NT$ 5M 計算，增加 NT$ 3.7M 收入' }, metric3: { name: '故障修復時間', before: '8 小時', after: '2 小時', improvement: '-75%', businessImpact: '避免 NT$ 2-5M/次停機損失，一年節省 NT$ 20M+' }, metric4: { name: '運維人力', before: '100% 現場', after: '70% 遠端', improvement: '-70%', businessImpact: '節省差旅與人力成本 NT$ 15M/年' } }, customerQuote: { speaker: '[職稱：CTO / VP Infrastructure / Head of AI Platform]', company: '[公司名稱]', quote: '在導入 Foxconn Remote Ops 之前，我們面臨 [具體痛點，例如：GPU 閒置率 40%、每次故障需 8 小時現場修復]。導入後，我們實現了 [量化成果，例如：利用率 85%、70% 故障遠端修復]。最重要的是，[質性收益，例如：Foxconn 單一窗口問責，讓我們不再需要協調多個廠商]。', attribution: '[可公開引用 / 僅供董事會參考 / 需簽署 NDA]' }, financialImpact: { investment: 'Foxconn 軟體授權：NT$ [X]M/年', savings: '運維成本節省：NT$ [Y]M/年', revenueGain: '提前上線營收：NT$ [Z]M', roi: '投資回報率：[A] 個月回收，3 年 ROI [B]x', paybackPeriod: '投資回收期：[C] 個月' }, whyFoxconn: { differentiator1: '單一廠商問責：硬體 + 軟體 + 運維一次解決，不再需要協調多個廠商', differentiator2: '深度整合能力：BMC 層級監控 + K8s 編排，純軟體廠商做不到', differentiator3: '主權 AI 合規：本地部署、資料不出境，符合 [法規範疇] 要求', differentiator4: '快速部署：2 小時上線 vs. 競爭對手 2-4 週，提前產生營收' } }, usage: { boardPresentation: '選擇 1-2 個最具代表性的客戶，使用此模板生成 1 頁式成功案例', investorDeck: '量化數據 + 客戶引用，增強可信度', salesEnablement: '提供給潛在客戶作為參考案例，加速決策流程' } }; export default { customerSuccessScenarios, executiveSummary, customerAdoptionPathway, customerTestimonialTemplate };
