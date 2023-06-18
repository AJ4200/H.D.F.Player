"use client"
import React, { useEffect, useState } from "react";

interface SplashProps {
  title: string;
}

const Splash: React.FC<SplashProps> = ({ title }) => {
  

  return (
    <>
      <div className="typewriter-container">
        <div className="typewriter">
          <h1 className="glitch" data-text={title}>{title}</h1>
        </div>
      </div>
               
    </>
  );
};

export default Splash;
