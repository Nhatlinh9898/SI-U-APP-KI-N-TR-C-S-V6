import React, { useState } from 'react';

interface TimeSlot {
  time: string;
  available: boolean;
}

export const BookingCalendar = ({ title, subtitle, slots, primary_color = 'blue' }: any) => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const dates = [
    { day: 'Thứ 2', date: '12/04' },
    { day: 'Thứ 3', date: '13/04' },
    { day: 'Thứ 4', date: '14/04' },
    { day: 'Thứ 5', date: '15/04' },
    { day: 'Thứ 6', date: '16/04' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="flex overflow-x-auto gap-4 mb-10 pb-2 hide-scrollbar">
            {dates.map((d, i) => (
              <button
                key={i}
                onClick={() => setSelectedDate(i)}
                className={`flex-shrink-0 w-24 p-4 rounded-2xl text-center transition-all border ${
                  selectedDate === i 
                    ? `bg-${primary_color}-600 text-white border-${primary_color}-600 shadow-lg shadow-${primary_color}-600/30` 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">{d.day}</div>
                <div className="font-black text-lg">{d.date}</div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
            {slots?.map((slot: TimeSlot, index: number) => (
              <button
                key={index}
                disabled={!slot.available}
                onClick={() => setSelectedSlot(slot.time)}
                className={`p-4 rounded-xl font-bold text-sm transition-all border ${
                  !slot.available ? 'bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed' :
                  selectedSlot === slot.time ? `bg-${primary_color}-100 text-${primary_color}-700 border-${primary_color}-300` :
                  'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>

          <button 
            disabled={!selectedSlot}
            className={`w-full py-4 rounded-2xl font-black text-lg transition-all ${
              selectedSlot 
                ? `bg-${primary_color}-600 text-white shadow-xl shadow-${primary_color}-600/30 hover:scale-[1.02]` 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {selectedSlot ? `Xác nhận đặt lịch lúc ${selectedSlot}` : 'Vui lòng chọn khung giờ'}
          </button>
        </div>
      </div>
    </section>
  );
};
