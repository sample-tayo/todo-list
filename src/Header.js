import { useState } from "react";

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="header">
      <h1>TODO</h1>
      <img
        src={isToggled ? "/images/icon-moon.svg" : "/images/icon-sun.svg"}
        alt={isToggled ? "Moon" : "Sun"}
        onClick={toggle}
      ></img>
    </div>
  );
}
