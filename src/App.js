import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import SecondComponent from "./pages/secondComp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./pages/NavBar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="mb-5">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/login" element={<SecondComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
