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
  ask: '投資軟體部門 NT$ 65M/年（人力 + 預算），換取的是每年 NT$ 500M+ 的軟體加值訂單與 60% 客戶回購率。'
};

export default { customerSuccessScenarios, executiveSummary };
