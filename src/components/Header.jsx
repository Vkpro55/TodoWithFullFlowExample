import React from 'react'

export default function Header() {
    return (
        <header className="flex h-16 items-center justify-between border-b-2 border-black bg-white px-6 py-3 font-mono">
            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border-2 border-black text-[9px] font-bold text-black">
                    LOGO
                </div>
                <div className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-bold text-black">
                        Kanban Concepts Lab
                    </span>
                    <span className="text-[11px] text-blue-600">
                        react internals playground
                    </span>
                </div>
            </div>

            <div className="w-95 border border-dashed border-black px-3.5 py-2">
                <span className="text-[13px] text-slate-500">Search cards...</span>
            </div>

            <div className="flex items-center gap-2.5">
                <button
                    type="button"
                    className="border-2 border-black px-4 py-1.5 text-[13px] font-bold text-amber-600"
                >
                    Theme
                </button>
                <button
                    type="button"
                    className="border-2 border-black px-4 py-1.5 text-[13px] font-bold text-orange-600"
                >
                    Dev
                </button>
            </div>
        </header>
    )
}
