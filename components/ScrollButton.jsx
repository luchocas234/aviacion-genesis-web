import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import Link from "next/link";

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const changeVisible = () => {
      if (window.scrollY > 300) {
        setVisible(false);
      } else if (window.scrollY <= 300) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", changeVisible);
  }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //     /* you can also use 'auto' behaviour
  //        in place of 'smooth' */
  //   });
  // };

  // window.addEventListener("scroll", toggleVisible);

  return (
    <Link href="/" smooth={true} duration={500}>
      <button
        className={
          visible
            ? ""
            : "scale-150 transition-all duration-1000 fixed bottom-10 sm:bottom-20 right-10 mx-auto z-40"
        }
      >
        <FaArrowCircleUp className="sm:w-10 sm:h-10 fill-orange-400 hover:scale-125 transition-all duration-500" />
      </button>
    </Link>
  );
};

export default ScrollButton;
