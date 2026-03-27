"use client";

import React from "react";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Giải pháp RFID của Nextwaves giúp chúng tôi giảm 60% thời gian kiểm kho. Triển khai rất nhanh, chỉ 5 ngày là có thể sử dụng.",
      name: "Nguyễn Văn A",
      role: "Quản Lý Kho",
      company: "Chuỗi Bán Lẻ Fashion Plus",
      avatar: "👨‍💼"
    },
    {
      id: 2,
      quote: "Tự động hóa quy trình nhập/xuất kho là game-changer. Chi phí thấp hơn giải pháp nhập khẩu 15%, nhưng chất lượng không kém.",
      name: "Trần Thị B",
      role: "Giám Đốc Vận Hành",
      company: "Kho Hàng Logistics Vietnam",
      avatar: "👩‍💼"
    },
    {
      id: 3,
      quote: "Thanh toán nhanh hơn 80%, khách hàng rất hài lòng. Đội hỗ trợ của Nextwaves rất chuyên nghiệp và hỗ trợ tốt.",
      name: "Lê Văn C",
      role: "Chủ Cửa Hàng",
      company: "Cửa Hàng Mỹ Phẩm Luxury",
      avatar: "👨‍🦳"
    },
    {
      id: 4,
      quote: "Hệ thống bảo vệ tài sản rất hiệu quả. Không cần đội kỹ thuật chuyên sâu, mọi người đều có thể sử dụng dễ dàng.",
      name: "Phạm Thị D",
      role: "Trưởng Bộ Phận IT",
      company: "Nhà Máy Điện Tử Hà Nội",
      avatar: "👩‍💻"
    }
  ];

  return (
    <section className="bg-zinc-50 dark:bg-zinc-900 w-full py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase mb-6">
            Khách Hàng Nói Gì
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
            Những Câu Chuyện Thành Công
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
            Hơn 100+ doanh nghiệp Việt Nam đã tin tưởng và sử dụng giải pháp RFID của Nextwaves
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-zinc-950 flex flex-col rounded-[20px] p-8 border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[14px] text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium mb-8 flex-grow">
                "{item.quote}"
              </p>

              <hr className="border-zinc-100 dark:border-white/5 mb-6" />

               {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-zinc-900 dark:text-white leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-1 leading-tight">
                    {item.role}
                  </p>
                  <p className="text-[12px] text-blue-600 dark:text-blue-400 font-semibold mt-0.5 leading-tight">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="w-full bg-blue-600 rounded-[24px] py-12 px-8 flex flex-col md:flex-row items-center justify-around gap-8 shadow-xl shadow-blue-600/20">
          <div className="text-center">
            <h3 className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">100+</h3>
            <p className="text-blue-100 font-medium text-[15px]">Doanh Nghiệp Sử Dụng Thành Công</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">95%</h3>
            <p className="text-blue-100 font-medium text-[15px]">Tỷ Lệ Hài Lòng</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">100K+</h3>
            <p className="text-blue-100 font-medium text-[15px]">Bộ Kit</p>
          </div>
        </div>

      </div>
    </section>
  );
}
