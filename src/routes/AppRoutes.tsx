import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Home } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
