import React from 'react';
import { Server, Brain, TrendingUp, Users } from 'lucide-react';

export const NewModulesPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* CSP Remote Ops */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-7 text-white shadow-xl">
        <h4 className="font-black text-xl mb-3 flex items-center gap-2">
          <Server className="w-6 h-6" /> CSP 遠端運維能力
        </h4>
        <p className="text-blue-100 text-sm leading-relaxed mb-4">
          為 Hyperscaler/CSP 客戶提供即時監控、遠端診斷、預測性維護，讓運維團隊不用派人到現場就能掌握所有節點狀態。
        </p>
        <ul className="text-sm space-y-2">
          <li className="flex items-center gap-2">✓ 即時資源與環境監控</li>
          <li className="flex items-center gap-2">✓ 遠端 Log 與診斷</li>
          <li className="flex items-center gap-2">✓ 預測性維護</li>
          <li className="flex items-center gap-2">✓ 遠端運維能力</li>
        </ul>
      </div>

      {/* Enterprise RAG */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-7 text-white shadow-xl">
        <h4 className="font-black text-xl mb-3 flex items-center gap-2">
          <Brain className="w-6 h-6" /> 企業私有 AI 知識庫
        </h4>
        <p className="text-emerald-100 text-sm leading-relaxed mb-4">
          為企業提供隨插即用的私有 RAG 系統，資料不上雲，同時享受 AI 帶來的效率提升。
        </p>
        <ul className="text-sm space-y-2">
          <li className="flex items-center gap-2">✓ 私有 AI 知識庫一體機</li>
          <li className="flex items-center gap-2">✓ 資料匯入與前處理</li>
          <li className="flex items-center gap-2">✓ 權限與治理</li>
          <li className="flex items-center gap-2">✓ 標準化 RAG 流程</li>
        </ul>
      </div>

      {/* Software Differentiation */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-3xl p-7 text-white shadow-xl">
        <h4 className="font-black text-xl mb-3 flex items-center gap-2">
          <TrendingUp className="w-6 h-6" /> 軟體差異化價值
        </h4>
        <p className="text-purple-100 text-sm leading-relaxed mb-4">
          軟體是硬體價值的放大器。量化指標：GPU 利用率 +42%、部署時間 -99%、運維人力 -70%。
        </p>
        <ul className="text-sm space-y-2">
          <li className="flex items-center gap-2">✓ GPU 利用率提升 42%</li>
          <li className="flex items-center gap-2">✓ 部署時間減少 99%</li>
          <li className="flex items-center gap-2">✓ 運維人力減少 70%</li>
          <li className="flex items-center gap-2">✓ ROI 週期縮短 50%</li>
        </ul>
      </div>

      {/* Competitive Landscape */}
      <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl p-7 text-white shadow-xl">
        <h4 className="font-black text-xl mb-3 flex items-center gap-2">
          <Users className="w-6 h-6" /> 競爭優勢分析
        </h4>
        <p className="text-orange-100 text-sm leading-relaxed mb-4">
          直面 NVIDIA 主導的市場，找出差異化定位：Brownfield 整合、Multi-vendor 治理、在地化服務。
        </p>
        <ul className="text-sm space-y-2">
          <li className="flex items-center gap-2">✓ 5 大差異化優勢</li>
          <li className="flex items-center gap-2">✓ 4 個未解痛點</li>
          <li className="flex items-center gap-2">✓ CSP 價值主張</li>
          <li className="flex items-center gap-2">✓ 戰略定位建議</li>
        </ul>
      </div>
    </div>
  );
};
