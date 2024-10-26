import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";
import "./ContactForm.css";
import { MdMessage } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  // Handle form submission
  const onSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="body-section">
      <div className="contact-form">
        <div className="contact-btn">
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Buttons text="VIA CALL" icon={<MdOutlinePhone fontSize="24px" />} />
        </div>
        <Buttons
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdMessage fontSize="24px" />}
        />
        <form onSubmit={onSubmit} className="form">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange} // Track input change
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange} // Track input change
            />
          </div>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              rows="4"
              value={formData.text}
              onChange={handleChange} // Track input change
            />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Buttons text="Submit" />
          </div>
        </form>
      </div>
      <div className="contact-image">
        <img src="/images/background.svg" alt="contact" />
      </div>
    </section>
  );
};

export default ContactForm;
