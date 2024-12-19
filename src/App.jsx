import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import InventoryList from "./components/InventoryList/InventoryList";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* MAKE NOT FOUND PAGE */}
      </Routes>

      <InventoryList />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
