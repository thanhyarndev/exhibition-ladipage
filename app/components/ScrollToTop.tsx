"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 400px
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.5)] backdrop-blur-md transition-all duration-300 z-50 group border border-cyan-400/50 
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
            aria-label="Về đầu trang"
        >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} />
        </button>
    );
}
