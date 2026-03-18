import React, { useState } from 'react'
import { LayoutGrid, BarChart3, Shield, TrendingUp } from 'lucide-react'

// 導入原本的視圖元件
import CompetitiveLandscapeView from './CompetitiveLandscapeView'
import SoftwareDifferentiationView from './SoftwareDifferentiationView'
import SovereignAIOpportunityView from './SovereignAIOpportunityView'
import SoftwareRoadmapView from './SoftwareRoadmapView'
import NinetyDayPlanView from './NinetyDayPlanView'
import ExecutiveSummaryView from './ExecutiveSummaryView'
import SourceReferencesView from './SourceReferencesView'
import CompetitiveComparisonChart from './CompetitiveComparisonChart'
import OdmComparisonChart from './OdmComparisonChart'

const App = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 mb-4 flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg shadow-lg">
              <LayoutGrid className="text-white w-8 h-8" />
            </div>
            Foxconn AI Server Software
          </h1>
          
          {/* Navigation */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              總覽
            </button>
            <button
              onClick={() => setActiveTab('coco')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'coco'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              CoCo 分析報告
            </button>
          </div>
        </div>

        {/* Content by Tab */}
        {activeTab === 'overview' && (
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h2 className="text-2xl font-black mb-4">歡迎頁面</h2>
            <p className="text-slate-700 mb-4">
              這是 Foxconn AI Server Software 的展示頁面。
            </p>
            <p className="text-slate-700">
              請點擊上方的 <strong className="text-blue-600">"CoCo 分析報告"</strong> 按鈕查看完整的分析報告，包含：
            </p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• 競爭格局分析 (NVIDIA, OEM/ODM)</li>
              <li>• 軟體差異化分析</li>
              <li>• 主權 AI 機會</li>
              <li>• 軟體發展路線圖</li>
              <li>• 90 天執行計畫</li>
              <li>• 參考來源連結</li>
            </ul>
          </div>
        )}

        {activeTab === 'coco' && (
          <div className="space-y-8">
            {/* 核心視圖 - 一個一個獨立顯示，避免互相干擾 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h2 className="text-2xl font-black mb-6 text-blue-600">CoCo 分析報告</h2>
              <p className="text-slate-700 mb-6">
                以下是完整的 CoCo 分析報告內容，包含所有視圖元件。
              </p>
            </div>

            {/* 1. 競爭對手比較圖表 */}
            <CompetitiveComparisonChart />

            {/* 2. OEM/ODM 比較圖表 */}
            <OdmComparisonChart />

            {/* 3. 來源參考 */}
            <SourceReferencesView />

            {/* 4. 高階摘要 */}
            <ExecutiveSummaryView />

            {/* 5. 競爭格局 */}
            <CompetitiveLandscapeView />

            {/* 6. 軟體差異化 */}
            <SoftwareDifferentiationView />

            {/* 7. 主權 AI */}
            <SovereignAIOpportunityView />

            {/* 8. 路線圖 */}
            <SoftwareRoadmapView />

            {/* 9. 90 天計畫 */}
            <NinetyDayPlanView />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
