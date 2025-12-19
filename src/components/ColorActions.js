'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ColorActions = ({ hex, rgb }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex gap-3 mt-4">
            <button
                onClick={() => handleCopy(hex)}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition shadow-sm"
            >
                {copied === hex ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                Copy HEX
            </button>
            <button
                onClick={() => handleCopy(rgb)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 transition shadow-sm"
            >
                {copied === rgb ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                Copy RGB
            </button>
        </div>
    );
};

export default ColorActions;
