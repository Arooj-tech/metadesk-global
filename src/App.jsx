import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CaseStudy from "./pages/CaseStudy";

function AppContent() {
  const location = useLocation();

  // Global Footer sirf Home page par show hoga
  const isHomePage = location.pathname === "/";

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* SERVICES */}
        <Route path="/services" element={<Services />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* BLOG */}
        <Route path="/blog" element={<Blog />} />

        {/* BLOG DETAIL */}
        <Route
          path="/blog-detail"
          element={<BlogDetail />}
        />

        {/* CASE STUDY */}
        <Route
          path="/case-study"
          element={<CaseStudy />}
        />
      </Routes>

      {/* GLOBAL FOOTER SIRF HOME PAGE PAR */}
      {isHomePage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}