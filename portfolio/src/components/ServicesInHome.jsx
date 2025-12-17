import React, { useRef, useEffect, useState, useCallback } from 'react';
import { supabase } from './../Supabase';

import pin from '../imgs/pin.png';

const ServicesInHome = () => {
  const [houses, setHouses] = useState([]);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const fetchServices = async () => {
      const { data } = await supabase
        .from('ServicesInHome')
        .select('id, Service, Img')
        .order('id', { ascending: true });

      if (data) {
        const formattedServices = data.map((item) => ({
          id: item.id,
          title: item.Service,
          image: item.Img,
          link: `/services/${item.Service.replace(/\s+/g, '')}`
        }));
        setHouses(formattedServices);
      }
    };

    fetchServices();
  }, []);

  const checkScrollability = useCallback(() => {
    const slider = scrollContainerRef.current;
    if (slider) {
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
    if (houses.length === 0) return;

    const slider = scrollContainerRef.current;
    if (!slider) return;

    const mouseDownHandler = (e) => {
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
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;
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
  }, [houses, checkScrollability]);

  if (houses.length === 0) {
    return null;
  }

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

export default ServicesInHome;