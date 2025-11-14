import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nabila El Wakil",
      comment: "Thank You Mariam! Completely Changed My Brand.",
      rating: 5,
      variant: "white",
      rotation: -5
    },
    {
      id: 2,
      name: "Nabila El Wakil",
      comment: "Thank You Mariam! Completely Changed My Brand.",
      rating: 5,
      variant: "red",
      rotation: 3
    },
    {
      id: 3,
      name: "Nabila El Wakil",
      comment: "Thank You Mariam! Completely Changed My Brand.",
      rating: 5,
      variant: "red",
      rotation: -3
    },
    {
      id: 4,
      name: "Nabila El Wakil",
      comment: "Thank You Mariam! Completely Changed My Brand.",
      rating: 5,
      variant: "white",
      rotation: 2
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <span key={index} className="star" style={{animationDelay: `${index * 0.1}s`}}>★</span>
    ));
  };

  return (
    <section className="testimonials-section">
 
      
      <div className="testimonials-wrapper">
  
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`testimonial-bubble bubble-${index + 1} ${testimonial.variant}`}
            style={{transform: `rotate(${testimonial.rotation}deg)`}}
          >
            <div className="bubble-shine"></div>
            <div className="stars-row">
              {renderStars(testimonial.rating)}
            </div>
            <p className="client-name">{testimonial.name}</p>
            <p className="client-comment">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;