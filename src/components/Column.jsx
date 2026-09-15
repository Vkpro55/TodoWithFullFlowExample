import Badge from "./Badge"
import Card from "./Card"
import DashedField from "./DashedField"

export default function Column({ title, count, cards, showAddCard = false }) {
    return (
        <div className="flex-1 border-2 border-black bg-white">
            <div className="flex items-center justify-between px-4 pt-3 pb-2">
                <span className="text-[12px] font-bold tracking-wide">{title}</span>
                <Badge>{count}</Badge>
            </div>

            <div className="border-b-2 border-black" />

            <div className="flex flex-col gap-3 p-4">
                {cards.map((card) => (
                    <Card key={card.id} {...card} />
                ))}

                {showAddCard && (
                    <DashedField as="button" className="w-full text-slate-400">
                        + Add a card...
                    </DashedField>
                )}
            </div>
        </div>
    )
}
