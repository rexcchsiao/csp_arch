import React, { useState } from 'react';
import { Target, Trophy, Shield, Zap, TrendingUp, Users, Lightbulb, CheckCircle, AlertTriangle, ExternalLink, BarChart3, Layers, Gauge, HelpCircle } from 'lucide-react';
import { competitiveLandscape } from './competitive-landscape.js';
import { softwareDifferentiation } from './software-differentiation.js';
import { customerDecisionCriteria, softwareRevenueOwnershipMap } from './executive-brief.js';
import { competitiveSources } from './competitive-sources.js';

const CompetitiveLandscapeView = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '戰略總覽', icon: <Target className="w-4 h-4" /> },
    { id: 'differentiation', label: '差異化分析', icon: <Trophy className="w-4 h-4" /> },
    { id: 'pain-points', label: '痛點分析', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'why-now', label: '為什麼是現在', icon: <Zap className="w-4 h-4" /> },
    { id: 'strategic-ask', label: '戰略要求', icon: <TrendingUp className="w-4 h-4" /> },
  ];


  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <BarChart3 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black">競爭格局分析</h2>
            <p className="text-blue-100 text-sm font-medium">Foxconn vs. NVIDIA Base Command / Mission Control</p>
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
                  ? 'bg-white text-blue-600 shadow-lg'
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
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NVIDIA Base Command Manager */}
              <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-black text-green-800">NVIDIA Base Command Manager</h3>
                </div>
                <p className="text-sm text-green-700 mb-3">{competitiveLandscape.nvidia.baseCommandManager.positioning}</p>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-green-600 uppercase">主要功能</h4>
                  <ul className="space-y-1">
                    {competitiveLandscape.nvidia.baseCommandManager.keyFeatures.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-xs text-green-700 flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={competitiveLandscape.nvidia.baseCommandManager.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-green-600 hover:underline">
                  <ExternalLink className="w-3 h-3" />
                  官方資訊
                </a>
              </div>

              {/* NVIDIA Mission Control */}
              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Gauge className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-black text-purple-800">NVIDIA Mission Control</h3>
                </div>
                <p className="text-sm text-purple-700 mb-3">{competitiveLandscape.nvidia.missionControl.positioning}</p>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-purple-600 uppercase">主要功能</h4>
                  <ul className="space-y-1">
                    {competitiveLandscape.nvidia.missionControl.keyFeatures.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-xs text-purple-700 flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={competitiveLandscape.nvidia.missionControl.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-purple-600 hover:underline">
                  <ExternalLink className="w-3 h-3" />
                  官方資訊
                </a>
              </div>
            </div>

            {/* Foxconn Opportunity */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-black text-blue-800">{competitiveLandscape.foxconnOpportunity.headline}</h3>
              </div>
              <p className="text-sm text-blue-700 mb-4 font-medium">{competitiveLandscape.foxconnOpportunity.coreInsight}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveLandscape.foxconnOpportunity.differentiation.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-blue-100">
                    <h4 className="text-sm font-bold text-blue-800 mb-2">{item.area}</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-500">NVIDIA:</span>
                        <span className="text-slate-600">{item.nvidia}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-blue-600">Foxconn:</span>
                        <span className="text-slate-600">{item.foxconn}</span>
                      </div>
                      <div className="flex items-start gap-2 text-blue-600">
                        <TrendingUp className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span className="font-medium">{item.whyItMatters}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded-2xl border border-fuchsia-200">
              <div className="flex items-start gap-3 mb-4">
                <Layers className="w-6 h-6 text-fuchsia-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-fuchsia-900">{softwareDifferentiation.softwareDepartmentMandateSummary.headline}</h3>
                  <p className="text-sm text-fuchsia-800 mt-1 font-medium">{softwareDifferentiation.softwareDepartmentMandateSummary.coreInsight}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareDifferentiation.softwareDepartmentMandateSummary.cards.map((card, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-fuchsia-100">
                    <h4 className="text-sm font-black text-fuchsia-800 mb-3">{card.title}</h4>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">差別在哪：</span>{card.detail}</p>
                      <p><span className="font-bold text-fuchsia-600">為什麼董事會要在意：</span>{card.boardWhyItMatters}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-white rounded-xl border border-fuchsia-100">
                <p className="text-sm font-semibold text-fuchsia-900">{softwareDifferentiation.softwareDepartmentMandateSummary.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-emerald-200 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-emerald-900">軟體部門最值得被投資的原因：它能把一次性交機翻成跨年度收入</h3>
                  <p className="text-sm text-emerald-800 mt-1 font-medium">如果老闆只記得一件事，應該是這件：軟體部門不是多做幾個功能，而是把硬體 attach 到更多預算 owner，並把交付、升級、遠端運維與治理風險變成可續約的年約收入。</p>
                </div>
              </div>

              <div className="mb-5 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
                <div className="flex items-start gap-3 mb-4">
                  <Layers className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-black text-emerald-900">{softwareRevenueOwnershipMap.headline}</h4>
                    <p className="text-xs text-emerald-800 mt-1">{softwareRevenueOwnershipMap.coreInsight}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {softwareRevenueOwnershipMap.budgetMap.map((item, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-2xl border border-emerald-100">
                      <h5 className="text-sm font-black text-emerald-800 mb-3">{item.buyer}</h5>
                      <div className="space-y-2 text-xs text-slate-700">
                        <p><span className="font-bold text-slate-500">他們其實在買：</span>{item.whatTheyActuallyPayFor}</p>
                        <p><span className="font-bold text-emerald-700">Foxconn 可賣：</span>{item.foxconnOffer}</p>
                        <p><span className="font-bold text-blue-700">為什麼會續約：</span>{item.whyTheyRenew}</p>
                        <p><span className="font-bold text-slate-500">董事會價值：</span>{item.boardLevelValue}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-white rounded-xl border border-emerald-100">
                  <p className="text-sm font-semibold text-emerald-900">{softwareRevenueOwnershipMap.boardMessage}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">可對接預算 owner</p>
                  <p className="text-3xl font-black text-slate-900">6</p>
                  <p className="text-xs text-slate-600 mt-2">Infra、SRE、Ops、Compliance、FinOps、Facilities 都能買單。</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">續約主軸</p>
                  <p className="text-3xl font-black text-blue-700">6</p>
                  <p className="text-xs text-slate-600 mt-2">Brownfield、Lifecycle、Remote Ops、Air-Gap、Tenant Governance、Facility Assurance。</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">收入型態</p>
                  <p className="text-3xl font-black text-green-700">3</p>
                  <p className="text-xs text-slate-600 mt-2">整合專案、年度訂閱、SLA / 升級事件顧問費可疊加。</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl border border-emerald-200 text-white">
                  <p className="text-xs font-bold uppercase tracking-wide mb-2 text-emerald-100">一句話總結</p>
                  <p className="text-sm font-black leading-snug">軟體部門不是成本中心，是把 server BOM 變成 ARR 的 attach engine。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareDifferentiation.serviceOfferings.budgetMap.rows.slice(0, 3).map((row, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-emerald-100">
                    <h4 className="text-sm font-black text-emerald-800 mb-3">{row.service}</h4>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">誰付錢：</span>{row.budgetOwner}</p>
                      <p><span className="font-bold text-slate-500">為什麼現在會買：</span>{row.whyNow}</p>
                      <p><span className="font-bold text-blue-600">為什麼明年還會續：</span>{row.renewalDriver}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-sm font-semibold text-emerald-900">管理層該記住的一句話：<span className="text-slate-700">真正值得投資的，不是 another dashboard，而是讓軟體部門把 deployment、lifecycle、remote ops 與治理風險收斂成可被報價、可被續約、也可被董事會追蹤的收入責任。</span></p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-indigo-200 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <Layers className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-indigo-900">Foxconn 最獨特、也最該被放大的牌：Factory-to-Operations Handoff</h3>
                  <p className="text-sm text-indigo-800 mt-1 font-medium">別人多半在賣平台或硬體，但 Foxconn 天然站在工廠預載、硬體驗收、韌體基線與 Day-2 維運交界。這讓軟體部門能把「交機」直接翻成「更快進營運、更少灰色地帶、更容易續約」的價值主張。</p>
                </div>
              </div>

              {competitiveLandscape.uniqueServices
                ?.filter((service) => service.name === 'Factory-to-Operations Handoff Assurance')
                .map((service, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
                      <h4 className="text-sm font-black text-indigo-800 mb-3">為什麼這一張牌只有 Foxconn 特別有說服力</h4>
                      <div className="space-y-2 text-xs text-slate-700">
                        <p><span className="font-bold text-slate-500">客戶痛點：</span>{service.painSolved}</p>
                        <p><span className="font-bold text-indigo-600">Foxconn 獨特性：</span>{service.whyUnique}</p>
                        <p><span className="font-bold text-green-600">怎麼收費：</span>{service.monetization}</p>
                      </div>
                    </div>
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                      <h4 className="text-sm font-black text-slate-900 mb-3">為什麼這能強化軟體部門價值</h4>
                      <div className="space-y-2 text-xs text-slate-700">
                        <p><span className="font-bold text-slate-500">預算 owner：</span>{service.budgetOwner}</p>
                        <p><span className="font-bold text-slate-500">續約驅動：</span>{service.renewalDriver}</p>
                        <p><span className="font-bold text-slate-500">市場佐證：</span>{service.evidence}</p>
                      </div>
                      <a href={service.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                        <ExternalLink className="w-3 h-3" />
                        來源連結
                      </a>
                    </div>
                  </div>
                ))}

              <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-sm font-semibold text-indigo-900">管理層該記住的一句話：<span className="text-slate-700">如果軟體部門能把工廠預載、驗收、版本基線與 Day-2 接成同一條服務鏈，Foxconn 賣的就不只是 AI 伺服器，而是更快投產、風險更低、而且可續約的交付結果。</span></p>
              </div>
            </div>

            <div className="p-6 bg-sky-50 rounded-2xl border border-sky-200">
              <div className="flex items-start gap-3 mb-4">
                <Users className="w-6 h-6 text-sky-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-sky-900">大型 CSP / Hyperscaler 為什麼還是會買 Foxconn 軟體？</h3>
                  <p className="text-sm text-sky-800 mt-1 font-medium">就算客戶有很強的內部平台團隊，他們也不想把每一個基礎設施髒活都自己扛。真正會外包的，是那些不差異化、但失敗代價很高的 Day-2 工作。</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveLandscape.hyperscalerWhyItMatters.reasons.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-sky-100">
                    <h4 className="text-sm font-black text-sky-800 mb-2">{item.reason}</h4>
                    <p className="text-xs text-slate-700 mb-3">{item.explanation}</p>
                    <div className="p-3 bg-sky-50 rounded-xl border border-sky-100">
                      <p className="text-xs font-bold text-sky-700 mb-1">對客戶的直接結果</p>
                      <p className="text-xs text-slate-700">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-5 bg-white rounded-2xl border border-sky-100">
                <div className="flex items-start gap-3 mb-3">
                  <Layers className="w-5 h-5 text-sky-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-black text-sky-900">再講白一點：Hyperscaler 最常外包的，不是寫功能，而是承接責任鏈</h4>
                    <p className="text-xs text-slate-600 mt-1">真正容易被外包出去的，是那些 <span className="font-semibold text-slate-900">不直接差異化、但一出事就很貴</span> 的工作：工廠預載到現場驗收的 handoff、版本基線、夜間遠端診斷、dispatch readiness、evidence pack 與 RCA 交付。</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                    <p className="text-xs font-bold text-sky-700 mb-2">客戶內部團隊會想省下什麼？</p>
                    <p className="text-xs text-slate-700">避免再養一支 20-50 人 team 去接 factory-to-ops handoff、firmware / lifecycle governance 與 24×7 incident follow-through。</p>
                  </div>
                  <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                    <p className="text-xs font-bold text-sky-700 mb-2">Foxconn 比較容易被買單在哪？</p>
                    <p className="text-xs text-slate-700">不是 another dashboard，而是把交機、驗收、遠端證據收集、dispatch 判斷與 Day-2 runbook 做成正式服務責任。</p>
                  </div>
                  <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                    <p className="text-xs font-bold text-sky-700 mb-2">為什麼這會提高軟體部門價值？</p>
                    <p className="text-xs text-slate-700">因為這類工作直接碰到 uptime、time-to-revenue 與跨團隊協調成本，最容易被採購成 SLA / 年約，而不是一次性功能費。</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {competitiveLandscape.uniqueServices
                    ?.filter((service) => service.name === 'Remote Diagnostics & Dispatch Readiness')
                    .map((service, idx) => (
                      <React.Fragment key={idx}>
                        <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                          <p className="text-xs font-bold text-sky-700 mb-2">最容易被採購成正式服務的是什麼？</p>
                          <div className="space-y-2 text-xs text-slate-700">
                            <p><span className="font-bold text-slate-500">服務：</span>{service.name}</p>
                            <p><span className="font-bold text-slate-500">誰會買：</span>{service.budgetOwner}</p>
                            <p><span className="font-bold text-slate-500">怎麼收費：</span>{service.monetization}</p>
                            <p><span className="font-bold text-slate-500">買的其實是：</span>{service.painSolved}</p>
                          </div>
                        </div>
                        <div className="p-4 bg-white rounded-xl border border-sky-100">
                          <p className="text-xs font-bold text-sky-700 mb-2">為什麼這張牌能把軟體部門變成收入 owner？</p>
                          <div className="space-y-2 text-xs text-slate-700">
                            <p><span className="font-bold text-slate-500">Foxconn 優勢：</span>{service.whyUnique}</p>
                            <p><span className="font-bold text-slate-500">會續約的理由：</span>{service.renewalDriver}</p>
                          </div>
                          <a href={service.source} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:underline">
                            <ExternalLink className="w-3 h-3" />
                            來源連結
                          </a>
                        </div>
                      </React.Fragment>
                    ))}
                </div>
                <p className="text-sm font-semibold text-sky-900">管理層該記住的一句話：<span className="text-slate-700">CSP 不是缺寫軟體的人，而是不想再養一支 20-50 人團隊去接 brownfield integration、factory-to-ops handoff、firmware / lifecycle 風險與 24×7 remote ops。這些剛好就是軟體部門最能被定價的價值。</span></p>
              </div>
            </div>

            <div className="p-6 bg-violet-50 rounded-2xl border border-violet-200">
              <div className="flex items-start gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-violet-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-violet-900">外部市場其實已經在替軟體部門說話</h3>
                  <p className="text-sm text-violet-800 mt-1 font-medium">把官方產品頁翻成採購語言後，會更容易讓老闆理解：客戶核准的不是「功能很多」，而是更快上線、更穩營運、以及有人願意對 Day-2 結果負責。</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {competitiveLandscape.procurementLanguageShift?.cards.map((card, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-violet-100">
                    <h4 className="text-sm font-black text-violet-800 mb-3">{card.title}</h4>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">市場訊號：</span>{card.marketSignal}</p>
                      <p><span className="font-bold text-slate-500">採購會問：</span>{card.buyerQuestion}</p>
                      <p><span className="font-bold text-violet-600">Foxconn 該怎麼講：</span>{card.foxconnPlay}</p>
                    </div>
                    <a href={card.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 hover:underline">
                      <ExternalLink className="w-3 h-3" />
                      {card.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-5 bg-white rounded-2xl border border-violet-100">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-rose-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-black text-violet-900">再講白一點：沒有軟體部門，案子最容易死在哪些採購關卡？</h4>
                    <p className="text-xs text-slate-600 mt-1">這不是功能少不少的問題，而是客戶會直接質疑誰對上線、升級、治理與 handoff 負責。</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {softwareDifferentiation.procurementDisqualifiers.items.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="p-4 bg-rose-50 rounded-xl border border-rose-100">
                      <p className="text-xs font-black text-rose-800 mb-2">{item.title}</p>
                      <div className="space-y-2 text-xs text-slate-700">
                        <p><span className="font-bold text-slate-500">為什麼會卡：</span>{item.whyItKillsDeals}</p>
                        <p><span className="font-bold text-violet-700">Foxconn 該補位：</span>{item.foxconnImplication}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-violet-50 rounded-xl border border-violet-100">
                  <p className="text-sm font-semibold text-violet-900">一句話總結：如果沒有獨立的軟體 owner，Foxconn 就很難在採購最後一哩清楚回答「多久能上線、誰接住升級風險、共享之後怎麼治理、交機後誰負責 handoff」。</p>
                </div>
              </div>

              <div className="mt-4 p-5 bg-white rounded-2xl border border-violet-100">
                <div className="flex items-start gap-3 mb-4">
                  <Trophy className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-black text-violet-900">客戶其實怎麼評分供應商：Foxconn 最容易贏的不是功能數，而是責任深度</h4>
                    <p className="text-xs text-slate-600 mt-1">把採購問題直接翻成評分表後，軟體部門的價值會更具體：不是「有沒有平台」，而是能不能在 deployment、Day-2、brownfield 與 multi-vendor 上明顯勝出。</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {customerDecisionCriteria.evaluationCriteria.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="p-4 bg-violet-50 rounded-xl border border-violet-100">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="text-xs font-black text-violet-800">{item.criterion}</p>
                        <span className="text-[11px] font-bold text-violet-600">權重 {item.weight}</span>
                      </div>
                      <p className="text-xs text-slate-700 mb-2">{item.description}</p>
                      <div className="space-y-1.5 text-xs text-slate-700">
                        <p><span className="font-bold text-violet-700">Foxconn：</span>{item.foxconnDetail}</p>
                        <p><span className="font-bold text-slate-500">為什麼會贏：</span>{item.winningArgument}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-violet-50 rounded-xl border border-violet-100">
                  <p className="text-sm font-semibold text-violet-900">管理層該記住的一句話：<span className="text-slate-700">如果客戶的正式評分表本來就在看 deployment speed、GPU utilization、remote ops 與 multi-vendor support，那 Foxconn 軟體部門的價值就不是 nice-to-have，而是直接決定能不能從硬體競標進到高分決選。</span></p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-violet-100">
                  <p className="text-xs font-bold text-violet-500 uppercase tracking-wide mb-2">可對應預算 owner</p>
                  <p className="text-3xl font-black text-slate-900">6</p>
                  <p className="text-xs text-slate-600 mt-2">Infra、SRE、Ops、CIO/Compliance、FinOps/Platform、Facilities 都有理由買單。</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-violet-100">
                  <p className="text-xs font-bold text-violet-500 uppercase tracking-wide mb-2">可續約主軸</p>
                  <p className="text-3xl font-black text-blue-700">6</p>
                  <p className="text-xs text-slate-600 mt-2">Brownfield、Lifecycle、Remote Ops、Sovereign/Air-Gap、Tenant Governance、Facility Assurance。</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-violet-100">
                  <p className="text-xs font-bold text-violet-500 uppercase tracking-wide mb-2">收入型態</p>
                  <p className="text-3xl font-black text-green-700">3</p>
                  <p className="text-xs text-slate-600 mt-2">一次性整合、年度訂閱、SLA / 升級事件顧問費可以疊加。</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl border border-violet-200 text-white">
                  <p className="text-xs font-bold uppercase tracking-wide mb-2 text-violet-100">管理層一句話</p>
                  <p className="text-sm font-black leading-snug">軟體部門不是成本中心，是把單次交機變成跨部門、跨年度收入的 attach engine。</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-white rounded-xl border border-violet-100">
                <p className="text-sm font-semibold text-violet-900">{competitiveLandscape.procurementLanguageShift?.boardMessage}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-rose-200 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-rose-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-rose-900">董事會最該問的不是「功能做了多少」，而是「少了軟體部門，案子會卡死在哪」</h3>
                  <p className="text-sm text-rose-800 mt-1 font-medium">這段很適合拿來補強簡報的說服力：它把軟體部門的價值從「加值功能」翻成「沒有就可能過不了採購 / 上不了線 / 不敢擴大」的 deal blocker。這種語言，老闆通常更有感。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareDifferentiation.procurementDisqualifiers.items.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-5 bg-rose-50 rounded-2xl border border-rose-100">
                    <h4 className="text-sm font-black text-rose-800 mb-3">{item.title}</h4>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">為什麼會卡單：</span>{item.whyItKillsDeals}</p>
                      <p><span className="font-bold text-rose-700">Foxconn 該補上的軟體責任：</span>{item.foxconnImplication}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-rose-50 rounded-xl border border-rose-100">
                <p className="text-sm font-semibold text-rose-900">一句話給董事會：<span className="text-slate-700">硬體規格讓 Foxconn 有資格進場，但 Deployment Assurance、Lifecycle / Availability owner、Governance layer 與 Factory-to-Operations handoff owner，才決定案子能不能真的成交、真的上線、也真的續約。</span></p>
              </div>
            </div>

            <div className="p-6 bg-cyan-50 rounded-2xl border border-cyan-200">
              <div className="flex items-start gap-3 mb-4">
                <Layers className="w-6 h-6 text-cyan-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-cyan-900">有了 Redfish、OpenTelemetry、OpenCost、SSDF，為什麼還是一定要有軟體部門？</h3>
                  <p className="text-sm text-cyan-800 mt-1 font-medium">因為標準與開源層只解決「能不能讀資料、管設備、量測成本、定義流程」，卻沒有替客戶接住 maintenance window、rollback、dispatch readiness、budget guardrail、audit evidence 與 SLA 問責。這正是軟體部門最能被定價的地方。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
                {competitiveSources.standards
                  .filter((item) => (
                    item.name === 'DMTF Redfish' || item.name === 'OpenTelemetry' || item.name === 'OpenCost' || item.name === 'NIST Secure Software Development Framework (SSDF)'
                  ))
                  .map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 bg-white rounded-2xl border border-cyan-100 hover:bg-cyan-100/40 transition-colors"
                    >
                      <p className="text-sm font-black text-slate-900 mb-2">{item.name}</p>
                      <p className="text-xs text-slate-700 leading-relaxed mb-2">{item.keyFeature}</p>
                      <p className="text-[11px] font-semibold text-cyan-700">Foxconn angle: {item.ourAdvantage}</p>
                    </a>
                  ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
                <div className="p-4 bg-white rounded-2xl border border-cyan-100">
                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-wide mb-2">標準解決了什麼</p>
                  <p className="text-sm font-black text-slate-900 mb-2">設備介面、遙測格式、成本量測、開發治理語言</p>
                  <p className="text-xs text-slate-700">Redfish 讓硬體 API 標準化，OpenTelemetry 讓訊號格式標準化，OpenCost 讓 GPU / K8s 成本可視化更標準化，SSDF 讓安全開發與供應商審查有共同語言。</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-cyan-100">
                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-wide mb-2">標準沒有接住什麼</p>
                  <p className="text-sm font-black text-slate-900 mb-2">升級責任、回滾紀律、派工判斷、稽核證據</p>
                  <p className="text-xs text-slate-700">客戶真正怕的不是看不到資料，而是出事時誰來決定 maintenance window、誰先遠端縮小 root cause、誰交 rollback 與 audit evidence。</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-cyan-100">
                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-wide mb-2">連成本可視化都在 commodity 化</p>
                  <p className="text-sm font-black text-slate-900 mb-2">下一個預算焦點會是 quota、showback 與 budget guardrail</p>
                  <p className="text-xs text-slate-700">當 OpenCost 這類工具已能把 GPU / container 成本看得更清楚，客戶下一步自然會問：誰來定 quota、誰批准例外、runaway inference spend 誰負責、以及成本怎麼對回 BU / tenant？</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-cyan-100">
                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-wide mb-2">這為什麼抬高軟體部門價值</p>
                  <p className="text-sm font-black text-slate-900 mb-2">因為軟體部門把 commodity signals 變成可續約責任</p>
                  <p className="text-xs text-slate-700">當別人只能賣 API、monitoring 或 cost panel，Foxconn 軟體部門可以賣 governance、evidence、dispatch readiness、quota policy 與 Day-2 accountability，這才是 attach rate 與年約收入來源。</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-cyan-100">
                <p className="text-sm font-semibold text-cyan-900">董事會該記住的一句話：<span className="text-slate-700">標準化會讓底層能力越來越 commodity，但也因此更凸顯上層營運治理的重要性；真正把 Redfish、OpenTelemetry、OpenCost、SSDF 轉成續約收入的人，不是硬體團隊，而是軟體部門。</span></p>
              </div>
            </div>

            <div className="p-6 bg-rose-50 rounded-2xl border border-rose-200">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-rose-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-rose-900">下一條很值得搶的，不只是維運預算，而是 AI governance / security / audit 預算</h3>
                  <p className="text-sm text-rose-800 mt-1 font-medium">這能直接補強軟體部門的價值主張：不是只讓系統更好管，而是讓受監管與高敏感客戶更敢簽，也讓 Foxconn 從 Infra / SRE 預算往 CISO、Compliance 與 AI governance program 預算延伸。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-white rounded-2xl border border-rose-100">
                  <p className="text-xs font-bold text-rose-600 uppercase tracking-wide mb-2">為什麼現在會被買單</p>
                  <p className="text-sm font-black text-slate-900 mb-2">模型來源、更新紀錄、evidence pack 已經變成正式採購語言</p>
                  <p className="text-xs text-slate-700">很多 regulated AI 專案真正卡住的，不是模型不能跑，而是誰來交 model provenance、logging、record-keeping 與 audit evidence。這正是軟體部門最能產品化的治理責任。</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-rose-100">
                  <p className="text-xs font-bold text-rose-600 uppercase tracking-wide mb-2">新的預算 owner</p>
                  <p className="text-sm font-black text-slate-900 mb-2">不只對 Infrastructure / SRE 講，還能對 CISO / Compliance 講</p>
                  <p className="text-xs text-slate-700">一旦提案能回答 audit、recoverability、AI BOM、sovereign operation 與 attested update governance，Foxconn 就能切進原本硬體案較難碰到的治理與資安預算。</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-rose-100">
                  <p className="text-xs font-bold text-rose-600 uppercase tracking-wide mb-2">對董事會最有感的差異</p>
                  <p className="text-sm font-black text-slate-900 mb-2">軟體部門從維運工具升級成 trustworthy AI operations owner</p>
                  <p className="text-xs text-slate-700">這會把軟體的角色從「幫硬體補功能」升級成「替 Foxconn 承接 AI 治理、證據鏈與續約責任」，更容易被視為高毛利的戰略資產。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {competitiveSources.regulations.filter((item) => (
                  item.name === 'EU AI Act (official EU text / implementation portal)' || item.name === 'NIST AI Risk Management Framework'
                )).map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white rounded-2xl border border-rose-100 hover:bg-rose-100/40 transition-colors"
                  >
                    <p className="text-sm font-black text-slate-900 mb-2">{item.name}</p>
                    <p className="text-xs text-slate-700 leading-relaxed mb-2">{item.keyFeature}</p>
                    <p className="text-[11px] font-semibold text-rose-700">Verified {item.lastVerified}</p>
                  </a>
                ))}
              </div>

              <div className="p-4 bg-white rounded-xl border border-rose-100">
                <p className="text-sm font-semibold text-rose-900">董事會該記住的一句話：<span className="text-slate-700">軟體部門如果能把 model provenance、audit evidence、recoverability 與 sovereign operation 做成可被稽核的服務，就不是在幫硬體補功能，而是在替 Foxconn 打開原本碰不到的治理與資安預算。</span></p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'differentiation' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">Foxconn 的戰略定位</h3>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono">
                {competitiveLandscape.foxconnOpportunity.strategicPositioning}
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'pain-points' && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
              <div className="flex items-start gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-xl font-black text-amber-900 mb-2">{competitiveLandscape.day2OperationsThesis.headline}</h3>
                  <p className="text-sm text-amber-800 font-medium">{competitiveLandscape.day2OperationsThesis.summary}</p>
                </div>
              </div>
              <div className="space-y-2">
                {competitiveLandscape.day2OperationsThesis.proofPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-amber-900">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0 text-amber-600" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-black text-slate-800 mb-4">未解決的痛點與 Foxconn 方案</h3>
            {competitiveLandscape.unsolvedPainPoints.map((point, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{point.problem}</h4>
                    <p className="text-xs text-slate-600 mt-1">{point.description}</p>
                  </div>
                </div>
                <div className="ml-8 space-y-2">
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-700">Foxconn 方案</p>
                      <p className="text-xs text-slate-600">{point.foxconnSolution}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-700">證據</p>
                      <p className="text-xs text-slate-600">{point.evidence}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
              <div className="flex items-start gap-3 mb-4">
                <Target className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-black text-indigo-900 mb-2">{competitiveLandscape.softwareDepartmentWedge.headline}</h3>
                  <p className="text-sm text-indigo-800 font-medium">{competitiveLandscape.softwareDepartmentWedge.summary}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveLandscape.softwareDepartmentWedge.wedges.map((item, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-indigo-100">
                    <h4 className="text-sm font-black text-indigo-800 mb-3">{item.name}</h4>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-slate-500">客戶為何買：</span>{item.customerTrigger}</p>
                      <p><span className="font-bold text-indigo-600">為什麼是 Foxconn：</span>{item.whyFoxconnWins}</p>
                      <p><span className="font-bold text-slate-500">別人為何不想做：</span>{item.whyOthersAvoid}</p>
                      <p><span className="font-bold text-slate-500">如何收費：</span>{item.monetization}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-white rounded-xl border border-indigo-100">
                <p className="text-sm font-semibold text-indigo-800">{competitiveLandscape.softwareDepartmentWedge.boardMessage}</p>
              </div>
            </div>

            <div className="pt-2 space-y-6">
              <div>
                <h3 className="text-xl font-black text-slate-800 mb-4">可被客戶感知、可被定價的獨特服務</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {competitiveLandscape.uniqueServices?.map((service, idx) => (
                    <div key={idx} className="p-5 bg-blue-50 rounded-2xl border border-blue-200">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="text-sm font-black text-blue-900">{service.name}</h4>
                        <Layers className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      </div>
                      <div className="space-y-2 text-xs">
                        <p><span className="font-bold text-slate-500">客群：</span><span className="text-slate-700">{service.targetCustomer}</span></p>
                        <p><span className="font-bold text-slate-500">收費方式：</span><span className="text-slate-700">{service.monetization}</span></p>
                        <p><span className="font-bold text-slate-500">預算 owner：</span><span className="text-slate-700">{service.budgetOwner}</span></p>
                        <p><span className="font-bold text-slate-500">續約理由：</span><span className="text-slate-700">{service.renewalDriver}</span></p>
                        <p><span className="font-bold text-slate-500">解決什麼：</span><span className="text-slate-700">{service.painSolved}</span></p>
                        <p><span className="font-bold text-blue-600">為什麼只有我們比較有機會做成：</span><span className="text-slate-700">{service.whyUnique}</span></p>
                        <p><span className="font-bold text-slate-500">佐證：</span><span className="text-slate-700">{service.evidence}</span></p>
                        <a href={service.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-blue-600 font-bold hover:underline">
                          <ExternalLink className="w-3 h-3" />
                          來源連結
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-black text-slate-900 mb-2">{competitiveLandscape.serviceValueCaptureMatrix?.headline}</h3>
                <p className="text-sm text-slate-700 mb-4">{competitiveLandscape.serviceValueCaptureMatrix?.summary}</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="p-4 bg-white rounded-2xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">可對應預算 owner</p>
                    <p className="text-3xl font-black text-slate-900">6</p>
                    <p className="text-xs text-slate-600 mt-2">Infra、SRE、Ops、CIO/Compliance、FinOps/Platform、Facilities 都能成為買單單位。</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">可續約服務主軸</p>
                    <p className="text-3xl font-black text-blue-700">6</p>
                    <p className="text-xs text-slate-600 mt-2">Brownfield、Lifecycle、Remote Ops、Sovereign/Air-Gap、Tenant Governance、Facility Assurance。</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">收入型態</p>
                    <p className="text-3xl font-black text-green-700">3</p>
                    <p className="text-xs text-slate-600 mt-2">一次性整合、年度訂閱、SLA / 升級事件顧問費可以疊加。</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">董事會關鍵句</p>
                    <p className="text-sm font-black text-indigo-800 leading-snug">軟體部門不是成本中心，是把單次交機變成跨部門、跨年度收入的 attach engine。</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {competitiveLandscape.serviceValueCaptureMatrix?.rows.map((row, idx) => (
                    <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200">
                      <h4 className="text-sm font-black text-slate-900 mb-3">{row.service}</h4>
                      <div className="space-y-2 text-xs text-slate-700">
                        <p><span className="font-bold text-slate-500">誰付錢：</span>{row.budgetOwner}</p>
                        <p><span className="font-bold text-slate-500">何時會買：</span>{row.trigger}</p>
                        <p><span className="font-bold text-blue-600">為何會續約：</span>{row.recurringReason}</p>
                        <p><span className="font-bold text-green-600">董事會看見的結果：</span>{row.boardOutcome}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                  <p className="text-sm font-semibold text-indigo-800">{competitiveLandscape.serviceValueCaptureMatrix?.boardMessage}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'why-now' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">為什麼是現在？市場轉折點</h3>
            <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <Zap className="w-6 h-6 text-amber-600" />
                <div>
                  <h4 className="text-lg font-black text-amber-800">2026 年是 AI 基礎建設的「分水嶺」</h4>
                  <p className="text-sm text-amber-700 mt-1">從「買得到 GPU」轉向「用得好 AI」</p>
                </div>
              </div>
            </div>
            
            {competitiveLandscape.foxconnOpportunity.whyNowSection?.timing && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveLandscape.foxconnOpportunity.whyNowSection.marketShifts?.map((shift, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200">
                    <h4 className="text-sm font-bold text-blue-600 mb-2">{shift.trend}</h4>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-slate-500">影響：</span>
                        <span className="text-slate-600">{shift.implication}</span>
                      </div>
                      <div>
                        <span className="font-bold text-blue-500">Foxconn 行動：</span>
                        <span className="text-slate-600">{shift.foxconnMove}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {competitiveLandscape.foxconnOpportunity.whyNowSection?.windowOfOpportunity && (
              <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-red-800">機會之窗</h4>
                    <p className="text-xs text-red-700 mt-1">{competitiveLandscape.foxconnOpportunity.whyNowSection.windowOfOpportunity}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'strategic-ask' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">戰略要求與成功指標</h3>
            
            {/* Risk of Inaction */}
            <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
              <h4 className="text-lg font-black text-red-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                不行動的風險
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveLandscape.riskOfInaction?.map((risk, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-red-100">
                    <h5 className="text-sm font-bold text-red-700 mb-2">{risk.risk}</h5>
                    <p className="text-xs text-slate-600 mb-2">{risk.impact}</p>
                    <p className="text-xs text-green-600 font-medium">
                      <Shield className="w-3 h-3 inline mr-1" />
                      {risk.mitigation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Ask */}
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <h4 className="text-lg font-black text-blue-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {competitiveLandscape.strategicAsk?.headline}
              </h4>
              <div className="space-y-3">
                {competitiveLandscape.strategicAsk?.items.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-blue-100">
                    <p className="text-sm font-bold text-blue-700 mb-1">{item.what}</p>
                    <p className="text-xs text-slate-600">{item.rationale}</p>
                    <p className="text-xs text-blue-500 font-medium mt-1">時程：{item.timeline}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Timeline */}
            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200">
              <h4 className="text-lg font-black text-amber-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                {competitiveLandscape.riskTimeline?.headline}
              </h4>
              <p className="text-sm text-amber-800 mb-4">{competitiveLandscape.riskTimeline?.summary}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveLandscape.riskTimeline?.milestones.map((milestone, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-amber-100">
                    <p className="text-sm font-black text-amber-800 mb-3">{milestone.quarter}</p>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><span className="font-bold text-green-600">若現在投資：</span>{milestone.ifInvest}</p>
                      <p><span className="font-bold text-red-600">若繼續拖延：</span>{milestone.ifDelay}</p>
                      <p><span className="font-bold text-slate-500">市場結果：</span>{milestone.marketImpact}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-white rounded-xl border border-amber-100">
                <p className="text-sm font-semibold text-amber-900">{competitiveLandscape.riskTimeline?.boardMessage}</p>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
              <h4 className="text-lg font-black text-green-800 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                成功指標
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(competitiveLandscape.successMetrics || {}).map(([metric, data]) => (
                  <div key={metric} className="p-4 bg-white rounded-xl border border-green-100">
                    <p className="text-sm font-bold text-green-700 mb-2">{metric}</p>
                    <p className="text-xs text-slate-600">{data.definition}</p>
                    <p className="text-xs text-green-600 font-medium mt-1">目標：{data.target}</p>
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

export default CompetitiveLandscapeView;
