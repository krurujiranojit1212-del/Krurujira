
import React, { useState } from 'react';
import { UserData, PredictionResult, AppState } from './types';
import { getCareerPrediction } from './geminiService';
import InputForm from './components/InputForm';
import LoadingScreen from './components/LoadingScreen';
import ResultCard from './components/ResultCard';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.INPUT);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePredict = async (data: UserData) => {
    setUserData(data);
    setAppState(AppState.LOADING);
    setError(null);

    try {
      const prediction = await getCareerPrediction(data);
      setResult(prediction);
      setAppState(AppState.RESULT);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "เกิดข้อผิดพลาดในการทำนาย");
      setAppState(AppState.INPUT);
    }
  };

  const handleReset = () => {
    setAppState(AppState.INPUT);
    setResult(null);
    setUserData(null);
  };

  return (
    <div className="w-full max-w-[440px] bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-[#eaddcf]/50 text-center relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#d4a373] to-transparent"></div>
      
      <div className="relative z-10">
        {appState === AppState.INPUT && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-mali font-bold text-[#8b5e3c] mb-2">🔮 Career Oracle</h1>
              <p className="text-sm text-gray-500">ความลับของดวงดาวรอให้คุณมาพิสูจน์</p>
            </div>
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-lg border border-red-100 italic">
                {error}
              </div>
            )}
            <InputForm onSubmit={handlePredict} />
          </>
        )}

        {appState === AppState.LOADING && <LoadingScreen />}

        {appState === AppState.RESULT && result && userData && (
          <ResultCard 
            result={result} 
            userData={userData} 
            onReset={handleReset} 
          />
        )}
      </div>

      {/* Decorative footer */}
      <div className="mt-8 pt-4 border-t border-[#eaddcf]/20">
        <p className="text-[10px] text-gray-300 tracking-widest font-mali">
          SINCE 2025 • MYSTIC CAREER GUIDANCE
        </p>
      </div>
    </div>
  );
};

export default App;
