export default function Item({ item, onDelete, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onToggleItem(item.id)}
        value={item.packed}
        style={
          item.packed
            ? {
                background: "linear-gradient(90deg, #57ddff, #c058f3)",
                border: "none",
              }
            : {}
        }
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.toDoContent}
      </span>
      <img
        src="/images/icon-cross.svg"
        alt="delete"
        className="delete"
        onClick={() => onDelete(item.id)}
      />
    </li>
  );
}
