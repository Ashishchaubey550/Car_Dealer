import React from "react";
import { Link } from "react-router-dom"; 
import LOGO from '../images/LOgo.png'

const Navbar = () => {
  const navLink = [
    {name: "Home", path:"/"},
    { name: "ProductList", path:"/productList" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact Us", path: "/ContactUs" },
    { name: "Services", path: "/services" },
  ];
  return (
    <div className="max-w-screen-3xl mx-auto bg-[#2f2e2e] flex justify-evenly items-center py-6 px-20">
      <div>
        <img src={LOGO} alt="" className=" w-20 bg-white h-20"/>
      </div>
      <div>
        {navLink.map((elem, index) => (
          <Link
            key={index}
            to={elem.path}
            className=" text-white text-[1.1rem] ml-5 hover:text-[#756d6d] "
          >
            {elem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
