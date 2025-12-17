import React, { useEffect, useState } from "react";
import { supabase } from './../Supabase';

const LogosTrack = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const { data } = await supabase
        .from("BrandsCarousel")
        .select("id, Logo, AltText")
        .order("id", { ascending: true });

      if (data) {
        const formattedLogos = data.map((item) => ({
          id: item.id,
          text: item.AltText,
          imgUrl: item.Logo,
        }));
        setLogos(formattedLogos);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    if (logos.length === 0) return;

    const marqueeApp = document.getElementById("marqueeApp");
    if (!marqueeApp) return;

    marqueeApp.innerHTML = "";

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

      for (let i = 0; i < 5; i++) {
        logos.forEach((logo) => {
          track.appendChild(createLogoElement(logo));
        });
      }

      marqueeApp.appendChild(track);
    }

    initializeMarquee();

    return () => {
      if (marqueeApp) marqueeApp.innerHTML = "";
    };
  }, [logos]);

  return <div id="marqueeApp" className="marquee-container mx-auto"></div>;
};

export default LogosTrack;