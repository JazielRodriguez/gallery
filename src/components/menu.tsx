import { useState } from "react";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className={
        isVisible
          ? "bg-white w-[15%] min-h-screen shadow"
          : "bg-red w-[15%] min-h-screen shadow"
      }
    >
      <p>Holaaa</p>
    </div>
  );
};
export default Menu;
