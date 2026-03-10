import React, { useState } from 'react';
import { 
  Cpu, Terminal, Layers, Activity, ShieldCheck, ChevronRight, Database, 
  Network, Box, Zap, LayoutGrid, Cloud, Settings, Shield, Gauge, Info, 
  X, ExternalLink, BookOpen, Split, Target, Trophy, Calendar, Briefcase,
  TrendingUp, ClipboardCheck, Factory, Truck, Code, Boxes, FileText, Settings2,
  Rocket, Binary, Microscope, MonitorCheck, HardDrive, Thermometer, Radio,
  Lock, Award, Users, Server, Link2, GitMerge, Layout, AlertTriangle, CheckCircle
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('levels');
  const [activeLevel, setActiveLevel] = useState('L1');
  const [selectedSubTask, setSelectedSubTask] = useState(null);
  const [selectedArch, setSelectedArch] = useState('hgx');

  // --- Data: 3-Year Roadmap (Restored) ---
  const roadmapSteps = [
    { phase: '0–6 月', title: '初始平台建置', goal: '板級 Bring-up、初版 BIOS/BMC、基礎 ATE 測試建置', milestone: '首板穩定開機與基本遙測連通' },
    { phase: '6–12 月', title: '平台流程形成', goal: 'Golden Image、相容性矩陣建立、初版 Cluster 部署', milestone: '樣機交付 / 叢集 Demo 環境就緒' },
    { phase: '12–18 月', title: '量產導入就緒', goal: 'Regression 自動化、量產燒錄工具、Service Tooling', milestone: '首案 MP (Mass Production) 通過驗收' },
    { phase: '18–24 月', title: '多 SKU 規模化', goal: '通用 Telemetry Schema、OTA 分波、全球客戶支援流程', milestone: '具備支撐全球多 SKU 出貨能力' },
    { phase: '24–36 月', title: '服務化與治理', goal: 'Fleet Management、資安治理成熟、效能極限壓榨套件', milestone: '轉型為軟體定義基礎設施服務商' }
  ];

  // --- Data: Dev Journey Phase 0-5 (Restored & Neutralized) ---
  const devJourneyPhases = [
    {
      phase: 'Phase 0',
      title: '平台選型與規格',
      analogy: '挑選 EVM + 研讀 Datasheet',
      target: '鎖定機櫃級 (Rack-scale) 規格與高效能加速器參考設計。',
      actions: ["獲取 AI Factory 參考架構包", "研讀機械/電氣/液冷 (Liquid Cooling) 規範", "定義核心軟體支援矩陣 (OS/Driver 版本)"],
      deliverable: "技術規格可行性報告"
    },
    {
      phase: 'Phase 1',
      title: '系統設計開發',
      analogy: '設計 Custom Board & Chassis',
      target: '定義主板引腳、PCIe/NVLink 拓樸與液冷 CDU 預留空間。',
      actions: ["規劃 PCIe/NVLink 通道動態映射", "配置 BMC (ASPEED) 與系統管理入口", "設計機櫃級功耗管理與傳感器佈署"],
      deliverable: "系統工程設計書 (System Spec)"
    },
    {
      phase: 'Phase 2',
      title: '樣機 Bring-up',
      analogy: 'EVM Bring-up + 移植 BSP',
      target: '單機 BIOS/BMC 啟動、OS 載入與加速器 Stack 驗證。',
      actions: ["BIOS: 配置 Above 4G 與 Resizable BAR", "BMC: 激活 Redfish 與 MCTP/PLDM 監控", "GPU Stack: 執行 NCCL P2P 通訊壓力測試"],
      deliverable: "Bring-up Checklist & Golden Image"
    },
    {
      phase: 'Phase 3',
      title: '櫃級整合優化',
      analogy: '從 Custom Board 到整機產品',
      target: '完成 L11/L12 機櫃集成，打通 800G 網路與 CDU 連控。',
      actions: ["驗證高速網路 (IB/RDMA) 布線", "CDU 控制器整合 (Modbus over BMC)", "L11/L12 整櫃功能性與故障轉移測試"],
      deliverable: "機櫃級驗收測試報告"
    },
    {
      phase: 'Phase 4',
      title: '平台開發與方案',
      analogy: '開發與加載 Application',
      target: '提供高效率運算解決方案與 MLOps 整合。',
      actions: ["部署 K8s GPU Operator 與容器編排", "配置 LLM / RAG 基準測試模型範本", "驗證參考架構 (RA) 效能白皮書"],
      deliverable: "Validated Solution Design"
    },
    {
      phase: 'Phase 5',
      title: '量產認證與運維',
      analogy: '量產 + OTA + 售後維運',
      target: '完成產業標準認證與生產線 MES 資料閉環。',
      actions: ["與工廠 MES 系統整合 L10/L11 數據", "建立大型叢集遠端遙測看板 (Telemetry)", "實施滾動更新與預測性維修機制"],
      deliverable: "產業認證證書 & 售後維運平台"
    }
  ];

  // --- Data: Next-Gen Architecture ---
  const architectures = [
    { id: 'dgx', title: 'DGX (Full Stack)', description: '品牌全棧一體化系統', icon: <ShieldCheck className="text-blue-600" />, swIntegration: '整合難度最低。由原廠深度適配。重心在於 MLOps 運維與模型效能監控。', hwComponents: 'CPU, GPU, DPU, Storage 全封閉系統。', oemImpact: '無自主軟體品牌空間。', pros: ['開箱即用'], cons: ['成本最高'] },
    { id: 'hgx', title: 'HGX (GPU Tray)', description: '高效能加速核心', icon: <Layers className="text-indigo-600" />, swIntegration: '難度最高。需開發自定義 BMC 監控 8 顆 GPU。需調優 NCCL 與 Fabric Manager 處理解耦連動。', hwComponents: '8x GPUs, HBM, NVLink Switch。', oemImpact: '關鍵「受控加速」組件。', pros: ['效能最強'], cons: ['研發門檻極高'] },
    { id: 'mgx', title: 'MGX (Modular)', description: '模組化參考架構', icon: <Box className="text-cyan-600" />, swIntegration: '重點在「模組化 BSP」。處理 Compute 與 I/O Tray 間的 PCIe 枚舉，BIOS 具動態配置力。', hwComponents: '標準介面規範，支援多廠商混搭。', oemImpact: '標準化設計框架。', pros: ['快速上市'], cons: ['效能略遜於客製版'] },
    { id: 'l10', title: 'Compute Trays', description: '純運算單元托盤', icon: <Database className="text-sky-600" />, swIntegration: '轉向「機櫃級軟體定義」。開發 RMU 軟體實作 CDU 與 Compute Tray 聯動。', hwComponents: 'CPUs, LPDDR5X, DPU, NVLink-C2C。', oemImpact: '製造重心轉向機櫃整合。', pros: ['品質穩定'], cons: ['依賴晶片供貨'] }
  ];

  // --- Data: L1-L12 Complete ---
  const lLevels = [
    { id: 'L1', name: '零件與基礎層', group: 'MFG/FW', tasks: ["ATE 腳本與微控制器 (MCU) 測試代碼開發", "JTAG 偵錯工具開發與晶片狀態讀取", "定義零件識別規格與 FRU 欄位書"], tech: ["Python", "JTAG"], deliverable: ["ATE 測試集"] },
    { id: 'L2', name: '零件子組裝', group: 'MFG/FW', tasks: ["模組級版本管理規則建立", "子模組燒錄與校驗工具開發", "定義模組與整機關聯規範"], tech: ["Shell", "Git"], deliverable: ["模組管理規範"] },
    { id: 'L3', name: '機構件整合', group: 'FW/SYS', tasks: ["定義插槽與 Fan Zone 命名規範", "建立 Inventory 拓樸與 Thermal Zone 對應", "確保 WebUI 命名一致性"], tech: ["Redfish", "IPMI"], deliverable: ["命名規範書"] },
    { id: 'L4', name: '套件組裝', group: 'FW/QA', tasks: ["準備 Sensor Map 與 I2C 位址表", "開發板級早期診斷與 Log 擷取工具", "建立 Bring-up Checklist 初版"], tech: ["ASPEED SDK"], deliverable: ["Bring-up 手冊"] },
    { id: 'L5', name: '機構完整組裝', group: 'MFG/FW', tasks: ["I/O 測試腳本與 LED 驗證", "ATE 腳本自動化執行開發", "定義 Fail Code 上傳邏輯"], tech: ["Bash", "CPLD JTAG"], deliverable: ["站測 SOP v1"] },
    { id: 'L6', name: '主機板整合', group: 'FW/QA', tasks: ["執行單機 Bring-up (BIOS/BMC)", "硬體抽象層 (HAL) 與 Device Tree 撰寫", "Firmware Recovery 備份機制實作"], tech: ["UEFI", "OpenBMC"], deliverable: ["Working Build"] },
    { id: 'L7', name: '加速器整合層', group: 'SYS/FW', tasks: ["完成 GPU/NIC PCIe Enablement", "PLDM/MCTP 實作：獲取加速器健康數據", "管理 Driver 與 Firmware 相容性矩陣"], tech: ["MCTP", "PCIe Gen6"], deliverable: ["相容性報告"] },
    { id: 'L8', name: '儲存與 I/O 優化', group: 'SYS/FW', tasks: ["SNAP (儲存網路加速) 與遠端存取開發", "PID 控制演算法：動態流速與風扇管理", "Smart PSU 整合與 PMBus 負載平衡"], tech: ["NVMe-oF", "PID"], deliverable: ["Storage Matrix"] },
    { id: 'L9', name: 'CPU與記憶體整合', group: 'SYS/FW', tasks: ["Memory Training 插槽頻率優化", "驗證 NUMA 拓樸與 ACPI 資訊", "建立 Golden OS Image 基礎鏡像"], tech: ["Microcode", "Perf"], deliverable: ["Golden Image"] },
    { id: 'L10', name: '整機完整測試', group: 'MFG/SYS', tasks: ["建立 MP-ready 韌體與軟體 BOM", "整合 Key Injection 安全流程", "開發全自動化 Acceptance Test Suite"], tech: ["Ansible", "KMS"], deliverable: ["MP Release PKG"] },
    { id: 'L11', name: '機架級整合', group: 'SOL/SYS', tasks: ["Rack Inventory 自動發現與對齊", "液冷系統通訊 (CDU Integration) 與 Modbus 整合", "機架級網絡擁塞控制調優"], tech: ["MAAS", "Modbus"], deliverable: ["Rack Dashboard"] },
    { id: 'L12', name: '叢集級整合', group: 'SOL/SVC', tasks: ["部署 K8s/Slurm 與 GPU Plugin 整合", "MLPerf 基準測試運行與系統極限調優", "預測性維護實作與日誌分析"], tech: ["Kubernetes", "MLPerf"], deliverable: ["效能白皮書"] }
  ];

  // --- Sub-task Detail Workflows ---
  const subTaskWorkflows = {
    "PLDM/MCTP 實作：獲取加速器健康數據": {
      context: "透過 PLDM 與 MCTP 協定，BMC 才能讀取加速器的即時功耗與溫度。",
      workflow: ["在 BMC 配置 PCIe-VDM 傳輸通道", "實作 MCTP Stack 處理封包組裝", "映射數據至 Redfish 資源樹", "觸發過溫降頻機制"]
    },
    "SNAP (儲存網路加速) 與遠端存取開發": {
      context: "利用 DPU 功能實現硬體級儲存模擬，降低資料存取延遲。",
      workflow: ["配置 DPU 為 SNAP 模式", "實作遠端 NVMe-oF Target 自動發現", "優化數據緩存區 (IO Queue) 大小"]
    },
    "MLPerf 基準測試運行與系統極限調優": {
      context: "全球公認 AI 效能標竿，針對測試結果優化系統內核與參數。",
      workflow: ["部署標準化容器環境", "針對拓樸生成最優 NCCL 通訊路徑", "使用 Nsight Systems 追蹤延遲"]
    }
  };

  const handleSubTaskClick = (taskName) => {
    const workflow = subTaskWorkflows[taskName];
    if (workflow) {
      setSelectedSubTask({ name: taskName, ...workflow });
    } else {
      setSelectedSubTask({ name: taskName, context: "此工程項目涉及該階段的核心研發，正在細化標準化步驟。", workflow: ["分析需求", "準備環境", "執行實作", "進行驗證", "產出手冊"] });
    }
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'levels': {
        const activeLevelData = lLevels.find(l => l.id === activeLevel) || lLevels[0];
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
            <div className="lg:col-span-4 space-y-2 max-h-[650px] overflow-y-auto pr-2 custom-scrollbar">
              {lLevels.map((lvl) => (
                <button key={lvl.id} onClick={() => setActiveLevel(lvl.id)} className={`w-full text-left p-4 rounded-xl border transition-all ${activeLevel === lvl.id ? 'bg-white border-blue-500 shadow-lg ring-1 ring-blue-500' : 'bg-white/60 border-slate-200 hover:bg-white'}`}>
                  <div className="flex justify-between items-center mb-1"><span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-widest">{lvl.id}</span><span className="text-[9px] text-slate-400 font-bold uppercase">{lvl.group}</span></div>
                  <h4 className="font-bold text-slate-900 text-sm">{lvl.name}</h4>
                </button>
              ))}
            </div>
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 h-full flex flex-col shadow-sm">
                <div className="flex justify-between items-start mb-8"><div><h2 className="text-3xl font-black text-slate-900">{activeLevelData.name}</h2><p className="text-sm text-slate-500 font-medium mt-1 uppercase tracking-wider">{activeLevelData.group} 分級工程</p></div><div className="p-3 bg-slate-50 rounded-2xl border border-slate-100"><Code className="w-6 h-6 text-slate-400" /></div></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                   <div className="space-y-6"><h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><ClipboardCheck className="w-4 h-4" /> 工程項目 (點擊詳解)</h3><ul className="space-y-3">
                      {activeLevelData.tasks.map((task, idx) => (
                        <li key={idx} onClick={() => handleSubTaskClick(task)} className="flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all cursor-pointer group active:scale-95"><div className="flex items-start gap-3"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" /><span className="text-sm font-bold text-slate-700 group-hover:text-blue-700 leading-snug">{task}</span></div><ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" /></li>
                      ))}
                    </ul></div>
                   <div className="space-y-8"><div><h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Database className="w-4 h-4" /> 關鍵技術棧</h3><div className="flex flex-wrap gap-2">{activeLevelData.tech.map((tech, idx) => (<span key={idx} className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase tracking-wider">{tech}</span>))}</div></div><div className="p-6 bg-blue-600 rounded-3xl text-white shadow-xl relative overflow-hidden"><div className="absolute -right-4 -bottom-4 opacity-10"><Trophy className="w-24 h-24 text-white" /></div><h3 className="text-xs font-black uppercase mb-4 tracking-widest">主要交付指標</h3><div className="space-y-2 relative z-10">{activeLevelData.deliverable.map((d, i) => (<div key={i} className="flex items-center gap-2 text-sm font-bold"><ShieldCheck className="w-4 h-4 text-blue-200" /> {d}</div>))}</div></div></div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      case 'nextGenArch': {
        const currentArch = architectures.find(a => a.id === selectedArch);
        return (
          <div className="space-y-10 animate-in fade-in duration-500">
            <section className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"><div className="absolute top-0 right-0 p-12 opacity-10"><Zap className="w-32 h-32" /></div><h2 className="text-3xl font-black mb-6 flex items-center gap-3"><Binary className="text-blue-400" /> 2026 解耦式架構詳解</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"><div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"><h4 className="font-bold text-sky-400 text-lg flex items-center gap-2"><Database size={20} /> Compute Tray (大腦)</h4><ul className="mt-4 space-y-2 text-sm text-slate-300"><li className="flex justify-between border-b border-white/5 pb-1"><span>核心:</span> <b>Grace/Vera CPUs</b></li><li className="flex justify-between border-b border-white/5 pb-1"><span>管理:</span> <b>BlueField-3/4 DPU</b></li><li className="flex justify-between text-red-400"><span>GPU:</span> <b>無加速用 GPU</b></li></ul></div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"><h4 className="font-bold text-indigo-400 text-lg flex items-center gap-2"><Layers size={20} /> GPU Tray (肌肉)</h4><ul className="mt-4 space-y-2 text-sm text-slate-300"><li className="flex justify-between border-b border-white/5 pb-1"><span>計算:</span> <b>8x Blackwell/Rubin</b></li><li className="flex justify-between border-b border-white/5 pb-1"><span>連結:</span> <b>NVLink Switch 晶片</b></li><li className="flex justify-between text-red-400"><span>CPU:</span> <b>無主 CPU</b></li></ul></div></div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8"><div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {architectures.map((arch) => (<button key={arch.id} onClick={() => setSelectedArch(arch.id)} className={`p-5 rounded-2xl border text-left transition-all duration-300 ${selectedArch === arch.id ? 'bg-white border-blue-500 shadow-xl ring-2 ring-blue-500/10' : 'bg-white/60 border-slate-200 hover:border-blue-300'}`}><div className="mb-4">{arch.icon}</div><h3 className="text-lg font-black text-slate-800">{arch.title}</h3><p className="text-xs text-slate-500 leading-snug">{arch.description}</p></button>))}
               </div><div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col"><div className="flex items-center gap-4 mb-8">{currentArch.icon}<h2 className="text-3xl font-black text-slate-900">{currentArch.title}</h2></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow"><div className="space-y-6"><div className="p-5 bg-blue-50 rounded-2xl border border-blue-100"><h4 className="text-xs font-black text-blue-700 uppercase mb-3 flex items-center"><Terminal className="w-4 h-4 mr-2" /> 軟體整合重點</h4><p className="text-sm text-slate-700 leading-relaxed font-medium">{currentArch.swIntegration}</p></div><div><h4 className="text-xs font-black text-slate-400 uppercase mb-3">硬體組成 (BOM)</h4><p className="text-sm text-slate-600 font-bold">{currentArch.hwComponents}</p></div></div><div className="space-y-6"><div className="grid grid-cols-2 gap-3"><div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100"><span className="text-[10px] font-black text-emerald-700 uppercase">優點 Pros</span><ul className="text-xs text-emerald-600 mt-2 space-y-1">{currentArch.pros.map(p => <li key={p}>• {p}</li>)}</ul></div><div className="p-4 bg-rose-50 rounded-xl border border-rose-100"><span className="text-[10px] font-black text-rose-700 uppercase">缺點 Cons</span><ul className="text-xs text-rose-600 mt-2 space-y-1">{currentArch.cons.map(c => <li key={c}>• {c}</li>)}</ul></div></div><div className="p-5 bg-slate-900 rounded-2xl text-white font-medium text-xs leading-relaxed italic">"{currentArch.oemImpact}"</div></div></div></div></div>
          </div>
        );
      }
      case 'devJourney':
        return (
          <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"><div className="absolute top-0 right-0 p-12 opacity-10"><Rocket className="w-32 h-32 rotate-12" /></div><h2 className="text-3xl font-black mb-4 flex items-center gap-3"><Binary className="w-8 h-8 text-blue-400" /> AI Server 開發實戰 SOP</h2><p className="text-slate-400 font-medium max-w-3xl leading-relaxed">對標機櫃級液冷 AI 叢集規格。將複雜的伺服器架構重塑為熟悉的「嵌入式開發模型」，幫助新手快速理解全棧開發流程。</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devJourneyPhases.map((p, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col group"><div className="flex items-center justify-between mb-4"><span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">{p.phase}</span><Info className="w-4 h-4 text-slate-300" /></div><h3 className="text-xl font-black text-slate-900 mb-2">{p.title}</h3><div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-lg border border-amber-100"><Microscope className="w-3.5 h-3.5 text-amber-600" /><span className="text-[11px] font-black text-amber-700">嵌入式類比：{p.analogy}</span></div><p className="text-sm text-slate-500 mb-6 font-medium leading-relaxed">{p.target}</p><div className="flex-grow space-y-3 mb-6"><h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">核心關鍵動作</h4>{p.actions.map((act, i) => (<div key={i} className="flex items-start gap-2"><div className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" /><span className="text-xs font-bold text-slate-700 leading-snug">{act}</span></div>))}</div><div className="mt-auto pt-4 border-t border-slate-100"><p className="text-[10px] font-black text-slate-400 uppercase">主要產出物</p><p className="text-xs font-black text-slate-900 mt-1">{p.deliverable}</p></div></div>
              ))}
            </div>
          </div>
        );
      case 'roadmap':
        return (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="relative pl-8 space-y-12 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-1 before:bg-slate-200">
              {roadmapSteps.map((step, idx) => (
                <div key={idx} className="relative"><div className="absolute -left-[2.35rem] top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md z-10" /><div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all"><span className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-black uppercase tracking-widest">{step.phase}</span><h3 className="text-xl font-black text-slate-900 mt-2">{step.title}</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"><div><h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">關鍵工作任務</h4><p className="text-sm text-slate-700 leading-relaxed font-medium">{step.goal}</p></div><div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100/50"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">主要里程碑</h4><p className="text-sm text-blue-900 font-bold">{step.milestone}</p></div></div></div></div>
              ))}
            </div>
          </div>
        );
      case 'strategy':
        return (
          <div className="space-y-8 animate-in zoom-in-95 duration-500">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="p-8 bg-white border border-red-100 rounded-[2.5rem] relative overflow-hidden shadow-sm"><div className="absolute top-0 right-0 p-8 opacity-5 text-red-600"><AlertTriangle size={150} /></div><h3 className="text-2xl font-black mb-4 text-red-600 uppercase">「盒子」思維的終結</h3><p className="text-slate-600 leading-relaxed mb-6 font-medium">單純組裝伺服器的時代已結束。利潤將轉移至機櫃級整合與軟體定義層。</p><ul className="space-y-3 text-slate-500 text-sm font-bold"><li>• 傳統單機組裝毛利降至個位數</li><li>• 缺乏軟體加值難以建立護城河</li><li>• 難以滿足 Hyper-scale 客製化需求</li></ul></div>
              <div className="p-8 bg-white border border-blue-100 rounded-[2.5rem] relative overflow-hidden shadow-sm"><div className="absolute top-0 right-0 p-8 opacity-10 text-blue-600"><Activity size={150} /></div><h3 className="text-2xl font-black mb-4 text-blue-700 uppercase">「基礎設施」的崛起</h3><p className="text-slate-600 leading-relaxed mb-6 font-medium">轉型為基礎設施服務商，提供智慧冷卻、配電與自動化維運軟體棧。</p><ul className="space-y-3 text-slate-500 text-sm font-bold"><li>• 提供 Rack-level 整體解決方案</li><li>• 開發智慧遙測與健康監測平台</li><li>• 深度整合 CDU 系統與能效優化</li></ul></div></div>
          </div>
        );
      case 'compliance':
        return (
          <div className="space-y-10 animate-in fade-in duration-500"><div className="bg-gradient-to-r from-slate-900 to-indigo-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"><div className="absolute top-0 right-0 p-12 opacity-10"><Award className="w-32 h-32" /></div><h2 className="text-3xl font-black mb-4 flex items-center gap-3">合規與認證體系</h2><p className="text-slate-300 font-medium max-w-3xl">建立產品至人才的信任矩陣。完成 NVIDIA NCS 認證是數據中心市場的基本門檻。</p></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200"><h4 className="font-black text-slate-800 mb-4 border-b pb-2">產品認證</h4><ul className="space-y-2 text-xs font-bold text-slate-500"><li>• NVIDIA NCS (L10)</li><li>• OCP Acceptance (L11)</li></ul></div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200"><h4 className="font-black text-slate-800 mb-4 border-b pb-2">資安認證</h4><ul className="space-y-2 text-xs font-bold text-slate-500"><li>• NIST 800-193 (PFR)</li><li>• ISO 27001</li></ul></div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200"><h4 className="font-black text-slate-800 mb-4 border-b pb-2">團隊認證</h4><ul className="space-y-2 text-xs font-bold text-slate-500"><li>• CNCF CKA (K8s)</li><li>• NVIDIA DLI Associate</li></ul></div>
             </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans p-4 md:p-8 text-slate-900">
      <div className="max-w-7xl mx-auto">
        {selectedSubTask && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 border border-white/20">
              <div className="p-8 border-b border-slate-100 bg-gradient-to-br from-white to-slate-50 flex justify-between items-start">
                <div className="flex items-center gap-4"><div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg"><Settings2 className="w-6 h-6" /></div><div><span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">工程實戰指南</span><h3 className="text-2xl font-black text-slate-900 leading-tight">{selectedSubTask.name}</h3></div></div>
                <button onClick={() => setSelectedSubTask(null)} className="p-2.5 hover:bg-slate-100 rounded-full active:scale-90"><X className="w-6 h-6 text-slate-400" /></button>
              </div>
              <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar space-y-8">
                <section><h4 className="text-xs font-black text-slate-400 uppercase mb-3">工程背景</h4><p className="text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-2xl border border-slate-100 italic">"{selectedSubTask.context}"</p></section>
                <section><h4 className="text-xs font-black text-slate-400 uppercase mb-4">標準作業流程 (SOP)</h4><div className="space-y-4">{selectedSubTask.workflow.map((step, idx) => (<div key={idx} className="flex gap-4 group"><div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 text-sm font-black shadow-lg group-hover:bg-blue-600 transition-colors">{idx + 1}</div><div className="pt-1.5 pb-3 flex-grow"><p className="text-sm font-bold text-slate-800 leading-relaxed">{step}</p></div></div>))}</div></section>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end"><button onClick={() => setSelectedSubTask(null)} className="px-8 py-3 bg-slate-900 text-white font-black rounded-2xl active:scale-95">確認並關閉</button></div>
            </div>
          </div>
        )}

        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-200"><ShieldCheck className="w-3 h-3" /> Division Blueprint v5.3</div>
            <h1 className="text-4xl font-black tracking-tighter text-slate-900">AI 伺服器軟體事業部營運藍圖</h1>
            <p className="text-slate-500 font-medium max-w-2xl text-lg leading-relaxed italic">整合 L1-L12 研發、2026 次世代架構、實戰 SOP 與 3 年路線圖。</p>
          </div>
          <div className="flex flex-wrap gap-1 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
            {[
              { id: 'levels', label: '職能地圖', icon: <LayoutGrid className="w-4 h-4" /> },
              { id: 'devJourney', label: '開發 SOP', icon: <Rocket className="w-4 h-4" /> },
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
           <div className="flex items-center gap-4"><MonitorCheck className="w-4 h-4" /><span>核心技術：解耦式系統, MCTP/PLDM, NVLink-C2C, MLPerf, SNAP</span></div>
           <div className="flex items-center gap-4"><span>Industry Standard Compliant (2026 Ready)</span><Shield className="w-4 h-4" /></div>
        </footer>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `.custom-scrollbar::-webkit-scrollbar { width: 6px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; } .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; } .no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}} />
    </div>
  );
};

export default App;