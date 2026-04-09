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
    resultValue: '5,935,000 VNĐ',
    impact_description: 'Tiết kiệm lên đến 15% so với các gói vay thông thường.'
  };

  const data = calculatorData || defaultData;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-950 rounded-[80px] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 shadow-[0_64px_128px_-12px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -ml-80 -mt-80"></div>
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">{title || 'Công cụ tính toán tài chính'}</h2>
            <p className="text-xl text-white/40 mb-12 leading-relaxed font-medium">{description || 'Lập kế hoạch tài chính thông minh với công cụ dự toán chính xác của chúng tôi.'}</p>
            <button className="px-12 py-5 bg-blue-600 text-white rounded-[24px] font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)]">
              {buttonText || 'Bắt đầu tính toán'}
            </button>
          </div>

          <div className="lg:w-1/2 w-full relative z-10">
            <div className="bg-white rounded-[56px] p-10 md:p-14 shadow-2xl border border-white/10">
              <div className="space-y-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">{data.label}</label>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                    <input type="text" defaultValue={data.value} className="relative w-full bg-gray-50 border-2 border-gray-100 rounded-3xl px-8 py-6 font-black text-2xl text-gray-900 outline-none focus:border-blue-500 transition-all shadow-inner" />
                    <span className="absolute right-8 top-1/2 -translate-y-1/2 font-black text-gray-400 text-lg">{data.unit}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {data.fields.map((field: any, i: number) => (
                    <div key={i} className="space-y-4">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">{field.label}</label>
                      <div className="relative">
                        <input type="text" defaultValue={field.value} className="w-full bg-gray-50 border-2 border-gray-100 rounded-3xl px-8 py-5 font-black text-xl text-gray-900 outline-none focus:border-blue-500 transition-all shadow-inner" />
                        <span className="absolute right-8 top-1/2 -translate-y-1/2 font-black text-gray-400">{field.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-10 bg-blue-600/5 rounded-[40px] border-2 border-blue-600/10 shadow-inner">
                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-3">{data.resultLabel}</div>
                  <div className="text-4xl md:text-5xl font-black text-blue-600 tracking-tighter">{data.resultValue}</div>
                  {data.impact_description && (
                    <p className="mt-4 text-sm font-bold text-blue-900/40 leading-relaxed italic">
                      * {data.impact_description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
