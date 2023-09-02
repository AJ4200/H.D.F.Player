import React from "react";

interface NavInfoProps {
  children: React.ReactNode;
  heading: string;
  onClose: () => void;
}

const NavInfo: React.FC<NavInfoProps> = ({ children, heading, onClose }) => {
  return (
    <div className="navinfo">     
        <h1>{heading}</h1>
        {children}
        <button className="close" onClick={onClose}>
          x
        </button>

    </div>
  );
};

export default NavInfo;
