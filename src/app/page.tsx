"use client";
import React, { useState, useEffect } from "react";
import Splash from "./components/splash/Splash";
import Splashbackground from "./components/splash/Splashbackground";
import Navbar from "./components/home/Navbar";
import Mainpage from "./components/home/Mainpage";
import Footer from "./components/home/Footer";
import Splashloader from "./components/splash/Splashloader";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowLoader(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
    
      setShowLoader(false);
    }, 10000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <Splash title="Beta" />
      ) : (
        <>
          {showLoader ? (
            <Splashloader />
          ) : (
            <div className="home-container">
              <Navbar />
              <Mainpage />
              <Footer />
            </div>
          )}
        </>
      )}
    </>
  );
}
