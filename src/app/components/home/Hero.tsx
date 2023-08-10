import React from'react';
 
interface HeroProps{
prop: string
}
 
const Hero: React.FC<HeroProps> = ({prop}) => 
{
    return (
      <ul className="Hero">
        <li>For better experience use on PC</li>
        <li>Please use maximized window</li>
        <li>or F11-Fullscreen Mode</li>
        <li>----------------------</li>
        <li>Chromium based browsers only.</li>
      </ul>
    );
}
export default Hero;