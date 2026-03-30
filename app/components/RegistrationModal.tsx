import React, { useState } from "react";
import { X, Send, Calendar, Clock, MapPin } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function RegistrationModal({ isOpen, onClose, title = "Đăng Ký Tham Dự & Đặt Lịch Demo" }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    appointmentDate: "Ngày 22/04/2026",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Đọc URL Webhook từ file .env
    // (Lưu ý: Biến phải bắt đầu bằng NEXT_PUBLIC_ để Next.js cho phép dùng ở phía Client)
    const WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL || ""; 

    if (!WEBHOOK_URL) {
      // 1. CHẠY GIẢ LẬP KHI CHƯA CẤU HÌNH (Hiện tại)
      setTimeout(() => {
        finishSubmission();
      }, 1000);
      return;
    }

    // 2. CHẠY THỰC TẾ (Bắn data về Google Sheet)
    try {
      const formBody = new FormData();
      formBody.append("name", formData.name);
      formBody.append("phone", formData.phone);
      formBody.append("email", formData.email);
      formBody.append("appointmentDate", formData.appointmentDate);
      formBody.append("message", formData.message);

      await fetch(WEBHOOK_URL, {
        method: "POST",
        body: formBody,
        mode: "no-cors" // Cần thiết để tránh lỗi CORS khi gọi báo về Google Script
      });
      // Với no-cors, fetch sẽ luôn thành công (không đọc được response thật)
      finishSubmission();
    } catch (error) {
      console.error("Lỗi khi gửi form:", error);
      setIsSubmitting(false);
      alert("Đã có lỗi xảy ra. Hãy thử lại!");
    }
  };

  const finishSubmission = () => {
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      // Reset form
      setFormData({
          name: "",
          phone: "",
          email: "",
          appointmentDate: "Ngày 22/04/2026",
          message: ""
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-[28px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Glow effect */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-600/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4 border-b border-white/10">
            <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-cyan-400">⚡</span> {title}
            </h3>
            <button 
              onClick={onClose}
              className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>   
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto custom-scrollbar">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                  <Send className="w-8 h-8 ml-1" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Đăng ký thành công!</h4>
                <p className="text-blue-200 text-sm">Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-xl p-4 mb-2 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                        <p className="text-white text-sm font-semibold">Gian số 866 - Global Sourcing Fair 2026</p>
                        <p className="text-cyan-200 text-xs mt-1">Gặp gỡ và trải nghiệm giải pháp RFID tích hợp AI trực tiếp.</p>
                    </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[13px] font-semibold text-blue-200 mb-1.5 uppercase tracking-wider">Họ và Tên *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập họ và tên..."
                    className="w-full bg-white/5 border border-white/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all shadow-inner focus:bg-white/10"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-semibold text-blue-200 mb-1.5 uppercase tracking-wider">Số Điện Thoại *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="09xx..."
                      className="w-full bg-white/5 border border-white/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all shadow-inner focus:bg-white/10"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-semibold text-blue-200 mb-1.5 uppercase tracking-wider">Email liên hệ *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@company.com"
                      className="w-full bg-white/5 border border-white/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all shadow-inner focus:bg-white/10"
                    />
                  </div>
                </div>

                {/* Appointment Date */}
                <div>
                  <label htmlFor="appointmentDate" className="block text-[13px] font-semibold text-blue-200 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> Thời gian ghé gian hàng
                  </label>
                  <div className="relative">
                    <select
                      id="appointmentDate"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-white outline-none transition-all shadow-inner focus:bg-white/10 appearance-none pr-10"
                    >
                      <option value="Ngày 22/04/2026" className="bg-zinc-800 text-white">Ngày 22 Tháng 4, 2026 (Thứ Tư)</option>
                      <option value="Ngày 23/04/2026" className="bg-zinc-800 text-white">Ngày 23 Tháng 4, 2026 (Thứ Năm)</option>
                      <option value="Ngày 24/04/2026" className="bg-zinc-800 text-white">Ngày 24 Tháng 4, 2026 (Thứ Sáu)</option>
                      <option value="Liên hệ sau" className="bg-zinc-800 text-white">Chưa xác định, vui lòng liên hệ</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[13px] font-semibold text-blue-200 mb-1.5 uppercase tracking-wider">Tin nhắn (không bắt buộc)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mối quan tâm đặc biệt (Retail, Warehouse, v.v...)"
                    className="w-full bg-white/5 border border-white/10 focus:border-cyan-400/50 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all shadow-inner focus:bg-white/10 resize-none"
                  />
                </div>

                {/* Footer Submit */}
                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-70 disabled:hover:bg-cyan-500 text-black font-bold border-0 rounded-xl px-8 h-12 shadow-lg shadow-cyan-500/20 text-[15px] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                        <div className="flex items-center gap-2">
                           <div className="w-4 h-4 rounded-full border-2 border-black/20 border-t-black animate-spin" />
                           <span>Đang gửi...</span>
                        </div>
                    ) : (
                        <>
                            <span>Gửi Đăng Ký</span>
                            <Send className="w-4 h-4" />
                        </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
