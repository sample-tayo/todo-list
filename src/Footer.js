export default function Footer({
  items,
  deleteCompletedItems,
  activetasks,
  allitems,
  clearAll,
  completedItems,
}) {
  return (
    <div className="footer">
      <ul>
        <li>{items.length} items left</li>
        <li onClick={allitems}>All Tasks</li>
        <li onClick={activetasks}>Active</li>
        <li
          onClick={completedItems}
          style={items.length === 0 ? { display: "none" } : {}}
        >
          Completed
        </li>
        <li onClick={deleteCompletedItems}>Clear Completed</li>
        <li onClick={clearAll}>Clear all</li>
      </ul>
    </div>
  );
}
