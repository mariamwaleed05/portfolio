import React, { useEffect } from "react";


const BackToTop = () => {
  useEffect(() => {
    const backToTopBtn = document.getElementById("backToTopBtn");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        backToTopBtn?.classList.add("show");
      } else {
        backToTopBtn?.classList.remove("show");
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    backToTopBtn?.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      backToTopBtn?.removeEventListener("click", handleClick);
    };
  }, []);
    
    return ( 
        <>
           <button id="backToTopBtn" title="Go to top">
        &#8593;
    </button>

        </>
     );
}
 
export default BackToTop;