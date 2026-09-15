export default function DashedField({ as: Tag = "div", className = "", children, ...props }) {
    return (
        <Tag
            type={Tag === "button" ? "button" : undefined}
            className={`border border-dashed border-black px-3.5 py-2 text-left text-[13px] ${className}`}
            {...props}
        >
            {children}
        </Tag>
    )
}
