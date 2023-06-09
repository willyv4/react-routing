import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Color from "./components/Color";
import ColorList from "./components/ColorList";
import ColorForm from "./components/ColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState([]);

  const handleColors = (colorObj) => {
    setColors((prevColors) => [...prevColors, colorObj]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/colors" element={<ColorList colors={colors} />} />
          <Route path="/colors/:color" element={<Color colors={colors} />} />

          <Route
            path="/colors/new"
            element={<ColorForm handleColors={handleColors} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
