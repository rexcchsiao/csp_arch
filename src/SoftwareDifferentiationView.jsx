import React, { useState } from 'react';
import { softwareDifferentiation } from './software-differentiation.js';
import { Zap, TrendingUp, Shield, Target, Users, BarChart3, AlertTriangle, CheckCircle, Award, Layers, Gauge, Lightbulb, ExternalLink } from 'lucide-react';

const SoftwareDifferentiationView = () => {
  const [activeTab, setActiveTab] = useState('pain-points');
  const [selectedPainPoint, setSelectedPainPoint] = useState(null);

  const tabs = [
    { id: 'pain-points', label: '痛點分析', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'competitive', label: '競爭優勢', icon: <Trophy className="w-4 h-4" /> },
    { id: 'metrics', label: '價值指標', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'risk', label: '風險分析', icon: <Shield className="w-4 h-4" /> },
    { id: 'ask', label: '戰略要求', icon: <Target className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <Layers className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black">軟體差異化分析</h2>
            <p className="text-indigo-100 text-sm font-medium">沒有軟體，硬體價值無法完全放大</p>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex gap-2 mt-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-white text-indigo-600 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {activeTab === 'pain-points' && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 mb-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-indigo-800">{softwareDifferentiation.strategicMessage.headline}</h3>
                  <p className="text-sm text-indigo-700 mt-2 font-medium">{softwareDifferentiation.strategicMessage.core}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {softwareDifferentiation.painPoints.map((point) => (
                <div 
                  key={point.id} 
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedPainPoint === point.id 
                      ? 'bg-indigo-50 border-indigo-300 ring-2 ring-indigo-200' 
                      : 'bg-slate-50 border-slate-200 hover:border-indigo-200'
                  }`}
                  onClick={() => setSelectedPainPoint(selectedPainPoint === point.id ? null : point.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <Zap className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{point.problem}</h4>
                        <p className="text-xs text-slate-600 mt-1">{point.impact}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-indigo-600">點擊展開</span>
                  </div>
                  
                  {selectedPainPoint === point.id && (
                    <div className="mt-4 pt-4 border-t border-indigo-200 space-y-3">
                      <div className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-slate-700">軟體解方</p>
                          <p className="text-xs text-slate-600">{point.softwareSolution}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-slate-700">價值放大</p>
                          <p className="text-xs text-blue-600 font-medium">{point.valueAmplification}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'competitive' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">競爭優勢分析</h3>
            <div className="space-y-4">
              {softwareDifferentiation.competitiveAdvantage.map((advantage, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="text-sm font-bold text-indigo-600 mb-3">{advantage.category}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                      <p className="text-xs font-bold text-indigo-700 mb-2">Foxconn</p>
                      <p className="text-xs text-slate-700">{advantage.foxconn}</p>
                    </div>
                    <div className="p-4 bg-slate-100 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold text-slate-600 mb-2">競爭對手</p>
                      <p className="text-xs text-slate-600">{advantage.competitors}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                      <p className="text-xs font-bold text-green-700 mb-2 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        為什麼重要
                      </p>
                      <p className="text-xs text-slate-700">{advantage.whyItMatters}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">價值量化指標</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(softwareDifferentiation.valueMetrics).map(([metric, data]) => (
                <div key={metric} className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
                  <h4 className="text-sm font-bold text-indigo-800 mb-4">{metric}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">改善前</span>
                      <span className="text-sm font-bold text-slate-700">{data.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">改善後</span>
                      <span className="text-sm font-bold text-green-600">{data.after}</span>
                    </div>
                    <div className="pt-3 border-t border-indigo-200">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500">改善幅度</span>
                        <span className="text-lg font-black text-indigo-600">{data.improvement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200 mt-6">
              <h4 className="text-lg font-black text-blue-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                戰略訊息
              </h4>
              <div className="space-y-3">
                <p className="text-sm text-blue-700 font-medium">{softwareDifferentiation.strategicMessage.core}</p>
                <div className="space-y-2">
                  {softwareDifferentiation.strategicMessage.proofPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'risk' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">不行動的風險</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softwareDifferentiation.riskOfInaction.map((risk, idx) => (
                <div key={idx} className="p-6 bg-red-50 rounded-2xl border border-red-200">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                    <h4 className="text-sm font-bold text-red-700">{risk.risk}</h4>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">{risk.impact}</p>
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                    <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-green-700 font-medium">{risk.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ask' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">戰略要求</h3>
            
            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
              <div className="space-y-4">
                {softwareDifferentiation.strategicAsk.items.map((item, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-indigo-100">
                    <h4 className="text-sm font-bold text-indigo-700 mb-2">{item.what}</h4>
                    <p className="text-xs text-slate-600 mb-2">{item.rationale}</p>
                    <div className="flex items-center gap-2 text-xs text-indigo-500 font-medium">
                      <Target className="w-3 h-3" />
                      {item.timeline}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
              <h4 className="text-lg font-black text-green-800 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                成功指標
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(softwareDifferentiation.successMetrics).map(([metric, data]) => (
                  <div key={metric} className="p-4 bg-white rounded-xl border border-green-100">
                    <h5 className="text-sm font-bold text-green-700 mb-2">{metric}</h5>
                    <p className="text-xs text-slate-600 mb-2">{data.definition}</p>
                    <p className="text-xs text-green-600 font-medium">目標：{data.target}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoftwareDifferentiationView;
