import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // FontAwesome icon for the Scroll to Top button
import { FaWhatsapp } from "react-icons/fa"; // FontAwesome icon for the WhatsApp button

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show buttons when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 flex gap-4 mb-10">
        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="bg-[#2f2e2e] text-white p-3 rounded-full shadow-md hover:bg-[#756d6d] transition-all duration-300"
          >
            <FaArrowUp size={20} />
          </button>
        )}

        {/* WhatsApp Button */}
        {isVisible && (
          <button
            onClick={() =>
              window.open(
                `https://wa.me/9705240491?text=${encodeURIComponent(
                  "Hello! I'm interested in purchasing a car and would like to learn more about your available options. Could you assist me with the details?"
                )}`,
                "_blank"
              )
            }
            className="bg-[#25D366] text-white p-3 rounded-full shadow-md hover:bg-[#20b357] transition-all duration-300"
          >
            <FaWhatsapp size={20} />
          </button>
        )}
      </div>
    </>
  );
};

export default ScrollToTop;
