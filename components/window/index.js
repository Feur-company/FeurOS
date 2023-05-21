import { useEffect, useState } from "react";

export default function Window({ children }) {
  const defaultPosition = { x: 50, y: 50 };
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseDown(event) {
      const targetClassName = event.target.className;
      if (targetClassName === "window_nav") {
        setIsDragging(true);
        setInitialPosition({ x: event.clientX, y: event.clientY });
      }
    }

    function handleMouseMove(event) {
      if (!isDragging) return;

      const dx = event.clientX - initialPosition.x;
      const dy = event.clientY - initialPosition.y;

      setPosition((prevPosition) => ({
        x: prevPosition.x + dx,
        y: prevPosition.y + dy,
      }));

      setInitialPosition({ x: event.clientX, y: event.clientY });
    }

    function handleMouseUp() {
      setIsDragging(false);
    }

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, initialPosition]);

  const windowContentStyle = {
    border: "5px solid black",
    borderRadius: "10px",
    backgroundColor: "aliceblue",
    width: "fit-content",
    height: "fit-content",
    padding: "10px",
    color: "black",
  };

  const windowStyle = {
    position: "absolute",
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  const windowNavStyle = {
    height: "20px",
    backgroundColor: "grey",
    cursor: isDragging ? "grabbing" : "grab",
  };

  return (
    <div className="window" style={windowStyle}>
      <div style={windowNavStyle} className="window_nav"></div>
      <div className="window-content" style={windowContentStyle}>
        {children}
      </div>
    </div>
  );
}
