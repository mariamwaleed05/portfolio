import React, { useEffect } from "react";

import img1 from "../imgs/1.png";
import img2 from "../imgs/2.png";
import img3 from "../imgs/3.png";
import img4 from "../imgs/4.png";
import img5 from "../imgs/5.png";
import img6 from "../imgs/6.png";
import img7 from "../imgs/7.png";
import img8 from "../imgs/8.png";

const LogosTrack = () => {
  const logos = [
    { id: 1, text: "TIRED TIES", imgUrl: img1 },
    { id: 2, text: "Platter", imgUrl: img2 },
    { id: 3, text: "QA", imgUrl: img3 },
    { id: 4, text: "S", imgUrl: img4 },
    { id: 5, text: "303", imgUrl: img5 },
    { id: 6, text: "Pixel Co", imgUrl: img6 },
    { id: 7, text: "Zenith", imgUrl: img7 },
    { id: 8, text: "Zenith", imgUrl: img8 },
  ];

  useEffect(() => {
    const marqueeApp = document.getElementById("marqueeApp");
    if (!marqueeApp) return;

    function createLogoElement(logo) {
      const div = document.createElement("div");
      div.className = "logo-circle bg-gray-900";

      const img = document.createElement("img");
      img.src = logo.imgUrl;
      img.alt = `Partner logo: ${logo.text}`;
      img.className = "w-full h-full object-cover";

      div.appendChild(img);
      div.setAttribute("aria-label", `Partner logo: ${logo.text}`);
      div.setAttribute("role", "img");

      return div;
    }

    function initializeMarquee() {
      const track = document.createElement("div");
      track.className = "marquee-track";

      // Repeat logos multiple times for the infinite scroll look
      for (let i = 0; i < 5; i++) {
        logos.forEach((logo) => {
          track.appendChild(createLogoElement(logo));
        });
      }

      marqueeApp.appendChild(track);
    }

    initializeMarquee();

    return () => {
      marqueeApp.innerHTML = "";
    };
  }, [logos]);

  return <div id="marqueeApp" className="marquee-container mx-auto"></div>;
};

export default LogosTrack;
