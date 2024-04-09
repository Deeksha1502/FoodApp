import React, { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export const Scrollbutton = () => {
  const [visible, setVisible] = useState(false);

  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 50) {
  //     setVisible(true);
  //   } else if (scrolled <= 250) {
  //     setVisible(false);
  //   }
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener(
    "scroll",
    (toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 200) {
        setVisible(true);
      } else if (scrolled <= 450) {
        setVisible(false);
      }
    }),
  );

  return (
    <div className="right-0 bottom-50">
      <button>
        <FaArrowAltCircleUp
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
          color="red"
          opacity={100}
          size={32}
        />
      </button>
    </div>
  );
};
