// Executive Summary View - Leadership Decision Dashboard
// Surfaces key metrics, decisions, and value propositions for C-level executives
import React from 'react';
import { TrendingUp, DollarSign, Target, AlertTriangle, CheckCircle, ArrowRight, Lock, Layers, BarChart3, Zap, Shield as ShieldIcon, Award, Clock, ExternalLink } from 'lucide-react';
import { customerSuccessScenarios, executiveSummary } from './customer-success-stories';
import { softwareDifferentiation } from './software-differentiation';
import { competitiveLandscape } from './competitive-landscape.js';
import { competitiveSources } from './competitive-sources.js';
import { aiSupplyChainSecurity, modelPerformanceMonitoring } from './executive-brief.js';

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
  const dellCyberResilienceSource = competitiveSources.dell?.find((source) => source.name.includes('Cyber Resilience'));
  const openshiftAISource = competitiveSources.enterprisePlatforms?.find((source) => source.name === 'Red Hat OpenShift AI');
  const supermicroComposerSource = competitiveSources.supermicro?.find((source) => source.name.includes('SuperCloud Composer'));
  const schneiderAISource = competitiveSources.schneider?.find((source) => source.name.includes('AI Data Center Solutions'));
  const vertivAISource = competitiveSources.vertiv?.find((source) => source.name.includes('Vertiv AI Hub'));
  const lenovoHybridAISource = competitiveSources.enterprisePlatforms?.find((source) => source.name.includes('Lenovo Hybrid AI Solutions'));
  const nutanixAgenticAISource = competitiveSources.enterprisePlatforms?.find((source) => source.name.includes('Nutanix Agentic AI'));
  const netappAISource = competitiveSources.enterprisePlatforms?.find((source) => source.name.includes('NetApp AI infrastructure and data management'));
  const quantaSource = competitiveSources.quanta?.[0];
  const wistronSource = competitiveSources.wistron?.[0];
  const gigabyteSource = competitiveSources.gigabyte?.[0];
  const odmPeerPressure = [
    {
      company: 'Quanta / QCT',
      signal: quantaSource?.strategicRisk || 'Quanta 已開始透過軟體合作補強 Remote Ops 能力，代表 OEM/ODM 競爭已經從純硬體比較轉向軟體敘事。',
      implication: '這不是遙遠威脅，而是直接同業已經開始補軟體短板。Foxconn 若不提早把軟體部門做成可見的產品與服務，就容易被市場歸類成同樣的硬體供應商。',
      whyFoxconnMustAct: '現在最該做的不是再講一次規格，而是把 Day-2 operations、brownfield integration、remote accountability 先卡成 Foxconn 的標籤。',
      source: quantaSource?.name || 'Quanta Cloud Technology AI Server Solutions',
      sourceUrl: quantaSource?.url,
    },
    {
      company: 'Wistron',
      signal: wistronSource?.limitation || 'Wistron 目前仍以硬體為主、尚未形成完整軟體棧，這反而證明 OEM/ODM 市場還沒出現明確的軟體領先者。',
      implication: '窗口還在，但不會一直開著。誰先把 software department 從附屬支援做成 board-level value story，誰就比較有機會先占住市場認知。',
      whyFoxconnMustAct: 'Foxconn 有機會先把「Factory-to-Operations + Lifecycle + Remote Ops」講成 OEM/ODM 中最完整、最可續約的軟體定位。',
      source: wistronSource?.name || 'Wistron AI Infrastructure',
      sourceUrl: wistronSource?.url,
    },
    {
      company: 'GIGABYTE',
      signal: gigabyteSource?.limitation || 'GIGABYTE 已有管理平台，但仍偏傳統 BMC/伺服器管理，對主權 AI、mixed-vendor、brownfield Day-2 運營的著力有限。',
      implication: '這說明「有管理介面」已經不夠了。真正能讓管理層願意投資軟體部門的，是把治理、責任與續約收入講清楚。',
      whyFoxconnMustAct: 'Foxconn 不該追 another console，而該往更高價值的位置：營運責任轉移、生命周期治理與 mixed-facility integration。',
      source: gigabyteSource?.name || 'GIGABYTE Server Management',
      sourceUrl: gigabyteSource?.url,
    },
  ];
  const buyerScorecardSignals = [
    {
      criterion: 'Deployment speed now appears in the buying language',
      marketSignal: 'HPE explicitly sells deploy-in-days, validated stack, and built-in observability instead of just server specifications.',
      whyItChangesProcurement: 'Once the market talks in time-to-value language, software stops looking optional and starts affecting RFQ scoring.',
      foxconnMove: 'Package factory pre-load, site acceptance, and standardized runbooks as Deployment Assurance rather than “integration support.”',
      source: hpePrivateCloudAISource?.name || 'HPE Private Cloud AI',
      sourceUrl: hpePrivateCloudAISource?.url,
    },
    {
      criterion: 'Lifecycle and recovery are becoming first-class requirements',
      marketSignal: 'NVIDIA Mission Control positions cluster life cycle, autonomous recovery, and building-management integration as product value.',
      whyItChangesProcurement: 'This shifts buyer attention from “can it be installed?” to “who owns Day-2 risk when the cluster is live?”.',
      foxconnMove: 'Sell Lifecycle Control Tower and Facility-Aware Capacity Assurance as accountable operating outcomes.',
      source: missionControlSource?.name || 'NVIDIA Mission Control',
      sourceUrl: missionControlSource?.url,
    },
    {
      criterion: 'Governance and cost visibility are now platform requirements',
      marketSignal: 'Red Hat OpenShift AI emphasizes monitoring, cost control, self-service access, and hybrid operations.',
      whyItChangesProcurement: 'Once multiple teams share an AI cluster, quota, showback, and policy enforcement become budget-owner issues—not engineering nice-to-haves.',
      foxconnMove: 'Push tenant governance, GPU showback, and quota policy as the layer that makes shared AI infrastructure financially governable.',
      source: openshiftAISource?.name || 'Red Hat OpenShift AI',
      sourceUrl: openshiftAISource?.url,
    },
    {
      criterion: 'Neutral integration becomes a board-level differentiator',
      marketSignal: 'Dell, HPE, and NVIDIA all package outcomes around their own infrastructure and ecosystem choices.',
      whyItChangesProcurement: 'That makes mixed-vendor freedom, brownfield fit, and single-accountability integration more valuable for customers protecting existing assets.',
      foxconnMove: 'Position Foxconn software as the neutral operations layer across mixed infrastructure, not another closed stack.',
      source: dellAIFactorySource?.name || 'Dell AI Factory / broader OEM ecosystem pattern',
      sourceUrl: dellAIFactorySource?.url,
    },
    {
      criterion: 'Recoverability is entering AI budget language, not just security language',
      marketSignal: 'Dell now places Cyber Resilience for AI directly inside its AI solutions story, emphasizing protection against data loss, corruption, and cyber threats for AI workloads.',
      whyItChangesProcurement: 'This expands the buyer scorecard from deployment and observability into recoverability: who can restore model artifacts, vector data, configurations, and service trust after an incident.',
      foxconnMove: 'Frame Foxconn software as the AI recovery and evidence owner: golden-image rollback, artifact / registry backup, vector-data protection, recovery runbooks, and auditable incident evidence across AI server fleets.',
      source: dellCyberResilienceSource?.name || 'Dell AI Solutions – Cyber Resilience for AI',
      sourceUrl: dellCyberResilienceSource?.url,
    },
    {
      criterion: 'Facility telemetry is becoming table stakes—governance is the real differentiator',
      marketSignal: 'Even Supermicro now promotes management software that surfaces real-time CDU / cooling-tower telemetry, physical asset data, and liquid-cooling sensor health.',
      whyItChangesProcurement: 'This shows customers increasingly expect AI server vendors to extend into operations software. Once visibility becomes standard, the higher-value budget shifts to who can turn that telemetry into actionable capacity policy, SLA workflows, and brownfield operating discipline.',
      foxconnMove: 'Use facility telemetry as the entry point, then sell Facility-Aware Capacity Assurance and lifecycle governance as the premium layer competitors still do not clearly own.',
      source: supermicroComposerSource?.name || 'Supermicro SuperCloud Composer',
      sourceUrl: supermicroComposerSource?.url,
    },
    {
      criterion: 'Even hardware-led vendors now sell outcomes, services, and trust—not bare boxes',
      marketSignal: 'Lenovo frames hybrid AI around validated solutions, services, productivity, agility, and trusted / compliant operations rather than only server specifications.',
      whyItChangesProcurement: 'When another major hardware vendor sells AI around deployment confidence and operating trust, it confirms that software-and-services language is now mainstream in boardroom buying criteria.',
      foxconnMove: 'Frame Foxconn software as the accountable layer that converts factory delivery into ongoing operating outcomes: deployment assurance, lifecycle governance, and sovereign-ready operations.',
      source: lenovoHybridAISource?.name || 'Lenovo Hybrid AI Solutions',
      sourceUrl: lenovoHybridAISource?.url,
    },
    {
      criterion: 'Even facilities vendors now package AI infrastructure as physical + digital operations',
      marketSignal: 'Schneider Electric officially frames AI datacenter solutions as end-to-end physical and digital AI infrastructure, combining resilient electrical infrastructure, advanced liquid cooling, and optimized operations.',
      whyItChangesProcurement: 'This is a strong signal that software-and-operations value is not just an AI server vendor story. When the facilities layer itself is sold with digital-operations language, customers become more willing to budget for cross-layer orchestration instead of treating servers as isolated hardware purchases. NVIDIA now even frames power-constrained optimization in business terms—run at 85% power with 93% performance throughput—so the buying conversation shifts from "more monitoring" to "how much CAPEX and outage risk can we defer?"',
      foxconnMove: 'Position Foxconn software as the control layer that connects AI server fleets with facility constraints: power cap, cooling events, rollout discipline, and brownfield operating workflows. Sell it as capacity deferral and outage-risk control, not just facility telemetry.',
      source: schneiderAISource?.name || 'Schneider Electric AI Data Center Solutions',
      sourceUrl: schneiderAISource?.url,
    },
    {
      criterion: 'AI buyers are now funding an operating model, not just a platform install',
      marketSignal: 'Nutanix positions Agentic AI as a full-stack software solution for AI factories that simplifies operations, governs AI environments, and optimizes GPU utilization and token costs, while NetApp frames AI around unified governance, secure inferencing, and recoverable data.',
      whyItChangesProcurement: 'This is a strong market signal that the budget is moving upward from bare infrastructure toward ongoing operating discipline: utilization, token economics, governance, and recoverability. Once that language enters the boardroom, software shifts from optional tooling to an owner of operating outcomes.',
      foxconnMove: 'Frame Foxconn software as the physical-world operating model for AI factories: factory-to-operations handoff, tenant governance, lifecycle control, remote ops, and recovery evidence tied directly to the server fleet.',
      source: nutanixAgenticAISource?.name || netappAISource?.name || 'Nutanix Agentic AI / NetApp AI infrastructure and data management',
      sourceUrl: nutanixAgenticAISource?.url || netappAISource?.url,
    },
  ];
  const marketWhitespace = [
    {
      title: 'Day-2 Lifecycle Governance 仍然是痛點',
      marketSignal: 'HPE 已把「pre-configured、validated、full-stack visibility、built-in observability」當成主賣點，代表企業客戶真正怕的是上線後的持續營運，而不是第一次安裝。',
      whitespace: '多數 OEM/ODM 還停留在交機與基本管理，沒有把版本矩陣、maintenance window、rollback 與稽核輸出做成可續約服務。',
      foxconnPlay: '把 Lifecycle Control Tower 做成標準 attach：從硬體驗證延伸到季度升級治理與年度顧問收入。',
      source: hpePrivateCloudAISource?.name || 'HPE Private Cloud AI',
      sourceUrl: hpePrivateCloudAISource?.url,
    },
    {
      title: 'Air-gapped / Sovereign AI 的 Day-2 內容生命週期沒人想接',
      marketSignal: 'Red Hat 甚至為 disconnected environments 提供獨立文件，說明這不是 niche case，而是正式的企業運營場景。',
      whitespace: '真正麻煩的是離線 registry、chart mirror、內容簽章、更新包驗證、升級 runbook 與稽核證據，這些通常不會被伺服器廠完整承接。',
      foxconnPlay: '把 Air-Gap Content Lifecycle 做成高毛利服務，鎖定國防、金融、主權雲等不能只買硬體的客戶。',
      source: disconnectedSource?.name || 'Red Hat OpenShift AI (Disconnected Environments)',
      sourceUrl: disconnectedSource?.url,
    },
    {
      title: 'Facility-aware brownfield integration 仍缺真正 owner',
      marketSignal: 'NVIDIA Mission Control 已把 building management integration、power / cooling control、autonomous recovery 放進產品敘事，證明 AI 機房的價值正在往 IT + facilities 協同移動。Vertiv 甚至已把 retrofit-ready AI designs 與 rack-density / deployment-size 設計公開化，代表現場 readiness 已經進入正式採購語言。',
      whitespace: '客戶最常卡住的不是 GPU 規格，而是新叢集能不能不打掉重練就接回既有 DCIM、告警、權限與維護窗口，並確認現場 rack power、cooling headroom 與 rollout 節奏撐得住。這一層通常又髒又長尾，所以最容易被忽略。',
      foxconnPlay: '用 Brownfield Integration Hub + Capacity Assurance 承接現場導入，讓軟體部門變成把 facility readiness 轉成可執行叢集 rollout 的關鍵人。',
      source: vertivAISource?.name || missionControlSource?.name || 'Vertiv AI Hub / NVIDIA Mission Control',
      sourceUrl: vertivAISource?.url || missionControlSource?.url,
    },
    {
      title: 'AI recoverability 與 incident evidence 幾乎還沒被 OEM/ODM 產品化',
      marketSignal: 'Dell 已把 Cyber Resilience for AI 直接放進 AI solutions 官方敘事，強調要保護 AI workloads against data loss, corruption, and cyber threats。',
      whitespace: '市場已開始把 recoverability 視為 AI 預算語言，但多數伺服器供應商仍停留在告警、備份或通用資安層，沒有真正承接模型 artifact、vector data、golden image、registry 與 incident evidence 的恢復責任。',
      foxconnPlay: '把 AI Recovery & Evidence Assurance 包成 attach service：賣的是 golden-image rollback、artifact / registry backup、vector-data protection、recovery runbook 與可稽核 incident evidence，而不只是 another backup feature。',
      source: dellCyberResilienceSource?.name || 'Dell AI Solutions – Cyber Resilience for AI',
      sourceUrl: dellCyberResilienceSource?.url,
    },
  ];
  const hyperscalerKeepInHouseVsBuy = [
    {
      title: 'Change Safety / Lifecycle Control',
      summary: '大型 CSP 當然能自己寫平台，但最不想自己背的是跨 BMC、BIOS、GPU 韌體、CUDA、K8s 的升級風險與 maintenance window 治理。',
      foxconnEdge: 'Foxconn 能把版本矩陣、canary、rollback、稽核報表做成可交付服務，讓客戶少養一支專門處理變更事故的團隊。',
      source: 'NVIDIA Mission Control / Lifecycle orchestration positioning',
      sourceUrl: missionControlSource?.url,
    },
    {
      title: 'Brownfield Integration',
      summary: 'Hyperscaler 的內部軟體通常偏向標準化，最耗時的反而是把新 AI 叢集接回既有機房、DCIM、權限與告警流程。',
      foxconnEdge: 'Foxconn 站在硬體、韌體、系統整合與現場交付交界，最有資格承接這種「髒但值錢」的導入工作。',
      source: 'DMTF Redfish / OpenBMC foundations + existing-facility integration thesis',
      sourceUrl: standardsSources[0]?.url,
    },
    {
      title: 'Facility-Aware Capacity Assurance',
      summary: '真正讓 AI 專案爆掉的常不是模型，而是 rack power cap、cooling event、thermal / leakage alarm 這些跨 IT 與機電的協調問題。',
      foxconnEdge: 'Foxconn 可把 BMC 遙測、排程策略與既有 BMS/DCIM 流程串起來，賣的是「避免設施事件變成叢集 outage」的結果。',
      source: 'NVIDIA Mission Control building management / power-cooling integration',
      sourceUrl: missionControlSource?.url,
    },
  ];
  const executiveOwnershipChain = [
    {
      stage: 'Factory handoff risk',
      failureMode: '硬體到貨不等於 AI 服務可營運；最常延誤的是工廠預載、site acceptance、權限移交與 Day-2 baseline 沒有接成同一條責任鏈。',
      softwareOwnerPlay: '由軟體部門把 factory pre-load、burn-in 證據、驗收 runbook、baseline 建立與 observability 打包成 Handoff Assurance。',
      budgetLogic: '把交機速度直接翻成 time-to-revenue，讓 PMO / Infrastructure Delivery 願意編列 attach 預算。',
      source: hpePrivateCloudAISource?.name || 'HPE Private Cloud AI',
      sourceUrl: hpePrivateCloudAISource?.url,
    },
    {
      stage: 'Change-window risk',
      failureMode: '真正拖垮 ROI 的常是之後每一次 driver、firmware、CUDA、K8s 升級；這些跨層變更一失手就會變成 SLA 事故。',
      softwareOwnerPlay: '由軟體部門把版本矩陣、canary、rollback、maintenance window 與審計證據產品化成 Lifecycle Control Tower。',
      budgetLogic: '讓 Platform Engineering / SRE 買到的是變更安全與停機風險轉移，而不是另一個工具畫面。',
      source: missionControlSource?.name || 'NVIDIA Mission Control',
      sourceUrl: missionControlSource?.url,
    },
    {
      stage: 'Facility-event risk',
      failureMode: 'AI 機房真正先撞到的往往是 power cap、cooling event、thermal / leakage alarm 與既有 BMS / DCIM workflow，而不是 GPU 數量本身。',
      softwareOwnerPlay: '由軟體部門把 BMC、scheduler、DCIM / BMS、power-cooling policy 與事件回應流程接成 Facility-Aware Capacity Assurance。',
      budgetLogic: '讓 Facilities / Capacity Planning 願意為「少 outage、少擴建衝動、更多可預測容量」這種結果買單。',
      source: schneiderAISource?.name || supermicroComposerSource?.name || 'Schneider Electric AI Data Center Solutions / Supermicro SuperCloud Composer',
      sourceUrl: schneiderAISource?.url || supermicroComposerSource?.url,
    },
  ];
  const foxconnCredibilityReasons = [
    {
      title: 'Factory-to-Operations is a real buying gap, not a slogan',
      externalSignal: 'HPE 已經直接用 deploy AI in days, not months、production deployment in hours、pre-configured validated platform 來賣 turnkey private AI。',
      whyFoxconnIsCredible: 'Foxconn 天然同時握有工廠預載、burn-in、site acceptance、韌體基線與 Day-2 handoff 這條責任鏈。比起單純做平台的供應商，我們更有資格把「交機到營運」這段灰色地帶做成可收費服務。',
      boardImplication: '這讓軟體部門不只是做 dashboard，而是把交機速度直接翻成 time-to-revenue 與 deployment assurance。',
      source: hpePrivateCloudAISource?.name || 'HPE Private Cloud AI',
      sourceUrl: hpePrivateCloudAISource?.url,
    },
    {
      title: 'Facility events are moving into the AI software buying language',
      externalSignal: 'NVIDIA Mission Control 已把 building management integration、power / cooling control、autonomous recovery 寫進 AI factory operations；Supermicro 也開始公開賣 liquid-cooling telemetry。',
      whyFoxconnIsCredible: 'Foxconn 的價值不只在看到設施訊號，而是能把 BMC、伺服器、排程、機房流程與現場服務接起來，讓 power/cooling event 變成可治理、可回應、可續約的營運層。',
      boardImplication: '這把軟體部門的位置從「監控工具提供者」往上抬成「容量保證與 outage 風險 owner」。',
      source: missionControlSource?.name || 'NVIDIA Mission Control',
      sourceUrl: missionControlSource?.url,
    },
    {
      title: 'Open standards make operations software more valuable, not less',
      externalSignal: 'Redfish 與 OpenBMC 正在把底層設備管理標準化。標準化不是壞消息，反而代表真正能溢價的層次往 workflow、lifecycle、auditability 與 fleet governance 移動。',
      whyFoxconnIsCredible: 'Foxconn 站在 L9-L12 與混合世代設備交界，最容易把標準介面往上接成版本治理、brownfield integration 與 remote ops 閉環，而不是只停在 API 存在本身。',
      boardImplication: '一旦底層能力越標準化，軟體部門越該被定位成把標準變成營運結果的 owner。',
      source: standardsSources[0]?.name || 'DMTF Redfish / OpenBMC',
      sourceUrl: standardsSources[0]?.url,
    },
  ];
  const boardProofChecklist = [
    {
      metric: 'Software attachment rate on shipped AI deals',
      whyItProvesValue: '如果軟體部門真的在放大硬體價值，就不該只存在於 demo，而要開始出現在實際報價、交付與續約結構裡。',
      target: 'Q1 pilot 先達到 1-2 個標竿案；Q2 追到 5% attach rate 作為最早期市場接受度訊號。',
      boardQuestion: '有多少硬體訂單，已經不再只是 BOM，而是帶著 deployment / lifecycle / remote-ops 服務一起成交？'
    },
    {
      metric: 'Factory-to-Operations handoff time',
      whyItProvesValue: '這直接驗證軟體部門有沒有把工廠交機、site acceptance、baseline 與 Day-2 handoff 接成一條責任鏈。',
      target: '把「交機到可營運 baseline」從數週壓到數天，並讓流程可重複、可驗收。',
      boardQuestion: '交機後多久，客戶能進入可監控、可升級、可接手營運的狀態？'
    },
    {
      metric: 'Remote resolution coverage',
      whyItProvesValue: '若 7x24 運營仍主要靠現場人海，就代表軟體部門還沒真正把硬體轉成可規模化服務。',
      target: '先把高頻事件中的遠端診斷/處理覆蓋做出可見提升，逐步逼近 70% remote-fix 論述。',
      boardQuestion: '有多少故障與變更，不需要派人到現場就能被接住？'
    },
    {
      metric: 'Capacity deferral in power / cooling-constrained sites',
      whyItProvesValue: '這是最能讓董事會感受到「軟體不是成本，而是在延後 CAPEX」的指標：如果軟體真有價值，就應該能讓客戶先把既有機房容量吃得更滿，而不是一遇到 AI 負載就立刻喊擴建。',
      target: '在 pilot 場域建立 power / cooling 事件治理、排程重平衡與容量保證基線，先證明可延後部分擴建或避免非必要降載。',
      boardQuestion: '軟體部門有沒有把 power cap、cooling event 與 brownfield workflow 轉成「少擴建、少 outage、更多可預測容量」的具體成果？'
    },
    {
      metric: 'Lifecycle governance adoption',
      whyItProvesValue: '真正高毛利、最容易續約的不是 Day-0 安裝，而是之後每一次升級、回滾、維護窗口與稽核證據。',
      target: '至少讓 pilot 客戶開始用版本矩陣、maintenance window、rollback 與 upgrade reporting。',
      boardQuestion: '客戶是否已經把最怕出事的升級與變更窗口，交給 Foxconn 軟體部門來管？'
    },
  ];
  const boardMandateGuardrails = softwareDifferentiation.serviceOfferings?.mandateGuardrails?.items || [];
  const softwareDepartmentMandateCards = softwareDifferentiation.softwareDepartmentMandateSummary?.cards || [];

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

      {/* Segment-specific motions - why the software team matters differently by customer type */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <Layers className="w-5 h-5 text-fuchsia-600" /> 同一套硬體，面對不同客群其實在賣不同的軟體價值
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          這段很重要，因為它直接回答老闆最常混在一起看的問題：<span className="font-semibold text-slate-900">大型 CSP / Hyperscaler 跟一般企業 / 主權 AI 客戶，真的會為同一種軟體價值買單嗎？</span>
          答案其實不是喔～ 前者買的是 <span className="font-semibold text-fuchsia-700">營運責任轉移</span>，後者買的是 <span className="font-semibold text-blue-700">可交付、可治理、可合規的私有 AI 結果</span>。
          把這兩條戰線講清楚，軟體部門的存在就不再像抽象平台團隊，而是把同一台伺服器翻成兩種完全不同、而且都能收費的服務語言。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {(softwareDifferentiation.segmentSpecificServiceMotions?.motions || []).map((motion) => (
            <div key={motion.segment} className="rounded-2xl border border-fuchsia-100 bg-fuchsia-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-fuchsia-600 mb-2">Segment-specific software wedge</p>
              <p className="text-sm font-black text-slate-900 mb-3">{motion.segment}</p>
              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p><span className="font-bold text-slate-500">為什麼會買：</span>{motion.buyingTrigger}</p>
                <p><span className="font-bold text-fuchsia-700">他們真正買的是：</span>{motion.whatTheyActuallyBuy}</p>
                <p><span className="font-bold text-blue-700">Foxconn 應該用什麼切入：</span>{motion.softwareWedge}</p>
                <p><span className="font-bold text-emerald-700">為什麼 Foxconn 有機會贏：</span>{motion.whyFoxconnWins}</p>
                <p><span className="font-bold text-amber-700">市場佐證：</span>{motion.proof}</p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-[11px] text-slate-500">Source anchor: {motion.sourceLabel}</p>
                {motion.source && (
                  <a
                    href={motion.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    官方來源
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-fuchsia-100 bg-white p-4">
          <p className="text-sm font-semibold text-fuchsia-900">給管理層的一句話：<span className="text-slate-700">面對 CSP，Foxconn 軟體部門賣的是 remote ops、lifecycle 與 brownfield accountability；面對企業，賣的是 deployment assurance、governance 與 sovereign-ready private AI。能把同一台硬體翻成這兩種買單語言的，正是軟體部門。</span></p>
        </div>
      </div>

      {/* Why this must be a software department, not a hardware afterthought */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <Lock className="w-5 h-5 text-fuchsia-600" /> 為什麼這一定要是「軟體部門」，不能只是硬體附屬功能
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          這一段很關鍵，因為它直接回答董事會最常出現的誤解：<span className="font-semibold text-slate-900">「軟體很好，但是不是就放在硬體團隊裡順便做就好？」</span>
          其實不行呀。因為一旦軟體仍被當成附屬功能，Foxconn 最容易失去的不是幾個 feature，而是 <span className="font-semibold text-fuchsia-700">attach rate、年約邏輯，以及進入 SRE / Platform / Compliance / FinOps 預算對話的資格</span>。
          真正值得投資的，是一個能把 deployment、lifecycle、governance 與續約責任產品化的軟體部門 mandate。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {softwareDepartmentMandateCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-fuchsia-100 bg-fuchsia-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-fuchsia-600 mb-2">Software department mandate</p>
              <p className="text-sm font-black text-slate-900 mb-3">{card.title}</p>
              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p><span className="font-bold text-slate-500">差別在哪：</span>{card.detail}</p>
                <p><span className="font-bold text-emerald-700">董事會該在意：</span>{card.boardWhyItMatters}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-fuchsia-100 bg-white p-4">
          <p className="text-sm font-semibold text-fuchsia-900">給管理層的一句話：<span className="text-slate-700">硬體部門把設備交出去；軟體部門把交機後的 deployment、upgrade、governance 與 renewal 責任收斂成可持續經營的產品線。若沒有獨立 mandate，最容易被犧牲掉的，正是最有毛利的那一層。</span></p>
        </div>
      </div>

      {/* Next monetizable Day-2 software wedges */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <ShieldIcon className="w-5 h-5 text-emerald-600" /> 下一波最容易被老闆看懂、也最能拉高軟體部門價值的 2 個 Day-2 模組
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          這兩塊很適合拿來強化一個超關鍵論點：<span className="font-semibold text-slate-900">Foxconn 軟體部門不只是把伺服器裝起來，而是持續對 AI 服務的治理、可恢復性與商業結果負責。</span>
          一個模組守住 <span className="font-semibold text-emerald-700">合規 / 供應鏈可信度</span>，另一個模組守住 <span className="font-semibold text-blue-700">模型上線後的表現與營運風險</span>。
          兩者都比單純 dashboard 更接近管理層會核准的預算語言，也更能證明軟體部門正在往高毛利、可續約的方向長出來。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Emerging software wedge 01</p>
            <p className="text-sm font-black text-slate-900 mb-3">{aiSupplyChainSecurity.headline}</p>
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
              <p><span className="font-bold text-slate-500">為什麼現在重要：</span>{aiSupplyChainSecurity.urgency}</p>
              <p><span className="font-bold text-emerald-700">Foxconn 該賣的是：</span>{aiSupplyChainSecurity.foxconnDifferentiation?.foxconnAdvantage}</p>
              <p><span className="font-bold text-blue-700">可收費方式：</span>{aiSupplyChainSecurity.foxconnDifferentiation?.monetization}</p>
              <p><span className="font-bold text-amber-700">市場訊號：</span>{aiSupplyChainSecurity.marketValidation?.adoptionRate}</p>
              <p><span className="font-bold text-fuchsia-700">董事會該記住：</span>{aiSupplyChainSecurity.boardMessage}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Emerging software wedge 02</p>
            <p className="text-sm font-black text-slate-900 mb-3">{modelPerformanceMonitoring.headline}</p>
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
              <p><span className="font-bold text-slate-500">為什麼現在重要：</span>{modelPerformanceMonitoring.urgency}</p>
              <p><span className="font-bold text-blue-700">Foxconn 該賣的是：</span>{modelPerformanceMonitoring.foxconnDifferentiation?.foxconnAdvantage}</p>
              <p><span className="font-bold text-emerald-700">可收費方式：</span>{modelPerformanceMonitoring.foxconnDifferentiation?.monetization}</p>
              <p><span className="font-bold text-amber-700">市場訊號：</span>{modelPerformanceMonitoring.marketValidation?.adoptionRate}</p>
              <p><span className="font-bold text-fuchsia-700">董事會該記住：</span>{modelPerformanceMonitoring.boardMessage}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-sm font-semibold text-emerald-900">給管理層的一句話：<span className="text-slate-700">如果前半場是把 AI 叢集交出去，後半場就是用 supply-chain security 與 model performance monitoring 證明：Foxconn 軟體部門願意對 AI 服務的可信度、持續可用性與商業結果長期背責。</span></p>
        </div>
      </div>

      {/* Software value chain - board-level translation from technical work to commercial outcomes */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-blue-600" /> 董事會最該記住的 4 段價值鏈：軟體工作如何直接變成毛利與續約
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          這段不是再講一次功能，而是把軟體部門每天做的事情翻成老闆真正會看的商業語言：<span className="font-semibold text-slate-900">更快上線、較少推責、較低擴建壓力、更多可續約服務</span>。
          如果管理層要判斷軟體部門是不是值得投資，最實用的方式就是看這 4 段價值鏈有沒有被建立起來。
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Value chain 01</p>
            <p className="text-sm font-black text-slate-900 mb-3">Factory-to-Operations Handoff</p>
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
              <p><span className="font-bold text-slate-500">軟體工作：</span>工廠預載、site acceptance、baseline、observability、Day-2 handoff runbook。</p>
              <p><span className="font-bold text-blue-700">商業結果：</span>把「交機」翻成「可營運」，直接縮短 time-to-revenue。</p>
              <p><span className="font-bold text-emerald-700">毛利 / 收入效果：</span>更容易把安裝支援升級成 Deployment Assurance attach service。</p>
              <p><span className="font-bold text-amber-700">外部錨點：</span>{hpePrivateCloudAISource?.name || 'HPE Private Cloud AI'} 已直接用 deploy AI in days, not months 與 validated platform 來賣結果。</p>
            </div>
          </div>
          <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Value chain 02</p>
            <p className="text-sm font-black text-slate-900 mb-3">Lifecycle Control</p>
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
              <p><span className="font-bold text-slate-500">軟體工作：</span>版本矩陣、canary 升級、自動回滾、maintenance window 與 upgrade reporting。</p>
              <p><span className="font-bold text-violet-700">商業結果：</span>把最容易出事的變更窗口，從高風險專案變成可治理流程。</p>
              <p><span className="font-bold text-emerald-700">毛利 / 收入效果：</span>最容易形成季度顧問、年約治理與續約收入。</p>
              <p><span className="font-bold text-amber-700">外部錨點：</span>{missionControlSource?.name || 'NVIDIA Mission Control'} 已把 cluster life cycle 與 autonomous recovery 放到產品前台。</p>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Value chain 03</p>
            <p className="text-sm font-black text-slate-900 mb-3">Tenant Governance / Showback</p>
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
              <p><span className="font-bold text-slate-500">軟體工作：</span>quota、priority、approval workflow、showback / chargeback、SLA policy。</p>
              <p><span className="font-bold text-emerald-700">商業結果：</span>把共享 GPU 叢集從「大家搶資源」變成「可管理、可對帳、可內部定價」的服務。</p>
              <p><span className="font-bold text-blue-700">毛利 / 收入效果：</span>讓平台治理費、共享容量服務費與跨部門預算更容易成立。</p>
              <p><span className="font-bold text-amber-700">外部錨點：</span>{openshiftAISource?.name || 'Red Hat OpenShift AI'} 已把 monitoring、cost control、self-service access 放進核心敘事。</p>
            </div>
          </div>
          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-2">Value chain 04</p>
            <p className="text-sm font-black text-slate-900 mb-3">Facility-Aware Capacity Assurance</p>
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
              <p><span className="font-bold text-slate-500">軟體工作：</span>把 BMC、scheduler、DCIM / BMS、power cap 與 cooling event workflow 接成容量治理。</p>
              <p><span className="font-bold text-orange-700">商業結果：</span>減少因設施限制造成的 outage、降載與過早擴建壓力，甚至把部分擴建需求往後延。</p>
              <p><span className="font-bold text-emerald-700">毛利 / 收入效果：</span>把監控升級成高價值的 capacity governance 與年度 SLA 服務，對應更容易被批准的容量治理預算。</p>
              <p><span className="font-bold text-amber-700">外部錨點：</span>{schneiderAISource?.name || supermicroComposerSource?.name || 'Schneider / Supermicro / NVIDIA'} 已證明 AI 機房價值正往 physical + digital operations 移動；NVIDIA 甚至直接把 power-constrained ROI 講成「85% power、93% performance throughput」。</p>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-blue-100 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">一句話總結：<span className="text-slate-700">軟體部門不是在做更多功能，而是在把交機、升級、共享治理與設施事件這些原本會吃掉毛利的風險，轉成 Foxconn 可以被定價、被續約、也能保護硬體價格帶的服務。</span></p>
        </div>
      </div>

      {/* Procurement disqualifiers - why software is not optional in real deals */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-600" /> 沒有軟體部門，哪些案子其實在採購最後一哩就會卡住？
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          這段最適合拿來回答管理層那句很現實的問題：<span className="font-semibold text-slate-900">「硬體規格都過了，為什麼還要投資軟體部門？」</span>
          因為真正讓案子過不了的，常常不是 GPU 規格或單機效能，而是客戶在採購最後會追問的幾個責任問題：多久能上線、升級出事誰負責、共享之後怎麼治理、AI 出事後誰能救回來。
          這四題如果沒有明確的軟體 owner，就很容易讓 Foxconn 退回成「設備供應商」，而不是能拿 attach rate 與年約收入的解決方案夥伴。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {(softwareDifferentiation.procurementDisqualifiers?.items || []).slice(0, 4).map((item) => (
            <div key={item.title} className="rounded-2xl border border-red-100 bg-red-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">Procurement disqualifier</p>
              <p className="text-sm font-black text-slate-900 mb-3">{item.title}</p>
              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p><span className="font-bold text-slate-500">為什麼會卡案：</span>{item.whyItKillsDeals}</p>
                <p><span className="font-bold text-amber-700">市場已經怎麼賣：</span>{item.marketProof}</p>
                <p><span className="font-bold text-emerald-700">Foxconn 該怎麼補：</span>{item.foxconnImplication}</p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-[11px] text-slate-500">Source anchor: {item.sourceLabel}</p>
                {item.source && (
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    官方來源
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-red-100 bg-white p-4">
          <p className="text-sm font-semibold text-red-900">給管理層的一句話：<span className="text-slate-700">很多 AI 基礎設施案子最後輸贏，不是規格表，而是誰能回答「多久能上線、出了事誰負責、共享之後怎麼管、事故後誰救得回來」。這四題的 owner，如果不是軟體部門，就很難把硬體價值完整變現。</span></p>
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

      {/* Why Foxconn's software claim is specifically believable */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyan-600" /> 為什麼這個軟體故事換成 Foxconn 來講，可信度更高
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          市場上很多人都會說自己有平台，但真正能讓老闆點頭的，不只是外部市場趨勢，而是 <span className="font-semibold text-slate-900">Foxconn 有沒有一個別人比較難複製、而且能被定價的站位</span>。
          下面這三張牌把答案講得更清楚：Foxconn 不是單純在跟風講 software，而是剛好站在工廠、硬體、韌體、交付、brownfield 與 Day-2 營運的交界處。這個位置，正是軟體部門最值錢的地方。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {foxconnCredibilityReasons.map((item) => (
            <div key={item.title} className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-cyan-600 mb-2">Why Foxconn wins here</p>
              <p className="text-sm font-black text-slate-900 mb-3">{item.title}</p>
              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p><span className="font-bold text-slate-500">外部訊號：</span>{item.externalSignal}</p>
                <p><span className="font-bold text-cyan-700">Foxconn 為什麼特別站得住：</span>{item.whyFoxconnIsCredible}</p>
                <p><span className="font-bold text-emerald-700">董事會該怎麼記：</span>{item.boardImplication}</p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-[11px] text-slate-500">Source anchor: {item.source}</p>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    官方來源
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-cyan-100 bg-white p-4">
          <p className="text-sm font-semibold text-cyan-900">給管理層的一句話：<span className="text-slate-700">別人也能說自己有平台，但只有站在 factory-to-operations、brownfield 與 facility-aware operations 交界的人，才比較有資格把 AI 交付風險、Day-2 風險與續約服務一起接起來。這就是 Foxconn 軟體部門最該被放大的理由。</span></p>
        </div>
      </div>

      {/* Direct OEM/ODM peer pressure */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-600" /> 這不是抽象趨勢，是 OEM/ODM 同業已經開始往軟體靠
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          如果只講 NVIDIA、HPE、Red Hat，老闆可能會覺得那是大廠玩法，離 OEM/ODM 太遠。其實不是喔～ 直接同業也已經開始補軟體敘事，這代表 Foxconn 面對的不只是市場機會，還有同業重新包裝價值主張的時間壓力。
          真正該做的，不是跟著做一個管理平台，而是更快把 <span className="font-semibold text-slate-900">Day-2 operations、Factory-to-Operations handoff、brownfield integration、remote accountability</span> 做成 Foxconn 軟體部門的招牌。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {odmPeerPressure.map((item) => (
            <div key={item.company} className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-2">OEM / ODM pressure</p>
              <p className="text-sm font-black text-slate-900 mb-3">{item.company}</p>
              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p><span className="font-bold text-slate-500">市場訊號：</span>{item.signal}</p>
                <p><span className="font-bold text-amber-700">這代表什麼：</span>{item.implication}</p>
                <p><span className="font-bold text-emerald-700">Foxconn 現在該怎麼搶位：</span>{item.whyFoxconnMustAct}</p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-[11px] text-slate-500">Source anchor: {item.source}</p>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    官方來源
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-orange-100 bg-white p-4">
          <p className="text-sm font-semibold text-orange-900">給管理層的一句話：<span className="text-slate-700">Foxconn 現在不是在決定「要不要也做一點軟體」，而是在決定要不要搶先把 OEM/ODM 軟體價值的定義權握在自己手上。</span></p>
        </div>
      </div>

      {/* Market whitespace - where software earns its keep */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-rose-600" /> 市場還沒被真正補滿的 4 個高價值空白
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          如果老闆只看「大家都說自己有平台」，很容易誤判軟體差異不大。真實市場不是這樣啦～ 客戶真正會付錢的地方，往往是那些沒人想接、但一出事就非常痛的 Day-2 問題。
          下面這四個空白，正好就是軟體部門能把硬體 attach 成高毛利服務的切入口。
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
              <div className="mt-4 space-y-2">
                <p className="text-[11px] text-slate-500">Source anchor: {item.source}</p>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    官方來源
                  </a>
                )}
              </div>
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
          連 Schneider 這類設施基礎建設供應商都開始用「physical + digital AI infrastructure」去講 AI datacenter，這更說明：真正有價值的不是單點硬體，而是能把伺服器、電力、冷卻與營運流程接起來的軟體層。
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
              <div className="space-y-2">
                <p className="text-[11px] text-slate-500">Source anchor: {item.source}</p>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    官方來源
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-violet-100 bg-white p-4">
          <p className="text-sm font-semibold text-violet-900">董事會該記住的一句話：<span className="text-slate-700">Hyperscaler 不是不會寫軟體，而是不想把最難規模化、最靠近設施現場、最容易出事又最難續命的那一層，全部自己做完。那一層正是 Foxconn 軟體部門最能創造 attach rate 與年約收入的地方。</span></p>
        </div>
      </div>

      {/* Executive ownership chain */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <Layers className="w-5 h-5 text-sky-600" /> 董事會真正該批准的，不是 another platform，而是 3 段可被驗收的責任鏈
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          如果要讓管理層真的看見軟體部門的不可替代性，最有效的方式不是再列更多功能，而是把 AI 專案最常出事的 3 個 handoff 講清楚：<span className="font-semibold text-slate-900">工廠交接、變更窗口、設施事件</span>。
          這三段都有共同特徵：都發生在硬體規格比較之後、都直接影響上線速度與 SLA、而且一旦做成責任鏈，就最容易變成 attach rate 與年約收入。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {executiveOwnershipChain.map((item) => (
            <div key={item.stage} className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-sky-600 mb-2">Executive ownership chain</p>
              <p className="text-sm font-black text-slate-900 mb-3">{item.stage}</p>
              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p><span className="font-bold text-slate-500">會壞在哪：</span>{item.failureMode}</p>
                <p><span className="font-bold text-sky-700">軟體部門該接什麼：</span>{item.softwareOwnerPlay}</p>
                <p><span className="font-bold text-emerald-700">為什麼這能拿到預算：</span>{item.budgetLogic}</p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-[11px] text-slate-500">Source anchor: {item.source}</p>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    官方來源
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-sky-100 bg-white p-4">
          <p className="text-sm font-semibold text-sky-900">給管理層的一句話：<span className="text-slate-700">軟體部門最值錢的地方，不是把設備變得更好看，而是把這 3 段最容易延誤、最容易推責、也最容易讓客戶願意付年費的責任鏈接起來。</span></p>
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
              <div className="mt-4 space-y-2">
                <p className="text-[11px] text-slate-500">Source anchor: {item.source}</p>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    官方來源
                  </a>
                )}
              </div>
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

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {softwareDifferentiation.serviceOfferings.budgetMap.rows.slice(0, 4).map((row) => (
            <div key={row.service} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Budget approval map</p>
              <p className="text-sm font-black text-slate-900 mb-3">{row.service}</p>
              <div className="space-y-2 text-xs text-slate-700">
                <p><span className="font-bold text-slate-500">預算 owner：</span>{row.budgetOwner}</p>
                <p><span className="font-bold text-amber-700">為什麼現在會買：</span>{row.whyNow}</p>
                <p><span className="font-bold text-blue-600">為什麼明年還會續：</span>{row.renewalDriver}</p>
                <p><span className="font-bold text-emerald-700">董事會看到的結果：</span>{row.boardOutcome}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {competitiveLandscape.uniqueServices.slice(0, 4).map((service) => (
            <div key={service.name} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Budgetable Service</p>
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

      {/* Board mandate guardrails */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <Lock className="w-5 h-5 text-rose-600" /> 董事會真正要批准的，不是「什麼都做的 AI 平台 team」
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          這一頁的重點很簡單：<span className="font-semibold text-slate-900">軟體部門若沒有清楚邊界，很容易被做成高成本、低溢價、永遠在追功能完整度的平台支援團隊。</span>
          管理層真正該批准的，是一個對 attach rate、Day-2 risk transfer 與續約收入負責的部門任務，而不是 another control plane。下面這 3 條 guardrails，能幫老闆判斷資源會不會被投到真正能放大硬體價值的地方。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {boardMandateGuardrails.map((item) => (
            <div key={item.title} className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-rose-600 mb-2">Mandate guardrail</p>
              <p className="text-sm font-black text-slate-900 mb-3">{item.title}</p>
              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p><span className="font-bold text-slate-500">如果走偏：</span>{item.risk}</p>
                <p><span className="font-bold text-rose-700">更好的邊界：</span>{item.doInstead}</p>
                <p><span className="font-bold text-emerald-700">董事會該在意：</span>{item.boardWhyItMatters}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-rose-100 bg-white p-4">
          <p className="text-sm font-semibold text-rose-900">給管理層的一句話：<span className="text-slate-700">軟體部門最怕的不是做太少，而是做太散。真正該投資的，是那些能把 deployment、lifecycle、brownfield、air-gap 與 remote accountability 做成可定價責任鏈的能力。</span></p>
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

      {/* Board proof checklist */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-600" /> 董事會怎麼判斷：軟體部門到底是不是在放大硬體價值？
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          這一頁不是再加更多願景，而是把「軟體部門有沒有真的創造價值」翻成前兩季就能追的驗證指標。對管理層來說，最好的論證不是功能清單，而是看 attach、handoff、remote resolution 與 lifecycle governance 有沒有開始進入真實交付與客戶流程。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {boardProofChecklist.map((item) => (
            <div key={item.metric} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Board proof point</p>
              <p className="text-sm font-black text-slate-900 mb-3">{item.metric}</p>
              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p><span className="font-bold text-slate-500">為什麼這能證明價值：</span>{item.whyItProvesValue}</p>
                <p><span className="font-bold text-emerald-700">前兩季應看到什麼：</span>{item.target}</p>
                <p><span className="font-bold text-blue-700">董事會該追問：</span>{item.boardQuestion}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4">
          <p className="text-sm font-semibold text-emerald-900">給管理層的一句話：<span className="text-slate-700">如果軟體部門真的有價值，它會很早就反映在 attach rate、交機到營運的縮時、遠端處理覆蓋率，以及升級治理被客戶正式採用這四件事上。</span></p>
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
