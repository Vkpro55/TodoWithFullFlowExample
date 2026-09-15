import React from 'react'

import DashedField from "./DashedField"
import OutlineButton from "./OutlineButton"

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

            <DashedField className="w-95 text-slate-500">Search cards...</DashedField>

            <div className="flex items-center gap-2.5">
                <OutlineButton className="text-amber-600">Theme</OutlineButton>
                <OutlineButton className="text-orange-600">Dev</OutlineButton>
            </div>
        </header>
    )
}
