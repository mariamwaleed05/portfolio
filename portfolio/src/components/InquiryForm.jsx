import React from 'react';

const InquiryForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <section> {/* Assuming the form is part of a section as in your original HTML */}
      <form id="inquiryForm" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">FULL NAME</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="subject">SUBJECT</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="field">FIELD</label>
            <select id="field" name="field" required>
              <option value="Graphic Design">GRAPHIC DESIGN</option>
              <option value="UX/UI">UX/UI</option>
              <option value="Branding">BRANDING</option>
              <option value="Content Creation">CONTENT CREATION</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" className="btn">SEND INQUIRY</button>
      </form>
    </section>
  );
};

export default InquiryForm;