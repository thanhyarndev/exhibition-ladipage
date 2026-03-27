"use client";

import React from "react";
import { TrendingUp, Zap, Target } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      id: 1,
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Giảm Chi Phí 10-15%",
      description: "So với hàng nhập khẩu, giải pháp Nextwaves giúp doanh nghiệp tiết kiệm chi phí đầu tư đáng kể."
    },
    {
      id: 2,
      icon: <Zap className="w-6 h-6" />,
      title: "Triển Khai 7-10 Ngày",
      description: "Thay vì chờ đợi hàng tháng, doanh nghiệp có thể bắt đầu sử dụng RFID trong vòng 1-2 tuần."
    },
    {
      id: 3,
      icon: <Target className="w-6 h-6" />,
      title: "Dễ Dàng Ứng Dụng",
      description: "Không cần đội ngũ kỹ thuật chuyên sâu - bất kỳ doanh nghiệp nào cũng có thể triển khai thành công."
    }
  ];

  return (
    <section className="bg-zinc-50 dark:bg-zinc-900 w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-zinc-950 rounded-[32px] p-10 lg:p-16 shadow-sm border border-zinc-100 dark:border-white/5">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
              Kết Quả: Lợi Ích Vượt Trội
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div 
                key={item.id} 
                className="bg-blue-50/50 dark:bg-zinc-900/50 rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
