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
import { softwareDifferentiation } from './software-differentiation'

const App = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const { responsibilitySplit } = buildVsBuyAnalysis
  const { cards: mandateCards, boardMessage: mandateBoardMessage } = softwareDifferentiation.softwareDepartmentMandateSummary
  const budgetOwnerRows = softwareDifferentiation.serviceOfferings.budgetMap.rows.slice(0, 4)

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
              <div className="rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-fuchsia-700 mb-2">Procurement litmus test</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">老闆只要先問 4 題，就能判斷這是不是「該由軟體部門負責」的價值</h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 text-sm text-slate-700 mb-4">
                  <div className="rounded-xl border border-fuchsia-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">這筆預算買的是功能，還是營運專業？</p>
                    <p className="leading-relaxed">如果客戶買的是 deployment discipline、night-shift incident handling、remote evidence、lifecycle governance，那本質上買的是 operations expertise，不是多一個畫面。</p>
                  </div>
                  <div className="rounded-xl border border-fuchsia-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">出事時誰先遠端把根因縮小？</p>
                    <p className="leading-relaxed">只要答案牽涉 RCA、evidence pack、dispatch readiness、rollback policy，就代表這是軟體部門該承接的責任鏈，而不是硬體附屬支援。</p>
                  </div>
                  <div className="rounded-xl border border-fuchsia-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">升級、斷網、設施事件是誰的 owner？</p>
                    <p className="leading-relaxed">當客戶開始問 maintenance window、air-gapped updates、power / cooling event governance，評分標準就已經從產品功能轉到持續營運能力。</p>
                  </div>
                  <div className="rounded-xl border border-fuchsia-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">這能不能形成年約與續約？</p>
                    <p className="leading-relaxed">如果價值來自 deployment assurance、remote ops、capacity assurance 與治理責任，就不是一次性交機邏輯，而是典型軟體/服務收入。</p>
                  </div>
                </div>
                <div className="rounded-xl border border-fuchsia-100 bg-white p-4">
                  <p className="text-sm font-semibold text-fuchsia-900">董事會該記住的一句話：<span className="text-slate-700">當市場開始願意為「world-class operations team delivered as software」付錢，Foxconn 最該投資的就不是更多附屬功能，而是能承接部署、證據、升級與遠端問責的軟體部門。</span></p>
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2">Why software matters more as infra gets standardized</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">Redfish / OpenBMC / OpenTelemetry 越成熟，越代表客戶會把預算往上層營運能力移動</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
                  <div className="rounded-xl border border-emerald-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">底層訊號正在商品化</p>
                    <p className="leading-relaxed">DMTF Redfish、OpenBMC 與 OpenTelemetry 讓設備管理、遙測與 log / trace 收集愈來愈標準化。這代表「看得到資料」本身愈來愈難溢價。</p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">真正值錢的是把訊號變成責任</p>
                    <p className="leading-relaxed">客戶最後買單的不是 API 或 dashboard，而是誰能把訊號接成 maintenance window、rollback、dispatch readiness、RCA / evidence pack 與 SLA 報表。</p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">這正是軟體部門最該佔的位置</p>
                    <p className="leading-relaxed">當底層能力更開放，Foxconn 更應把軟體部門定位成 operating layer owner：把標準化硬體能力翻成可治理、可問責、可續約的 Day-2 服務結果。</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4">
                  <p className="text-sm font-semibold text-emerald-900">董事會該記住的一句話：<span className="text-slate-700">開放標準沒有削弱軟體部門，反而把價值從「設備可管理」推向「營運可問責」；沒有軟體部門，Foxconn 只能提供訊號，有軟體部門，Foxconn 才能提供結果。</span></p>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-700 mb-2">What procurement is really scoring now</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">從 NVIDIA、HPE、Red Hat 的官方語言來看，採購正在評估的是營運結果，不是功能數量</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700 mb-4">
                  <div className="rounded-xl border border-cyan-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">1. 速度</p>
                    <p className="leading-relaxed">HPE 直接用 deploy AI in days, not months、production deployment in hours 來賣。這代表採購會先看 time-to-value，而不是硬體到貨後還要自己整合多久。</p>
                  </div>
                  <div className="rounded-xl border border-cyan-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">2. 可持續營運</p>
                    <p className="leading-relaxed">NVIDIA Mission Control 已把 cluster lifecycle、autonomous recovery、building management integration、air-gapped deployment、leak-detection validation 放進正式產品語言。這代表 Day-2 風險已經進入採購評分表。</p>
                  </div>
                  <div className="rounded-xl border border-cyan-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">3. 治理與成本責任</p>
                    <p className="leading-relaxed">Red Hat OpenShift AI 強調 monitoring、cost control、self-service access。這代表共享 GPU 之後的 quota、showback、policy 與治理能力，已經是正式預算語言。</p>
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-100 bg-white p-4">
                  <p className="text-sm font-semibold text-cyan-900">董事會該記住的一句話：<span className="text-slate-700">當採購開始評分部署速度、持續可用性、設施事件協調與治理責任時，軟體部門就不再是附屬支援，而是最直接影響得標率、attach rate 與續約的價值層。</span></p>
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
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">Budget language shift</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">AI 預算已經開始把「recoverability + evidence」當正式採購條件，不只是資安附屬需求</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700 mb-4">
                  <div className="rounded-xl border border-amber-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">Dell：AI resilience 已進主敘事</p>
                    <p className="leading-relaxed">Dell 已把 Cyber Resilience for AI 直接放進 AI solutions，說明管理層開始正式追問：模型、資料、推論服務出事時，誰能把服務與信任一起救回來。</p>
                  </div>
                  <div className="rounded-xl border border-amber-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">NetApp：governed / recoverable data 已成賣點</p>
                    <p className="leading-relaxed">連資料基礎設施廠商都在賣 built-in governance、secure inferencing 與 recoverable data，這代表 recoverability 已經不是 IT 細節，而是 AI factory 的正式預算語言。</p>
                  </div>
                  <div className="rounded-xl border border-amber-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">Foxconn 最該賣的是 AI Recovery & Evidence Assurance</p>
                    <p className="leading-relaxed">把 artifact / registry 保護、向量資料恢復、golden image rollback、incident evidence 與演練 runbook 做成 attach service，軟體部門才能從「監控供應商」升級成 AI recoverability owner。</p>
                  </div>
                </div>
                <div className="rounded-xl border border-amber-100 bg-white p-4">
                  <p className="text-sm font-semibold text-amber-900">董事會該記住的一句話：<span className="text-slate-700">當客戶開始正式為 recoverability、evidence 與恢復信任付錢時，軟體部門的價值就不再只是讓系統看得見，而是讓 AI 出事時仍救得回來、講得清楚、也續得下去。</span></p>
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
              <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-teal-700 mb-2">Budget-owner translation</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">同一套 AI 伺服器，軟體部門其實是在打開 4 條不同預算線，不只是附加功能費</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  最能證明軟體部門價值的，不是功能做得多，而是能把同一批硬體翻成 Infrastructure、SRE / Platform、Delivery PMO、Service Delivery 都願意付錢的結果。這代表軟體部門不是硬體附屬支援，而是把單次交機延伸成跨部門、跨年度收入的預算轉譯層。
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {budgetOwnerRows.map((row) => (
                    <div key={row.service} className="rounded-2xl border border-teal-100 bg-white/90 p-4">
                      <p className="text-sm font-black text-slate-900 mb-2">{row.service}</p>
                      <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                        <p><span className="font-bold text-slate-500">預算 owner：</span>{row.budgetOwner}</p>
                        <p><span className="font-bold text-amber-700">為什麼現在會買：</span>{row.whyNow}</p>
                        <p><span className="font-bold text-emerald-700">為什麼明年還會續：</span>{row.renewalDriver}</p>
                        <p><span className="font-bold text-teal-800">董事會看到的結果：</span>{row.boardOutcome}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-teal-100 bg-white p-4">
                  <p className="text-sm font-semibold text-teal-900">董事會該記住的一句話：<span className="text-slate-700">軟體部門最值錢的地方，不是幫硬體補功能，而是把同一張 server PO 延伸成多個預算 owner 都願意續買的 Day-2 營運責任。</span></p>
                </div>
              </div>
              <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-indigo-700 mb-2">Why a standalone software department matters</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">軟體部門不是硬體附屬功能，因為它對接的是完全不同的買方、收入節奏與 KPI</h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 text-sm text-slate-700 mb-4">
                  {mandateCards.map((card) => (
                    <div key={card.title} className="rounded-xl border border-indigo-100 bg-white/90 p-4">
                      <p className="font-black text-slate-900 mb-2">{card.title}</p>
                      <p className="leading-relaxed mb-3">{card.detail}</p>
                      <p className="text-xs leading-relaxed text-indigo-900">{card.boardWhyItMatters}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-indigo-100 bg-white p-4">
                  <p className="text-sm font-semibold text-indigo-900">董事會該記住的一句話：<span className="text-slate-700">{mandateBoardMessage}</span></p>
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
