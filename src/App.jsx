import React, { useState } from 'react'; import { BarChart3 } from 'lucide-react'; import CompetitiveLandscapeView from './CompetitiveLandscapeView'; import SoftwareDifferentiationView from './SoftwareDifferentiationView'; import SovereignAIOpportunityView from './SovereignAIOpportunityView'; import ExecutiveSummaryView from './ExecutiveSummaryView'; import SoftwareRoadmapView from './SoftwareRoadmapView';
import { 
  Cpu, 
  Terminal, 
  Layers, 
  Activity, 
  ShieldCheck, 
  ChevronRight, 
  Database, 
  Network, 
  Box, 
  Zap,
  LayoutGrid,
  Cloud,
  Settings,
  Shield,
  Gauge,
  Info,
  X,
  ExternalLink,
  BookOpen,
  Split,
  Target,
  Trophy
} from 'lucide-react';

const App = () => {
  const [activeDept, setActiveDept] = useState('firmware');
  const [selectedDetail, setSelectedDetail] = useState(null);

  const lLevels = [
    { 
      id: 'L9', 
      label: 'L9 System', 
      desc: '系統整合階段：完成主機板與核心組件組裝，重點在於 BIOS/BMC 韌體燒錄與單機硬體功能驗證。' 
    },
    { 
      id: 'L10', 
      label: 'L10 Assembly', 
      desc: '整機組裝階段：安裝所有外設元件（如 GPU 加速卡、網路卡），並載入 OS 與執行系統級應力測試。' 
    },
    { 
      id: 'L11', 
      label: 'L11 Rack', 
      desc: '機架集成階段：將多台伺服器整合至機櫃，完成 PDU 布線、網路切換器設定與集群軟體初步部署。' 
    },
    { 
      id: 'L12', 
      label: 'L12 Solution', 
      desc: '解決方案交付：根據客戶特定需求進行軟體堆疊優化、安全性修補，並完成數據中心現場部署準備。' 
    }
  ];

  const responsibilityDetails = {
    "NVIDIA BlueField DPU 韌體客製化與整合": {
      what: "針對 NVIDIA 平台的 DPU 進行 DOCA 開發。若換成 AMD 平台，則需對接 Pensando DPU。這屬於平台高度相關工作。",
      why: "DPU 卸載邏輯需深度結合硬體架構，影響數據處理吞吐量。",
      platform: "NVIDIA / AMD Pensando",
      links: [{ name: "NVIDIA DOCA SDK", url: "https://developer.nvidia.com/networking/doca" }]
    },
    "IOC/PCIe Switch 韌體設定與 CXL 新技術導入": {
      what: "設定 PCIe 拓撲。此部分邏輯通用（依據 PCIe 規範），但暫存器設定隨晶片供應商（Broadcom/Microchip）而異。",
      why: "這是系統穩定通訊的基石，影響 GPU P2P 傳輸效能。",
      platform: "晶片商通用 (Standard PCIe)",
      links: [{ name: "PCI-SIG", url: "https://pcisig.com/" }]
    },
    "BIOS/BMC 整合開發與客戶特定散熱/電源控制韌體": {
      what: "BIOS 需分別為 Intel (Sapphire Rapids+) 與 AMD (Genoa+) 進行開發；BMC 透過 OpenBMC 實現跨平台架構整合。",
      why: "不同 CPU 的記憶體訓練與初始化邏輯完全不同，散熱控制直接影響機器壽命。",
      platform: "Intel / AMD (CPU 相關)",
      links: [{ name: "OpenBMC", url: "https://openbmc.org/" }]
    },
    "Ubuntu/RHEL for Server 客製化載入與 Kernel Patch 應用": {
      what: "基礎 OS 可通用。但針對不同 GPU 需掛載不同 Kernel Module（NVIDIA 為 nvidia.ko，AMD 為 amdgpu）。",
      why: "提供一致的環境給上層應用，確保系統安全性與資源排程效率。",
      platform: "OS 層通用",
      links: []
    },
    "Kubernetes 叢集部署與 Helm Charts 客製化管理": {
      what: "這是最強大的抽象層。透過 Device Plugin 讓 K8s 同時管理不同平台的 GPU 資源，實現混合部署。",
      why: "客戶不需要知道底層是哪家顯卡，只需透過標準 API 呼叫算力。",
      platform: "平台無關 (Agnostic)",
      links: [{ name: "K8s Device Plugins", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-resource-device-plugins/" }]
    },
    "NVIDIA CUDA/cuDNN/TensorRT 運行時驗證與安裝腳本": {
      what: "NVIDIA 專屬工具鏈。若為 AMD，則需安裝 ROCm 堆疊與 MIOpen。團隊需具備兩套技術棧的維護能力。",
      why: "軟體棧的完整度決定了 AI 模型的執行成功率。",
      platform: "NVIDIA (CUDA) / AMD (ROCm)",
      links: [{ name: "NVIDIA TensorRT", url: "https://developer.nvidia.com/tensorrt" }, { name: "AMD ROCm", url: "https://www.amd.com/en/developer/rocm-hub.html" }]
    },
    "GPU/Server/Networking 效能 Profiling (Nsight, perf)": {
      what: "效能診斷工具高度依賴廠商。NVIDIA 使用 Nsight，AMD 使用 RGP (Radeon GPU Profiler)。",
      why: "要壓榨出最後 10% 效能，必須使用原廠專屬工具。",
      platform: "平台高度相關",
      links: [{ name: "Nsight Systems", url: "https://developer.nvidia.com/nsight-systems" }]
    }
  };

  const departments = {
    firmware: {
      title: "韌體與驅動團隊 (Firmware & Drivers)",
      stage: "L9 - System Level",
      icon: <Cpu className="w-6 h-6" />,
      description: "底層硬體管理的核心，受 CPU (Intel/AMD) 與 GPU 品牌直接影響。",
      responsibilities: [
        "NVIDIA BlueField DPU 韌體客製化與整合",
        "IOC/PCIe Switch 韌體設定與 CXL 新技術導入",
        "BIOS/BMC 整合開發與客戶特定散熱/電源控制韌體",
        "Python/Bash 韌體燒錄與診斷小工具開發"
      ],
      techStack: ["C/C++", "OpenBMC", "PCIe Gen5/6", "DPU SDK"],
      strategy: "需依平台(Intel/AMD)分設 BIOS 小組，但 BMC 應統一架構。",
      outcomes: "穩定的硬體基底，通過 L9 全系統壓力測試，具備 99.9% 啟動成功率。"
    },
    system: {
      title: "系統軟體團隊 (System SW)",
      stage: "L10 - Assembly Level",
      icon: <Terminal className="w-6 h-6" />,
      description: "整合不同廠商的驅動程式，將零碎的硬體轉化為穩定的作業系統環境。",
      responsibilities: [
        "Ubuntu/RHEL for Server 客製化載入與 Kernel Patch 應用",
        "儲存堆疊 (NVMe-oF) 與高速網路 (RoCE/InfiniBand) 驅動適配",
        "生產診斷 (Diag) 工具開發，支援工廠量產燒錄",
        "高密度 GPU 配置下的 Kernel 效能調優"
      ],
      techStack: ["Linux Kernel", "NVMe-oF", "RoCE", "Mellanox Drivers"],
      strategy: "建立「通用核心 (Core)」與「平台插件 (Plugin)」機制。",
      outcomes: "完成 L10 整機組裝驗證，交付最佳化的 OS 與量產測試自動化套件。"
    },
    orchestration: {
      title: "容器與編排團隊 (Container & Orchestration)",
      stage: "L11 - Rack Level",
      icon: <Cloud className="w-6 h-6" />,
      description: "這是整套架構中最能做到「平台無關」的部分，也是最具價值的兼容層。",
      responsibilities: [
        "Kubernetes 叢集部署與 Helm Charts 客製化管理",
        "雲端 OS (OpenStack) 載入與虛擬網路驗證",
        "L11 機架級電纜連接驗證與叢集測試軟體",
        "客戶特定 Docker 鏡像預載，確保交貨即用"
      ],
      techStack: ["Kubernetes", "Docker", "Helm", "Ansible"],
      strategy: "100% 統一團隊，透過 K8s Operators 屏蔽底層差異。",
      outcomes: "可即時上線的 L11 機架級環境，支援多租戶 GPU 資源隔離。"
    },
    framework: {
      title: "AI/ML 框架團隊 (AI Frameworks)",
      stage: "L12 - Solution Level",
      icon: <Layers className="w-6 h-6" />,
      description: "對應不同算力平台的軟體棧 (CUDA vs ROCm)，直接服務 AI 應用開發者。",
      responsibilities: [
        "NVIDIA CUDA/cuDNN/TensorRT 運行時驗證與安裝腳本",
        "GPU 虛擬化管理 (MIG, Multi-instance GPU) 整合",
        "生成式 AI (GenAI) 工具與 OS 安全性修補驗證",
        "私有雲 AI 服務部署驗證與計費系統整合"
      ],
      techStack: ["CUDA", "ROCm", "TensorRT", "MIG/vGPU"],
      strategy: "需具備跨廠商 SDK 整合能力，或分為 NVIDIA 與 AMD 專項驗證。",
      outcomes: "通過 L12 客戶模型驗證，交付 Ready-to-use 的 AI 推論與訓練環境。"
    },
    performance: {
      title: "效能優化團隊 (Performance Tuning)",
      stage: "L12+ Optimization",
      icon: <Gauge className="w-6 h-6" />,
      description: "壓榨硬體極限，需精通不同晶片架構的底層通訊邏輯。",
      responsibilities: [
        "GPU/Server/Networking 效能 Profiling (Nsight, perf)",
        "Power/Thermal 瓶頸分析與韌體參數調校",
        "L12 階段系統優化，提升叢集吞吐量 (Throughput)",
        "客戶 On-site 除錯與硬體配置軟體參數優化"
      ],
      techStack: ["Nsight", "RGP", "NCCL", "RCCL"],
      strategy: "高度依賴原廠專家與工具，建議按專案 (Project) 性質組隊。",
      outcomes: "超越公版 15-20% 的運算效能，解決客戶端的極端效能瓶頸。"
    },
    qa_devops: {
      title: "測試與運維團隊 (QA & DevOps)",
      stage: "Full Lifecycle",
      icon: <ShieldCheck className="w-6 h-6" />,
      description: "自動化流程建立，不論平台如何更迭，流程必須標準化。",
      responsibilities: [
        "CI/CD Pipeline 建置與自動化燒錄測試測試",
        "機架/多機架級故障注入測試與網絡模擬",
        "Prometheus/Grafana 監控工具部署與日誌整合",
        "客戶 POC 支援與技術文件交付 (Manuals)"
      ],
      techStack: ["Jenkins", "Prometheus", "Terraform", "Security Scanners"],
      strategy: "全平台通用，是公司的流程標準制定者。",
      outcomes: "零故障的交付品質與 24/7 自動化監控解決方案。"
    }
  };

  const handleRespClick = (resp) => {
    const detail = responsibilityDetails[resp];
    if (detail) {
      setSelectedDetail({ name: resp, ...detail });
    }
  };

  const getActiveIndex = () => {
    return Object.keys(departments).indexOf(activeDept);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Detail Modal Overlay */}
        {selectedDetail && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-slate-100 flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Split className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight pr-4">{selectedDetail.name}</h3>
                </div>
                <button onClick={() => setSelectedDetail(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 rounded-md text-xs font-bold border border-amber-100">
                  <Info className="w-3 h-3" /> 平台適配建議：{selectedDetail.platform}
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">實戰工作內容 (How-to)</h4>
                  <p className="text-slate-700 leading-relaxed text-sm">{selectedDetail.what}</p>
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">為什麼重要 (Value)</h4>
                  <p className="text-slate-700 leading-relaxed text-sm font-medium">{selectedDetail.why}</p>
                </div>
                {selectedDetail.links.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 text-blue-600">參考權威資源</h4>
                    <div className="flex flex-col gap-2">
                      {selectedDetail.links.map((link, idx) => (
                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-600 font-bold hover:underline">
                          <ExternalLink className="w-3 h-3" /> {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <button onClick={() => setSelectedDetail(null)} className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
                  我知道了
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-3 tracking-tight flex items-center gap-4">
              <div className="p-2 bg-blue-600 rounded-lg shadow-lg">
                <LayoutGrid className="text-white w-8 h-8" />
              </div>
              Foxconn EBG AI Server SW 研發架構
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl font-medium">
              整合跨平台兼容、職能詳解、交付目標與戰略佈局，提供 L9 - L12 端到端解決方案。
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" /> Full-Stack Unit
            </span>
          </div>
        </div>

        {/* L-Level Progress Bar with Tooltips */}
        <div className="mb-16 grid grid-cols-4 gap-4">
          {lLevels.map((level, i) => (
            <div key={i} className="relative group">
              {/* Tooltip Popup */}
              <div className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-slate-900 text-white text-xs rounded-xl shadow-xl z-50 transition-all duration-200 opacity-0 group-hover:opacity-100">
                <p className="font-bold text-blue-400 mb-1 flex items-center gap-1">
                  <Info className="w-3 h-3" /> {level.id} 階段定義
                </p>
                <p className="leading-relaxed text-slate-300">{level.desc}</p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900" />
              </div>

              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-blue-500 transition-all duration-1000`} 
                  style={{ width: getActiveIndex() >= i ? '100%' : '0%' }}
                />
              </div>
              <span className="mt-3 flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-tighter cursor-help hover:text-blue-600 transition-colors">
                {level.label}
                <Info className="w-3 h-3 opacity-50" />
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            {Object.entries(departments).map(([key, dept]) => (
              <button
                key={key}
                onClick={() => setActiveDept(key)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  activeDept === key 
                  ? 'bg-white border-blue-500 shadow-xl shadow-blue-100 ring-2 ring-blue-500/10' 
                  : 'bg-white/80 border-slate-200 hover:border-blue-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`p-3 rounded-xl transition-colors ${
                    activeDept === key ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50'
                  }`}>
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold leading-tight ${activeDept === key ? 'text-slate-900' : 'text-slate-600'}`}>
                      {dept.title.split(' (')[0]}
                    </h3>
                    <p className={`text-[10px] font-bold uppercase mt-1 tracking-widest ${activeDept === key ? 'text-blue-600' : 'text-slate-400'}`}>
                      {dept.stage}
                    </p>
                  </div>
                </div>
              </button>
            ))}
            
            {/* Strategy Sidebar Box */}
            <div className="p-5 bg-slate-900 rounded-3xl text-white shadow-lg">
              <h4 className="font-black mb-3 flex items-center gap-2 text-sm uppercase text-blue-400">
                <Split className="w-4 h-4" /> 跨平台核心策略
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                針對無經驗團隊，採 <b>"70/30 法則"</b>：70% 投入通用層 (K8s/Linux)，30% 深入平台專項 (CUDA/BIOS)。
              </p>
              <div className="bg-slate-800 rounded-xl p-3 border border-slate-700">
                <p className="text-[10px] font-bold text-slate-500 mb-1">當前技術焦點</p>
                <p className="text-xs text-slate-200">NVLink 通訊優化、OpenBMC 跨平台適配、L12 推論延遲壓減。</p>
              </div>
            </div>
          </div>

          {/* Detail Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-h-[600px] flex flex-col">
              {/* Dept Header */}
              <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {departments[activeDept].stage}
                  </span>
                  <div className="flex items-center gap-1.5 text-blue-600">
                    <Zap className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Strategy: {departments[activeDept].strategy}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">{departments[activeDept].title}</h2>
                <p className="text-slate-600 font-medium leading-relaxed">{departments[activeDept].description}</p>
              </div>

              {/* Dept Content Body */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                {/* Responsibilities */}
                <div>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Settings className="w-4 h-4" /> 核心工作職能 (點擊詳解)
                  </h3>
                  <ul className="space-y-3">
                    {departments[activeDept].responsibilities.map((item, idx) => (
                      <li 
                        key={idx} 
                        onClick={() => handleRespClick(item)}
                        className="p-3 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all cursor-pointer flex justify-between items-center group active:scale-95"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                          <span className="text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors">{item}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes & Tech */}
                <div className="space-y-8">
                  {/* Outcomes Section */}
                  <div className="p-6 bg-blue-600 rounded-3xl text-white shadow-lg shadow-blue-100 border border-blue-500 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 opacity-10">
                      <Target className="w-24 h-24 text-white" />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Trophy className="w-4 h-4" /> 關鍵交付產出 (Deliverables)
                    </h3>
                    <p className="text-sm font-bold leading-relaxed relative z-10">
                      {departments[activeDept].outcomes}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Database className="w-4 h-4" /> 推薦技術棧 (Tech Stack)
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {departments[activeDept].techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                <div className="text-xs font-bold text-slate-400 italic flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-500" /> 各組成員需包含資深架構師與研發工程師
                </div>
                <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95">
                  下載完整組織手冊
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-600 rounded-3xl p-7 text-white shadow-xl shadow-blue-200 group hover:-translate-y-1 transition-transform">
            <h4 className="font-black text-xl mb-3 flex items-center gap-2">
              <Shield className="w-6 h-6" /> L9-L10: 關鍵穩定性
            </h4>
            <p className="text-blue-100 text-sm leading-relaxed">
              這是產品的「生命線」。重點在於<b>韌體穩定度</b>與<b>硬體相容性</b>。若底層驅動或 PCIe 切換不穩，後續 L12 的效能再好也無法順利出貨。
            </p>
            <div className="mt-4 pt-4 border-t border-blue-500/50 text-[10px] font-bold uppercase tracking-widest text-blue-200">
              Focus: Zero-Error Firmware
            </div>
          </div>

          <div className="bg-indigo-600 rounded-3xl p-7 text-white shadow-xl shadow-indigo-200 group hover:-translate-y-1 transition-transform">
            <h4 className="font-black text-xl mb-3 flex items-center gap-2">
              <Cloud className="w-6 h-6" /> L11-L12: 核心價值
            </h4>
            <p className="text-indigo-100 text-sm leading-relaxed">
              這是產品的「差異化」。透過<b>容器編排</b>與<b>GPU 虛擬化</b>，將冷冰冰的硬體轉化為可立即營收的 AI 服務環境，這是大型 CSP 客戶最看重的部分。
            </p>
            <div className="mt-4 pt-4 border-t border-indigo-500/50 text-[10px] font-bold uppercase tracking-widest text-indigo-200">
              Value: AI-Ready Solution
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-7 text-white shadow-xl shadow-slate-200 group hover:-translate-y-1 transition-transform">
            <h4 className="font-black text-xl mb-3 flex items-center gap-2">
              <Gauge className="w-6 h-6" /> L12+: 極限優化
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI 技術迭代極快。<b>效能優化團隊</b>必須與 NVIDIA/AMD 保持同步，不斷更新軟體堆疊（如引入 TensorRT-LLM），才能確保產品具備領先競爭力。
            </p>
            <div className="mt-4 pt-4 border-t border-slate-700 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Goal: Peak Performance
            </div>

      {/* CoCo Analysis Sections */}
      <div className="mt-16 mb-12 max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          CoCo 分析報告
        </h2>
        <div className="space-y-12">
          <ExecutiveSummaryView />
          <CompetitiveLandscapeView />
          <SoftwareDifferentiationView />
          <SovereignAIOpportunityView />
            <SoftwareRoadmapView />
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
