export function Stats({ items }) {
    if (!items.length) {
        return (
            <p className="stats"><em>Start Adding Some Items to Your Packing List! 🚀</em></p>
        );
    }

    const numItems = items.length;
    const numItemsPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numItemsPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? "You Got Everything Ready To Go! 🛫"
                    : `You have ${numItems}🏷️ items in your list, and you already packed ${numItemsPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}
