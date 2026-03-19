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
import { boardDecisionCard } from './executive-brief'

const App = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const hpePrivateCloudAISource = competitiveSources.hpe?.find((source) => source.name.includes('Private Cloud AI'))
  const missionControlSource = competitiveSources.nvidia?.find((source) => source.name.includes('Mission Control'))
  const schneiderAISource = competitiveSources.schneider?.find((source) => source.name.includes('AI Data Center Solutions'))
  const netappAISource = competitiveSources.enterprisePlatforms?.find((source) => source.name.includes('NetApp AI infrastructure'))
  const recurringRevenueRisks = softwareDifferentiation.serviceOfferings?.renewalMoat?.risks || []
  const hyperscalerBuyPatterns = softwareDifferentiation.hyperscalerBuyTriggers?.patterns || []
  const procurementProofCards = softwareDifferentiation.procurementProof?.cards || []
  const budgetOwnerRows = softwareDifferentiation.serviceOfferings?.budgetMap?.rows || []
  const segmentSpecificMotions = softwareDifferentiation.segmentSpecificServiceMotions?.motions || []
  const softwareValueChain = [
    {
      stage: '硬體部門交付',
      delivers: 'GPU 節點、機櫃、網路與出廠規格達標',
      customerQuestion: '設備有沒有到、能不能過 burn-in / 驗收？',
      businessRisk: '如果只停在這裡，客戶買到的是可安裝設備，不是可長期營運的 AI 服務。',
      softwareRole: '軟體部門把交機延伸成 baseline、驗收證據、runbook 與 Day-2 owner。',
    },
    {
      stage: '上線與部署',
      delivers: 'validated stack、site acceptance、快速上線流程',
      customerQuestion: '多久可以開始跑模型、開始產生營收？',
      businessRisk: '若 deployment 還靠客戶自己拼接，time-to-revenue 會被硬體交機後的灰色地帶吃掉。',
      softwareRole: '軟體部門把出廠預整合、觀測性與標準 runbook 包成 Deployment Assurance。',
    },
    {
      stage: 'Day-2 營運',
      delivers: 'lifecycle governance、remote ops、brownfield / air-gap / facility coordination',
      customerQuestion: '升級出事誰負責？半夜故障誰接住？既有機房流程怎麼整合？',
      businessRisk: '這些責任若回到客戶內部，Foxconn 就會被看成可替換的硬體供應商。',
      softwareRole: '軟體部門把 upgrade risk、on-call 壓力與跨團隊協調翻成可收費服務。',
    },
    {
      stage: '續約與擴張',
      delivers: 'SLA、capacity assurance、governance、年度基線刷新與擴容模板',
      customerQuestion: '明年為什麼還要繼續付錢，而且願意擴大採購？',
      businessRisk: '沒有軟體 owner，硬體價值會停在一次性 BOM，難以形成 ARR 與 attach rate。',
      softwareRole: '軟體部門把每年都會重來一次的風險，收斂成每年都會續約一次的收入。',
    },
  ]
  const painToServiceMap = [
    {
      pain: 'Brownfield AI 導入卡在既有機房流程',
      whyItStaysUnsolved: '客戶不是缺 control plane，而是缺能把新 AI 叢集接回既有 BMC / DCIM / 維護窗口 / 權限模型的人。',
      service: 'Brownfield Integration & Fleet Baseline',
      budgetOwner: 'Infrastructure / DC Operations',
      boardOutcome: '降低導入阻力，讓硬體訂單更容易真正落地。',
    },
    {
      pain: '季度升級與變更窗口沒人敢背責',
      whyItStaysUnsolved: 'driver / firmware / CUDA / K8s 任一變更失誤，都可能讓 AI 叢集停機與 SLA 失約。',
      service: 'Lifecycle Control Tower',
      budgetOwner: 'Platform Engineering / SRE / CAB',
      boardOutcome: '把停機風險變成可治理、可續約的年約服務。',
    },
    {
      pain: 'Air-gapped / 主權 AI 第一次裝得起來，Day-2 卻很難維持',
      whyItStaysUnsolved: '真正困難的是離線內容同步、版本證據、rollback discipline 與稽核流程，而不是第一次安裝。',
      service: 'Air-Gap Content Lifecycle + compliance evidence service',
      budgetOwner: 'CIO Office / Compliance-driven AI Program',
      boardOutcome: '切入高門檻主權 AI 預算，形成續約與治理收入。',
    },
    {
      pain: '共享 GPU 叢集最後卡在 quota / priority / showback',
      whyItStaysUnsolved: '很多方案能把叢集建起來，但沒有把多團隊共用算力的治理與責任邊界產品化。',
      service: 'Tenant Governance & GPU Service Guardrails',
      budgetOwner: 'Platform Engineering / FinOps / AI Center of Excellence',
      boardOutcome: '把「GPU 不夠用」翻成可治理、可定價的共享容量服務。',
    },
    {
      pain: '既有機房先撞到的是電力與散熱上限，不是 GPU 不夠',
      whyItStaysUnsolved: '多數方案會告訴客戶看到了 power / cooling event，但沒有把 BMC、排程、DCIM / BMS 與 maintenance workflow 接成能延後擴建、保住 SLA 的容量治理能力。',
      service: 'Facility-Aware Capacity Assurance',
      budgetOwner: 'Facilities / Capacity Planning / Data Center Operations',
      boardOutcome: '把軟體價值直接連到 CAPEX 延後、outage 風險下降與更可預測的容量使用。',
    },
    {
      pain: 'AI 事故發生後，最貴的是 recoverability 與證據責任，不只是告警本身',
      whyItStaysUnsolved: '多數供應商即使談 resilience，也偏向通用備份，較少真正承接模型 artifact、向量資料、registry、golden image 與 incident evidence 這些 AI-specific Day-2 責任。',
      service: 'AI Recovery & Evidence Assurance',
      budgetOwner: 'CISO / Infrastructure Operations / Compliance',
      boardOutcome: '把 AI 事故後的恢復時間、稽核證據與服務信任保全，翻成可續約的治理收入。',
    },
  ]

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
  const softwareDepartmentWhyNow = [
    {
      title: '買方不同',
      point: '硬體部門主要對接採購、機房建置與規格驗收；軟體部門對接的卻是 Platform Engineering、SRE、FinOps、Compliance 與 Operations。',
      boardWhyItMatters: '如果沒有獨立敘事與 owner，Foxconn 很容易只被當成設備供應商，進不了真正會持續編列 Day-2 預算的人。'
    },
    {
      title: '收入節奏不同',
      point: '硬體以一次性交機為主；軟體部門承接的是 deployment assurance、lifecycle governance、remote ops 與 baseline refresh 這類天然適合年約續費的工作。',
      boardWhyItMatters: '這不是 support fee，而是把每年都會重來一次的風險，翻成每年都會續約一次的收入。'
    },
    {
      title: 'KPI 不同',
      point: '硬體成功看出貨、良率與 BOM；軟體成功看 attach rate、handoff time、remote resolution coverage、upgrade governance adoption 與續約率。',
      boardWhyItMatters: '如果軟體仍被埋在硬體 KPI 下，就很難被正確投資，也很難累積真正的產品與服務飛輪。'
    }
  ]
  const boardProofPoints = [
    {
      metric: 'Software attachment rate',
      question: '有多少 AI server 訂單，已不只是賣 BOM，而是帶著 deployment / lifecycle / remote-ops 服務一起成交？',
      whyItMatters: '這是最直接的市場驗證：軟體部門是否真的把硬體訂單放大成可收費價值。',
      earlySignal: '先看 pilot 與標竿案是否開始把 attach service 放進正式報價與交付範圍。',
    },
    {
      metric: 'Factory-to-Operations handoff time',
      question: '交機後多久，客戶能進入可監控、可升級、可接手營運的 baseline？',
      whyItMatters: '這直接驗證軟體部門有沒有把工廠交付、site acceptance 與 Day-2 handoff 接成同一條責任鏈。',
      earlySignal: '把「交機到可營運」從數週壓到數天，才算真的把 time-to-revenue 做出來。',
    },
    {
      metric: 'Remote resolution coverage',
      question: '有多少高頻故障與變更，不需要派人到現場就能被診斷、處理或安全降級？',
      whyItMatters: '若仍主要靠現場人海，軟體部門就還沒把硬體轉成可規模化服務。',
      earlySignal: '先追遠端診斷 / 處理覆蓋率，而不是一開始就只喊最終 SLA。',
    },
    {
      metric: 'Lifecycle governance adoption',
      question: '客戶是否已開始把版本矩陣、maintenance window、rollback 與 upgrade reporting 正式交給 Foxconn 管？',
      whyItMatters: '最容易形成高毛利續約的，不是 Day-0 安裝，而是之後每一次升級與變更風險。',
      earlySignal: '只要 pilot 客戶開始用 upgrade governance，就代表軟體已進入真正可續約區。',
    },
  ]
  const rfqTieBreakerCards = [
    {
      title: 'Deployment confidence',
      buyerQuestion: '如果兩家硬體規格差不多，誰能讓我更快驗收、上線，而且比較不容易在最後一哩卡住？',
      foxconnPlay: '把 factory pre-load、site acceptance、baseline 與 runbook 包成 Deployment Assurance，讓採購看到的是 time-to-revenue，而不是安裝人天。',
      sourceLabel: hpePrivateCloudAISource?.name || 'HPE Private Cloud AI',
      source: hpePrivateCloudAISource?.url || 'https://www.hpe.com/us/en/private-cloud-ai.html',
    },
    {
      title: 'Change-risk accountability',
      buyerQuestion: '季度升級、driver / firmware / CUDA / K8s 變更出事時，誰真的願意背 maintenance window 與 rollback 風險？',
      foxconnPlay: '把 Lifecycle Control Tower 講成單一 accountable owner，賣的是 upgrade safety、rollback discipline 與 SLA 保護。',
      sourceLabel: missionControlSource?.name || 'NVIDIA Mission Control',
      source: missionControlSource?.url || 'https://www.nvidia.com/en-us/data-center/mission-control/',
    },
    {
      title: 'Brownfield fit',
      buyerQuestion: '新 AI 叢集能不能接進我現有的 BMC / DCIM / 維護窗口 / 權限流程，而不是逼我重做整個機房治理？',
      foxconnPlay: '把 Brownfield Integration & Fleet Baseline 放進 RFQ 回答，讓 Foxconn 看起來像營運整合 owner，而不只是伺服器供應商。',
      sourceLabel: schneiderAISource?.name || 'Schneider Electric AI Data Center Solutions',
      source: schneiderAISource?.url || 'https://www.se.com/ww/en/work/solutions/data-centers-and-networks/ai-data-centers/',
    },
  ]
  const softwareDepartmentMandate = [
    {
      title: '不要追求做一個更大的 control plane',
      risk: '如果 Foxconn 把軟體部門定位成和 hyperscaler / platform vendor 比 feature breadth，很容易落入「功能永遠追不完、卻很難溢價」的平台 parity 戰。',
      doInstead: '把軟體部門聚焦在 handoff、lifecycle、brownfield、facility event 與 air-gap governance 這些必須有人背責的邊界。',
    },
    {
      title: '要賣 accountable operations，不是 another dashboard',
      risk: '單純監控、報表與 portal 很容易被視為附屬功能，採購也會傾向壓價或要求附送。',
      doInstead: '把服務明確包裝成 Deployment Assurance、Lifecycle Control Tower、Capacity Assurance、AI Recovery & Evidence 等可被問責的結果。',
    },
    {
      title: '部門 KPI 要對準 attach 與續約，不是功能數量',
      risk: '若軟體仍被硬體 KPI 吃掉，團隊會自然往 demo feature 前進，而不是往能進報價、能被續約的服務邊界前進。',
      doInstead: '讓軟體部門直接背 software attachment rate、handoff time、remote resolution coverage、upgrade governance adoption 與 renewal signals。',
    },
  ]
  const softwareFlywheelCards = [
    {
      title: 'Factory evidence loop',
      whyItStartsWithSoftware: 'HPE 已把 pre-configured validated platform、deploy AI in days, not months 與 full stack visibility 放進同一條採購語言。這代表客戶買的不只是交機，而是第一天就有 baseline、驗收證據與可接手營運的起點。',
      foxconnAngle: 'Foxconn 最值得強調的，不是「我們也能裝軟體」，而是軟體部門能把工廠預載、burn-in、site acceptance、baseline 與 runbook 串成可重複驗證的交付閉環。',
      boardWhyItMatters: '這會把硬體出貨從一次性交付，升級成更容易 attach 的 Deployment Assurance。',
      sourceLabel: hpePrivateCloudAISource?.name || 'HPE Private Cloud AI',
      source: hpePrivateCloudAISource?.url || 'https://www.hpe.com/us/en/private-cloud-ai.html',
    },
    {
      title: 'Field telemetry loop',
      whyItStartsWithSoftware: 'NVIDIA Mission Control 已把 cluster life cycle、autonomous recovery、building management integration 與 power / cooling control 拉進 AI factory operations。這代表市場認可的價值，已經是持續營運資料如何反過來改善升級與故障處理，而不是只看第一次部署。',
      foxconnAngle: 'Foxconn 可把軟體部門定位成把 field telemetry、upgrade history、remote resolution 與 facility event 綁成同一套 lifecycle learning loop 的 owner。',
      boardWhyItMatters: '這會讓軟體價值從「看得到告警」升級成「每一次事件都會讓下次升級與恢復更可控」。',
      sourceLabel: missionControlSource?.name || 'NVIDIA Mission Control',
      source: missionControlSource?.url || 'https://www.nvidia.com/en-us/data-center/mission-control/',
    },
    {
      title: 'Renewal evidence loop',
      whyItStartsWithSoftware: 'NetApp 已把 built-in governance、simple secure inferencing 與 cyber-resilient / recoverable data 放進 AI infrastructure 敘事。這是一個很關鍵的市場訊號：客戶每年續約買的，往往不是介面本身，而是可治理、可恢復、可對稽核交代的證據。',
      foxconnAngle: 'Foxconn 應把軟體部門講成 evidence owner：把 baseline refresh、recovery runbook、incident evidence 與治理報表做成續約理由，而不是只留在 support 紀錄。',
      boardWhyItMatters: '這能把 Day-2 工作沉澱成明年還會繼續付錢的 Renewal Evidence。',
      sourceLabel: netappAISource?.name || 'NetApp AI infrastructure and data management',
      source: netappAISource?.url || 'https://www.netapp.com/artificial-intelligence/',
    },
  ]
  const officialMarketSignals = [
    {
      company: 'NVIDIA Mission Control',
      quote: 'streamlines every aspect of the AI factory—from developer workload scheduling and orchestration to monitoring and autonomous recovery',
      interpretation: '連 NVIDIA 都已把價值敘事拉到 AI factory operations、autonomous recovery 與 power / cooling control。這證明客戶買的不只是 GPU，而是誰能把 Day-2 營運風險接住。',
      sourceLabel: missionControlSource?.name || 'NVIDIA Mission Control',
      source: missionControlSource?.url || 'https://www.nvidia.com/en-us/data-center/mission-control/',
    },
    {
      company: 'HPE Private Cloud AI',
      quote: 'Deploy AI in days, not months ... Gain operational simplicity with full stack visibility',
      interpretation: 'HPE 直接用部署速度與 full-stack visibility 當賣點，說明管理層核准的語言已經不是節點規格，而是 time-to-value 與持續營運能力。',
      sourceLabel: hpePrivateCloudAISource?.name || 'HPE Private Cloud AI',
      source: hpePrivateCloudAISource?.url || 'https://www.hpe.com/us/en/private-cloud-ai.html',
    },
    {
      company: 'Red Hat OpenShift AI',
      quote: 'manage the lifecycle of predictive and generative AI models ... automate deployments and self-service access ... manage costs of inferencing',
      interpretation: 'Red Hat 官方語言聚焦 lifecycle、deployment automation、self-service 與 cost control。這正好強化一個重點：軟體部門該被定位成治理與營運 owner，而不是交機後的附屬支援。',
      sourceLabel: 'Red Hat OpenShift AI',
      source: 'https://www.redhat.com/en/products/ai/openshift-ai',
    },
    {
      company: 'NetApp AI infrastructure and data management',
      quote: 'unified foundation for the AI factory ... built-in governance ... simple secure inferencing ... cyber-resilient data protection',
      interpretation: '連資料與儲存基礎建設供應商都已經不是只賣效能，而是在賣治理、安全、recoverability 與可持續營運。這會讓 Foxconn 的論點更站得住：軟體部門真正值錢的，不是多做一個介面，而是把 server delivery、lifecycle control、remote ops 與 recovery evidence 串成可被採購的結果。',
      sourceLabel: netappAISource?.name || 'NetApp AI infrastructure and data management',
      source: netappAISource?.url || 'https://www.netapp.com/artificial-intelligence/',
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
                這代表客戶真正會核准的，不再只是 BOM 與節點規格，而是誰能對 Day-2 營運結果負責。Foxconn 若要避免淪為 commodity 供應商，軟體部門就必須被清楚定位成這層責任與續約收入的 owner，並以 attachment rate、Factory-to-Operations handoff time、upgrade governance adoption 與 renewal signals 這類軟體 KPI 被管理，而不是繼續沿用硬體出貨邏輯。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
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
                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-wider text-blue-200 mb-2">Software KPI shift</p>
                  <p className="text-sm font-bold">董事會該追的不只是出貨，而是 attach rate、handoff time、upgrade governance adoption 與續約訊號</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-600 mb-2">Board decision</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">把「軟體很重要」翻成今天就能拍板的 4 個決策</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    管理層常常不是被資料說服，而是卡在「所以我現在到底要批什麼」。這一塊把整份論述收斂成今日可批准的預算、組織、90 天啟動計畫與銷售激勵調整，讓軟體部門的價值不只停在策略敘事，而是能直接進入董事會 action item。
                  </p>
                </div>
                <div className="bg-rose-50 border border-rose-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-rose-900">一句話版本：如果董事會今天要做對一件事，不是再確認軟體重不重要，而是正式把預算、組織與首波 90 天執行權限批下來。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {boardDecisionCard.decisionRequired.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-rose-100 bg-rose-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-rose-700 mb-2">Decision {idx + 1}</p>
                    <h4 className="text-sm font-black text-slate-900 mb-3">{item.item}</h4>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">為什麼現在要批：</span>{item.rationale}</p>
                      <p><span className="font-bold text-rose-700">時間點：</span>{item.timeline}</p>
                      <p><span className="font-bold text-emerald-700">要看的成果：</span>{item.successMetric}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/80">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700 mb-2">If approved now</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{boardDecisionCard.ifApproved}</p>
                </div>
                <div className="p-5 rounded-2xl border border-amber-100 bg-amber-50/80">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-700 mb-2">If delayed</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{boardDecisionCard.ifDelayed}</p>
                </div>
                <div className="p-5 rounded-2xl border border-rose-100 bg-rose-50/80">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-700 mb-2">Risk of no decision</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{boardDecisionCard.riskOfNoDecision}</p>
                </div>
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-900 text-slate-50">
                <p className="text-sm font-semibold">董事會該記住的一句話：{boardDecisionCard.nextMeeting}</p>
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
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600 mb-2">Why the software department needs its own mandate</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">如果軟體部門只是硬體附屬功能，Foxconn 會直接失去的 3 件事</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這裡不是再講一次「軟體很重要」，而是把管理層最容易低估的代價講白：一旦軟體仍被當成硬體附屬支援，它會同時失去正式報價能力、續約邏輯，以及接觸真正 Day-2 預算 owner 的機會。這三件事一掉，軟體價值就很難被放大成部門級投資回報。
                  </p>
                </div>
                <div className="bg-violet-50 border border-violet-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-violet-900">一句話版本：軟體部門若沒有獨立 mandate，最後最可能發生的，不是少幾個功能，而是少了 attach rate、少了年約、也少了進入決策桌的資格。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl border border-violet-100 bg-violet-50/70">
                  <p className="text-xs font-black uppercase tracking-wider text-violet-700 mb-2">Loss #1｜正式報價權</p>
                  <p className="text-sm font-bold text-slate-900 mb-3">軟體會被當成附送功能，不容易形成 attach rate</p>
                  <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    <p><span className="font-bold text-slate-500">會發生什麼：</span>業務容易把 deployment、lifecycle、remote-ops 能力包進硬體附加價值，而不是獨立寫進正式報價與交付範圍。</p>
                    <p><span className="font-bold text-violet-700">為什麼危險：</span>一旦沒有明確 attach 語言，軟體部門就很難被看見自己創造了多少增量收入與 RFQ 勝率。</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-violet-100 bg-violet-50/70">
                  <p className="text-xs font-black uppercase tracking-wider text-violet-700 mb-2">Loss #2｜續約邏輯</p>
                  <p className="text-sm font-bold text-slate-900 mb-3">Day-2 風險會回到客戶內部，Foxconn 只能停在一次性交機</p>
                  <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    <p><span className="font-bold text-slate-500">會發生什麼：</span>升級治理、brownfield baseline、air-gap content lifecycle、availability review 這些天然適合年約的工作，會被視為臨時支援或專案尾端雜務。</p>
                    <p><span className="font-bold text-violet-700">為什麼危險：</span>客戶每年都還在承受相同風險，但 Foxconn 卻沒有把這些風險收斂成可續約收入。</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-violet-100 bg-violet-50/70">
                  <p className="text-xs font-black uppercase tracking-wider text-violet-700 mb-2">Loss #3｜預算 owner 接觸權</p>
                  <p className="text-sm font-bold text-slate-900 mb-3">Foxconn 會更難進到 SRE、FinOps、Compliance 與 DC Ops 的正式預算</p>
                  <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    <p><span className="font-bold text-slate-500">會發生什麼：</span>軟體價值會被局限在硬體採購對話，而不是擴展到平台治理、營運、合規與容量管理。</p>
                    <p><span className="font-bold text-violet-700">為什麼危險：</span>這會直接限制 Foxconn 把同一筆 AI server 訂單放大成跨部門、跨年度收入組合的能力。</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：是否讓軟體部門擁有獨立 mandate，決定的不是組織名片，而是 Foxconn 能不能把 AI server 從一次性設備收入，升級成可報價、可續約、可跨預算 owner 擴張的營運型業務。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-600 mb-2">External proof that the market already buys software-led outcomes</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">不是我們自己說軟體重要，競品官方文案早就在替這件事背書</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這一排故意只放競品官方語言，而且只抓最能說服管理層的關鍵句：deployment speed、AI lifecycle、autonomous recovery、cost control、governance 與 recoverability。目的不是蒐集 feature，而是直接證明市場現在核准的，就是軟體把硬體翻成可營運結果的能力。
                  </p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-sky-900">一句話版本：如果連 NVIDIA、HPE、Red Hat 都在賣 operations、lifecycle 與 visibility，Foxconn 就更不該把軟體只當成交機後的支援功能。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {officialMarketSignals.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-sky-100 bg-sky-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-sky-700 mb-2">{item.company}</p>
                    <p className="text-sm font-bold text-slate-900 mb-3 leading-relaxed">“{item.quote}”</p>
                    <p className="text-xs text-slate-700 leading-relaxed">{item.interpretation}</p>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：市場已經在公開用 lifecycle、visibility、autonomous recovery、cost control 來賣 AI 基礎設施；Foxconn 若還把軟體部門放在附屬位置，等於主動放棄更高價值的採購語言。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-600 mb-2">Why this must be a software department, not just a support function</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">真正該讓老闆看見的，不只是「軟體重要」，而是這套能力天然就是獨立部門與獨立 P&amp;L 的邏輯</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    如果把這些能力只當成硬體部門底下的支援功能，Foxconn 很容易在組織與採購語言上都吃虧：面對的買方不同、收入節奏不同、KPI 也完全不同。把這段講清楚，才能讓管理層理解：軟體部門不是成本中心，而是 attach rate、續約率與 RFQ 勝率的 owner。
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-amber-900">一句話版本：如果軟體只被當成支援，就會被硬體 KPI 吃掉；只有把它當成獨立價值層，Foxconn 才能真正把 Day-2 風險變成 Day-2 收入。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareDepartmentWhyNow.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-amber-100 bg-amber-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-amber-700 mb-2">{item.title}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">核心差異：</span>{item.point}</p>
                      <p><span className="font-bold text-amber-700">董事會該在意：</span>{item.boardWhyItMatters}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border border-rose-100 bg-rose-50/80">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-700 mb-3">Board mistake to avoid</p>
                  <h4 className="text-lg font-black text-rose-900 mb-3">最容易把軟體價值講小的 3 種問法</h4>
                  <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                    <p><span className="font-bold text-slate-500">錯問 1：</span>「這是不是只是硬體附帶的監控 / portal 功能？」</p>
                    <p><span className="font-bold text-rose-700">為什麼危險：</span>一旦被講成功能附屬品，就很容易被要求附送、壓價，或繼續沿用硬體 KPI 來管理。</p>
                    <p><span className="font-bold text-slate-500">錯問 2：</span>「既然大客戶也會寫平台，為什麼還需要我們？」</p>
                    <p><span className="font-bold text-rose-700">為什麼危險：</span>這會忽略大型客戶真正想外包的，是 handoff、upgrade risk、brownfield coordination 與 remote accountability，而不是上層體驗本身。</p>
                    <p><span className="font-bold text-slate-500">錯問 3：</span>「功能先做出來，再看能不能收費就好？」</p>
                    <p><span className="font-bold text-rose-700">為什麼危險：</span>這會把團隊帶往 another control plane 的消耗戰，最後功能變多，卻不一定進得了正式報價與續約。</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/80">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700 mb-3">Better board questions</p>
                  <h4 className="text-lg font-black text-emerald-900 mb-3">更能看見軟體部門價值的 4 個追問</h4>
                  <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                    <p><span className="font-bold text-emerald-700">追問 1：</span>這季有多少 AI server 訂單，已把 deployment / lifecycle / remote-ops 服務一起放進正式報價？</p>
                    <p><span className="font-bold text-emerald-700">追問 2：</span>交機後到客戶拿到可監控、可升級、可接手的 baseline，中間還要多久？</p>
                    <p><span className="font-bold text-emerald-700">追問 3：</span>有多少高頻故障或變更，已不需要派人到現場就能被遠端診斷、處理或安全降級？</p>
                    <p><span className="font-bold text-emerald-700">追問 4：</span>客戶是否已把 upgrade governance、rollback discipline、air-gap content lifecycle 或 brownfield baseline 正式交給 Foxconn？</p>
                    <div className="mt-4 p-3 rounded-xl bg-white border border-emerald-100">
                      <p className="text-xs font-semibold text-emerald-900">這 4 題的重點很簡單：不要只看做了多少功能，而要看軟體部門有沒有真的開始擁有 attach rate、handoff time、remote resolution coverage 與治理型續約訊號。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：硬體部門可以把設備交出去，但只有軟體部門能把交機後的部署、升級、治理與續約責任收斂成可持續經營的產品線。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-600 mb-2">How software wins the RFQ when specs look similar</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">當硬體規格差不多時，最後把標案拉開差距的通常不是規格，而是 3 個 software tie-breakers</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這段是專門替老闆翻譯 RFQ 現場會發生的事：很多時候最後不是誰多一個 feature，而是誰更能回答 deployment 風險、升級責任，以及 brownfield 導入阻力。把這 3 個 tie-breakers 直接講清楚，軟體部門的價值就不再像加分題，而是直接進入勝率與報價能力。
                  </p>
                </div>
                <div className="bg-rose-50 border border-rose-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-rose-900">一句話版本：規格決定有沒有入場券，軟體部門決定最後 RFQ 是不是敢把分數與責任交給 Foxconn。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {rfqTieBreakerCards.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-rose-100 bg-rose-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-rose-700 mb-2">{item.title}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">採購最後會問：</span>{item.buyerQuestion}</p>
                      <p><span className="font-bold text-rose-700">Foxconn 應該這樣回答：</span>{item.foxconnPlay}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：當市場不再只比 GPU 與節點規格，軟體部門最值錢的角色，就是把 deployment confidence、change accountability 與 brownfield fit 變成 Foxconn 在 RFQ 上的最後勝負手。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-2">What the software department should deliberately not become</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">軟體部門最重要的戰略克制：不要去打「平台功能大全」這種難贏又難溢價的仗</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    市場已經有很多 control plane、observability 與 AI platform 敘事。真正更能凸顯 Foxconn 價值的，不是再證明我們也能做一套很大的平台，而是清楚告訴管理層：軟體部門要專心接住那些最容易拖慢交付、最容易在升級時出事、也最容易變成年約收入的責任邊界。這會比追求 feature parity 更能保住毛利，也更像軟體部門該擁有的獨立定位。
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-orange-900">一句話版本：Foxconn 不需要再做一個更大的 control plane；Foxconn 需要的是一個更能被問責、也更能續約的 Day-2 software department。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareDepartmentMandate.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-orange-100 bg-orange-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-orange-700 mb-2">{item.title}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">如果走錯方向：</span>{item.risk}</p>
                      <p><span className="font-bold text-orange-700">更好的主張：</span>{item.doInstead}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：軟體部門最值錢的地方，不是把功能表做得比 hyperscaler 更長，而是把 handoff、lifecycle、brownfield、facility event 與 air-gap governance 這些高責任邊界收斂成可被採購、可被問責、也可被續約的服務。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-2">Market-approved buying language</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">市場真正核准預算的 7 種語言</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    從 HPE、NVIDIA、Red Hat、Lenovo、Dell 到 Schneider Electric 的官方產品敘事來看，客戶現在核准的不是功能清單，而是七種能被管理層理解的結果：速度、控制、信任、單一 accountable owner、容量延後擴建能力、事故後的 recoverability，以及持續服務可用性。把這七種語言直接放進總覽，能更快說清楚軟體部門不是支援角色，而是預算與續約的 owner。
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
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-600 mb-2">Where hardware ends and software value begins</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">同一筆 AI Server 訂單，真正把毛利與續約拉高的是軟體部門接手後的 4 段價值鏈</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這段是給老闆最直接的翻譯：硬體部門交付的是設備與規格，軟體部門交付的是可上線、可治理、可續約的營運結果。把兩者切開講，才能明確看見軟體部門不是 support function，而是把一次性 BOM 放大成 attach rate、ARR 與 board-level accountability 的那一層。
                  </p>
                </div>
                <div className="bg-slate-100 border border-slate-200 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-slate-900">一句話版本：硬體把設備交到客戶手上；軟體部門把這批設備變成能上線、能被問責、也能每年續約的 AI 營運服務。</p>
                </div>
              </div>

              <div className="space-y-4">
                {softwareValueChain.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 xl:grid-cols-[180px,1fr] gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">Stage {idx + 1}</p>
                      <p className="text-lg font-black text-slate-900">{item.stage}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-700">
                      <div className="space-y-2">
                        <p><span className="font-bold text-slate-500">這一段交付什麼：</span>{item.delivers}</p>
                        <p><span className="font-bold text-slate-500">客戶其實在問：</span>{item.customerQuestion}</p>
                      </div>
                      <div className="space-y-2">
                        <p><span className="font-bold text-rose-700">如果沒軟體 owner：</span>{item.businessRisk}</p>
                        <p><span className="font-bold text-emerald-700">軟體部門把它翻成：</span>{item.softwareRole}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-900 text-slate-50">
                <p className="text-sm font-semibold">董事會該記住的一句話：硬體部門決定能不能交機，軟體部門決定這筆訂單最後是一次性交貨，還是能長成 deployment assurance、lifecycle governance、remote ops 與年度續約收入。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-2">How the board should verify software value</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">董事會不只要聽故事，還要追 4 個 proof points 才看得見軟體部門真的有在放大硬體價值</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這一塊是把「軟體部門很重要」翻成管理層真的能每季追的驗證語言。真正該追的，不是功能做了多少，而是 attach rate 有沒有進報價、交機到營運 baseline 有沒有縮短、遠端處理覆蓋有沒有上升，以及客戶是否開始把升級治理正式交給 Foxconn。這樣老闆才看得見：軟體部門不是概念，而是會進入收入、交付與續約指標的價值 owner。
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-emerald-900">一句話版本：若軟體部門真的有價值，它會很早就反映在 attach、handoff、remote resolution 與 upgrade governance 這 4 件事上。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {boardProofPoints.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-emerald-700 mb-2">{item.metric}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">董事會該追問：</span>{item.question}</p>
                      <p><span className="font-bold text-emerald-700">為什麼重要：</span>{item.whyItMatters}</p>
                      <p><span className="font-bold text-blue-700">最早期訊號：</span>{item.earlySignal}</p>
                    </div>
                  </div>
                ))}
              </div>

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
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-600 mb-2">How software gets budget approved</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">老闆 / CFO 真正會核准的，不是功能清單，而是 6 種可被問責的結果</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    總覽如果只講功能，很容易讓軟體部門看起來像附加價值；但從 NVIDIA、HPE、Red Hat、Lenovo、Dell 與 Schneider Electric 的官方敘事來看，真正被核准的預算語言其實是：能不能更快上線、能不能少出事、能不能更好治理、以及到底誰對結果負責，外加出事後能不能恢復、設施與叢集能不能一起被管理。把這段放在前面，能更直接把軟體部門從 support unit 拉高成預算 owner。
                  </p>
                </div>
                <div className="bg-teal-50 border border-teal-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-teal-900">一句話版本：管理層不是在核准「多一套平台」，而是在核准更快上線、更少中斷、更容易治理、更清楚的責任歸屬，以及更可恢復、可跨設施協調的營運結果。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {procurementProofCards.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-teal-100 bg-teal-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-teal-700 mb-2">{item.company}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">市場怎麼賣：</span>{item.proof}</p>
                      <p><span className="font-bold text-teal-700">採購真正核准的是：</span>{item.buyerTranslation}</p>
                      <p><span className="font-bold text-emerald-700">Foxconn 該怎麼講：</span>{item.foxconnPlay}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：軟體部門之所以值錢，不是因為做了很多功能，而是因為它把上線速度、SLA 壓力、治理風險、恢復能力、設施協調與責任歸屬翻成了可以被核准、被追 KPI、也能被續約的商業結果。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-600 mb-2">Where the software department becomes the revenue owner</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">6 個還沒被好好解的痛點，剛好對應 6 個最容易 attach 成年約的服務</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這一段把「市場白地」直接翻成董事會更在意的語言：哪些問題現在還讓客戶卡住、誰會為了解決它編預算、以及軟體部門怎麼把這些痛點接成可定價、可續約的服務邊界。這次特別把 capacity deferral 也拉進來，因為對老闆來說，能延後擴建、減少 outage 風險，往往比多一個功能更容易看見軟體部門的真實價值。這能更直接證明：軟體部門不是做 support，而是在接住硬體最難變現的那段價值。
                  </p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-sky-900">一句話版本：客戶真正會編預算的，不是 another dashboard，而是有人願意把 brownfield、升級、air-gap 與共享 GPU 治理長期接住。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {painToServiceMap.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-sky-100 bg-sky-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-sky-700 mb-2">{item.service}</p>
                    <p className="text-sm font-bold text-slate-900 mb-3">{item.pain}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">為什麼還痛：</span>{item.whyItStaysUnsolved}</p>
                      <p><span className="font-bold text-sky-700">預算 owner：</span>{item.budgetOwner}</p>
                      <p><span className="font-bold text-emerald-700">董事會結果：</span>{item.boardOutcome}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：白地之所以值錢，不是因為別人沒看到，而是因為那些痛點跨部門、跨機房、跨生命周期，最後一定要有一個 owner；這個 owner 最合理就是軟體部門。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600 mb-2">Why software deserves its own budget conversation</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">同一套軟體服務，實際上在打 6 種不同預算：這就是它不能只被算進硬體附屬功能的原因</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這一段故意把軟體部門的價值翻成 CFO / BU head 聽得懂的語言：它不只是在一張 BOM 裡加點軟體，而是在不同場景裡，同時對 Infrastructure、Platform、Operations、Compliance、FinOps 與 Delivery 團隊創造可核准的結果。當同一台 AI server 能被 attach 到這麼多預算 owner，軟體部門就不該再被看成硬體附屬支援，而是應該被管理成獨立的收入與續約引擎。
                  </p>
                </div>
                <div className="bg-cyan-50 border border-cyan-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-cyan-900">一句話版本：硬體主要吃一筆採購預算，軟體部門卻能把同一套設備接進交付、營運、治理、合規與續約預算。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {budgetOwnerRows.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-cyan-100 bg-cyan-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-cyan-700 mb-2">{item.budgetOwner}</p>
                    <p className="text-sm font-bold text-slate-900 mb-3">{item.service}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">為什麼現在會編：</span>{item.whyNow}</p>
                      <p><span className="font-bold text-cyan-700">為什麼明年還會續：</span>{item.renewalDriver}</p>
                      <p><span className="font-bold text-emerald-700">董事會結果：</span>{item.boardOutcome}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：當軟體部門能同時對接交付、SRE、機房、合規與 FinOps 預算，它就不只是附屬功能，而是 Foxconn 把一次性 AI server 訂單放大成多年度收入組合的關鍵控制層。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600 mb-2">Why the software department wins in two very different markets</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">同一個軟體部門，面對 CSP 與一般企業，其實在賣兩種不同的不可替代價值</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這段是替老闆把市場切乾淨：如果把所有客戶都講成在買同一套平台，軟體部門很容易看起來像籠統的支援單位。其實大型 CSP / Hyperscaler 買的是 remote-ops accountability、brownfield fit 與 capacity assurance；一般企業 / 主權 AI 客戶買的則是 deployment assurance、governance、air-gap content lifecycle 與私有 AI 可快速上線。這種雙引擎敘事，能更直接證明軟體部門不是附屬品，而是把同一台 AI server 翻成不同市場可成交服務的價值轉譯層。
                  </p>
                </div>
                <div className="bg-violet-50 border border-violet-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-violet-900">一句話版本：面對 CSP，軟體部門賣的是營運責任轉移；面對企業，賣的是私有 AI 可交付結果。兩邊都不是硬體部門單獨能完成的事。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {segmentSpecificMotions.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-violet-100 bg-violet-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-violet-700 mb-2">{item.segment}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">客戶為什麼會買：</span>{item.buyingTrigger}</p>
                      <p><span className="font-bold text-violet-700">客戶真正買的是：</span>{item.whatTheyActuallyBuy}</p>
                      <p><span className="font-bold text-emerald-700">軟體部門的切入點：</span>{item.softwareWedge}</p>
                      <p><span className="font-bold text-sky-700">為什麼是 Foxconn：</span>{item.whyFoxconnWins}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：同一台 AI server，對 CSP 賣的是 Day-2 風險外包，對企業賣的是私有 AI 可交付能力；能把這兩種價值都翻譯成可報價、可續約服務的，就是軟體部門。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600 mb-2">Why even hyperscalers still buy help</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">大型 CSP 不是不會做，而是不想自己長期背這 4 類 Day-2 責任</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這段如果不講清楚，管理層很容易把軟體部門誤解成「替客戶代工一些他們本來就會做的事」。但外部市場訊號剛好相反：真正容易被外包、也最能形成 attach rate 與年約收入的，是 handoff、change-window、brownfield / facility coordination 與 air-gap governance 這些高責任、跨團隊、出錯代價又高的 Day-2 工作。
                  </p>
                </div>
                <div className="bg-violet-50 border border-violet-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-violet-900">一句話版本：大型客戶買 Foxconn 軟體，不是因為他們不會寫平台，而是因為他們不想自己對半夜出事、升級失敗、設施協調與斷網治理長期背責。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hyperscalerBuyPatterns.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-violet-100 bg-violet-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-violet-700 mb-2">{item.title}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">客戶通常不想自己扛：</span>{item.whatHyperscalersAvoid}</p>
                      <p><span className="font-bold text-violet-700">Foxconn 可被定價的地方：</span>{item.foxconnValue}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：Hyperscaler 真正願意外包的，不是差異化平台體驗，而是那些最靠近交機、升級、設施事件與 on-call 責任的 Day-2 風險；這正是軟體部門最能被定價的位置。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 mb-2">Why software value compounds over time</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">軟體部門真正會越做越值錢，不是因為功能變多，而是因為它能把 factory → field → renewal 變成同一個證據閉環</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這一段特別重要，因為它把軟體部門的價值從「一次性幫忙上線」往上拉成「每一次交付、每一次事件、每一次恢復都會累積下一次更高勝率與更高續約率」。外部領先供應商已經在賣 validated deployment、AI factory operations、governance 與 recoverability；Foxconn 最值得講清楚的，是軟體部門如何把這些訊號串成自己的 learning loop，而不是每張訂單都重新來過。
                  </p>
                </div>
                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-indigo-900">一句話版本：硬體部門把設備交出去；軟體部門把每次交付、故障與恢復都變成下一次更快上線、更敢續約的證據資產。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {softwareFlywheelCards.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-indigo-100 bg-indigo-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-indigo-700 mb-2">{item.title}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">市場訊號：</span>{item.whyItStartsWithSoftware}</p>
                      <p><span className="font-bold text-indigo-700">Foxconn 該怎麼主張：</span>{item.foxconnAngle}</p>
                      <p><span className="font-bold text-emerald-700">董事會該在意：</span>{item.boardWhyItMatters}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mb-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：如果軟體部門能把交付證據、現場遙測、升級歷史與恢復證據收斂成同一條 learning loop，它就不只是 support function，而是讓 attach rate、續約率與 RFQ 信任一起變厚的資產 owner。</p>
              </div>

              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 mb-2">Why the software department is not a support team</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">真正不可替代的，不是功能數量，而是 4 個必須有人 owning 的責任邊界</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這裡把軟體部門的價值從「做了哪些功能」翻成「哪 4 種責任如果沒人長期 owning，硬體價值就無法真正放大」。這種講法對董事會特別重要，因為它會把軟體部門從支援角色拉高成 attach rate、續約率與 SLA 信任的 owner。
                  </p>
                </div>
                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-indigo-900">一句話版本：硬體部門交付設備，軟體部門交付可被接手的營運基線、可被管理的風險，與可被續約的服務結果。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl border border-indigo-100 bg-indigo-50/70">
                  <p className="text-xs font-black uppercase tracking-wider text-indigo-700 mb-2">1. Deployment owner</p>
                  <p className="text-sm font-bold text-slate-900 mb-3">Factory-to-Operations handoff</p>
                  <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    <p><span className="font-bold text-slate-500">沒人接會怎樣：</span>硬體交機後，baseline、驗收、權限與 Day-2 runbook 仍是灰色地帶，time-to-revenue 被拖長。</p>
                    <p><span className="font-bold text-indigo-700">軟體部門在賣：</span>把「能出貨」升級成「可立即接手營運」。</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl border border-indigo-100 bg-indigo-50/70">
                  <p className="text-xs font-black uppercase tracking-wider text-indigo-700 mb-2">2. Change-risk owner</p>
                  <p className="text-sm font-bold text-slate-900 mb-3">Lifecycle / upgrade accountability</p>
                  <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    <p><span className="font-bold text-slate-500">沒人接會怎樣：</span>driver、firmware、CUDA、K8s 每次升級都像一次小型賭局，出事就互相推責。</p>
                    <p><span className="font-bold text-indigo-700">軟體部門在賣：</span>把 maintenance window、rollback discipline 與 SLA 保護做成標準服務。</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl border border-indigo-100 bg-indigo-50/70">
                  <p className="text-xs font-black uppercase tracking-wider text-indigo-700 mb-2">3. Brownfield owner</p>
                  <p className="text-sm font-bold text-slate-900 mb-3">Existing datacenter fit</p>
                  <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    <p><span className="font-bold text-slate-500">沒人接會怎樣：</span>新 AI 叢集很容易卡在既有 BMC、DCIM、權限與維護窗口流程，最後不是延誤就是縮小導入範圍。</p>
                    <p><span className="font-bold text-indigo-700">軟體部門在賣：</span>把「不用打掉重練也能接進現場營運體系」做成可收費能力。</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl border border-indigo-100 bg-indigo-50/70">
                  <p className="text-xs font-black uppercase tracking-wider text-indigo-700 mb-2">4. Remote accountability owner</p>
                  <p className="text-sm font-bold text-slate-900 mb-3">Day-2 ops / air-gap / facility event response</p>
                  <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    <p><span className="font-bold text-slate-500">沒人接會怎樣：</span>半夜故障、斷網更新、power / cooling event 一來，客戶仍得自己召集多團隊救火。</p>
                    <p><span className="font-bold text-indigo-700">軟體部門在賣：</span>把 on-call 壓力、治理風險與恢復責任轉成可續約的年約服務。</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">董事會該記住的一句話：軟體部門最不可替代的地方，不是又做出一套平台，而是把 deployment、change risk、brownfield fit 與 remote accountability 這 4 條責任線收斂成單一 owner；這才是硬體 attach rate、續約率與溢價能力真正被放大的地方。</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <div className="flex items-start justify-between gap-4 flex-col lg:flex-row lg:items-end mb-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-600 mb-2">Why the white space is still open</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">真正還沒被解決的，不是 another platform，而是 4 個沒人想長期背責的缺口</h3>
                  <p className="text-sm text-slate-700 max-w-4xl leading-relaxed">
                    這一段的目的，是把「市場還有空位」說得更具體。HPE、Dell、NVIDIA、Red Hat 都已經在賣平台、可觀測性與部署速度；但真正還常被留給客戶自己收尾的，是 brownfield 接軌、air-gap 內容生命週期、facility-aware workload governance，以及 shared GPU cluster 的 tenant / quota / SLA 治理。這些缺口如果不補，硬體再強也很難變成可穩定營運的 AI 服務。
                  </p>
                </div>
                <div className="bg-fuchsia-50 border border-fuchsia-100 rounded-2xl px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-fuchsia-900">一句話版本：市場不是缺功能，而是缺有人願意對 brownfield、air-gap、facility event 與 shared GPU 治理的結果長期負責。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareDifferentiation.marketWhiteSpace.gaps.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-fuchsia-100 bg-fuchsia-50/70">
                    <p className="text-xs font-black uppercase tracking-wider text-fuchsia-700 mb-2">{item.title}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p><span className="font-bold text-slate-500">為什麼還沒被好好解：</span>{item.whyStillOpen}</p>
                      <p><span className="font-bold text-fuchsia-700">Foxconn 可站上的位置：</span>{item.foxconnPlay}</p>
                    </div>
                    <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                      {item.sourceLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">{softwareDifferentiation.marketWhiteSpace.boardMessage}</p>
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
