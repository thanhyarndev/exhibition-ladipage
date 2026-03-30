"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall, FileText } from "lucide-react";
import { Button } from "./ui/Button";

export function Header() {
    const navLinks = [
        { name: "Giải Pháp", href: "#giai-phap" },
        { name: "Starter Kits", href: "#starter-kits" },
        { name: "Sản Phẩm", href: "#san-pham" },
        { name: "Câu Chuyện", href: "#cau-chuyen" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 dark:bg-black/80 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link href="/" className="block">
                        <Image 
                            src="/logo.png" 
                            alt="Nextwaves Logo" 
                            width={180} 
                            height={48} 
                            className="h-10 lg:h-[44px] w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className="text-[14px] font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link 
                        href="#" 
                        className="hidden lg:flex items-center gap-2 text-[14px] font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                    >
                        <PhoneCall className="w-4 h-4" />
                        <span>Đặt Lịch Demo</span>
                    </Link>
                    <Button variant="primary">
                        <FileText className="w-4 h-4" />
                        Đăng Ký Tham Dự
                    </Button>
                </div>
            </div>
        </header>
    );
}
