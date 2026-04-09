import React from 'react';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'down';
}

export const SystemStatusWidget = ({ title, subtitle, services, uptime, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">{title || 'Trạng thái hệ thống'}</h2>
              <p className="text-gray-500">{subtitle || 'Cập nhật thời gian thực về các dịch vụ của chúng tôi'}</p>
            </div>
            <div className="bg-green-100 text-green-700 px-6 py-2 rounded-full font-black text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              Tất cả hệ thống hoạt động bình thường
            </div>
          </div>

          <div className="space-y-6">
            {services?.map((service: ServiceStatus, index: number) => (
              <div key={index} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-50 shadow-sm">
                <div className="font-bold text-gray-700">{service.name}</div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-black uppercase tracking-widest ${
                    service.status === 'operational' ? 'text-green-500' : 
                    service.status === 'degraded' ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {service.status === 'operational' ? 'Hoạt động' : 
                     service.status === 'degraded' ? 'Hiệu suất thấp' : 'Ngừng hoạt động'}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${
                    service.status === 'operational' ? 'bg-green-500' : 
                    service.status === 'degraded' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-400 font-medium">
              Uptime trong 30 ngày qua: <span className="text-gray-900 font-black">{uptime || '99.99%'}</span>
            </div>
            <button className={`text-${primary_color}-600 font-black text-sm uppercase tracking-widest hover:underline`}>
              Xem lịch sử sự cố <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
