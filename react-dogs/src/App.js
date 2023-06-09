import dogData from "./dogData";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Dog from "./components/Dog";
import DogProfile from "./components/DogProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogData={dogData} />
        <Routes>
          <Route path="/dog" element={<Dog dogData={dogData.dogs} />} />
          <Route
            path="/dog/:name"
            element={<DogProfile dogData={dogData.dogs} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
