'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const RecentPicks = ({ lastPick }) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // Load history from localStorage
        const saved = localStorage.getItem('colorHistory');
        if (saved) {
            setHistory(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        if (lastPick) {
            setHistory(prev => {
                // Check if color already exists in top 5
                const exists = prev.find(c => c.id === lastPick.id);
                if (exists) return prev;

                const newHistory = [lastPick, ...prev].slice(0, 5);
                localStorage.setItem('colorHistory', JSON.stringify(newHistory));
                return newHistory;
            });
        }
    }, [lastPick]);

    if (history.length === 0) return null;

    return (
        <div className="w-full max-w-2xl mt-12">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Recent Picks</h3>
            <div className="flex gap-4">
                {history.map((color, idx) => (
                    <Link
                        key={`${color.id}-${idx}`}
                        href={`/color/${color.id}`}
                        className="group flex flex-col items-center gap-2"
                    >
                        <div
                            className="w-12 h-12 rounded-full shadow-sm border border-black/5 group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-[10px] text-neutral-500 font-medium group-hover:text-neutral-900 truncate max-w-[60px]">{color.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecentPicks;
