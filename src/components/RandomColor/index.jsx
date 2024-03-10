import { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeofcolor, settypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomutility(length) {
    return Math.floor(Math.random() * length);
  }

  function genrateRandomhexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomutility(hex.length)];
    }

    console.log(hexColor);

    setColor(hexColor);
  }
  function genearterandomRGBcolor() {
    let r = randomutility(256);
    let g = randomutility(256);
    let b = randomutility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeofcolor === "rgb") {
      genearterandomRGBcolor();
    } else {
      genrateRandomhexColor();
    }
  }, [typeofcolor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        alignContent: "center",

        backgroundColor: color,
      }}
    >
      <div
        style={{
          display: "flex",

          color: "white",
          fontSize: "50px",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button
          onClick={() => {
            settypeofColor("hex");
          }}
        >
          Create Hex Color
        </button>
        <button
          onClick={() => {
            settypeofColor("rgb");
          }}
        >
          Create RGB color
        </button>
        <button
          onClick={
            typeofcolor === "hex"
              ? genrateRandomhexColor
              : genearterandomRGBcolor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          fontSize: "50px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          fontWeight: "500",
        }}
      >
        <h3>{typeofcolor === "hex" ? "Hex COLOR" : "RGB COLOR"}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
};

export default RandomColor;
