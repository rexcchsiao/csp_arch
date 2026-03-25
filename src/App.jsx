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
import { buildVsBuyAnalysis } from './build-vs-buy'

const App = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const { responsibilitySplit } = buildVsBuyAnalysis

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
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h2 className="text-2xl font-black mb-4 text-slate-900">給管理層的總覽：為什麼 AI 伺服器一定要有軟體部門</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                真正被客戶買單的，早就不只是 GPU 規格，而是誰能把交機後的 <strong className="text-blue-600">部署速度、生命周期治理、遠端運維、brownfield 整合、power / cooling 事件處理</strong> 接成可持續營運的結果。
                沒有軟體部門，硬體比較容易被看成可替換的 BOM；有軟體部門，Foxconn 才有機會把 AI 伺服器升級成可被續約、可被問責、可被溢價的服務。
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Board takeaway 01</p>
                  <p className="text-sm font-black text-slate-900 mb-2">軟體部門賣的是 Day-2 Assurance</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    關鍵不是第一次裝得起來，而是之後能不能穩定升級、可治理、可稽核、可遠端處理，這才是最容易形成 attach rate 與年約收入的價值層。
                  </p>
                </div>
                <div className="rounded-2xl border border-fuchsia-100 bg-fuchsia-50 p-5">
                  <p className="text-xs font-black uppercase tracking-widest text-fuchsia-600 mb-2">Board takeaway 02</p>
                  <p className="text-sm font-black text-slate-900 mb-2">大型 CSP 買的是責任轉移</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    客戶不是不會做，而是不想自己承接 brownfield 整合、變更窗口、remote diagnostics、dispatch readiness 與設施事件協調這些高風險 Day-2 工作。
                  </p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                  <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-2">Board takeaway 03</p>
                  <p className="text-sm font-black text-slate-900 mb-2">軟體直接影響毛利與續約</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    軟體不是附屬功能，而是把一次性交機翻成 deployment assurance、lifecycle governance、capacity assurance 與 remote ops 年度收入的關鍵槓桿。
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-violet-700 mb-2">Market validation</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">這不是 Foxconn 自說自話：市場領先者已經在賣「軟體化營運結果」</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
                  <div className="rounded-xl border border-violet-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">NVIDIA Mission Control</p>
                    <p className="leading-relaxed">官方主打 cluster life cycle、autonomous recovery、power / cooling control、building management integration；Mission Control 2.3 甚至進一步把 air-gapped deployment 與 leak-detection validation 拉進產品語言。這證明客戶已經願意為 AI factory operations、主權運營與機房事件治理付錢，不是只買 GPU。</p>
                  </div>
                  <div className="rounded-xl border border-violet-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">HPE Private Cloud AI</p>
                    <p className="leading-relaxed">官方直接賣 deploy AI in days, not months、built-in observability、predict problems、continuous service availability。這代表管理層核准的是速度與可用性，而不是另一台伺服器。</p>
                  </div>
                  <div className="rounded-xl border border-violet-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">Dell / Nutanix / Red Hat</p>
                    <p className="leading-relaxed">從 end-to-end lifecycle support 到 AI operating model、cost / access governance，外部大廠都在把治理與 Day-2 服務變成正式產品。Foxconn 若沒有軟體部門，等於自動退出這條預算線。</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-rose-700 mb-2">Proposal filter</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">沒有軟體部門，最容易在哪 4 題直接被刷掉？</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                  <div className="rounded-xl border border-rose-100 bg-white/80 p-4">
                    <p className="font-black text-slate-900 mb-1">1. 多久能上線？</p>
                    <p className="leading-relaxed">若沒有 Deployment Assurance，硬體到貨不等於能進 production。客戶最後看到的不是規格，而是 time-to-revenue 還要不要再等 2-4 週。</p>
                  </div>
                  <div className="rounded-xl border border-rose-100 bg-white/80 p-4">
                    <p className="font-black text-slate-900 mb-1">2. 升級失敗誰負責？</p>
                    <p className="leading-relaxed">若沒有 Lifecycle owner，driver / firmware / CUDA / K8s 任一變更都可能變成 CAB 與 SRE 不敢放行的風險，軟體 attach rate 也很難被核准。</p>
                  </div>
                  <div className="rounded-xl border border-rose-100 bg-white/80 p-4">
                    <p className="font-black text-slate-900 mb-1">3. 半夜出事誰先遠端收斂問題？</p>
                    <p className="leading-relaxed">大型 CSP 真正痛的是 truck roll、帶錯料、跨站點 dispatch 與維修窗口浪費。若提案沒有 remote diagnostics / dispatch readiness，管理層很難相信這是可營運的 AI 服務。</p>
                  </div>
                  <div className="rounded-xl border border-rose-100 bg-white/80 p-4">
                    <p className="font-black text-slate-900 mb-1">4. 共享之後怎麼治理與恢復？</p>
                    <p className="leading-relaxed">若沒有 quota / showback / air-gap governance / recovery evidence，shared GPU cluster 只會變成能跑但沒人敢放大的平台，採購也更容易被拖慢。</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2">High-value service wedge</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">最值得先講清楚的 4 個軟體服務：不是功能，而是可被核准的責任邊界</h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 text-sm text-slate-700">
                  <div className="rounded-xl border border-emerald-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">Factory-to-Operations Handoff Assurance</p>
                    <p className="leading-relaxed">把出廠預載、burn-in、site acceptance、baseline 與 Day-2 runbook 接成同一條交付責任鏈，賣的是更快上線，不是更多安裝工時。</p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">Remote Diagnostics & Dispatch Readiness</p>
                    <p className="leading-relaxed">先遠端把故障範圍縮小、判斷是否要派人、該帶哪些備品，再決定 truck roll；賣的是更少白跑、更短 MTTR，而不是 another dashboard。</p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">Capacity Assurance / Power-Cooling Governance</p>
                    <p className="leading-relaxed">把 rack power cap、cooling event、BMC 遙測與 workload policy 串成可執行的容量治理流程，賣的是延後擴建與保住 SLA，而不只是設施監控。</p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">Tenant Governance & GPU Service Guardrails</p>
                    <p className="leading-relaxed">把 quota、priority、approval workflow、showback / chargeback 與 SLA 例外處理做成共享 GPU 治理服務，賣的是「大家能共用算力又不失控」，直接對接 Platform / FinOps 預算。</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-700 mb-2">Build-vs-buy shortcut</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">大型 CSP / Hyperscaler 真正想聽的，不是「我們會做很多功能」，而是「哪些責任該留在客戶內部、哪些更該交給 Foxconn」</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  {responsibilitySplit.summary}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-2xl border border-sky-100 bg-white/90 p-4">
                    <p className="text-xs font-black uppercase tracking-widest text-sky-700 mb-2">Keep in-house</p>
                    <div className="space-y-3 text-sm text-slate-700">
                      {responsibilitySplit.keepInHouse.slice(0, 2).map((item) => (
                        <div key={item.title}>
                          <p className="font-black text-slate-900 mb-1">{item.title}</p>
                          <p className="text-xs leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-white/90 p-4">
                    <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2">Buy from Foxconn</p>
                    <div className="space-y-3 text-sm text-slate-700">
                      {responsibilitySplit.buyFromFoxconn.slice(0, 3).map((item) => (
                        <div key={item.title}>
                          <p className="font-black text-slate-900 mb-1">{item.title}</p>
                          <p className="text-xs leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-100 bg-white p-4">
                  <p className="text-sm font-semibold text-cyan-900">董事會該記住的一句話：<span className="text-slate-700">{responsibilitySplit.boardMessage}</span></p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900 mb-2">建議閱讀順序</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li><strong className="text-blue-600">CoCo 分析報告：</strong>最完整的董事會論述、競品訊號、服務切口與軟體部門定位。</li>
                  <li><strong className="text-orange-600">800V 高壓電力架構：</strong>AI 機房 power / cooling 升級如何反過來創造新的軟體價值。</li>
                  <li><strong className="text-purple-600">自建 vs 採購：</strong>回答大型 CSP / Hyperscaler 為什麼仍然會買 Foxconn 的軟體與服務。</li>
                </ul>
              </div>
            </div>
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
