import React from "react";
import Image from "next/image";
import { Zap, MapPin, Calendar, Building, PhoneCall, FileText, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { Countdown } from "./Countdown";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 pb-20 pt-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
                    {/* Left Column (Content) */}
                    <div className="flex flex-col items-start pt-8 lg:pt-0">
                        {/* Event Badge */}
                        <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full px-5 py-2 mb-8 shadow-lg shadow-cyan-500/10">
                            <Zap className="w-4 h-4 text-cyan-300" />
                            <span className="text-sm font-bold text-cyan-50 tracking-wide uppercase">
                                Triển lãm sắp diễn ra - Đừng bỏ lỡ!
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-[56px] font-black tracking-tight text-white mb-6 leading-[1.2]">
                            <span className="block w-full">Giải Pháp RFID <span className="whitespace-nowrap">tích hợp AI</span></span>
                            <span className="block mt-1 xl:mt-2 text-cyan-400">tự động</span>
                        </h1>

                        <p className="mt-4 text-[17px] text-blue-100 max-w-lg mb-10 leading-relaxed font-medium">
                            Hãy ghé thăm gian hàng Nextwaves tại Global Sourcing Fair Vietnam 2026 để trực tiếp trải nghiệm các giải pháp và sản phẩm RFID mới nhất ngay hôm nay.
                        </p>

                        {/* Countdown */}
                        <div className="mb-10 w-full animate-fade-in">
                            <div className="flex items-center gap-2 mb-2 text-white/90">
                                <span>⏱️</span>
                                <span className="font-semibold text-sm uppercase tracking-wider">Thời gian còn lại đến triển lãm:</span>
                            </div>
                            <Countdown targetDate="2026-04-22T08:00:00+07:00" />
                        </div>

                        {/* Event Details Card */}
                        <div className="w-full bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl mb-10 animate-fade-in flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-cyan-500/20 rounded-xl">
                                    <Building className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="font-bold text-white text-[15px]">Gian số 866</p>
                                    <p className="text-blue-100 text-sm mt-1">Triển lãm Global Sourcing Fair Vietnam 2026</p>
                                </div>
                            </div>
                            
                            <hr className="border-white/10" />

                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-2">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-blue-300" />
                                    <span className="text-[14px] text-white font-medium">22-24 Tháng 4, 2026</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-blue-300" />
                                    <span className="text-[14px] text-white font-medium">SECC, TP.HCM</span>
                                </div>
                            </div>
                        </div>

                        {/* Buttons Action Group */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full animate-fade-in delay-150">
                            <Button 
                                variant="primary" 
                                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-black border-0 rounded-xl px-8 h-12 shadow-cyan-500/20 shadow-lg text-[15px]"
                            >
                                <FileText className="w-4 h-4" />
                                Đăng Ký Tham Dự
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                            <Button 
                                variant="ghost" 
                                className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white rounded-xl px-8 h-12 text-[15px]"
                            >
                                <PhoneCall className="w-4 h-4" />
                                Đặt Lịch Demo
                            </Button>
                        </div>
                    </div>

                    {/* Right Column (Reference Image) */}
                    <div className="hidden lg:flex justify-end w-full animate-in fade-in zoom-in-95 duration-700 h-full py-8">
                        <div className="relative w-full max-w-xl aspect-square xl:h-[600px] xl:w-[600px]">
                            {/* Decorative blur blob */}
                            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full translate-x-12 translate-y-12 mix-blend-screen" />
                            
                            <div className="relative h-full w-full rounded-[24px] overflow-hidden shadow-2xl border border-white/10 shadow-blue-900/50">
                                <Image
                                    src="/booth.png"
                                    alt="Nextwaves Exhibition Booth"
                                    fill
                                    priority
                                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out brightness-105 contrast-125"
                                />
                                {/* Blue-ish gradient overlay to match image vibe */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        </section>
    );
}
