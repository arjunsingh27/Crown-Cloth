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
import { Toaster } from 'react-hot-toast';
import Accessories from "./pages/Accessories";
import TermsAndConditions from './pages/TermsCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import CancellationRefundPolicy from './pages/CancellationRefundPolicy';
import { Analytics } from '@vercel/analytics/react';

 


// import 'react-toastify/dist/ReactToastify.css';

// // import { ToastContainer, toast } from 'material-react-toastify';
// // import 'material-react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="px-4 sm:px=[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <SearchBar/>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/womens" element={<Womens/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />

        <Route path='/termsandcondition' element={<TermsAndConditions/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/shippingpolicy' element={<ShippingPolicy/>}/>
        <Route path='/cancellation-refunds' element={<CancellationRefundPolicy/>}/>
        
        
      </Routes>
      <Footer/>
      <Analytics />
    </div>
  );
};

export default App;
