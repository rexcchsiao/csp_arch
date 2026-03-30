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
import { competitiveLandscape } from './competitive-landscape'
import { hyperscalerGapAnalysis } from './hyperscaler-gap-analysis'
import { competitiveSources } from './competitive-sources'

const App = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const { responsibilitySplit } = buildVsBuyAnalysis
  const { cards: mandateCards, boardMessage: mandateBoardMessage } = softwareDifferentiation.softwareDepartmentMandateSummary
  const urgencySignals = competitiveLandscape.competitiveUrgency.slice(0, 3)
  const hyperscalerGaps = hyperscalerGapAnalysis.gapAnalysis.filter((item) => (
    [
      'Gap 1: 混合雲/本地部署能力',
      'Gap 4: 在地化支援主權',
      'Gap 5: 客製化靈活性',
      'Gap 6: 遠端證據鏈、Factory Baseline 與 RCA 問責'
    ].includes(item.gap)
  ))
  const officialValidationSources = [
    competitiveSources.nvidia[1],
    competitiveSources.hpe[1],
    competitiveSources.dell[0],
    competitiveSources.enterprisePlatforms.find((item) => item.name === 'Nutanix Agentic AI'),
    competitiveSources.regulations.find((item) => item.name === 'EU AI Act (official EU text / implementation portal)'),
    competitiveSources.regulations.find((item) => item.name === 'NIST AI Risk Management Framework')
  ].filter(Boolean)
  const budgetOwnerRows = softwareDifferentiation.serviceOfferings.budgetMap.rows.filter((row) => (
    [
      'Factory-to-Operations Handoff Assurance',
      'Remote Diagnostics & Dispatch Readiness',
      'Service Availability Assurance',
      'AI Recovery & Evidence Assurance',
      'Model Provenance & Audit Evidence Pack'
    ].includes(row.service)
  ))
  const softwareBoundaryCards = [
    {
      doNotOwn: '不要跟客戶搶 AI 應用層與 developer portal 主導權',
      why: '大型 CSP / Hyperscaler 的真正差異化在自家模型服務、內部平台體驗與 customer-facing APIs。Foxconn 若硬搶這層，容易被視為供應商越界。',
      foxconnOwns: 'Foxconn 軟體部門應聚焦接住 factory-to-operations handoff、brownfield integration、remote diagnostics、lifecycle governance 與 recovery evidence 這些高風險但非客戶核心差異化的責任鏈。'
    },
    {
      doNotOwn: '不要把價值講成 another dashboard',
      why: '當 Redfish / OpenBMC / OpenTelemetry 與各家 observability 工具愈來愈普及，單純「看得到」很難維持溢價，董事會也不容易買單。',
      foxconnOwns: 'Foxconn 應把軟體定位成 operating owner：誰負責 maintenance window、rollback discipline、dispatch readiness、SLA evidence 與跨站點 incident 收斂。'
    },
    {
      doNotOwn: '不要把軟體價值停在 Day-1 安裝完成',
      why: '客戶真正願意續約的，通常不是第一次裝起來，而是之後每一季的升級風險、夜間事故、air-gap 內容更新與 audit evidence refresh。',
      foxconnOwns: 'Foxconn 軟體部門應明確吃下 Day-2 / Day-365：availability review、baseline refresh、dispatch governance、AI recovery 與 compliance evidence 這些會持續發生的營運工作。'
    }
  ]

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
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
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
                <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
                  <p className="text-xs font-black uppercase tracking-widest text-rose-600 mb-2">Board takeaway 04</p>
                  <p className="text-sm font-black text-slate-900 mb-2">AI supply-chain governance 正在變成新採購門檻</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    受監管與主權 AI 客戶開始正式追問 model provenance、artifact / mirror 版本、audit evidence 與 recoverability。這些不是硬體附屬功能，而是軟體部門才能產品化、也最容易切進法遵與資安預算的治理責任。
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2">What the board is really approving</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">董事會真正該批准的，是 3 條可被驗收、也可被續約的責任鏈</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700 mb-4">
                  <div className="rounded-xl border border-blue-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">1. 交機到可營運的 handoff</p>
                    <p className="leading-relaxed">把 factory pre-load、site acceptance、baseline 建立、observability 與 Day-2 runbook 接成同一條責任鏈，賣的是更快上線與更少推責，不只是安裝支援。</p>
                  </div>
                  <div className="rounded-xl border border-blue-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">2. 夜間事故的遠端收斂能力</p>
                    <p className="leading-relaxed">把 remote diagnostics、evidence pack、dispatch readiness 與 rollback 流程產品化，讓客戶買到的是少白跑、少 outage、也更快交付 RCA 的能力。</p>
                  </div>
                  <div className="rounded-xl border border-blue-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">3. 升級與治理的持續 owner</p>
                    <p className="leading-relaxed">把版本矩陣、maintenance window、air-gap update discipline、quota / showback 與 audit evidence 做成持續治理服務，直接把硬體案延伸成 Day-2 年約收入。</p>
                  </div>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white p-4">
                  <p className="text-sm font-semibold text-blue-900">董事會一句話版本：<span className="text-slate-700">如果 Foxconn 軟體部門沒有被授權去承接 handoff、incident、lifecycle 這 3 條責任鏈，很多價值就只會停在 demo；一旦承接起來，硬體才有機會長成可被續約、可被問責、也更難被替換的服務。</span></p>
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2">Why Foxconn can own this uniquely</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">Foxconn 最該強調的，不只是「我們也能做軟體」，而是我們能把工廠、交機、維修與 Day-2 資料接成別人較難複製的責任鏈</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700 mb-4">
                  <div className="rounded-xl border border-emerald-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">1. 軟體能吃到 factory truth，不只是 runtime signals</p>
                    <p className="leading-relaxed">Foxconn 不只看得到機房告警，還有機會把 burn-in、golden image、出廠韌體矩陣、site acceptance 與 Day-2 incident evidence 接在一起。這讓軟體部門賣的不是 another monitoring layer，而是從工廠到現場都能被追溯的 handoff 與 RCA 責任鏈。</p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">2. 軟體能把 service loop 關起來，而不是只交工具</p>
                    <p className="leading-relaxed">很多平台供應商能賣 control plane，但不一定能把故障證據、備品判斷、dispatch readiness、現場維修窗口與下一版 baseline refresh 接成同一個 service loop。Foxconn 若由軟體部門承接，賣的是更少白跑、更快 RCA、更高 first-time-fix rate。</p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">3. 這條責任鏈最容易長成年約，而不是一次性交付</p>
                    <p className="leading-relaxed">只要軟體部門的角色被定義成 baseline owner、incident evidence owner、upgrade governance owner，收入邏輯就會從交機專案，延伸成季度 review、年度 SLA、evidence refresh 與 lifecycle renewal。這正是硬體最難自己長出來的高毛利層。</p>
                  </div>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-white p-4">
                  <p className="text-sm font-semibold text-emerald-900">董事會該記住的一句話：<span className="text-slate-700">雲平台與管理軟體供應商大多只能看到「上線後」；Foxconn 若把軟體部門做對，看到的會是「出廠前 + 交機時 + 出事後」整條責任鏈，這就是最能放大硬體價值、也最難被複製的軟體位置。</span></p>
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
                <div className="mt-4 rounded-xl border border-violet-100 bg-white p-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700 mb-3">Official sources you can click in the meeting</p>
                  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 text-sm text-slate-700">
                    {officialValidationSources.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-violet-100 bg-violet-50/60 p-4 hover:bg-violet-50 transition-colors"
                      >
                        <p className="font-black text-slate-900 mb-1">{item.name}</p>
                        <p className="text-xs leading-relaxed mb-2">{item.keyFeature}</p>
                        <p className="text-[11px] font-semibold text-violet-700">Verified {item.lastVerified}</p>
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-3">這一排的作用不是增加內容，而是讓老闆在總覽頁就能直接點回官方頁，降低「這只是內部主張」的質疑。</p>
                </div>
              </div>
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-sky-700 mb-2">What the market still leaves unsolved</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">真正還沒被補滿的，不是 another dashboard，而是 5 條沒人想完全承接的責任鏈</h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 text-sm text-slate-700 mb-4">
                  <div className="rounded-xl border border-sky-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">1. 交機到可營運，中間誰接？</p>
                    <p className="leading-relaxed">HPE 已把 deploy AI in days, not months 與 validated platform 當成正式採購語言，代表客戶痛的不是硬體能不能到，而是工廠預載、site acceptance、baseline 與 Day-2 owner 有沒有接成一條線。</p>
                  </div>
                  <div className="rounded-xl border border-sky-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">2. 半夜故障，誰先把派工縮小？</p>
                    <p className="leading-relaxed">NVIDIA 與 HPE 都在賣 lifecycle、autonomous recovery、continuous service availability，但大多 OEM/ODM 仍停在監控。真正值錢的是 remote diagnostics、dispatch readiness 與 evidence pack，不是多一張畫面。</p>
                  </div>
                  <div className="rounded-xl border border-sky-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">3. 共享 GPU 之後，誰替成本與秩序背責？</p>
                    <p className="leading-relaxed">Red Hat、Nutanix 已把 cost control、governance、GPU utilization 講成 operating model，表示共享算力之後真正的採購題目，已經變成 quota、showback、policy 與 SLA 例外處理要由誰負責。</p>
                  </div>
                  <div className="rounded-xl border border-sky-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">4. 受監管 AI 要過採購與稽核，誰把證據鏈交齊？</p>
                    <p className="leading-relaxed">EU AI Act 已把 technical documentation、logging、record-keeping 拉進正式法規語言。很多案子不是模型不能跑，而是 model provenance、離線內容版本、更新紀錄與 audit evidence 沒有 owner；這正是軟體部門最能切入合規預算的位置。</p>
                  </div>
                </div>
                <div className="rounded-xl border border-sky-100 bg-white/90 p-4 mb-4">
                  <p className="font-black text-slate-900 mb-1">5. AI 供應鏈安全與 model provenance，誰敢簽字負責？</p>
                  <p className="text-sm text-slate-700 leading-relaxed">受監管 AI 專案真正會卡住的，常不是模型能不能跑，而是模型從哪裡來、訓練/匯入資料是否可追溯、離線內容有沒有版本證據、出事時能不能交出 AI BOM 與 audit evidence。這種需求天然不是硬體附屬功能，而是軟體部門才能產品化的治理服務，也更容易切進法遵、資安與 CIO 預算。</p>
                  <p className="text-xs text-slate-500 mt-2">可對應的外部語言：EU AI Act 的 technical documentation / logging / record-keeping 要求，以及企業對 model provenance、AI BOM、離線內容版本紀律的採購門檻。</p>
                </div>
                <div className="rounded-xl border border-sky-100 bg-white p-4">
                  <p className="text-sm font-semibold text-sky-900">董事會該記住的一句話：<span className="text-slate-700">如果市場真正缺的是責任鏈 owner，而 Foxconn 剛好最有資格把 factory、firmware、brownfield、remote ops、shared-cluster governance 與 AI evidence governance 接起來，那軟體部門賣的就不是功能，而是別人最難完整承接的營運責任。</span></p>
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
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-violet-700 mb-2">Why hyperscalers still buy</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">就算大型 CSP / Hyperscaler 有強大軟體團隊，還是有 4 類責任更適合外包給 Foxconn</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  真正會被外包的，不是 customer-facing AI portal，而是那些 <span className="font-semibold text-slate-900">離設施很近、離營運風險很近、卻不直接創造營收</span> 的 Day-2 工作。這段如果由 Foxconn 軟體部門承接，老闆更容易看見：我們賣的是責任轉移，不是跟客戶搶平台主導權。
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm text-slate-700">
                  {hyperscalerGaps.map((item) => (
                    <div key={item.gap} className="rounded-xl border border-violet-100 bg-white/90 p-4">
                      <p className="font-black text-slate-900 mb-2">{item.gap.replace('Gap ', '').trim()}</p>
                      <p className="leading-relaxed mb-2"><span className="font-semibold text-violet-700">客戶痛點：</span>{item.customerPain}</p>
                      <p className="leading-relaxed"><span className="font-semibold text-slate-900">Foxconn 該賣的：</span>{item.foxconnSolution}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-violet-100 bg-white p-4">
                  <p className="text-sm font-semibold text-violet-900">董事會該記住的一句話：<span className="text-slate-700">Hyperscaler 不是不會做，而是不想把工程資源耗在本地部署、多供應商 GPU、成本可預測性與在地運維這些非差異化但高風險的底層責任；這正是 Foxconn 軟體部門最該去承接、也最容易變成年約的價值。</span></p>
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

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">Strategic boundary</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">更容易說服董事會的版本：Foxconn 軟體部門不是什麼都做，而是只接最值錢、最該被外包的責任鏈</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  這段很重要，因為它直接處理老闆最常見的擔心：<span className="font-semibold text-slate-900">「如果大型客戶本來就有軟體團隊，我們做軟體是不是會跟客戶撞車？」</span>
                  最好的答案不是「我們也能做平台」，而是明確畫出邊界：Foxconn 不搶客戶核心差異化，而是承接那些
                  <span className="font-semibold text-slate-900">離硬體、設施、交機與 Day-2 事故很近，卻最容易被低估又最容易拖垮 SLA 的責任</span>。
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700 mb-4">
                  {softwareBoundaryCards.map((card) => (
                    <div key={card.doNotOwn} className="rounded-xl border border-amber-100 bg-white/90 p-4">
                      <p className="font-black text-slate-900 mb-2">{card.doNotOwn}</p>
                      <p className="leading-relaxed mb-2"><span className="font-semibold text-amber-700">為什麼：</span>{card.why}</p>
                      <p className="leading-relaxed"><span className="font-semibold text-slate-900">Foxconn 應該吃下的：</span>{card.foxconnOwns}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-amber-100 bg-white p-4">
                  <p className="text-sm font-semibold text-amber-900">董事會該記住的一句話：<span className="text-slate-700">Foxconn 軟體部門不是跟客戶搶應用平台，而是替客戶接住最不想自己養、卻又最容易出事的 Day-2 責任鏈；這種邊界畫得越清楚，軟體價值越像高毛利服務，而不是高成本擴編。</span></p>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-700 mb-2">What procurement is really scoring now</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">從 NVIDIA、HPE、Red Hat 的官方語言來看，採購正在評估的是營運結果，不是功能數量</h3>
                <div className="rounded-xl border border-cyan-100 bg-white/90 p-4 mb-4 text-sm text-slate-700">
                  <p className="font-black text-slate-900 mb-2">更直白地說：市場已經開始把「營運專業」當成軟體買</p>
                  <p className="leading-relaxed mb-3">
                    NVIDIA Mission Control 直接把自己定位成 <span className="font-semibold text-slate-900">world-class operations team delivered as software</span>。
                    這句話的殺傷力很大，因為它把軟體從「工具」往上拉成「可被採購、可被外包、可被問責的營運能力」。
                    這也正是 Foxconn 最該複製但不能照抄的市場語言：不是說我們也有平台，而是說我們能把
                    <span className="font-semibold text-slate-900"> factory-to-operations handoff、remote diagnostics、lifecycle governance、dispatch readiness 與 evidence pack </span>
                    包成客戶願意長期付費的營運專業。
                  </p>
                  <p className="text-sm font-semibold text-cyan-900">董事會一句話版本：<span className="text-slate-700">如果市場已願意為「營運專業 delivered as software」付錢，Foxconn 軟體部門就不該再被描述成支援功能，而應該被定義成可被採購的 operations line。</span></p>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 text-sm text-slate-700 mb-4">
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
                  <div className="rounded-xl border border-cyan-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">4. 可被外包的營運專業</p>
                    <p className="leading-relaxed">NVIDIA 甚至把 Mission Control 講成「world-class operations team delivered as software」。這代表客戶願意買的，不只是 control plane，而是把 deployment discipline、incident handling 與 remote accountability 外包給可被問責的軟體 owner。</p>
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-100 bg-white p-4">
                  <p className="text-sm font-semibold text-cyan-900">董事會該記住的一句話：<span className="text-slate-700">當採購開始評分部署速度、持續可用性、設施事件協調、治理責任，甚至可被外包的營運專業時，軟體部門就不再是附屬支援，而是最直接影響得標率、attach rate 與續約的價值層。</span></p>
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
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-rose-700 mb-2">New budget owner opening</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">下一條很值得搶的，不只是維運預算，而是 AI governance / security / audit 預算</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  這條預算線不只來自歐盟法規壓力。EU AI Act 已把 technical documentation、logging、record-keeping 拉進正式法規語言；NIST AI RMF 也把 govern / map / measure / manage 講成持續性的營運責任。
                  這代表企業開始把 <span className="font-semibold text-slate-900">模型來源、操作紀錄、變更證據與 recoverability</span> 當成 production AI 的基本治理要求，而不是法遵團隊臨時加上的附註。
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700 mb-4">
                  <div className="rounded-xl border border-rose-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">1. 模型來源要講得清楚</p>
                    <p className="leading-relaxed">EU AI Act 已把 technical documentation、logging、record-keeping 拉進正式法規語言。很多 regulated AI 專案真正卡住的，不是模型不能跑，而是誰來交 model provenance、更新紀錄與 evidence pack。</p>
                  </div>
                  <div className="rounded-xl border border-rose-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">2. 安全團隊要的不是 another dashboard</p>
                    <p className="leading-relaxed">當企業開始把 AI 看成正式營運系統，資安與法遵真正想買的是可稽核的 artifact / registry 保護、離線內容版本、權限邊界與事故證據，而不是多一張管理畫面。</p>
                  </div>
                  <div className="rounded-xl border border-rose-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">3. 這筆錢的 owner 也會跟著變</p>
                    <p className="leading-relaxed">一旦提案能回答 audit、recoverability、model provenance 與 sovereign operation，Foxconn 就不只是在對 Infrastructure / SRE 溝通，還能切進 CISO、Compliance、AI governance program 與 regulated industry 預算。</p>
                  </div>
                </div>
                <div className="rounded-xl border border-rose-100 bg-white/90 p-4 mb-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-700 mb-3">Two external proof points management can cite</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                    {competitiveSources.regulations.filter((item) => (
                      item.name === 'EU AI Act (official EU text / implementation portal)' || item.name === 'NIST AI Risk Management Framework'
                    )).map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-rose-100 bg-white p-4 hover:bg-rose-50 transition-colors"
                      >
                        <p className="font-black text-slate-900 mb-1">{item.name}</p>
                        <p className="text-xs leading-relaxed mb-2">{item.keyFeature}</p>
                        <p className="text-[11px] font-semibold text-rose-700">Verified {item.lastVerified}</p>
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-3">這讓管理層可以直接把「AI 治理 / 證據鏈已經成為正式營運要求」連回官方來源，而不是只停在內部判斷。</p>
                </div>
                <div className="rounded-xl border border-rose-100 bg-white p-4">
                  <p className="text-sm font-semibold text-rose-900">董事會該記住的一句話：<span className="text-slate-700">軟體部門如果能把 model provenance、audit evidence、recoverability 與 sovereign operation 做成可被稽核的服務，就不是在幫硬體補功能，而是在替 Foxconn 打開原本碰不到的治理與資安預算。</span></p>
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2">High-value service wedge</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">最值得先講清楚的 5 個軟體服務：不是功能，而是可被核准的責任邊界</h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4 text-sm text-slate-700">
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
                  <div className="rounded-xl border border-emerald-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">AI Recovery & Evidence Assurance</p>
                    <p className="leading-relaxed">把 artifact / registry 保護、向量資料恢復、golden image rollback、incident evidence 與年度演練做成 attach service，賣的是「AI 出事時仍救得回來、講得清楚、也續得下去」的營運信任。</p>
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
                <div className="rounded-2xl border border-cyan-100 bg-white/90 p-4 mb-4">
                  <p className="text-xs font-black uppercase tracking-widest text-cyan-700 mb-2">Strategic boundary</p>
                  <h4 className="text-base font-black text-slate-900 mb-3">Foxconn 軟體部門最該守住的，不是 customer-facing control plane，而是 3 條最容易被外包、也最能被續約的責任鏈</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
                    <div className="rounded-xl border border-cyan-100 bg-cyan-50/70 p-4">
                      <p className="font-black text-slate-900 mb-1">1. 不跟客戶搶產品控制面</p>
                      <p className="leading-relaxed">客戶自己的 portal、模型 API、對外定價與 workload policy 應留在客戶內部；這樣比較不會被理解成 Foxconn 想取代客戶平台團隊。</p>
                    </div>
                    <div className="rounded-xl border border-cyan-100 bg-cyan-50/70 p-4">
                      <p className="font-black text-slate-900 mb-1">2. 專心承接 Day-2 高風險責任</p>
                      <p className="leading-relaxed">真正值得外包的是 handoff、upgrade / rollback、brownfield / facility coordination 與 remote diagnostics，因為這些最耗跨團隊時間，也最難只靠另一套 dashboard 解決。</p>
                    </div>
                    <div className="rounded-xl border border-cyan-100 bg-cyan-50/70 p-4">
                      <p className="font-black text-slate-900 mb-1">3. 把責任鏈翻成年約語言</p>
                      <p className="leading-relaxed">只要價值被講成 remote accountability、serviceability、maintenance-window discipline 與 evidence pack，軟體部門就更容易從附屬功能升級成可續約服務。</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-100 bg-white p-4">
                  <p className="text-sm font-semibold text-cyan-900">董事會該記住的一句話：<span className="text-slate-700">{responsibilitySplit.boardMessage}</span></p>
                </div>
              </div>
              <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-teal-700 mb-2">Budget-owner translation</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">同一套 AI 伺服器，軟體部門其實是在打開 5 條不同預算線，不只是附加功能費</h3>
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
                <p className="text-xs font-black uppercase tracking-widest text-indigo-700 mb-2">Operating mandate</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">如果軟體部門真的要被批准，管理層就該用 Day-2 KPI 管它，而不是沿用硬體 KPI</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  很多公司不是沒做軟體，而是把軟體團隊仍當成硬體附屬支援，最後功能做了不少，卻沒人對 attach rate、handoff、remote resolution 與 renewal 負責。
                  這頁最該替老闆畫清楚的，是 <span className="font-semibold text-slate-900">軟體部門一旦成立，成功定義就必須跟硬體部門不同</span>。
                </p>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4 text-sm text-slate-700">
                  <div className="rounded-xl border border-indigo-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">1. 看 software attachment rate</p>
                    <p className="leading-relaxed">不是只看伺服器有沒有賣出，而是看多少案子把 deployment assurance、remote ops、lifecycle governance 一起賣進去。</p>
                  </div>
                  <div className="rounded-xl border border-indigo-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">2. 看 handoff time</p>
                    <p className="leading-relaxed">工廠預載、site acceptance、baseline 建立到 Day-2 接手要縮多短，這才是軟體是否真的在放大硬體價值的第一個硬指標。</p>
                  </div>
                  <div className="rounded-xl border border-indigo-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">3. 看 remote resolution coverage</p>
                    <p className="leading-relaxed">半夜故障時，有多少事件能先遠端收斂、減少 truck roll、提高 first-time-fix rate，這比多做幾張 dashboard 更能代表部門價值。</p>
                  </div>
                  <div className="rounded-xl border border-indigo-100 bg-white/90 p-4">
                    <p className="font-black text-slate-900 mb-1">4. 看 renewal signals</p>
                    <p className="leading-relaxed">如果季度 availability review、baseline refresh、air-gap content lifecycle 與 evidence support 能被持續續買，才代表軟體部門真的從功能變成收入責任鏈。</p>
                  </div>
                </div>
                <div className="rounded-xl border border-indigo-100 bg-white p-4">
                  <p className="text-sm font-semibold text-indigo-900">董事會該記住的一句話：<span className="text-slate-700">軟體部門一旦成立，評分標準就不該再是出貨與 BOM，而是 attach rate、handoff speed、remote resolution 與 renewal；只有這樣，軟體價值才不會被算成附送支援。</span></p>
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
              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-orange-700 mb-2">Why now</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">這不只是市場趨勢，OEM / ODM 同業已經開始往軟體靠，窗口期其實不長了</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  如果這份提案只建立在 NVIDIA / HPE / Dell 這些大廠訊號，管理層很容易覺得那是品牌廠的玩法，離 Foxconn 還有距離。
                  但真正更危險的訊號是：<span className="font-semibold text-slate-900">同一條 OEM / ODM 戰線上的玩家，也已經開始補軟體敘事</span>。
                  一旦市場先被別人定義成「AI 伺服器應該附帶 lifecycle、remote ops、brownfield integration 與 governance 服務」，Foxconn 之後再補，很容易從定義者變成跟隨者。
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  {urgencySignals.map((item) => (
                    <div key={item.competitor} className="rounded-xl border border-orange-100 bg-white/90 p-4 text-sm text-slate-700">
                      <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-2">Competitive urgency</p>
                      <p className="font-black text-slate-900 mb-2">{item.competitor}</p>
                      <p className="leading-relaxed mb-3"><span className="font-semibold text-slate-900">市場動作：</span>{item.action}</p>
                      <p className="leading-relaxed"><span className="font-semibold text-orange-700">Foxconn 該怎麼看：</span>{item.foxconnResponse}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-orange-100 bg-white p-4">
                  <p className="text-sm font-semibold text-orange-900">董事會該記住的一句話：<span className="text-slate-700">現在要批准的，不只是「做不做軟體」，而是要不要搶先定義 OEM / ODM 的軟體價值敘事；如果同業先把 remote accountability、lifecycle governance 與 brownfield service 講成標準配備，Foxconn 再進場就只剩追價值、不是定價值。</span></p>
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
