import React, { useState } from 'react';
import { Calendar, CheckCircle, TrendingUp, AlertTriangle, Target, Clock, Users, DollarSign, Award, Shield } from 'lucide-react';
import { softwareRoadmap } from './software-roadmap';

const SoftwareRoadmapView = () => {
  const [activeTab, setActiveTab] = useState('roadmap'); // 'roadmap' | 'quickwins' | 'metrics'

  const phases = [
    { id: 'phase1', data: softwareRoadmap.phase1, color: 'bg-blue-500' },
    { id: 'phase2', data: softwareRoadmap.phase2, color: 'bg-purple-500' },
    { id: 'phase3', data: softwareRoadmap.phase3, color: 'bg-green-500' },
  ];

  const renderPhase = (phase) => (
    <div key={phase.id} className="mb-6">
      <div className={`${phase.data.name.includes('基礎') ? 'bg-blue-50' : phase.data.name.includes('規模') ? 'bg-purple-50' : 'bg-green-50'} p-4 rounded-lg`}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900">{phase.data.name}</h3>
          <span className="text-sm text-gray-600 font-mono">{phase.data.timeline}</span>
        </div>
        <p className="text-sm text-gray-700 mb-3 italic">{phase.data.theme}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
              <Target className="w-4 h-4 mr-2" />
              目標
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {phase.data.objectives.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
              <Award className="w-4 h-4 mr-2" />
              關鍵交付
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {phase.data.deliverables.map((del, idx) => (
                <li key={idx}>{del.item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-green-600" />
              <span className="text-gray-700">投資：<span className="font-semibold">{phase.data.investment}</span></span>
            </div>
            <div className="flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-orange-600" />
              <span className="text-gray-700">風險：<span className="font-semibold">{phase.data.risk}</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuickWins = () => (
    <div className="space-y-4">
      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
        <p className="text-sm text-gray-700">{softwareRoadmap.quickWins.philosophy}</p>
      </div>

      {softwareRoadmap.quickWins.wins.map((win, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-lg font-bold text-gray-900">{win.title}</h4>
            <span className="text-xs font-mono bg-amber-100 text-amber-800 px-2 py-1 rounded">
              {win.timeline}
            </span>
          </div>
          
          <p className="text-sm text-gray-700 mb-3">{win.action}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-gray-700">人力：{win.effort}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-green-600" />
              <span className="text-gray-700">投資：{win.investment}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-purple-600" />
              <span className="text-gray-700">{win.metric}</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-orange-600" />
              <span className="text-gray-700">{win.impact}</span>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-blue-50 p-4 rounded-lg mt-4">
        <h4 className="font-bold text-gray-900 mb-2">為什麼快速勝利很重要？</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>建立信心：讓團隊與管理層看見具體成果</li>
          <li>驗證假設：快速測試市場反應</li>
          <li>累積動能：小成功帶來大動力</li>
          <li>降低風險：分散式投入</li>
          <li>建立信任：用實際交付證明能力</li>
        </ul>
      </div>
    </div>
  );

  const renderMetrics = () => (
    <div className="space-y-6">
      {softwareRoadmap.successMetrics.metrics.map((category, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-600" />
            {category.category}
          </h4>
          <div className="space-y-2">
            {category.items.map((metric, mIdx) => (
              <div key={mIdx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-gray-700">{metric.name}</span>
                <div className="text-right">
                  <span className="text-sm font-semibold text-blue-600">{metric.target}</span>
                  <span className="text-xs text-gray-500 ml-2">({metric.frequency})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-gray-900 mb-2">檢視節奏</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
          {Object.entries(softwareRoadmap.successMetrics.reviewCadence).map(([key, value]) => (
            <div key={key}>
              <p className="font-semibold text-gray-800 capitalize">{key}</p>
              <p className="text-gray-600">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {softwareRoadmap.headline}
        </h1>
        <p className="text-gray-600">{softwareRoadmap.philosophy}</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-2 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'roadmap'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            發展路線圖
          </div>
        </button>
        <button
          onClick={() => setActiveTab('quickwins')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'quickwins'
              ? 'border-b-2 border-amber-600 text-amber-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-2" />
            快速勝利
          </div>
        </button>
        <button
          onClick={() => setActiveTab('metrics')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'metrics'
              ? 'border-b-2 border-green-600 text-green-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <div className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            成功指標
          </div>
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'roadmap' && (
          <div>
            {phases.map((phase) => renderPhase(phase))}
          </div>
        )}
        
        {activeTab === 'quickwins' && renderQuickWins()}
        
        {activeTab === 'metrics' && renderMetrics()}
      </div>

      {/* Risk Register */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Shield className="w-6 h-6 mr-2 text-red-600" />
          {softwareRoadmap.riskRegister.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {softwareRoadmap.riskRegister.risks.map((risk, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-gray-900">{risk.risk}</h4>
                <div className="flex space-x-2">
                  <span className={`text-xs px-2 py-1 rounded ${
                    risk.probability === '高' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    機率：{risk.probability}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    risk.impact === '高' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    衝擊：{risk.impact}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">緩解措施：</span>{risk.mitigation}
              </p>
              <p className="text-xs text-gray-600">
                <span className="font-semibold">負責人：</span>{risk.owner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareRoadmapView;
