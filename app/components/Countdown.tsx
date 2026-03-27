"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
    targetDate: string;
}

export function Countdown({ targetDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const target = new Date(targetDate).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    if (!mounted) {
        return <div className="h-20" />; // skeleton height
    }

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    const TimeUnit = ({ value, label }: { value: number, label: string }) => (
        <div className="flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/5 rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg">
                <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    {formatNumber(value)}
                </span>
            </div>
            <span className="text-[12px] sm:text-[13px] text-white/70 mt-3 font-medium tracking-wide">
                {label}
            </span>
        </div>
    );

    const Colon = () => (
        <div className="text-2xl font-bold text-white/50 pb-8">:</div>
    );

    return (
        <div className="flex items-center gap-3 sm:gap-4 mt-6">
            <TimeUnit value={timeLeft.days} label="Ngày" />
            <Colon />
            <TimeUnit value={timeLeft.hours} label="Giờ" />
            <Colon />
            <TimeUnit value={timeLeft.minutes} label="Phút" />
            <Colon />
            <TimeUnit value={timeLeft.seconds} label="Giây" />
        </div>
    );
}
