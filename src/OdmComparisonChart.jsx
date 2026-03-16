import React from 'react';
import { CheckCircle, XCircle, TrendingUp, Award, Shield, Zap } from 'lucide-react';

const OdmComparisonChart = () => {
  const comparisons = [
    {
      feature: '軟體團隊規模',
      foxconn: '50-80 人（規劃中）',
      foxconnDetail: '跨 L9-L12 完整編制',
      quanta: '10-20 人',
      quantaDetail: '以硬體為本，軟體為輔',
      wistron: '10-15 人',
      wistronDetail: '基礎驅動開發',
      asus: '15-25 人',
      asusDetail: '消費型軟體為主',
      gigabyte: '5-10 人',
      gigabyteDetail: '基本 BMC 支援',
    },
    {
      feature: 'BMC/BIOS 能力',
      foxconn: '完整自研',
      foxconnDetail: 'OpenBMC 深度定制、ACPI 完整支援',
      quanta: '部分自研',
      quantaDetail: '依賴供應商 BSP',
      wistron: '部分自研',
      wistronDetail: '標準化 BSP 修改',
      asus: '消費級完整',
      asusDetail: '企業級依賴合作夥伴',
      gigabyte: '基礎支援',
      gigabyteDetail: '標準 AMI BIOS',
    },
    {
      feature: 'AI 軟體棧',
      foxconn: '完整整合',
      foxconnDetail: 'CUDA/ROCm/TensorRT-LLM/vLLM 預整合',
      quanta: '基礎支援',
      quantaDetail: '標準 NVIDIA 驅動',
      wistron: '基礎支援',
      wistronDetail: '依客戶要求安裝',
      asus: '消費型',
      asusDetail: '遊戲/創應用優化',
      gigabyte: '最小化',
      gigabyteDetail: '僅基本驅動',
    },
    {
      feature: '遠端運維平台',
      foxconn: '完整 Remote Ops',
      foxconnDetail: '預測性維護、70% 遠端修復、自動修復',
      quanta: '基礎監控',
      quantaDetail: '被動告警',
      wistron: '基礎監控',
      wistronDetail: '需現場支援',
      asus: '消費型工具',
      asusDetail: '單機管理為主',
      gigabyte: '無',
      gigabyteDetail: '依賴第三方',
    },
    {
      feature: 'K8s/編排能力',
      foxconn: '深度整合',
      foxconnDetail: 'Helm Charts、多租戶、GPU 調度',
      quanta: '無',
      quantaDetail: '不支援',
      wistron: '無',
      wistronDetail: '不支援',
      asus: '無',
      asusDetail: '不支援',
      gigabyte: '無',
      gigabyteDetail: '不支援',
    },
    {
      feature: '能源效率優化',
      foxconn: 'PUE 1.6→1.4',
      foxconnDetail: '散熱能耗 -15-25%、GPU 級監控',
      quanta: '基礎散熱',
      quantaDetail: '被動散熱設計',
      wistron: '基礎散熱',
      wistronDetail: '標準風扇控制',
      asus: '消費級優化',
      asusDetail: '遊戲場景優化',
      gigabyte: '最小化',
      gigabyteDetail: '被動散熱',
    },
    {
      feature: '部署時間',
      foxconn: '2 小時',
      foxconnDetail: '預整合 AI 棧、自動化部署',
      quanta: '2-4 週',
      quantaDetail: '手動設定',
      wistron: '2-4 週',
      wistronDetail: '客戶自行整合',
      asus: '1-2 週',
      asusDetail: '消費型快速部署',
      gigabyte: '4 週+',
      gigabyteDetail: '完全手動',
    },
    {
      feature: '軟體營收佔比',
      foxconn: '目標 20%（2028）',
      foxconnDetail: 'NT$ 750M/年',
      quanta: '<5%',
      quantaDetail: '硬體為本',
      wistron: '<5%',
      wistronDetail: '硬體為本',
      asus: '~10%',
      asusDetail: '消費軟體',
      gigabyte: '<3%',
      gigabyteDetail: '幾乎無軟體營收',
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <Shield className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black">OEM/ODM 同行軟體能力比較</h2>
            <p className="text-orange-100 text-sm font-medium">與廣達、緯穎、華碩、技嘉的軟體差異化分析</p>
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
                  Foxconn
                </th>
                <th className="text-center py-4 px-4 text-sm font-black text-slate-600 uppercase tracking-wider">
                  廣達
                </th>
                <th className="text-center py-4 px-4 text-sm font-black text-slate-600 uppercase tracking-wider">
                  緯穎
                </th>
                <th className="text-center py-4 px-4 text-sm font-black text-slate-600 uppercase tracking-wider">
                  華碩
                </th>
                <th className="text-center py-4 px-4 text-sm font-black text-slate-600 uppercase tracking-wider">
                  技嘉
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
                      <div className="text-lg font-black text-slate-700">{row.quanta}</div>
                      <div className="text-xs text-slate-500">{row.quantaDetail}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="space-y-1">
                      <div className="text-lg font-black text-slate-700">{row.wistron}</div>
                      <div className="text-xs text-slate-500">{row.wistronDetail}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="space-y-1">
                      <div className="text-lg font-black text-slate-700">{row.asus}</div>
                      <div className="text-xs text-slate-500">{row.asusDetail}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="space-y-1">
                      <div className="text-lg font-black text-slate-700">{row.gigabyte}</div>
                      <div className="text-xs text-slate-500">{row.gigabyteDetail}</div>
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
            <Award className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-black text-blue-800 mb-2">Foxconn 軟體差異化優勢</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>唯一完整的 L9-L12 軟體棧：</strong>其他廠商仍以硬體為本，軟體為輔</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>唯一規劃 50-80 人軟體團隊：</strong>競爭對手多為 10-20 人，且以支援為主</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>唯一的遠端運維平台：</strong>預測性維護、自動修復，70% 問題遠端解決</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>唯一的 K8s 編排能力：</strong>支援多租戶、GPU 調度、Helm Charts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>軟體營收目標 20%：</strong>2028 年 NT$ 750M，競爭對手仍&lt;5%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategic Insight */}
        <div className="mt-6 p-6 bg-amber-50 rounded-2xl border border-amber-200">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-amber-600 mt-1" />
            <div>
              <h3 className="text-lg font-black text-amber-800 mb-2">戰略洞察</h3>
              <p className="text-sm text-slate-700">
                廣達、緯穎、技嘉仍以「硬體為本」，軟體僅為基本支援。華碩雖有較強軟體能力，但聚焦消費型市場。
                <strong className="text-amber-700">Foxconn 是唯一一家將「軟體定義」作為核心戰略的 OEM/ODM</strong>，
                這是在 AI 時代脫離商品化陷阱、實現溢價 15-20% 毛利率的關鍵差異化。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdmComparisonChart;
