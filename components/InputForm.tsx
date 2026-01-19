
import React, { useState } from 'react';
import { UserData } from '../types';

interface InputFormProps {
  onSubmit: (data: UserData) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    likes: '',
    habit: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.likes) {
      alert("กรุณากรอกชื่อและสิ่งที่ชอบ เพื่อให้การทำนายแม่นยำนะจ๊ะ 🧙‍♀️");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-5">
      <div>
        <label className="block text-sm font-semibold text-[#8b5e3c] mb-1">ชื่อ-นามสกุล ของเจ้าชะตา</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="เช่น คุณสมศรี มีสุข"
          className="w-full p-3 bg-[#faf9f6] border border-[#eaddcf] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4a373] transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#8b5e3c] mb-1">สิ่งที่ชอบทำมากที่สุด (Key of Soul)</label>
        <input
          type="text"
          value={formData.likes}
          onChange={(e) => setFormData({ ...formData, likes: e.target.value })}
          placeholder="เช่น วาดรูป, เล่นเกม, เลี้ยงแมว, คำนวณ"
          className="w-full p-3 bg-[#faf9f6] border border-[#eaddcf] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4a373] transition-all"
        />
        <p className="text-[10px] text-gray-400 mt-1">*พลังงานจะเข้มข้นขึ้นตามสิ่งที่ท่านชอบ</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#8b5e3c] mb-1">นิสัยส่วนตัวเล็กๆ น้อยๆ</label>
        <textarea
          rows={2}
          value={formData.habit}
          onChange={(e) => setFormData({ ...formData, habit: e.target.value })}
          placeholder="เช่น ชอบอยู่คนเดียว, พูดเก่ง, ขี้สงสัย"
          className="w-full p-3 bg-[#faf9f6] border border-[#eaddcf] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4a373] transition-all"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-full text-white font-mali text-lg font-bold shadow-lg shadow-[#8b5e3c]/30 hover:scale-[1.02] active:scale-95 transition-transform bg-gradient-to-br from-[#d4a373] to-[#8b5e3c]"
      >
        เปิดไพ่ทำนายดวงชะตา
      </button>
    </form>
  );
};

export default InputForm;
