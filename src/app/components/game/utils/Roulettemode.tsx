import React from "react";
const RouletteMode: React.FC = () => {
  return (
    <>
      <div className="switch">Roulette Mode</div>
      <label className="switch">
        <input type="checkbox" className="input__check" value={``}>     
        </input> 
          <span className="slider"></span>
      </label>
    </>
  );
};
export default RouletteMode;
