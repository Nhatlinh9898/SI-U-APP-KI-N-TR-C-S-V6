import React from 'react';

interface BundleProduct {
  name: string;
  image: string;
  price: string;
}

export const ProductBundleCard = ({ title, subtitle, mainProduct, addOns, totalPrice, discountPrice, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="bg-white rounded-[48px] p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="w-40 h-40 bg-gray-50 rounded-3xl p-4 border border-gray-100 relative">
                <img src={mainProduct?.image} alt={mainProduct?.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap">Chính</div>
              </div>
              
              <div className="text-3xl font-black text-gray-300">+</div>

              {addOns?.map((item: BundleProduct, i: number) => (
                <React.Fragment key={i}>
                  <div className="w-32 h-32 bg-gray-50 rounded-3xl p-4 border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  {i < addOns.length - 1 && <div className="text-2xl font-black text-gray-300">+</div>}
                </React.Fragment>
              ))}
            </div>

            <div className="lg:w-80 w-full bg-gray-50 rounded-[32px] p-8 border border-gray-100">
              <div className="text-gray-400 text-sm font-bold uppercase mb-2">Tổng giá trị gói</div>
              <div className="text-gray-400 line-through text-xl font-bold mb-1">{totalPrice}</div>
              <div className={`text-4xl font-black text-${primary_color}-600 mb-6`}>{discountPrice}</div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm font-bold text-green-600">
                  <span>✅</span> Tiết kiệm 25% khi mua gói
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-green-600">
                  <span>✅</span> Miễn phí vận chuyển
                </div>
              </div>

              <button className={`w-full py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-${primary_color}-600/30`}>
                Mua trọn bộ ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
