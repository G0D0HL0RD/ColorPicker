import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "../src/style.css";
export default function App() {
  const [color, setColor] = useState("white");
  const [hidden, setHidden] = useState(false);
  const pickerStyle = {
    default: {
      picker: {
        position: "absolute",
        bottom: "30px",
        left: "100px"
      }
    }
  };
  return (
    <div className="App" >
        <h1>Welcome to Color Picker</h1>
      <div className="container">
        {hidden && (<SketchPicker styles={pickerStyle} color={color} onChange={(updatedColor) => {setColor(updatedColor.hex); setHidden(!hidden)}}
          />
        )}
        <button onClick={() => setHidden(!hidden)} style={{ background: color }}>
          {hidden ? "Close Color Picker" : "Open Color Picker"}
        </button>
      </div>
    </div>
  );
}
