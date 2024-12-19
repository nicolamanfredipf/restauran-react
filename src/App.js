// import style from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/elements/navbar/Navbar";
import Home from "./components/pages/Home";
// import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
