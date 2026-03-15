// Software Roadmap & Quick Wins - Actionable timeline and immediate opportunities
// For strengthening the argument: "Here's exactly what we'll deliver and when"
// Last updated: 2026-03-15 - CoCo

export const softwareRoadmap = {
  headline: '軟體發展路線圖：從現在到 2027 年的具體里程碑',
  philosophy: '採「小步快跑」策略：每季交付可驗證成果，快速累積動能與客戶反饋',
  // Strategic context: Why 2026 is the inflection point
  strategicContext: {
    headline: '為什麼 2026 是軟體投資的關鍵轉折點？',
    marketShifts: [
      {
        trend: 'GPU 供應正常化',
        timing: '2026 Q2-Q3',
        impact: 'H200/B200 供應滿足需求，競爭從「誰有 GPU」轉向「誰能用得最好」',
        foxconnMove: '以軟體作為差異化武器，同樣的 GPU，我們的客戶產出高 20-30%'
      },
      {
        trend: '主權 AI 法規生效',
        timing: '2026 年 2 月 EU AI Act 全面生效',
        impact: '歐盟、中東、東南亞資料主權要求創造 $50B+ 合規市場',
        foxconnMove: 'Sovereign AI-in-a-Box 方案，一站式符合 GDPR/EU AI Act/PDPA 要求'
      },
      {
        trend: '能源成本危機',
        timing: '2026-2027 資料中心用電量翻倍',
        impact: '電力成本占 TCO 40%+，PUE 從環保議題轉為競爭力指標',
        foxconnMove: '能源優化軟體棧，降低 15-25% 散熱能耗，PUE 從 1.6 降至 1.4'
      },
      {
        trend: 'Hyperscaler 垂直整合壓力',
        timing: 'AWS/Azure/GCP 加強一站式 AI 基礎建設',
        impact: 'CSP 客戶面臨被鎖定風險，需要中立替代方案',
        foxconnMove: '提供中立、多供應商支援的軟體層，避免客戶被單一雲廠商鎖定'
      }
    ],
    windowOfOpportunity: '2026-2027 是關鍵 18 個月窗口期。若不及早佈局，Hyperscaler 與一線 ODM 將率先建立軟體護城河，屆時追趕成本將提高 3-5 倍。'
  },
  
  // Phase 1: Foundation (2026 Q2-Q3)
  phase1: {
    name: '第一階段：基礎建設期',
    timeline: '2026 Q2-Q3 (6 個月)',
    theme: '建立核心能力，交付首個標竿案例',
    objectives: [
      '完成組織設計與關鍵人才招募',
      '建立 AI 工作負載驗證實驗實',
      '交付首個 Remote Ops 標竿案例',
      '完成 RAG 一體機 MVP'
    ],
    deliverables: [
      {
        item: '組織與團隊',
        details: [
          '完成軟體產品線組織設計 (Q2)',
          '招募 L9-L10 韌體團隊 5-8 人 (Q2)',
          '招募 L11-L12 編排與應用團隊 10-15 人 (Q3)',
          '任命軟體產品負責人 (Product Owner) (Q2)'
        ],
        successMetric: '團隊規模達 20-25 人，具備完整 L9-L12 能力'
      },
      {
        item: '驗證實驗實',
        details: [
          '建置 H100/H200 測試環境 (Q2)',
          '建立標準化測試流程 (Llama 3, Qwen, Mistral) (Q3)',
          '完成首輪效能基準測試 (Q3)'
        ],
        successMetric: '可獨立驗證主流 AI 模型於 Foxconn 硬體之效能'
      },
      {
        item: 'Remote Ops MVP',
        details: [
          '完成基礎監控儀表板 (Q2)',
          '實作遠端診斷功能 (Q3)',
          '交付首個 CSP 客戶試點 (Q3)'
        ],
        successMetric: '1 個標竿客戶，70% 遠端診斷覆蓋率'
      },
      {
        item: 'RAG 一體機 MVP',
        details: [
          '完成基礎 RAG 流程整合 (Q2)',
          '實作權限治理模組 (Q3)',
          '交付首個企業客戶試點 (Q3)'
        ],
        successMetric: '1 個標竿客戶，3 週內完成部署'
      }
    ],
    investment: 'NT$ 30M (團隊組建 + 實驗室建置)',
    risk: '人才招募延遲、技術選型失誤',
    mitigation: '採用 70/30 法則 (70% 通用技術 + 30% 平台專項)，降低技術風險'
  },

  // Phase 2: Scaling (2026 Q4 - 2027 Q2)
  phase2: {
    name: '第二階段：規模化期',
    timeline: '2026 Q4 - 2027 Q2 (9 個月)',
    theme: '複製成功模式，擴大客戶基礎',
    objectives: [
      'Remote Ops 擴展至 5+ 客戶',
      'RAG 一體機標準產品化',
      '建立軟體訂閱制商業模式',
      '完成首個主權 AI 案例'
    ],
    deliverables: [
      {
        item: 'Remote Ops 產品化',
        details: [
          '標準化部署流程 (Q4 2026)',
          '建立 7×24 運維支援團隊 (Q1 2027)',
          '擴展至 5+ 客戶 (Q2 2027)'
        ],
        successMetric: 'NT$ 50M 年度經常性收入 (ARR)'
      },
      {
        item: 'RAG 一體機產品線',
        details: [
          '標準化產品規格 (S/M/L 三種規模) (Q4 2026)',
          '建立合作夥伴交付網絡 (Q1 2027)',
          '完成 3-5 個產業別範本 (Q2 2027)'
        ],
        successMetric: 'NT$ 100M 年度訂單，交付週期<4 週'
      },
      {
        item: '商業模式轉型',
        details: [
          '建立軟體訂閱制定價 (Q4 2026)',
          '實施銷售團隊軟體激勵方案 (Q1 2027)',
          '達成 15% 軟體附加率 (Q2 2027)'
        ],
        successMetric: '軟體佔整體訂單 15%，毛利率提升至 18-20%'
      },
      {
        item: '主權 AI 突破',
        details: [
          '完成 EU AI Act 合規驗證 (Q1 2027)',
          '交付首個主權 AI 案例 (Q2 2027)'
        ],
        successMetric: '1 個標竿案例，建立可複製模式'
      }
    ],
    investment: 'NT$ 50M/年 (團隊擴張 + 市場推廣)',
    risk: '市場接受度低、競爭對手跟進',
    mitigation: '聚焦既有 CSP 客戶，發揮供應鏈優勢建立進入門檻'
  },

  // Phase 3: Maturity (2027 Q3 - 2027 Q4)
  phase3: {
    name: '第三階段：成熟變現期',
    timeline: '2027 Q3-Q4 (6 個月)',
    theme: '建立生態系，實現可持續增長',
    objectives: [
      '軟體營收佔比達 20%',
      '建立合作夥伴生態系',
      '實現 85%+ 客戶續約率',
      '評估軟體部門獨立營運可行性'
    ],
    deliverables: [
      {
        item: '營收里程碑',
        details: [
          '年度軟體營收 NT$ 750M',
          '軟體服務毛利率 50-60%',
          '客戶續約率 85%+'
        ],
        successMetric: '軟體成為可自給自足之事業單位'
      },
      {
        item: '生態系建立',
        details: [
          '發展 5-10 家合作夥伴 (SI/ISV/顧問)',
          '建立開發者社群與文件體系',
          '舉辦首屆 Foxconn AI Infra Day'
        ],
        successMetric: '30% 訂單來自合作夥伴推薦'
      },
      {
        item: '產品線擴展',
        details: [
          '評估 AI 訓練管理平台',
          '評估多雲管理工具',
          '評估邊緣 AI 部署方案'
        ],
        successMetric: '完成 1-2 項新產品立項'
      }
    ],
    investment: 'NT$ 65M/年 (維持性投資)',
    risk: '技術迭代風險、關鍵人才流失',
    mitigation: '建立股權激勵與產品分紅機制，保持技術敏銳度'
  },

  // Quick Win Opportunities - Immediate actions with high impact
  quickWins: {
    headline: '快速勝利機會：30-60-90 天即可見效的行動',
    philosophy: '在建立長期能力同時，優先交付「看得見」的短期成果，建立團隊與客戶信心',
    
    wins: [
      {
        title: '30 天：Remote Ops 監控儀表板 MVP',
        timeline: '2026 Q2 前 30 天',
        action: '針對既有 CSP 客戶，部署基礎版監控儀表板 (GPU 使用率、溫度、功耗)',
        effort: '2-3 人，4 週',
        impact: '讓客戶「看得見」軟體價值，建立信任基礎',
        metric: '1 個試點客戶，7×24 監控覆蓋率 100%',
        investment: 'NT$ 1-2M',
        why: '監控是 Remote Ops 的基礎功能，技術成熟、風險低、見效快'
      },
      {
        title: '60 天：RAG 一體機概念驗證',
        timeline: '2026 Q2 前 60 天',
        action: '選擇 1 家友善客戶，部署 RAG 概念驗證環境 (Llama 3 + 基礎 RAG)',
        effort: '3-4 人，8 週',
        impact: '驗證 RAG 流程可行性，累積實際部署經驗',
        metric: '1 個 POC 案例，完成端到端流程驗證',
        investment: 'NT$ 2-3M',
        why: 'RAG 是 SMB 市場切入點，POC 成功案例是最佳銷售工具'
      },
      {
        title: '90 天：首個聯合解決方案發布',
        timeline: '2026 Q2 前 90 天',
        action: '與標竿客戶共同發布 Remote Ops 或 RAG 解決方案新聞稿',
        effort: '1-2 人 (市場 + 技術)',
        impact: '建立市場聲量，吸引潛在客戶關注',
        metric: '1 份新聞稿，3+ 媒體報導，10+ 潛在客戶詢問',
        investment: 'NT$ 0.5-1M (市場費用)',
        why: '第三方背書勝過千言萬語，成功案例是最佳信任狀'
      },
      {
        title: '90 天：標準化部署流程文件',
        timeline: '2026 Q2 前 90 天',
        action: '建立標準化作業程序 (SOP) 與部署檢查清單',
        effort: '1-2 人，兼職',
        impact: '提升交付效率，降低人為失誤',
        metric: '部署時間從 4 週縮短至 2 週，人為失誤減少 50%',
        investment: 'NT$ 0.5M (人力成本)',
        why: '標準化是規模化的前提，也是知識沉澱的關鍵'
      },
      {
        title: '180 天：首個付費客戶上線',
        timeline: '2026 Q3 前',
        action: '將 POC 客戶轉化為付費客戶，簽署正式合約',
        effort: '銷售 + 技術團隊',
        impact: '驗證商業模式可行性，產生實際營收',
        metric: 'NT$ 5-10M 訂單，客戶滿意度 8/10+',
        investment: '已包含於前期投入',
        why: '付費意願是價值驗證的最終標準'
      }
    ],

    // Why quick wins matter
    whyItMatters: `快速勝利不是「將就」，而是戰略選擇：
    1. **建立信心**：讓團隊與管理層看見具體成果，持續支持長期投資
    2. **驗證假設**：快速測試市場反應，避免方向性錯誤
    3. **累積動能**：小成功帶來大動力，形成正向循環
    4. **降低風險**：分散式投入，避免「All-in」單一方向的風險
    5. **建立信任**：用實際交付證明團隊能力，贏得客戶與內部信任

    關鍵是「快」：快速交付、快速反饋、快速調整。`,
  },

  // Success metrics dashboard
  successMetrics: {
    headline: '成功指標儀表板：如何衡量軟體部門的進展',
    
    metrics: [
      {
        category: '財務指標',
        items: [
          { name: '軟體營收佔比', target: '2026: 5% → 2027: 20%', frequency: '每季' },
          { name: '毛利率提升', target: '軟體訂單毛利率達 20-25%', frequency: '每季' },
          { name: '年度經常性收入 (ARR)', target: '2026: NT$ 50M → 2027: NT$ 400M', frequency: '每季' }
        ]
      },
      {
        category: '客戶指標',
        items: [
          { name: '客戶續約率', target: 'Year 1: 70% → Year 2: 85%+', frequency: '每年' },
          { name: '客戶滿意度 (NPS)', target: '60 分以上', frequency: '每季' },
          { name: '標竿案例數量', target: '2026: 2 個 → 2027: 10 個', frequency: '每季' }
        ]
      },
      {
        category: '交付指標',
        items: [
          { name: '部署時間', target: '標準配置<2 週，含 RAG<4 週', frequency: '每案' },
          { name: '交付準時率', target: '90% 以上', frequency: '每月' },
          { name: '交付缺失率', target: '<5%', frequency: '每月' }
        ]
      },
      {
        category: '技術指標',
        items: [
          { name: 'GPU 利用率提升', target: '從 40% 提升至 85%+', frequency: '每案' },
          { name: '遠端修復率', target: '70% 故障可遠端修復', frequency: '每月' },
          { name: '系統可用性', target: '99.9%+', frequency: '每月' }
        ]
      },
      {
        category: '團隊指標',
        items: [
          { name: '團隊規模', target: '2026 Q4: 50 人 → 2027 Q4: 80 人', frequency: '每季' },
          { name: '關鍵職位填補率', target: '90%+', frequency: '每月' },
          { name: '員工留存率', target: '85%+', frequency: '每年' }
        ]
      }
    ],

    reviewCadence: {
      daily: '團隊站會：交付進度與阻礙',
      weekly: '週會：指標檢視與調整',
      monthly: '月度檢討：財務與客戶指標',
      quarterly: '季 review：戰略調整與資源配置',
      annually: '年度檢視：整體戰略與市場定位'
    }
  },

  // Risk register
  riskRegister: {
    headline: '風險管理：識別、評估、緩解',
    
    risks: [
      {
        risk: '人才招募困難',
        probability: '高',
        impact: '高',
        mitigation: '提供有競爭力薪資與股權激勵；與大學建教合作；建立遠端工作機制擴大人才庫',
        owner: '人資 + 技術主管'
      },
      {
        risk: '技術選型錯誤',
        probability: '中',
        impact: '高',
        mitigation: '採 70/30 法則 (70% 通用技術)；建立技術顧問委員會；保持技術中立性',
        owner: '技術主管'
      },
      {
        risk: '市場接受度低',
        probability: '中',
        impact: '高',
        mitigation: '聚焦既有 CSP 客戶；提供優惠試點方案；建立標竿案例',
        owner: '銷售 + 產品主管'
      },
      {
        risk: '競爭對手跟進',
        probability: '高',
        impact: '中',
        mitigation: '建立先發優勢；累積客戶數據與反饋形成護城河；持續創新',
        owner: '產品 + 技術主管'
      },
      {
        risk: '資源投入不足',
        probability: '中',
        impact: '高',
        mitigation: '分階段投入，每季交付具體成果；建立清晰的 ROI 論述；爭取管理層支持',
        owner: '部門主管'
      }
    ]
  }
};

export default softwareRoadmap;
