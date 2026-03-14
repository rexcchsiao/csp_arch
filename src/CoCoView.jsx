import React from 'react';
import CompetitiveLandscapeView from './CompetitiveLandscapeView';
import SoftwareDifferentiationView from './SoftwareDifferentiationView';
import { ArrowLeft, BarChart3 } from 'lucide-react';

const CoCoView = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold">返回主頁面</span>
        </button>
        
        <div className="space-y-12">
          <CompetitiveLandscapeView />
          <SoftwareDifferentiationView />
        </div>
      </div>
    </div>
  );
};

export default CoCoView;
