import React, { useState } from 'react'
import { LayoutGrid, BarChart3 } from 'lucide-react'
import CoCoView from './CoCoView'

const TestView = ({ title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
    <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
      <BarChart3 className="w-6 h-6 text-blue-600" />
      {title}
    </h2>
    <div className="text-slate-700">{children}</div>
  </div>
)

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
          <TestView title="歡迎頁面">
            <p className="mb-4">這是 Foxconn AI Server Software 的展示頁面。</p>
            <p>請點擊上方的 <strong>"CoCo 分析報告"</strong> 按鈕查看完整的分析報告。</p>
          </TestView>
        )}

        {activeTab === 'coco' && <CoCoView onBack={() => setActiveTab('overview')} />}
      </div>
    </div>
  )
}

export default App
