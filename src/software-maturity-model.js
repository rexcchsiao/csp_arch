// Software Maturity Model - Self-Assessment Framework for Leadership
// Added 2026-03-15 by CoCo - Helps leadership understand current state vs. target state
// For strategic planning conversations - "Where are we on the journey?"

export const softwareMaturityModel = {
  headline: 'AI 伺服器供應商軟體成熟度模型',
  purpose: '協助管理層評估目前軟體能力定位，並明確通往高毛利解決方案供應商的進化路徑',
  
  // Five maturity levels - from commodity to strategic partner
  levels: [
    {
      level: 1,
      name: '硬體供應商 (Hardware Vendor)',
      description: '純硬體銷售，軟體為免費附贈或完全依賴第三方',
      characteristics: [
        '報價以硬體規格為主（GPU 型號、記憶體、儲存容量）',
        '軟體由客戶自行整合或依賴 NVIDIA/AMD 參考架構',
        '毛利率 8-12%，價格為主要競爭手段',
        '客戶關係為單次交易，回購率 50-60%',
        '無專職軟體團隊，由硬體工程師兼職支援',
      ],
      metrics: {
        '軟體營收佔比': '<1%',
        '毛利率': '8-12%',
        '客戶續約率': '50-60%',
        '交付週期': '4-8 週（客戶自行整合軟體）',
        '遠端運維覆盖率': '<10%',
      },
      example: '傳統 ODM 廠商，如部分台灣伺服器供應商',
      risk: '極易被價格戰影響，客戶流失率高，無議價能力',
    },
    {
      level: 2,
      name: '基礎整合者 (Basic Integrator)',
      description: '提供基本軟體預載與驗證，但仍以硬體為核心',
      characteristics: [
        '出廠前預載 OS 與基礎驅動（CUDA/ROCm）',
        '提供基本 BMC 遠端管理功能',
        '毛利率 12-15%，開始有軟體加值概念',
        '客戶回購率 60-70%',
        '小型軟體團隊（5-10 人），主要負責驗證與除錯',
      ],
      metrics: {
        '軟體營收佔比': '1-3%',
        '毛利率': '12-15%',
        '客戶續約率': '60-70%',
        '交付週期': '2-4 週',
        '遠端運維覆盖率': '10-20%',
      },
      example: '多數一線 ODM 廠商（廣達、緯穎）目前階段',
      risk: '仍易受價格戰影響，軟體差異化不明顯',
    },
    {
      level: 3,
      name: '解決方案提供者 (Solution Provider)', 
      description: '軟體成為差異化關鍵，提供完整 AI 就緒平台',
      characteristics: [
        '預整合 AI 軟體棧（K8s、RAG、GPU 調度）',
        '提供 Remote Ops 遠端監控與診斷服務',
        '毛利率 18-22%，軟體開始貢獻可衡量價值',
        '客戶回購率 75-85%',
        '專職軟體團隊（20-50 人），涵蓋 L9-L12 全棧',
      ],
      metrics: {
        '軟體營收佔比': '5-10%',
        '毛利率': '18-22%',
        '客戶續約率': '75-85%',
        '交付週期': '1-2 週',
        '遠端運維覆盖率': '40-60%',
      },
      example: 'Dell AI Factory、HPE Private Cloud AI',
      risk: '開始建立護城河，但仍需持續投資避免落後',
      targetState: 'Foxconn 2026 Q4 目標狀態',
    },
    {
      level: 4,
      name: '戰略合作夥伴 (Strategic Partner)',
      description: '軟體成為核心競爭力，客戶因軟體選擇供應商',
      characteristics: [
        '自主研發 L9-L12 完整軟體棧',
        '提供 AI 效能優化、能源管理、合規審計等高階功能',
        '毛利率 22-28%，軟體貢獻超過 15% 營收',
        '客戶回購率 85-95%',
        '大型軟體團隊（50-100 人），獨立產品線與 P&L',
      ],
      metrics: {
        '軟體營收佔比': '15-25%',
        '毛利率': '22-28%',
        '客戶續約率': '85-95%',
        '交付週期': '2-4 天',
        '遠端運維覆盖率': '70-85%',
      },
      example: 'NVIDIA Base Command + Mission Control 生態系',
      risk: '需持續創新避免被追趕，生態系建立後護城河深',
      targetState: 'Foxconn 2027-2028 目標狀態',
    },
    {
      level: 5,
      name: '生態系主導者 (Ecosystem Leader)',
      description: '定義產業標準，合作夥伴圍繞其平台建立解決方案',
      characteristics: [
        '平台化思維，提供 API/SDK 供合作夥伴擴充',
        '應用商店或解決方案市集模式',
        '毛利率 25-35%，軟體與服務貢獻超過 30% 營收',
        '客戶回購率 95%+',
        '數百人以上軟體團隊，多產品線並行',
      ],
      metrics: {
        '軟體營收佔比': '30%+',
        '毛利率': '25-35%',
        '客戶續約率': '95%+',
        '交付週期': '即時部署（標準化範本）',
        '遠端運維覆盖率': '90%+',
      },
      example: 'NVIDIA（CUDA 生態系）、Microsoft Azure、AWS',
      risk: '反壟斷監管風險，需持續投資前沿研究保持領先',
    },
  ],
  
  // Self-Assessment Questionnaire - Help leadership evaluate current state
  selfAssessment: {
    headline: '自我評估：我們目前在哪一級？',
    instructions: '回答以下 10 個問題，統計選項分佈，找出最符合的成熟度等級',
    questions: [
      {
        q: '1. 客戶採購決策的主要依據是？',
        answers: {
          '1': '硬體規格與價格（GPU 型號、單價）',
          '2': '硬體規格 + 基本軟體預載',
          '3': '整體解決方案（硬體 + 軟體 + 服務）',
          '4': '軟體功能與生態系（即使硬體規格稍低也接受）',
          '5': '平台鎖定與轉換成本（已深度整合，難以更換）',
        },
      },
      {
        q: '2. 軟體團隊規模與定位？',
        answers: {
          '1': '無專職軟體團隊，由硬體工程師兼職',
          '2': '5-10 人驗證團隊，主要負責驅動與 OS 測試',
          '3': '20-50 人專職團隊，涵蓋 L9-L12 開發',
          '4': '50-100 人產品線，獨立 P&L 與產品路線圖',
          '5': '數百人多產品線，主導產業標準制定',
        },
      },
      {
        q: '3. 軟體營收佔整體比例？',
        answers: {
          '1': '<1%（幾乎無軟體收入）',
          '2': '1-3%（基本維運服務）',
          '3': '5-10%（Remote Ops + 專案服務）',
          '4': '15-25%（訂閱制 + 加值服務）',
          '5': '30%+（平台化 + 生態系分潤）',
        },
      },
      {
        q: '4. 客戶續約率（年度）？',
        answers: {
          '1': '50-60%（價格導向，易流失）',
          '2': '60-70%（基本關係維繫）',
          '3': '75-85%（軟體產生一定依賴）',
          '4': '85-95%（深度整合，轉換成本高）',
          '5': '95%+（生態系鎖定，幾乎無流失）',
        },
      },
      {
        q: '5. 交付時間（從到貨到上線）？',
        answers: {
          '1': '4-8 週（客戶自行整合軟體）',
          '2': '2-4 週（基本預載與驗證）',
          '3': '1-2 週（預整合軟體棧）',
          '4': '2-4 天（自動化部署流程）',
          '5': '即時（標準化範本，一鍵部署）',
        },
      },
      {
        q: '6. 遠端運維（Remote Ops）覆蓋率？',
        answers: {
          '1': '<10%（幾乎無遠端能力）',
          '2': '10-20%（基本監控）',
          '3': '40-60%（主動監控 + 部分診斷）',
          '4': '70-85%（預測性維護 + 遠端修復）',
          '5': '90%+（AI 驅動自動化修復）',
        },
      },
      {
        q: '7. GPU 利用率（客戶端實測）？',
        answers: {
          '1': '30-40%（無優化）',
          '2': '40-50%（基本調度）',
          '3': '60-70%（K8s 編排優化）',
          '4': '75-85%（AI 負載感知調度）',
          '5': '85-95%+（跨集群全球最佳化）',
        },
      },
      {
        q: '8. 毛利率水準？',
        answers: {
          '1': '8-12%（純硬體價格戰）',
          '2': '12-15%（基本軟體加值）',
          '3': '18-22%（解決方案溢價）',
          '4': '22-28%（軟體驅動溢價）',
          '5': '25-35%（生態系定價權）',
        },
      },
      {
        q: '9. 客戶選擇我們的主要原因？',
        answers: {
          '1': '價格最低',
          '2': '性價比高',
          '3': '交付快速、服務完整',
          '4': '軟體功能獨特、難以取代',
          '5': '生態系鎖定、轉換成本過高',
        },
      },
      {
        q: '10. 技術護城河深度？',
        answers: {
          '1': '無護城河，完全可替換',
          '2': '基本驗證流程，易被追趕',
          '3': '預整合軟體棧，需 3-6 個月追趕',
          '4': '自主 L9-L12 全棧，需 12-18 個月追趕',
          '5': '生態系 + 數據飛輪，幾乎無法追趕',
        },
      },
    ],
    scoring: {
      'mostly 1s': 'Level 1 - 需立即投資軟體，避免淪為 commodity',
      'mostly 2s': 'Level 2 - 正面臨價格戰壓力，需尽快升級',
      'mostly 3s': 'Level 3 - 正確軌道上，需持續投資擴大優勢',
      'mostly 4s': 'Level 4 - 已建立護城河，需持續創新保持領先',
      'mostly 5s': 'Level 5 - 產業領導者，需關注反壟斷與新技術威脅',
    },
  },
  
  // Path from Level 2 to Level 3 (Foxconn's current journey)
  progressionPath: {
    headline: '從 Level 2 到 Level 3：Foxconn 的進化路徑',
    currentState: 'Level 2 (Basic Integrator) - 2025-2026 Q2',
    targetState: 'Level 3 (Solution Provider) - 2026 Q4',
    gapAnalysis: [
      {
        gap: '軟體團隊規模不足',
        current: '5-10 人驗證團隊',
        target: '20-50 人專職開發團隊',
        action: '2026 Q2 啟動招募，Q3 完成 50%（25 人），Q4 完成 80%（40 人）',
        investment: 'NT$ 40-60M/年（人力成本）',
      },
      {
        gap: '缺乏 Remote Ops 完整功能',
        current: '基本 BMC 監控',
        target: '預測性維護 + 遠端診斷 + 自動化修復',
        action: '2026 Q2 啟動 MVP 開發，Q3 首個客戶上線，Q4 規模化',
        investment: 'NT$ 10-15M（開發工具 + 基礎設施）',
      },
      {
        gap: 'RAG 一體機尚未產品化',
        current: '概念驗證階段',
        target: '標準化產品，3 天內部署完成',
        action: '2026 Q2 完成首個 POC，Q3 產品化，Q4 建立 2-3 個標竿案例',
        investment: 'NT$ 5-8M（模型驗證 + 客戶 POC）',
      },
      {
        gap: '軟體營收佔比过低',
        current: '<1%',
        target: '5-10%',
        action: '從既有 CSP 客戶切入，以 Remote Ops + RAG 為突破口',
        investment: 'NT$ 5M（市場推廣 + 客戶教育）',
      },
    ],
    timeline: {
      '2026 Q2': '組織設計、首波招募、Remote Ops MVP 啟動',
      '2026 Q3': '團隊到位 50%、Remote Ops 首案上線、RAG POC 完成',
      '2026 Q4': '團隊到位 80%、RAG 產品化、軟體營收佔比達 3-5%',
      '2027 Q2': '軟體營收佔比達 8-10%、毛利率提升至 18-20%',
      '2027 Q4': '正式晉升 Level 3，成為解決方案提供者',
    },
  },
  
  // Why Maturity Matters - Business Impact
  businessImpact: {
    headline: '為什麼成熟度至關重要？',
    insight: '成熟度每提升一級，毛利率提升 5-8pp，客戶終身價值提升 2-3 倍',
    progression: [
      {
        from: 'Level 1 → Level 2',
        impact: '毛利率 +3-5pp，客戶流失率 -10%',
        driver: '基本軟體預載減少客戶整合成本',
      },
      {
        from: 'Level 2 → Level 3',
        impact: '毛利率 +5-8pp，客戶終身價值 +100%',
        driver: 'Remote Ops + RAG 創造可衡量價值',
      },
      {
        from: 'Level 3 → Level 4',
        impact: '毛利率 +5-10pp，客戶終身價值 +150%',
        driver: '軟體成為採購決策關鍵因素',
      },
      {
        from: 'Level 4 → Level 5',
        impact: '毛利率 +5-10pp，客戶終身價值 +200%',
        driver: '生態系鎖定 + 平台效應',
      },
    ],
    foxconnOpportunity: '從 Level 2 提升至 Level 3，可創造 NT$ 350M+/年額外毛利（以年營收 NT$ 3.5B 計），遠超軟體團隊 NT$ 65M/年成本',
  },
};

export default softwareMaturityModel;
