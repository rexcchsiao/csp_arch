// Executive Summary View - Leadership Decision Dashboard
// Surfaces key metrics, decisions, and value propositions for C-level executives
import React from 'react';
import { TrendingUp, DollarSign, Clock, Shield, Target, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { customerSuccessScenarios, executiveSummary } from './customer-success-stories';
import { softwareDifferentiation } from './software-differentiation';

const ExecutiveSummaryView = () => {
  const metrics = [
    { label: 'GPU 利用率提升', before: '40-60%', after: '85%+', improvement: '+42%', icon: TrendingUp },
    { label: '部署時間縮短', before: '2-4 週', after: '2 小時', improvement: '-99%', icon: Clock },
    { label: '運維人力減少', before: '100%', after: '30%', improvement: '-70%', icon: DollarSign },
    { label: '毛利率提升', before: '10-15%', after: '20-25%', improvement: '+10pp', icon: Target },
  ];

  const revenueProjection = softwareDifferentiation.serviceOfferings?.revenueProjection;

  return (
    <div className="space-y-8">
      {/* Executive One-Liner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
        <h3 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2 opacity-80">
          <Target className="w-4 h-4" /> 核心主張
        </h3>
        <p className="text-2xl md:text-3xl font-black leading-tight mb-4">
          {executiveSummary.oneLiner}
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">30 秒說服重點</p>
            <p className="text-sm leading-relaxed opacity-90">{executiveSummary.elevator30s}</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">戰略要求</p>
            <p className="text-sm leading-relaxed opacity-90">{executiveSummary.ask}</p>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div>
        <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" /> 關鍵價值指標
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <metric.icon className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">{metric.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900">{metric.after}</span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{metric.improvement}</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">原：{metric.before}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Projection */}
      {revenueProjection && (
        <div className="bg-slate-900 rounded-3xl p-8 text-white">
          <h3 className="text-lg font-black mb-6 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-400" /> 軟體服務營收預測（保守估計）
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(revenueProjection).map(([year, data]) => (
              <div key={year} className="bg-white/10 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-slate-400">
                  {year === 'year1_2026' ? '2026 年（首年）' : year === 'year2_2027' ? '2027 年' : '2028 年'}
                </p>
                <div className="mb-4">
                  <p className="text-3xl font-black text-green-400">{data.total}</p>
                  <p className="text-xs text-slate-400 mt-1">軟體：{data.software} | 服務：{data.services}</p>
                </div>
                <p className="text-xs text-slate-400">佔整體營收：{data.percentOfTotal}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4">
            假設條件：2026-2028 年 AI 伺服器營收為 NT$ 1.5B, 2B, 3.5B，軟體服務滲透率逐年提升至 20%
          </p>
        </div>
      )}

      {/* Leadership Decision Matrix Summary */}
      {softwareDifferentiation.leadershipDecisionMatrix && (
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
          <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" /> 關鍵決策：投資軟體與否的戰略選擇
          </h3>
          
          <div className="space-y-4 mb-6">
            {softwareDifferentiation.leadershipDecisionMatrix.decisionCriteria.slice(0, 4).map((criteria, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-4 last:border-0">
                <p className="text-sm font-black text-slate-900 mb-3">{criteria.criterion}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <p className="text-xs font-bold text-red-700 mb-1">不投資軟體</p>
                    <p className="text-sm text-slate-700">{criteria.option1.outcome}</p>
                    {criteria.option1.risk && (
                      <p className="text-xs text-red-600 mt-2 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> {criteria.option1.risk}
                      </p>
                    )}
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <p className="text-xs font-bold text-green-700 mb-1">投資軟體</p>
                    <p className="text-sm text-slate-700">{criteria.option2.outcome}</p>
                    {criteria.option2.upside && (
                      <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> {criteria.option2.upside}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recommendation */}
          <div className="bg-blue-600 rounded-2xl p-6 text-white">
            <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-80">建議方案</p>
            <p className="text-lg font-black mb-3">{softwareDifferentiation.leadershipDecisionMatrix.recommendation.choice}</p>
            <p className="text-sm opacity-90 mb-3">{softwareDifferentiation.leadershipDecisionMatrix.recommendation.rationale}</p>
            <div className="flex items-center gap-2 text-xs opacity-80">
              <ArrowRight className="w-3 h-3" />
              {softwareDifferentiation.leadershipDecisionMatrix.recommendation.timeline}
            </div>
          </div>
        </div>
      )}

      {/* Customer Success Scenarios */}
      <div>
        <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600" /> 客戶成功場景
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {customerSuccessScenarios.map((scenario, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <p className="text-sm font-black text-slate-900 mb-3">{scenario.scenario}</p>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-bold text-slate-400">挑戰：</span>
                  <span className="text-slate-700">{scenario.challenge}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-400">方案：</span>
                  <span className="text-slate-700">{scenario.solution}</span>
                </div>
                <div>
                  <span className="font-bold text-green-600">成果：</span>
                  <span className="text-slate-700">{scenario.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummaryView;
