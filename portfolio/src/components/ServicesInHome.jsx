import React, { useRef, useEffect, useState, useCallback } from 'react';

import pin from '../imgs/pin.png';
import ser1 from '../imgs/ser1.png';
import ser2 from '../imgs/ser2.png';
import ser3 from '../imgs/ser3.png';
import ser4 from '../imgs/ser4.png';
import ser5 from '../imgs/ser5.png';
import ser6 from '../imgs/ser6.png';
import ser7 from '../imgs/ser7.png';

const ServicesSection = () => {
  const houses = [
    { id: 1, title: 'UX/UI', image: ser1, link: '/services/Ux' },
    { id: 2, title: 'DESIGNS', image: ser2, link: '/services/GraphicDesign' },
    { id: 3, title: 'CONTENT\nCREATION', image: ser3, link: '/services/ContentCreation' },
    { id: 4, title: 'CODING', image: ser4, link: '/services/WebDevelopment' },
    { id: 5, title: 'MOTION\nGRAPHICS', image: ser5, link: '/services/MotionGraphics' },
    { id: 6, title: 'PHOTOGRAPHY', image: ser6, link: '/services/Photography' },
    { id: 7, title: '3D\nMODELING', image: ser7, link: '/services/Modeling' }
  ];

  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const checkScrollability = useCallback(() => {
    const slider = scrollContainerRef.current;
    if (slider) {
      // Allow a small buffer for checking scroll limits
      const buffer = 5; 
      setCanScrollLeft(slider.scrollLeft > buffer); 
      setCanScrollRight(slider.scrollLeft < slider.scrollWidth - slider.clientWidth - buffer); 
    }
  }, []);

  const scrollByAmount = useCallback((direction) => {
    const slider = scrollContainerRef.current;
    if (slider && slider.firstElementChild) {
      const firstCard = slider.firstElementChild;
      const cardWidth = firstCard.offsetWidth; 
      // Assuming a fixed gap of 30px based on common styling for such layouts.
      // Adjust if your CSS gap is different.
      const gap = 30; 

      const scrollAmount = cardWidth + gap;

      if (direction === 'left') {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }, []);

  useEffect(() => {
    const slider = scrollContainerRef.current;
    if (!slider) return;

    const mouseDownHandler = (e) => {
      // Only start dragging if it's the primary mouse button (left click)
      if (e.button !== 0) return; 
      isDragging.current = true;
      slider.classList.add('active-dragging');
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
    };

    const mouseLeaveHandler = () => {
      isDragging.current = false;
      slider.classList.remove('active-dragging');
    };

    const mouseUpHandler = () => {
      isDragging.current = false;
      slider.classList.remove('active-dragging');
    };

    const mouseMoveHandler = (e) => {
      if (!isDragging.current) return;
      e.preventDefault(); // Prevent text selection and other default behaviors
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5; // Adjust scroll speed
      slider.scrollLeft = scrollLeft.current - walk;
    };

    const handleScroll = () => {
      checkScrollability();
    };

    slider.addEventListener('mousedown', mouseDownHandler);
    slider.addEventListener('mouseleave', mouseLeaveHandler);
    slider.addEventListener('mouseup', mouseUpHandler);
    slider.addEventListener('mousemove', mouseMoveHandler);
    slider.addEventListener('scroll', handleScroll);

    // Initial check and setup for resize
    checkScrollability();
    const handleResize = () => checkScrollability();
    window.addEventListener('resize', handleResize);

    return () => {
      slider.removeEventListener('mousedown', mouseDownHandler);
      slider.removeEventListener('mouseleave', mouseLeaveHandler);
      slider.removeEventListener('mouseup', mouseUpHandler);
      slider.removeEventListener('mousemove', mouseMoveHandler);
      slider.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [checkScrollability]); // Re-run effect if checkScrollability changes

  return (
    <div className="houses-section-wrapper">
      <button
        className="scroll-arrow left"
        onClick={() => scrollByAmount('left')}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
      >
        &#9664; 
      </button>

      <div className="houses-container" ref={scrollContainerRef}>
        {houses.map((house, index) => (
          // Use an <a> tag to make the entire card clickable and linkable
          <a href={house.link} key={house.id} className="house-card-link">
            <div className="house-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={pin} alt="Pin" className="pin" />
              <div className="homme-content-double">
                <h3 className="house-title">
                  {house.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < house.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <img src={house.image} alt={house.title} className="house-image" />
              </div>
            </div>
          </a>
        ))}
      </div>

      <button
        className="scroll-arrow right"
        onClick={() => scrollByAmount('right')}
        disabled={!canScrollRight}
        aria-label="Scroll right"
      >
        &#9654; 
      </button>
    </div>
  );
};

export default ServicesSection;