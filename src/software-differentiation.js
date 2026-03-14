// Software Differentiation & Pain Points Analysis
// For strengthening the argument: "Without software, hardware value cannot be fully amplified"

export const softwareDifferentiation = {
  // Key pain points in AI server deployment that software solves
  painPoints: [
    {
      id: 'pp1',
      problem: 'GPU 閒置率高达 40-60%',
      impact: '企業花數千萬買 GPU，但實際使用率低，投資回報週期長',
      softwareSolution: 'GPU 虛擬化 (MIG/vGPU) + 資源調度平台，實現多租戶共享',
      valueAmplification: '將 GPU 利用率從 40% 提升至 85%，投資回報週期縮短 50%',
    },
    {
      id: 'pp2',
      problem: '跨機房/跨站點管理困難',
      impact: 'CSP 客戶需派人到多個據點維護，運維成本高',
      softwareSolution: '集中式遠端運維平台 (Remote Ops)',
      valueAmplification: '減少 70% 現場支援需求，運維效率提升 3 倍',
    },
    {
      id: 'pp3',
      problem: 'AI 模型部署週期長',
      impact: '從硬體到貨到能跑模型，傳統需要 2-4 週',
      softwareSolution: '預整合 AI 軟體棧 (CUDA/ROCm/TensorRT) + Helm Charts',
      valueAmplification: '交付時間從 2 週縮短至 2 小時，客戶可立即產生營收',
    },
    {
      id: 'pp4',
      problem: '故障診斷依賴廠商支援',
      impact: '停機時間長，影響客戶業務連續性',
      softwareSolution: '預測性維護 + 遠端診斷工具鏈',
      valueAmplification: '故障預警準確率 85%，停機時間減少 60%',
    },
    {
      id: 'pp5',
      problem: '企業資料無法上雲但需要 AI',
      impact: '金融/醫療/政府等敏感產業無法使用公有雲 AI 服務',
      softwareSolution: '私有 AI 知識庫一體機 (RAG Appliance)',
      valueAmplification: '資料不出機房，同時享受 AI 效率，合規零風險',
    },
  ],

  // Competitive differentiation vs. other server vendors
  competitiveAdvantage: [
    {
      category: '韌體/驅動層 (L9-L10)',
      foxconn: '跨平台統一 BMC 架構，支援 Intel/AMD/NVIDIA 混合部署',
      competitors: '多數廠商仍採分開維護，版本碎片化',
      whyItMatters: '降低 50% 韌體維護成本，加速新平台導入時程',
    },
    {
      category: '容器編排層 (L11)',
      foxconn: 'K8s-native 架構，GPU 資源可動態調度',
      competitors: '傳統靜態配置，GPU 固定綁定伺服器',
      whyItMatters: '資源利用率提升 2 倍，支援彈性擴縮容',
    },
    {
      category: 'AI 框架層 (L12)',
      foxconn: '預整合主流 AI 模型 (Llama, Mistral, Qwen) 與 RAG 流程',
      competitors: '仅提供基礎 OS，客戶需自行整合 AI 軟體棧',
      whyItMatters: '客戶可當日部署、當日見效，無需等待數週整合',
    },
    {
      category: '遠端運維',
      foxconn: '完整 Remote Ops 工具鏈 (監控/診斷/預測/修復)',
      competitors: '多數仅提供基礎監控，缺乏主動式維護',
      whyItMatters: 'CSP 客戶可減少 70% 現場人力，集中管理全球機房',
    },
    {
      category: '私有 AI 部署',
      foxconn: 'RAG 一體機，支援權限治理與合規審計',
      competitors: '極少廠商提供端到端私有 AI 解決方案',
      whyItMatters: '填補 SMB/企業市場空白，開創新增收來源',
    },
  ],

  // Value metrics - quantifiable impact of software
  valueMetrics: {
    'GPU 利用率提升': { before: '40-60%', after: '85%+', improvement: '+42%' },
    '部署時間縮短': { before: '2-4 週', after: '2 小時', improvement: '-99%' },
    '運維人力減少': { before: '100%', after: '30%', improvement: '-70%' },
    '停機時間減少': { before: '100%', after: '40%', improvement: '-60%' },
    '投資回報週期': { before: '18 個月', after: '9 個月', improvement: '-50%' },
  },

  // Strategic messaging for leadership
  strategicMessage: {
    headline: '軟體是硬體價值的放大器',
    core: '沒有軟體，GPU 只是昂貴的金屬；有了軟體，才能變成可持續營收的 AI 服務。',
    proofPoints: [
      'L9-L10 確保硬體穩定 (生命線)',
      'L11-L12 創造差異化價值 (營收引擎)',
      'Remote Ops 降低運維成本 (效率提升)',
      'RAG 一體機開創新增收 (市場擴張)',
    ],
    callToAction: '投資軟體部門，不是成本，是讓硬體價值最大化的必要槓桿。',
  },
};

export default softwareDifferentiation;
