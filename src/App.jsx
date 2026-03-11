import React, { useState } from 'react';
import { 
  Cpu, Terminal, Layers, Activity, ShieldCheck, ChevronRight, Database, 
  Network, Box, Zap, LayoutGrid, Cloud, Settings, Shield, Gauge, Info, 
  X, ExternalLink, BookOpen, Split, Target, Trophy, Calendar, Briefcase,
  TrendingUp, ClipboardCheck, Factory, Truck, Code, Boxes, FileText, Settings2,
  Rocket, Binary, Microscope, MonitorCheck, HardDrive, Thermometer, Radio,
  Lock, Award, Users, Server, Link2, GitMerge, Layout, AlertTriangle, CheckCircle,
  Lightbulb, Globe, Compass, Search, Wand2, ArrowRight
} from 'lucide-react';

// --- STATIC DATA: ALL CONSTANTS (Outside App for Total Stability) ---

const architectures = [
  { 
    id: 'dgx', title: 'DGX (Full Stack)', description: '品牌全棧一體化系統', icon: <ShieldCheck className="text-blue-600" />, 
    howItWorks: "將計算、儲存、網路與 AI 框架進行『原子級』整合。控制面與數據面由原廠軟體棧黑盒管理。OEM 僅需處理電源佈線、熱管理監控與 L12 現場機櫃部署。",
    features: ['預裝全套 AI Enterprise', '單一窗口技術支援', '自動化拓樸感知'], 
    swIntegration: '整合難度最低。重點在於 MLOps 環境維護、容器編排與客戶端推論工作負載對接。', 
    pros: ['性能表現最穩', '部署週期最短', '零開發成本'], 
    cons: ['硬體利潤空間窄', '受供應鏈配額限制', '無自主技術護城河'] 
  },
  { 
    id: 'hgx', title: 'HGX (GPU Tray)', description: '高效能加速核心托盤', icon: <Layers className="text-indigo-600" />, 
    howItWorks: "以 GPU 托盤為核心，透過高頻寬 NVLink Switch 連接 8 顆 GPU。軟體端需開發高度客製化 BMC，處理與外部 Compute Tray 的 PCIe 枚舉、IRQ 分配與帶外管理協定。",
    features: ['8x GPU 叢集', 'NVLink 全互連', '極限液冷適配'], 
    swIntegration: '開發難度最高。涉及複雜的 PCIe 資源分配、MCTP/PLDM 遙測實作與全鏈路 Fabric 管理。', 
    pros: ['算力密度業界最強', 'CSP 核心採購標案', '具備高度技術加值空間'], 
    cons: ['研發投入極大', '對硬體 SI 與系統穩定度要求嚴苛'] 
  },
  { 
    id: 'mgx', title: 'MGX (Modular)', description: '模組化參考架構規範', icon: <Box className="text-cyan-600" />, 
    howItWorks: "定義標準化介面 (Tray)，允許 CPU、GPU、DPU 像積木般組合。軟體端需建立一套『動態適配』的 BIOS，開機時自動掃描 Tray ID 並載入對應的 ACPI Table 與驅動路徑。",
    features: ['跨世代組件相容', '快速原型開發', '異質架構支援'], 
    swIntegration: '重點在於開發模組化 BSP (Board Support Package)。需處理 Compute 與 I/O Tray 間的多樣化 PCIe 拓樸識別。', 
    pros: ['開發時程縮短 70%', '庫存與 SKU 管理極具靈活性', '客製化門檻低'], 
    cons: ['效能較客製 HGX 略有損耗', '韌體版本控制與驗證矩陣極為複雜'] 
  },
  { 
    id: 'l10', title: 'Compute Trays', description: '純運算單元解耦托盤', icon: <Database className="text-sky-600" />, 
    howItWorks: "將 CPU 與系統記憶體獨立。透過 NVLink-C2C (900GB/s) 與外部加速托盤通訊。軟體工作轉向機櫃級 CMM，負責全櫃 72 節點的動態資源調度與電力平衡。",
    features: ['Grace/Vera 高效能 CPU', 'LPDDR5X 低功耗', 'NVLink-C2C 互聯'], 
    swIntegration: '重心轉向軟體定義機櫃 (SDR)。開發 RMU 軟體實現資源虛擬化與 CMM 智慧監控。', 
    pros: ['CPU/GPU 比例靈活調整', '維護與模組化更換極易', '液冷散熱效率優化'], 
    cons: ['機櫃級網路拓樸設計複雜', '高度依賴單一技術生態'] 
  }
];

const lLevels = [
  { id: 'L1', name: '零件製造層', group: 'MFG/FW', tasks: ["零件識別規格定義 (PN/SN)", "FRU 與 EEPROM 規格書撰寫", "Traceability 追溯資料 Schema"], tech: ["PLM", "I2C/SMBus"], deliverable: ["零件規格白皮書"] },
  { id: 'L2', name: '零件子組裝', group: 'MFG/FW', tasks: ["模組級版本管理規則", "子模組燒錄校驗工具開發", "MES 測試資料上傳 API"], tech: ["Python", "Git"], deliverable: ["燒錄校驗 SOP"] },
  { id: 'L3', name: '機構件整合', group: 'FW/SYS', tasks: ["插槽與 Fan Zone 命名規範", "Inventory 拓樸與 Thermal 映射", "WebUI 實體標籤同步"], tech: ["Redfish", "IPMI"], deliverable: ["機構管理規範"] },
  { id: 'L4', name: '套件組裝', group: 'FW/QA', tasks: ["Sensor Map 與 I2C 位址表", "PSU/Fan 識別代碼開發", "早期診斷與 Log 擷取工具"], tech: ["SDK", "Serial Console"], deliverable: ["Bring-up Checklist"] },
  { id: 'L5', name: '機構完整組裝', group: 'MFG/FW', tasks: ["I/O 測試腳本與 LED 驗證", "MCU 測試代碼 ATE 開發", "Fail Code 分類上傳邏輯"], tech: ["Bash", "JTAG"], deliverable: ["站測 SOP v1"] },
  { id: 'L6', name: '主機板整合', group: 'FW/QA', tasks: ["單機 Bring-up (BIOS/BMC)", "HAL 與 Device Tree 撰寫", "Firmware Recovery 實作"], tech: ["UEFI", "OpenBMC"], deliverable: ["Working Build"] },
  { id: 'L7', name: '加速器整合層', group: 'SYS/FW', tasks: ["PCIe Resource Allocation", "PLDM/MCTP 監控數據實作", "Driver/FW 相容性矩陣管理"], tech: ["MCTP", "PCIe Gen6"], deliverable: ["相容性報告"] },
  { id: 'L8', name: '儲存與 I/O 優化', group: 'SYS/FW', tasks: ["SNAP 儲存加速驅動開發", "PID 風扇與液冷流速管理", "PMBus 電源負載平衡整合"], tech: ["NVMe-oF", "PID Control"], deliverable: ["溫控邏輯文檔"] },
  { id: 'L9', name: 'CPU與記憶體整合', group: 'SYS/FW', tasks: ["Memory Training 頻率優化", "NUMA 與 ACPI 資訊驗證", "Golden OS Image 封裝"], tech: ["Microcode", "Kernel Tuning"], deliverable: ["Golden Image v1"] },
  { id: 'L10', name: '整機完整測試', group: 'MFG/SYS', tasks: ["MP-ready 韌體與 SW BOM", "Key Injection 安全簽章流程", "全自動化 Acceptance Test"], tech: ["Ansible", "KMS"], deliverable: ["MP Release PKG"] },
  { id: 'L11', name: '機架級整合', group: 'SOL/SYS', tasks: ["Rack Inventory 自動發現", "CDU 液冷連動與 Modbus 整合", "機櫃網絡擁塞控制調優"], tech: ["MAAS", "Modbus TCP"], deliverable: ["Rack Dashboard"] },
  { id: 'L12', name: '叢集級整合', group: 'SOL/SVC', tasks: ["K8s/Slurm 與 GPU Plugin 整合", "MLPerf 基準測試極限調優", "預測性維修與自癒監控"], tech: ["Kubernetes", "MLPerf"], deliverable: ["效能白皮書"] }
];

const roadmapSteps = [
  { 
    phase: 'Y1 (0-6M)', title: '基礎架構與 CMM 啟動', 
    goal: '完成 L1-L6 Bring-up。', 
    cmmPaas: "CMM: 研發 Redfish 協議棧原型與節點遙測 API。\nPaaS: 建立單機容器開發環境，對齊核心驅動版本。",
    details: "實作單機穩定引導 (L6)，建置 MES 資料自動化上傳路徑 (L1-L5)。",
    milestone: '首板 BIOS/BMC 通過 Bring-up 驗收。' 
  },
  { 
    phase: 'Y1 (6-12M)', title: '平台定型與 PaaS 實驗', 
    goal: 'L7-L9 完成，建立 Golden Image。', 
    cmmPaas: "CMM: 啟動 Redfish Aggregator 研究，管理單櫃 8 節點。\nPaaS: 完成 K8s 算力調度實驗，驗證多卡通訊效率。",
    details: "完成 PCIe 資源分配矩陣 (L7)，產出首版 Golden Image (L9)。",
    milestone: '單機樣機全功能驗證完成。' 
  },
  { 
    phase: 'Y2 (12-18M)', title: '量產就緒與 ZTP 自動化', 
    goal: '完成 L10 量產工程。', 
    cmmPaas: "CMM: 達成機櫃級 ZTP (零接觸部署) 流程自動化。\nPaaS: 開發預整合模型環境 (vLLM)，支援即時部署測試。",
    details: "整合 Key Injection 安全流程 (L10)，開發全櫃韌體自動對齊工具。",
    milestone: '首案 MP (Mass Production) 通過認證。' 
  },
  { 
    phase: 'Y2 (18-24M)', title: '機櫃規模化與 800G 調優', 
    goal: '達成 L11 機架級交付。', 
    cmmPaas: "CMM: 實作 CMM 入口之機櫃電力監控與異常告警系統。\nPaaS: 完成機架級網絡擁塞控制調優，優化 RDMA 通訊。",
    details: "實作機櫃 CDU 聯動控制 (L11)，達成 576 GPU 級別之布線驗證。",
    milestone: '機櫃通過 NVIDIA NCS 認證。' 
  },
  { 
    phase: 'Y3 (24-30M)', title: '解決方案與 MIG 算力治理', 
    goal: 'L12 叢集交付。', 
    cmmPaas: "CMM: 實作全櫃動態功耗調度演算法，優化 PUE。\nPaaS: 實現 GPU MIG 自動化切分與多租戶算力租賃平台。",
    details: "完成 L12 算力排程平台，整合自研 MLOps 遙測看板。",
    milestone: '轉型為軟體定義基礎設施服務商。' 
  },
  { 
    phase: 'Y3 (30-36M)', title: '維運閉環與 MLPerf 標竿', 
    goal: '全鏈路極限優化。', 
    cmmPaas: "CMM: 達成全球叢集遠端維運、OTA 治理與預測性維修。\nPaaS: MLPerf 基準測試 Submission，達成國際領先指標。",
    details: "實作訓練自癒機制，達成硬體失效與訓練任務之資料閉環。",
    milestone: '具備國際級競爭力之事業部成型。' 
  }
];

const certCategories = [
  {
    title: "產品技術認證 (Product)",
    items: [
      { name: "NVIDIA-Certified Systems (NCS)", level: "L10", desc: "驗證硬體效能、管理能力與安全性，能運行 NVIDIA 全套 AI SDK。" },
      { name: "OCP (Open Compute Project) Acceptance", level: "L11", desc: "符合開放計算標準，強調高效率與機櫃級節能指標。" },
      { name: "VMware Ready / Red Hat Certified", level: "L9", desc: "確保虛擬化與 OS 層級驅動完全相容，對接企業私有雲。" }
    ]
  },
  {
    title: "資安與治理認證 (Security)",
    items: [
      { name: "NIST 800-193 (PFR)", level: "L6", desc: "韌體彈性回復標準，防止 BIOS/BMC 被篡改，確保系統安全性。" },
      { name: "ISO 27001 / SOC 2", level: "L1-L12", desc: "軟體開發生命週期 (SDLC) 的資安管理系統，建立客戶信任。" },
      { name: "IEC 62443", level: "L10", desc: "針對邊緣計算或工業 AI 環境的網路安全認證。" }
    ]
  },
  {
    title: "團隊技術認證 (Personnel)",
    items: [
      { name: "NVIDIA DLI Professional", level: "L12", desc: "證明團隊具備 GPU 算力調配、Triton 部署與 NCCL 優化能力。" },
      { name: "CNCF CKA/CKAD", level: "L11", desc: "Kubernetes 管理員認證，處理 AI 容器編排的核心技術認證。" },
      { name: "Red Hat RHCE", level: "L9", desc: "資深 Linux 系統工程師認證，確保 OS 調優與核心穩定度。" }
    ]
  }
];

const opportunityHandbooks = {
  "Redfish Aggregation": {
    context: "在 72 節點機櫃中，管理軟體逐一對接效率太低。Redfish Aggregation 讓 CMM 成為唯一入口。",
    mission: "開發代理（Proxy）功能的 Aggregator 服務，實現機櫃級資源視圖。",
    steps: ["建立 Service Root 配置根路徑", "自動發現 Management Network 節點", "資源 Mapping 至 Aggregation 資源樹", "實作 SSE 代理與事件訂閱中心"],
    value: "建立專屬硬體生態系，形成軟體鎖定。"
  },
  "機櫃級動態功耗調度": {
    context: "AI 負載波動劇烈，單機 Power Capping 無法對應過載風險。CMM 需扮演電力排程師。",
    mission: "開發閉環控制演算法，動態調節各節點功耗以優化 PUE。",
    steps: ["即時採集 PDU/PSU 指標", "根據任務優先級分配功耗權重", "透過 Redfish 下發功耗限制指令", "與 CDU 液冷連動預判負載"],
    value: "解決液冷時代熱與電平衡的核心競爭力。"
  },
  "ZTP (Zero Touch Provisioning)": {
    context: "數據中心部署最怕配置錯誤。ZTP 讓機架在插電連網後，自動完成軟體對齊。",
    mission: "開發自動初始化工作流，將部署時間降至『小時』級。",
    steps: ["自動掃描機櫃內網路拓樸", "指派節點管理 IP 與插槽關聯", "全櫃韌體版本自動校準升級", "自動化壓力測試並產出報告"],
    value: "大幅降低部署成本，提升交付效率。"
  },
  "GPU 虛擬化與調度優化": {
    context: "提升算力利用率，必須將一張強大 GPU 切分為多個實例 (MIG) 供不同專案使用。",
    mission: "深入研究算力切分技術，與 K8s 調度器進行深度整合。",
    steps: ["研究硬體分層技術 (MIG/vGPU)", "擴展 K8s Device Plugin 感知算力分級", "實作多租戶故障與記憶體隔離", "開發動態算力重切分技術"],
    value: "讓硬體具備高靈活性，吸引預算多元的客戶。"
  },
  "Pre-configured LLM 環境": {
    context: "客戶要的是『能跑模型』。軟體部門需將底層驅動與框架垂直打通。",
    mission: "打造開箱即用的 AI 容器鏡像與 API 服務棧。",
    steps: ["封裝優化版 vLLM/TensorRT-LLM 鏡像", "實作模型權重快速載入技術", "整合 OpenAI 相容規格 API 網關", "內建基準效能測試工具"],
    value: "從賣硬體轉向賣算力服務經驗，建立黏著度。"
  },
  "MLOps 與遙測資料閉環": {
    context: "AI 訓練長達數週，若硬體失效損失慘重。需軟硬體連動保護機制。",
    mission: "建立預測性維護與訓練狀態連動的遙測看板。",
    steps: ["彙整加速器核心、記憶體遙測數據", "將異常事件與 Job ID 關聯", "預警觸發自動 Checkpoint 存檔", "實作失效節點負載自動遷移"],
    value: "提供最強的『高可用 AI 集群』承諾。"
  }
};

const businessOpportunities = [
  { id: 'cmm', title: 'CMM 研發方向', description: '機櫃級指揮官', focusArea: '軟體定義硬體 (SDH)', researchItems: [
    { goal: "Redfish Aggregation", desc: "統一監控數據匯流點。", icon: <Server className="w-5 h-5 text-blue-500" /> }, 
    { goal: "機櫃級動態功耗調度", desc: "電力與冷卻智慧平衡。", icon: <Zap className="w-5 h-5 text-amber-500" /> }, 
    { goal: "ZTP (Zero Touch Provisioning)", desc: "全機櫃部署自動化。", icon: <Radio className="w-5 h-5 text-green-500" /> }
  ], icon: <Layout className="w-10 h-10 text-blue-600" /> },
  { id: 'paas', title: 'PaaS 研發方向', description: '算力服務化', focusArea: '價值鏈上移', researchItems: [
    { goal: "GPU 虛擬化與調度優化", desc: "MIG 與 K8s 高效調度。", icon: <GitMerge className="w-5 h-5 text-indigo-500" /> }, 
    { goal: "Pre-configured LLM 環境", desc: "開箱即用的模型鏡像。", icon: <Code className="w-5 h-5 text-sky-500" /> }, 
    { goal: "MLOps 與遙測資料閉環", desc: "訓練自癒與預測維修。", icon: <MonitorCheck className="w-5 h-5 text-purple-500" /> }
  ], icon: <Cloud className="w-10 h-10 text-indigo-600" /> }
];

// --- APP COMPONENT ---

const App = () => {
  const [activeTab, setActiveTab] = useState('levels');
  const [activeLevel, setActiveLevel] = useState('L1');
  const [selectedSubTask, setSelectedSubTask] = useState(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [selectedArch, setSelectedArch] = useState('hgx');

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
                   <div className="space-y-6"><h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><ClipboardCheck className="w-4 h-4" /> 工程清單 (點擊看詳解)</h3><ul className="space-y-3">
                      {activeLevelData.tasks.map((task, idx) => (
                        <li key={idx} onClick={() => setSelectedSubTask({name: task, context: "此工程項目涉及該階段核心研發或生產驗證。", workflow: ["分析需求與通訊協定", "準備測試開發環境", "執行實作與初步驗證", "產出技術文件與 SOP"]})} className="flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all cursor-pointer group active:scale-95"><span className="text-sm font-bold text-slate-700 group-hover:text-blue-700 leading-snug">{task}</span><ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" /></li>
                      ))}
                    </ul></div>
                   <div className="space-y-8"><div><h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">必備技術棧</h3><div className="flex flex-wrap gap-2">{activeLevelData.tech.map((tech, idx) => (<span key={idx} className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase tracking-wider">{tech}</span>))}</div></div><div className="p-6 bg-blue-600 rounded-3xl text-white shadow-xl relative overflow-hidden"><Trophy className="absolute -right-4 -bottom-4 opacity-10 w-24 h-24" /><h3 className="text-xs font-black uppercase mb-4 tracking-widest">核心交付物</h3><div className="space-y-2 relative z-10">{activeLevelData.deliverable.map((d, i) => (<div key={i} className="flex items-center gap-2 text-sm font-bold"><ShieldCheck className="w-4 h-4 text-blue-200" /> {d}</div>))}</div></div></div>
                </div>
            </div>
          </div>
        );
      case 'nextGenArch':
        const currentArch = architectures.find(a => a.id === selectedArch) || architectures[0];
        return (
          <div className="space-y-10 animate-in fade-in duration-500">
            <section className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"><Zap className="absolute top-0 right-0 p-12 opacity-10 w-32 h-32" /><h2 className="text-3xl font-black mb-6 flex items-center gap-3">2026 解耦式架構技術詳解</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"><div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"><h4 className="font-bold text-sky-400 text-lg flex items-center gap-2"><Database size={20} /> Compute Tray (指令大腦)</h4><p className="text-xs text-slate-400 mt-2 mb-3">負責 OS 調度、L11 儲存定義。不參與矩陣運算，但掌控資源索引。互聯：NVLink-C2C (900GB/s)。</p></div><div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"><h4 className="font-bold text-indigo-400 text-lg flex items-center gap-2"><Layers size={20} /> GPU Tray (運算肌肉)</h4><p className="text-xs text-slate-400 mt-2 mb-3">純算力單元，包含高速顯存 (HBM) 與 NVLink Switch。透過 C2C 介面執行平行運算指令。</p></div></div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8"><div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {architectures.map((arch) => (<button key={arch.id} onClick={() => setSelectedArch(arch.id)} className={`p-5 rounded-2xl border text-left transition-all ${selectedArch === arch.id ? 'bg-white border-blue-500 shadow-xl ring-2 ring-blue-500/10' : 'bg-white/60 border-slate-200 hover:border-blue-300'}`}><div className="mb-4">{arch.icon}</div><h3 className="text-lg font-black text-slate-800">{arch.title}</h3><p className="text-xs text-slate-500 leading-snug">{arch.description}</p></button>))}
               </div><div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col"><div className="flex items-center gap-4 mb-8">{currentArch.icon}<h2 className="text-3xl font-black text-slate-900">{currentArch.title}</h2></div>
                  <div className="space-y-6 flex-grow"><div className="bg-slate-50 p-6 rounded-2xl border border-slate-100"><h4 className="text-xs font-black text-blue-600 uppercase mb-3 flex items-center gap-2"><Wand2 className="w-4 h-4" /> 技術運作機制</h4><p className="text-sm text-slate-700 leading-relaxed font-medium">{currentArch.howItWorks}</p></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 className="text-xs font-black text-emerald-700 uppercase mb-3">優勢 Pros</h4><ul className="space-y-2 text-xs text-emerald-600 font-bold">{currentArch.pros.map(p => <li key={p} className="flex items-center gap-2"><CheckCircle className="w-3 h-3" /> {p}</li>)}</ul></div><div><h4 className="text-xs font-black text-rose-700 uppercase mb-3">挑戰 Cons</h4><ul className="space-y-2 text-xs text-rose-600 font-bold">{currentArch.cons.map(c => <li key={c} className="flex items-center gap-2"><AlertTriangle className="w-3 h-3" /> {c}</li>)}</ul></div></div>
                    <div className="p-4 bg-slate-900 rounded-xl text-xs text-slate-400 leading-relaxed"><b>軟體研發影響：</b>{currentArch.swIntegration}</div></div></div></div>
          </div>
        );
      case 'roadmap':
        return (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="relative pl-8 space-y-12 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-1 before:bg-slate-200">{roadmapSteps.map((step, idx) => (
                <div key={idx} className="relative"><div className="absolute -left-[2.35rem] top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white z-10 shadow-lg" /><div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all"><span className="px-4 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest">{step.phase}</span><h3 className="text-2xl font-black text-slate-900 mt-4 mb-2">{step.title}</h3><p className="text-sm text-slate-500 font-bold mb-6 italic">"{step.goal}"</p><div className="grid grid-cols-1 lg:grid-cols-2 gap-8"><div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-inner"><h4 className="text-xs font-black text-indigo-600 uppercase mb-4 flex items-center gap-2"><Compass className="w-4 h-4" /> CMM & PaaS 整合里程碑</h4><div className="space-y-3 whitespace-pre-line text-sm text-indigo-900 leading-relaxed font-bold">{step.cmmPaas}</div><div className="mt-4 p-4 bg-white/50 rounded-xl text-xs text-indigo-700 leading-relaxed font-medium"><b>詳細工程規劃：</b><br/>{step.details}</div></div><div className="p-6 bg-blue-600 rounded-2xl text-white relative overflow-hidden"><div className="absolute -right-4 -bottom-4 opacity-10"><Trophy className="w-24 h-24" /></div><h4 className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80">本階段最終交付指標</h4><p className="text-lg font-black leading-tight relative z-10">{step.milestone}</p></div></div></div></div>
              ))}</div>
          </div>
        );
      case 'opportunities':
        return (
          <div className="space-y-10 animate-in fade-in duration-500">
             <div className="bg-gradient-to-r from-blue-700 to-indigo-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"><Globe className="absolute top-0 right-0 p-12 opacity-10 w-32 h-32" /><h2 className="text-3xl font-black mb-4 flex items-center gap-3">商機研究：核心加值路徑</h2><p className="text-blue-100 font-medium max-w-3xl leading-relaxed">建立軟體定義基礎設施 (SDI) 是事業部獲利的關鍵。以下為恢復後的 6 項完整研究項目。</p></div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">{businessOpportunities.map((opp) => (
                   <div key={opp.id} className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm"><div className="flex items-center gap-4 mb-8"><div className="p-4 bg-slate-50 rounded-3xl shadow-inner">{opp.icon}</div><div><h3 className="text-2xl font-black text-slate-900">{opp.title}</h3><p className="text-xs font-black text-blue-600 uppercase tracking-widest">{opp.focusArea}</p></div></div>
                      <div className="space-y-4">{opp.researchItems.map((item, idx) => (
                            <button key={idx} onClick={() => setSelectedOpportunity({name: item.goal, ...opportunityHandbooks[item.goal]})} className="w-full text-left p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-500 hover:bg-white hover:shadow-lg transition-all flex items-center justify-between active:scale-[0.98]"><div className="flex items-center gap-4"><div className="p-2 bg-white rounded-xl shadow-sm">{item.icon}</div><div><h5 className="font-black text-slate-900 group-hover:text-blue-600 transition-colors">{item.goal}</h5><p className="text-xs text-slate-500 mt-1">{item.desc}</p></div></div><ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" /></button>
                         ))}</div></div>
                ))}</div>
          </div>
        );
      case 'compliance':
        return (
          <div className="space-y-10 animate-in fade-in duration-500">
             <div className="bg-gradient-to-r from-slate-900 to-indigo-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <Award className="absolute top-0 right-0 p-12 opacity-10 w-32 h-32" />
                <h2 className="text-3xl font-black mb-4 flex items-center gap-3">合規與認證體系 (Restored)</h2>
                <p className="text-slate-300 font-medium max-w-3xl leading-relaxed">建立從產品到人才的全球信任矩陣。完成 NVIDIA NCS 認證與 NIST 800-193 規範是事業部進入國際市場的技術門檻。</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certCategories.map((cat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                    <h4 className="font-black text-slate-800 mb-6 border-b pb-3 flex items-center gap-2">
                       {i === 0 ? <MonitorCheck className="text-blue-500 w-5 h-5" /> : i === 1 ? <Lock className="text-red-500 w-5 h-5" /> : <Users className="text-indigo-500 w-5 h-5" />}
                       {cat.title}
                    </h4>
                    <div className="space-y-4 flex-grow">
                       {cat.items.map((item, idx) => (
                         <div key={idx} className="group">
                            <div className="flex justify-between items-start mb-1">
                               <span className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</span>
                               <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded">{item.level}</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                         </div>
                       ))}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans p-4 md:p-8 text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MODAL SYSTEM: Opportunity Handbook --- */}
        {selectedOpportunity && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="bg-white rounded-[3rem] shadow-2xl w-full max-w-2xl overflow-hidden border border-white/20">
               <div className="p-10 border-b border-slate-100 bg-gradient-to-br from-indigo-50 to-white flex justify-between items-start">
                  <div className="flex items-center gap-5">
                     <div className="p-4 bg-indigo-600 text-white rounded-3xl shadow-xl shadow-indigo-100"><Wand2 className="w-8 h-8" /></div>
                     <div><span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded">商機研發指南</span>
                     <h3 className="text-3xl font-black text-slate-900 leading-tight mt-1">{selectedOpportunity.name}</h3></div>
                  </div>
                  <button onClick={() => setSelectedOpportunity(null)} className="p-3 hover:bg-slate-100 rounded-full transition-all active:scale-90"><X className="w-8 h-8 text-slate-400" /></button>
               </div>
               <div className="p-10 max-h-[60vh] overflow-y-auto custom-scrollbar space-y-10">
                  <section><h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Target className="w-4 h-4" /> 部門研究目標</h4><p className="text-lg font-bold text-slate-800 leading-relaxed italic border-l-4 border-indigo-500 pl-4 bg-indigo-50/30 py-3 rounded-r-xl">"{selectedOpportunity.mission}"</p></section>
                  <section><h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Microscope className="w-4 h-4" /> 實作流程 (Engineering Steps)</h4><div className="space-y-4">{selectedOpportunity.steps.map((step, idx) => (
                           <div key={idx} className="flex gap-5 group"><div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 text-lg font-black shadow-lg">{idx + 1}</div><div className="pt-2 pb-4 flex-grow border-b border-slate-100 group-last:border-0"><p className="text-sm font-bold text-slate-800 leading-relaxed">{step}</p></div></div>
                        ))}</div></section>
                  <section className="bg-amber-50 p-6 rounded-[2rem] border border-amber-100"><h4 className="text-xs font-black text-amber-700 uppercase mb-2 flex items-center gap-2"><Zap className="w-4 h-4" /> 預期商業價值</h4><p className="text-sm text-amber-900 font-medium leading-relaxed">{selectedOpportunity.value}</p></section>
               </div>
               <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end"><button onClick={() => setSelectedOpportunity(null)} className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl active:scale-95">關閉指南</button></div>
            </div>
          </div>
        )}

        {/* --- MODAL SYSTEM: Sub-task Workflow --- */}
        {selectedSubTask && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden border border-white/20">
              <div className="p-8 border-b border-slate-100 bg-gradient-to-br from-white to-slate-50 flex justify-between items-start">
                <div className="flex items-center gap-4"><div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200"><Settings2 className="w-6 h-6" /></div><div><span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">工程實戰指南</span><h3 className="text-2xl font-black text-slate-900 leading-tight">{selectedSubTask.name}</h3></div></div>
                <button onClick={() => setSelectedSubTask(null)} className="p-2.5 hover:bg-slate-100 rounded-full active:scale-90"><X className="w-6 h-6 text-slate-400" /></button>
              </div>
              <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar space-y-8">
                <section><h4 className="text-xs font-black text-slate-400 uppercase mb-3">工程背景描述</h4><p className="text-slate-700 font-medium bg-slate-50 p-4 rounded-2xl border border-slate-100 italic">"{selectedSubTask.context}"</p></section>
                <section><h4 className="text-xs font-black text-slate-400 uppercase mb-4 flex items-center gap-2"><Activity className="w-4 h-4" /> 標準作業流程 (SOP)</h4><div className="space-y-4">{selectedSubTask.workflow.map((step, idx) => (<div key={idx} className="flex gap-4 group"><div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 text-sm font-black shadow-lg group-hover:bg-blue-600 transition-colors">{idx + 1}</div><div className="pt-1.5 border-b border-slate-100 pb-3 flex-grow group-last:border-0"><p className="text-sm font-bold text-slate-800 leading-relaxed">{step}</p></div></div>))}</div></section>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end"><button onClick={() => setSelectedSubTask(null)} className="px-8 py-3 bg-slate-900 text-white font-black rounded-2xl active:scale-95">確認並關閉</button></div>
            </div>
          </div>
        )}

        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-200"><ShieldCheck className="w-3 h-3" /> Division Blueprint v6.0</div>
            <h1 className="text-4xl font-black tracking-tighter text-slate-900">AI 伺服器軟體事業部營運藍圖</h1>
            <p className="text-slate-500 font-medium max-w-2xl text-lg leading-relaxed italic">整合 L1-L12、2026 次世代技術、細化 Roadmap 與合規認證 (Fix)。</p>
          </div>
          <div className="flex flex-wrap gap-1 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
            {[
              { id: 'levels', label: '職能地圖', icon: <LayoutGrid className="w-4 h-4" /> },
              { id: 'nextGenArch', label: '次世代架構', icon: <Server className="w-4 h-4" /> },
              { id: 'roadmap', label: '建設路線', icon: <Calendar className="w-4 h-4" /> },
              { id: 'opportunities', label: '商機研究', icon: <Compass className="w-4 h-4" /> },
              { id: 'compliance', label: '合規認證', icon: <Award className="w-4 h-4" /> }
            ].map((t) => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${activeTab === t.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>{t.icon} {t.label}</button>
            ))}
          </div>
        </header>

        <main>{renderTabContent()}</main>

        <footer className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-widest">
           <div className="flex items-center gap-4"><MonitorCheck className="w-4 h-4" /><span>技術焦點：解耦系統, CMM/PaaS, NVLink-C2C, MLPerf, ZTP, NCS 認證</span></div>
           <div className="flex items-center gap-4"><span>Industry Standard (v6.0 Fix & Final)</span><Shield className="w-4 h-4" /></div>
        </footer>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `.custom-scrollbar::-webkit-scrollbar { width: 6px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; } .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; } .no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}} />
    </div>
  );
};

export default App;