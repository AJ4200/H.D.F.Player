import React, { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
  };

  return (
    <div className="tooltip" onMouseEnter={handleMouseEnter}>
      {showTooltip && <div className="tooltip-text">{text}</div>}
      {children}
    </div>
  );
};

export default Tooltip;
