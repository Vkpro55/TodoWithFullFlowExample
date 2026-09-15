export default function ProgressBar({ percent }) {
    return (
        <div className="h-2.5 w-full border border-black">
            <div
                className="h-full bg-[repeating-linear-gradient(45deg,#000_0_4px,#fff_4px_8px)]"
                style={{ width: `${percent}%` }}
            />
        </div>
    )
}
