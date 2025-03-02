import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';  // Ensure this is correctly imported
import Navbar from './Components/Navbar';
import 'remixicon/fonts/remixicon.css';
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollTop';
import '@mantine/carousel/styles.css';
import HeroSection from './Pages/HeroSection';
import ProductList from './Pages/ProductList';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';
import BrandDetails from './Components/BrandDetails';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();  // useLocation hook is now inside the BrowserRouter context
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on route change
  }, [location]);

  return (
    <div className="relative">
      <div className='relative '>
        <Navbar />
        <Routes>
          {/* Define individual routes */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* <Route path="/services" element={<Services/>} /> */}
          <Route path="/products/:brand" element={<ProductList />} />
          <Route path="/brand/:brandName" element={<BrandDetails />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
