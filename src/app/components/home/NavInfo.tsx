import React from "react";

interface NavInfoProps {
  children: React.ReactNode;
  heading: string;
  onClose: () => void;
  isModalOpen: boolean;
}

const NavInfo: React.FC<NavInfoProps> = ({
  children,
  heading,
  onClose,
  isModalOpen,
}) => {
  return (
    <div className={`navinfo ${isModalOpen ? "active" : ""}`}>
      <div className="navinfo-content">
        <h2>{heading}</h2>
        {children}
        <button className="close" onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
};

export default NavInfo;
