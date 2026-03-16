import React, { useState } from 'react';
import { BarChart3, LayoutGrid } from 'lucide-react';
import CompetitiveLandscapeView from './CompetitiveLandscapeView';
import SoftwareDifferentiationView from './SoftwareDifferentiationView';
import SovereignAIOpportunityView from './SovereignAIOpportunityView';
import ExecutiveSummaryView from './ExecutiveSummaryView';
import SoftwareRoadmapView from './SoftwareRoadmapView';
import NinetyDayPlanView from './NinetyDayPlanView';
import SourceReferencesView from './SourceReferencesView';
import CompetitiveComparisonChart from './CompetitiveComparisonChart';
import BuildVsBuyView from './BuildVsBuyView';
import { Cpu, Terminal, Layers, Activity, ShieldCheck, ChevronRight, Database, Network, Box, Zap, Cloud, Settings, Shield, Gauge, Info, X, ExternalLink, BookOpen, Split, Target, Trophy } from 'lucide-react';

const App = () => {
  const [activeDept, _setActiveDept] = useState('firmware');
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const departments = {
    firmware: {
      name: 'Firmware (L9-L10)',
      icon: <Cpu className="w-5 h-5" />,
      what: '負責 L9 系統階段與 L10 組裝階段的韌體開發。包含：BMC 韌體 (OpenBMC)、BIOS、ACPI 電源管理、硬體監控 (HWM)、FRU/EEPROM 等。',
      why: '韌體是硬體的靈魂。沒有完整 BMC/BIOS 支援，高端 AI 伺服器將無法被遠端管理、無法監控健康狀態、也無法進行自動化部署。',
      platform: 'NVIDIA MGX/OGX、AMD、Intel',
      links: [
        { name: 'OpenBMC Project', url: 'https://openbmc.org/' },
        { name: 'NVIDIA MGX Architecture', url: 'https://nvidia.com/mgx' },
      ],
    },
    system: {
      name: 'System Integration (L11)',
      icon: <Terminal className="w-5 h-5" />,
      what: '負責 L11 機架階段的系統整合。包含：OS 安裝 (Ubuntu/RHEL)、驅動程式安裝、網路設定 (ToR/IB)、集群管理工具鏈部署。',
      why: '系統整合是 AI 伺服器的「就緒狀態」。沒有完整的系統整合，客戶無法在收貨後快速部署，將嚴重影響交付時程。',
      platform: 'NVIDIA、AMD、Intel',
      links: [
        { name: 'NVIDIA DOCA', url: 'https://developer.nvidia.com/doca' },
        { name: 'Ubuntu Server', url: 'https://ubuntu.com/server' },
      ],
    },
    orchestration: {
      name: 'Orchestration (L12)',
      icon: <Database className="w-5 h-5" />,
      what: '負責 L12 解決方案階段的編排與部署。包含：Kubernetes、Helm Charts、AI 框架 (PyTorch/TensorFlow)、推理服務 (Triton)、監控 (Prometheus/Grafana)。',
      why: '編排層是 AI 大規模部署的關鍵。沒有 K8s 編排，客戶無法管理數千個 GPU，也無法進行多租戶資源分配。',
      platform: 'NVIDIA、AMD',
      links: [
        { name: 'Kubernetes', url: 'https://kubernetes.io/' },
        { name: 'NVIDIA Triton', url: 'https://developer.nvidia.com/nvidia-triton-inference-server' },
      ],
    },
    ai: {
      name: 'AI Frameworks',
      icon: <Zap className="w-5 h-5" />,
      what: '負責 AI 框架與優化的深度整合。包含：TensorRT-LLM、ROCm、CUDA、vLLM、RAG 框架。',
      why: 'AI 技術迭代極快。沒有持續的框架優化，產品將迅速失去競爭力。',
      platform: 'NVIDIA、AMD',
      links: [
        { name: 'TensorRT-LLM', url: 'https://github.com/NVIDIA/TensorRT-LLM' },
        { name: 'ROCm', url: 'https://rocm.docs.amd.com/' },
      ],
    },
  };

  const lLevels = [
    { id: 'L9', label: 'L9 System', desc: '系統整合階段：完成主機板與核心組件組裝，重點在於 BIOS/BMC 韌體燒錄與單機硬體功能驗證。' },
    { id: 'L10', label: 'L10 Assembly', desc: '整機組裝階段：安裝所有外設元件（如 GPU 加速卡、網路卡），並載入 OS 與執行系統級應力測試。' },
    { id: 'L11', label: 'L11 Rack', desc: '機架集成階段：將多台伺服器整合至機櫃，完成 PDU 布線、網路切換器設定與集群軟體初步部署。' },
    { id: 'L12', label: 'L12 Solution', desc: '解決方案交付：根據客戶特定需求進行軟體堆疊優化、安全性修補，並完成數據中心現場部署準備。' },
  ];

  const getActiveIndex = () => {
    return Object.keys(departments).indexOf(activeDept);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Detail Modal */}
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
                  <Info className="w-3 h-3" />
                  平台適配建議：{selectedDetail.platform}
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
                          <ExternalLink className="w-3 h-3" />
                          {link.name}
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

        {/* Main Navigation */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 mb-4 flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg shadow-lg">
              <LayoutGrid className="text-white w-8 h-8" />
            </div>
            Foxconn AI Server Software
          </h1>
          
          {/* Top-level Navigation Tabs */}
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
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'architecture'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              L9-L12 架構
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
          </div>
        </div>

        {/* Content by Tab */}
        {activeTab === 'overview' && (
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">L9-L12 架構</h2>
              {/* L-Level Progress */}
              <div className="mb-8 grid grid-cols-4 gap-4">
                {lLevels.map((level, i) => (
                  <div key={i} className="relative group">
                    <div className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-slate-900 text-white text-xs rounded-xl shadow-xl z-50 transition-all duration-200 opacity-0 group-hover:opacity-100">
                      <p className="font-bold text-blue-400 mb-1 flex items-center gap-1">
                        <Info className="w-3 h-3" />
                        {level.id} 階段定義
                      </p>
                      <p className="leading-relaxed text-slate-300">{level.desc}</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900" />
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full bg-blue-500 transition-all duration-1000`} style={{ width: getActiveIndex() >= i ? '100%' : '0%' }} />
                    </div>
                    <span className="mt-3 flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-tighter cursor-help hover:text-blue-600 transition-colors">
                      {level.label}
                      <Info className="w-3 h-3 opacity-50" />
                    </span>
                  </div>
                ))}
              </div>

              {/* Department Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(departments).map(([key, dept]) => (
                  <div
                    key={key}
                    className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedDetail({ ...dept, id: key })}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {dept.icon}
                      </div>
                      <h3 className="text-lg font-black text-slate-900">{dept.name}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{dept.what}</p>
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-bold">
                      查看詳情 <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-6">L9-L12 架構詳解</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(departments).map(([key, dept]) => (
                <div
                  key={key}
                  className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedDetail({ ...dept, id: key })}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {dept.icon}
                    </div>
                    <h3 className="text-lg font-black text-slate-900">{dept.name}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{dept.what}</p>
                  <div className="flex items-center gap-2 text-blue-600 text-sm font-bold">
                    查看詳情 <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'coco' && (
          <div className="space-y-12">
            <ExecutiveSummaryView />
            <CompetitiveLandscapeView />
            <SoftwareDifferentiationView />
            <SovereignAIOpportunityView />
            <SoftwareRoadmapView />
            <NinetyDayPlanView />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
