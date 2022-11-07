import React, { useState } from "react";

function Slider({ onchange, min, max }) {
  const [value, setvalue] = useState(1);

  return (
    <div className="slide">
      {value}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const value = Number(e.target.value);
          onchange(value);
          setvalue(value);
        }}
  />
      </div>
      );
}

    export default Slider;