export default function OutlineButton({ children, className = "", ...props }) {
    return (
        <button
            type="button"
            className={`border-2 border-black px-4 py-1.5 text-[13px] font-bold ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
