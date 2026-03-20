import React, { useState } from 'react'
import { LayoutGrid, Zap } from 'lucide-react'

// 導入所有視圖元件
import CompetitiveLandscapeView from './CompetitiveLandscapeView'
import SoftwareDifferentiationView from './SoftwareDifferentiationView'
import SovereignAIOpportunityView from './SovereignAIOpportunityView'
import SoftwareRoadmapView from './SoftwareRoadmapView'
import NinetyDayPlanView from './NinetyDayPlanView'
import ExecutiveSummaryView from './ExecutiveSummaryView'
import SourceReferencesView from './SourceReferencesView'
import CompetitiveComparisonChart from './CompetitiveComparisonChart'
import OdmComparisonChart from './OdmComparisonChart'
import Power800vView from './Power800vView'
import BuildVsBuyView from './BuildVsBuyView'

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
            <button
              onClick={() => setActiveTab('power800v')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'power800v'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Zap className="w-4 h-4" />
              800V 高壓電力架構
            </button>
            <button
              onClick={() => setActiveTab('build-vs-buy')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'build-vs-buy'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              自建 vs 採購
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
              請點擊上方的 <strong className="text-blue-600">"CoCo 分析報告"</strong> 或 <strong className="text-orange-600">"800V 高壓電力架構"</strong> 按鈕查看完整分析。
            </p>
          </div>
        )}

        {activeTab === 'coco' && (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h2 className="text-2xl font-black mb-6 text-blue-600">CoCo 分析報告</h2>
              <p className="text-slate-700 mb-6">
                以下是完整的 CoCo 分析報告內容。
              </p>
            </div>

            {/* 競爭對手比較圖表 */}
            <CompetitiveComparisonChart />

            {/* OEM/ODM 比較圖表 */}
            <OdmComparisonChart />

            {/* 來源參考 */}
            <SourceReferencesView />

            {/* 高階摘要 */}
            <ExecutiveSummaryView />

            {/* 競爭格局 */}
            <CompetitiveLandscapeView />

            {/* 軟體差異化 */}
            <SoftwareDifferentiationView />

            {/* 主權 AI */}
            <SovereignAIOpportunityView />

            {/* 路線圖 */}
            <SoftwareRoadmapView />

            {/* 90 天計畫 */}
            <NinetyDayPlanView />
          </div>
        )}

        {activeTab === 'power800v' && (
          <Power800vView />
        )}

        {activeTab === 'build-vs-buy' && (
          <BuildVsBuyView />
        )}
      </div>
    </div>
  )
}

export default App
