import React, { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <div className="tooltip">
      <div className="tooltip-text">{text}</div>
      {children}
    </div>
  );
};

export default Tooltip;
