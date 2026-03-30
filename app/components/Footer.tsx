import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0B1121] text-slate-400 py-16 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col pr-8">
            <h3 className="text-white text-xl font-bold mb-6 tracking-tight">Nextwaves</h3>
            <p className="text-[14px] leading-relaxed">
              Công nghệ RFID "Made in Vietnam" - Bình dân hóa RFID cho doanh nghiệp Việt Nam
            </p>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col">
            <h4 className="text-white text-[15px] font-bold mb-6">Giải Pháp</h4>
            <ul className="space-y-4">
              <li><a href="https://nextwaves.com/solutions/retail" target="_blank" rel="noopener noreferrer" className="text-[14px] hover:text-cyan-400 transition-colors">Bán lẻ / Retail</a></li>
              <li><a href="https://nextwaves.com/solutions/logistics" target="_blank" rel="noopener noreferrer" className="text-[14px] hover:text-cyan-400 transition-colors">Logistics & Supply Chain</a></li>
              <li><a href="https://nextwaves.com/solutions/manufacturing" target="_blank" rel="noopener noreferrer" className="text-[14px] hover:text-cyan-400 transition-colors">Sản xuất / Manufacturing</a></li>
              <li><a href="https://nextwaves.com/solutions/healthcare" target="_blank" rel="noopener noreferrer" className="text-[14px] hover:text-cyan-400 transition-colors">Y tế / Healthcare</a></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="flex flex-col">
            <h4 className="text-white text-[15px] font-bold mb-6">Sản Phẩm</h4>
            <ul className="space-y-4">
              <li><a href="https://nextwaves.com/category/rfid#rfid-desktop-reader" target="_blank" rel="noopener noreferrer" className="text-[14px] hover:text-cyan-400 transition-colors">Đầu đọc RFID / Readers</a></li>
              <li><a href="https://nextwaves.com/category/rfid-inlay" target="_blank" rel="noopener noreferrer" className="text-[14px] hover:text-cyan-400 transition-colors">Tem nhãn / RFID Inlay</a></li>
              <li><a href="https://nextwaves.com/category/rfid" target="_blank" rel="noopener noreferrer" className="text-[14px] hover:text-cyan-400 transition-colors">Thẻ RFID / RFID Tags</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col">
            <h4 className="text-white text-[15px] font-bold mb-6">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-slate-500 flex-shrink-0" />
                <a href="mailto:contact@nextwaves.com" className="text-[14px] hover:text-cyan-400 transition-colors">
                  contact@nextwaves.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-slate-500 flex-shrink-0" />
                <a href="tel:+84386660960" className="text-[14px] hover:text-cyan-400 transition-colors">
                  (+84) 386 660 960
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-500 flex-shrink-0" />
                <span className="text-[14px]">
                  17 Đường 38, An Khánh, TP. HCM
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Middle Divider & Socials */}
        <hr className="border-slate-800 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/98933281" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/nextwaves.industries/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
          <a href="https://nextwaves.com" target="_blank" rel="noreferrer" className="text-[13px] hover:text-cyan-400 transition-colors">
            Truy cập website chính
          </a>
        </div>

        {/* Bottom Divider & Copyright */}
        <hr className="border-slate-800 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px]">
            © 2026 Nextwaves Industries. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-6 text-[13px]">
            <Link href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
