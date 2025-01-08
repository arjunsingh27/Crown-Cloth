import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collections";
import About from "./pages/About";
import Login from "./pages/Login";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrders";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="px-4 sm:px=[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-orders" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/womens" element={<Womens/>}/>
        <Route path="/kids" element={<Kids/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
