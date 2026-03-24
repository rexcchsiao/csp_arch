import React, { useState } from 'react'
import { Zap, TrendingUp, Shield, Award, Clock, Target, CheckCircle, ExternalLink, AlertTriangle, BarChart3 } from 'lucide-react'
import { power800vContext, power800vSoftwareModules, marketOpportunity, competitiveAnalysis, roadmap } from './800v-power-architecture'

const Power800vView = () => {
  const [activeSection, setActiveSection] = useState('modules')

  const sections = [
    { id: 'context', label: '市場背景', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'modules', label: '10 大軟體著力點', icon: <Zap className="w-4 h-4" /> },
    { id: 'market', label: '市場機會', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'competitive', label: '競爭對手分析', icon: <Award className="w-4 h-4" /> },
    { id: 'roadmap', label: '開發時程', icon: <Clock className="w-4 h-4" /> }
  ]

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <Zap className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black">800V+ 高壓電力架構軟體機會</h2>
            <p className="text-orange-100 text-sm font-medium">AI 伺服器電源管理新世代</p>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex gap-2 mt-6 flex-wrap">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeSection === section.id
                  ? 'bg-white text-orange-600 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {activeSection === 'context' && (
          <div className="space-y-6">
            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-200">
              <h3 className="text-xl font-black text-orange-800 mb-4">{power800vContext.headline}</h3>
              <p className="text-orange-700 mb-4">{power800vContext.urgency}</p>
              
              <h4 className="text-lg font-bold text-orange-800 mb-3">市場驅動因素</h4>
              <div className="space-y-4">
                {power800vContext.marketDrivers.map((driver, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-orange-100">
                    <div className="flex items-start gap-3 mb-2">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-slate-800">{driver.driver}</h5>
                        <p className="text-sm text-slate-600 mt-1">{driver.detail}</p>
                      </div>
                    </div>
                    <div className="ml-8 flex items-center gap-2 text-xs text-slate-500">
                      <ExternalLink className="w-3 h-3" />
                      <a href={driver.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 underline">
                        {driver.source}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'modules' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">{power800vSoftwareModules.headline}</h3>
            {power800vSoftwareModules.modules.map((module) => (
              <div key={module.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900">{module.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          module.priority === 'P0' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {module.priority}
                        </span>
                        <span className="text-xs text-slate-500">{module.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="ml-10 space-y-3">
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-xs font-bold text-red-700 mb-1">痛點</p>
                    <p className="text-xs text-slate-700">{module.painPoint}</p>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-xs font-bold text-green-700 mb-1">軟體解方</p>
                    <p className="text-xs text-slate-700">{module.softwareSolution}</p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-xs font-bold text-blue-700 mb-1">影響力</p>
                    <p className="text-xs text-slate-700">{module.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {module.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-200 rounded text-xs font-bold text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'market' && (
          <div className="space-y-6">
            <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-xl font-black text-green-800 mb-4">{marketOpportunity.headline}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-white rounded-xl border border-green-200">
                  <h4 className="text-sm font-bold text-green-700 mb-2">市場規模</h4>
                  <p className="text-xs text-slate-600 mb-2">{marketOpportunity.marketSize.total}</p>
                  <p className="text-xs text-slate-600">2026: {marketOpportunity.marketSize.segment2026}</p>
                  <p className="text-xs text-slate-600">2028: {marketOpportunity.marketSize.segment2028}</p>
                </div>
                
                <div className="p-4 bg-white rounded-xl border border-green-200">
                  <h4 className="text-sm font-bold text-green-700 mb-2">營收預測</h4>
                  <div className="space-y-1 text-xs text-slate-600">
                    <p>2026: {marketOpportunity.revenueProjection['2026']}</p>
                    <p>2027: {marketOpportunity.revenueProjection['2027']}</p>
                    <p>2028: {marketOpportunity.revenueProjection['2028']}</p>
                  </div>
                </div>
              </div>

              <h4 className="text-sm font-bold text-green-700 mb-2">目標客戶</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {marketOpportunity.targetCustomers.map((customer, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-green-100">
                    <p className="text-sm font-bold text-slate-800">{customer.segment}</p>
                    <p className="text-xs text-slate-600 mt-1">{customer.examples}</p>
                    <p className="text-xs text-green-600 mt-1">{customer.need}</p>
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-bold text-green-700 mb-2">商業模式</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border border-green-100">
                  <p className="text-xs font-bold text-slate-700">軟體授權</p>
                  <p className="text-xs text-slate-600">{marketOpportunity.businessModel.licensing}</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-green-100">
                  <p className="text-xs font-bold text-slate-700">年度訂閱</p>
                  <p className="text-xs text-slate-600">{marketOpportunity.businessModel.subscription}</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-green-100">
                  <p className="text-xs font-bold text-slate-700">效能分成</p>
                  <p className="text-xs text-slate-600">{marketOpportunity.businessModel.performance}</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-green-100">
                  <p className="text-xs font-bold text-slate-700">預測維護</p>
                  <p className="text-xs text-slate-600">{marketOpportunity.businessModel.maintenance}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'competitive' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">{competitiveAnalysis.headline}</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 px-4 text-sm font-black text-slate-900">競爭對手</th>
                    <th className="text-left py-3 px-4 text-sm font-black text-green-600">優勢</th>
                    <th className="text-left py-3 px-4 text-sm font-black text-red-600">劣勢</th>
                    <th className="text-left py-3 px-4 text-sm font-black text-blue-600">Foxconn 優勢</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {competitiveAnalysis.competitors.map((comp, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 align-top">
                      <td className="py-3 px-4 text-sm font-bold text-slate-900">
                        <div>{comp.name}</div>
                        {comp.sourceUrl && (
                          <a
                            href={comp.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-orange-600 underline"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {comp.source}
                          </a>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-green-700">{comp.strength}</td>
                      <td className="py-3 px-4 text-sm text-red-700">{comp.weakness}</td>
                      <td className="py-3 px-4 text-sm text-blue-700">
                        <p>{comp.ourAdvantage}</p>
                        {comp.strategicNote && (
                          <div className="mt-2 rounded-lg border border-blue-100 bg-blue-50 p-2 text-xs text-slate-700">
                            <span className="font-bold text-blue-700">為什麼這能凸顯軟體部門價值：</span> {comp.strategicNote}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <h4 className="text-sm font-black text-orange-900 mb-2">這張表真正想讓老闆看到什麼？</h4>
              <p className="text-sm text-slate-700 leading-6">連 Vertiv、Schneider 這種偏設施端的公司，都已經不只賣 UPS / cooling 硬體，而是在賣 <span className="font-bold text-orange-700">AI-ready reference design、optimized operations、end-to-end physical + digital infrastructure</span>。這代表 800V / 液冷 / power orchestration 的採購語言已經往軟體與營運結果移動。Foxconn 軟體部門最值錢的地方，不是再做一個監控畫面，而是把這些 facility 訊號接成 <span className="font-bold text-orange-700">capacity assurance、workload governance、brownfield rollout 與可續約的 Remote Ops 服務</span>。</p>
            </div>
          </div>
        )}

        {activeSection === 'roadmap' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">{roadmap.headline}</h3>
            {roadmap.phases.map((phase, idx) => (
              <div key={idx} className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
                <h4 className="text-lg font-black text-blue-800 mb-3">{phase.phase}</h4>
                
                <div className="mb-3">
                  <p className="text-sm font-bold text-blue-700 mb-2">交付項目</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.deliverables.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-blue-700 border border-blue-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-blue-700 mb-2">里程碑</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.milestones.map((milestone, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full text-xs font-bold text-green-700">
                        <CheckCircle className="w-3 h-3" />
                        {milestone}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Power800vView
