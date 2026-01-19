
import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "กำลังสื่อสารกับดวงดาว...",
    "วิเคราะห์บุคลิกภาพและความชอบ...",
    "เปิดตำราแห่งโชคชะตา...",
    "ผูกพันวิญญาณเข้ากับเส้นทางอาชีพ..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-12 flex flex-col items-center justify-center space-y-6">
      <div className="text-7xl animate-float">🔮</div>
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-mali font-bold text-[#8b5e3c]">
          {messages[messageIndex]}
        </h3>
        <p className="text-xs text-gray-400 animate-pulse">โปรดรอด้วยใจที่สงบนิ่ง...</p>
      </div>
      <div className="w-48 h-1.5 bg-[#eaddcf] rounded-full overflow-hidden">
        <div className="h-full bg-[#d4a373] animate-[loading_4s_ease-in-out_infinite]"></div>
      </div>
      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
