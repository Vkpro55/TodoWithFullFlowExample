export default function Badge({ variant = "solid", children, className = "" }) {
    return (
        <span
            className={`inline-flex items-center justify-center border border-black px-1.5 py-0.5 text-[11px] font-bold text-black ${
                variant === "dashed" ? "border-dashed" : ""
            } ${className}`}
        >
            {children}
        </span>
    )
}
