import Item from "./Item";

/**
 * The TodoList function renders a list of items as an unordered list.
 * @returns The TodoList component is returning a div element with a class name of "list". Inside the
 * div, there is an unordered list element (ul) that contains multiple Item components. The Item
 * components are rendered based on the items array passed as a prop to the TodoList component.
 */
export default function TodoList({ items, onDelete, onToggleItem }) {
  return (
    <div className="list">
      {items.length === 0 ? (
        <ul>
          <span>start creating your list</span>
        </ul>
      ) : (
        <ul>
          {items.map((item, index) => (
            <Item
              item={item}
              key={index}
              onDelete={onDelete}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
