// Customer Success Scenarios - Concrete examples that leadership can relate to
// These scenarios illustrate the tangible value of software investment

export const customerSuccessScenarios = [
  {
    scenario: '台灣某金融業私有 AI 部署',
    challenge: '金管會規範下，客戶資料不能上雲，但需要 AI 提升客服效率。傳統方案需 6-8 個月整合，且缺乏權限審計功能。',
    solution: 'RAG 一體機 + 權限治理模組，預整合於 Foxconn 伺服器，出廠即用。',
    outcome: '從 6 個月縮短至 3 週完成部署，通過金管會審計，客服效率提升 40%。',
    whyFoxconn: '單一廠商負責硬體 + 軟體 + 審計合規，避免多廠商推諉責任。'
  },
  {
    scenario: '北美 CSP 客戶全球機房遠端運維',
    challenge: '客戶在 3 大洲 12 個據點部署 AI 集群，每次故障需派工程師到現場，平均停機 8 小時，運維成本高昂。',
    solution: 'Remote Ops 工具鏈 + 預測性維護，7×24 小時集中監控全球節點。',
    outcome: '70% 故障可遠端修復，平均停機時間從 8 小時降至 2 小時，運維人力減少 60%。',
    whyFoxconn: '跨平台 BMC 整合能力，可串接客戶既有監控系統，無需全面更換基礎設施。'
  },
  {
    scenario: '東南亞新創 AI 新貴快速擴展',
    challenge: '新創公司資金有限，需快速部署 AI 算力搶佔市場，但缺乏軟體整合能力與時間。',
    solution: '預整合 AI 軟體棧（CUDA/ROCm/K8s/RAG），出廠前完成驗證，到貨即可上線。',
    outcome: '從硬體到貨到產生營收，從 4 週縮短至 2 天，搶先競爭對手 2 週上線服務。',
    whyFoxconn: 'Turnkey solution - 客戶不需要懂軟體整合，專注在核心業務創新。'
  }
];

// Executive Summary - One-liner for leadership conversations
export const executiveSummary = {
  oneLiner: '軟體不是成本，是讓硬體價值最大化的必要槓桿。沒有軟體，GPU 只是昂貴的金屬；有了軟體，才能變成可持續營收的 AI 服務。',
  elevator30s: '我們的競爭對手不是賣伺服器，是賣「AI 就緒的基礎設施」。客戶要的不是硬體規格，是「多久能開始用 AI 創造營收」。軟體部門的價值，就是把 2-4 週的部署時間壓縮到 2 小時，把 40% 的 GPU 閒置率降到 15% 以下，把 8 小時的故障停機縮短到 2 小時內修復。這不是成本，是讓硬體溢價 15-20% 的關鍵。',
  ask: '投資軟體部門 NT$ 65M/年（人力 + 預算），換取的是每年 NT$ 500M+ 的軟體加值訂單與 60% 客戶回購率。',
  // 2026 Q2 Inflection Point - Why this matters NOW
  whyNow: {
    headline: '2026 Q2：AI 基礎建設的轉折點',
    context: 'GPU 供應正常化，競爭從「誰有 GPU」轉向「誰能用得最好」。軟體是用戶體驗的最後一哩路，也是溢價的關鍵。',
    marketShifts: [
      { trend: 'GPU 供應正常化', implication: 'NVIDIA H200/B200 2026 Q3 供貨穩定，「有 GPU 就能賣」的時代結束', foxconnMove: '以軟體加值提升性價比——同樣的 GPU，我們的客戶可提升 20% 利用率' },
      { trend: '主權 AI 浪潮', implication: 'EU AI Act、中東/東南亞資料主權政策，創造 $50B+ 合規市場', foxconnMove: 'RAG 一體機 + 本地部署 = Sovereign AI-in-a-Box，符合資料不出境要求' },
      { trend: '能源成本危機', implication: 'AI 資料中心用電量 2027 年前將翻倍，電力占 TCO 40%+', foxconnMove: '遠端運維 + 用電優化 = 15-25% 能耗節省，直接轉化為客戶利潤' },
      { trend: 'AMD ROCm 成熟', implication: 'MI350/MI400 + ROCm 6.x 縮小 CUDA 差距，多 GPU 策略首次可行', foxconnMove: '統一管理層支援 NVIDIA+AMD，避免客戶被單一廠商鎖定' }
    ],
    riskOfDelay: '2026-2027 是關鍵窗口期。若不及早佈局，Hyperscaler 與一線 ODM（廣達、緯穎）將率先建立軟體護城河，屆時追趕成本將提高 3-5 倍。'
  }
};

export default { customerSuccessScenarios, executiveSummary };
