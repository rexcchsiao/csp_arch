import React, { useState } from 'react';
import { 
  Cpu, Terminal, Layers, Activity, ShieldCheck, ChevronRight, Database, 
  Network, Box, Zap, LayoutGrid, Cloud, Settings, Shield, Gauge, Info, 
  X, ExternalLink, BookOpen, Split, Target, Trophy, Calendar, Briefcase,
  TrendingUp, ClipboardCheck, Factory, Truck, Code, Boxes, FileText, Settings2,
  Rocket, Binary, Microscope, MonitorCheck, HardDrive, Thermometer, Radio,
  Lock, Award, Users
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('levels');
  const [activeLevel, setActiveLevel] = useState('L1');
  const [selectedSubTask, setSelectedSubTask] = useState(null);

  // Certification Data
  const certCategories = [
    {
      title: "產品技術認證 (Product Certs)",
      icon: <Award className="w-6 h-6 text-amber-500" />,
      items: [
        { name: "NVIDIA-Certified Systems (NCS)", level: "L10", desc: "驗證硬體效能、管理能力、擴充性與安全性，代表能運行全套 NVIDIA AI Enterprise。", value: "進入 Tier-1 客戶採購清單的門票。" },
        { name: "OCP (Open Compute Project) Acceptance", level: "L11", desc: "符合開放計算標準的機櫃設計，強調高效能與節能效率。", value: "針對 Hyper-scale 客戶 (Meta/MSFT) 的標準。" },
        { name: "VMware Ready / Red Hat Certified", level: "L9", desc: "確保虛擬化與作業系統層級的驅動相容性。", value: "針對企業級私有雲市場的基礎。" }
      ]
    },
    {
      title: "資安與治理認證 (Security & Compliance)",
      icon: <Lock className="w-6 h-6 text-blue-500" />,
      items: [
        { name: "NIST 800-193 (PFR)", level: "L6", desc: "韌體彈性回復標準 (Platform Firmware Resiliency)，防止 BIOS/BMC 被篡改。", value: "數據中心硬體安全的國際標準。" },
        { name: "ISO 27001 / SOC 2", level: "L1-L12", desc: "軟體開發生命週期 (SDLC) 與數據中心運維的資訊安全管理系統。", value: "大型企業對軟體服務商的合規門檻。" },
        { name: "IEC 62443", level: "L10", desc: "工業自動化與控制系統的網路安全，適用於 OT 整合環境。", value: "進入邊緣計算或工業 AI 的關鍵。" }
      ]
    },
    {
      title: "團隊技術認證 (Personnel Skills)",
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      items: [
        { name: "NVIDIA Certified Associate / Professional", level: "L12", desc: "證明團隊具備 GPU 算力調配、Triton 部署與 NCCL 優化能力。", value: "提升客戶對技術支援 (FAE) 的信任度。" },
        { name: "CNCF CKA / CKAD (Kubernetes)", level: "L11", desc: "Kubernetes 管理員認證，處理 AI 容器編排的核心技術。", value: "實現軟體定義數據中心 (SDDC) 的關鍵人力。" },
        { name: "Red Hat RHCE / LPIC", level: "L9", desc: "資深 Linux 系統工程師認證，確保 OS 調優與核心穩定度。", value: "底層 BSP 與系統整合的質量保證。" }
      ]
    }
  ];

  // Sub-task Workflow Knowledge Base
  const subTaskWorkflows = {
    "ATE 腳本與微控制器 (MCU) 測試代碼開發": {
      context: "在 L1-L5 階段，軟體需支援生產線的自動化測試 (ATE)，確保電路板上的數千個焊點連通性。",
      workflow: [
        "腳本開發：撰寫 Python 或 C 測試腳本，透過 JTAG 介面執行邊界掃描。",
        "通訊驗證：測試 I2C、SMBus 與 GPIO 引腳電位，確認零件正確連通。",
        "資料上傳：將測試 Log 格式化並串接上傳至 MES 生產資料庫。"
      ],
      links: [{ name: "JTAG 邊界掃描標準", url: "https://www.xjtag.com/" }]
    },
    "PLDM/MCTP 實作：獲取加速器健康數據": {
      context: "這是管理高效能加速器（GPU/NPU）的核心。透過標準協定實作帶外 (Out-of-band) 監控。",
      workflow: [
        "建立通訊鏈路：在 BMC 配置 PCIe-VDM 或 SMBus 傳輸通道。",
        "實作 MCTP Stack：處理封包的分段與重組邏輯。",
        "PLDM 指標映射：將功耗、溫度數據映射至 Redfish 資源樹。"
      ],
      links: [{ name: "DMTF PLDM 規範", url: "https://www.dmtf.org/standards/pldm" }]
    },
    "MLPerf 基準測試運行與系統極限調優": {
      context: "MLPerf 為全球公認 AI 效能標竿，團隊需針對測試結果優化系統內核與編譯參數。",
      workflow: [
        "環境對齊：依照 Submission Rule 部署標準化容器環境。",
        "NCCL 調優：針對 NVLink 拓樸生成最優化通訊路徑圖。",
        "瓶頸偵測：使用 Nsight Systems 追蹤 GPU 與記憶體間的通訊延遲。"
      ],
      links: [{ name: "MLPerf Submission Guide", url: "https://mlcommons.org/" }]
    }
  };

  const lLevels = [
    { id: 'L1', name: '零件製造', group: 'MFG/FW', tasks: ["定義零件識別資料規格 (PN/SN)", "定義 FRU 與 EEPROM 欄位規格", "建立 Traceability 追溯資料 Schema"], tech: ["PLM", "I2C Spec"], deliverable: ["零件識別 Schema"] },
    { id: 'L2', name: '零件子組裝', group: 'MFG/FW', tasks: ["模組級版本管理規則建立", "子模組燒錄與校驗工具介面開發", "定義模組與整機關聯規範"], tech: ["Python", "Git"], deliverable: ["模組管理規範"] },
    { id: 'L3', name: '機構件整合', group: 'FW/SYS', tasks: ["定義插槽與 Fan Zone 命名規範", "建立 Inventory 拓樸與 Thermal Zone 對應", "確保 WebUI 命名與實體標籤一致"], tech: ["Redfish", "IPMI"], deliverable: ["命名規範書"] },
    { id: 'L4', name: '套件組裝', group: 'FW/QA', tasks: ["準備 Sensor Map 與 I2C 位址表", "開發板級早期診斷與 Log 擷取工具", "建立 Bring-up Checklist 初版"], tech: ["ASPEED SDK", "Serial"], deliverable: ["Bring-up 手冊"] },
    { id: 'L5', name: '機構完整組裝', group: 'MFG/FW', tasks: ["I/O 測試腳本與前面板 LED 驗證", "ATE 腳本與微控制器 (MCU) 測試代碼開發", "定義 Fail Code 分類與上傳邏輯"], tech: ["Bash", "JTAG"], deliverable: ["站測 SOP v1"] },
    { id: 'L6', name: '主機板整合', group: 'FW/QA', tasks: ["執行單機 Bring-up (BIOS/BMC)", "硬體抽象層 (HAL) 與 Device Tree 撰寫", "Firmware Update Path 與 Recovery 實作"], tech: ["UEFI", "OpenBMC"], deliverable: ["BIOS/BMC Working Build"] },
    { id: 'L7', name: '擴充卡整合', group: 'SYS/FW', tasks: ["完成 GPU/NIC PCIe Enablement", "PLDM/MCTP 實作：獲取加速器健康數據", "管理 Driver 與 Firmware 相容性矩陣"], tech: ["MCTP", "PCIe Gen6"], deliverable: ["相容性矩陣報告"] },
    { id: 'L8', name: '儲存裝置整合', group: 'SYS/FW', tasks: ["整合 NVMe 驅動與 Boot Device Policy", "SNAP (儲存網路加速) 與遠端存取開發", "Smart PSU 整合與電源負載平衡 (PMBus)"], tech: ["NVMe-oF", "PMBus"], deliverable: ["Storage Matrix"] },
    { id: 'L9', name: 'CPU與記憶體整合', group: 'SYS/FW', tasks: ["Memory Training 插槽頻率優化", "驗證 NUMA 拓樸與 ACPI 資訊正確性", "建立 Golden OS Image 基礎鏡像"], tech: ["Microcode", "Kernel Tuning"], deliverable: ["Golden Image v1"] },
    { id: 'L10', name: '整機完整測試', group: 'MFG/SYS', tasks: ["建立 MP-ready 韌體與軟體 BOM", "PID 控制演算法：動態流速與風扇管理", "開發全自動化 Acceptance Test Suite (ATS)"], tech: ["Ansible", "PID Control"], deliverable: ["MP Release PKG"] },
    { id: 'L11', name: '機架級整合', group: 'SOL/SYS', tasks: ["Rack Inventory 自動發現與對齊", "液冷系統通訊 (CDU Integration) 與 Modbus 整合", "機架級網絡擁塞控制 (Congestion Control)"], tech: ["MAAS", "Modbus TCP"], deliverable: ["Rack Dashboard"] },
    { id: 'L12', name: '叢集級整合', group: 'SOL/SVC', tasks: ["部署 K8s/Slurm 叢集與 GPU Plugin 整合", "MLPerf 基準測試運行與系統極限調優", "預測性維護 (Predictive Maintenance) 實作"], tech: ["Kubernetes", "MLPerf"], deliverable: ["效能白皮書"] }
  ];

  const handleSubTaskClick = (taskName) => {
    const workflow = subTaskWorkflows[taskName];
    if (workflow) {
      setSelectedSubTask({ name: taskName, ...workflow });
    } else {
      setSelectedSubTask({ 
        name: taskName, 
        context: "此工程項目涉及該階段的核心研發或生產驗證，目前正在細化標準化步驟。",
        workflow: ["分析規格需求與通訊協定", "準備測試開發環境", "撰寫原型代碼並執行初步驗證", "進行跨設備兼容性測試", "產出技術手冊與自動化部署包"],
        links: []
      });
    }
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'levels':
        const activeLevelData = lLevels.find(l => l.id === activeLevel) || lLevels[0];
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-2 max-h-[650px] overflow-y-auto pr-2 custom-scrollbar">
              {lLevels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setActiveLevel(lvl.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    activeLevel === lvl.id ? 'bg-white border-blue-500 shadow-lg ring-1 ring-blue-500' : 'bg-white/60 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-widest">{lvl.id}</span>
                    <span className="text-[9px] text-slate-400 font-bold uppercase">{lvl.group}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{lvl.name}</h4>
                </button>
              ))}
            </div>
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 h-full flex flex-col shadow-sm">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-3xl font-black text-slate-900">{activeLevelData.name}</h2>
                    <p className="text-sm text-slate-500 font-medium mt-1 uppercase tracking-wider">{activeLevelData.group} 分級工程</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100"><Code className="w-6 h-6 text-slate-400" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                   <div className="space-y-6">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><ClipboardCheck className="w-4 h-4" /> 工程項目 (點擊詳解)</h3>
                        <ul className="space-y-3">
                          {activeLevelData.tasks.map((task, idx) => (
                            <li key={idx} onClick={() => handleSubTaskClick(task)} className="flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all cursor-pointer group active:scale-95">
                              <div className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" />
                                <span className="text-sm font-bold text-slate-700 group-hover:text-blue-700 leading-snug">{task}</span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                            </li>
                          ))}
                        </ul>
                   </div>
                   <div className="space-y-8">
                      <div>
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Database className="w-4 h-4" /> 此分級技術棧</h3>
                        <div className="flex flex-wrap gap-2">
                          {activeLevelData.tech.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase tracking-wider">{tech}</span>
                          ))}
                        </div>
                      </div>
                      <div className="p-6 bg-blue-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 opacity-10"><Trophy className="w-24 h-24 text-white" /></div>
                        <h3 className="text-xs font-black uppercase mb-4 tracking-widest">核心交付指標</h3>
                        <div className="space-y-2 relative z-10">
                          {activeLevelData.deliverable.map((d, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-bold"><ShieldCheck className="w-4 h-4 text-blue-200" /> {d}</div>
                          ))}
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'compliance':
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-r from-slate-900 to-indigo-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10"><Shield className="w-32 h-32" /></div>
              <h2 className="text-3xl font-black mb-4 flex items-center gap-3"><Award className="w-8 h-8 text-amber-400" /> 合規與技術認證體系</h2>
              <p className="text-slate-300 font-medium max-w-3xl leading-relaxed">建立從「產品」至「團隊」的信任矩陣。針對高效能 AI 集群環境，完成 NVIDIA NCS 與 NIST 800-193 認證是事業部進入國際市場的技術門檻。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certCategories.map((cat, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-200">{cat.icon}</div>
                    <h3 className="font-black text-slate-800 uppercase tracking-widest text-sm">{cat.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {cat.items.map((item, i) => (
                      <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-black text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{item.name}</h4>
                          <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-2 py-0.5 rounded">{item.level}</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed mb-3">{item.desc}</p>
                        <div className="pt-3 border-t border-slate-50 flex items-start gap-2">
                           <Zap className="w-3 h-3 text-amber-500 flex-shrink-0 mt-0.5" />
                           <p className="text-[10px] font-bold text-slate-700 leading-tight">商業價值：{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-3xl flex flex-col md:flex-row gap-6 items-center">
               <div className="p-3 bg-white rounded-full shadow-sm"><Info className="w-6 h-6 text-amber-600" /></div>
               <div>
                  <h4 className="font-black text-amber-900 mb-1">合規性建議：NCS 認證先行</h4>
                  <p className="text-xs text-amber-800 leading-relaxed font-medium">對於剛起步的 BU，建議優先啟動 <b>NVIDIA-Certified Systems (NCS)</b> 的測試流程。這不僅能驗證 L6-L10 的研發成果，更能確保在 NVIDIA AI Enterprise 生態系中的優先支援權。</p>
               </div>
            </div>
          </div>
        );
      case 'devJourney':
        const devJourneyPhases = [
          { phase: 'Phase 0', title: '選平台與規格定義', target: '鎖定晶片與通訊架構。', actions: ["研讀電氣規範", "定義軟體版本支援矩陣", "評估機櫃液冷上限"] },
          { phase: 'Phase 1', title: '系統設計開發', target: '規劃主板引腳與通訊拓樸。', actions: ["撰寫 BMC 溫控演算法", "定義 DPU Offloading 目標", "設計機櫃級聯動邏輯"] },
          { phase: 'Phase 2', title: 'Bring-up 與 BSP', target: '單機啟動與驅動適配。', actions: ["UEFI 與 BIOS 初始化優化", "MCTP/PLDM 健康指標監測", "Golden Image 鏡像製作"] },
          { phase: 'Phase 3', title: '機架級整合優化', target: '完成網路與儲存加速。', actions: ["SNAP 遠端儲存掛載測試", "IB 擁塞控制參數調優", "液冷壓力測試驗收"] },
          { phase: 'Phase 4', title: 'AI 平台與方案', target: '解決方案層級交付。', actions: ["K8s GPU Operator 部署", "LLM 基準模型加載", "MLPerf 基準調優"] },
          { phase: 'Phase 5', title: '量產認證與運維', target: '數據中心級持續服務。', actions: ["與 MES 整合 L10 站測", "遙測看板 (Telemetry) 建立", "NVIDIA NCS 認證通過"] }
        ];
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10"><Rocket className="w-32 h-32 rotate-12" /></div>
              <h2 className="text-3xl font-black mb-4 flex items-center gap-3"><Binary className="w-8 h-8 text-blue-400" /> AI Server 軟體開發實戰路徑</h2>
              <p className="text-slate-400 font-medium max-w-3xl leading-relaxed">整合零件、單機、機櫃、至叢集的開發路徑。將複雜的 AI 基礎設施轉化為標準化的工程週期。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devJourneyPhases.map((p, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col group">
                  <div className="flex items-center justify-between mb-4"><span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">{p.phase}</span><Info className="w-4 h-4 text-slate-300" /></div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{p.title}</h3>
                  <div className="flex-grow space-y-3 mb-6">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">核心工程任務</h4>
                    {p.actions.map((act, i) => (
                      <div key={i} className="flex items-start gap-2"><div className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" /><span className="text-xs font-bold text-slate-700 leading-snug">{act}</span></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'roadmap':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative pl-8 space-y-12 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-1 before:bg-slate-200">
              {[
                { phase: '0–6 月', title: '地基建設', goal: 'L1-L6 Bring-up 與基礎 ATE 建設', milestone: '首板穩定啟動' },
                { phase: '6–18 月', title: '系統產品化', goal: 'L7-L10 整合、MCTP 監控與量產測試', milestone: '首機 MP 通過' },
                { phase: '18–36 月', title: '解決方案交付', goal: 'L11-L12 叢集部署、MLPerf 優化與維運平台', milestone: '具備叢集級競爭力' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[2.35rem] top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md z-10" />
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <span className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-black uppercase">{step.phase}</span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 mt-2 font-medium">{step.goal}</p>
                    <p className="text-xs text-blue-600 font-bold mt-2 tracking-tight flex items-center gap-2"><Trophy className="w-3 h-3" /> 目標里程碑：{step.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'governance':
        const kpiData = [
          { label: '開發效率', kpi: 'Bring-up Cycle', trend: '-25% 時間', icon: <Cpu className="w-5 h-5" /> },
          { label: '量產良率', kpi: 'Flashing Success', trend: '99.9% 成功', icon: <MonitorCheck className="w-5 h-5" /> },
          { label: '解決方案', kpi: 'MLPerf Rank', trend: '業界前茅', icon: <TrendingUp className="w-5 h-5" /> }
        ];
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {kpiData.map((k, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl mb-3 inline-block">{k.icon}</div>
                  <h5 className="text-sm font-bold text-slate-800 mb-1">{k.label}</h5>
                  <span className="text-xs font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{k.trend}</span>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <Shield className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 rotate-12" />
                <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-blue-400 uppercase"><ClipboardCheck className="w-6 h-6" /> 治理與 Build vs Buy 戰略</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                   <div className="space-y-4">
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">針對新成立事業部，建議集中精力自研具備競爭力的核心軟體模組。</p>
                      <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                         <h4 className="text-xs font-black uppercase mb-2 text-blue-400">自研核心 (In-house)</h4>
                         <p className="text-xs text-slate-200">MCTP 遙測棧、PID 溫控邏輯、量產測試 ATE 腳本、效能基準優化套件。</p>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                         <h4 className="text-xs font-black uppercase mb-2 text-slate-400">合作引進 (Partner)</h4>
                         <p className="text-xs text-slate-300">BIOS 底層核心、K8s 標準發行版、商業資安掃描平台。</p>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans p-4 md:p-8 text-slate-900">
      <div className="max-w-7xl mx-auto">
        {selectedSubTask && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 border border-white/20">
              <div className="p-8 border-b border-slate-100 bg-gradient-to-br from-white to-slate-50 flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200"><Settings2 className="w-6 h-6" /></div>
                  <div><span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">工程實戰指南</span>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">{selectedSubTask.name}</h3></div>
                </div>
                <button onClick={() => setSelectedSubTask(null)} className="p-2.5 hover:bg-slate-100 rounded-full transition-all active:scale-90"><X className="w-6 h-6 text-slate-400" /></button>
              </div>
              <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar space-y-8">
                <section>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2"><FileText className="w-3.5 h-3.5" /> 工作背景描述</h4>
                  <p className="text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-2xl border border-slate-100 italic">"{selectedSubTask.context}"</p>
                </section>
                <section>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><TrendingUp className="w-3.5 h-3.5" /> 標準作業流程 (SOP)</h4>
                  <div className="space-y-4">
                    {selectedSubTask.workflow.map((step, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 text-sm font-black shadow-lg shadow-slate-200 group-hover:bg-blue-600 transition-colors">{idx + 1}</div>
                        <div className="pt-1.5 border-b border-slate-100 pb-3 flex-grow group-last:border-0"><p className="text-sm font-bold text-slate-800 leading-relaxed">{step}</p></div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end"><button onClick={() => setSelectedSubTask(null)} className="px-8 py-3 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95">確認並關閉指南</button></div>
            </div>
          </div>
        )}

        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-200"><ShieldCheck className="w-3 h-3" /> Division Blueprint v5.1</div>
            <h1 className="text-4xl font-black tracking-tighter text-slate-900">AI 伺服器軟體事業部營運藍圖</h1>
            <p className="text-slate-500 font-medium max-w-2xl text-lg leading-relaxed italic">「去品牌化、邁向產業標準化：整合 L1-L12 研發、合規與認證體系。」</p>
          </div>
          <div className="flex flex-wrap gap-1 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            {[
              { id: 'levels', label: '職能地圖', icon: <LayoutGrid className="w-4 h-4" /> },
              { id: 'devJourney', label: '開發 SOP', icon: <Rocket className="w-4 h-4" /> },
              { id: 'compliance', label: '合規與認證', icon: <Award className="w-4 h-4" /> },
              { id: 'roadmap', label: '建設路線', icon: <Calendar className="w-4 h-4" /> },
              { id: 'governance', label: '治理 KPI', icon: <ClipboardCheck className="w-4 h-4" /> }
            ].map((t) => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === t.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>{t.icon} {t.label}</button>
            ))}
          </div>
        </header>

        <main>{renderTabContent()}</main>

        <footer className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-widest">
           <div className="flex items-center gap-4"><MonitorCheck className="w-4 h-4" /><span>核心認證：NVIDIA NCS, OCP, NIST 800-193, CNCF</span></div>
           <div className="flex items-center gap-4"><span>Industry Standard Compliant</span><Shield className="w-4 h-4" /></div>
        </footer>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `.custom-scrollbar::-webkit-scrollbar { width: 6px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; } .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }`}} />
    </div>
  );
};

export default App;