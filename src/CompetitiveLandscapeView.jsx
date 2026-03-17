import React, { useState } from 'react';
import { Target, Trophy, Shield, Zap, TrendingUp, Users, Lightbulb, CheckCircle, AlertTriangle, ExternalLink, BarChart3, Layers, Gauge, HelpCircle } from 'lucide-react';
import { competitiveLandscape } from './competitive-landscape.js';

const CompetitiveLandscapeView = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '戰略總覽', icon: <Target className="w-4 h-4" /> },
    { id: 'differentiation', label: '差異化分析', icon: <Trophy className="w-4 h-4" /> },
    { id: 'pain-points', label: '痛點分析', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'why-now', label: '為什麼是現在', icon: <Zap className="w-4 h-4" /> },
    { id: 'strategic-ask', label: '戰略要求', icon: <TrendingUp className="w-4 h-4" /> },
  ];


  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <BarChart3 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black">競爭格局分析</h2>
            <p className="text-blue-100 text-sm font-medium">Foxconn vs. NVIDIA Base Command / Mission Control</p>
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
                  ? 'bg-white text-blue-600 shadow-lg'
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
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NVIDIA Base Command Manager */}
              <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-black text-green-800">NVIDIA Base Command Manager</h3>
                </div>
                <p className="text-sm text-green-700 mb-3">{competitiveLandscape.nvidia.baseCommandManager.positioning}</p>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-green-600 uppercase">主要功能</h4>
                  <ul className="space-y-1">
                    {competitiveLandscape.nvidia.baseCommandManager.keyFeatures.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-xs text-green-700 flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={competitiveLandscape.nvidia.baseCommandManager.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-green-600 hover:underline">
                  <ExternalLink className="w-3 h-3" />
                  官方資訊
                </a>
              </div>

              {/* NVIDIA Mission Control */}
              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Gauge className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-black text-purple-800">NVIDIA Mission Control</h3>
                </div>
                <p className="text-sm text-purple-700 mb-3">{competitiveLandscape.nvidia.missionControl.positioning}</p>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-purple-600 uppercase">主要功能</h4>
                  <ul className="space-y-1">
                    {competitiveLandscape.nvidia.missionControl.keyFeatures.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-xs text-purple-700 flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={competitiveLandscape.nvidia.missionControl.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-purple-600 hover:underline">
                  <ExternalLink className="w-3 h-3" />
                  官方資訊
                </a>
              </div>
            </div>

            {/* Foxconn Opportunity */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-black text-blue-800">{competitiveLandscape.foxconnOpportunity.headline}</h3>
              </div>
              <p className="text-sm text-blue-700 mb-4 font-medium">{competitiveLandscape.foxconnOpportunity.coreInsight}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveLandscape.foxconnOpportunity.differentiation.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-blue-100">
                    <h4 className="text-sm font-bold text-blue-800 mb-2">{item.area}</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-500">NVIDIA:</span>
                        <span className="text-slate-600">{item.nvidia}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-blue-600">Foxconn:</span>
                        <span className="text-slate-600">{item.foxconn}</span>
                      </div>
                      <div className="flex items-start gap-2 text-blue-600">
                        <TrendingUp className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span className="font-medium">{item.whyItMatters}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'differentiation' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">Foxconn 的戰略定位</h3>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono">
                {competitiveLandscape.foxconnOpportunity.strategicPositioning}
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'pain-points' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">未解決的痛點與 Foxconn 方案</h3>
            {competitiveLandscape.foxconnOpportunity.unsolvedPainPoints.map((point, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{point.problem}</h4>
                    <p className="text-xs text-slate-600 mt-1">{point.description}</p>
                  </div>
                </div>
                <div className="ml-8 space-y-2">
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-700">Foxconn 方案</p>
                      <p className="text-xs text-slate-600">{point.foxconnSolution}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-700">證據</p>
                      <p className="text-xs text-slate-600">{point.evidence}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'why-now' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">為什麼是現在？市場轉折點</h3>
            <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <Zap className="w-6 h-6 text-amber-600" />
                <div>
                  <h4 className="text-lg font-black text-amber-800">2026 年是 AI 基礎建設的「分水嶺」</h4>
                  <p className="text-sm text-amber-700 mt-1">從「買得到 GPU」轉向「用得好 AI」</p>
                </div>
              </div>
            </div>
            
            {competitiveLandscape.foxconnOpportunity.whyNowSection?.timing && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveLandscape.foxconnOpportunity.whyNowSection.marketShifts?.map((shift, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200">
                    <h4 className="text-sm font-bold text-blue-600 mb-2">{shift.trend}</h4>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-slate-500">影響：</span>
                        <span className="text-slate-600">{shift.implication}</span>
                      </div>
                      <div>
                        <span className="font-bold text-blue-500">Foxconn 行動：</span>
                        <span className="text-slate-600">{shift.foxconnMove}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {competitiveLandscape.foxconnOpportunity.whyNowSection?.windowOfOpportunity && (
              <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-red-800">機會之窗</h4>
                    <p className="text-xs text-red-700 mt-1">{competitiveLandscape.foxconnOpportunity.whyNowSection.windowOfOpportunity}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'strategic-ask' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 mb-4">戰略要求與成功指標</h3>
            
            {/* Risk of Inaction */}
            <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
              <h4 className="text-lg font-black text-red-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                不行動的風險
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveLandscape.foxconnOpportunity.riskOfInaction?.map((risk, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-red-100">
                    <h5 className="text-sm font-bold text-red-700 mb-2">{risk.risk}</h5>
                    <p className="text-xs text-slate-600 mb-2">{risk.impact}</p>
                    <p className="text-xs text-green-600 font-medium">
                      <Shield className="w-3 h-3 inline mr-1" />
                      {risk.mitigation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Ask */}
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <h4 className="text-lg font-black text-blue-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {competitiveLandscape.strategicAsk?.headline}
              </h4>
              <div className="space-y-3">
                {competitiveLandscape.foxconnOpportunity.strategicAsk?.items.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-blue-100">
                    <p className="text-sm font-bold text-blue-700 mb-1">{item.what}</p>
                    <p className="text-xs text-slate-600">{item.rationale}</p>
                    <p className="text-xs text-blue-500 font-medium mt-1">時程：{item.timeline}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
              <h4 className="text-lg font-black text-green-800 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                成功指標
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(competitiveLandscape.foxconnOpportunity.successMetrics || {}).map(([metric, data]) => (
                  <div key={metric} className="p-4 bg-white rounded-xl border border-green-100">
                    <p className="text-sm font-bold text-green-700 mb-2">{metric}</p>
                    <p className="text-xs text-slate-600">{data.definition}</p>
                    <p className="text-xs text-green-600 font-medium mt-1">目標：{data.target}</p>
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

export default CompetitiveLandscapeView;
