import Badge from "./Badge"
import DashedField from "./DashedField"
import ProgressBar from "./ProgressBar"

export default function Card({ title, badge, meta, done = false, actions, progress }) {
    return (
        <div className="border border-black px-4 py-3">
            <div className="flex items-center justify-between gap-2">
                <span className={`text-[13px] font-bold ${done ? "text-slate-400 line-through" : "text-black"}`}>
                    {title}
                </span>
                <Badge variant="dashed">#{badge}</Badge>
            </div>

            <div className="my-2 border-t border-dashed border-black" />

            <div className={`text-[11px] ${done ? "text-slate-300" : "text-slate-400"}`}>{meta}</div>

            {progress && (
                <div className="mt-2.5 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[11px] font-bold text-black">
                        <span>{progress.label}</span>
                        <span>{progress.percent}%</span>
                    </div>
                    <ProgressBar percent={progress.percent} />
                </div>
            )}

            {actions && (
                <div className="mt-2.5 flex flex-col gap-1.5">
                    {actions.map((action) => (
                        <DashedField key={action} as="button" className="w-full text-center font-bold">
                            {action}
                        </DashedField>
                    ))}
                </div>
            )}
        </div>
    )
}
