import Column from "./Column"
import { columns } from "../data/dummyBoard"

export default function Board() {
    return (
        <section className="flex gap-6 border-b-2 border-black bg-white px-6 py-6">
            {columns.map((column) => (
                <Column key={column.id} {...column} />
            ))}
        </section>
    )
}
