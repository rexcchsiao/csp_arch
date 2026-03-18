import React from 'react';
import { buildVsBuyAnalysis } from './build-vs-buy';
import { Target, TrendingUp, Clock, DollarSign, CheckCircle, XCircle, AlertCircle, Trophy } from 'lucide-react';

const BuildVsBuyView = () => {
  const { headline, context, coreArgument, executiveSummary, tcoComparison, decisionFramework, objections, caseStudy } = buildVsBuyAnalysis;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg border border-blue-200">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{headline}</h2>
        <p className="text-gray-700 text-lg">{context}</p>
        <div className="mt-4 p-4 bg-blue-100 rounded-lg border-l-4 border-blue-600">
          <p className="font-semibold text-blue-900">{coreArgument}</p>
        </div>
      </div>

      {/* Executive Summary Card */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          30-Second Answer
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 font-medium">問題：{executiveSummary.question}</p>
            <p className="text-gray-900 mt-2">{executiveSummary.answer}</p>
          </div>
          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <p className="text-blue-900 font-mono text-sm">{executiveSummary.math}</p>
          </div>
        </div>
      </div>

      {/* TCO Comparison */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-600" />
          {tcoComparison.headline}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Build In-House */}
          <div className="border border-red-200 rounded-lg p-4 bg-red-50">
            <h4 className="font-bold text-red-900 mb-3">自建方案</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>一次性投入:</span>
                <span className="font-mono font-bold">{tcoComparison.buildInHouse.upfrontCost.total}</span>
              </div>
              <div className="flex justify-between">
                <span>年度成本:</span>
                <span className="font-mono font-bold">{tcoComparison.buildInHouse.ongoingCost.total}</span>
              </div>
              <div className="flex justify-between">
                <span>時程:</span>
                <span className="font-mono">{tcoComparison.buildInHouse.timeline}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-red-200">
                <div className="flex justify-between text-lg">
                  <span className="font-bold">5 年 TCO:</span>
                  <span className="font-mono font-bold text-red-700">{tcoComparison.buildInHouse.fiveYearTCO}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buy Foxconn */}
          <div className="border border-green-200 rounded-lg p-4 bg-green-50">
            <h4 className="font-bold text-green-900 mb-3">採購 Foxconn 方案</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>一次性投入:</span>
                <span className="font-mono font-bold">{tcoComparison.buyFoxconn.upfrontCost.total}</span>
              </div>
              <div className="flex justify-between">
                <span>年度成本:</span>
                <span className="font-mono font-bold">{tcoComparison.buyFoxconn.ongoingCost.total}</span>
              </div>
              <div className="flex justify-between">
                <span>時程:</span>
                <span className="font-mono">{tcoComparison.buyFoxconn.timeline}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-green-200">
                <div className="flex justify-between text-lg">
                  <span className="font-bold">5 年 TCO:</span>
                  <span className="font-mono font-bold text-green-700">{tcoComparison.buyFoxconn.fiveYearTCO}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-green-100 rounded-lg border-l-4 border-green-600">
          <p className="text-green-900 font-semibold">{tcoComparison.savings.fiveYearSavings}</p>
          <p className="text-green-800 text-sm mt-1">{tcoComparison.savings.keyInsight}</p>
        </div>
      </div>

      {/* Decision Framework */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-purple-600" />
          {decisionFramework.headline}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-bold text-red-700 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              應該自建的情況
            </h4>
            <ul className="space-y-2">
              {decisionFramework.buildWhen.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-bold text-green-700 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              應該採購的情況
            </h4>
            <ul className="space-y-2">
              {decisionFramework.buyWhen.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Customer Objections */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-orange-600" />
          客戶異議處理
        </h3>
        <div className="space-y-4">
          {objections.map((obj, idx) => (
            <div key={idx} className="border-l-4 border-orange-300 pl-4 py-2 bg-orange-50 rounded">
              <p className="font-bold text-gray-900 mb-2">異議：{obj.objection}</p>
              <p className="text-gray-700 text-sm mb-2">{obj.response}</p>
              {obj.evidence && (
                <p className="text-xs text-gray-600 italic">證據：{obj.evidence}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Case Study */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-600" />
          {caseStudy.headline}
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm">
              <p className="text-gray-600">客戶：{caseStudy.customer}</p>
              <p className="text-gray-600 mt-1">情境：{caseStudy.situation}</p>
            </div>
            <div className="text-sm">
              <p className="font-bold text-green-700">決策結果：選擇 Foxconn 方案</p>
              <ul className="mt-2 space-y-1 text-xs">
                {caseStudy.decision && caseStudy.reasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded border border-green-200">
            <p className="text-green-900 font-semibold mb-2">成果：</p>
            <ul className="space-y-1 text-sm">
              <li>• 時程：{caseStudy.outcome.timeline}</li>
              <li>• 利用率：{caseStudy.outcome.utilization}</li>
              <li>• 成本：{caseStudy.outcome.cost}</li>
              <li>• 戰略：{caseStudy.outcome.strategic}</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded border-l-4 border-blue-600 italic text-gray-700">
            "{caseStudy.outcome.quote}"
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildVsBuyView;
