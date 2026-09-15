export const columns = [
    {
        id: "todo",
        title: "TO DO",
        count: 3,
        showAddCard: true,
        cards: [
            { id: "c1", badge: 2, title: "Sketch color tokens for dark mode", meta: "opened 12m ago" },
            {
                id: "c2",
                badge: 1,
                title: "Wire up the search input debounce",
                meta: "opened 3m ago",
                actions: ["Move to In Progress →", "Move to Done →"],
            },
            { id: "c3", badge: 1, title: "Draft the debug console copy", meta: "opened 1h ago" },
        ],
    },
    {
        id: "in-progress",
        title: "IN PROGRESS",
        count: 2,
        cards: [
            { id: "c4", badge: 1, title: "Split BoardContext into data + dispatch", meta: "in progress · 06:40" },
            {
                id: "c5",
                badge: 5,
                title: "Build resumable move-progress bar",
                meta: "in progress · 21m",
                progress: { label: "Moving to Done...", percent: 62 },
            },
        ],
    },
    {
        id: "done",
        title: "DONE",
        count: 3,
        cards: [
            { id: "c6", badge: 4, title: "Set up Vite + React scaffold", meta: "done · yesterday", done: true },
            { id: "c7", badge: 2, title: "Model the normalized card store", meta: "done · yesterday", done: true },
            { id: "c8", badge: 3, title: "Add render-count debug badges", meta: "done · 2 days ago", done: true },
        ],
    },
]
