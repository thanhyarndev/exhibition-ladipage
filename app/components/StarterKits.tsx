"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart, Zap, Lock, PhoneCall, ArrowRight } from "lucide-react";

export function StarterKits() {
  const kits = [
    {
      id: "retail",
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "Bộ Retail Starter Kit",
      subtitle: "Thanh toán trong 2 giây",
      description: "Tăng tốc độ thanh toán và tự động hóa kiểm kho cho các cửa hàng thời trang, mỹ phẩm và chuỗi bán lẻ.",
      features: [
        "Đầu đọc 400 thẻ/giây",
        "2.000 thẻ RFID",
        "Máy quét cầm tay"
      ],
      price: "$980",
      image: "/retail_kit.png"
    },
    {
      id: "warehouse",
      icon: <Zap className="w-5 h-5" />,
      title: "Bộ Warehouse Starter Kit",
      subtitle: "Tìm thứ gì đó trong 30 giây",
      description: "Tự động hóa ba quy trình tốn nhân công nhất: theo dõi nhập/xuất, kiểm kho định kỳ và tìm kiếm hàng hóa.",
      features: [
        "200 thẻ vị trí",
        "Bản đồ kho bằng số",
        "Tìm kiếm hàng hóa tức thì"
      ],
      price: "$1.490",
      image: "/warehouse_kit.png"
    },
    {
      id: "security",
      icon: <Lock className="w-5 h-5" />,
      title: "Bộ Security Starter Kit",
      subtitle: "Bảo vệ tài sản 24/7",
      description: "Hai chức năng trong một hệ thống: kiểm kho tài sản cố định nhanh chóng và bảo vệ thời gian thực chống trộm.",
      features: [
        "Cổng bảo vệ + báo động",
        "Thẻ chống kim loại",
        "Theo dõi kiểm toán tự động"
      ],
      price: "$1.370",
      image: "/security_kit.png"
    }
  ];

  return (
    <section className="bg-white dark:bg-zinc-50 w-full py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">
            Starter Kit sẵn sàng triển khai
          </h2>
          <p className="text-lg text-zinc-600 font-medium leading-relaxed">
            Khám phá các bộ RFID sẵn sàng triển khai tại gian hàng Nextwaves hoặc đặt lịch demo
          </p>
        </div>

        {/* Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit) => (
            <div 
              key={kit.id} 
              className="flex flex-col bg-white rounded-[20px] border border-zinc-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Area */}
              <div className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden">
                <Image 
                  src={kit.image}
                  alt={kit.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-grow p-8">
                {/* Title & Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    {kit.icon}
                  </div>
                  <div>
                    <h3 className="text-[19px] font-bold text-zinc-900 leading-tight">
                      {kit.title}
                    </h3>
                    <p className="text-[14px] font-semibold text-blue-600 mt-1">
                      {kit.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[15px] text-zinc-600 leading-relaxed mb-6">
                  {kit.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {kit.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] font-medium text-zinc-700">
                      <div className="w-[6px] h-[6px] rounded-full bg-blue-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <hr className="border-zinc-100 mb-6" />

                {/* Footer: Price & Action */}
                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                      Giá bắt đầu từ
                    </span>
                    <span className="text-3xl font-black text-zinc-900 tracking-tight">
                      {kit.price}
                    </span>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 text-[15px] font-bold text-blue-600 hover:text-blue-700 transition-colors group">
                    <PhoneCall className="w-4 h-4" />
                    Đặt Lịch Xem
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
