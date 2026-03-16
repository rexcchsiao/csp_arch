import React from 'react';
import { CheckCircle, XCircle, TrendingUp, Zap, Shield, Award } from 'lucide-react';

const CompetitiveComparisonChart = () => {
  const comparisons = [
    {
      feature: 'GPU 利用率',
      foxconn: '85%+',
      foxconnDetail: '透過 MIG/vGPU + 資源調度',
      nvidia: '40-60%',
      nvidiaDetail: '基礎管理，無優化',
      advantage: '+42%'
    },
    {
      feature: '部署時間',
      foxconn: '2 小時',
      foxconnDetail: '預整合 AI 軟體棧',
      nvidia: '2-4 週',
      nvidiaDetail: '手動設定',
      advantage: '-99%'
    },
    {
      feature: '遠端修復率',
      foxconn: '70%',
      foxconnDetail: '預測性維護 + 自動修復',
      nvidia: '<30%',
      nvidiaDetail: '依賴現場支援',
      advantage: '+40pp'
    },
    {
      feature: 'PUE 改善',
      foxconn: '1.6 → 1.4',
      foxconnDetail: '能耗可視化 + 散熱優化',
      nvidia: '1.5-1.7',
      nvidiaDetail: '基礎散熱',
      advantage: '-12.5%'
    },
    {
      feature: '能源成本節省',
      foxconn: '15-25%',
      foxconnDetail: '1MW 資料中心年省 NT$ 8-12M',
      nvidia: '基準',
      nvidiaDetail: '無優化',
      advantage: 'NT$ 8-12M/年'
    },
    {
      feature: '停機時間',
      foxconn: '15 分鐘',
      foxconnDetail: '故障預警 + 自動修復',
      nvidia: '7.75 小時',
      nvidiaDetail: '被動應變',
      advantage: '-97%'
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <TrendingUp className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black">Foxconn vs. NVIDIA 競爭優勢比較</h2>
            <p className="text-blue-100 text-sm font-medium">關鍵指標全方位對比</p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="p-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-4 px-4 text-sm font-black text-slate-900 uppercase tracking-wider">
                  指標
                </th>
                <th className="text-center py-4 px-4 text-sm font-black text-blue-600 uppercase tracking-wider">
                  Foxconn + Software
                </th>
                <th className="text-center py-4 px-4 text-sm font-black text-green-600 uppercase tracking-wider">
                  NVIDIA Base Command
                </th>
                <th className="text-center py-4 px-4 text-sm font-black text-indigo-600 uppercase tracking-wider">
                  改善幅度
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4">
                    <span className="text-sm font-bold text-slate-900">{row.feature}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="space-y-1">
                      <div className="text-lg font-black text-blue-600">{row.foxconn}</div>
                      <div className="text-xs text-slate-500">{row.foxconnDetail}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="space-y-1">
                      <div className="text-lg font-black text-green-600">{row.nvidia}</div>
                      <div className="text-xs text-slate-500">{row.nvidiaDetail}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold">
                      <Award className="w-4 h-4" />
                      {row.advantage}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-black text-blue-800 mb-2">核心優勢總結</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>中立基礎設施：</strong>支援 NVIDIA + AMD，避免供應商鎖定</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>深度整合：</strong>L9-L12 全棧覆蓋，從韌體到應用層</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>能源效率：</strong>PUE 從 1.6 降至 1.4，年省 NT$ 8-12M</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>快速部署：</strong>2 小時上線 vs. 2-4 週手動設定</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveComparisonChart;
