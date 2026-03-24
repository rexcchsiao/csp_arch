import React, { useState } from 'react';
import { executiveBrief, softwareDepartmentScorecard } from './executive-brief.js';
import { softwareDifferentiation, financialImpactCalculator, softwareMoatSummary } from './software-differentiation.js';
import { leadershipDecisionMatrix } from './leadership-decision-matrix';
import { Zap, TrendingUp, Shield, Target, Users, BarChart3, AlertTriangle, CheckCircle, Award, Layers, Gauge, Lightbulb, ExternalLink, Trophy, Cpu, Factory, MessageSquare } from 'lucide-react';

const SoftwareDifferentiationView = () => {
  const [activeTab, setActiveTab] = useState('pain-points');
  const [selectedPainPoint, setSelectedPainPoint] = useState(null);

  const tabs = [
    { id: 'pain-points', label: '痛點分析', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'customer-voices', label: '客戶聲音', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'competitive', label: '競爭優勢', icon: <Trophy className="w-4 h-4" /> },
    { id: 'technical-moat', label: '技術護城河', icon: <Cpu className="w-4 h-4" /> },
    { id: 'structural-advantages', label: '結構優勢', icon: <Factory className="w-4 h-4" /> },
    { id: 'services', label: '可定價服務', icon: <Users className="w-4 h-4" /> },
    { id: 'metrics', label: '價值指標', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'risk', label: '風險分析', icon: <Shield className="w-4 h-4" /> },
    { id: 'ask', label: '戰略要求', icon: <Target className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <Layers className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black">軟體差異化分析</h2>
            <p className="text-indigo-100 text-sm font-medium">沒有軟體，硬體價值無法完全放大；真正可被定價的是 Day-2 可營運結果，而不只是功能清單</p>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex gap-2 mt-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-white text-indigo-600 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {activeTab === 'pain-points' && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 mb-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-indigo-800">{softwareDifferentiation.strategicMessage.headline}</h3>
                  <p className="text-sm text-indigo-700 mt-2 font-medium">{softwareDifferentiation.strategicMessage.core}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-indigo-200 shadow-sm">
              <h4 className="text-lg font-black text-indigo-900 mb-2">{softwareDifferentiation.marketProof.headline}</h4>
              <p className="text-sm text-slate-700 mb-4">{softwareDifferentiation.marketProof.coreInsight}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareDifferentiation.marketProof.cards.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-black text-indigo-800 mb-2">{item.company}</p>
                    <p className="text-xs text-slate-700 mb-3">{item.proof}</p>
                    <p className="text-xs text-indigo-700 font-medium mb-3">{item.takeaway}</p>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-sm font-semibold text-indigo-800">{softwareDifferentiation.marketProof.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-rose-200 shadow-sm">
              <h4 className="text-lg font-black text-rose-900 mb-2">{softwareDifferentiation.softwareDepartmentValueBridge.headline}</h4>
              <p className="text-sm text-slate-700 mb-4">{softwareDifferentiation.softwareDepartmentValueBridge.coreInsight}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareDifferentiation.softwareDepartmentValueBridge.pillars.map((item, idx) => (
                  <div key={idx} className="p-4 bg-rose-50 rounded-xl border border-rose-100">
                    <p className="text-xs font-black text-rose-800 mb-2">{item.title}</p>
                    <div className="space-y-3 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">市場訊號：</span>{item.marketSignal}</p>
                      <p><span className="font-bold text-rose-700">Foxconn 該怎麼賣：</span>{item.foxconnPlay}</p>
                      <p><span className="font-bold text-emerald-700">為什麼董事會該在意：</span>{item.boardWhyItMatters}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-rose-50 rounded-xl border border-rose-100">
                <p className="text-sm font-semibold text-rose-900">{softwareDifferentiation.softwareDepartmentValueBridge.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
              <h4 className="text-lg font-black text-amber-900 mb-2">{softwareDifferentiation.marketWhiteSpace.headline}</h4>
              <p className="text-sm text-slate-700 mb-4">{softwareDifferentiation.marketWhiteSpace.coreInsight}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareDifferentiation.marketWhiteSpace.gaps.map((item, idx) => (
                  <div key={idx} className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <p className="text-xs font-black text-amber-900 mb-2">{item.title}</p>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">外部訊號：</span>{item.evidence}</p>
                      <p><span className="font-bold text-amber-700">為什麼還是缺口：</span>{item.whyStillOpen}</p>
                      <p><span className="font-bold text-emerald-700">Foxconn 可怎麼切入：</span>{item.foxconnPlay}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <p className="text-sm font-semibold text-amber-900">{softwareDifferentiation.marketWhiteSpace.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-indigo-200 shadow-sm">
              <h4 className="text-lg font-black text-indigo-900 mb-2">{softwareDifferentiation.standardsGap.headline}</h4>
              <p className="text-sm text-slate-700 mb-4">{softwareDifferentiation.standardsGap.coreInsight}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareDifferentiation.standardsGap.evidence.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-800 mb-2">{item.point}</p>
                    <p className="text-xs text-slate-600 mb-3">{item.implication}</p>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-sm font-semibold text-indigo-800">{softwareDifferentiation.standardsGap.boardMessage}</p>
                <p className="text-xs text-slate-500 mt-2">每一條證據都可直接點回官方來源，方便在管理層簡報中降低「這只是內部觀點」的質疑。</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {softwareDifferentiation.painPoints.map((point) => (
                <div 
                  key={point.id} 
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedPainPoint === point.id 
                      ? 'bg-indigo-50 border-indigo-300 ring-2 ring-indigo-200' 
                      : 'bg-slate-50 border-slate-200 hover:border-indigo-200'
                  }`}
                  onClick={() => setSelectedPainPoint(selectedPainPoint === point.id ? null : point.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <Zap className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{point.problem}</h4>
                        <p className="text-xs text-slate-600 mt-1">{point.impact}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-indigo-600">點擊展開</span>
                  </div>
                  
                  {selectedPainPoint === point.id && (
                    <div className="mt-4 pt-4 border-t border-indigo-200 space-y-3">
                      <div className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-slate-700">軟體解方</p>
                          <p className="text-xs text-slate-600">{point.softwareSolution}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-slate-700">價值放大</p>
                          <p className="text-xs text-blue-600 font-medium">{point.valueAmplification}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'customer-voices' && (
  <div className="space-y-6">
    <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 mb-6">
      <div className="flex items-start gap-3">
        <MessageSquare className="w-6 h-6 text-emerald-600 mt-1" />
        <div>
          <h3 className="text-lg font-black text-emerald-800">真實客戶痛點與心聲</h3>
          <p className="text-sm text-emerald-700 mt-2 font-medium">來自 CSP 與企業客戶的真實反饋 - 這些是他們每天面對的挑戰</p>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 gap-4">
      {executiveBrief.customerVoices?.map((voice, idx) => (
        <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 bg-rose-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-rose-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-slate-800 mb-2">{voice.painPoint}</h4>
              <blockquote className="text-sm text-slate-700 italic border-l-4 border-rose-300 pl-4 mb-3">
                "{voice.quote}"
              </blockquote>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-1">Foxconn 解決方案</p>
              <p className="text-sm font-medium text-slate-800">{voice.foxconnSolution}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-1">量化影響</p>
              <p className="text-sm font-bold text-emerald-700">{voice.quantifiedImpact}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200">
      <h4 className="text-base font-black text-amber-900 mb-2">為什麼這些聲音很重要？</h4>
      <p className="text-sm text-amber-800">
        這些不是假設性的痛點，而是來自 Foxconn CSP 客戶稽核、部署日誌、支援工單的真實反饋。
        軟體部門的價值不在於「功能清單」，而在於把這些痛點轉化為可量化的營運改進：
        利用率提升、部署加速、停機減少、合規無風險。
      </p>
    </div>
  </div>
)}

{activeTab === 'competitive' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">競爭優勢分析</h3>

            <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 shadow-sm">
              <h4 className="text-lg font-black text-amber-900 mb-2">競爭現實：市場已經在為「營運結果」付錢，不是只為硬體規格付錢</h4>
              <p className="text-sm text-slate-700 mb-4">
                這不是我們自己想像的敘事。從 NVIDIA、HPE 到 Supermicro 的官方產品語言，都已經把 cluster lifecycle、deployment speed、observability、building management integration、power / cooling control 放到前台。這代表真正影響採購勝率的，已經是誰能把硬體變成可穩定營運、可治理、可續約的服務。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareDifferentiation.marketProof.cards.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-amber-100">
                    <p className="text-xs font-black text-amber-800 mb-2">{item.company}</p>
                    <p className="text-xs text-slate-700 mb-3">{item.proof}</p>
                    <p className="text-xs font-medium text-amber-700">{item.takeaway}</p>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-white rounded-xl border border-amber-100">
                <p className="text-sm font-semibold text-amber-900">管理層該記住的一句話：<span className="text-slate-700">競爭對手已經在賣 Day-2 operations。Foxconn 若只賣 server BOM，就會留在價值鏈較低的位置；若把軟體部門定位成 lifecycle / governance / facility-aware operations owner，才有機會拿到溢價與續約收入。</span></p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-violet-200 shadow-sm">
              <h4 className="text-lg font-black text-violet-900 mb-2">真正還沒被滿足的切入點：Foxconn 不該去追另一個平台，而要去接最痛的 Day-2 缺口</h4>
              <p className="text-sm text-slate-700 mb-4">這一段把市場缺口濃縮成管理層可直接拿去講的攻擊面：不是問「我們有沒有更多功能」，而是問「哪一些風險現在還沒有被誰真正接住」。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareDifferentiation.marketWhiteSpace.gaps.map((gap, idx) => (
                  <div key={idx} className="p-5 bg-violet-50 rounded-2xl border border-violet-100">
                    <h5 className="text-sm font-black text-violet-800 mb-2">{gap.title}</h5>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">為什麼這一格還空著：</span>{gap.whyStillOpen}</p>
                      <p><span className="font-bold text-emerald-700">Foxconn 的進攻方式：</span>{gap.foxconnPlay}</p>
                    </div>
                    <a href={gap.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {gap.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-violet-50 rounded-xl border border-violet-100">
                <p className="text-sm font-semibold text-violet-900">管理層該記住的一句話：<span className="text-slate-700">最值得投資的不是 another dashboard，而是願意對 brownfield、air-gap、facility event、remote-ops 結果負責的軟體能力。</span></p>
              </div>
            </div>

            <div className="space-y-4">
              {softwareDifferentiation.competitiveAdvantage.map((advantage, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="text-sm font-bold text-indigo-600 mb-3">{advantage.category}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                      <p className="text-xs font-bold text-indigo-700 mb-2">Foxconn</p>
                      <p className="text-xs text-slate-700">{advantage.foxconn}</p>
                    </div>
                    <div className="p-4 bg-slate-100 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold text-slate-600 mb-2">競爭對手</p>
                      <p className="text-xs text-slate-600">{advantage.competitors}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                      <p className="text-xs font-bold text-green-700 mb-2 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        為什麼重要
                      </p>
                      <p className="text-xs text-slate-700">{advantage.whyItMatters}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'technical-moat' && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl border border-sky-200">
              <div className="flex items-start gap-3">
                <Cpu className="w-6 h-6 text-sky-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-sky-900">{softwareDifferentiation.technicalDepth.headline}</h3>
                  <p className="text-sm text-sky-800 mt-2 font-medium">{softwareDifferentiation.technicalDepth.coreInsight}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softwareDifferentiation.technicalDepth.capabilities.map((item, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="text-sm font-black text-sky-800">{item.area}</h4>
                    <Gauge className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-sm text-slate-800 font-medium mb-3">{item.capability}</p>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-slate-500 mb-1">技術細節</p>
                      <p className="text-slate-700">{item.technicalDetail}</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-500 mb-1">競品缺口</p>
                      <p className="text-slate-700">{item.competitorGap}</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-xl border border-green-200">
                      <p className="font-bold text-green-700 mb-1">商業影響</p>
                      <p className="text-slate-700">{item.businessImpact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white rounded-2xl border border-sky-200 shadow-sm">
              <h4 className="text-lg font-black text-sky-900 mb-4">可信度與落地門檻</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                  <p className="font-bold text-sky-700 mb-1">客戶驗證</p>
                  <p className="text-slate-700">{softwareDifferentiation.technicalDepth.validation.customerProof}</p>
                </div>
                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                  <p className="font-bold text-sky-700 mb-1">技術審查</p>
                  <p className="text-slate-700">{softwareDifferentiation.technicalDepth.validation.technicalReview}</p>
                </div>
                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                  <p className="font-bold text-sky-700 mb-1">專利狀態</p>
                  <p className="text-slate-700">{softwareDifferentiation.technicalDepth.validation.patentStatus}</p>
                </div>
                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                  <p className="font-bold text-sky-700 mb-1">複製障礙</p>
                  <p className="text-slate-700">{softwareDifferentiation.technicalDepth.validation.replicationBarrier}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'structural-advantages' && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-2xl border border-violet-200">
              <div className="flex items-start gap-3">
                <Factory className="w-6 h-6 text-violet-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-violet-900">{softwareDifferentiation.structuralAdvantages.headline}</h3>
                  <p className="text-sm text-violet-800 mt-2 font-medium">{softwareDifferentiation.structuralAdvantages.coreInsight}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softwareDifferentiation.structuralAdvantages.advantages.map((item, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="text-sm font-black text-violet-800 mb-3">{item.area}</h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-slate-500 mb-1">Foxconn 優勢</p>
                      <p className="text-slate-700">{item.advantage}</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-500 mb-1">競品做不到的地方</p>
                      <p className="text-slate-700">{item.competitorGap}</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-xl border border-green-200">
                      <p className="font-bold text-green-700 mb-1">商業影響</p>
                      <p className="text-slate-700">{item.businessImpact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-violet-50 rounded-2xl border border-violet-200">
              <h4 className="text-lg font-black text-violet-900 mb-2">管理層該記住的一句話</h4>
              <p className="text-sm text-violet-800 font-medium">{softwareDifferentiation.structuralAdvantages.strategicImplication}</p>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-blue-800">{softwareDifferentiation.serviceOfferings.headline}</h3>
                  <p className="text-sm text-blue-700 mt-2 font-medium">{softwareDifferentiation.serviceOfferings.rationale}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200">
              <h3 className="text-xl font-black text-amber-900 mb-2">{softwareDifferentiation.serviceOfferings.quickWins.headline}</h3>
              <p className="text-sm text-amber-800 mb-4">{softwareDifferentiation.serviceOfferings.quickWins.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareDifferentiation.serviceOfferings.quickWins.services.map((service, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-amber-100">
                    <h4 className="text-sm font-black text-amber-800 mb-3">{service.name}</h4>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">為何先做：</span>{service.why}</p>
                      <p><span className="font-bold text-slate-500">營收：</span>{service.revenue}</p>
                      <p><span className="font-bold text-slate-500">毛利：</span>{service.margin}</p>
                      <p><span className="font-bold text-slate-500">上市時間：</span>{service.timeToMarket}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-white rounded-xl border border-amber-100">
                <p className="text-sm font-bold text-amber-800">首年潛力：<span className="text-slate-700">{softwareDifferentiation.serviceOfferings.quickWins.totalPotential}</span></p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-blue-200 shadow-sm">
              <h3 className="text-xl font-black text-blue-900 mb-2">{softwareDifferentiation.serviceLadder.headline}</h3>
              <p className="text-sm text-slate-700 mb-4">{softwareDifferentiation.serviceLadder.coreInsight}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareDifferentiation.serviceLadder.stages.map((stage, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                    <h4 className="text-sm font-black text-blue-800 mb-2">{stage.stage}</h4>
                    <p className="text-xs font-bold text-slate-500 mb-2">重點：{stage.focus}</p>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">對應服務：</span>{stage.offerings.join('、')}</p>
                      <p><span className="font-bold text-blue-600">為什麼客戶會買：</span>{stage.whyItWins}</p>
                      <p><span className="font-bold text-green-600">收入邏輯：</span>{stage.revenueLogic}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm font-semibold text-blue-800">{softwareDifferentiation.serviceLadder.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-orange-200 shadow-sm">
              <h3 className="text-xl font-black text-orange-900 mb-2">{softwareDifferentiation.serviceOfferings.mandateGuardrails.headline}</h3>
              <p className="text-sm text-slate-700 mb-4">{softwareDifferentiation.serviceOfferings.mandateGuardrails.coreInsight}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareDifferentiation.serviceOfferings.mandateGuardrails.items.map((item, idx) => (
                  <div key={idx} className="p-5 bg-orange-50 rounded-2xl border border-orange-100">
                    <h4 className="text-sm font-black text-orange-800 mb-3">{item.title}</h4>
                    <div className="space-y-3 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">若走偏：</span>{item.risk}</p>
                      <p><span className="font-bold text-orange-700">更好的部門邊界：</span>{item.doInstead}</p>
                      <p><span className="font-bold text-emerald-700">董事會該在意：</span>{item.boardWhyItMatters}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-teal-200 shadow-sm">
              <h3 className="text-xl font-black text-teal-900 mb-2">先把兩條戰線講清楚：CSP 要的是營運責任，企業要的是私有 AI 可交付結果</h3>
              <p className="text-sm text-slate-700 mb-4">這一段把最常被混在一起講的兩種客戶拆開。這樣老闆比較容易看懂：軟體部門不是做同一套平台賣所有人，而是把同一批硬體轉成兩種不同、但都可被定價的服務語言。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareDifferentiation.segmentSpecificServiceMotions.motions.map((item, idx) => (
                  <div key={idx} className="p-5 bg-teal-50 rounded-2xl border border-teal-100">
                    <h4 className="text-sm font-black text-teal-800 mb-3">{item.segment}</h4>
                    <div className="space-y-3 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">購買觸發：</span>{item.buyingTrigger}</p>
                      <p><span className="font-bold text-amber-700">客戶其實在買：</span>{item.whatTheyActuallyBuy}</p>
                      <p><span className="font-bold text-emerald-700">Foxconn 軟體切口：</span>{item.softwareWedge}</p>
                      <p><span className="font-bold text-blue-700">為什麼 Foxconn 有機會贏：</span>{item.whyFoxconnWins}</p>
                      <p><span className="font-bold text-slate-500">外部證據：</span>{item.proof}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-teal-50 rounded-xl border border-teal-100">
                <p className="text-sm font-semibold text-teal-900">{softwareDifferentiation.segmentSpecificServiceMotions.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-cyan-200 shadow-sm">
              <h3 className="text-xl font-black text-cyan-900 mb-2">市場其實在賣的是風險轉移，不是 feature list</h3>
              <p className="text-sm text-slate-700 mb-4">這一段幫管理層把外部產品語言翻譯成採購語言：客戶真正核准的，通常不是「功能很多」，而是誰能接住上線速度、SLA、治理與跨團隊協調風險。這正是軟體部門最該主張的價值層。</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareDifferentiation.procurementProof.cards.map((item, idx) => (
                  <div key={idx} className="p-5 bg-cyan-50 rounded-2xl border border-cyan-100">
                    <h4 className="text-sm font-black text-cyan-800 mb-3">{item.company}</h4>
                    <div className="space-y-3 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">外部訊號：</span>{item.proof}</p>
                      <p><span className="font-bold text-amber-700">採購翻譯：</span>{item.buyerTranslation}</p>
                      <p><span className="font-bold text-emerald-700">Foxconn 該怎麼賣：</span>{item.foxconnPlay}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                <p className="text-sm font-semibold text-cyan-900">{softwareDifferentiation.procurementProof.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-fuchsia-200 shadow-sm">
              <h3 className="text-xl font-black text-fuchsia-900 mb-2">老闆最容易秒懂的缺口：交機到營運之間，誰真的負責？</h3>
              <p className="text-sm text-slate-700 mb-4">這一段把一個很常被忽略、但實際上最容易造成延誤與推責的斷點拉出來講清楚：硬體到貨不等於 AI 服務可上線，真正值錢的是誰能把出廠、現場驗收、baseline、可觀測性與 Day-2 handoff 接成同一條責任鏈。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareDifferentiation.factoryToOperationsGap.cards.map((item, idx) => (
                  <div key={idx} className="p-5 bg-fuchsia-50 rounded-2xl border border-fuchsia-100">
                    <h4 className="text-sm font-black text-fuchsia-800 mb-3">{item.company}</h4>
                    <div className="space-y-3 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">市場訊號：</span>{item.signal}</p>
                      <p><span className="font-bold text-amber-700">客戶真正痛的點：</span>{item.buyerPain}</p>
                      <p><span className="font-bold text-emerald-700">Foxconn 該怎麼賣：</span>{item.foxconnPlay}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-fuchsia-50 rounded-xl border border-fuchsia-100">
                <p className="text-sm font-semibold text-fuchsia-900">{softwareDifferentiation.factoryToOperationsGap.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-emerald-200 shadow-sm">
              <h3 className="text-xl font-black text-emerald-900 mb-2">市場真正核准預算的 9 種語言</h3>
              <p className="text-sm text-slate-700 mb-4">這一段把外部官方頁面的產品語言，翻成管理層真正會點頭的預算語言：速度、控制、信任、單一 accountable owner、容量延後擴建、可恢復性，以及持續服務可用性。這比再多一個功能列表更能證明軟體部門的不可替代性。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareDifferentiation.marketBuyingLanguage.vectors.map((item, idx) => (
                  <div key={idx} className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <h4 className="text-sm font-black text-emerald-800 mb-3">{item.label}</h4>
                    <div className="space-y-3 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">市場訊號：</span>{item.marketSignal}</p>
                      <p><span className="font-bold text-amber-700">採購會問：</span>{item.buyerQuestion}</p>
                      <p><span className="font-bold text-emerald-700">Foxconn 該怎麼翻譯：</span>{item.foxconnTranslation}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-sm font-semibold text-emerald-900">{softwareDifferentiation.marketBuyingLanguage.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-sky-200 shadow-sm">
              <h3 className="text-xl font-black text-sky-900 mb-2">大型 CSP / Hyperscaler 為什麼還是會買我們的軟體？</h3>
              <p className="text-sm text-slate-700 mb-4">即使客戶有自己的平台團隊，他們仍然會為「更快上線、更少風險、更低 TCO、更能保護既有投資」付錢。這一段很重要，因為它直接回答了管理層最常問的問題：<span className="font-semibold text-sky-700">既然大客戶也會寫軟體，為什麼還需要我們？</span></p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {softwareDifferentiation.hyperscalerPerspective.reasons.map((reason, idx) => (
                  <div key={idx} className="p-5 bg-sky-50 rounded-2xl border border-sky-100">
                    <h4 className="text-sm font-black text-sky-800 mb-2">{reason.reason}</h4>
                    <p className="text-xs text-slate-700 mb-3">{reason.explanation}</p>
                    <div className="p-3 bg-white rounded-xl border border-sky-100">
                      <p className="text-xs font-bold text-sky-700 mb-1">對客戶的直接結果</p>
                      <p className="text-xs text-slate-700">{reason.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-cyan-50 rounded-2xl border border-cyan-200">
                <h4 className="text-sm font-black text-cyan-900 mb-2">{softwareDifferentiation.hyperscalerBuyTriggers.headline}</h4>
                <p className="text-sm text-slate-700 mb-4">{softwareDifferentiation.hyperscalerBuyTriggers.summary}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {softwareDifferentiation.hyperscalerBuyTriggers.patterns.map((item, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-2xl border border-cyan-100">
                      <h5 className="text-sm font-black text-cyan-800 mb-3">{item.title}</h5>
                      <div className="space-y-2 text-xs text-slate-700">
                        <p><span className="font-bold text-slate-500">客戶不想自己扛：</span>{item.whatHyperscalersAvoid}</p>
                        <p><span className="font-bold text-cyan-700">Foxconn 可接住：</span>{item.foxconnValue}</p>
                        <p><span className="font-bold text-amber-700">市場訊號：</span>{item.marketSignal}</p>
                      </div>
                      <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                        <ExternalLink className="w-3 h-3" />
                        {item.sourceLabel}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-white rounded-xl border border-cyan-100">
                  <p className="text-sm font-semibold text-cyan-900">{softwareDifferentiation.hyperscalerBuyTriggers.boardMessage}</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-sky-50 rounded-xl border border-sky-100">
                <p className="text-sm font-semibold text-sky-800">管理層該記住的一句話：<span className="text-slate-700">客戶不是在買另一個 dashboard，而是在買「少養 20-50 人基礎設施團隊、少走 12-18 個月彎路、還能把風險留給單一 accountable vendor」的結果。</span></p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-sky-200 shadow-sm">
              <h3 className="text-xl font-black text-sky-900 mb-2">先搶哪 4 種服務缺口，最能證明軟體部門不是成本中心？</h3>
              <p className="text-sm text-slate-700 mb-4">這一段把最值得先賣的切口濃縮成董事會語言：不是 another platform，而是先去接住別人最常失手、也最容易形成續約的營運責任。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {softwareDifferentiation.serviceOfferings.uniqueServiceWedge.wedges.map((item, idx) => (
                  <div key={idx} className="p-5 bg-sky-50 rounded-2xl border border-sky-100">
                    <h4 className="text-sm font-black text-sky-800 mb-3">{item.name}</h4>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">市場缺口：</span>{item.gap}</p>
                      <p><span className="font-bold text-emerald-700">為什麼這格值得先打：</span>{item.whyItWins}</p>
                      <p><span className="font-bold text-blue-700">收入邏輯：</span>{item.revenueLogic}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                <p className="text-sm font-semibold text-sky-900">{softwareDifferentiation.serviceOfferings.uniqueServiceWedge.coreInsight}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-rose-200 shadow-sm">
              <h3 className="text-xl font-black text-rose-900 mb-2">為什麼軟體能從 attach rate 變成年約？因為客戶每年都在續買風險轉移</h3>
              <p className="text-sm text-slate-700 mb-4">這一段把「軟體為什麼能形成續約」講成董事會語言：真正會被持續編列預算的，不是 support fee，而是 deployment、升級、設施事件與治理風險。誰持續接住，誰就有資格拿年約。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {softwareDifferentiation.serviceOfferings.renewalMoat.risks.map((item, idx) => (
                  <div key={idx} className="p-5 bg-rose-50 rounded-2xl border border-rose-100">
                    <h4 className="text-sm font-black text-rose-800 mb-3">{item.risk}</h4>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">會壞在哪：</span>{item.whatBreaks}</p>
                      <p><span className="font-bold text-rose-700">對應年約服務：</span>{item.annualService}</p>
                      <p><span className="font-bold text-blue-700">為什麼會持續續約：</span>{item.whyRecurring}</p>
                      <p><span className="font-bold text-amber-700">市場訊號：</span>{item.marketSignal}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-rose-50 rounded-xl border border-rose-100">
                <p className="text-sm font-semibold text-rose-900">{softwareDifferentiation.serviceOfferings.renewalMoat.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-indigo-200 shadow-sm">
              <h3 className="text-xl font-black text-indigo-900 mb-2">董事會更在意的其實是：誰會付錢、為什麼明年還會再付</h3>
              <p className="text-sm text-slate-700 mb-4">這一段把軟體部門的價值，從「功能很多」翻譯成「可對應預算 owner、可形成續約理由、可跨年度放大硬體 attach rate」的收入地圖。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {softwareDifferentiation.serviceOfferings.budgetMap.rows.map((row, idx) => (
                  <div key={idx} className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <h4 className="text-sm font-black text-indigo-800 mb-3">{row.service}</h4>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">預算 owner：</span>{row.budgetOwner}</p>
                      <p><span className="font-bold text-slate-500">為什麼現在會買：</span>{row.whyNow}</p>
                      <p><span className="font-bold text-blue-600">為什麼明年還會續：</span>{row.renewalDriver}</p>
                      <p><span className="font-bold text-green-600">董事會看見的結果：</span>{row.boardOutcome}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-sm font-semibold text-indigo-800">{softwareDifferentiation.serviceOfferings.budgetMap.boardMessage}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-800 mb-4">可直接賣給客戶的軟體/服務組合</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareDifferentiation.serviceOfferings.offerings.map((offering, idx) => (
                  <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <h4 className="text-sm font-black text-indigo-700 mb-3">{offering.name}</h4>
                    <p className="text-xs text-slate-600 mb-4">{offering.description}</p>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">收費：</span>{offering.pricing}</p>
                      <p><span className="font-bold text-slate-500">毛利：</span>{offering.margin}</p>
                      <p><span className="font-bold text-slate-500">目標客群：</span>{offering.targetCustomer}</p>
                      <p><span className="font-bold text-indigo-600">差異化：</span>{offering.differentiation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
              <h4 className="text-lg font-black text-green-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                軟體營收爬坡路徑
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(softwareDifferentiation.serviceOfferings.revenueProjection)
                  .filter(([key]) => key !== 'assumption')
                  .map(([year, data]) => (
                    <div key={year} className="p-4 bg-white rounded-xl border border-green-100">
                      <h5 className="text-sm font-black text-green-700 mb-2 uppercase">{year}</h5>
                      <div className="space-y-1 text-xs text-slate-700">
                        <p><span className="font-bold text-slate-500">Software：</span>{data.software}</p>
                        <p><span className="font-bold text-slate-500">Services：</span>{data.services}</p>
                        <p><span className="font-bold text-slate-500">Total：</span>{data.total}</p>
                        <p><span className="font-bold text-green-600">營收占比：</span>{data.percentOfTotal}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <p className="text-xs text-slate-600 mt-4">假設：{softwareDifferentiation.serviceOfferings.revenueProjection.assumption}</p>
            </div>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">價值量化指標</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(softwareDifferentiation.valueMetrics).map(([metric, data]) => (
                <div key={metric} className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
                  <h4 className="text-sm font-bold text-indigo-800 mb-4">{metric}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">改善前</span>
                      <span className="text-sm font-bold text-slate-700">{data.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">改善後</span>
                      <span className="text-sm font-bold text-green-600">{data.after}</span>
                    </div>
                    <div className="pt-3 border-t border-indigo-200">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500">改善幅度</span>
                        <span className="text-lg font-black text-indigo-600">{data.improvement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white rounded-2xl border border-emerald-200 shadow-sm mt-6">
              <h4 className="text-lg font-black text-emerald-900 mb-2">CFO / 老闆最容易看懂的 ROI 速算</h4>
              <p className="text-sm text-slate-700 mb-4">這一塊的目的很單純：不要只說軟體會提升價值，而是直接把它翻成財務部門能快速驗算的三個公式。這會讓軟體部門更像投資案，而不是抽象策略。</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {financialImpactCalculator.calculations.map((item, idx) => (
                  <div key={idx} className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <h5 className="text-sm font-black text-emerald-800 mb-3">{item.name}</h5>
                    <p className="text-xs text-slate-600 mb-3"><span className="font-bold text-slate-500">公式：</span>{item.formula}</p>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">客戶情境：</span>{item.example.customerScenario}</p>
                      <p><span className="font-bold text-rose-700">沒有軟體：</span>{item.example.withoutSoftware}</p>
                      <p><span className="font-bold text-emerald-700">有了軟體：</span>{item.example.withSoftware}</p>
                      <p><span className="font-bold text-blue-700">可量化價值：</span>{item.example.savings}</p>
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-xl border border-emerald-100">
                      <p className="text-xs font-semibold text-emerald-900">會議一句話：{item.talkingPoint}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-emerald-900 rounded-2xl text-white">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200 mb-3">Quick financial summary</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p><span className="font-bold text-emerald-200">Year-1 可見價值：</span>{financialImpactCalculator.totalValueSummary.year1Value}</p>
                    <p><span className="font-bold text-emerald-200">軟體成本：</span>{financialImpactCalculator.totalValueSummary.softwareCost}</p>
                    <p><span className="font-bold text-emerald-200">淨收益：</span>{financialImpactCalculator.totalValueSummary.netBenefit}</p>
                  </div>
                  <div className="space-y-2">
                    <p><span className="font-bold text-emerald-200">ROI：</span>{financialImpactCalculator.totalValueSummary.roi}</p>
                    <p><span className="font-bold text-emerald-200">回收期：</span>{financialImpactCalculator.totalValueSummary.paybackPeriod}</p>
                    <p><span className="font-bold text-emerald-200">競爭重點：</span>{financialImpactCalculator.competitiveContext}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200 mt-6">
              <h4 className="text-lg font-black text-blue-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                戰略訊息
              </h4>
              <div className="space-y-3">
                <p className="text-sm text-blue-700 font-medium">{softwareDifferentiation.strategicMessage.core}</p>
                <div className="space-y-2">
                  {softwareDifferentiation.strategicMessage.proofPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'risk' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">不行動的風險</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softwareDifferentiation.riskOfInaction.map((risk, idx) => (
                <div key={idx} className="p-6 bg-red-50 rounded-2xl border border-red-200">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                    <h4 className="text-sm font-bold text-red-700">{risk.risk}</h4>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">{risk.impact}</p>
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                    <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-green-700 font-medium">{risk.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ask' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">戰略要求</h3>

            <div className="p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl border border-indigo-300 shadow-sm text-white">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-200 mb-2">Board quick card</p>
                  <h4 className="text-lg font-black text-white mb-2">{softwareMoatSummary.headline}</h4>
                  <p className="text-sm text-slate-200 font-medium">{softwareMoatSummary.oneLiner}</p>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/10">
                  <Shield className="w-6 h-6 text-indigo-200" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs font-black text-indigo-200 mb-2">殘酷現實</p>
                  <p className="text-xs text-slate-200">{softwareMoatSummary.brutalReality.insight}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs font-black text-indigo-200 mb-2">財務影響</p>
                  <p className="text-xs text-slate-200 mb-2">{softwareMoatSummary.financialImpact.example}</p>
                  <p className="text-xs font-semibold text-emerald-300">{softwareMoatSummary.financialImpact.roi}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs font-black text-indigo-200 mb-2">競爭現實</p>
                  <p className="text-xs text-slate-200">{softwareMoatSummary.competitiveReality.insight}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareMoatSummary.strategicChoice && (
                  <>
                    <div className="p-4 bg-rose-500/10 rounded-xl border border-rose-300/20">
                      <p className="text-xs font-black text-rose-200 mb-2">{softwareMoatSummary.strategicChoice.optionA.name}</p>
                      <p className="text-xs text-slate-200 mb-2">{softwareMoatSummary.strategicChoice.optionA.outcome}</p>
                      <p className="text-xs text-rose-200">{softwareMoatSummary.strategicChoice.optionA.timeline}｜{softwareMoatSummary.strategicChoice.optionA.opportunityCost}</p>
                    </div>
                    <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-300/20">
                      <p className="text-xs font-black text-emerald-200 mb-2">{softwareMoatSummary.strategicChoice.optionB.name}</p>
                      <p className="text-xs text-slate-200 mb-2">{softwareMoatSummary.strategicChoice.optionB.outcome}</p>
                      <p className="text-xs text-emerald-200">{softwareMoatSummary.strategicChoice.optionB.timeline}｜{softwareMoatSummary.strategicChoice.optionB.upside}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl border border-violet-200 shadow-sm">
              <h4 className="text-lg font-black text-violet-900 mb-2">{softwareDifferentiation.softwareDepartmentMandateSummary.headline}</h4>
              <p className="text-sm text-slate-700 mb-4">{softwareDifferentiation.softwareDepartmentMandateSummary.coreInsight}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareDifferentiation.softwareDepartmentMandateSummary.cards.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-violet-100">
                    <p className="text-xs font-black text-violet-800 mb-2">{item.title}</p>
                    <p className="text-xs text-slate-700 mb-3">{item.detail}</p>
                    <p className="text-xs font-medium text-violet-700">{item.boardWhyItMatters}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-white rounded-xl border border-violet-100">
                <p className="text-sm font-semibold text-violet-900">{softwareDifferentiation.softwareDepartmentMandateSummary.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-200 shadow-sm">
              <h4 className="text-lg font-black text-amber-900 mb-2">給管理層的 30 秒決策卡</h4>
              <p className="text-sm text-slate-700 mb-4">這一塊不是再加資訊量，而是把整份論述濃縮成老闆在會議上真的講得出口的版本：問題、解法、結果、風險、以及最後要拍板的投資要求。</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-white rounded-xl border border-amber-100">
                  <p className="text-xs font-black text-amber-800 mb-2">Problem</p>
                  <p className="text-xs text-slate-700">{softwareDifferentiation.leadershipQuickRef.elevator30s.problem}</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-amber-100">
                  <p className="text-xs font-black text-amber-800 mb-2">Solution</p>
                  <p className="text-xs text-slate-700">{softwareDifferentiation.leadershipQuickRef.elevator30s.solution}</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-amber-100">
                  <p className="text-xs font-black text-amber-800 mb-2">Impact</p>
                  <p className="text-xs text-slate-700">{softwareDifferentiation.leadershipQuickRef.elevator30s.impact}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-rose-50 rounded-xl border border-rose-100">
                  <p className="text-xs font-black text-rose-800 mb-2">如果不做</p>
                  <p className="text-xs text-slate-700">{softwareDifferentiation.leadershipQuickRef.riskOfInaction}</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <p className="text-xs font-black text-emerald-800 mb-2">現在要拍板什麼</p>
                  <p className="text-xs text-slate-700">{softwareDifferentiation.leadershipQuickRef.ask}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-lg font-black text-slate-900 mb-2">把「軟體很重要」翻成董事會真的會拍板的比較表</h4>
              <p className="text-sm text-slate-700 mb-4">很多簡報最後停在「軟體值得投資」，但管理層其實更想知道：如果投、不投，各自會換到什麼結果。這個 decision matrix 讓軟體部門看起來更像正式投資案，而不是抽象願景。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {leadershipDecisionMatrix.decisionCriteria.slice(0, 4).map((criteria, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                    <h5 className="text-sm font-black text-slate-900 mb-2">{criteria.criterion}</h5>
                    <p className="text-xs text-slate-500 mb-3">{criteria.question}</p>
                    <div className="space-y-3">
                      <div className="p-3 bg-rose-50 rounded-xl border border-rose-100">
                        <p className="text-xs font-black text-rose-700 mb-1">{criteria.option1.name}</p>
                        <p className="text-xs text-slate-700">{criteria.option1.outcome}</p>
                        {criteria.option1.risk && <p className="text-xs text-rose-600 mt-2">風險：{criteria.option1.risk}</p>}
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                        <p className="text-xs font-black text-emerald-700 mb-1">{criteria.option2.name}</p>
                        <p className="text-xs text-slate-700">{criteria.option2.outcome}</p>
                        {criteria.option2.upside && <p className="text-xs text-emerald-600 mt-2">上行：{criteria.option2.upside}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <p className="text-xs font-black text-emerald-800 mb-2">投資軟體的整體判斷</p>
                  <p className="text-sm font-semibold text-emerald-900">{leadershipDecisionMatrix.riskReward.invest.netAssessment}</p>
                  <ul className="mt-3 space-y-2 text-xs text-slate-700">
                    {leadershipDecisionMatrix.riskReward.invest.upside.slice(0, 3).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-rose-50 rounded-xl border border-rose-100">
                  <p className="text-xs font-black text-rose-800 mb-2">不投資的整體判斷</p>
                  <p className="text-sm font-semibold text-rose-900">{leadershipDecisionMatrix.riskReward.notInvest.netAssessment}</p>
                  <ul className="mt-3 space-y-2 text-xs text-slate-700">
                    {leadershipDecisionMatrix.riskReward.notInvest.downside.slice(0, 3).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-emerald-200 shadow-sm">
              <h4 className="text-lg font-black text-emerald-900 mb-2">把軟體部門從口號變成可被季度治理的 KPI</h4>
              <p className="text-sm text-slate-700 mb-4">這一塊直接回答董事會另一個常見疑問：就算批准投資，之後要怎麼管？與其只說軟體很重要，不如把軟體部門的成敗拆成 attach rate、handoff time、remote resolution、lifecycle adoption 等可追蹤指標，讓管理層每季都能做 go / no-go 判斷。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {softwareDepartmentScorecard.kpis.slice(0, 4).map((kpi, idx) => (
                  <div key={idx} className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h5 className="text-sm font-black text-emerald-800">{kpi.metric}</h5>
                      <span className="text-xs font-bold text-emerald-700 whitespace-nowrap">{kpi.status}</span>
                    </div>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">定義：</span>{kpi.definition}</p>
                      <p><span className="font-bold text-slate-500">目前基線：</span>{kpi.current}</p>
                      <p><span className="font-bold text-emerald-700">Year 1 → Year 3：</span>{kpi.target.year1} → {kpi.target.year3}</p>
                      <p><span className="font-bold text-amber-700">警戒線：</span>{kpi.threshold}</p>
                      <p><span className="font-bold text-blue-700">落後時動作：</span>{kpi.recommendedAction}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-xs font-black text-slate-900 mb-2">🟢 綠燈</p>
                  <p className="text-xs text-slate-700">{softwareDepartmentScorecard.managementActions.green}</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-xs font-black text-amber-900 mb-2">🟡 黃燈</p>
                  <p className="text-xs text-slate-700">{softwareDepartmentScorecard.managementActions.yellow}</p>
                </div>
                <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
                  <p className="text-xs font-black text-rose-900 mb-2">🔴 紅燈</p>
                  <p className="text-xs text-slate-700">{softwareDepartmentScorecard.managementActions.red}</p>
                </div>
              </div>
              <div className="p-4 bg-emerald-900 rounded-xl text-white">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200 mb-3">Board governance trigger</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-bold text-emerald-200">Level 1：</span>{softwareDepartmentScorecard.escalationMatrix.level1.trigger} → {softwareDepartmentScorecard.escalationMatrix.level1.action}</p>
                  <p><span className="font-bold text-emerald-200">Level 2：</span>{softwareDepartmentScorecard.escalationMatrix.level2.trigger} → {softwareDepartmentScorecard.escalationMatrix.level2.action}</p>
                  <p><span className="font-bold text-emerald-200">Level 3：</span>{softwareDepartmentScorecard.escalationMatrix.level3.trigger} → {softwareDepartmentScorecard.escalationMatrix.level3.action}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-2xl border border-rose-200 shadow-sm">
              <h4 className="text-lg font-black text-rose-900 mb-2">{softwareDifferentiation.procurementDisqualifiers.headline}</h4>
              <p className="text-sm text-slate-700 mb-4">{softwareDifferentiation.procurementDisqualifiers.coreInsight}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareDifferentiation.procurementDisqualifiers.items.map((item, idx) => (
                  <div key={idx} className="p-5 bg-rose-50 rounded-2xl border border-rose-100">
                    <h5 className="text-sm font-black text-rose-800 mb-3">{item.title}</h5>
                    <div className="space-y-3 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">為什麼會卡案：</span>{item.whyItKillsDeals}</p>
                      <p><span className="font-bold text-amber-700">外部訊號：</span>{item.marketProof}</p>
                      <p><span className="font-bold text-emerald-700">Foxconn 該怎麼補位：</span>{item.foxconnImplication}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-rose-50 rounded-xl border border-rose-100">
                <p className="text-sm font-semibold text-rose-900">{softwareDifferentiation.procurementDisqualifiers.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
              <div className="space-y-4">
                {softwareDifferentiation.strategicAsk.items.map((item, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-indigo-100">
                    <h4 className="text-sm font-bold text-indigo-700 mb-2">{item.what}</h4>
                    <p className="text-xs text-slate-600 mb-2">{item.rationale}</p>
                    <div className="flex items-center gap-2 text-xs text-indigo-500 font-medium">
                      <Target className="w-3 h-3" />
                      {item.timeline}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
              <h4 className="text-lg font-black text-green-800 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                成功指標
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(softwareDifferentiation.successMetrics).map(([metric, data]) => (
                  <div key={metric} className="p-4 bg-white rounded-xl border border-green-100">
                    <h5 className="text-sm font-bold text-green-700 mb-2">{metric}</h5>
                    <p className="text-xs text-slate-600 mb-2">{data.definition}</p>
                    <p className="text-xs text-green-600 font-medium">目標：{data.target}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoftwareDifferentiationView;
