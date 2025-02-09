import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import HeroSection from './Components/HeroSection';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import 'remixicon/fonts/remixicon.css';
import LocomotiveScroll from 'locomotive-scroll';
import Services from './Components/Services';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollTop';
import '@mantine/carousel/styles.css';



function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="h-full w-full relative">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Define individual routes */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
        <ScrollToTop/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
