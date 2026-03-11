import React, { useState } from 'react';
import { 
  Cpu, Terminal, Layers, Activity, ShieldCheck, ChevronRight, Database, 
  Network, Box, Zap, LayoutGrid, Cloud, Settings, Shield, Gauge, Info, 
  X, ExternalLink, BookOpen, Split, Target, Trophy, Calendar, Briefcase,
  TrendingUp, ClipboardCheck, Factory, Truck, Code, Boxes, FileText, Settings2,
  Rocket, Binary, Microscope, MonitorCheck, HardDrive, Thermometer, Radio,
  Lock, Award, Users, Server, Link2, GitMerge, Layout, AlertTriangle, CheckCircle,
  Lightbulb, Globe, Compass, Search, Wand2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('levels');
  const [activeLevel, setActiveLevel] = useState('L1');
  const [selectedSubTask, setSelectedSubTask] = useState(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [selectedArch, setSelectedArch] = useState('hgx');

  // --- Data: Detailed Research Handbooks for Opportunities ---
  const opportunityHandbooks = {
    "Redfish Aggregation": {
      context: "在大型 AI 叢集（如 72 節點機櫃）中，管理軟體逐一對接 BMC 的效率太低。Redfish Aggregation 讓 CMM 成為『唯一管理入口』。",
      mission: "開發一套具備代理（Proxy）功能的 Aggregator 服務，實現機櫃級資源視圖。",
      steps: [
        "建立 Service Root：在 CMM (RMU) 上配置 Redfish Aggregation Service 根路徑。",
        "自動發現機制：透過私有內網 (Management Network) 自動掃描並彙整 72 個節點的 BMC 端點資訊。",
        "資源映射 (Mapping)：將各節點的 Chassis/Systems/Processors 資訊，依節點 ID 映射至 `/redfish/v1/AggregationService/` 下。",
        "事件訂閱中心：實作 SSE (Server-Sent Events) 代理，讓外部管理平台只需向 CMM 訂閱即可獲取全機櫃告警資訊。"
      ],
      value: "這是建立『專屬硬體生態系』的基礎，讓客戶習慣使用您的管理介面，形成軟體鎖定。"
    },
    "機櫃級動態功耗調度": {
      context: "AI 負載波動劇烈，單機 Power Capping 無法應對整櫃 PDU 的過載風險。CMM 需扮演機櫃級的『電力排程師』。",
      mission: "開發閉環控制演算法，動態調節各節點功耗以符合機櫃電力總量目標。",
      steps: [
        "遙測數據採集：實時從 PDU、PSU 與各節點 BMC 讀取 Input Power 指標。",
        "權重演算法實作：根據不同節點的訓練優先級 (Training Job Priority)，定義動態電力分配權重。",
        "控制指令下發：利用 Redfish/IPMI 的 Set Power Limit 功能，秒級調節各節點加速器的功耗上限。",
        "液冷連動優化：將電力數據同步給 CDU 控制器，提前預判熱負載變化，降低機房能耗。"
      ],
      value: "優化能效比 (PUE)，解決液冷時代最棘手的熱與電平衡問題。"
    },
    "ZTP (Zero Touch Provisioning)": {
      context: "數據中心部署最怕手動配置錯誤。ZTP 讓機櫃在插電連網後，軟體自動完成所有對齊工作。",
      mission: "開發機櫃級自動初始化工作流，將部署時間從『天』降至『小時』。",
      steps: [
        "拓樸掃描：CMM 自動偵測機櫃內網路布線是否符合參考架構 (Golden Topology)。",
        "PXE/DHCP 服務激活：自動指派節點管理 IP，並根據 MAC 位址與插槽位置建立對應關係。",
        "韌體全櫃對齊：自動檢查並將全機櫃 BIOS/BMC/DPU 韌體升級至指定的 Golden Version。",
        "自動化驗收測試：執行部署後的單機與跨機壓力測試，生成機櫃級驗收報告。"
      ],
      value: "大幅降低現場運維成本，提升產品規模化交付效率。"
    },
    "GPU 虛擬化與調度優化": {
      context: "為了提升算力利用率，必須將一張強大的 GPU 切分為多個小實例供不同專案使用。",
      mission: "深入研究高效能算力切分技術，與 Kubernetes 資源管理深度整合。",
      steps: [
        "MIG 實體切分：研究 Blackwell/Rubin 等級的硬體分層技術，配置不同的 Instance Profile。",
        "K8s Device Plugin 開發：擴展 K8s 調度器，使其能精確感知分級後的 GPU 算力資源。",
        "多租戶隔離驗證：實作記憶體與故障隔離 (Fault Isolation)，確保單一任務故障不影響其他使用者。",
        "動態重切分研究：研究如何在不重啟系統的情況下，根據 Job 需求動態調整算力分配。"
      ],
      value: "讓硬體具備高靈活性，吸引預算有限但任務多元的中型企業與學術機構。"
    },
    "Pre-configured LLM 運行環境": {
      context: "硬體只是載體，客戶真正要的是『能跑大模型』。軟體部門需將底層驅動與模型框架垂直打通。",
      mission: "打造開箱即用的 AI 容器鏡像與 API 服務棧。",
      steps: [
        "高效能鏡像封裝：整合 vLLM、TensorRT-LLM 與 NCCL 通訊庫，進行特定硬體平台的優化編譯。",
        "模型權重加載優化：實作從 S3 或平行儲存系統快速載入大型權重檔案的技術路徑。",
        "API 網關整合：開發相容於 OpenAI 規格的 REST API，讓客戶現有的 AI 應用能無縫遷移。",
        "推論基準測試自動化：內建各種主流模型 (Llama, Mistral) 的推論效能測試工具。"
      ],
      value: "從賣硬體轉向賣『算力服務經驗』，建立高度軟體黏著度。"
    },
    "MLOps 與遙測資料閉環": {
      context: "AI 訓練任務通常長達數週。如果硬體在第 13 天失效，之前的訓練進度可能白費。我們需要軟硬體連動的保護機制。",
      mission: "建立預測性維護與訓練狀態連動的遙測監測看板。",
      steps: [
        "健康遙測彙整：收集 GPU 核心電位、記憶體糾錯碼 (ECC) 與光模組光衰指標。",
        "失效關聯分析：將硬體異常事件與 K8s 訓練 Job ID 進行標籤關聯。",
        "自動 Checkpoint 觸發：當系統偵測到硬體即將損壞的警訊時，自動通知 PaaS 層進行訓練進度存檔。",
        "自癒策略開發：研究自動將失效節點的工作負載遷移至備用節點的切換流程。"
      ],
      value: "提供業界最強的『高可用 AI 集群』承諾，這是 CSP 客戶最看重的差異化價值。"
    }
  };

  // --- Other Data Structures (L1-L12, Roadmap, etc. same as v5.4) ---
  const businessOpportunities = [
    {
      id: 'cmm',
      title: 'CMM (Chassis Management Module) 研發方向',
      description: '從單機管理演進為「機櫃指揮官」。',
      focusArea: '軟體定義硬體 (SDH)',
      researchItems: [
        { goal: "Redfish Aggregation", desc: "CMM 作為統一入口，管理 72 個節點數據。", icon: <Server className="w-5 h-5 text-blue-500" /> },
        { goal: "機櫃級動態功耗調度", desc: "根據負載分配電力，與 CDU 閉環連動。", icon: <Zap className="w-5 h-5 text-amber-500" /> },
        { goal: "ZTP (Zero Touch Provisioning)", desc: "一鍵掃描拓樸與全櫃韌體自動對齊。", icon: <Radio className="w-5 h-5 text-green-500" /> }
      ],
      icon: <Layout className="w-10 h-10 text-blue-600" />
    },
    {
      id: 'paas',
      title: 'PaaS (Platform as a Service) 研發方向',
      description: '從「賣盒子」轉向「賣 AI 運行環境」。',
      focusArea: '算力價值最大化',
      researchItems: [
        { goal: "GPU 虛擬化與調度優化", desc: "研究 MIG 與 K8s 整合，細粒度算力租賃。", icon: <GitMerge className="w-5 h-5 text-indigo-500" /> },
        { goal: "Pre-configured LLM 運行環境", desc: "整合 vLLM 提供「開箱即推論」體驗。", icon: <Code className="w-5 h-5 text-sky-500" /> },
        { goal: "MLOps 與遙測資料閉環", desc: "預測硬體失效對訓練任務的影響並自癒。", icon: <MonitorCheck className="w-5 h-5 text-purple-500" /> }
      ],
      icon: <Cloud className="w-10 h-10 text-indigo-600" />
    }
  ];

  const roadmapSteps = [
    { phase: '0–6 月', title: '地基建設', goal: '板級 Bring-up、基礎 ATE 建置', milestone: '首板穩定啟動' },
    { phase: '12–18 月', title: '量產與管理', goal: '量產燒錄工具、初版 CMM 原型', milestone: '首櫃管理初步自動化' },
    { phase: '24–36 月', title: '服務化轉型', goal: 'PaaS 成熟、資安治理、效能優化', milestone: '軟體定義基礎設施成型' }
  ];

  const devJourneyPhases = [
    { phase: 'Phase 0', title: '平台規格定義', target: '鎖定 NVL72 規格。', actions: ["獲取 AI Factory 參考架構", "軟體版本支援矩陣"] },
    { phase: 'Phase 1', title: '系統設計開發', target: '規劃主板與管理入口。', actions: ["PCIe 通道映射", "CMM/BMC 聯動邏輯"] },
    { phase: 'Phase 2', title: '樣機 Bring-up', target: '單機啟動與驅動適配。', actions: ["BIOS 配置", "GPU Stack 驗證"] },
    { phase: 'Phase 3', title: '櫃級整合優化', target: '完成 800G 網絡與 CMM。', actions: ["機櫃布線", "CDU 液冷整合"] },
    { phase: 'Phase 4', title: 'AI 平台與方案', target: 'PaaS 級別交付物。', actions: ["K8s GPU Operator", "LLM 基準調優"] },
    { phase: 'Phase 5', title: '量產認證與運維', target: '數據中心級持續服務。', actions: ["MES 資料閉環", "遙測看板建立"] }
  ];

  const lLevels = [
    { id: 'L1', name: '零件與基礎層', group: 'MFG/FW', tasks: ["定義零件識別規格 (PN/SN)", "定義 FRU 與 EEPROM 規格", "建立 ATE 測試腳本"], tech: ["Python", "JTAG"], deliverable: ["零件識別 Schema"] },
    { id: 'L6', name: '主機板整合', group: 'FW/SYS', tasks: ["執行單機 Bring-up (BIOS/BMC)", "硬體抽象層 (HAL) 撰寫", "Firmware Recovery 實作"], tech: ["UEFI", "OpenBMC"], deliverable: ["Working Build"] },
    { id: 'L7', name: '加速器整合層', group: 'SYS/FW', tasks: ["完成 GPU/NIC PCIe Enablement", "PLDM/MCTP 實作：獲取健康數據", "Driver 與韌體相容性矩陣"], tech: ["MCTP", "PCIe Gen6"], deliverable: ["相容性報告"] },
    { id: 'L10', name: '機櫃級整合層', group: 'SOL/SYS', tasks: ["DPU/DOCA 卸載實作", "SNAP 儲存網路加速開發", "機櫃管理單元 (CMM) 整合"], tech: ["DOCA", "InfiniBand"], deliverable: ["CMM 管理鏡像"] },
    { id: 'L12', name: '叢集與平台層', group: 'SOL/SVC', tasks: ["部署 K8s/Slurm 叢集", "MLPerf 基準效能調優", "PaaS 算力排程開發"], tech: ["Kubernetes", "MLPerf"], deliverable: ["PaaS 平台架構書"] }
  ];

  const handleOpportunityClick = (item) => {
    const detail = opportunityHandbooks[item.goal];
    if (detail) {
      setSelectedOpportunity({ name: item.goal, ...detail });
    } else {
      setSelectedOpportunity({ name: item.goal, context: "此商機方向正在深入分析中。", mission: "評估市場需求與技術可行性。", steps: ["市場調研", "關鍵技術點識別", "概念驗證 (PoC)"] });
    }
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'levels':
        const activeLevelData = lLevels.find(l => l.id === activeLevel) || lLevels[0];
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
            <div className="lg:col-span-4 space-y-2 max-h-[650px] overflow-y-auto pr-2 custom-scrollbar">
              {lLevels.map((lvl) => (
                <button key={lvl.id} onClick={() => setActiveLevel(lvl.id)} className={`w-full text-left p-4 rounded-xl border transition-all ${activeLevel === lvl.id ? 'bg-white border-blue-500 shadow-lg ring-1 ring-blue-500' : 'bg-white/60 border-slate-200 hover:bg-white'}`}>
                  <div className="flex justify-between items-center mb-1"><span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-widest">{lvl.id}</span></div>
                  <h4 className="font-bold text-slate-900 text-sm">{lvl.name}</h4>
                </button>
              ))}
            </div>
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
                <div className="flex justify-between items-start mb-8"><div><h2 className="text-3xl font-black text-slate-900">{activeLevelData.name}</h2><p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{activeLevelData.group} 分級工程</p></div><Code className="w-6 h-6 text-slate-400" /></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                   <div className="space-y-6"><h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><ClipboardCheck className="w-4 h-4" /> 工程項目 (點擊詳解)</h3><ul className="space-y-3">
                      {activeLevelData.tasks.map((task, idx) => (
                        <li key={idx} onClick={() => {
                          if (task.includes("PLDM")) setSelectedSubTask({name: task, context: "透過 PLDM 與 MCTP 協定，BMC 才能讀取加速器的即時功耗與溫度。", workflow: ["在 BMC 配置 PCIe-VDM 通道", "實作 MCTP Stack", "映射 Redfish 資源", "觸發保護機制"]});
                          else setSelectedSubTask({name: task, context: "此工程項目涉及該階段核心研發。", workflow: ["分析需求", "準備環境", "執行實作", "產出手冊"]});
                        }} className="flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all cursor-pointer group active:scale-95"><span className="text-sm font-bold text-slate-700 group-hover:text-blue-700 leading-snug">{task}</span><ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" /></li>
                      ))}
                    </ul></div>
                   <div className="space-y-8"><div><h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">關鍵技術</h3><div className="flex flex-wrap gap-2">{activeLevelData.tech.map((tech, idx) => (<span key={idx} className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase">{tech}</span>))}</div></div><div className="p-6 bg-blue-600 rounded-3xl text-white shadow-xl">交付：{activeLevelData.deliverable[0]}</div></div>
                </div>
            </div>
          </div>
        );
      case 'opportunities':
        return (
          <div className="space-y-10 animate-in fade-in duration-500">
             <div className="bg-gradient-to-r from-blue-700 to-indigo-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <Globe className="absolute top-0 right-0 p-12 opacity-10 w-32 h-32" />
                <h2 className="text-3xl font-black mb-4 flex items-center gap-3">商機與未來研究方向</h2>
                <p className="text-blue-100 font-medium max-w-3xl leading-relaxed">我們不只製造伺服器，更在重新定義資料中心的運作方式。以下卡片為軟體部門建立商業壁壘的核心研究方向。</p>
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {businessOpportunities.map((opp) => (
                   <div key={opp.id} className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
                      <div className="flex items-center gap-4 mb-8">
                         <div className="p-4 bg-slate-50 rounded-3xl shadow-inner">{opp.icon}</div>
                         <div>
                            <h3 className="text-2xl font-black text-slate-900">{opp.title}</h3>
                            <p className="text-xs font-black text-blue-600 uppercase tracking-widest">{opp.focusArea}</p>
                         </div>
                      </div>
                      <div className="space-y-4">
                         <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">重點研究課題 (點擊看研發指南)</h4>
                         {opp.researchItems.map((item, idx) => (
                            <button 
                               key={idx} 
                               onClick={() => handleOpportunityClick(item)}
                               className="w-full text-left p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-500 hover:bg-white hover:shadow-lg transition-all flex items-center justify-between active:scale-[0.98]"
                            >
                               <div className="flex items-center gap-4">
                                  <div className="p-2 bg-white rounded-xl shadow-sm">{item.icon}</div>
                                  <div>
                                     <h5 className="font-black text-slate-900 group-hover:text-blue-600 transition-colors">{item.goal}</h5>
                                     <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                                  </div>
                               </div>
                               <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                            </button>
                         ))}
                      </div>
                   </div>
                ))}
             </div>
          </div>
        );
      case 'devJourney':
        return (
          <div className="space-y-10 animate-in fade-in duration-500">
             <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"><Rocket className="absolute top-0 right-0 p-12 opacity-10 w-32 h-32" /><h2 className="text-3xl font-black mb-4 flex items-center gap-3">AI Server 開發實戰 SOP</h2><p className="text-slate-400 font-medium max-w-3xl">將複雜的架構重塑為熟悉的「嵌入式開發模型」，幫助新手快速理解全棧開發流程。</p></div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{devJourneyPhases.map((p, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col group"><div className="flex items-center justify-between mb-4"><span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">{p.phase}</span><Info className="w-4 h-4 text-slate-300" /></div><h3 className="text-xl font-black text-slate-900 mb-2">{p.title}</h3><p className="text-sm text-slate-500 mb-6 italic">"{p.target}"</p><div className="flex-grow space-y-3 mb-6"><h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">核心工程任務</h4>{p.actions.map((act, i) => (<div key={i} className="flex items-start gap-2"><div className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" /><span className="text-xs font-bold text-slate-700 leading-snug">{act}</span></div>))}</div></div>
             ))}</div>
          </div>
        );
      case 'roadmap':
        return (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="relative pl-8 space-y-12 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-1 before:bg-slate-200">{roadmapSteps.map((step, idx) => (
                <div key={idx} className="relative"><div className="absolute -left-[2.35rem] top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white z-10" /><div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all"><span className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-black uppercase tracking-widest">{step.phase}</span><h3 className="text-xl font-black text-slate-900 mt-2">{step.title}</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"><div><p className="text-sm text-slate-700 font-medium">{step.goal}</p></div><div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100/50"><h4 className="text-[10px] font-black text-blue-600 uppercase mb-1">主要里程碑</h4><p className="text-sm text-blue-900 font-bold">{step.milestone}</p></div></div></div></div>
              ))}</div>
          </div>
        );
      case 'nextGenArch':
        const currentArch = architectures.find(a => a.id === selectedArch);
        return (
          <div className="space-y-10 animate-in fade-in duration-500">
            <section className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"><Zap className="absolute top-0 right-0 p-12 opacity-10 w-32 h-32" /><h2 className="text-3xl font-black mb-6 flex items-center gap-3">2026 解耦式架構詳解</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"><div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"><h4 className="font-bold text-sky-400 text-lg flex items-center gap-2"><Database size={20} /> Compute Tray</h4><ul className="mt-4 space-y-2 text-sm text-slate-300"><li>CPU: Grace/Vera</li><li>I/O: BlueField DPU</li></ul></div><div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"><h4 className="font-bold text-indigo-400 text-lg flex items-center gap-2"><Layers size={20} /> GPU Tray</h4><ul className="mt-4 space-y-2 text-sm text-slate-300"><li>GPU: 8x Blackwell</li><li>Switch: NVLink</li></ul></div></div></section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8"><div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">{architectures.map((arch) => (<button key={arch.id} onClick={() => setSelectedArch(arch.id)} className={`p-5 rounded-2xl border text-left transition-all ${selectedArch === arch.id ? 'bg-white border-blue-500 shadow-xl' : 'bg-white/60 border-slate-200 hover:border-blue-300'}`}><h3 className="text-lg font-black text-slate-800">{arch.title}</h3><p className="text-xs text-slate-500 leading-snug">{arch.description}</p></button>))}</div><div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col"><div className="flex items-center gap-4 mb-8"><h2 className="text-3xl font-black text-slate-900">{currentArch.title}</h2></div><div className="space-y-6"><div className="p-5 bg-blue-50 rounded-2xl border border-blue-100"><h4 className="text-xs font-black text-blue-700 uppercase mb-3">軟體整合重點</h4><p className="text-sm text-slate-700">{currentArch.swIntegration}</p></div><div className="p-5 bg-slate-900 rounded-2xl text-white font-medium text-xs leading-relaxed italic">"{currentArch.oemImpact}"</div></div></div></div>
          </div>
        );
      case 'compliance':
        return (
          <div className="space-y-10 animate-in fade-in duration-500"><div className="bg-gradient-to-r from-slate-900 to-indigo-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"><Award className="absolute top-0 right-0 p-12 opacity-10 w-32 h-32" /><h2 className="text-3xl font-black mb-4 flex items-center gap-3">合規與認證體系</h2><p className="text-slate-300 font-medium max-w-3xl leading-relaxed">完成 NVIDIA NCS 認證與 NIST 800-193 規範是事業部進入國際市場的技術門檻。</p></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="bg-white p-6 rounded-2xl border border-slate-200"><h4 className="font-black text-slate-800 mb-4 border-b pb-2">產品認證</h4><ul className="space-y-2 text-xs font-bold text-slate-500"><li>• NVIDIA NCS (L10)</li><li>• OCP Acceptance (L11)</li></ul></div><div className="bg-white p-6 rounded-2xl border border-slate-200"><h4 className="font-black text-slate-800 mb-4 border-b pb-2">資安認證</h4><ul className="space-y-2 text-xs font-bold text-slate-500"><li>• NIST 800-193 (PFR)</li><li>• ISO 27001</li></ul></div><div className="bg-white p-6 rounded-2xl border border-slate-200"><h4 className="font-black text-slate-800 mb-4 border-b pb-2">團隊認證</h4><ul className="space-y-2 text-xs font-bold text-slate-500"><li>• CNCF CKA (K8s)</li><li>• NVIDIA DLI Professional</li></ul></div></div>
          </div>
        );
      case 'strategy':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="p-8 bg-white border border-red-100 rounded-[2.5rem] relative overflow-hidden shadow-sm"><h3 className="text-2xl font-black mb-4 text-red-600 uppercase">「盒子」思維的終結</h3><p className="text-slate-600 leading-relaxed mb-6 font-medium">單純組裝伺服器的時代已結束。利潤將轉移至機櫃級整合與軟體定義層。</p></div><div className="p-8 bg-white border border-blue-100 rounded-[2.5rem] relative overflow-hidden shadow-sm"><h3 className="text-2xl font-black mb-4 text-blue-700 uppercase">「基礎設施」的崛起</h3><p className="text-slate-600 leading-relaxed mb-6 font-medium">轉型為基礎設施服務商，提供智慧冷卻、配電與自動化維運軟體棧。</p></div></div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans p-4 md:p-8 text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MODAL SYSTEM: Opportunity Research Handbook --- */}
        {selectedOpportunity && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="bg-white rounded-[3rem] shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 border border-white/20">
               <div className="p-10 border-b border-slate-100 bg-gradient-to-br from-indigo-50 to-white flex justify-between items-start">
                  <div className="flex items-center gap-5">
                     <div className="p-4 bg-indigo-600 text-white rounded-3xl shadow-xl shadow-indigo-100"><Wand2 className="w-8 h-8" /></div>
                     <div>
                        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] bg-indigo-50 px-2 py-1 rounded">商機研發實戰指南</span>
                        <h3 className="text-3xl font-black text-slate-900 leading-tight mt-1">{selectedOpportunity.name}</h3>
                     </div>
                  </div>
                  <button onClick={() => setSelectedOpportunity(null)} className="p-3 hover:bg-slate-100 rounded-full transition-all active:scale-90"><X className="w-8 h-8 text-slate-400" /></button>
               </div>
               <div className="p-10 max-h-[60vh] overflow-y-auto custom-scrollbar space-y-10">
                  <section>
                     <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Target className="w-4 h-4" /> 部門研究目標</h4>
                     <p className="text-lg font-bold text-slate-800 leading-relaxed italic border-l-4 border-indigo-500 pl-4 bg-indigo-50/30 py-3 rounded-r-xl">"{selectedOpportunity.mission}"</p>
                  </section>
                  <section>
                     <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Microscope className="w-4 h-4" /> 實作步驟 (Engineering Roadmap)</h4>
                     <div className="space-y-4">
                        {selectedOpportunity.steps.map((step, idx) => (
                           <div key={idx} className="flex gap-5 group">
                              <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-black shadow-lg group-hover:bg-indigo-600 transition-colors">{idx + 1}</div>
                              <div className="pt-2 pb-4 flex-grow border-b border-slate-100 group-last:border-0">
                                 <p className="text-sm font-bold text-slate-800 leading-relaxed">{step}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </section>
                  <section className="bg-amber-50 p-6 rounded-[2rem] border border-amber-100">
                     <h4 className="text-xs font-black text-amber-700 uppercase tracking-widest mb-2 flex items-center gap-2"><Zap className="w-4 h-4" /> 預期商業價值</h4>
                     <p className="text-sm text-amber-900 font-medium leading-relaxed">{selectedOpportunity.value}</p>
                  </section>
               </div>
               <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end"><button onClick={() => setSelectedOpportunity(null)} className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all shadow-xl active:scale-95">關閉指南</button></div>
            </div>
          </div>
        )}

        {/* Existing Sub-task Modal */}
        {selectedSubTask && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 border border-white/20">
              <div className="p-8 border-b border-slate-100 bg-gradient-to-br from-white to-slate-50 flex justify-between items-start">
                <div className="flex items-center gap-4"><div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg"><Settings2 className="w-6 h-6" /></div><div><span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">工程實戰指南</span><h3 className="text-2xl font-black text-slate-900">{selectedSubTask.name}</h3></div></div>
                <button onClick={() => setSelectedSubTask(null)} className="p-2.5 hover:bg-slate-100 rounded-full active:scale-90"><X className="w-6 h-6 text-slate-400" /></button>
              </div>
              <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar space-y-8">
                <section><h4 className="text-xs font-black text-slate-400 uppercase mb-3">工程背景</h4><p className="text-slate-700 font-medium bg-slate-50 p-4 rounded-2xl italic">"{selectedSubTask.context}"</p></section>
                <section><h4 className="text-xs font-black text-slate-400 uppercase mb-4">實作流程</h4><div className="space-y-4">{selectedSubTask.workflow.map((step, idx) => (<div key={idx} className="flex gap-4"><div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 text-sm font-black shadow-lg">{idx + 1}</div><div className="pt-1.5 flex-grow"><p className="text-sm font-bold text-slate-800">{step}</p></div></div>))}</div></section>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end"><button onClick={() => setSelectedSubTask(null)} className="px-8 py-3 bg-slate-900 text-white font-black rounded-2xl active:scale-95">確認並關閉</button></div>
            </div>
          </div>
        )}

        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-200"><ShieldCheck className="w-3 h-3" /> Division Blueprint v5.5</div>
            <h1 className="text-4xl font-black tracking-tighter text-slate-900">AI 伺服器軟體事業部營運藍圖</h1>
            <p className="text-slate-500 font-medium max-w-2xl text-lg leading-relaxed italic">整合 L1-L12 研發、次世代架構、實戰 SOP 與深度商機研究手冊。</p>
          </div>
          <div className="flex flex-wrap gap-1 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
            {[
              { id: 'levels', label: '職能地圖', icon: <LayoutGrid className="w-4 h-4" /> },
              { id: 'devJourney', label: '開發 SOP', icon: <Rocket className="w-4 h-4" /> },
              { id: 'opportunities', label: '商機與研究', icon: <Compass className="w-4 h-4" /> },
              { id: 'nextGenArch', label: '次世代架構', icon: <Server className="w-4 h-4" /> },
              { id: 'compliance', label: '合規認證', icon: <Award className="w-4 h-4" /> },
              { id: 'roadmap', label: '建設路線', icon: <Calendar className="w-4 h-4" /> },
              { id: 'strategy', label: '商業策略', icon: <TrendingUp className="w-4 h-4" /> }
            ].map((t) => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${activeTab === t.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>{t.icon} {t.label}</button>
            ))}
          </div>
        </header>

        <main>{renderTabContent()}</main>

        <footer className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-widest">
           <div className="flex items-center gap-4"><MonitorCheck className="w-4 h-4" /><span>核心技術：CMM, PaaS, Redfish Aggregation, LLM SDK, MLOps</span></div>
           <div className="flex items-center gap-4"><span>Built for AI Infrastructure Software Builders</span><Shield className="w-4 h-4" /></div>
        </footer>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `.custom-scrollbar::-webkit-scrollbar { width: 6px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; } .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; } .no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}} />
    </div>
  );
};

export default App;