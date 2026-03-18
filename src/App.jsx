import React, { useState } from 'react'
import { BarChart3, FileStack, LayoutGrid } from 'lucide-react'
import CoCoView from './CoCoView'
import ExecutiveSummaryView from './ExecutiveSummaryView'

const App = () => {
  const [activeTab, setActiveTab] = useState('executive')

  const navItems = [
    { id: 'executive', label: '管理層摘要', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'coco', label: 'CoCo 深度分析', icon: <FileStack className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 mb-3 flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg shadow-sm">
              <LayoutGrid className="text-white w-8 h-8" />
            </div>
            Foxconn AI Server Software
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-4xl">
            用管理層看得懂的語言，說清楚軟體部門如何把 AI 伺服器從一次性交機，變成可部署、可治理、可續約的營運結果。
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-200'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'executive' && <ExecutiveSummaryView />}
        {activeTab === 'coco' && <CoCoView onBack={() => setActiveTab('executive')} />}
      </div>
    </div>
  )
}

export default App
