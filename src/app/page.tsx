"use client"
import React, { useState, useEffect } from 'react';
import Splash from './components/splash/Splash';
import Splashbackground from './components/splash/Splashbackground';


export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    },7000); //7 s timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Splashbackground/>
      {showSplash ? (
        <Splash title="H.D.F.Player." />
      ) : (
  <>
  <div className='home-container'>

    
  </div>
</>
      )}
    </>
  );
}
