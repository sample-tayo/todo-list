import { useState } from "react";

export default function InputField({ onAddItems }) {
  const [toDoContent, setToDoContent] = useState("");
  const [placeholder, setPlaceholder] = useState("type in to create todo");

  const handleFocus = () => {
    setPlaceholder("start typing");
  };
  const handleBlur = () => {
    setPlaceholder("type in to create todo");
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!toDoContent) return;

    const newItem = { toDoContent, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    console.log(toDoContent);
    setToDoContent("");

    // setItems((itemsThatWasThereBefore) => [
    //   ...itemsThatWasThereBefore,
    //   toDoContent,
    // ]);
  }
  return (
    <form className="inputField" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setToDoContent(e.target.value)}
        value={toDoContent}
      />
      <button>CREATE TODO</button>
    </form>
  );
}
