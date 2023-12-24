import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor small"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      ></div>
      <div
        className="cursor big"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      ></div>
    </>
  );
};

export default Cursor;
