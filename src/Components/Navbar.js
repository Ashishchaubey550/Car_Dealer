import React from "react";
import { Link } from "react-router-dom"; 
import LOGO from '../images/LOgo.png'
import { Button } from "@mantine/core";
import { useEffect , useState, setIsScrolled } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLink = [
    {name: "Home", path:"/"},
    { name: "ProductList", path:"/productList" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact Us", path: "/ContactUs" },
    { name: "Services", path: "/services" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={` border-b-gray-300  border w-full transition-all duration-300 ease-in justify-between px-10 py-2 z-10 fixed flex items-center & ${isScrolled ? "bg-white shadow-md " : "bg-transparent text-white "}`}>
      <div>
        <img src={LOGO} alt="" className=" w-20 bg-white h-20"/>
      </div>
      <div>
        {navLink.map((elem, index) => (
          <Link
            key={index}
            to={elem.path}
            className={`font-semibold hover:text-red-500 text-[1.2rem] ml-5 `}
          >
            {elem.name}
          </Link>
        ))}
      </div>
      <div>
        <Button className=" bg-red-500  py-3 px-4 rounded-lg text-white hover:text-black hover:bg-neutral-300 font-semibold transition-all duration-500 ease-in">+91-7987200339</Button>
      </div>
    </div>
  );
};

export default Navbar;
