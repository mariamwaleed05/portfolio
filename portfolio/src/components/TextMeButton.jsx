import React, { useEffect } from "react";

const TextMeButton = () => {
  useEffect(() => {
    const phone = "201275843440";
    const text = encodeURIComponent(
      "Hi! I found your site and would like to chat about your services."
    );

    const btn = document.getElementById("whatsapp-cta");
    if (!btn) return;

    function getWhatsAppUrl() {
      const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );
      return isMobile
        ? `https://wa.me/${phone}?text=${text}`
        : `https://web.whatsapp.com/send?phone=${phone}&text=${text}`;
    }

    // set href when mounted
    btn.setAttribute("href", getWhatsAppUrl());

    // update href when clicked (optional refresh)
    const handleClick = () => {
      btn.setAttribute("href", getWhatsAppUrl());
    };

    btn.addEventListener("click", handleClick);

    // cleanup listener
    return () => {
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <a
      id="whatsapp-cta"
      className="whatsapp-cta"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.52 3.48A11.9 11.9 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 1.94.52 3.83 1.5 5.5L.5 23.5l6.99-2.01A11.46 11.46 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-3.02-1.20-5.78-3.98-8.52zM12 20.25c-1.07 0-2.12-.27-3.04-.79l-.21-.12-4.16 1.2 1.2-4.1-.13-.22A8.25 8.25 0 113.75 11 8.17 8.17 0 0012 19.25zm4.73-6.95c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.25-.6.78-.74.94-.14.16-.28.19-.52.06a8.48 8.48 0 01-2.5-1.55 9.02 9.02 0 01-1.66-1.84c-.18-.31 0-.48.13-.62.12-.12.26-.32.39-.48.12-.16.16-.27.24-.45.08-.19.04-.36-.02-.5-.06-.13-.54-1.3-.74-1.78-.2-.47-.41-.4-.56-.4-.17 0-.35 0-.54 0s-.44.06-.67.33c-.23.27-.88.86-.88 2.08 0 1.22.9 2.4 1.03 2.57.12.17 1.78 2.8 4.3 3.92 2.53 1.12 2.53.75 2.98.7.45-.05 1.44-.58 1.64-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
      </svg>
      <span className="cta-label">Chat</span>
    </a>
  );
};

export default TextMeButton;
