import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GiftDetails from "./GiftDetails";
import { Product } from "./Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GiftDetails />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
