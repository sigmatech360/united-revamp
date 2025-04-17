import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Pricing from "../screens/Pricing";
import ContactUs from "../screens/ContactUs";
import Portfolio from "../screens/Portfolio";
import Blogs from "../screens/Blogs";

// Import your components/pages


const AppRouter = () => {
  return (
    <Router basename="/united-revamp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;