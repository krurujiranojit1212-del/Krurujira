
import React from 'react';
import { PredictionResult, UserData } from '../types';

interface ResultCardProps {
  result: PredictionResult;
  userData: UserData;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, userData, onReset }) => {
  return (
    <div className="animate-[fadeIn_0.8s_ease-out]">
      <h1 className="text-2xl font-mali font-bold text-[#8b5e3c] mb-6">✨ ดวงชะตาของคุณคือ...</h1>
      
      <div className="relative p-6 rounded-2xl border-4 border-double border-[#d4a373] bg-[#fffaf5] shadow-2xl card-inner-shadow overflow-hidden group">
        {/* Mystic Decor */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#d4a373] m-2 opacity-50"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#d4a373] m-2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#d4a373] m-2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#d4a373] m-2 opacity-50"></div>

        <div className="card-title text-2xl font-mali font-bold text-[#8b5e3c] border-b border-dashed border-[#d4a373] pb-3 mb-4">
          {result.cardName}
        </div>
        
        <div className="text-8xl my-8 transition-transform group-hover:scale-110 duration-500">
          {result.cardIcon}
        </div>

        <div className="bg-white/60 p-5 rounded-xl text-sm leading-relaxed text-[#555] text-left border border-[#eaddcf]/30 mb-6 backdrop-blur-sm">
          {result.reading}
        </div>

        <div className="text-left mb-6">
          <h4 className="text-xs font-bold text-[#8b5e3c] uppercase tracking-wider mb-2 flex items-center">
            <span className="w-1 h-1 bg-[#8b5e3c] rounded-full mr-2"></span>
            อาชีพที่ฟ้าประทานให้
          </h4>
          <div className="flex flex-wrap gap-2">
            {result.suggestedCareers.map((career, idx) => (
              <span key={idx} className="px-3 py-1 bg-[#d4a373]/10 text-[#8b5e3c] text-[13px] rounded-full border border-[#d4a373]/20">
                {career}
              </span>
            ))}
          </div>
        </div>

        <div className="text-[10px] text-gray-400 text-right mt-4 italic">
          เจ้าชะตา: <span className="font-semibold text-[#8b5e3c]">{userData.name}</span>
        </div>
      </div>

      <button
        onClick={onReset}
        className="mt-8 w-full py-3 bg-gray-400/20 text-gray-600 rounded-full font-mali text-lg hover:bg-gray-400/30 transition-colors"
      >
        ทำนายใหม่อีกครั้ง
      </button>
      
      <p className="text-[10px] text-[#d4a373] mt-3">(บันทึกหน้าจอนี้เก็บไว้เป็นเครื่องรางนำโชค)</p>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ResultCard;
