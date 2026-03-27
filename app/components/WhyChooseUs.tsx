"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-zinc-50 w-full py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <div className="bg-blue-50 text-blue-600 text-[11px] font-bold px-4 py-1.5 rounded-full tracking-wider uppercase mb-6">
            Tại Sao Chọn Nextwaves
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">
            RFID "Made in Vietnam"
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4">
            Bình Dân Hóa Công Nghệ
          </h3>
          <p className="text-[16px] text-zinc-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Nextwaves đưa RFID gần hơn với doanh nghiệp Việt Nam thông qua giá cạnh tranh, triển khai nhanh, và hỗ trợ toàn diện
          </p>
        </div>

        {/* Row 1: Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
          {/* Text Left */}
          <div className="order-2 lg:order-1 flex flex-col items-start pr-0 lg:pr-8">
            <div className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-6">
              VẤN ĐỀ
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-zinc-900 leading-tight tracking-tight mb-6">
              Phần Lớn Doanh Nghiệp Việt Nam Vẫn Chưa Dám Tiếp Cận RFID
            </h3>
            <p className="text-[15px] text-zinc-600 leading-relaxed mb-8">
              Nhiều doanh nghiệp Việt Nam vẫn nghĩ <span className="text-red-600 font-bold">RFID là công nghệ xa xỉ, phức tạp</span> và chỉ dành cho các tập đoàn lớn.
            </p>

            <div className="w-full bg-red-50/50 rounded-xl border-l-[4px] border-red-500 p-6 mb-8">
              <h4 className="text-[15px] font-bold text-red-700 mb-4">Thực Tế Khó Khăn:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-sm bg-red-500 mt-2 flex-shrink-0" />
                  <p className="text-[14.5px] text-zinc-700"><span className="font-bold text-zinc-900">Chi phí cao</span> - Giải pháp nhập khẩu rất đắt đỏ</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-sm bg-red-500 mt-2 flex-shrink-0" />
                  <p className="text-[14.5px] text-zinc-700"><span className="font-bold text-zinc-900">Triển khai chậm</span> - Phải chờ đợi hàng tháng</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-sm bg-red-500 mt-2 flex-shrink-0" />
                  <p className="text-[14.5px] text-zinc-700"><span className="font-bold text-zinc-900">Yêu cầu kỹ thuật cao</span> - Cần đội ngũ chuyên sâu</p>
                </li>
              </ul>
            </div>

            <p className="text-[15px] italic text-zinc-500 font-medium">
              "Nhu cầu tối ưu vận hành là rất rõ ràng, nhưng chi phí và độ phức tạp khiến nhiều doanh nghiệp chần chừ."
            </p>
          </div>

          {/* Image Right */}
          <div className="order-1 lg:order-2 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
            <Image src="/image1.png" alt="Doanh nghiệp Việt Nam" fill unoptimized className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* Row 2: Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Left */}
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
            <Image src="/image2.jpg" alt="Giải pháp Nextwaves" fill unoptimized className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Text Right */}
          <div className="flex flex-col items-start pl-0 lg:pl-8">
            <div className="bg-green-100/80 text-green-700 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-6">
              GIẢI PHÁP
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-zinc-900 leading-tight tracking-tight mb-6">
              Xây Dựng Hệ Sinh Thái RFID "Made in Vietnam"
            </h3>
            <p className="text-[15px] text-zinc-600 leading-relaxed mb-8">
              Thay vì đi theo lối mòn của các giải pháp nhập khẩu vốn đắt đỏ, Nextwaves lựa chọn một hướng đi khác: <span className="text-green-600 font-bold">chủ động xây dựng toàn bộ hệ sinh thái RFID ngay trong nước</span>.
            </p>

            <div className="w-full bg-green-50/50 rounded-xl border-l-[4px] border-green-500 p-6">
              <h4 className="text-[15px] font-bold text-green-700 mb-4">Toàn Bộ Chuỗi Giá Trị:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-[14.5px] text-zinc-700"><span className="font-bold text-zinc-900">Thiết kế phần cứng</span> - Tối ưu cho Việt Nam</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-[14.5px] text-zinc-700"><span className="font-bold text-zinc-900">Sản xuất</span> - Chất lượng cao, kiểm soát chặt chẽ</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-[14.5px] text-zinc-700"><span className="font-bold text-zinc-900">Phần mềm</span> - Dễ sử dụng, hỗ trợ Tiếng Việt</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-[14.5px] text-zinc-700"><span className="font-bold text-zinc-900">Thẻ RFID</span> - Cung cấp liên tục, giá cạnh tranh</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
