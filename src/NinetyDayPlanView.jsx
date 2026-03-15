// Ninety-Day Action Plan View - Executable roadmap for leadership approval
import React from 'react';
import { ninetyDayPlan } from './software-differentiation.js';
import { Calendar, CheckCircle, Target, DollarSign, TrendingUp, AlertTriangle, Clock, Users, FileText } from 'lucide-react';

const NinetyDayPlanView = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <Calendar className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black">{ninetyDayPlan.headline}</h2>
            <p className="text-indigo-100 text-sm font-medium mt-1">{ninetyDayPlan.purpose}</p>
          </div>
        </div>
      </div>

      {/* Phases */}
      <div className="space-y-6">
        {ninetyDayPlan.phases.map((phase, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Phase Header */}
            <div className={`p-6 border-b ${
              idx === 0 ? 'bg-blue-50 border-blue-100' : 
              idx === 1 ? 'bg-indigo-50 border-indigo-100' : 
              'bg-purple-50 border-purple-100'
            }`}>
              <div className="flex items-center justify-between">
                <h3 className={`text-xl font-black ${
                  idx === 0 ? 'text-blue-800' : 
                  idx === 1 ? 'text-indigo-800' : 
                  'text-purple-800'
                }`}>
                  {phase.phase}
                </h3>
                <div className={`px-4 py-2 rounded-full text-xs font-black ${
                  idx === 0 ? 'bg-blue-600 text-white' : 
                  idx === 1 ? 'bg-indigo-600 text-white' : 
                  'bg-purple-600 text-white'
                }`}>
                  {phase.phase.includes('Day 1-30') ? 'Month 1' : 
                   phase.phase.includes('Day 31-60') ? 'Month 2' : 'Month 3'}
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="p-6">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Target className="w-4 h-4" /> 關鍵活動
              </h4>
              <ul className="space-y-3 mb-6">
                {phase.activities.map((activity, actIdx) => (
                  <li key={actIdx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700 flex-1">{activity}</span>
                  </li>
                ))}
              </ul>

              {/* Deliverables */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <FileText className="w-3 h-3" /> 交付成果
                </h5>
                <div className="flex flex-wrap gap-2">
                  {phase.deliverables.map((deliverable, dIdx) => (
                    <span key={dIdx} className="px-3 py-1.5 bg-white rounded-lg text-xs font-bold text-slate-700 border border-slate-200">
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Budget Summary */}
      <div className="bg-slate-900 rounded-3xl p-8 text-white">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-green-500/20 rounded-xl">
            <DollarSign className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h3 className="text-xl font-black">90 天總預算</h3>
            <p className="text-slate-400 text-sm">{ninetyDayPlan.total90DayBudget}</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {ninetyDayPlan.phases.map((phase, idx) => (
            <div key={idx} className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-slate-400 mb-2">{phase.phase.split(':')[0]}</p>
              <p className="text-lg font-black text-green-400">
                {idx === 0 ? 'NT$ 10M' : idx === 1 ? 'NT$ 15M' : 'NT$ 20M'}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 pt-4">
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">預期成果</h4>
          <ul className="space-y-2">
            {ninetyDayPlan.expectedOutcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Risk Mitigation */}
      <div className="bg-amber-50 rounded-3xl p-8 border-2 border-amber-200">
        <h3 className="text-lg font-black text-amber-900 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" /> 風險緩解措施
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {ninetyDayPlan.riskMitigation.map((risk, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 border border-amber-100">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-700">{risk}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NinetyDayPlanView;
