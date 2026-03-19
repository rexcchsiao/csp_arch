import React, { useState } from 'react';
import { ExternalLink, CheckCircle, AlertTriangle, Info, TrendingUp, BarChart3, Shield, Zap } from 'lucide-react';
import { competitiveSources } from './competitive-sources.js';

const SourceReferencesView = () => {
  const [activeCategory, setActiveCategory] = useState('nvidia');

  const categories = [
    { id: 'nvidia', label: 'NVIDIA', icon: <Zap className="w-4 h-4" />, color: 'green' },
    { id: 'dell', label: 'Dell/HPE', icon: <BarChart3 className="w-4 h-4" />, color: 'blue' },
    { id: 'odmPeers', label: 'OEM / ODM 同業', icon: <TrendingUp className="w-4 h-4" />, color: 'orange' },
    { id: 'enterprisePlatforms', label: '企業平台', icon: <Shield className="w-4 h-4" />, color: 'purple' },
    { id: 'supermicro', label: 'Supermicro', icon: <TrendingUp className="w-4 h-4" />, color: 'teal' },
    { id: 'schneider', label: 'Schneider', icon: <TrendingUp className="w-4 h-4" />, color: 'cyan' },
    { id: 'marketResearch', label: '市場研究', icon: <Info className="w-4 h-4" />, color: 'indigo' },
    { id: 'standards', label: '管理標準', icon: <CheckCircle className="w-4 h-4" />, color: 'emerald' },
  ];

  const sources = activeCategory === 'dell'
    ? [...(competitiveSources.dell || []), ...(competitiveSources.hpe || [])]
    : activeCategory === 'odmPeers'
      ? [
          ...(competitiveSources.qct || []),
          ...(competitiveSources.quanta || []),
          ...(competitiveSources.wistron || []),
          ...(competitiveSources.gigabyte || []),
        ]
      : (competitiveSources[activeCategory] || []);

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <ExternalLink className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black">參考來源與競爭情報</h2>
            <p className="text-slate-300 text-sm font-medium">所有數據與聲明均可追溯至第三方權威來源</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mt-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sources List */}
      <div className="p-8">
        {activeCategory === 'odmPeers' && (
          <div className="mb-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-orange-700 mb-2">Why this matters</p>
            <p className="text-sm text-slate-700 leading-relaxed">
              這一頁把 Quanta / QCT、Wistron、GIGABYTE 等同業放在同一個來源池，方便直接支撐一個很關鍵的董事會論點：
              Foxconn 面對的不是抽象的「市場都在做軟體」，而是 <span className="font-semibold text-slate-900">同級 OEM / ODM 已經開始用管理平台、軟體合作或營運敘事重新包裝硬體價值</span>。
              這會讓軟體部門的投資理由更具急迫性，也更容易說服老闆這不是 optional add-on，而是避免商品化的必要防線。
            </p>
          </div>
        )}
        {activeCategory === 'enterprisePlatforms' && (
          <div className="mb-6 rounded-2xl border border-purple-200 bg-purple-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-purple-700 mb-2">Why this matters</p>
            <p className="text-sm text-slate-700 leading-relaxed">
              這一頁故意把 Red Hat、Lenovo、NetApp 這類企業平台與資料基礎設施來源放在一起，目的不是湊品牌數，而是直接證明一件事：
              <span className="font-semibold text-slate-900">連不是傳統伺服器代工的玩家，都已經在賣 lifecycle、governance、recoverability、hybrid operations 與 secure inferencing</span>。
              這代表市場核准的預算語言，早就不是「硬體規格夠不夠」，而是「誰能把 AI 叢集長期管好、救得回來、還能對稽核交代」。
              這正好強化 Foxconn 的核心主張：軟體部門真正值錢的，不是做另一個 dashboard，而是把硬體交付延伸成可治理、可續約、可被問責的營運結果。
            </p>
          </div>
        )}
        <div className="space-y-6">
          {sources.map((source, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-black text-slate-900 mb-2">{source.name}</h3>
                  <p className="text-sm text-slate-600 mb-2">{source.description}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      驗證於：{source.lastVerified || '2026-03-16'}
                    </span>
                  </div>
                </div>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  查看來源 <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {source.relevance && (
                <div className="mb-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs font-bold text-blue-700 mb-1">相關性</p>
                  <p className="text-xs text-slate-700">{source.relevance}</p>
                </div>
              )}

              {source.keyFeature && (
                <div className="mb-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-xs font-bold text-green-700 mb-1">主要功能</p>
                  <p className="text-xs text-slate-700">{source.keyFeature}</p>
                </div>
              )}

              {source.limitation && (
                <div className="mb-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-amber-700 mb-1">限制</p>
                      <p className="text-xs text-slate-700">{source.limitation}</p>
                    </div>
                  </div>
                </div>
              )}

              {source.ourAdvantage && (
                <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                  <p className="text-xs font-bold text-indigo-700 mb-1">Foxconn 優勢</p>
                  <p className="text-xs text-slate-700">{source.ourAdvantage}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourceReferencesView;
