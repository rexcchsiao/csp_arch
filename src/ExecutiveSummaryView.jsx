// Executive Summary View - Leadership Decision Dashboard
// Surfaces key metrics, decisions, and value propositions for C-level executives
import React from 'react';
import { TrendingUp, DollarSign, Target, AlertTriangle, CheckCircle, ArrowRight, Lock, Layers, BarChart3, Zap, Shield as ShieldIcon, Award, Clock } from 'lucide-react';
import { customerSuccessScenarios, executiveSummary } from './customer-success-stories';
import { softwareDifferentiation } from './software-differentiation';
import { competitiveLandscape } from './competitive-landscape.js';
import { competitiveSources } from './competitive-sources.js';

const ExecutiveSummaryView = () => {
  const metrics = [
    { label: 'GPU 利用率提升', before: '40-60%', after: '85%+', improvement: '+42%', icon: TrendingUp },
    { label: '部署時間縮短', before: '2-4 週', after: '2 小時', improvement: '-99%', icon: Clock },
    { label: '運維人力減少', before: '100%', after: '30%', improvement: '-70%', icon: DollarSign },
    { label: '毛利率提升', before: '10-15%', after: '20-25%', improvement: '+10pp', icon: Target },
  ];

  const revenueProjection = softwareDifferentiation.serviceOfferings?.revenueProjection;
  const revenueProjectionEntries = revenueProjection
    ? Object.entries(revenueProjection).filter(([key]) => key !== 'assumption')
    : [];
  const revenueProjectionLabels = {
    year1: '2026 年（首年）',
    year2: '2027 年',
    year3: '2028 年',
  };
  const missionControlSource = competitiveSources.nvidia?.find((source) => source.name.includes('Mission Control'));
  const recurringValueWedgeCount = competitiveLandscape.softwareDepartmentWedge?.wedges?.length || 0;
  const standardsSources = competitiveSources.standards || [];
  const hpePrivateCloudAISource = competitiveSources.hpe?.find((source) => source.name.includes('Private Cloud AI'));
  const disconnectedSource = competitiveSources.enterprisePlatforms?.find((source) => source.name.includes('Disconnected Environments'));
  const dellAIFactorySource = competitiveSources.dell?.find((source) => source.name.includes('Dell AI Factory'));
  const openshiftAISource = competitiveSources.enterprisePlatforms?.find((source) => source.name === 'Red Hat OpenShift AI');
  const buyerScorecardSignals = [
    {
      criterion: 'Deployment speed now appears in the buying language',
      marketSignal: 'HPE explicitly sells deploy-in-days, validated stack, and built-in observability instead of just server specifications.',
      whyItChangesProcurement: 'Once the market talks in time-to-value language, software stops looking optional and starts affecting RFQ scoring.',
      foxconnMove: 'Package factory pre-load, site acceptance, and standardized runbooks as Deployment Assurance rather than “integration support.”',
      source: hpePrivateCloudAISource?.name || 'HPE Private Cloud AI',
    },
    {
      criterion: 'Lifecycle and recovery are becoming first-class requirements',
      marketSignal: 'NVIDIA Mission Control positions cluster life cycle, autonomous recovery, and building-management integration as product value.',
      whyItChangesProcurement: 'This shifts buyer attention from “can it be installed?” to “who owns Day-2 risk when the cluster is live?”.',
      foxconnMove: 'Sell Lifecycle Control Tower and Facility-Aware Capacity Assurance as accountable operating outcomes.',
      source: missionControlSource?.name || 'NVIDIA Mission Control',
    },
    {
      criterion: 'Governance and cost visibility are now platform requirements',
      marketSignal: 'Red Hat OpenShift AI emphasizes monitoring, cost control, self-service access, and hybrid operations.',
      whyItChangesProcurement: 'Once multiple teams share an AI cluster, quota, showback, and policy enforcement become budget-owner issues—not engineering nice-to-haves.',
      foxconnMove: 'Push tenant governance, GPU showback, and quota policy as the layer that makes shared AI infrastructure financially governable.',
      source: openshiftAISource?.name || 'Red Hat OpenShift AI',
    },
    {
      criterion: 'Neutral integration becomes a board-level differentiator',
      marketSignal: 'Dell, HPE, and NVIDIA all package outcomes around their own infrastructure and ecosystem choices.',
      whyItChangesProcurement: 'That makes mixed-vendor freedom, brownfield fit, and single-accountability integration more valuable for customers protecting existing assets.',
      foxconnMove: 'Position Foxconn software as the neutral operations layer across mixed infrastructure, not another closed stack.',
      source: dellAIFactorySource?.name || 'Dell AI Factory / broader OEM ecosystem pattern',
    },
  ];
  const marketWhitespace = [
    {
      title: 'Day-2 Lifecycle Governance 仍然是痛點',
      marketSignal: 'HPE 已把「pre-configured、validated、full-stack visibility、built-in observability」當成主賣點，代表企業客戶真正怕的是上線後的持續營運，而不是第一次安裝。',
      whitespace: '多數 OEM/ODM 還停留在交機與基本管理，沒有把版本矩陣、maintenance window、rollback 與稽核輸出做成可續約服務。',
      foxconnPlay: '把 Lifecycle Control Tower 做成標準 attach：從硬體驗證延伸到季度升級治理與年度顧問收入。',
      source: hpePrivateCloudAISource?.name || 'HPE Private Cloud AI',
    },
    {
      title: 'Air-gapped / Sovereign AI 的 Day-2 內容生命週期沒人想接',
      marketSignal: 'Red Hat 甚至為 disconnected environments 提供獨立文件，說明這不是 niche case，而是正式的企業運營場景。',
      whitespace: '真正麻煩的是離線 registry、chart mirror、內容簽章、更新包驗證、升級 runbook 與稽核證據，這些通常不會被伺服器廠完整承接。',
      foxconnPlay: '把 Air-Gap Content Lifecycle 做成高毛利服務，鎖定國防、金融、主權雲等不能只買硬體的客戶。',
      source: disconnectedSource?.name || 'Red Hat OpenShift AI (Disconnected Environments)',
    },
    {
      title: 'Facility-aware brownfield integration 仍缺真正 owner',
      marketSignal: 'NVIDIA Mission Control 已把 building management integration、power / cooling control、autonomous recovery 放進產品敘事，證明 AI 機房的價值正在往 IT + facilities 協同移動。',
      whitespace: '客戶最常卡住的不是 GPU 規格，而是新叢集能不能不打掉重練就接回既有 DCIM、告警、權限與維護窗口。這一層通常又髒又長尾，所以最容易被忽略。',
      foxconnPlay: '用 Brownfield Integration Hub 承接現場導入，讓軟體部門變成訂單真正落地的關鍵人。',
      source: missionControlSource?.name || 'NVIDIA Mission Control',
    },
  ];
  const hyperscalerKeepInHouseVsBuy = [
    {
      title: 'Change Safety / Lifecycle Control',
      summary: '大型 CSP 當然能自己寫平台，但最不想自己背的是跨 BMC、BIOS、GPU 韌體、CUDA、K8s 的升級風險與 maintenance window 治理。',
      foxconnEdge: 'Foxconn 能把版本矩陣、canary、rollback、稽核報表做成可交付服務，讓客戶少養一支專門處理變更事故的團隊。',
      source: 'NVIDIA Mission Control / Lifecycle orchestration positioning',
    },
    {
      title: 'Brownfield Integration',
      summary: 'Hyperscaler 的內部軟體通常偏向標準化，最耗時的反而是把新 AI 叢集接回既有機房、DCIM、權限與告警流程。',
      foxconnEdge: 'Foxconn 站在硬體、韌體、系統整合與現場交付交界，最有資格承接這種「髒但值錢」的導入工作。',
      source: 'DMTF Redfish / OpenBMC foundations + existing-facility integration thesis',
    },
    {
      title: 'Facility-Aware Capacity Assurance',
      summary: '真正讓 AI 專案爆掉的常不是模型，而是 rack power cap、cooling event、thermal / leakage alarm 這些跨 IT 與機電的協調問題。',
      foxconnEdge: 'Foxconn 可把 BMC 遙測、排程策略與既有 BMS/DCIM 流程串起來，賣的是「避免設施事件變成叢集 outage」的結果。',
      source: 'NVIDIA Mission Control building management / power-cooling integration',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Executive One-Liner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
        <h3 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2 opacity-80">
          <Target className="w-4 h-4" /> 核心主張
        </h3>
        <p className="text-2xl md:text-3xl font-black leading-tight mb-4">
          {executiveSummary.oneLiner}
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">30 秒說服重點</p>
            <p className="text-sm leading-relaxed opacity-90">{executiveSummary.elevator30s}</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">戰略要求</p>
            <p className="text-sm leading-relaxed opacity-90">{executiveSummary.ask}</p>
          </div>
        </div>
      </div>

      {/* Why Now - 2026 Q2 Inflection Point */}
      {executiveSummary.whyNow && (
        <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8">
          <h3 className="text-lg font-black text-amber-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            {executiveSummary.whyNow.headline}
          </h3>
          <p className="text-sm text-amber-800 mb-6">{executiveSummary.whyNow.context}</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {executiveSummary.whyNow.marketShifts.map((shift, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-amber-100">
                <p className="text-xs font-black text-amber-900 mb-2">{shift.trend}</p>
                <p className="text-xs text-slate-600 mb-2">
                  <span className="font-bold">市場變化：</span>{shift.implication}
                </p>
                <p className="text-xs text-amber-700">
                  <span className="font-bold">Foxconn 策略：</span>{shift.foxconnMove}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-red-100 rounded-xl p-4 border border-red-200">
            <p className="text-xs font-black text-red-900 mb-1">延遲代價</p>
            <p className="text-sm text-red-800">{executiveSummary.whyNow.riskOfDelay}</p>
          </div>
        </div>
      )}

      {/* Why the software team owns the value layer */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" /> 為什麼軟體部門不是配角，而是價值控制層
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          市場訊號已經很明確：NVIDIA Mission Control 把 AI factory 的工作負載編排、監控、autonomous recovery、power / cooling control 與 building management integration 都包成軟體；
          Redfish 與 OpenBMC 則證明底層管理能力正快速標準化。真正能被客戶感知、也真正值得付費的，不是「有沒有 BMC API」，而是誰能把這些基礎能力變成可治理、可回滾、可稽核、可大規模運營的服務。
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-red-700 mb-3">如果沒有軟體產品層</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Redfish / OpenBMC 只會停留在「可管理」，無法變成「可營運」</li>
              <li>• 每次升級都變成高風險專案，仍依賴人海與現場經驗</li>
              <li>• 新 AI 叢集難以接回既有 DCIM、告警、維護窗口與權限流程</li>
              <li>• 客戶會把硬體視為可替換零件，而非長期服務平台</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-green-700 mb-3">軟體部門真正賣的是什麼</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Lifecycle Control Tower：版本矩陣、canary 升級、自動回滾、稽核報表</li>
              <li>• Brownfield Integration Hub：把新 AI 叢集接進既有機房流程，不必整場重做</li>
              <li>• Remote Ops 閉環：監控 → 診斷 → 預警 → 遠端修復</li>
              <li>• 可被管理層理解的 KPI：縮短維護窗口、降低停機、保護既有投資</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-black text-slate-500 mb-2">外部訊號 1</p>
            <p className="text-sm font-bold text-slate-900 mb-2">NVIDIA 已把 AI factory 營運包成軟體</p>
            <p className="text-xs text-slate-600 leading-relaxed">{missionControlSource?.keyFeature || 'Mission Control 將部署、編排、監控、autonomous recovery 與 power / cooling control 整合為 AI factory operations software。'}</p>
          </div>
          {standardsSources.slice(0, 2).map((source) => (
            <div key={source.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-black text-slate-500 mb-2">外部訊號</p>
              <p className="text-sm font-bold text-slate-900 mb-2">{source.name}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{source.keyFeature}</p>
              <p className="text-xs text-amber-700 mt-3">所以真正的溢價點不是標準本身，而是建在標準之上的治理、流程與服務。</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
          <h4 className="text-base font-black text-indigo-900 mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-600" />
            軟體部門最值得投資的 {recurringValueWedgeCount} 個續約楔子
          </h4>
          <p className="text-sm text-indigo-800 mb-4 leading-relaxed">
            真正能讓硬體訂單長成 3-5 年服務收入的，不是多一個 dashboard，而是把客戶最怕、最麻煩、最不想自己承接的 Day-2 營運風險做成可定價服務。
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {competitiveLandscape.softwareDepartmentWedge.wedges.map((wedge) => (
              <div key={wedge.name} className="rounded-2xl border border-indigo-100 bg-white p-4">
                <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">Recurring Value Wedge</p>
                <p className="text-sm font-black text-slate-900 mb-3">{wedge.name}</p>
                <div className="space-y-2 text-xs text-slate-700">
                  <p><span className="font-bold text-slate-500">客戶痛點：</span>{wedge.customerTrigger}</p>
                  <p><span className="font-bold text-indigo-600">Foxconn 為何能做：</span>{wedge.whyFoxconnWins}</p>
                  <p><span className="font-bold text-green-600">收入模式：</span>{wedge.monetization}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-indigo-100 bg-white p-4">
            <p className="text-sm font-semibold text-indigo-900">{competitiveLandscape.softwareDepartmentWedge.boardMessage}</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h4 className="text-base font-black text-slate-900 mb-2 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            軟體部門不是成本中心，而是跨預算 owner 的續約收入層
          </h4>
          <p className="text-sm text-slate-700 mb-4 leading-relaxed">
            真正讓管理層看見價值的，不只是功能清單，而是誰會為這些能力編列預算、什麼事件會觸發採購、以及為什麼明年還會繼續付錢。
            當 Foxconn 的軟體能同時對應 Infrastructure、SRE、Operations、Compliance 與 Facilities 的需求時，硬體訂單就有機會長成多部門、多年度的服務收入。
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {competitiveLandscape.serviceValueCaptureMatrix?.rows.map((row) => (
              <div key={row.service} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-black text-slate-900 mb-3">{row.service}</p>
                <div className="space-y-2 text-xs text-slate-700">
                  <p><span className="font-bold text-slate-500">預算 owner：</span>{row.budgetOwner}</p>
                  <p><span className="font-bold text-slate-500">採購觸發：</span>{row.trigger}</p>
                  <p><span className="font-bold text-blue-600">續約理由：</span>{row.recurringReason}</p>
                  <p><span className="font-bold text-green-600">董事會看到的結果：</span>{row.boardOutcome}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-900">{competitiveLandscape.serviceValueCaptureMatrix?.boardMessage}</p>
          </div>
        </div>
      </div>

      {/* Market whitespace - where software earns its keep */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-rose-600" /> 市場還沒被真正補滿的 3 個高價值空白
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          如果老闆只看「大家都說自己有平台」，很容易誤判軟體差異不大。真實市場不是這樣啦～ 客戶真正會付錢的地方，往往是那些沒人想接、但一出事就非常痛的 Day-2 問題。
          下面這三個空白，正好就是軟體部門能把硬體 attach 成高毛利服務的切入口。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {marketWhitespace.map((item) => (
            <div key={item.title} className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-rose-600 mb-2">Market White Space</p>
              <p className="text-sm font-black text-slate-900 mb-3">{item.title}</p>
              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p><span className="font-bold text-slate-500">市場訊號：</span>{item.marketSignal}</p>
                <p><span className="font-bold text-amber-700">還沒被補滿的空白：</span>{item.whitespace}</p>
                <p><span className="font-bold text-emerald-700">Foxconn 應該賣什麼：</span>{item.foxconnPlay}</p>
              </div>
              <p className="text-[11px] text-slate-500 mt-4">Source anchor: {item.source}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-rose-100 bg-white p-4">
          <p className="text-sm font-semibold text-rose-900">
            給管理層的翻譯版：<span className="text-slate-700">軟體部門不是去做一個「也有 dashboard」的平台，而是去接住競爭對手最容易留下空洞的 Day-2 運營責任。誰能接住這些責任，誰就能把硬體價值放大成可續約收入。</span>
          </p>
        </div>
      </div>

      {/* What hyperscalers still prefer to buy instead of build */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <Zap className="w-5 h-5 text-violet-600" /> 即使 CSP / Hyperscaler 很強，也不想自己扛的 3 個軟體層
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          這一頁最重要的作用，是回答管理層那句常見質疑：<span className="font-semibold text-slate-900">「大客戶自己就有平台團隊了，為什麼還需要 Foxconn？」</span>
          真正答案不是「他們不會做」，而是<span className="font-semibold text-violet-700">有些事情他們會做，但不值得自己從 0 開始做；有些事情則是太靠近現場、太跨部門、太髒太長尾，反而更適合交給同時懂硬體、韌體、交付與 Day-2 營運的供應商。</span>
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {hyperscalerKeepInHouseVsBuy.map((item) => (
            <div key={item.title} className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Why they still buy</p>
              <p className="text-sm font-black text-slate-900 mb-3">{item.title}</p>
              <p className="text-xs text-slate-700 mb-3 leading-relaxed">{item.summary}</p>
              <div className="rounded-xl border border-white/80 bg-white p-3 mb-3">
                <p className="text-xs font-bold text-violet-700 mb-1">Foxconn 可收費的理由</p>
                <p className="text-xs text-slate-700 leading-relaxed">{item.foxconnEdge}</p>
              </div>
              <p className="text-[11px] text-slate-500">Source anchor: {item.source}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-violet-100 bg-white p-4">
          <p className="text-sm font-semibold text-violet-900">董事會該記住的一句話：<span className="text-slate-700">Hyperscaler 不是不會寫軟體，而是不想把最難規模化、最靠近設施現場、最容易出事又最難續命的那一層，全部自己做完。那一層正是 Foxconn 軟體部門最能創造 attach rate 與年約收入的地方。</span></p>
        </div>
      </div>

      {/* Buyer scorecard shift */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-600" /> 採購評分表其實已經開始偏向軟體了
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          老闆最容易低估的一點是：市場不是只有「大家都有平台」而已，連官方產品語言都已經在偷偷改評分標準。
          當競爭對手開始用部署速度、生命週期、治理、成本與設施整合來賣方案時，代表客戶採購看的不再只是規格表，而是誰能把 AI 叢集變成可持續營運的資產。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {buyerScorecardSignals.map((item) => (
            <div key={item.criterion} className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Buyer Scorecard Shift</p>
              <p className="text-sm font-black text-slate-900 mb-3">{item.criterion}</p>
              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p><span className="font-bold text-slate-500">市場訊號：</span>{item.marketSignal}</p>
                <p><span className="font-bold text-amber-700">為什麼這會改變採購：</span>{item.whyItChangesProcurement}</p>
                <p><span className="font-bold text-emerald-700">Foxconn 應該怎麼卡位：</span>{item.foxconnMove}</p>
              </div>
              <p className="text-[11px] text-slate-500 mt-4">Source anchor: {item.source}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-amber-100 bg-white p-4">
          <p className="text-sm font-semibold text-amber-900">給管理層的翻譯版：<span className="text-slate-700">如果採購評分表已經開始看 deployment speed、Day-2 lifecycle、governance 與 mixed-vendor fit，那軟體部門就不是成本附屬，而是最直接影響勝率、attach rate 與後續續約的主戰場。</span></p>
        </div>
      </div>

      {/* Procurement Logic - Why software budget gets approved */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <Lock className="w-5 h-5 text-emerald-600" /> 為什麼軟體預算比較容易被核准
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          老闆最後看的不是 feature list，而是：<span className="font-semibold text-slate-900">這筆錢是不是在解決某個部門現在就很痛的營運問題</span>。
          當軟體能力能對應到明確的預算 owner、採購觸發事件與續約理由，它就不再像附贈支援，而是可獨立成立的營運能力。
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {competitiveLandscape.uniqueServices.slice(0, 4).map((service) => (
            <div key={service.name} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Budgetable Service</p>
              <p className="text-sm font-black text-slate-900 mb-3">{service.name}</p>
              <div className="space-y-2 text-xs text-slate-700">
                <p><span className="font-bold text-slate-500">誰會買：</span>{service.budgetOwner}</p>
                <p><span className="font-bold text-slate-500">什麼時候會買：</span>{service.painSolved}</p>
                <p><span className="font-bold text-blue-600">為何會續約：</span>{service.renewalDriver}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-sm font-semibold text-emerald-900">
            這段論述對管理層最關鍵的意義是：軟體部門不是要跟硬體搶預算，而是把原本一次性交機的收入，延伸成 Infrastructure、SRE、Operations、Compliance 都願意持續編列的年度支出。
          </p>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div>
        <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" /> 關鍵價值指標
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <metric.icon className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">{metric.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900">{metric.after}</span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{metric.improvement}</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">原：{metric.before}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Projection */}
      {revenueProjection && (
        <div className="bg-slate-900 rounded-3xl p-8 text-white">
          <h3 className="text-lg font-black mb-6 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-400" /> 軟體服務營收預測（保守估計）
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {revenueProjectionEntries.map(([year, data]) => (
              <div key={year} className="bg-white/10 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-slate-400">
                  {revenueProjectionLabels[year] || year}
                </p>
                <div className="mb-4">
                  <p className="text-3xl font-black text-green-400">{data.total}</p>
                  <p className="text-xs text-slate-400 mt-1">軟體：{data.software} | 服務：{data.services}</p>
                </div>
                <p className="text-xs text-slate-400">佔整體營收：{data.percentOfTotal}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4">
            假設條件：{revenueProjection.assumption}
          </p>
        </div>
      )}

      {/* Leadership Decision Matrix Summary */}
      {softwareDifferentiation.leadershipDecisionMatrix && (
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
          <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
            <ShieldIcon className="w-5 h-5 text-blue-600" /> 關鍵決策：投資軟體與否的戰略選擇
          </h3>
          
          <div className="space-y-4 mb-6">
            {softwareDifferentiation.leadershipDecisionMatrix.decisionCriteria.slice(0, 4).map((criteria, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-4 last:border-0">
                <p className="text-sm font-black text-slate-900 mb-3">{criteria.criterion}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <p className="text-xs font-bold text-red-700 mb-1">不投資軟體</p>
                    <p className="text-sm text-slate-700">{criteria.option1.outcome}</p>
                    {criteria.option1.risk && (
                      <p className="text-xs text-red-600 mt-2 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> {criteria.option1.risk}
                      </p>
                    )}
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <p className="text-xs font-bold text-green-700 mb-1">投資軟體</p>
                    <p className="text-sm text-slate-700">{criteria.option2.outcome}</p>
                    {criteria.option2.upside && (
                      <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> {criteria.option2.upside}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recommendation */}
          <div className="bg-blue-600 rounded-2xl p-6 text-white">
            <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-80">建議方案</p>
            <p className="text-lg font-black mb-3">{softwareDifferentiation.leadershipDecisionMatrix.recommendation.choice}</p>
            <p className="text-sm opacity-90 mb-3">{softwareDifferentiation.leadershipDecisionMatrix.recommendation.rationale}</p>
            <div className="flex items-center gap-2 text-xs opacity-80">
              <ArrowRight className="w-3 h-3" />
              {softwareDifferentiation.leadershipDecisionMatrix.recommendation.timeline}
            </div>
          </div>
        </div>
      )}

      {/* Customer Success Scenarios */}
      <div>
        <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600" /> 客戶成功場景
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {customerSuccessScenarios.map((scenario, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <p className="text-sm font-black text-slate-900 mb-3">{scenario.scenario}</p>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-bold text-slate-400">挑戰：</span>
                  <span className="text-slate-700">{scenario.challenge}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-400">方案：</span>
                  <span className="text-slate-700">{scenario.solution}</span>
                </div>
                <div>
                  <span className="font-bold text-green-600">成果：</span>
                  <span className="text-slate-700">{scenario.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummaryView;
