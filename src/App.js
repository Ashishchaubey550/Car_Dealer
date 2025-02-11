import { BrowserRouter, Route, Routes } from 'react-router-dom';
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



function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="h-full w-full relative">
      <BrowserRouter>
      <div className=' relative'>
      <Navbar />
        <Routes>
          {/* Define individual routes */}
          <Route path="/" element={<HeroSection/>} />
          <Route path="/productList" element={<ProductList/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products/:brand" element={<ProductList />} />
          <Route path="/brand/:brandName" element={<BrandDetails/>} />
          </Routes>
        <ScrollToTop/>
        <Footer/>
      </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
