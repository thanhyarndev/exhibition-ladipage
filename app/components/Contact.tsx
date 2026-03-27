"use client";

import React from "react";
import { Button } from "./ui/Button";

export function Contact() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-900 w-full pb-12 pt-6 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-700 rounded-[32px] p-10 lg:p-16 shadow-2xl flex flex-col justify-between overflow-hidden relative">
          
          {/* Background Decorative Blob */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3 mb-4 tracking-tight">
              <span className="text-4xl">📞</span> Liên Hệ Nextwaves
            </h2>
            <p className="text-blue-100 font-medium text-[16px] max-w-2xl leading-relaxed">
              Hãy liên hệ với chúng tôi để tìm hiểu thêm về các giải pháp RFID hoặc để đặt lịch demo trực tuyến.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl shadow-inner backdrop-blur-md">
                📧
              </div>
              <div className="flex flex-col">
                <span className="text-blue-200 text-[13px] font-bold uppercase tracking-wider mb-0.5">Email</span>
                <span className="text-white font-medium text-[15px]">contact@nextwaves.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl shadow-inner backdrop-blur-md">
                📱
              </div>
              <div className="flex flex-col">
                <span className="text-blue-200 text-[13px] font-bold uppercase tracking-wider mb-0.5">Điện Thoại</span>
                <span className="text-white font-medium text-[15px]">(+84) 386 660 960</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl shadow-inner backdrop-blur-md">
                📍
              </div>
              <div className="flex flex-col">
                <span className="text-blue-200 text-[13px] font-bold uppercase tracking-wider mb-0.5">Địa Chỉ</span>
                <span className="text-white font-medium text-[15px]">17 Đường 38, An Khánh, TP. HCM</span>
              </div>
            </div>
          </div>

          {/* Buttons Action Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 pt-4 border-t border-white/10">
            <Button
              variant="primary"
              className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-500 text-blue-950 font-bold border-0 rounded-xl px-8 h-12 shadow-lg shadow-cyan-400/20 text-[15px]"
            >
              🎟️ Đăng Ký Tham Dự Triển Lãm
            </Button>
            <Button
              variant="ghost"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white font-bold rounded-xl px-8 h-12 text-[15px]"
            >
              📞 Đặt Lịch Demo Trực Tuyến
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
