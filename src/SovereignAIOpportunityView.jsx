import React, { useState } from 'react';
import sovereignAIOpportunity from './sovereign-ai.js';
import { 
  Globe, Shield, TrendingUp, CheckCircle, AlertTriangle, 
  Target, Award, Calendar, DollarSign, Users, BookOpen,
  ExternalLink, Zap, Building, FileText
} from 'lucide-react';

const SovereignAIOpportunityView = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeRegion, setActiveRegion] = useState(0);

  const tabs = [
    { id: 'overview', label: '市場概覽', icon: <Globe className="w-4 h-4" /> },
    { id: 'regions', label: '區域分析', icon: <Building className="w-4 h-4" /> },
    { id: 'advantage', label: 'Foxconn 優勢', icon: <Target className="w-4 h-4" /> },
    { id: 'service', label: '服務方案', icon: <Award className="w-4 h-4" /> },
    { id: 'revenue', label: '營收預測', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'action', label: '行動建議', icon: <Zap className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <Shield className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black">{sovereignAIOpportunity.headline}</h2>
            <p className="text-emerald-100 text-sm font-medium mt-1">
              {sovereignAIOpportunity.marketSize}
            </p>
            <p className="text-emerald-100 text-xs mt-1">
              {sovereignAIOpportunity.why2026}
            </p>
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
                  ? 'bg-white text-emerald-600 shadow-lg'
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
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sovereignAIOpportunity.regions.map((region, idx) => (
                <div
                  key={idx}
                  onClick={() => { setActiveRegion(idx); setActiveTab('regions'); }}
                  className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-lg font-black text-emerald-800">{region.region}</h3>
                  </div>
                  <p className="text-xs font-bold text-emerald-600 mb-2">{region.regulation}</p>
                  <p className="text-xs text-slate-600 mb-3 line-clamp-2">{region.requirement}</p>
                  <div className="flex items-center gap-2 text-xs text-emerald-500 font-medium">
                    <Target className="w-3 h-3" />
                    點擊查看詳情
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <h3 className="text-lg font-black text-blue-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                市場機會總結
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-700 mb-1">市場規模</p>
                  <p className="text-2xl font-black text-blue-600">$50B+</p>
                  <p className="text-xs text-slate-600 mt-1">2026-2028 全球主權 AI 市場</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-700 mb-1">利潤率</p>
                  <p className="text-2xl font-black text-blue-600">50-60%</p>
                  <p className="text-xs text-slate-600 mt-1">軟體服務平均利潤率</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regions Tab */}
        {activeTab === 'regions' && (
          <div className="space-y-6">
            <div className="flex gap-2 flex-wrap mb-4">
              {sovereignAIOpportunity.regions.map((region, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveRegion(idx)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeRegion === idx
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {region.region}
                </button>
              ))}
            </div>

            {sovereignAIOpportunity.regions.map((region, idx) => (
              activeRegion === idx && (
                <div key={idx} className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
                    <div className="flex items-start gap-3 mb-4">
                      <Shield className="w-6 h-6 text-emerald-600 mt-1" />
                      <div>
                        <h3 className="text-xl font-black text-emerald-800">{region.regulation}</h3>
                        <div className="flex items-center gap-2 mt-2 text-xs">
                          <Calendar className="w-3 h-3" />
                          <span className="font-bold text-emerald-600">生效時間：{region.effectiveDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-xl border border-emerald-100">
                        <h4 className="text-xs font-bold text-slate-500 mb-2 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          合規要求
                        </h4>
                        <p className="text-sm text-slate-700">{region.requirement}</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                        <h4 className="text-xs font-bold text-red-600 mb-2 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          違規罰則
                        </h4>
                        <p className="text-sm text-red-700">{region.penalty}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
                      <h4 className="text-sm font-black text-blue-800 mb-3 flex items-center gap-2">
                        <LightBulbIcon />
                        市場機會
                      </h4>
                      <p className="text-sm text-blue-700 mb-3">{region.opportunity}</p>
                      <p className="text-xs text-slate-600"><b>目標客戶：</b>{region.targetCustomers}</p>
                    </div>
                    <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                      <h4 className="text-sm font-black text-green-800 mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Foxconn 策略
                      </h4>
                      <p className="text-sm text-green-700">{region.foxconnPlay}</p>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {/* Advantage Tab */}
        {activeTab === 'advantage' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800">{sovereignAIOpportunity.foxconnAdvantage.headline}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sovereignAIOpportunity.foxconnAdvantage.points.map((point, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="text-sm font-black text-emerald-800">{point.what}</h4>
                      <p className="text-sm text-slate-700 mt-2">{point.detail}</p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-emerald-600 font-bold">
                        <TrendingUp className="w-3 h-3" />
                        {point.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl text-white">
              <h4 className="text-lg font-black mb-4">競爭格局分析</h4>
              <div className="space-y-4">
                {sovereignAIOpportunity.competitiveLandscape.competitors.map((competitor, idx) => (
                  <div key={idx} className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-bold text-white">{competitor.name}</h5>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="font-bold text-slate-400">優勢：</span>
                        <span className="text-slate-300">{competitor.strength}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-400">劣勢：</span>
                        <span className="text-slate-300">{competitor.weakness}</span>
                      </div>
                      <div>
                        <span className="font-bold text-emerald-400">Foxconn 優勢：</span>
                        <span className="text-slate-300">{competitor.foxconnAdvantage}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Service Tab */}
        {activeTab === 'service' && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-emerald-600" />
                <div>
                  <h3 className="text-2xl font-black text-emerald-800">{sovereignAIOpportunity.servicePackage.name}</h3>
                  <p className="text-sm text-emerald-700">{sovereignAIOpportunity.servicePackage.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-black text-slate-500 uppercase mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    方案組成
                  </h4>
                  <ul className="space-y-2">
                    {sovereignAIOpportunity.servicePackage.components.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-black text-slate-500 uppercase mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    合規功能
                  </h4>
                  <ul className="space-y-2">
                    {sovereignAIOpportunity.servicePackage.complianceFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-white rounded-xl border border-emerald-200">
                  <p className="text-xs font-bold text-slate-500 mb-1">定價</p>
                  <p className="text-sm text-slate-700">{sovereignAIOpportunity.servicePackage.pricing.oneTime}</p>
                  <p className="text-xs text-slate-600 mt-1">{sovereignAIOpportunity.servicePackage.pricing.recurring}</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-emerald-200">
                  <p className="text-xs font-bold text-slate-500 mb-1">利潤率</p>
                  <p className="text-lg font-black text-emerald-600">{sovereignAIOpportunity.servicePackage.pricing.margin}</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-emerald-200">
                  <p className="text-xs font-bold text-slate-500 mb-1">目標客戶</p>
                  <p className="text-xs text-slate-700">{sovereignAIOpportunity.servicePackage.targetCustomers}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <h4 className="text-lg font-black text-blue-800 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                部署時程
              </h4>
              <p className="text-sm text-blue-700 mb-4">{sovereignAIOpportunity.servicePackage.deployment.timeline}</p>
              <div className="space-y-3">
                {sovereignAIOpportunity.servicePackage.deployment.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <span className="text-slate-700">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Revenue Tab */}
        {activeTab === 'revenue' && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
              <h3 className="text-xl font-black text-emerald-800 mb-4">營收預測</h3>
              <p className="text-sm text-emerald-700 mb-6">{sovereignAIOpportunity.revenueProjection.assumption}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(sovereignAIOpportunity.revenueProjection)
                  .filter(([key]) => key.startsWith('year'))
                  .map(([key, data]) => (
                    <div key={key} className="p-5 bg-white rounded-xl border border-emerald-200">
                      <h4 className="text-sm font-black text-emerald-700 mb-3 capitalize">
                        {key.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-slate-500">案件數：</span>
                          <span className="font-bold text-slate-700">{data.deals}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">營收：</span>
                          <span className="font-black text-emerald-600">{data.revenue}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">毛利：</span>
                          <span className="font-bold text-slate-700">{data.margin}</span>
                        </div>
                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-xs text-slate-500">{data.focus}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-6 p-4 bg-emerald-100 rounded-xl border border-emerald-200">
                <p className="text-sm text-emerald-800 font-medium">
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  {sovereignAIOpportunity.revenueProjection.strategicValue}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Tab */}
        {activeTab === 'action' && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              {sovereignAIOpportunity.callToAction.headline}
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {sovereignAIOpportunity.callToAction.actions.map((action, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-black text-slate-800">{action.what}</h4>
                    <div className="flex items-center gap-2 px-3 py-1 bg-emerald-100 rounded-full text-xs font-bold text-emerald-700">
                      <Calendar className="w-3 h-3" />
                      {action.timeline}
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">{action.detail}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <DollarSign className="w-3 h-3" />
                    投資：{action.investment}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-emerald-600 rounded-2xl text-white">
              <h4 className="text-lg font-black mb-3">戰略價值</h4>
              <p className="text-emerald-100 text-sm">
                主權 AI 不僅是營收增長點，更是建立長期客戶關係與合規護城河的戰略佈局。
                透過協助客戶符合 EU AI Act、GDPR、PDPA 等法規要求，Foxconn 可從單純的硬體供應商
                轉型為值得信賴的合規合作夥伴，建立難以被取代的競爭優勢。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Simple lightbulb icon component
const LightBulbIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

export default SovereignAIOpportunityView;
