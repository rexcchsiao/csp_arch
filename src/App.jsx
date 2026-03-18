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
import BuildVsBuyView from './BuildVsBuyView'
import { softwareDifferentiation } from './software-differentiation'
import { competitiveSources } from './competitive-sources'

const App = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const hpePrivateCloudAISource = competitiveSources.hpe?.find((source) => source.name.includes('Private Cloud AI'))
  const missionControlSource = competitiveSources.nvidia?.find((source) => source.name.includes('Mission Control'))
  const schneiderAISource = competitiveSources.schneider?.find((source) => source.name.includes('AI Data Center Solutions'))
  const recurringRevenueRisks = softwareDifferentiation.serviceOfferings?.renewalMoat?.risks || []

  const foxconnCredibilityCards = [
    {
      title: 'Factory-to-Operations handoff',
      whyFoxconn: 'Foxconn 同時碰得到工廠預載、burn-in、site acceptance、韌體基線與 Day-2 handoff，最有資格把「交機」翻成「可立即營運」。',
      boardImpact: '軟體部門因此不只是做平台，而是直接縮短 time-to-revenue。',
      sourceLabel: hpePrivateCloudAISource?.name || 'HPE Private Cloud AI',
      source: hpePrivateCloudAISource?.url || 'https://www.hpe.com/us/en/private-cloud-ai.html',
    },
    {
      title: 'Lifecycle / change-window accountability',
      whyFoxconn: '客戶不缺會寫平台的人，缺的是願意對 driver / firmware / CUDA / K8s 升級風險負責的人。Foxconn 更適合把這段做成可治理服務。',
      boardImpact: '這是最容易形成年約與續約收入的軟體層。',
      sourceLabel: missionControlSource?.name || 'NVIDIA Mission Control',
      source: missionControlSource?.url || 'https://www.nvidia.com/en-us/data-center/mission-control/',
    },
    {
      title: 'Facility-aware operations',
      whyFoxconn: '當 AI 機房開始受到 power cap、cooling event 與 brownfield 流程限制，Foxconn 有空間把伺服器、設施與營運流程接成容量治理服務。',
      boardImpact: '這會把軟體價值從監控拉高成 outage 風險控制與延後擴建的能力。',
      sourceLabel: schneiderAISource?.name || 'Schneider Electric AI Data Center Solutions',
      source: schneiderAISource?.url || 'https://www.se.com/ww/en/work/solutions/data-centers-and-networks/ai-data-centers/',
    },
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
              onClick={() => setActiveTab('build-vs-buy')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'build-vs-buy'
                  ? 'bg-blue-600 text-white shadow-lg'
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
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-8 rounded-3xl shadow-xl text-white">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-200 mb-3">Executive Snapshot</p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                軟體部門不是附屬支援，而是把 AI Server 從一次性交機變成可治理、可續約、可溢價業務的價值控制層
              </h2>
              <p className="text-sm md:text-base text-blue-50 max-w-4xl leading-relaxed">
                市場領先者已經在賣 deployment speed、lifecycle operations、observability、power / cooling integration 與 governance。
                這代表客戶真正會核准的，不再只是 BOM 與節點規格，而是誰能對 Day-2 營運結果負責。Foxconn 若要避免淪為 commodity 供應商，軟體部門就必須被清楚定位成這層責任與續約收入的 owner。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-wider text-blue-200 mb-2">Why now</p>
                  <p className="text-sm font-bold">競爭已從「誰拿到 GPU」轉向「誰能更快上線、穩定升級、把風險接住」</p>
                </div>
                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-wider text-blue-200 mb-2">What software changes</p>
                  <p className="text-sm font-bold">把硬體 attach 成 Deployment Assurance、Lifecycle Assurance、Remote Ops 與治理型年約收入</p>
                </div>
                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-wider text-blue-200 mb-2">Board takeaway</p>
                  <p className="text-sm font-bold">沒有軟體，Foxconn 賣的是設備；有了軟體，Foxconn 賣的是 AI 營運結果與長期關係</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">1. 為什麼軟體部門值錢</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">它賣的不是 dashboard，而是風險轉移</h3>
                <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
                  <li>• Deployment Assurance：縮短 time-to-revenue</li>
                  <li>• Lifecycle Control：把升級與變更風險產品化</li>
                  <li>• Remote Ops：把故障處理從現場人海變成可 SLA 化服務</li>
                  <li>• Brownfield / Air-gap / Facility-aware：承接最難外包、也最容易續約的 Day-2 責任</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-2">2. 老闆最該看的 3 個成果</p>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-black text-slate-900">提高 attach rate</p>
                    <p>讓每筆硬體訂單有機會長成軟體授權、治理服務與年約收入。</p>
                  </div>
                  <div>
                    <p className="font-black text-slate-900">把勝負點從規格拉高到營運能力</p>
                    <p>當市場開始看 deployment、governance、SLA 與 brownfield fit，軟體部門就直接影響 RFQ 勝率。</p>
                  </div>
                  <div>
                    <p className="font-black text-slate-900">避免 commodity 化</p>
                    <p>把 Foxconn 從可替換的設備供應商，往有續約關係的營運夥伴推上去。</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                <p className="text-xs font-black uppercase tracking-widest text-amber-500 mb-2">3. 建議先看的內容</p>
                <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <li><strong className="text-slate-900">CoCo 分析報告：</strong>完整競爭格局、痛點、服務與董事會敘事</li>
                  <li><strong className="text-slate-900">自建 vs 採購：</strong>幫大型客戶回答「為什麼不自己做」</li>
                  <li><strong className="text-slate-900">來源參考：</strong>所有關鍵市場訊號都有官方或可追溯來源</li>
                </ul>
                <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-100">
                  <p className="text-sm font-semibold text-amber-900">
                    建議閱讀順序：先看總覽抓主張，再進 CoCo 分析報告看證據鏈，最後用自建 vs 採購回答管理層反對意見。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-2">Market-approved buying language</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">市場真正核准預算的 4 種語言</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    從 HPE、NVIDIA、Red Hat 到 Lenovo 的官方產品敘事來看，客戶現在核准的不是功能清單，而是四種能被管理層理解的結果：速度、控制、信任，以及單一 accountable owner。把這四種語言直接放進總覽，能更快說清楚軟體部門不是支援角色，而是預算與續約的 owner。
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-emerald-900">一句話版本：硬體讓客戶買到算力，軟體部門讓客戶敢核准上線速度、SLA、治理與長期營運責任。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {softwareDifferentiation.marketBuyingLanguage.vectors.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/60">
                    <p className="text-xs font-black uppercase tracking-wider text-emerald-700 mb-2">{item.label}</p>
                    <p className="text-sm font-bold text-slate-900 mb-3">{item.buyerQuestion}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">市場訊號：</span>{item.marketSignal}</p>
                      <p><span className="font-bold text-emerald-700">Foxconn 翻譯：</span>{item.foxconnTranslation}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">{softwareDifferentiation.marketBuyingLanguage.boardMessage}</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600 mb-2">Why Foxconn is specifically credible</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">不是誰都能接這層價值：Foxconn 特別站得住的 3 個理由</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    市場已經證明 AI 基礎建設買的是 deployment、lifecycle、governance 與 operations，但真正還需要一句讓老闆秒懂的話：為什麼這個價值層偏偏該由 Foxconn 軟體部門來接？答案就在 factory handoff、change-window accountability 與 facility-aware operations 這三段最容易延誤、也最容易形成續約的責任鏈。
                  </p>
                </div>
                <div className="bg-cyan-50 border border-cyan-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-cyan-900">一句話版本：Foxconn 最值得投資的，不是 another dashboard，而是把工廠、硬體、韌體與 Day-2 營運風險接成可定價服務的能力。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {foxconnCredibilityCards.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-cyan-100 bg-cyan-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-cyan-700 mb-2">{item.title}</p>
                    <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">為什麼是 Foxconn：</span>{item.whyFoxconn}</p>
                      <p><span className="font-bold text-cyan-700">董事會該在意：</span>{item.boardImpact}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">管理層該記住的一句話：Foxconn 若把這 3 段責任鏈講清楚，軟體部門就不是支援單位，而是把硬體 attach 成 time-to-revenue、SLA 保護與年度續約收入的價值 owner。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-600 mb-2">Recurring revenue logic</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">客戶為什麼會每年續約：不是因為介面存在，而是因為 4 種風險每年都還在</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    要讓老闆真的看見軟體部門價值，不能只講「我們做得出平台」，而要講清楚「客戶為什麼每年還願意付錢」。市場領先者已經把 deployment speed、cluster lifecycle、facility integration 與 disconnected operations 當成正式產品語言；這代表 Foxconn 最該賣的，是持續接住這些風險的年約服務，而不是一次性的專案支援。
                  </p>
                </div>
                <div className="bg-rose-50 border border-rose-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-rose-900">一句話版本：軟體部門真正值錢的地方，是把每年都會重來一次的營運風險，變成每年都會續約一次的服務收入。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recurringRevenueRisks.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-rose-100 bg-rose-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-rose-700 mb-2">{item.risk}</p>
                    <p className="text-sm font-bold text-slate-900 mb-3">{item.annualService}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">如果沒人接：</span>{item.whatBreaks}</p>
                      <p><span className="font-bold text-rose-700">為什麼會續約：</span>{item.whyRecurring}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：沒有軟體部門，這 4 類風險會分散在交付、SRE、機房與合規團隊之間互相推責；有了軟體部門，就能把它們收斂成可治理、可報價、可續約的服務邊界。</p>
              </div>
            </div>
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

        {activeTab === 'build-vs-buy' && (
          <BuildVsBuyView />
        )}
      </div>
    </div>
  )
}

export default App
