import { useState } from "react";

function StateHook() {
  const [colorText, SetColorText] = useState("blue");
  return (
    <div>
      <button
        onClick={() => {
          SetColorText("red");
        }}
      >
        Texto Rojo
      </button>
      <button
        onClick={() => {
          SetColorText("green");
        }}
      >
        Texto Verde
      </button>
      <p style={{ color: colorText }}>Text</p>
    </div>
  );
}

export default StateHook;
