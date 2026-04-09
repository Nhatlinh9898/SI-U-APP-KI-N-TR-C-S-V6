import React from 'react';

export const FinancialCalculatorPreview = ({ title, subtitle, description, buttonText, calculatorData, primary_color = 'blue' }: any) => {
  const defaultData = {
    label: 'Số tiền vay',
    value: '500,000,000',
    unit: 'VNĐ',
    fields: [
      { label: 'Lãi suất', value: '7.5', unit: '%' },
      { label: 'Thời hạn', value: '10', unit: 'Năm' }
    ],
    resultLabel: 'Ước tính trả hàng tháng',
    resultValue: '5,935,000 VNĐ'
  };

  const data = calculatorData || defaultData;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-gray-900 rounded-[48px] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative overflow-hidden`}>
          <div className={`absolute top-0 left-0 w-96 h-96 bg-${primary_color}-600/20 blur-[120px] rounded-full`}></div>
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">{title}</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">{description}</p>
            <button className={`px-10 py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-${primary_color}-600/30`}>
              {buttonText}
            </button>
          </div>

          <div className="lg:w-1/2 w-full relative z-10">
            <div className="bg-white rounded-[32px] p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">{data.label}</label>
                  <div className="relative">
                    <input type="text" defaultValue={data.value} className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 font-bold text-gray-900 focus:ring-2 focus:ring-blue-500" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">{data.unit}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {data.fields.map((field: any, i: number) => (
                    <div key={i} className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest">{field.label}</label>
                      <div className="relative">
                        <input type="text" defaultValue={field.value} className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 font-bold text-gray-900 focus:ring-2 focus:ring-blue-500" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">{field.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`p-6 bg-${primary_color}-50 rounded-2xl border border-${primary_color}-100`}>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{data.resultLabel}</div>
                  <div className={`text-3xl font-black text-${primary_color}-600`}>{data.resultValue}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
