export default function AccessibilityBadge({ ratio, score, backgroundHex, textHex }) {
    const isPass = score !== 'Fail';

    return (
        <div className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-white shadow-sm">
            <div className="flex items-center gap-3">
                <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center border border-neutral-100 text-lg font-bold"
                    style={{ backgroundColor: backgroundHex, color: textHex }}
                >
                    Aa
                </div>
                <div>
                    <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide">
                        {textHex === '#FFFFFF' ? 'White Text' : 'Black Text'}
                    </div>
                    <div className="font-mono font-bold text-neutral-800">
                        {ratio.toFixed(2)}:1
                    </div>
                </div>
            </div>

            <div className={`px-3 py-1 rounded-full text-xs font-bold border ${isPass ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                {score} {isPass ? 'PASS' : 'FAIL'}
            </div>
        </div>
    );
}
