// Leadership Decision Matrix View - Executive comparison dashboard
// Displays competitive comparison and decision framework for C-level executives
import React from 'react';
import { Shield, TrendingUp, DollarSign, Clock, CheckCircle, XCircle, AlertTriangle, Target, Award } from 'lucide-react';
import { leadershipDecisionMatrix } from './leadership-decision-matrix';

const LeadershipDecisionMatrixView = () => {
  const { competitiveComparison, decisionCriteria, riskReward, executiveSummary } = leadershipDecisionMatrix;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-black mb-2 flex items-center gap-3">
          <Shield className="w-7 h-7" />
          {leadershipDecisionMatrix.headline}
        </h2>
        <p className="text-blue-100 text-sm">{leadershipDecisionMatrix.purpose}</p>
      </div>

      {/* Executive Summary Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
          <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            核心主張
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">問題</p>
              <p className="text-slate-900">{executiveSummary.problem}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">解決方案</p>
              <p className="text-slate-900">{executiveSummary.solution}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">影響力</p>
              <p className="text-slate-900">{executiveSummary.impact}</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 text-white">
          <h3 className="text-lg font-black mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-400" />
            戰略要求
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-green-400 text-lg font-black">{executiveSummary.ask}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">時程</p>
              <p className="text-slate-300 text-sm">{executiveSummary.timeline}</p>
            </div>
            <div className="flex items-start gap-2 mt-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-amber-400">{executiveSummary.riskOfDelay}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Comparison Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-black text-slate-900">競爭對手比較分析</h3>
          <p className="text-sm text-slate-500 mt-1">Foxconn vs. 主要競爭對手：關鍵維度一比一</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">維度</th>
                <th className="px-6 py-4 text-left text-xs font-black text-blue-600 uppercase tracking-wider">Foxconn</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">NVIDIA</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">廣達/緯穎</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">AWS/Azure/GCP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {competitiveComparison.rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="px-6 py-4 text-sm font-black text-slate-900">{row.dimension}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      {row.foxconn.advantage && <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />}
                      <div>
                        <p className="text-sm font-bold text-slate-900">{row.foxconn.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{row.foxconn.note}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      {!row.nvidia.advantage && <XCircle className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />}
                      <div>
                        <p className="text-sm font-medium text-slate-700">{row.nvidia.value}</p>
                        <p className="text-xs text-slate-400 mt-1">{row.nvidia.note}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      {!row.quanta.advantage && <XCircle className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />}
                      <div>
                        <p className="text-sm font-medium text-slate-700">{row.quanta.value}</p>
                        <p className="text-xs text-slate-400 mt-1">{row.quanta.note}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      {!row.hyperscaler.advantage && <XCircle className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />}
                      <div>
                        <p className="text-sm font-medium text-slate-700">{row.hyperscaler.value}</p>
                        <p className="text-xs text-slate-400 mt-1">{row.hyperscaler.note}</p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Decision Criteria */}
      <div>
        <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-600" />
          關鍵決策準則
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {decisionCriteria.map((criteria, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm font-black text-slate-900 mb-1">{criteria.criterion}</p>
              <p className="text-xs text-slate-500 mb-4">{criteria.question}</p>
              <div className="space-y-3">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="text-xs font-bold text-red-700 mb-1">{criteria.option1.name}</p>
                  <p className="text-sm text-slate-700">{criteria.option1.outcome}</p>
                  {criteria.option1.risk && (
                    <p className="text-xs text-red-600 mt-2 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {criteria.option1.risk}
                    </p>
                  )}
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <p className="text-xs font-bold text-green-700 mb-1">{criteria.option2.name}</p>
                  <p className="text-sm text-slate-700">{criteria.option2.outcome}</p>
                  {criteria.option2.upside && (
                    <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {criteria.option2.upside}
                    </p>
                  )}
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-1 text-xs font-black text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    建議選擇：{criteria.recommendation === 'option2' ? '選項 2' : '選項 1'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk-Reward Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
          <h3 className="text-lg font-black text-green-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            投資軟體的風險與回報
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-2">上行空間</p>
              <ul className="space-y-2">
                {riskReward.invest.upside.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">下行風險</p>
              <ul className="space-y-2">
                {riskReward.invest.downside.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-green-200">
              <p className="text-sm font-black text-green-900">{riskReward.invest.netAssessment}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border-2 border-red-200">
          <h3 className="text-lg font-black text-red-900 mb-4 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-600" />
            不投資的風險與代價
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">有限的好處</p>
              <ul className="space-y-2">
                {riskReward.notInvest.upside.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">嚴重的後果</p>
              <ul className="space-y-2">
                {riskReward.notInvest.downside.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-red-200">
              <p className="text-sm font-black text-red-900">{riskReward.notInvest.netAssessment}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white">
        <h3 className="text-xl font-black mb-6 flex items-center gap-3">
          <Target className="w-6 h-6 text-blue-400" />
          立即行動項目
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {leadershipDecisionMatrix.callToAction.points.map((action, idx) => (
            <div key={idx} className="bg-white/10 rounded-xl p-5">
              <p className="text-sm font-bold text-white mb-3">{action.action}</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-3 h-3" />
                  {action.timeline}
                </div>
                <div className="text-slate-400">負責人：{action.owner}</div>
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
                  action.status === '待決策' ? 'bg-red-500/20 text-red-400' :
                  action.status === '待預算批准' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {action.status === '待決策' ? '🔴 待決策' :
                   action.status === '待預算批准' ? '🟡 待預算批准' :
                   '🔵 進行中'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipDecisionMatrixView;
