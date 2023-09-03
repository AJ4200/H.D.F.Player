"use client";
import React, { useState, useEffect } from "react";
import Splash from "./components/home/splash/Splash";
import Navbar from "./components/home/Navbar";
import Mainpage from "./components/home/Mainpage";
import Footer from "./components/home/Footer";
import Splashloader from "./components/home/splash/Splashloader";
import Hero from "./components/home/Hero";
import MP3Player from "./components/game/utils/MP3Player";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowLoader(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <>
          <Hero prop={""} />
          <Splash title="Alpha" />
        </>
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
      <MP3Player/>
    </>
  );
}
