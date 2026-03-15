// Enterprise RAG Appliance - For SMB/Private AI Deployment
// Enhanced 2026-03-16: Added competitive differentiation, quantified metrics, and market positioning
export const enterpriseRagAppliance = [
  {
    title: '私有 AI 知識庫一體機',
    capability: '為企業提供隨插即用的私有 RAG 系統，支援文件匯入、權限治理、向量化、搜尋與問答。預整合 Llama 3.1、Qwen2.5、Mistral 等主流模型，開機即可使用。',
    value: '讓企業資料不上雲，同時享受 AI 帶來的效率提升。符合 GDPR、EU AI Act、台灣個資法等法規要求。',
    metrics: {
      deploymentTime: '2 小時內部署完成',
      timeToValue: '當天使用，當日見效',
      dataResidency: '100% 資料本地儲存，零雲端依賴',
      customerImpact: '合規審查時間從 3 個月縮短至 1 週',
    },
    targetCustomers: [
      '金融業：客戶資料、授信報告、合規文件管理',
      '醫療業：病歷資料、研究文獻、用藥記錄查詢',
      '政府機關：公文處理、法規查詢、民眾服務',
      '製造業：技術文件、維修手冊、品質管理',
    ],
    refs: [
      { name: 'NVIDIA NIM', url: 'https://www.nvidia.com/en-us/ai/' },
      { name: 'HPE Private Cloud AI', url: 'https://www.hpe.com/us/en/private-cloud-ai.html' },
    ],
    competitiveEdge: 'NVIDIA NIM 需自建向量資料庫與應用層，Foxconn 提供端到端一體機方案，包含硬體、軟體、維運完整支援',
  },
  {
    title: '資料匯入與前處理',
    capability: '支援多種文件格式（PDF、Word、Excel、PPT、TXT、HTML），自動清理、分段、標註。內建 OCR 能力，可處理掃描文件與圖片文字。',
    value: '降低企業導入 AI 的門檻，無需專業資料科學家即可使用。',
    metrics: {
      supportedFormats: '15+ 種文件格式',
      processingSpeed: '每 1000 頁文件 <5 分鐘處理完成',
      ocrAccuracy: '98%+ 文字識別準確率',
      customerImpact: '減少 90% 人工資料整理時間',
    },
    technicalDetails: {
      chunking: '智能分段，保留上下文語意',
      embedding: '多語言嵌入模型（中/英/日/韓）',
      deduplication: '自動偵測並移除重複內容',
      qualityCheck: '低品質內容自動標記與過濾',
    },
    refs: [],
    competitiveEdge: '競爭對手多僅支援英文，Foxconn 針對繁中/簡中/英文三語優化，更符合亞太企業需求',
  },
  {
    title: '權限與治理',
    capability: '整合企業既有 AD/LDAP、Okta、Azure AD，提供細粒度權限控管、審計軌跡、合規報告。支援 RBAC（角色權限管理）與 ABAC（屬性權限管理）。',
    value: '確保機密資料僅有授權人員可存取，符合法規要求。',
    metrics: {
      integration: '支援 5+ 種身分驗證系統',
      auditRetention: '7 年完整審計軌跡',
      compliance: '符合 ISO 27001、SOC 2、GDPR 要求',
      customerImpact: '合規審查準備時間從 2 週縮短至 2 天',
    },
    features: {
      accessControl: '文件層級、段落層級、甚至欄位層級權限控制',
      auditLog: '完整記錄誰、何時、存取了什麼內容',
      dataRetention: '可設定自動刪除策略，符合資料最小化原則',
      exportControl: '防止未授權下載、列印、截圖',
    },
    refs: [],
    competitiveEdge: 'NVIDIA 缺乏企業級權限治理，Foxconn 提供金融等級資安合規能力',
  },
  {
    title: '標準化 RAG 流程',
    capability: '提供預設的 RAG 流程模板，企業可根據需求調整，無需從頭設計。包含檢索策略、重排序、答案生成、引用來源標註。',
    value: '加快導入速度，降低客製化成本。',
    metrics: {
      templates: '5+ 種產業模板（金融、醫療、製造、政府、零售）',
      customization: '可視化配置，無需寫程式',
      accuracy: '85%+ 答案準確率（經微調後可達 95%+）',
      customerImpact: '導入時程從 6 個月縮短至 2 週',
    },
    workflow: [
      'Step 1: 選擇產業模板',
      'Step 2: 匯入企業文件',
      'Step 3: 設定權限與治理策略',
      'Step 4: 測試與驗證',
      'Step 5: 上線營運',
    ],
    refs: [],
    competitiveEdge: '提供產業最佳實踐模板，避免客戶從零開始摸索',
  },
  {
    title: '高階加值：標註與微調',
    capability: '對於高價值客戶，提供資料標註、模型微調、領域適應等加值服務。針對特定領域（法律、醫療、工程）優化模型表現。',
    value: '針對特定領域優化，提升 AI 應用的準確性與實用性。',
    metrics: {
      fineTuningAccuracy: '領域特定問題準確率從 85% 提升至 95%+',
      labelingEfficiency: '半自動標註工具，減少 70% 人工標註時間',
      customerImpact: '高價值客戶 ROI 提升 2-3 倍',
    },
    serviceModel: {
      standard: '標準 RAG 流程（標配）',
      advanced: '領域微調 + 客製化整合（加值服務）',
      premium: '專屬模型訓練 + 駐點顧問（高階方案）',
    },
    refs: [],
    competitiveEdge: '避免預設標配導致交付過重，採分層服務模式，符合 SMB 與企業不同需求',
  },
  {
    title: '混合雲部署選項',
    capability: '新增：支援本地部署、私有雲、混合雲三種模式。可選擇性與公有雲整合，實現「本地優先、雲端彈性」的混合架構。',
    value: '滿足不同企業規模與合規需求，提供靈活的部署選項。',
    metrics: {
      deploymentOptions: '本地 / 私有雲 / 混合雲 三種模式',
      scalability: '從單機 8 GPU 到集群 1000+ GPU 彈性擴充',
      hybridSync: '本地上為主，雲端為輔，資料自主可控',
      customerImpact: '可擴及 90% 企業市場（含無法上雲的受監管產業）',
    },
    deploymentModes: {
      onPremise: '完全本地部署，資料不出機房，適合金融、政府',
      privateCloud: '部署於企業私有雲，支援虛擬化與容器化',
      hybrid: '本地上為主，雲端為輔，可選擇性備援或運算爆發',
    },
    refs: [],
    competitiveEdge: 'Hyperscaler 方案強制上雲，Foxconn 尊重客戶資料主權，提供真正混合選項',
  },
];

// RAG Appliance Market Opportunity
export const ragMarketOpportunity = {
  headline: '私有 AI / RAG 一體機市場機會',
  marketSize: {
    global: '2026 年全球企業 AI 軟體市場 US$ 50B，2030 年成長至 US$ 200B（CAGR 40%+）',
    sovereign: '主權 AI 市場 US$ 50B+（IDC 2025）',
    taiwan: '台灣企業 AI 採用率 2026 年達 35%，潛在市場 NT$ 150B+',
  },
  targetSegments: [
    { segment: '金融業', need: '合規 + 資安，無法上雲', willingness: '高', urgency: '高' },
    { segment: '醫療業', need: '病歷隱私 + 研究協作', willingness: '中', urgency: '中' },
    { segment: '政府機關', need: '主權 AI + 資料本地化', willingness: '高', urgency: '高' },
    { segment: '製造業', need: '技術文件 + 維修知識管理', willingness: '中', urgency: '中' },
    { segment: '中小企業', need: '低成本導入 AI', willingness: '低', urgency: '低' },
  ],
  competitiveAdvantage: 'Foxconn 提供「硬體 + 軟體 + 服務」完整方案，競爭對手僅提供單一層級（純軟體或純硬體）',
  pricingStrategy: {
    appliance: 'NT$ 3M-10M（取決於 GPU 規模）',
    software: 'NT$ 500K-2M/年（軟體授權 + 維運）',
    services: 'NT$ 1M-5M（客製化整合與微調）',
  },
};
