import React from "react";
import Order from "./Components/Order";
import Enquiry from "./Components/Enquiry";
import Product from "./Components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Order />} />
          <Route path="/Enquiry" element={<Enquiry />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
