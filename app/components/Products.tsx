"use client";

import React from "react";
import Image from "next/image";
import { Radio, Tag, Smartphone } from "lucide-react";

export function Products() {
  const products = [
    {
      id: "readers",
      icon: <Radio className="w-5 h-5" />,
      title: "RFID Đầu Đọc và Ăng Ten",
      description: "Thiết bị đọc RFID hiệu suất cao được thiết kế cho môi trường khó khăn",
      features: [
        "Độ nhạy cảm cao",
        "Tốc độ đọc nhanh",
        "Kết nối MQTT/REST",
        "Thiết kế chắc chắn"
      ]
    },
    {
      id: "tags",
      icon: <Tag className="w-5 h-5" />,
      title: "Thẻ và Nhãn RFID",
      description: "Thẻ RFID UHF, HF và NFC giá cả hợp lý với hiệu suất đáng tin cậy",
      features: [
        "Nhiều định dạng",
        "Giá cạnh tranh",
        "Chất lượng cao",
        "Tuân thủ tiêu chuẩn"
      ]
    },
    {
      id: "applications",
      icon: <Smartphone className="w-5 h-5" />,
      title: "Sản phẩm Ứng Dụng RFID",
      description: "Self checkout kiosk, máy quét cầm tay, và các giải pháp tích hợp",
      features: [
        "Self-checkout kiosk",
        "Máy quét handheld",
        "Cổng RFID",
        "Phần mềm tích hợp"
      ]
    }
  ];

  return (
    <section className="bg-white w-full py-24 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">
            Sản Phẩm RFID – Nextwaves
          </h2>
          <p className="text-lg text-zinc-600 font-medium leading-relaxed">
            Khám phá toàn bộ sản phẩm RFID Made in Vietnam tại gian hàng Nextwaves
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col bg-white rounded-xl border border-zinc-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                {product.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-zinc-900 mb-3">
                {product.title}
              </h3>
              <p className="text-[15px] text-zinc-500 leading-relaxed mb-8 h-12">
                {product.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mt-auto">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] font-medium text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
